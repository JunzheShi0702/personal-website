import { currentResearch, earlierResearch } from '../content/siteContent'
import type { ResearchItem } from '../content/siteContent'
import { PageHeader } from '../components/ui/PageHeader'
import { ResearchEntry } from '../components/ui/ResearchEntry'
import { Section } from '../components/ui/Section'

function Entry({ item }: { item: ResearchItem }) {
  return (
    <ResearchEntry
      id={item.id}
      period={item.period}
      status={item.status}
      title={item.title}
      affiliation={item.affiliation}
      description={item.description.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
      note={item.note}
      methods={item.methods}
      links={item.links}
      progress={item.progress}
    />
  )
}

export function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        lede="I work on machine learning for clinical and biomedical data."
      />
      <div className="t-body mt-8 max-w-measure space-y-4 text-ink">
        <p>
          In the REACH project the idea is to keep the language model's job small. It reads the
          prescription text and points to the words it used, and deterministic code does the
          arithmetic. In ARCADE we plant known artifacts in synthetic images and check whether
          audit methods detect them.
        </p>
      </div>

      <Section id="current" title="Current projects">
        <div className="border-b border-rule">
          {currentResearch.map((item) => (
            <Entry key={item.id} item={item} />
          ))}
        </div>
      </Section>

      <Section id="earlier" title="Before Johns Hopkins">
        <div className="border-b border-rule">
          {earlierResearch.map((item) => (
            <Entry key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </>
  )
}
