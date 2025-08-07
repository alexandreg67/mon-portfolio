import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Rate limiter interface for type safety
interface RateLimitResult {
  success: boolean;
  limit: number;
  reset: number;
  remaining: number;
}

interface RateLimiter {
  limit(identifier: string): Promise<RateLimitResult>;
}

// Redis configuration for rate limiting
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// Memory fallback store when Redis is not configured
const memoryStore = new Map();

class MemoryRateLimit implements RateLimiter {
  private store = memoryStore;
  private maxRequests: number;
  private windowMs: number;

  constructor(limit: number, windowMs: number) {
    this.maxRequests = limit;
    this.windowMs = windowMs;
  }

  async limit(identifier: string): Promise<RateLimitResult> {
    const now = Date.now();
    const key = `ratelimit_${identifier}`;
    const windowStart = now - this.windowMs;
    
    // Nettoyer les anciens enregistrements
    const existing = this.store.get(key) || [];
    const filtered = existing.filter((timestamp: number) => timestamp > windowStart);
    
    if (filtered.length >= this.maxRequests) {
      return {
        success: false,
        limit: this.maxRequests,
        reset: Math.min(...filtered) + this.windowMs,
        remaining: 0
      };
    }

    // Ajouter la nouvelle requête
    filtered.push(now);
    this.store.set(key, filtered);

    return {
      success: true,
      limit: this.maxRequests,
      reset: now + this.windowMs,
      remaining: this.maxRequests - filtered.length
    };
  }
}

// Global rate limiter (by IP) - 10 requests per 10 minutes
export const globalRateLimit: RateLimiter = redis 
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(10, "10 m"),
      analytics: true,
    }) as RateLimiter
  : new MemoryRateLimit(10, 10 * 60 * 1000);

// Email rate limiter - 3 emails per hour per address
export const emailRateLimit: RateLimiter = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(3, "1 h"),
      analytics: true,
    }) as RateLimiter
  : new MemoryRateLimit(3, 60 * 60 * 1000);

// Strict rate limiter for spam detection - 15 attempts per day max
export const strictRateLimit: RateLimiter = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.fixedWindow(15, "1 d"),
      analytics: true,
    }) as RateLimiter
  : new MemoryRateLimit(15, 24 * 60 * 60 * 1000);