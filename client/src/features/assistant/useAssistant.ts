import { useMemo, useState } from 'react'
import { askJunzheAssistant } from './api'
import type { AssistantMessage } from './types'

const initialMessage: AssistantMessage = {
  id: 'boot',
  role: 'assistant',
  content:
    'I am the Ask Junzhe AI portfolio assistant. I answer questions about projects, research, publications, and technical decisions based on public portfolio materials.',
  createdAt: Date.now(),
}

export function useAssistant() {
  const [messages, setMessages] = useState<AssistantMessage[]>([initialMessage])
  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)

    try {
      const response = await askJunzheAssistant({
        prompt: trimmedPrompt,
        history,
      })

      const assistantMessage: AssistantMessage = {
        id: `assistant-${crypto.randomUUID()}`,
        role: 'assistant',
        content: response.answer,
        createdAt: Date.now(),
      }

      setMessages((current) => [...current, assistantMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return { messages, isLoading, canSend, sendMessage }
}
