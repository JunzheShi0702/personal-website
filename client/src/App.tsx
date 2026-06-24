import './App.css'

const featuredProjects = [
  {
    name: 'CityPulse Dashboard',
    summary:
      'A live urban insights dashboard that turns transit, weather, and social signals into practical city planning decisions.',
    stack: 'React, TypeScript, Node.js, PostgreSQL',
    link: '#',
  },
  {
    name: 'Northlight Commerce',
    summary:
      'A high-performance storefront with instant search, adaptive recommendations, and a checkout flow tuned for mobile.',
    stack: 'Next.js, Tailwind, Stripe, Redis',
    link: '#',
  },
  {
    name: 'Studio Canvas',
    summary:
      'A collaboration platform where design and engineering teams turn rough concepts into production-ready UI systems.',
    stack: 'React, GraphQL, Figma API, Storybook',
    link: '#',
  },
]

const skills = [
  'Frontend Architecture',
  'TypeScript',
  'Design Systems',
  'Performance Optimization',
  'Accessibility',
  'API Design',
]

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to homepage">
          JZ
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">Web Developer and Product Builder</p>
          <h1>
            I build elegant digital products that feel fast, clear, and human.
          </h1>
          <p className="hero-copy">
            I design and develop modern web experiences from first concept to
            production. My work blends clean engineering with strong visual
            direction so every interaction serves a purpose.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href="#contact">
              Let&apos;s Work Together
            </a>
          </div>
          <ul className="hero-stats" aria-label="Quick stats">
            <li>
              <strong>5+</strong>
              Years Building on the Web
            </li>
            <li>
              <strong>30+</strong>
              Product Features Launched
            </li>
            <li>
              <strong>99%</strong>
              Lighthouse Scores on Recent Work
            </li>
          </ul>
        </section>

        <section id="about" className="about section-card">
          <div>
            <p className="eyebrow">About</p>
            <h2>Craft, strategy, and execution in one workflow.</h2>
          </div>
          <p>
            I help founders, teams, and businesses turn rough ideas into
            confident digital products. My process starts with structure and
            narrative, then moves into scalable frontends, API integration, and
            polished UI details that improve usability and retention.
          </p>
        </section>

        <section id="projects" className="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects designed to deliver measurable outcomes.</h2>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <p className="stack">{project.stack}</p>
                <a href={project.link} aria-label={`Open ${project.name}`}>
                  Explore project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-card" aria-label="Core skills">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>What I bring to your team.</h2>
          </div>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="contact section-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Ready to build your next product?</h2>
            <p>
              I am available for freelance projects, contract roles, and product
              collaborations.
            </p>
          </div>
          <a className="btn primary" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </section>
      </main>

      <footer>
        <p>Copyright {year} JZ. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
