import type { AssistantChatMessage } from './types.js'

const HERMES_MODEL = 'gpt-5.4-mini'
const REQUEST_TIMEOUT_MS = 45_000

export async function callHermesChat(messages: AssistantChatMessage[]) {
  const apiUrl = process.env.HERMES_API_URL
  const apiKey = process.env.HERMES_API_KEY

  if (!apiUrl || !apiKey) {
    throw new Error('Hermes is not configured')
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, '')}/v1/chat/completions`, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: HERMES_MODEL,
        messages,
        stream: false,
        max_completion_tokens: 400,
      }),
    })

    if (!response.ok) {
      throw new Error(`Hermes request failed with ${response.status}`)
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>
    }

    const answer = data.choices?.[0]?.message?.content?.trim()

    if (!answer) {
      throw new Error('Hermes returned an empty answer')
    }

    return answer
  } finally {
    clearTimeout(timeout)
  }
}
