import { SectionTitle } from '../components/ui/SectionTitle'

const resumePath = '/resume.pdf'

export function ResumePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/15 bg-slate-900/80 p-6 md:p-8">
        <SectionTitle
          eyebrow="Resume"
          title="Resume and downloadable PDF"
          subtitle="Embed and download are wired. Place your latest file at public/resume.pdf to render it here."
        />
        <a
          href={resumePath}
          download
          className="mt-5 inline-flex rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
        >
          Download Resume PDF
        </a>
      </section>

      <section className="rounded-2xl border border-white/15 bg-slate-900/75 p-3 md:p-4">
        <iframe
          title="Junzhe Shi Resume"
          src={`${resumePath}#view=FitH`}
          className="h-[72vh] w-full rounded-xl border border-white/10 bg-white"
        />
      </section>
    </div>
  )
}
