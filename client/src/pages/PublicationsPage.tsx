import { ArrowUpRight } from 'lucide-react'
import { publications } from '../content/siteContent'

function bibtexKey(title: string, year: string) {
  const firstWord = title.split(/\s+/)[0]?.replace(/[^a-zA-Z]/g, '') || 'paper'
  return `shi${year}${firstWord}`
}

export function PublicationsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/15 bg-slate-950/80 p-6 md:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
          Publications
        </p>
        <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Selected publications and DOI-linked research outputs
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          Formal citations for published work across materials science, computational
          physics, and exoplanet modeling. Metadata is limited to verified DOI records
          and existing project context.
        </p>
      </section>

      <section className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/15 bg-slate-900/70">
        {publications.map((paper, index) => (
          <article
            key={paper.doi}
            className="grid gap-5 p-5 md:grid-cols-[3rem_1fr] md:p-6"
          >
            <p className="font-mono text-sm text-cyan-200/65">
              {String(index + 1).padStart(2, '0')}
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                {paper.venue} · {paper.year}
              </p>
              <h2 className="mt-2 max-w-4xl text-xl font-semibold leading-snug text-white">
                {paper.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {paper.authors}
              </p>
              <p className="mt-4 rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm leading-relaxed text-slate-200">
                {paper.citation}
              </p>
              <div className="mt-4 grid gap-3 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    Contribution
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {paper.contribution}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-100">
                    Research track
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {paper.researchTrack}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200/30 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white"
                >
                  DOI
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={`https://api.crossref.org/works/${paper.doi}/transform/application/x-bibtex`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-cyan-200/60 hover:text-white"
                >
                  BibTeX
                </a>
                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-cyan-200/60 hover:text-white"
                  >
                    Publisher
                  </a>
                )}
              </div>
              <p className="mt-3 font-mono text-[11px] text-slate-500">
                DOI {paper.doi} · BibTeX key suggestion {bibtexKey(paper.title, paper.year)}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
