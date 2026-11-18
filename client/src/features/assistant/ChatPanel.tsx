import { Send, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'
import { linkClass } from '../../components/ui/linkStyles'
import type { AssistantMessage } from './types'

const starterQuestions = [
  'What is the REACH project?',
  'What did Junzhe build for Atlas?',
  'What research did Junzhe do before Johns Hopkins?',
  'How can I contact Junzhe?',
]

const iconButtonClass =
  'inline-flex h-8 w-8 items-center justify-center rounded-[4px] text-ink-muted transition-colors duration-150 hover:bg-paper-sunken hover:text-ink'

function AssistantMarkdown({ content }: { content: string }) {
  return (
    <div className="space-y-2 break-words [overflow-wrap:anywhere]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {children}
            </a>
          ),
          p: ({ children }) => <p className="my-0">{children}</p>,
          ul: ({ children }) => <ul className="my-1.5 list-disc space-y-1 pl-4">{children}</ul>,
          ol: ({ children }) => <ol className="my-1.5 list-decimal space-y-1 pl-4">{children}</ol>,
          li: ({ children }) => <li className="pl-1 marker:text-ink-subtle">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          code: ({ children }) => (
            <code className="rounded-[4px] bg-paper px-1 py-0.5 font-mono text-[0.85em]">{children}</code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

type ChatPanelProps = {
  messages: AssistantMessage[]
  isLoading: boolean
  error: string | null
  canSend: boolean
  onSend: (message: string) => Promise<void>
  onClose: () => void
}

export default function ChatPanel({
  messages,
  isLoading,
  error,
  canSend,
  onSend,
  onClose,
}: ChatPanelProps) {
  const [draft, setDraft] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [messages, isLoading, error])

  useEffect(() => {
    textareaRef.current?.focus()
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  async function submitMessage(message = draft) {
    const trimmed = message.trim()
    if (!trimmed || !canSend) return
    setDraft('')
    await onSend(trimmed)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await submitMessage()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== 'Enter' || event.shiftKey) return
    event.preventDefault()
    void submitMessage()
  }

  return (
    <section
      aria-label="Ask about my work"
      className="fixed inset-x-4 bottom-4 z-40 flex h-[min(36rem,calc(100dvh-2rem))] flex-col overflow-hidden rounded-xl border border-rule bg-paper-raised text-ink shadow-overlay sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[24rem]"
    >
      <header className="flex items-start justify-between gap-4 border-b border-rule px-4 py-3">
        <div>
          <h2 className="t-ui text-ink">Ask about my work</h2>
          <p className="t-caption text-ink-subtle">
            An AI assistant that answers from the public content of this site.
          </p>
        </div>
        <button type="button" aria-label="Close the assistant" onClick={onClose} className={iconButtonClass}>
          <X aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
        </button>
      </header>

      <div ref={scrollRef} className="t-caption flex-1 space-y-3 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="space-y-2">
            <p className="text-ink-muted">Ask about my research, projects or how to reach me. For example:</p>
            <ul className="space-y-2">
              {starterQuestions.map((question) => (
                <li key={question}>
                  <button
                    type="button"
                    onClick={() => void submitMessage(question)}
                    className="w-full rounded-lg border border-rule px-3 py-2 text-left text-ink transition-colors duration-150 hover:border-rule-control hover:bg-paper-sunken"
                  >
                    {question}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {messages.map((message) => (
          <div
            key={message.id}
            className={message.role === 'assistant' ? 'flex justify-start' : 'flex justify-end'}
          >
            <div
              className={
                message.role === 'assistant'
                  ? 'max-w-[88%] rounded-lg bg-paper-sunken px-3 py-2 text-ink'
                  : 'max-w-[88%] whitespace-pre-wrap break-words rounded-lg bg-accent-tint px-3 py-2 text-ink'
              }
            >
              {message.role === 'assistant' ? <AssistantMarkdown content={message.content} /> : message.content}
            </div>
          </div>
        ))}

        {isLoading ? <p className="text-ink-subtle">Writing a reply...</p> : null}

        {error ? (
          <p role="alert" className="rounded-lg border border-rule bg-paper-sunken px-3 py-2 text-ink">
            {error}
          </p>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-rule p-3">
        <label htmlFor="assistant-message" className="sr-only">
          Your question
        </label>
        <div className="flex items-end gap-2">
          <textarea
            ref={textareaRef}
            id="assistant-message"
            value={draft}
            maxLength={1200}
            rows={2}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a question"
            className="t-caption max-h-28 min-h-10 flex-1 resize-none rounded-[4px] border border-rule-control bg-paper px-3 py-2 text-ink placeholder:text-ink-subtle focus-visible:border-accent"
          />
          <button
            type="submit"
            disabled={!canSend || !draft.trim()}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-accent text-on-accent transition-colors duration-150 hover:bg-accent-strong disabled:cursor-not-allowed disabled:bg-paper-sunken disabled:text-ink-subtle"
            aria-label="Send"
          >
            <Send aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />
          </button>
        </div>
        <p className="t-caption mt-2 text-ink-subtle">Enter to send, Shift+Enter for a new line.</p>
      </form>
    </section>
  )
}
