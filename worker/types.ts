export interface Env {
  RAW_GAMES_KV: KVNamespace;
  RATE_LIMIT_KV: KVNamespace;
  RAWG_API_KEY: string;
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export interface RateLimitEntry {
  count: number;
  resetAt: number;
}
