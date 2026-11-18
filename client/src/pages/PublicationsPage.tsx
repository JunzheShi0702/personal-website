import { publications } from '../content/siteContent'
import { PageHeader } from '../components/ui/PageHeader'
import { PublicationEntry } from '../components/ui/PublicationEntry'
import { Section } from '../components/ui/Section'

const years = [...new Set(publications.map((publication) => publication.year))]

export function PublicationsPage() {
  return (
    <>
      <PageHeader
        title="Publications"
        lede="Four papers from research I did before Johns Hopkins, in materials science, nuclear physics simulation and astronomy."
      />
      {years.map((year) => (
        <Section key={year} id={`year-${year}`} title={year} className="md:mt-16">
          <div className="border-b border-rule">
            {publications
              .filter((publication) => publication.year === year)
              .map((publication) => (
                <PublicationEntry
                  key={publication.doi}
                  publication={publication}
                  showRole
                  showYear={false}
                />
              ))}
          </div>
        </Section>
      ))}
    </>
  )
}
