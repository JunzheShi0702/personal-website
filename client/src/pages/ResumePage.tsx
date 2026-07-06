import { Download } from 'lucide-react'
import { SectionTitle } from '../components/ui/SectionTitle'

const resumePath = '/resume.pdf'

export function ResumePage() {
  return (
    <div className="space-y-8">
      <section className="max-w-4xl py-6 md:py-10">
        <SectionTitle
          eyebrow="Resume"
          title="Resume and CV"
          subtitle="Preview the latest public PDF or download a copy for education, research, publications, and project work."
        />
        <a
          href={resumePath}
          download
          className="group mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white"
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          Download Resume
          <span className="font-normal text-slate-400">PDF</span>
        </a>
      </section>

      <section className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/55">
        <div className="flex flex-col gap-2 border-b border-white/10 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-5">
          <p className="text-sm font-semibold text-white">PDF Preview</p>
          <a
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-white"
          >
            Open in browser
          </a>
        </div>
        <iframe
          src={resumePath}
          title="Junzhe Shi resume PDF preview"
          className="h-[34rem] w-full bg-slate-950 md:h-[72rem]"
        />
      </section>
    </div>
  )
}
