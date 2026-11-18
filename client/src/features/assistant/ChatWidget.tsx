import { MessageCircle } from 'lucide-react'
import { Suspense, lazy, useCallback, useState } from 'react'
import { useAssistant } from './useAssistant'

// The panel pulls in the markdown renderer, so it loads only when someone opens it.
const loadPanel = () => import('./ChatPanel')
const ChatPanel = lazy(loadPanel)

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, isLoading, error, canSend, sendMessage } = useAssistant()
  const close = useCallback(() => setIsOpen(false), [])

  if (isOpen) {
    return (
      <Suspense fallback={null}>
        <ChatPanel
          messages={messages}
          isLoading={isLoading}
          error={error}
          canSend={canSend}
          onSend={sendMessage}
          onClose={close}
        />
      </Suspense>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      onPointerEnter={() => void loadPanel()}
      onFocus={() => void loadPanel()}
      aria-label="Ask about my work"
      className="t-ui fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-rule-control bg-paper-raised p-3 text-ink shadow-overlay transition-colors duration-150 hover:border-ink-muted sm:bottom-6 sm:right-6 sm:px-4 sm:py-2.5"
    >
      <MessageCircle aria-hidden="true" strokeWidth={1.75} className="h-4 w-4 text-accent" />
      <span className="hidden sm:inline">Ask about my work</span>
    </button>
  )
}
