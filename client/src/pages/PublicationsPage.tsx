import { useState } from 'react'
import { publications } from '../content/siteContent'

function bibtexKey(title: string, year: string) {
  const firstWord = title.split(/\s+/)[0]?.replace(/[^a-zA-Z]/g, '') || 'paper'
  return `shi${year}${firstWord}`
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/85">
      {children}
    </p>
  )
}

function TextLink({
  children,
  href,
}: {
  children: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50"
    >
      {children}
    </a>
  )
}

function CitationCopyBlock({
  citation,
  doi,
}: {
  citation: string
  doi: string
}) {
  const [copied, setCopied] = useState(false)

  async function copyCitation() {
    if (!navigator.clipboard) return

    try {
      await navigator.clipboard.writeText(citation)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="mt-6 max-w-5xl rounded-[1.35rem] border border-white/10 bg-slate-950/35 p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
          Citation
        </p>
        <button
          type="button"
          onClick={() => void copyCitation()}
          className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          {copied ? 'Copied' : 'Copy citation'}
        </button>
      </div>
      <p className="mt-4 select-text text-base leading-relaxed text-slate-300">
        {citation}
      </p>
      <p className="mt-3 font-mono text-xs leading-relaxed text-slate-500">
        DOI {doi}
      </p>
    </div>
  )
}

export function PublicationsPage() {
  return (
    <div className="space-y-20">
      <section className="relative pb-10 pt-4 md:pb-16 md:pt-6">
        <div className="max-w-[1120px]">
          <SectionLabel>Publications</SectionLabel>
          <h1 className="mt-8 max-w-[1100px] text-[clamp(3rem,5.5vw,5.75rem)] font-semibold leading-[1.01] tracking-tight text-slate-100">
            Selected publications and DOI-linked research outputs.
          </h1>
          <p className="mt-7 max-w-[900px] text-lg leading-[1.6] text-slate-300 md:text-[1.25rem]">
            Formal citations for published work across materials science,
            computational physics, and exoplanet modeling. Metadata is limited
            to verified DOI records and existing project context.
          </p>
        </div>
      </section>

      <section className="scroll-mt-28">
        <div className="max-w-4xl">
          <SectionLabel>Research Outputs</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            DOI records with contribution context.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Each row keeps the citation, research track, and contribution visible
            without adding citation counts, venue claims, or unsupported metrics.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {publications.map((paper, index) => (
            <article
              key={paper.doi}
              className="grid gap-5 md:grid-cols-[5rem_1fr]"
            >
              <p className="font-mono text-sm text-cyan-200/55">
                {String(index + 1).padStart(2, '0')}
              </p>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                  {paper.venue} · {paper.year}
                </p>
                <h2 className="mt-3 max-w-5xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {paper.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-400">
                  {paper.authors}
                </p>

                <CitationCopyBlock citation={paper.citation} doi={paper.doi} />

                <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_16rem]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                      Contribution
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-slate-400">
                      {paper.contribution}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                      Research track
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-slate-400">
                      {paper.researchTrack}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                  <TextLink href={`https://doi.org/${paper.doi}`}>DOI</TextLink>
                  <TextLink
                    href={`https://api.crossref.org/works/${paper.doi}/transform/application/x-bibtex`}
                  >
                    BibTeX
                  </TextLink>
                  {paper.link ? (
                    <TextLink href={paper.link}>Publisher</TextLink>
                  ) : null}
                </div>

                <p className="mt-4 font-mono text-xs leading-relaxed text-slate-500">
                  BibTeX key suggestion {bibtexKey(paper.title, paper.year)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
