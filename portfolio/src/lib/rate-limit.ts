// Best-effort in-memory limiter (per server instance). Swap for Upstash/Redis if you need strict limits.
const hits = new Map<string, number[]>();
export function isRateLimited(key: string, max = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > max;
}
