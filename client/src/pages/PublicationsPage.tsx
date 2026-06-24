import { SectionTitle } from '../components/ui/SectionTitle'
import { publications } from '../content/siteContent'

export function PublicationsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/15 bg-slate-900/80 p-6 md:p-8">
        <SectionTitle
          eyebrow="Publications"
          title="Publication record and context"
          subtitle="Each card includes venue, year, DOI, and the practical context behind the work."
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {publications.map((paper) => (
          <article
            key={paper.doi}
            className="rounded-2xl border border-white/15 bg-slate-900/75 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/80">
              {paper.venue} • {paper.year}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">{paper.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{paper.context}</p>
            <p className="mt-4 text-sm text-cyan-200">DOI: {paper.doi}</p>
            {paper.link ? (
              <a
                href={paper.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-cyan-100 hover:text-cyan-50"
              >
                Open publication link
              </a>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  )
}
