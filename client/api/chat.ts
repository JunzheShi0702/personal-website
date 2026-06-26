import { getCachedAnswer, normalizeCacheKey, setCachedAnswer } from './_lib/cache'
import { callHermesChat } from './_lib/hermesClient'
import { buildSystemPrompt, findSecurityIssue } from './_lib/promptSecurity'
import { checkRateLimit } from './_lib/rateLimiter'
import type { AssistantChatMessage, ChatRequestBody } from './_lib/types'
import { getRelevantJunzheContext } from './_lib/knowledge'

type VercelRequest = {
  method?: string
  body: unknown
  headers: Record<string, string | string[] | undefined>
  socket: { remoteAddress?: string }
}

type VercelResponse = {
  setHeader(name: string, value: string): void
  status(code: number): { json(body: unknown): void }
}

export const config = {
  maxDuration: 60,
}

const MAX_MESSAGE_LENGTH = 1200
const MAX_HISTORY_MESSAGES = 12

function getClientIp(req: VercelRequest) {
  const forwardedFor = req.headers['x-forwarded-for']
  if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown'
  }

  return req.socket.remoteAddress ?? 'unknown'
}

function validateBody(body: ChatRequestBody | undefined) {
  if (!body || typeof body.message !== 'string' || body.message.trim().length === 0) {
    return { ok: false as const, error: 'Please enter a question before sending.' }
  }

  const message = body.message.trim()

  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      ok: false as const,
      error: `Please keep your question under ${MAX_MESSAGE_LENGTH} characters.`,
    }
  }

  if (body.history !== undefined && !Array.isArray(body.history)) {
    return { ok: false as const, error: 'Conversation history was not in the expected format.' }
  }

  const history = Array.isArray(body.history) ? body.history : []

  if (history.length > MAX_HISTORY_MESSAGES) {
    return {
      ok: false as const,
      error: `Please keep the conversation history to ${MAX_HISTORY_MESSAGES} messages or fewer.`,
    }
  }

  const sanitizedHistory: AssistantChatMessage[] = history
    .filter((entry): entry is { role: 'user' | 'assistant'; content: string } => {
      if (!entry || typeof entry !== 'object') return false
      const maybeEntry = entry as { role?: unknown; content?: unknown }
      return (
        (maybeEntry.role === 'user' || maybeEntry.role === 'assistant') &&
        typeof maybeEntry.content === 'string' &&
        maybeEntry.content.trim().length > 0
      )
    })
    .slice(-MAX_HISTORY_MESSAGES)
    .map((entry) => ({
      role: entry.role,
      content: entry.content.trim().slice(0, MAX_MESSAGE_LENGTH),
    }))

  return { ok: true as const, message, history: sanitizedHistory }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Ask Junzhe accepts POST requests only.' })
  }

  const rateLimit = checkRateLimit(getClientIp(req))
  if (!rateLimit.allowed) {
    res.setHeader('Retry-After', String(rateLimit.retryAfterSeconds))
    return res.status(429).json({ error: rateLimit.message })
  }

  const validation = validateBody(req.body as ChatRequestBody)
  if (!validation.ok) {
    return res.status(400).json({ error: validation.error })
  }

  const securityIssue = findSecurityIssue(validation.message)
  if (securityIssue) {
    return res.status(200).json({ answer: securityIssue })
  }

  const cacheKey = normalizeCacheKey(validation.message)
  const cachedAnswer = getCachedAnswer(cacheKey)
  if (cachedAnswer) {
    return res.status(200).json({ answer: cachedAnswer, cached: true })
  }

  try {
    const context = getRelevantJunzheContext(validation.message)
    const messages: AssistantChatMessage[] = [
      buildSystemPrompt(context),
      ...validation.history,
      { role: 'user', content: validation.message },
    ]

    const answer = await callHermesChat(messages)
    setCachedAnswer(cacheKey, answer)

    return res.status(200).json({ answer })
  } catch {
    return res.status(502).json({
      error:
        'Ask Junzhe could not reach the AI service right now. Please try again in a moment.',
    })
  }
}
