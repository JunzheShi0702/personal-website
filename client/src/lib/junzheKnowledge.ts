export type JunzheKnowledgeSection = {
  title: string
  summary: string
  facts: string[]
  TODO?: string
}

export type JunzheKnowledgeBase = {
  profile: JunzheKnowledgeSection
  education: JunzheKnowledgeSection
  projects: JunzheKnowledgeSection
  research: JunzheKnowledgeSection
  skills: JunzheKnowledgeSection
  contact: JunzheKnowledgeSection
  website: JunzheKnowledgeSection
}

export const junzheKnowledge: JunzheKnowledgeBase = {
  profile: {
    title: 'Profile',
    summary:
      'Junzhe Shi is a builder and researcher focused on AI-assisted product systems, human-in-the-loop workflows, and explainable recommendation experiences.',
    facts: [
      'His portfolio emphasizes projects that make model behavior inspectable through citations, diffs, constraints, and user approval.',
      'His work spans software engineering, applied AI, scientific modeling, and research communication.',
      'He prefers decision-support products that expose evidence and tradeoffs instead of hiding them behind opaque automation.',
    ],
    TODO: 'Add resume summary and current role details after reviewing the latest resume.',
  },
  education: {
    title: 'Education',
    summary:
      'Junzhe studies at Johns Hopkins University and connects technical coursework with applied AI and research systems.',
    facts: [
      'The site uses Johns Hopkins visual identity cues and highlights academic planning, research, and engineering work.',
      'His academic background connects computing, data analysis, and scientific modeling.',
    ],
    TODO: 'Add exact degree, major/minor, expected graduation date, honors, and transcript-level coursework summary.',
  },
  projects: {
    title: 'Projects',
    summary:
      'The website highlights Atlas and LaunchStack / PDR AI as flagship projects.',
    facts: [
      'Atlas is an AI-assisted academic planning platform with course discovery, schedule operations, conflict-aware planning, and evaluation transparency.',
      'Atlas emphasizes constraint-aware recommendations, source-backed course information, and user-editable schedules.',
      'LaunchStack is an open-source knowledge graph for founders and growing teams.',
      'LaunchStack consolidates scattered documents, meeting notes, customer calls, messages, and repositories into a searchable knowledge layer.',
      'LaunchStack includes diff-first rewriting, research-grounded campaign generation, source attribution, and human approval workflows.',
      'The LaunchStack repository is public at https://github.com/JunzheShi0702/LaunchStack.',
      'The LaunchStack deployment is https://launch-stack-web.vercel.app/.',
    ],
    TODO: 'Add deeper architecture notes, commit summaries, screenshots, and user outcomes for each project.',
  },
  research: {
    title: 'Research',
    summary:
      'Junzhe’s research spans healthcare AI research support, perovskite solar cell optimization, exoplanet transit modeling, and subatomic physics simulation.',
    facts: [
      'Healthcare AI work includes research support around cohort planning, evidence review, patient safety, and responsible clinical AI framing.',
      'Perovskite solar cell work involved experimental workflow refinement, device-performance interpretation, and manuscript development.',
      'Exoplanet work modeled WASP transit light curves using TESS observations, Lightkurve, NumPy, and Matplotlib.',
      'Subatomic physics work used ROOT and Glauber Monte Carlo simulation to analyze Pb-Pb collision asymmetry and eccentricity relationships.',
      'The research page frames these areas as scientific modeling for decisions under uncertainty.',
    ],
    TODO: 'Add research summaries, lab names, paper abstracts, and publication-specific contribution notes.',
  },
  skills: {
    title: 'Skills',
    summary:
      'Junzhe’s technical work centers on TypeScript, React, Node.js, AI API integration, data systems, and quantitative research tooling.',
    facts: [
      'Frontend work includes React, TypeScript, Vite, Tailwind CSS, responsive design, and polished product interfaces.',
      'Backend and systems work includes Node.js, server-side API routes, PostgreSQL, pgvector, validation, tests, and deployment workflows.',
      'AI/ML work includes retrieval-style context grounding, prompt design, human-in-the-loop AI UX, source attribution, and evaluation-oriented interfaces.',
      'Research tooling includes Python, NumPy, Matplotlib, Lightkurve, ROOT, and simulation/data-analysis workflows.',
    ],
    TODO: 'Add verified resume skills, course projects, and proficiency levels.',
  },
  contact: {
    title: 'Contact',
    summary:
      'The website includes contact pathways for people who want to discuss projects, research, or collaboration.',
    facts: [
      'Visitors should use the contact section or links on the website for current contact information.',
      'The chatbot should not invent phone numbers, private emails, or unavailable social links.',
    ],
    TODO: 'Add exact public email, LinkedIn, GitHub, and preferred contact wording.',
  },
  website: {
    title: 'Website',
    summary:
      'This site is Junzhe’s portfolio, with pages for projects, research, resume, contact, and Ask Junzhe.',
    facts: [
      'The homepage introduces Junzhe’s focus, signature lens, project pathways, research, resume, and contact sections.',
      'The Atlas page explains academic planning product work and engineering contributions.',
      'The LaunchStack / PDR AI page explains open-source knowledge graph and AI document workflow contributions.',
      'The research page consolidates research tracks and publications.',
    ],
    TODO: 'Add future website changelog, resume ingestion, and expanded project detail extraction.',
  },
}

export function getRelevantJunzheContext(message: string): string {
  const lowerMessage = message.toLowerCase()
  const selected = new Set<keyof JunzheKnowledgeBase>(['profile'])

  const addWhen = (section: keyof JunzheKnowledgeBase, keywords: string[]) => {
    if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
      selected.add(section)
    }
  }

  addWhen('education', ['education', 'school', 'johns hopkins', 'jhu', 'degree', 'major', 'coursework'])
  addWhen('projects', ['project', 'atlas', 'launchstack', 'pdr', 'product', 'built', 'github'])
  addWhen('research', ['research', 'publication', 'paper', 'lab', 'physics', 'exoplanet', 'perovskite', 'healthcare'])
  addWhen('skills', ['skill', 'tech', 'stack', 'ai', 'ml', 'typescript', 'react', 'python', 'backend'])
  addWhen('contact', ['contact', 'email', 'linkedin', 'reach', 'hire', 'collaborate'])
  addWhen('website', ['website', 'site', 'portfolio', 'page', 'resume'])

  if (selected.size === 1) {
    selected.add('projects')
    selected.add('research')
    selected.add('skills')
  }

  return [...selected]
    .map((key) => {
      const section = junzheKnowledge[key]
      return [
        `## ${section.title}`,
        section.summary,
        ...section.facts.map((fact) => `- ${fact}`),
      ].join('\n')
    })
    .join('\n\n')
}
