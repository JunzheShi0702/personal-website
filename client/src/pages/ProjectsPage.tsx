import { ArrowUpRight, FileText, FlaskConical, Image, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BentoCard } from '../components/ui/BentoCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { engineeringExperience, flagshipProjects } from '../content/siteContent'
import type { ProjectLink } from '../content/siteContent'

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

export function ProjectsPage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/80 p-6 md:p-8 lg:p-10">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/55 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
          Projects
        </p>
        <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
          AI systems, engineering judgment, and evidence you can inspect.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          Start with the public flagship systems, then scan selected engineering
          experience that demonstrates implementation maturity without pretending
          private work has public artifacts.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#flagship"
            className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Public flagship projects
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-200/60 hover:text-white"
          >
            Engineering experience
          </a>
        </div>
      </section>

      <section id="flagship" className="space-y-5 scroll-mt-28">
        <SectionTitle
          eyebrow="Public Flagship Projects"
          title="Built systems with visible evidence"
          subtitle="These are the strongest public work samples. Each card gives several ways to inspect the project before opening the full case study."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {flagshipProjects.map((project) => (
            <BentoCard key={project.title} className="overflow-hidden p-0">
              <div className="aspect-[16/9] overflow-hidden border-b border-white/10 bg-slate-950">
                <img
                  src={project.heroImage}
                  alt=""
                  className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/70">
                  {project.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                    <div className="flex items-center gap-2 text-cyan-100">
                      <Layers3 className="h-4 w-4" />
                      <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                        Stack
                      </p>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {project.stack.join(' · ')}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                    <div className="flex items-center gap-2 text-violet-100">
                      <FlaskConical className="h-4 w-4" />
                      <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                        Research lens
                      </p>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {project.researchRelevance}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.evidence.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-200/15 bg-cyan-300/5 px-3 py-1 text-xs text-cyan-100/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <ProjectAction key={`${project.title}-${link.label}`} link={link} />
                  ))}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <section id="experience" className="space-y-5 scroll-mt-28">
        <SectionTitle
          eyebrow="Selected Engineering Experience"
          title="Engineering maturity with clear evidence boundaries"
          subtitle="These entries are intentionally framed as experience. They do not show repo/demo/screenshot links because no public artifacts are available in this repo."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {engineeringExperience.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/15 bg-slate-900/70 p-5 md:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-200/75">
                Engineering experience
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {project.context}
              </p>
              <p className="mt-3 rounded-2xl border border-amber-200/15 bg-amber-200/10 px-4 py-3 text-xs leading-relaxed text-amber-100/90">
                {project.publicStatus}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    <FileText className="h-4 w-4" />
                    Focus
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {project.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    <Image className="h-4 w-4" />
                    Review lens
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {project.nextDetails.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-1 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
