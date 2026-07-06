import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import {
  flagshipProjects,
  homepagePathways,
  publications,
  researchTracks,
} from '../content/siteContent'
import type { ProjectLink } from '../content/siteContent'

const resumePath = '/resume.pdf'

const evidenceSnapshot = [
  {
    stat: '01',
    title: 'Research vision',
    detail: 'Inspectable AI for evidence-heavy decisions',
  },
  {
    stat: '02',
    title: 'Three representative systems',
    detail: 'Atlas · LaunchStack · REACH',
  },
  {
    stat: '03',
    title: 'Four published papers',
    detail: 'DOI-linked outputs',
  },
  {
    stat: '04',
    title: 'Four research themes',
    detail: 'AI · Healthcare · Physics · Materials',
  },
]

const researchView = [
  {
    title: 'Clinical AI',
    description:
      'REACH frames cohort planning around evidence quality and patient safety.',
    to: '/projects/reach',
  },
  {
    title: 'AI planning systems',
    description:
      'Atlas studies grounded advising, constraints, and auditability.',
    to: '/projects/atlas',
  },
  {
    title: 'Human-AI collaboration',
    description:
      'LaunchStack keeps generated work source-aware and reviewable.',
    to: '/projects/pdr-ai',
  },
]

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
  to,
  external,
  download,
}: {
  children: string
  href?: string
  to?: string
  external?: boolean
  download?: boolean
}) {
  const className =
    'text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-cyan-50'

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      download={download}
      className={className}
    >
      {children}
    </a>
  )
}

function ProjectAction({ link }: { link: ProjectLink }) {
  if (link.external) {
    return (
      <TextLink href={link.href} external>
        {link.label}
      </TextLink>
    )
  }

  return <TextLink to={link.href}>{link.label}</TextLink>
}

function SectionHeader({
  label,
  title,
  children,
  maxWidth = 'max-w-4xl',
}: {
  label: string
  title: string
  children?: ReactNode
  maxWidth?: string
}) {
  return (
    <div className={maxWidth}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-6 text-lg leading-relaxed text-slate-300">{children}</div>
      ) : null}
    </div>
  )
}

export function HomePage() {
  return (
    <div className="space-y-20">
      <section className="relative pb-20 pt-4 md:pb-28 md:pt-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)] lg:items-stretch lg:gap-14">
          <div className="flex max-w-[1120px] flex-col justify-end">
            <SectionLabel>Academic Personal Website</SectionLabel>
            <h1 className="mt-8 max-w-[1100px] text-[clamp(3rem,5.5vw,5.75rem)] font-semibold leading-[1.01] tracking-tight text-slate-100">
              Junzhe Shi studies AI systems for evidence-heavy decisions.
            </h1>
            <p className="mt-7 max-w-[900px] text-lg leading-[1.6] text-slate-300 md:text-[1.25rem]">
              I am a Johns Hopkins student in Computer Science and Applied
              Mathematics and Statistics, preparing for AI PhD research. My work
              asks how models, retrieval systems, and human-facing tools can make
              uncertain evidence inspectable before it becomes a recommendation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <TextLink to="/research">Research</TextLink>
              <TextLink to="/publications">Publications</TextLink>
              <TextLink href={resumePath} download>
                CV
              </TextLink>
            </div>
          </div>

          <aside className="lg:flex lg:h-full lg:border-l lg:border-white/10 lg:pl-14">
            <div className="lg:flex lg:flex-col lg:justify-end">
              <SectionLabel>Research View</SectionLabel>
              <p className="mt-4 text-xl font-medium leading-relaxed text-slate-100">
                I want to build AI systems that are useful precisely because their
                assumptions, sources, constraints, and failure modes remain visible
                to the people using them.
              </p>
              <div className="mt-7 divide-y divide-white/5">
                {researchView.map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    className="grid gap-2 py-4 transition hover:text-cyan-100 sm:grid-cols-[11rem_1fr]"
                  >
                    <p className="text-base font-semibold text-cyan-100">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                Research progression: physics and materials taught me to model
                uncertainty; AI systems and clinical AI are where I now apply that
                discipline.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="snapshot-heading" className="scroll-mt-28">
        <div className="border-t border-white/10 py-7">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Academic Snapshot</SectionLabel>
              <h2
                id="snapshot-heading"
                className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl"
              >
                Evidence at a glance
              </h2>
            </div>
            <TextLink to="/projects">Representative systems</TextLink>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {evidenceSnapshot.map((item) => (
              <article key={item.title} className="grid gap-3 sm:grid-cols-[3rem_1fr]">
                <p className="font-mono text-sm text-cyan-200/55">{item.stat}</p>
                <div>
                  <p className="text-lg font-semibold text-slate-100">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-28">
        <SectionHeader
          label="Click Into Evidence"
          title="Representative Systems"
        >
          <p>
            These systems are evidence for the research agenda, not the agenda
            itself.
          </p>
        </SectionHeader>

        <div className="mt-12 space-y-16">
          {flagshipProjects.map((project) => (
            <article
              key={project.title}
              className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.85fr)] lg:items-center"
            >
              <Link
                to={project.links[0].href}
                className="group relative block aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-slate-950/70 shadow-[0_24px_70px_-48px_rgba(34,211,238,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:aspect-[16/9]"
              >
                <img
                  src={project.heroImage}
                  alt=""
                  className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.015] group-hover:opacity-100"
                />
                <span className="absolute left-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-cyan-100 shadow-lg backdrop-blur">
                  {project.heroLabel}
                </span>
              </Link>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/85">
                  {project.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                  {project.summary}
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-400">
                  {project.researchRelevance}
                </p>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                  {project.links.map((link) => (
                    <ProjectAction key={`${project.title}-${link.label}`} link={link} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scroll-mt-28">
        <SectionHeader
          label="Start Here"
          title="Academic entry points"
        >
          <p>
            Short paths for readers who want the research story, formal outputs,
            systems evidence, or contact details.
          </p>
        </SectionHeader>

        <div className="mt-10 divide-y divide-white/5">
          {homepagePathways.map((path, index) => (
            <Link
              key={path.to}
              to={path.to}
              className="grid gap-3 py-5 transition hover:text-cyan-100 md:grid-cols-[5rem_minmax(10rem,0.35fr)_1fr_auto] md:items-center"
            >
              <p className="font-mono text-sm text-cyan-200/55">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-xl font-semibold text-white">{path.title}</h3>
              <p className="text-base leading-relaxed text-slate-400">
                {path.description}
              </p>
              <p className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4">
                Open
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="scroll-mt-28">
        <SectionHeader
          label="Recent Publications"
          title="Formal research outputs"
        >
          <p>Selected DOI-linked publications that ground the research trajectory.</p>
        </SectionHeader>

        <div className="mt-10 space-y-12">
          {publications.slice(0, 2).map((paper) => (
            <article
              key={paper.doi}
              className="grid gap-4 md:grid-cols-[12rem_1fr]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                {paper.venue} · {paper.year}
              </p>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {paper.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-400">
                  {paper.authors}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  {paper.link ? (
                    <TextLink href={paper.link} external>
                      DOI
                    </TextLink>
                  ) : null}
                  <TextLink to="/publications">Publication details</TextLink>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <TextLink to="/publications">View all publications</TextLink>
        </div>
      </section>

      <section className="scroll-mt-28">
        <SectionHeader
          label="Current Research"
          title={researchTracks[0].title}
        >
          <p>{researchTracks[0].question}</p>
        </SectionHeader>

        <div className="mt-8 max-w-4xl">
          <p className="text-lg leading-relaxed text-slate-300">
            {researchTracks[0].contribution}
          </p>
          <div className="mt-6 flex flex-wrap gap-5">
            <TextLink to="/projects/reach">Project Page</TextLink>
            <TextLink to="/research#healthcare-ai">Research Context</TextLink>
          </div>
        </div>
      </section>

      <div className="grid gap-12 pb-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
        <section id="cv" className="scroll-mt-24">
          <SectionHeader label="CV" title="Download my CV.">
            <p>
              Get the latest PDF copy of my education, research, publications, and
              project work.
            </p>
          </SectionHeader>

          <div className="mt-6">
            <TextLink href={resumePath} download>
              Download CV
            </TextLink>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-28 lg:border-l lg:border-white/10 lg:pl-14"
        >
          <SectionHeader label="Contact" title="Let's connect.">
            <p>
              Open to research collaborations, AI product engineering roles, and
              technically rigorous build opportunities.
            </p>
          </SectionHeader>

          <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            <a href="mailto:jshi70@jh.edu" className="group">
              <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                Email
              </p>
              <p className="mt-2 text-lg font-semibold text-white transition group-hover:text-cyan-100">
                jshi70@jh.edu
              </p>
            </a>
            <a
              href="https://linkedin.com/in/junzheshi"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                LinkedIn
              </p>
              <p className="mt-2 text-lg font-semibold text-white transition group-hover:text-cyan-100">
                linkedin.com/in/junzheshi
              </p>
            </a>
            <a
              href="https://github.com/JunzheShi0702"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                GitHub
              </p>
              <p className="mt-2 text-lg font-semibold text-white transition group-hover:text-cyan-100">
                github.com/JunzheShi0702
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
