import { featuredProjects, otherProjects } from '../content/siteContent'
import type { Project } from '../content/siteContent'
import { PageHeader } from '../components/ui/PageHeader'
import { ProjectEntry } from '../components/ui/ProjectEntry'
import { Section } from '../components/ui/Section'

function Entry({ project, withImage }: { project: Project; withImage?: boolean }) {
  return (
    <ProjectEntry
      id={project.id}
      title={project.title}
      period={project.period}
      context={project.context}
      summary={project.summary}
      myPart={project.myPart}
      image={withImage ? project.image : undefined}
      imageTo={project.writeUp}
      links={project.links}
    />
  )
}

export function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        lede="Software I've worked on in team projects and during an internship."
      />

      <Section id="team-projects" title="Team projects">
        <div className="border-b border-rule">
          {featuredProjects.map((project) => (
            <Entry key={project.id} project={project} withImage />
          ))}
        </div>
      </Section>

      <Section id="internship" title="Internship">
        <div className="border-b border-rule">
          {otherProjects.map((project) => (
            <Entry key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </>
  )
}
