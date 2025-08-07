import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Configuration Redis pour le rate limiting
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// Fallback en mémoire si Redis n'est pas configuré
const memoryStore = new Map();

class MemoryRateLimit {
  private store = memoryStore;
  private maxRequests: number;
  private windowMs: number;

  constructor(limit: number, windowMs: number) {
    this.maxRequests = limit;
    this.windowMs = windowMs;
  }

  async limit(identifier: string) {
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

// Rate limiter global (par IP)
export const globalRateLimit = redis 
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(10, "10 m"), // 10 requêtes par 10 minutes
      analytics: true,
    })
  : new MemoryRateLimit(10, 10 * 60 * 1000) as any;

// Rate limiter par email
export const emailRateLimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(3, "1 h"), // 3 emails par heure par adresse
      analytics: true,
    })
  : new MemoryRateLimit(3, 60 * 60 * 1000) as any;

// Rate limiter strict pour détection de spam
export const strictRateLimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.fixedWindow(15, "1 d"), // 15 tentatives par jour max
      analytics: true,
    })
  : new MemoryRateLimit(15, 24 * 60 * 60 * 1000) as any;