import { ArrowUpRight } from 'lucide-react'
import { publications, researchTracks } from '../content/siteContent'

const methodThreads = [
  {
    label: 'Model',
    description: 'Turn a scientific question into measurable variables and assumptions.',
  },
  {
    label: 'Interrogate',
    description: 'Test results against noise, confounders, and limitations in the evidence.',
  },
  {
    label: 'Communicate',
    description: 'Make the method and conclusion inspectable through figures, prose, and provenance.',
  },
]

export function ResearchPage() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-3xl border border-white/15 bg-slate-950/80">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
          <div className="p-6 md:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
              Research
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Scientific modeling for decisions under uncertainty
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              My research spans computational physics, astronomy, materials science,
              and healthcare. Across those domains, I return to the same problem:
              turning incomplete or complex evidence into conclusions people can
              inspect and use.
            </p>
            <nav className="mt-7 flex flex-wrap gap-3" aria-label="Research page sections">
              <a
                href="#research-tracks"
                className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Research tracks
              </a>
              <a
                href="#publications"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-200/60 hover:text-white"
              >
                Selected publications
              </a>
            </nav>
          </div>

          <div className="border-t border-white/10 bg-gradient-to-br from-cyan-300/10 via-violet-400/10 to-transparent p-6 md:p-8 lg:border-l lg:border-t-0">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
              Method transfer
            </p>
            <div className="mt-5 space-y-5">
              {methodThreads.map((thread, index) => (
                <div key={thread.label} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="font-mono text-sm text-cyan-200/70">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{thread.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {thread.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="research-tracks" className="scroll-mt-28">
        <div className="flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/70">
              Research tracks
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Questions, contributions, and outcomes
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400">
            Ordered from current work backward to show how evidence review,
            quantitative modeling, and scientific communication developed over time.
          </p>
        </div>

        <div className="relative mt-6 space-y-5 before:absolute before:bottom-8 before:left-[1.05rem] before:top-8 before:w-px before:bg-gradient-to-b before:from-cyan-300/50 before:via-violet-300/30 before:to-transparent md:before:left-[8.45rem]">
          {researchTracks.map((track, index) => (
            <article
              key={track.id}
              className="relative grid gap-4 pl-12 md:grid-cols-[7rem_1fr] md:pl-0"
            >
              <div className="md:pt-6">
                <p className="font-mono text-xs text-slate-500">{track.period}</p>
                <span className="absolute left-2 top-6 grid h-6 w-6 place-items-center rounded-full border border-cyan-200/45 bg-slate-950 font-mono text-[10px] text-cyan-100 md:left-[7.7rem]">
                  {index + 1}
                </span>
              </div>

              <div className="rounded-3xl border border-white/15 bg-slate-900/70 p-5 md:p-6">
                <h3 className="text-xl font-semibold text-white">{track.title}</h3>
                <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/65">
                      Research question
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {track.question}
                    </p>

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200/70">
                      My contribution
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      {track.contribution}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Methods
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {track.methods.map((method) => (
                        <li key={method} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {track.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="scroll-mt-28">
        <div className="border-b border-white/10 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200/70">
            Selected publications
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Published outputs connected to the research
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
            Work across materials science, computational physics, and astronomy,
            presented with the contribution behind each paper rather than as a DOI list.
          </p>
        </div>

        <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/15 bg-slate-900/70">
          {publications.map((paper, index) => (
            <article
              key={paper.doi}
              className="grid gap-5 p-5 transition hover:bg-white/[0.025] md:grid-cols-[3rem_1fr_auto] md:items-start md:p-6"
            >
              <p className="font-mono text-sm text-cyan-200/65">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {paper.venue} · {paper.year}
                </p>
                <h3 className="mt-2 max-w-4xl text-lg font-semibold leading-snug text-white">
                  {paper.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {paper.context}
                </p>
                <div className="mt-4 grid gap-3 lg:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-slate-950/45 p-3">
                    <p className="text-xs font-semibold text-violet-100">My contribution</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {paper.contribution}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/45 p-3">
                    <p className="text-xs font-semibold text-cyan-100">Research track</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {paper.researchTrack}
                    </p>
                  </div>
                </div>
                <p className="mt-4 font-mono text-xs text-slate-500">
                  DOI {paper.doi}
                </p>
              </div>
              {paper.link ? (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${paper.title}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-100 transition hover:text-white"
                >
                  Open paper
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
