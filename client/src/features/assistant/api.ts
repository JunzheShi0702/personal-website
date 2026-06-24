import { getMockAssistantAnswer } from './mockKnowledge'
import type { AssistantApiPayload, AssistantApiResponse } from './types'

const API_PATH = '/api/assistant'

export async function askJunzheAssistant(
  payload: AssistantApiPayload,
): Promise<AssistantApiResponse> {
  try {
    const response = await fetch(API_PATH, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error('Assistant endpoint unavailable')
    }

    return (await response.json()) as AssistantApiResponse
  } catch {
    // Fallback enables UI iteration before backend/RAG service is online.
    return {
      answer: getMockAssistantAnswer(payload.prompt),
      sources: ['portfolio-public-content'],
    }
  }
}
