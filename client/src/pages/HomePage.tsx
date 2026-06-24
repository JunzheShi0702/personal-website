import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { BentoCard } from '../components/ui/BentoCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { homepagePathways } from '../content/siteContent'
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

export function HomePage() {
  const [resumeAvailable, setResumeAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    let isMounted = true

    fetch(resumePath, { method: 'HEAD' })
      .then((response) => {
        if (!isMounted) return
        setResumeAvailable(response.ok)
      })
      .catch(() => {
        if (!isMounted) return
        setResumeAvailable(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="space-y-10">
      <section className="relative px-2 py-6 md:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-14 select-none opacity-[0.12]"
        >
          <img src={universityShield} alt="" className="h-72 w-auto md:h-96" />
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
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
                to="/projects/atlas"
                className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Explore Flagship Projects
              </Link>
              <Link
                to="/ask-junzhe"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-slate-950 px-5 py-2 text-sm font-semibold text-cyan-200 shadow-lg transition hover:border-cyan-200 hover:text-cyan-100"
              >
                <span aria-hidden="true">✦</span>
                Open Ask Junzhe AI
                <span aria-hidden="true">✦</span>
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <BentoCard>
              <p className="text-xs uppercase tracking-[0.15em] text-cyan-200/70">
                Focus
              </p>
              <p className="mt-2 text-sm text-slate-200">
                AI-assisted product systems, human-in-the-loop workflows, and
                explainable recommendation experiences.
              </p>
            </BentoCard>
            <BentoCard>
              <p className="text-xs uppercase tracking-[0.15em] text-violet-200/80">
                Signature Lens
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Translating uncertainty-heavy domains into decision tools people can
                trust and act on.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionTitle
          eyebrow="Three Deep Paths"
          title="Start where you want to dive deeper"
          subtitle="The README is the map. This site is the full terrain: system-level context, visualized workflows, and product decisions."
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

      <section className="grid gap-4 md:grid-cols-2">
        <BentoCard>
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">
            Flagship Build
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">Atlas</h3>
          <p className="mt-2 text-sm text-slate-300">
            AI-assisted course search and schedule planning with constraint-aware
            recommendations, rationale-rich advising, and retrieval over course data.
          </p>
          <Link
            to="/projects/atlas"
            className="mt-4 inline-block text-sm font-semibold text-cyan-200 hover:text-cyan-100"
          >
            Read Atlas case study
          </Link>
        </BentoCard>
        <BentoCard>
          <p className="text-xs uppercase tracking-[0.16em] text-violet-200/80">
            Human + AI Collaboration
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">PDR AI / LaunchStack</h3>
          <p className="mt-2 text-sm text-slate-300">
            Multi-step document revision platform designed for user control,
            transparent diffs, regeneration loops, and staged acceptance.
          </p>
          <Link
            to="/projects/pdr-ai"
            className="mt-4 inline-block text-sm font-semibold text-cyan-200 hover:text-cyan-100"
          >
            Read PDR AI case study
          </Link>
        </BentoCard>
      </section>

      <section id="resume" className="space-y-5 scroll-mt-24">
        <SectionTitle
          eyebrow="Resume"
          title="Resume and downloadable PDF"
          subtitle="Preview inline when supported, or open in a new tab when your browser blocks embedded PDFs."
        />

        <section className="rounded-3xl border border-white/15 bg-slate-900/80 p-6 md:p-8">
          {resumeAvailable ? (
            <a
              href={resumePath}
              download
              className="inline-flex rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
            >
              Download Resume PDF
            </a>
          ) : null}
        </section>

        <section className="rounded-2xl border border-white/15 bg-slate-900/75 p-3 md:p-4">
          {resumeAvailable === null ? (
            <div className="h-[36vh] rounded-xl border border-white/10 bg-slate-950/55 p-6 text-sm text-slate-300">
              Checking resume file...
            </div>
          ) : resumeAvailable ? (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:text-cyan-50"
                >
                  Open In New Tab
                </a>
              </div>
              <object
                aria-label="Junzhe Shi Resume"
                data={`${resumePath}#toolbar=1&navpanes=0`}
                type="application/pdf"
                className="h-[78vh] w-full rounded-xl border border-white/10 bg-slate-950/55"
              >
                <div className="h-[36vh] rounded-xl border border-white/10 bg-slate-950/55 p-6 text-sm text-slate-300">
                  Your browser cannot preview this PDF inline. Use
                  <a
                    href={resumePath}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1 font-semibold text-cyan-100 underline decoration-cyan-200/70 underline-offset-2"
                  >
                    Open In New Tab
                  </a>
                  or the download button above.
                </div>
              </object>
            </div>
          ) : (
            <div className="h-[36vh] rounded-xl border border-white/10 bg-slate-950/55 p-6 text-sm text-slate-300">
              Resume PDF is not uploaded yet. Add your file to
              <span className="mx-1 font-semibold text-cyan-100">client/public/resume.pdf</span>
              to enable preview and download.
            </div>
          )}
        </section>
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
