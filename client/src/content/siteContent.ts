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
  authors: string
  venue: string
  year: string
  doi: string
  pages?: string
  citation: string
  context: string
  contribution: string
  researchTrack: string
  link?: string
}

export const publishedPaperCount = 4

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
    title: 'Research',
    description:
      'Trace the progression from physics and materials to AI systems and clinical AI.',
    to: '/research',
  },
  {
    title: 'Publications',
    description:
      'Read formal DOI-linked citations with venues, years, authors, and contribution notes.',
    to: '/publications',
  },
  {
    title: 'Projects',
    description:
      'Inspect featured AI systems with demos, case studies, source links, and implementation evidence.',
    to: '/projects',
  },
  {
    title: 'CV',
    description:
      'Download the current academic CV as a PDF.',
    to: '/cv',
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
    evidence: [
      'AI course planning',
      'Retrieval-grounded advising',
      'Schedule audit agent',
      'Constraint-aware ranking',
      'Custom event reasoning',
      'pgvector semantic search',
    ],
    links: [
      { label: 'Case Study', href: '/projects/atlas' },
      { label: 'Live Demo', href: 'https://atlas.junzheshi.com', external: true },
      {
        label: 'GitHub',
        href: 'https://github.com/JunzheShi0702/atlas-course-assistant',
        external: true,
      },
      {
        label: 'Credits',
        href: 'https://github.com/JunzheShi0702/atlas-course-assistant/blob/master/CREDITS.md',
        external: true,
      },
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
    evidence: [
      'AI knowledge graph',
      'Source-grounded generation',
      'Human-in-the-loop review',
      'Agentic workflow design',
      'RAG answer synthesis',
      'AI document automation',
    ],
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
    title: 'REACH Clinical AI Research Support',
    period: 'Current research support',
    question:
      'How do thyroid hormone prescribing patterns differ between psychiatry and primary care for adults with anxiety or depression and no known thyroid dysfunction?',
    contribution:
      'Support research-question and methodology framing for an active REACH EHR study, including thyroid-dose representation, cohort boundaries, literature context, and claims that should wait for validation.',
    methods: [
      'De-identified REACH EHR protocol review',
      'Thyroid-dose methodology framing',
      'Clinical and AI literature review',
    ],
    outcome:
      'Active research-support work; no preliminary clinical findings, validated LLM accuracy, or completed downstream statistical analysis are claimed publicly.',
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
    authors:
      'Yaling Lei, Xiaoyan Li, Jingying Liang, Junzhe Shi, Yunhao Wei, Pingli Qin, Hong Tao, Jianjun Chen, Zuojun Tan, and Hongwei Lei',
    venue: 'Journal of Materials Chemistry C',
    year: '2023',
    doi: '10.1039/D3TC01711G',
    pages: '9860-9870',
    citation:
      'Lei, Y., Li, X., Liang, J., Shi, J., Wei, Y., Qin, P., Tao, H., Chen, J., Tan, Z., & Lei, H. (2023). Trap engineering using oxygen-doped graphitic carbon nitride for high-performance perovskite solar cells. Journal of Materials Chemistry C, 11(29), 9860-9870. https://doi.org/10.1039/D3TC01711G',
    context:
      'Perovskite materials engineering study improving carrier dynamics and device performance.',
    contribution:
      'Experimental workflow refinement, device-performance interpretation, and manuscript development.',
    researchTrack: 'Perovskite Solar Cell Optimization',
    link: 'https://doi.org/10.1039/D3TC01711G',
  },
  {
    title: 'The Relationship Between and Eccentricities Based on Glauber Model',
    authors: 'Junzhe Shi',
    venue: 'Theoretical and Natural Science',
    year: '2023',
    doi: '10.54254/2753-8818/11/20230390',
    pages: '121-127',
    citation:
      'Shi, J. (2023). The relationship between and eccentricities based on Glauber model. Theoretical and Natural Science, 11(1), 121-127. https://doi.org/10.54254/2753-8818/11/20230390',
    context:
      'Extended analysis on geometric eccentricity relationships in heavy-ion collision simulations.',
    contribution:
      'Collision simulation analysis and interpretation of geometric eccentricity relationships.',
    researchTrack: 'Subatomic Physics / Glauber Monte Carlo',
    link: 'https://doi.org/10.54254/2753-8818/11/20230390',
  },
  {
    title:
      'Optimization of Asymmetry of Pb-Pb Nucleus Collision Based on Glauber Model Simulation',
    authors: 'Haotian Xu, Junzhe Shi, and Ziyan Song',
    venue: 'Theoretical and Natural Science',
    year: '2023',
    doi: '10.54254/2753-8818/28/20230428',
    pages: '206-217',
    citation:
      'Xu, H., Shi, J., & Song, Z. (2023). Optimization of asymmetry of Pb-Pb nucleus collision based on Glauber model simulation. Theoretical and Natural Science, 28(1), 206-217. https://doi.org/10.54254/2753-8818/28/20230428',
    context:
      'Simulation-driven study on asymmetry behavior under different collision conditions.',
    contribution:
      'Glauber Monte Carlo analysis, harmonic-level asymmetry evaluation, and numerical interpretation.',
    researchTrack: 'Subatomic Physics / Glauber Monte Carlo',
    link: 'https://doi.org/10.54254/2753-8818/28/20230428',
  },
  {
    title:
      'Hyperbolic-Tangent-Function-Modeled Transit Light Curve and Planet Radius Calculation',
    authors: 'Junzhe Shi',
    venue: 'Theoretical and Natural Science',
    year: '2024',
    doi: '10.54254/2753-8818/34/20240704',
    pages: '134-140',
    citation:
      'Shi, J. (2024). Hyperbolic-tangent-function-modeled transit light curve and planet radius calculation. Theoretical and Natural Science, 34(1), 134-140. https://doi.org/10.54254/2753-8818/34/20240704',
    context:
      'Exoplanet transit modeling paper on robust light-curve fitting and radius estimation.',
    contribution:
      'Light-curve pipeline development, quantitative fitting, visualization, and radius estimation.',
    researchTrack: 'Exoplanet Transit Modeling',
    link: 'https://doi.org/10.54254/2753-8818/34/20240704',
  },
]
