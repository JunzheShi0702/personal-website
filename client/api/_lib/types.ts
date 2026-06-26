export type AssistantChatRole = 'system' | 'user' | 'assistant'

export type AssistantChatMessage = {
  role: AssistantChatRole
  content: string
}

export type ChatRequestBody = {
  message?: unknown
  history?: unknown
}

export type ChatSuccessResponse = {
  answer: string
}

export type ChatErrorResponse = {
  error: string
}
