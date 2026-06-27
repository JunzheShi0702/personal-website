import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { BentoCard } from '../components/ui/BentoCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { flagshipProjects, homepagePathways } from '../content/siteContent'
import type { ProjectLink } from '../content/siteContent'
import universityShield from '../assets/university.shield.rgb.white.svg'

const resumePath = '/resume.pdf'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.984V9h3.102v1.561h.044c.432-.816 1.487-1.676 3.059-1.676 3.273 0 3.876 2.154 3.876 4.955v6.612zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.95 20.452H3.722V9H6.95v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

const stagger = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.45 },
  }),
}

const evidenceSnapshot = [
  {
    stat: '2',
    title: 'Flagship Systems',
    detail: 'Atlas · LaunchStack',
  },
  {
    stat: '2',
    title: 'Technical Case Studies',
    detail: 'Architecture · Evaluation',
  },
  {
    stat: '3',
    title: 'Published Papers',
    detail: 'DOI-linked outputs',
  },
  {
    stat: '4',
    title: 'Research Domains',
    detail: 'AI · Healthcare · Physics · Materials',
  },
]

function ProjectAction({ link }: { link: ProjectLink }) {
  const className =
    'inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10 hover:text-white'

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        {link.label}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    )
  }

  return (
    <Link to={link.href} className={className}>
      {link.label}
    </Link>
  )
}

export function HomePage() {
  return (
    <div className="space-y-10">
      <section className="relative isolate px-2 py-6 md:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-1 top-0 -z-10 select-none opacity-[0.12] md:-top-6 md:right-4"
        >
          <img src={universityShield} alt="" className="h-56 w-auto md:h-80" />
        </div>
        <div className="relative z-10 grid items-stretch gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="flex flex-col justify-between gap-7">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/85">
                Research Engineering Portfolio
              </p>
              <h1 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Junzhe Shi builds research-driven AI systems for real human decision-making.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                I am a Johns Hopkins student studying Computer Science and Applied
                Mathematics and Statistics. This site is the deep-dive layer behind my
                GitHub README: visual storytelling, project architecture, and technical
                lessons learned from building AI products.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Explore Projects
                </Link>
                <Link
                  to="/research"
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-200/60 hover:text-white"
                >
                  View Research
                </Link>
                <a
                  href={resumePath}
                  className="inline-flex items-center gap-2 px-1 py-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/70">
                  Evidence Snapshot
                </p>
                <Link
                  to="/projects"
                  className="text-xs font-semibold text-cyan-200 transition hover:text-cyan-100"
                >
                  Inspect projects
                </Link>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                {evidenceSnapshot.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/15 bg-slate-900/65 p-3"
                  >
                    <p className="font-display text-2xl font-semibold leading-none text-cyan-100">
                      {item.stat}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white">{item.title}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-400">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="self-stretch">
            <BentoCard className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-cyan-200/70">
                  What I Build
                </p>
                <p className="mt-3 text-lg font-medium leading-relaxed text-slate-100">
                  Inspectable AI systems that keep people in control of complex
                  decisions.
                </p>
                <div className="mt-5 grid gap-3">
                  {[
                    ['Atlas', 'Course planning with schedule-aware AI advising.', '/projects/atlas'],
                    ['LaunchStack', 'Grounded founder workflows with reviewable AI output.', '/projects/pdr-ai'],
                  ].map(([title, description, href]) => (
                    <Link
                      key={title}
                      to={href}
                      className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 transition hover:border-cyan-200/40 hover:bg-slate-950/70"
                    >
                      <p className="text-sm font-semibold text-cyan-100">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">
                        {description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-200/75">
                  Research Lens
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Grounding, retrieval, evaluation, and human review for AI that
                  supports real decisions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Evidence-based reasoning', 'Agent reliability', 'High-stakes AI'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-violet-200/15 bg-violet-300/5 px-3 py-1 text-xs text-violet-100/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionTitle
          eyebrow="Start Here"
          title="Choose a path into the work"
          subtitle="Short entry points for visitors who want projects, research context, or a direct way to connect."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {homepagePathways.map((path, index) => (
            <motion.div
              key={path.to}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <Link to={path.to} className="block">
                <BentoCard className="h-full">
                  <h3 className="text-lg font-semibold text-white">{path.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {path.description}
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
                    Open section
                  </p>
                </BentoCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionTitle
          eyebrow="Flagship Projects"
          title="Click into the evidence"
          subtitle="The homepage stays light; each card exposes enough proof to invite inspection."
        />
        <div className="grid gap-4">
          {flagshipProjects.map((project) => (
            <BentoCard
              key={project.title}
              className="grid overflow-hidden p-0 lg:grid-cols-[minmax(0,1.85fr)_minmax(17rem,0.62fr)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 lg:aspect-[16/9]">
                <img
                  src={project.heroImage}
                  alt=""
                  className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                />
                <div className="absolute left-3 top-3 rounded-full border border-cyan-200/30 bg-slate-950/85 px-3 py-1 text-xs font-semibold text-cyan-100">
                  {project.heroLabel}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-5 p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">
                  {project.eyebrow}
                </p>
                <div>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
                    {project.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {project.links.slice(0, 4).map((link) => (
                    <ProjectAction key={`${project.title}-${link.label}`} link={link} />
                  ))}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <section id="resume" className="space-y-5 scroll-mt-24">
        <SectionTitle
          eyebrow="Resume"
          title="Download my resume"
          subtitle="Get the latest PDF copy of my education, experience, and project work."
        />

        <a
          href={resumePath}
          download
          className="group inline-flex items-center gap-2 border-b border-cyan-300/35 pb-1 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:text-cyan-100"
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          Download resume
          <span className="font-normal text-slate-400">PDF</span>
        </a>
      </section>

      <section id="contact" className="rounded-3xl border border-white/15 bg-slate-900/75 p-6 md:p-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let us connect"
          subtitle="Open to research collaborations, AI product engineering roles, and technically rigorous build opportunities."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <a
            href="mailto:jshi70@jh.edu"
            className="rounded-2xl border border-white/15 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-200/55"
          >
            <Mail className="h-5 w-5 text-cyan-200/75" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200/75">Email</p>
            <p className="mt-1 text-base font-semibold text-white">jshi70@jh.edu</p>
          </a>
          <a
            href="https://linkedin.com/in/junzheshi"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-200/55"
          >
            <LinkedInIcon className="h-5 w-5 text-cyan-200/75" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200/75">LinkedIn</p>
            <p className="mt-1 text-base font-semibold text-white">linkedin.com/in/junzheshi</p>
          </a>
          <a
            href="https://github.com/JunzheShi0702"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-200/55"
          >
            <GitHubIcon className="h-5 w-5 text-cyan-200/75" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200/75">GitHub</p>
            <p className="mt-1 text-base font-semibold text-white">github.com/JunzheShi0702</p>
          </a>
        </div>
      </section>
    </div>
  )
}
