import { useMemo, useState } from 'react'
import { askJunzheAssistant } from './api'
import type { AssistantMessage } from './types'

export function useAssistant() {
  const [messages, setMessages] = useState<AssistantMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canSend = useMemo(() => !isLoading, [isLoading])

  async function sendMessage(prompt: string) {
    const trimmedPrompt = prompt.trim()
    if (!trimmedPrompt || isLoading) return

    const userMessage: AssistantMessage = {
      id: `user-${crypto.randomUUID()}`,
      role: 'user',
      content: trimmedPrompt,
      createdAt: Date.now(),
    }

    const history = [...messages, userMessage]
    setMessages(history)
    setError(null)
    setIsLoading(true)

    try {
      const response = await askJunzheAssistant({
        message: trimmedPrompt,
        history: messages
          .slice(-6)
          .map(({ role, content }) => ({ role, content })),
      })

      const assistantMessage: AssistantMessage = {
        id: `assistant-${crypto.randomUUID()}`,
        role: 'assistant',
        content: response.answer,
        createdAt: Date.now(),
      }

      setMessages((current) => [...current, assistantMessage])
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : 'Ask Junzhe is unavailable right now.'
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return { messages, isLoading, error, canSend, sendMessage }
}
