import { MessageCircle, Minus, Send, Sparkles, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'
import { useAssistant } from './useAssistant'

const starterQuestions = [
  'What projects has Junzhe built?',
  'What are Junzhe’s research interests?',
  'Tell me about Atlas.',
  'What AI/ML experience does Junzhe have?',
  'How can I contact Junzhe?',
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const { messages, isLoading, error, canSend, sendMessage } = useAssistant()
  const scrollRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!isOpen) return
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isLoading, error, isOpen])

  useEffect(() => {
    if (!isOpen) return
    window.setTimeout(() => textareaRef.current?.focus(), 100)
  }, [isOpen])

  async function submitMessage(message = draft) {
    const trimmed = message.trim()
    if (!trimmed || !canSend) return
    setDraft('')
    await sendMessage(trimmed)
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
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section className="flex h-[min(42rem,calc(100vh-2rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-950/95 text-slate-100 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:w-[26rem]">
          <header className="border-b border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20">
                    <Sparkles size={18} />
                  </span>
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Ask Junzhe
                    </h2>
                    <p className="text-xs text-slate-400">Portfolio-only AI assistant</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Minimize Ask Junzhe"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-200/40 hover:text-white"
                >
                  <Minus size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Close Ask Junzhe"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-200/40 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <article
                key={message.id}
                className={[
                  'flex',
                  message.role === 'assistant' ? 'justify-start' : 'justify-end',
                ].join(' ')}
              >
                <div
                  className={[
                    'max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed',
                    message.role === 'assistant'
                      ? 'border border-cyan-200/20 bg-cyan-200/10 text-slate-100'
                      : 'border border-white/10 bg-white/10 text-white',
                  ].join(' ')}
                >
                  {message.content}
                </div>
              </article>
            ))}

            {messages.length === 0 ? (
              <div className="grid gap-2 pt-1">
                <p className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs leading-relaxed text-slate-400">
                  Ask about Junzhe’s projects, research, skills, or contact info.
                  Replies are generated through the deployed API.
                </p>
                {starterQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void submitMessage(question)}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-left text-xs text-slate-300 transition hover:border-cyan-200/40 hover:bg-cyan-200/10 hover:text-cyan-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            ) : null}

            {isLoading ? (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl border border-cyan-200/20 bg-cyan-200/10 px-4 py-3 text-xs text-slate-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-200" />
                  Reading the public portfolio context...
                </div>
              </div>
            ) : null}

            {error ? (
              <div className="rounded-2xl border border-amber-200/20 bg-amber-200/10 px-4 py-3 text-sm text-amber-100">
                {error}
              </div>
            ) : null}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-white/10 p-3">
            <label htmlFor="ask-junzhe-message" className="sr-only">
              Ask Junzhe a question
            </label>
            <div className="flex items-end gap-2 rounded-2xl border border-white/12 bg-slate-900/90 p-2 focus-within:border-cyan-200/50">
              <textarea
                ref={textareaRef}
                id="ask-junzhe-message"
                value={draft}
                maxLength={1200}
                rows={2}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about projects, research, skills..."
                className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={!canSend || !draft.trim()}
                className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </div>
            <p className="mt-2 px-1 text-[11px] text-slate-500">
              Enter sends. Shift+Enter adds a new line.
            </p>
          </form>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-cyan-200/30 bg-slate-950/90 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(8,47,73,0.38)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-slate-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-slate-950 transition group-hover:bg-cyan-200">
            <MessageCircle size={17} />
          </span>
          Ask Junzhe
        </button>
      )}
    </div>
  )
}
