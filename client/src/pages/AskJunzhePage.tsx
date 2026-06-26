import { useState } from 'react'
import type { FormEvent } from 'react'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useAssistant } from '../features/assistant/useAssistant'

const suggestedPrompts = [
  'What did Junzhe build in Atlas?',
  'What is PDR AI?',
  'What research has Junzhe done?',
  'What technologies does Junzhe use?',
]

export function AskJunzhePage() {
  const [prompt, setPrompt] = useState('')
  const { messages, isLoading, error, canSend, sendMessage } = useAssistant()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!prompt.trim()) return
    await sendMessage(prompt)
    setPrompt('')
  }

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/15 bg-slate-900/80 p-6 md:p-8">
        <SectionTitle
          eyebrow="Website-only Feature"
          title="Ask Junzhe AI"
          subtitle="This assistant is portfolio-specific and grounded in public project and research materials. It is not a general-purpose chatbot."
        />
        <p className="mt-4 text-sm text-slate-300">
          Backend note: messages go through the local server-side API route before
          Hermes, so provider keys never touch the browser.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-2xl border border-white/15 bg-slate-900/75 p-5">
          <h3 className="text-lg font-semibold text-white">Suggested prompts</h3>
          <div className="mt-3 grid gap-2">
            {suggestedPrompts.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => {
                  void sendMessage(example)
                }}
                className="rounded-lg border border-white/15 bg-slate-950/50 px-3 py-2 text-left text-sm text-slate-200 transition hover:border-cyan-200/45 hover:text-cyan-100"
              >
                {example}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex min-h-[34rem] flex-col rounded-2xl border border-white/15 bg-slate-900/75">
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.role === 'assistant' ? 'mr-8' : 'ml-8'}
              >
                <div
                  className={[
                    'rounded-2xl px-4 py-3 text-sm leading-relaxed',
                    message.role === 'assistant'
                      ? 'border border-cyan-200/30 bg-cyan-200/10 text-slate-100'
                      : 'border border-white/20 bg-slate-950/70 text-slate-200',
                  ].join(' ')}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading ? (
              <div className="mr-8 rounded-2xl border border-cyan-200/30 bg-cyan-200/10 px-4 py-3 text-sm text-slate-200">
                Thinking through portfolio materials...
              </div>
            ) : null}
            {error ? (
              <div className="mr-8 rounded-2xl border border-amber-200/25 bg-amber-200/10 px-4 py-3 text-sm text-amber-100">
                {error}
              </div>
            ) : null}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 p-3"
          >
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                placeholder="Ask about Atlas, PDR AI, research, or technologies"
                className="h-11 flex-1 rounded-xl border border-white/15 bg-slate-950/60 px-3 text-sm text-white outline-none ring-cyan-200/60 placeholder:text-slate-500 focus:ring"
              />
              <button
                type="submit"
                disabled={!canSend || !prompt.trim()}
                className="h-11 rounded-xl bg-cyan-300 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-cyan-200/60"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
