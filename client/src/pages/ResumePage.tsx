import { useEffect, useState } from 'react'
import { SectionTitle } from '../components/ui/SectionTitle'

const resumePath = '/resume.pdf'

export function ResumePage() {
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
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/15 bg-slate-900/80 p-6 md:p-8">
        <SectionTitle
          eyebrow="Resume"
          title="Resume and downloadable PDF"
          subtitle="Embed and download are wired. Place your latest file at public/resume.pdf to render it here."
        />
        {resumeAvailable ? (
          <a
            href={resumePath}
            download
            className="mt-5 inline-flex rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
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
          <iframe
            title="Junzhe Shi Resume"
            src={`${resumePath}#view=FitH`}
            className="h-[72vh] w-full rounded-xl border border-white/10 bg-white"
          />
        ) : (
          <div className="h-[36vh] rounded-xl border border-white/10 bg-slate-950/55 p-6 text-sm text-slate-300">
            Resume PDF is not uploaded yet. Add your file to
            <span className="mx-1 font-semibold text-cyan-100">client/public/resume.pdf</span>
            to enable preview and download.
          </div>
        )}
      </section>
    </div>
  )
}
