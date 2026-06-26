type CacheEntry = {
  answer: string
  expiresAt: number
}

const cache = new Map<string, CacheEntry>()
const CACHE_TTL_MS = 5 * 60 * 1000

export function getCachedAnswer(key: string, now = Date.now()) {
  const entry = cache.get(key)
  if (!entry) return null

  if (entry.expiresAt < now) {
    cache.delete(key)
    return null
  }

  return entry.answer
}

export function setCachedAnswer(key: string, answer: string, now = Date.now()) {
  cache.set(key, {
    answer,
    expiresAt: now + CACHE_TTL_MS,
  })
}

export function normalizeCacheKey(message: string) {
  return message.trim().toLowerCase().replace(/\s+/g, ' ')
}
