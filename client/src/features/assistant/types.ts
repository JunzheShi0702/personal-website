export type AssistantRole = 'user' | 'assistant'

export type AssistantMessage = {
  id: string
  role: AssistantRole
  content: string
  createdAt: number
}

export type AssistantApiPayload = {
  message: string
  history: Pick<AssistantMessage, 'role' | 'content'>[]
}

export type AssistantApiResponse = {
  answer: string
  error?: string
  sources?: string[]
}
