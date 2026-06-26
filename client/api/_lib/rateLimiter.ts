type Bucket = {
  minuteCount: number
  minuteResetAt: number
  dayCount: number
  dayResetAt: number
}

const buckets = new Map<string, Bucket>()

const MINUTE_LIMIT = 8
const DAY_LIMIT = 80
const MINUTE_MS = 60 * 1000
const DAY_MS = 24 * 60 * 60 * 1000

export function checkRateLimit(ip: string, now = Date.now()) {
  const existing =
    buckets.get(ip) ??
    {
      minuteCount: 0,
      minuteResetAt: now + MINUTE_MS,
      dayCount: 0,
      dayResetAt: now + DAY_MS,
    }

  if (now > existing.minuteResetAt) {
    existing.minuteCount = 0
    existing.minuteResetAt = now + MINUTE_MS
  }

  if (now > existing.dayResetAt) {
    existing.dayCount = 0
    existing.dayResetAt = now + DAY_MS
  }

  existing.minuteCount += 1
  existing.dayCount += 1
  buckets.set(ip, existing)

  if (existing.minuteCount > MINUTE_LIMIT) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.minuteResetAt - now) / 1000),
      message:
        'Ask Junzhe is getting a lot of questions from your connection. Please wait about a minute and try again.',
    }
  }

  if (existing.dayCount > DAY_LIMIT) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.dayResetAt - now) / 1000),
      message:
        'You’ve reached today’s Ask Junzhe question limit from this connection. Please try again tomorrow.',
    }
  }

  return { allowed: true, retryAfterSeconds: 0, message: '' }
}
