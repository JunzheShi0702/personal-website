export type AssistantRole = 'user' | 'assistant'

export type AssistantMessage = {
  id: string
  role: AssistantRole
  content: string
  createdAt: number
}

export type AssistantApiPayload = {
  prompt: string
  history: AssistantMessage[]
}

export type AssistantApiResponse = {
  answer: string
  sources?: string[]
}
