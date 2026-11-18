import type { AssistantApiPayload, AssistantApiResponse } from './types'

const API_PATH = '/api/chat'

export async function askJunzheAssistant(
  payload: AssistantApiPayload,
): Promise<AssistantApiResponse> {
  const response = await fetch(API_PATH, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = (await response.json().catch(() => ({}))) as AssistantApiResponse

  if (!response.ok || data.error) {
    throw new Error(data.error || 'The assistant is unavailable right now. Email works too: jshi70@jh.edu')
  }

  return data
}
