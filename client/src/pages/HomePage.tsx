import {
  contactLinks,
  currentResearch,
  earlierResearch,
  featuredProjects,
  news,
  profile,
  publications,
} from '../content/siteContent'
import { NewsList } from '../components/ui/NewsList'
import { ProjectEntry } from '../components/ui/ProjectEntry'
import { PublicationEntry } from '../components/ui/PublicationEntry'
import { ResearchEntry } from '../components/ui/ResearchEntry'
import { Section } from '../components/ui/Section'
import { LinkRow, TextLink } from '../components/ui/TextLink'

const facts = [
  {
    label: 'Now',
    lines: [
      'Research assistant, Data Science for Psychiatry Lab',
      'Undergraduate researcher, ARCADE Lab',
    ],
  },
  {
    label: 'Education',
    lines: ['B.S. in Computer Science, Johns Hopkins University, expected May 2028'],
  },
  {
    label: 'Interests',
    lines: ['Clinical NLP, biomedical machine learning, medical imaging, dataset auditing'],
  },
]

export function HomePage() {
  return (
    <>
      <section className="grid gap-10 pt-12 md:pt-20 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
        <div className="max-w-measure">
          <h1 className="t-display text-ink">{profile.name}</h1>
          <p className="t-ui mt-3 text-ink-muted">{profile.position}</p>
          <p className="t-lede mt-8 text-ink">
            I work on machine learning for clinical and biomedical data. I like problems where you
            can check the model's work.
          </p>
          <div className="t-body mt-5 space-y-4 text-ink-muted">
            <p>
              I'm a research assistant in the Data Science for Psychiatry Lab, advised by Roy Adams,
              where I'm building a pipeline that pulls daily medication doses out of free-text
              prescription instructions in EHR data. I also work with the skin lesion team in the
              ARCADE Lab on a benchmark for auditing medical imaging datasets.
            </p>
            <p>
              Before Johns Hopkins I did research in materials science, nuclear physics simulation
              and exoplanet modeling, which led to four publications. I plan to apply to PhD
              programs.
            </p>
          </div>
          <LinkRow links={contactLinks} className="mt-8" />
        </div>

        <aside aria-label="At a glance" className="lg:border-l lg:border-rule lg:pl-8 lg:pt-3">
          <dl className="grid gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-1 lg:gap-5">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="t-label text-ink-subtle">{fact.label}</dt>
                {fact.lines.map((line) => (
                  <dd key={line} className="t-body-sm mt-1 text-ink">
                    {line}
                  </dd>
                ))}
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <Section id="research" title="Research" link={{ label: 'More detail', to: '/research' }}>
        {currentResearch.map((item) => (
          <ResearchEntry
            key={item.id}
            period={item.period}
            status={item.status}
            title={item.title}
            affiliation={item.affiliation}
            description={<p>{item.summary}</p>}
            links={item.links}
          />
        ))}
        <div className="mt-10">
          <h3 className="t-label text-ink-subtle">Before Johns Hopkins</h3>
          <ul className="mt-3 max-w-[54rem] divide-y divide-rule border-y border-rule">
            {earlierResearch.map((item) => (
              <li
                key={item.id}
                className="grid gap-1 py-3 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-6"
              >
                <span className="t-meta pt-0.5 text-ink-subtle">{item.period}</span>
                <span className="t-body-sm text-ink-muted">
                  <span className="text-ink">{item.title}.</span> {item.summary}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="news" title="News">
        <NewsList items={news} />
      </Section>

      <Section id="publications" title="Publications">
        <div className="border-b border-rule">
          {publications.map((publication) => (
            <PublicationEntry key={publication.doi} publication={publication} />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Software projects" link={{ label: 'All projects', to: '/projects' }}>
        <div className="border-b border-rule">
          {featuredProjects.map((project) => (
            <ProjectEntry
              key={project.id}
              title={project.title}
              period={project.period}
              context={project.context}
              summary={project.summary}
              myPart={project.myPart}
              links={project.links.slice(0, 3)}
            />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="t-body max-w-measure text-ink">
          Email is the easiest way to reach me:{' '}
          <TextLink href={`mailto:${profile.email}`}>{profile.email}</TextLink>. I'm glad to hear
          about research opportunities, or just to talk about clinical NLP and medical imaging.
        </p>
        <LinkRow links={contactLinks.filter((link) => link.label !== 'Email')} className="mt-4" />
      </Section>
    </>
  )
}
