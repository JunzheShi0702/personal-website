import {
  BadgeCheck,
  Code,
  ExternalLink,
  FileText,
  GitCommitHorizontal,
  Images,
  type LucideIcon,
  MonitorPlay,
  Presentation,
  Search,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { engineeringExperience, flagshipProjects } from '../content/siteContent'
import type { ProjectLink } from '../content/siteContent'

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/85">
      {children}
    </p>
  )
}

function TextAnchor({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center text-base font-semibold text-cyan-100 underline decoration-cyan-200/55 decoration-2 underline-offset-[7px] transition hover:text-white hover:decoration-cyan-100"
    >
      {children}
      <span className="ml-2 transition group-hover:translate-x-1">→</span>
    </a>
  )
}

function getProjectActionIcon(label: string): LucideIcon {
  const normalizedLabel = label.toLowerCase()

  if (normalizedLabel.includes('demo')) {
    return MonitorPlay
  }

  if (normalizedLabel.includes('github')) {
    return Code
  }

  if (normalizedLabel.includes('screenshot')) {
    return Images
  }

  if (normalizedLabel.includes('commit')) {
    return GitCommitHorizontal
  }

  if (normalizedLabel.includes('credit')) {
    return BadgeCheck
  }

  if (normalizedLabel.includes('presentation')) {
    return Presentation
  }

  if (normalizedLabel.includes('research')) {
    return Search
  }

  return FileText
}

function ProjectAction({ link }: { link: ProjectLink }) {
  const Icon = getProjectActionIcon(link.label)
  const className =
    'group inline-flex h-10 items-center gap-2 rounded-full border border-cyan-100/20 bg-slate-950/35 px-3.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100/45 hover:bg-cyan-100/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
        {link.label}
        <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
      </a>
    )
  }

  return (
    <Link to={link.href} className={className}>
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      {link.label}
    </Link>
  )
}

function ProjectEvidence({ items }: { items: string[] }) {
  return (
    <p className="text-sm leading-relaxed text-slate-400">
      {items.join(' · ')}
    </p>
  )
}

export function ProjectsPage() {
  return (
    <div className="space-y-24">
      <section className="pb-4 pt-4 md:pb-10 md:pt-8">
        <div className="max-w-[1120px]">
          <SectionLabel>Projects</SectionLabel>
          <h1 className="mt-8 max-w-[1080px] text-balance text-[clamp(3.1rem,6.2vw,6.6rem)] font-semibold leading-[0.98] tracking-tight text-white">
            AI systems, engineering judgment, and evidence you can inspect.
          </h1>
          <p className="mt-8 max-w-[880px] text-lg leading-[1.65] text-slate-300 md:text-[1.25rem]">
            Start with the featured systems, then scan selected engineering
            experience that demonstrates implementation maturity and systems judgment.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4">
            <TextAnchor href="#flagship">Featured projects</TextAnchor>
            <TextAnchor href="#experience">Engineering experience</TextAnchor>
          </div>
        </div>
      </section>

      <section id="flagship" className="scroll-mt-28">
        <div className="max-w-[900px]">
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Built systems with visible evidence.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Each project keeps the evidence close to the claim: demos, case studies,
            screenshots, source links, or research context where those artifacts are public.
          </p>
        </div>

        <div className="mt-14 space-y-20">
          {flagshipProjects.map((project) => (
            <article
              key={project.title}
              className="grid gap-9 lg:grid-cols-[minmax(0,1.38fr)_minmax(20rem,0.92fr)] lg:items-center lg:gap-12"
            >
              <Link
                to={project.links[0]?.href ?? '#'}
                className="group relative block aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-slate-950/70 shadow-[0_28px_90px_-62px_rgba(34,211,238,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:aspect-[16/9]"
                aria-label={`Open ${project.title} case study`}
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
                <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/80">
                  {project.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                  {project.summary}
                </p>
                <p className="mt-5 text-base leading-relaxed text-slate-400">
                  {project.researchRelevance}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(13rem,0.78fr)]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                      Technical frame
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {project.stack.join(' · ')}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                      Evidence surface
                    </p>
                    <div className="mt-3">
                      <ProjectEvidence items={project.evidence} />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                  {project.links.map((link) => (
                    <ProjectAction key={`${project.title}-${link.label}`} link={link} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="scroll-mt-28 pb-8">
        <div className="max-w-[900px]">
          <SectionLabel>Selected Engineering Experience</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Implementation work with clear evidence boundaries.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            These entries are framed as engineering experience: context, focus,
            contribution surfaces, and skills demonstrated.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {engineeringExperience.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-6 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-8"
            >
              <p className="font-mono text-sm font-semibold text-cyan-100/65">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="max-w-[1040px]">
                <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                  Engineering experience
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-[820px] text-lg leading-relaxed text-slate-300">
                  {project.context}
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,1fr)]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                      Focus
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-400">
                      {project.focus.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                      Review lens
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-400">
                      {project.nextDetails.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-100/75">
                      Skills
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {project.skills.join(' · ')}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
