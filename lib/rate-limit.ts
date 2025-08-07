import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Interface du limiteur de taux pour la sécurité des types
interface RateLimitResult {
  success: boolean;
  limit: number;
  reset: number;
  remaining: number;
}

interface RateLimiter {
  limit(identifier: string): Promise<RateLimitResult>;
}

// Configuration Redis pour la limitation de taux
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

// Stockage mémoire de secours quand Redis n'est pas configuré
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
    const filtered = existing.filter(
      (timestamp: number) => timestamp > windowStart,
    );

    if (filtered.length >= this.maxRequests) {
      return {
        success: false,
        limit: this.maxRequests,
        reset: Math.min(...filtered) + this.windowMs,
        remaining: 0,
      };
    }

    // Ajouter la nouvelle requête
    filtered.push(now);
    this.store.set(key, filtered);

    return {
      success: true,
      limit: this.maxRequests,
      reset: now + this.windowMs,
      remaining: this.maxRequests - filtered.length,
    };
  }
}

// Adaptateur pour Upstash Ratelimit pour correspondre à l'interface RateLimiter
class UpstashRateLimiterAdapter implements RateLimiter {
  private ratelimit: Ratelimit;
  private maxRequests: number;

  constructor(ratelimit: Ratelimit, maxRequests: number) {
    this.ratelimit = ratelimit;
    this.maxRequests = maxRequests;
  }

  async limit(identifier: string): Promise<RateLimitResult> {
    const result = await this.ratelimit.limit(identifier);
    // Mapper le résultat Upstash vers notre interface RateLimitResult
    return {
      success: result.success,
      limit: this.maxRequests,
      reset: result.reset, // Upstash retourne un timestamp unix en millisecondes
      remaining: result.remaining,
    };
  }
}

// Limiteur de taux global (par IP) - 10 requêtes par 10 minutes
export const globalRateLimit: RateLimiter = redis
  ? new UpstashRateLimiterAdapter(
      new Ratelimit({
        redis: redis,
        limiter: Ratelimit.slidingWindow(10, "10 m"),
        analytics: true,
      }),
      10,
    )
  : new MemoryRateLimit(10, 10 * 60 * 1000);

// Limiteur de taux email - 3 emails par heure par adresse
export const emailRateLimit: RateLimiter = redis
  ? new UpstashRateLimiterAdapter(
      new Ratelimit({
        redis: redis,
        limiter: Ratelimit.slidingWindow(3, "1 h"),
        analytics: true,
      }),
      3,
    )
  : new MemoryRateLimit(3, 60 * 60 * 1000);

// Limiteur de taux strict pour la détection de spam - 15 tentatives par jour maximum
export const strictRateLimit: RateLimiter = redis
  ? new UpstashRateLimiterAdapter(
      new Ratelimit({
        redis: redis,
        limiter: Ratelimit.fixedWindow(15, "1 d"),
        analytics: true,
      }),
      15,
    )
  : new MemoryRateLimit(15, 24 * 60 * 60 * 1000);
