export type ResearchTrack = {
  id: string
  title: string
  period: string
  question: string
  contribution: string
  methods: string[]
  outcome: string
}

export type Publication = {
  title: string
  venue: string
  year: string
  doi: string
  context: string
  contribution: string
  researchTrack: string
  link?: string
}

export const publishedPaperCount = 3
export const additionalDoiOutputCount = 1

export type ProjectLink = {
  label: string
  href: string
  external?: boolean
}

export type FlagshipProject = {
  title: string
  eyebrow: string
  summary: string
  researchRelevance: string
  stack: string[]
  evidence: string[]
  links: ProjectLink[]
  heroImage: string
  heroLabel: string
  previewImages: string[]
}

export type EngineeringExperience = {
  title: string
  context: string
  focus: string[]
  skills: string[]
  nextDetails: string[]
}

export const homepagePathways = [
  {
    title: 'Projects',
    description:
      'Inspect featured AI systems, public evidence, and selected engineering experience.',
    to: '/projects',
  },
  {
    title: 'Research',
    description:
      'Scientific work across healthcare AI, materials science, astronomy, and nuclear physics—with methods, contributions, and publications.',
    to: '/research',
  },
  {
    title: 'Contact',
    description:
      'For research collaborations, AI systems roles, and technical build opportunities.',
    to: '/#contact',
  },
]

export const flagshipProjects: FlagshipProject[] = [
  {
    title: 'Atlas',
    eyebrow: 'Featured system · public demo and case study',
    summary:
      'AI-assisted course search and schedule planning with constraint-aware recommendations, auditability, and retrieval over JHU course data.',
    researchRelevance:
      'A concrete AI systems case study in high-stakes student planning: grounding, clarification, evaluation, and human-inspectable recommendations.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'pgvector'],
    evidence: ['Live demo', 'Presentation', 'Architecture', 'Screenshots', 'Evaluation notes'],
    links: [
      { label: 'Case Study', href: '/projects/atlas' },
      { label: 'Live Demo', href: 'https://team-02-frontend.onrender.com/', external: true },
      { label: 'Screenshots', href: '/projects/atlas#evidence' },
      {
        label: 'Presentation',
        href: '/ppt/AI%20Enabled%20SWE%20Final%20Presentation.pptx',
        external: true,
      },
    ],
    previewImages: [
      '/screenshots/atlas-proof-4-schedule-audit.jpeg',
      '/screenshots/atlas-proof-3-eval-raw-data.png',
      '/screenshots/atlas-proof-1-weekly-calendar.jpeg',
    ],
    heroImage: '/screenshots/atlas-proof-4-schedule-audit.jpeg',
    heroLabel: 'AI planning + schedule audit',
  },
  {
    title: 'LaunchStack',
    eyebrow: 'Featured system · Human-AI collaboration',
    summary:
      'Open-source founder knowledge graph and AI workflow platform for grounded answers, controlled rewriting, and research-to-campaign generation.',
    researchRelevance:
      'Shows human-in-the-loop AI system design: source-aware generation, visible process, explicit approval, and implementation-backed reliability.',
    stack: ['React', 'TypeScript', 'AI workflows', 'Knowledge graph', 'Document automation'],
    evidence: ['Live demo', 'GitHub repo', 'Commit proof', 'Screenshot gallery', 'Technical notes'],
    links: [
      { label: 'Case Study', href: '/projects/pdr-ai' },
      { label: 'Live Demo', href: 'https://launch-stack-web.vercel.app/', external: true },
      { label: 'GitHub', href: 'https://github.com/JunzheShi0702/LaunchStack', external: true },
      { label: 'Screenshots', href: '/projects/pdr-ai#evidence' },
      {
        label: 'Commit Proof',
        href: 'https://github.com/JunzheShi0702/LaunchStack/commit/ce08f6e',
        external: true,
      },
    ],
    previewImages: [
      '/screenshots/pdr-proof-1-diff.app.jpeg',
      '/screenshots/pdr-proof-2-process.app.jpeg',
      '/screenshots/pdr-proof-2-results.app.jpeg',
    ],
    heroImage: '/screenshots/pdr-proof-1-diff.app.jpeg',
    heroLabel: 'Diff review + human approval',
  },
]

export const engineeringExperience: EngineeringExperience[] = [
  {
    title: 'ReferMe',
    context:
      'Selected engineering experience focused on product workflow design and full-stack implementation.',
    focus: ['Product engineering', 'User workflow design', 'Full-stack implementation'],
    skills: ['System decomposition', 'User-facing flow design', 'Practical delivery'],
    nextDetails: ['Context', 'Tech stack', 'My contributions', 'Engineering challenges'],
  },
  {
    title: 'Go Microservices',
    context:
      'Selected systems engineering experience focused on service boundaries, backend architecture, and operational thinking.',
    focus: ['Service architecture', 'Backend systems', 'Operational thinking'],
    skills: ['Go', 'Microservice boundaries', 'API design'],
    nextDetails: ['Architecture', 'Tech stack', 'My contributions', 'Lessons learned'],
  },
]

export const researchTracks: ResearchTrack[] = [
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI Research Support',
    period: 'Current research support',
    question:
      'REACH-oriented cohort planning for thyroid hormone prescribing patterns in psychiatric contexts.',
    contribution:
      'Supported cohort planning and evidence review, with attention to patient safety, confounding factors, and responsible clinical AI use.',
    methods: [
      'Clinical and AI literature synthesis',
      'Comparative evidence mapping',
      'Patient-safety and governance framing',
    ],
    outcome:
      'Contributed research planning and evidence quality review for real clinical decision-support questions.',
  },
  {
    id: 'perovskite',
    title: 'Perovskite Solar Cell Optimization',
    period: '2023 - 2024',
    question:
      'Collaborated in a PVSC research team on trap engineering and workflow improvements for higher-performance perovskite devices.',
    contribution:
      'Supported experimental workflow refinement, interpretation of device-performance results, and manuscript development.',
    methods: [
      'Experimental setup optimization',
      'Materials characterization interpretation',
      'Manuscript and review co-authoring',
    ],
    outcome:
      'Supported device-performance interpretation, workflow refinement, and publication output.',
  },
  {
    id: 'exoplanet',
    title: 'Exoplanet Transit Modeling',
    period: '2022 - 2023',
    question:
      'Modeled WASP transit light curves using TESS observations to estimate planet-star radius ratios.',
    contribution:
      'Built the light-curve processing and fitting workflow, analyzed model behavior, and communicated the radius-estimation methodology.',
    methods: [
      'Lightkurve pipeline construction',
      'Time-series fitting with NumPy',
      'Visualization with Matplotlib',
    ],
    outcome:
      'Built curve-fitting and residual-analysis workflows for published modeling methodology.',
  },
  {
    id: 'subatomic',
    title: 'Subatomic Physics / Glauber Monte Carlo',
    period: '2021 - 2022',
    question:
      'Analyzed Pb-Pb nucleus collision asymmetry and eccentricity relationships using ROOT and Glauber Monte Carlo simulations.',
    contribution:
      'Implemented and evaluated simulation analyses across collision conditions, then translated the numerical findings into publication-ready results.',
    methods: [
      'ROOT on Ubuntu Linux',
      'Harmonic-level asymmetry optimization',
      'Large-scale collision simulation analysis',
    ],
    outcome:
      'Quantified collision-eccentricity relationships with publication-backed numerical findings.',
  },
]

export const publications: Publication[] = [
  {
    title:
      'Trap Engineering Using Oxygen-Doped Graphitic Carbon Nitride for High-Performance Perovskite Solar Cells',
    venue: 'Materials Chemistry C',
    year: '2023',
    doi: '10.1039/D3TC01711G',
    context:
      'Perovskite materials engineering study improving carrier dynamics and device performance.',
    contribution:
      'Experimental workflow refinement, device-performance interpretation, and manuscript development.',
    researchTrack: 'Perovskite Solar Cell Optimization',
    link: 'https://doi.org/10.1039/D3TC01711G',
  },
  {
    title:
      'Optimization of Asymmetry of Pb-Pb Nucleus Collision Based on Glauber Model Simulation',
    venue: 'Theoretical and Natural Science',
    year: '2023',
    doi: '10.54254/2753-8818/28/20230428',
    context:
      'Simulation-driven study on asymmetry behavior under different collision conditions.',
    contribution:
      'Glauber Monte Carlo analysis, harmonic-level asymmetry evaluation, and numerical interpretation.',
    researchTrack: 'Subatomic Physics / Glauber Monte Carlo',
    link: 'https://doi.org/10.54254/2753-8818/28/20230428',
  },
  {
    title: 'The Relationship Between and Eccentricities Based on Glauber Model',
    venue: 'Theoretical and Natural Science',
    year: '2023',
    doi: '10.54254/2753-8818/11/20230390',
    context:
      'Extended analysis on geometric eccentricity relationships in heavy-ion collision simulations.',
    contribution:
      'Collision simulation analysis and interpretation of geometric eccentricity relationships.',
    researchTrack: 'Subatomic Physics / Glauber Monte Carlo',
    link: 'https://doi.org/10.54254/2753-8818/11/20230390',
  },
  {
    title:
      'Hyperbolic-Tangent-Function-Modeled Transit Light Curve and Planet Radius Calculation',
    venue: 'Theoretical and Natural Science',
    year: '2023',
    doi: '10.54254/2753-8818/34/20240704',
    context:
      'Exoplanet transit modeling paper on robust light-curve fitting and radius estimation.',
    contribution:
      'Light-curve pipeline development, quantitative fitting, visualization, and radius estimation.',
    researchTrack: 'Exoplanet Transit Modeling',
    link: 'https://doi.org/10.54254/2753-8818/34/20240704',
  },
]
