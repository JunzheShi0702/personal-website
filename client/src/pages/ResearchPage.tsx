import { useState } from 'react'
import { SectionTitle } from '../components/ui/SectionTitle'
import { researchTracks } from '../content/siteContent'

export function ResearchPage() {
  const [expandedId, setExpandedId] = useState<string>(researchTracks[0]?.id ?? '')

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/15 bg-slate-900/80 p-6 md:p-8">
        <SectionTitle
          eyebrow="Research Journey"
          title="From cosmos to clinics: a cross-domain research arc"
          subtitle="This section emphasizes method transfer across domains, not just chronological listing. Open each track for focus, methods, and impact."
        />
      </section>

      <section className="grid gap-4">
        {researchTracks.map((track, index) => {
          const isExpanded = expandedId === track.id
          return (
            <article
              key={track.id}
              className="rounded-2xl border border-white/15 bg-slate-900/75 p-5"
            >
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? '' : track.id)}
                className="flex w-full items-start justify-between gap-4 text-left"
                aria-expanded={isExpanded}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
                    Track {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{track.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{track.period}</p>
                </div>
                <span className="rounded-full border border-white/20 px-2 py-1 text-xs text-slate-300">
                  {isExpanded ? 'Collapse' : 'Expand'}
                </span>
              </button>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">{track.focus}</p>

              {isExpanded ? (
                <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1fr]">
                  <div className="rounded-xl border border-white/10 bg-slate-950/55 p-4">
                    <p className="text-sm font-semibold text-cyan-100">Methods</p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-300">
                      {track.methods.map((method) => (
                        <li key={method}>{method}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/55 p-4">
                    <p className="text-sm font-semibold text-cyan-100">Research Impact</p>
                    <p className="mt-2 text-sm text-slate-300">{track.impact}</p>
                  </div>
                </div>
              ) : null}
            </article>
          )
        })}
      </section>
    </div>
  )
}
