import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { publications, researchTracks } from '../content/siteContent'

const researchFocus = [
  {
    title: 'Evidence-grounded AI for decisions',
    description:
      'Current work centers on clinical AI research support, cohort planning, evidence quality, and patient-safety framing.',
    lens: 'Clinical AI · evidence review · responsible interpretation',
  },
  {
    title: 'Quantitative modeling under uncertainty',
    description:
      'Earlier research used physical simulation, transit light-curve fitting, and materials characterization to reason from noisy measurements.',
    lens: 'Physics · astronomy · materials science',
  },
  {
    title: 'Inspectable research communication',
    description:
      'Across domains, the recurring goal is to make assumptions, methods, limitations, and source evidence easier to inspect.',
    lens: 'Methods · provenance · scientific communication',
  },
]

const selectedResearchIds = ['healthcare-ai', 'perovskite', 'subatomic']
const selectedResearch = researchTracks.filter((track) =>
  selectedResearchIds.includes(track.id),
)

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/85">
      {children}
    </p>
  )
}

export function ResearchPage() {
  return (
    <div className="space-y-24">
      <section className="pb-10 pt-6 md:pb-16 md:pt-10">
        <div className="max-w-5xl">
          <SectionLabel>Research</SectionLabel>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,5.2vw,5.5rem)] font-semibold leading-[1.02] tracking-tight text-slate-100">
            Scientific modeling for decisions under uncertainty.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.65] text-slate-300 md:text-xl">
            My research spans computational physics, astronomy, materials science,
            and healthcare. Across those domains, I return to the same problem:
            turning incomplete or complex evidence into conclusions people can
            inspect and use.
          </p>
          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-3" aria-label="Research page sections">
            <a
              href="#research-focus"
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50"
            >
              Research Focus
            </a>
            <a
              href="#research-trajectory"
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50"
            >
              Research Trajectory
            </a>
            <Link
              to="/research/reach"
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50"
            >
              REACH Note
            </Link>
            <a
              href="#research-outputs"
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50"
            >
              DOI Outputs
            </a>
          </nav>
        </div>
      </section>

      <section id="research-focus" className="scroll-mt-28">
        <div className="max-w-4xl">
          <SectionLabel>Research Focus</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Methods move across domains; the evidence problem stays constant.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {researchFocus.map((item) => (
            <article key={item.title}>
              <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {item.description}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
                {item.lens}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="research-trajectory" className="scroll-mt-28">
        <div className="max-w-4xl">
          <SectionLabel>Research Trajectory</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            From physical models to human-facing AI.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            The sequence below preserves the current and completed research tracks
            already represented on the site, ordered from current clinical AI work
            back through earlier quantitative research.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {researchTracks.map((track, index) => (
            <article
              key={track.id}
              id={track.id}
              className="grid scroll-mt-28 gap-5 md:grid-cols-[9rem_1fr]"
            >
              <div>
                <p className="font-mono text-sm text-cyan-200/70">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {track.period}
                </p>
              </div>

              <div className="max-w-5xl rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 md:p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {track.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  {track.question}
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  <span className="font-semibold text-cyan-100">Contribution: </span>
                  {track.contribution}
                </p>
                <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
                  <p className="text-sm leading-relaxed text-slate-400">
                    <span className="font-semibold text-slate-200">Methods: </span>
                    {track.methods.join('; ')}.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400">
                    <span className="font-semibold text-slate-200">Outcome: </span>
                    {track.outcome}
                  </p>
                </div>
                {track.id === 'healthcare-ai' ? (
                  <div className="mt-6">
                    <Link
                      to="/research/reach"
                      className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-white"
                    >
                      Open REACH research note
                    </Link>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="selected-research" className="scroll-mt-28">
        <div className="max-w-4xl">
          <SectionLabel>Selected Research</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Three places where the research questions become concrete.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            These examples have enough existing site content to support a more
            specific explanation of the question, method, and contribution without
            inventing new results.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {selectedResearch.map((track) => (
            <article
              key={track.id}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 md:p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
                {track.period}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {track.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {track.question}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {track.contribution}
              </p>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-400">
                <span className="font-semibold text-slate-200">Approach: </span>
                {track.methods.join('; ')}.
              </p>
              {track.id === 'healthcare-ai' ? (
                <Link
                  to="/research/reach"
                  className="mt-5 inline-flex text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-white"
                >
                  Read the REACH note
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="research-outputs" className="scroll-mt-28 pb-8">
        <div className="max-w-4xl">
          <SectionLabel>Research Outputs</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            DOI-linked research outputs.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Formal records already present on the site, shown as citation evidence
            rather than impact metrics.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {publications.map((paper, index) => (
            <article
              key={paper.doi}
              className="grid gap-5 md:grid-cols-[3rem_1fr]"
            >
              <p className="font-mono text-sm text-cyan-200/65">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {paper.venue} · {paper.year}
                </p>
                <h3 className="mt-2 max-w-4xl text-xl font-semibold leading-snug text-white">
                  {paper.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {paper.authors}
                </p>
                <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300">
                  {paper.contribution}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-white hover:decoration-cyan-100"
                  >
                    DOI
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  {paper.link ? (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/60"
                    >
                      Publisher
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                  <span className="text-xs text-slate-500">
                    {paper.researchTrack}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
