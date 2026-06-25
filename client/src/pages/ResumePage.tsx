import { Download } from 'lucide-react'
import { SectionTitle } from '../components/ui/SectionTitle'

const resumePath = '/resume.pdf'

export function ResumePage() {
  return (
    <div>
      <section className="rounded-3xl border border-white/15 bg-slate-900/80 p-6 md:p-8">
        <SectionTitle
          eyebrow="Resume"
          title="Download my resume"
          subtitle="Get the latest PDF copy of my education, experience, and project work."
        />
        <a
          href={resumePath}
          download
          className="group mt-5 inline-flex items-center gap-2 border-b border-cyan-300/35 pb-1 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:text-cyan-100"
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          Download resume
          <span className="font-normal text-slate-400">PDF</span>
        </a>
      </section>
    </div>
  )
}
