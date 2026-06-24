export type ResearchTrack = {
  id: string
  title: string
  period: string
  focus: string
  methods: string[]
  impact: string
}

export type Publication = {
  title: string
  venue: string
  year: string
  doi: string
  context: string
  link?: string
}

export const homepagePathways = [
  {
    title: 'Flagship Project Case Studies',
    description:
      'Deep dives into Atlas and PDR AI with product reasoning, system architecture, and lessons learned.',
    to: '/projects/atlas',
  },
  {
    title: 'Research and Publications',
    description:
      'Visual timeline across astronomy, materials science, physics, and healthcare AI support work.',
    to: '/research',
  },
  {
    title: 'Ask Junzhe AI',
    description:
      'Portfolio assistant for Q&A on projects, research trajectory, and technology stack.',
    to: '/ask-junzhe',
  },
]

export const researchTracks: ResearchTrack[] = [
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI Research Support',
    period: '2026 - Present',
    focus:
      'Data Science for Psychiatry Lab: REACH-oriented cohort planning for thyroid hormone prescribing patterns in psychiatric contexts.',
    methods: [
      'Clinical and AI literature synthesis',
      'Comparative evidence mapping',
      'Patient-safety and governance framing',
    ],
    impact:
      'Contributed research planning and evidence quality review for real clinical decision-support questions.',
  },
  {
    id: 'perovskite',
    title: 'Perovskite Solar Cell Optimization',
    period: '2023 - 2024',
    focus:
      'Collaborated in a PVSC research team on trap engineering and workflow improvements for higher-performance perovskite devices.',
    methods: [
      'Experimental setup optimization',
      'Materials characterization interpretation',
      'Manuscript and review co-authoring',
    ],
    impact:
      'Supported efficiency gains from approximately 10% to 20% and produced publication output.',
  },
  {
    id: 'exoplanet',
    title: 'Exoplanet Transit Modeling',
    period: '2022 - 2023',
    focus:
      'Modeled WASP transit light curves using TESS observations to estimate planet-star radius ratios.',
    methods: [
      'Lightkurve pipeline construction',
      'Time-series fitting with NumPy',
      'Visualization with Matplotlib',
    ],
    impact:
      'Achieved high-fit predictive accuracy and published modeling methodology.',
  },
  {
    id: 'subatomic',
    title: 'Subatomic Physics / Glauber Monte Carlo',
    period: '2021 - 2022',
    focus:
      'Analyzed Pb-Pb nucleus collision asymmetry and eccentricity relationships using ROOT and Glauber Monte Carlo simulations.',
    methods: [
      'ROOT on Ubuntu Linux',
      'Harmonic-level asymmetry optimization',
      '10,000+ collision simulation analysis',
    ],
    impact:
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
    link: 'https://doi.org/10.54254/2753-8818/28/20230428',
  },
  {
    title: 'The Relationship Between and Eccentricities Based on Glauber Model',
    venue: 'Theoretical and Natural Science',
    year: '2023',
    doi: '10.54254/2753-8818/11/20230390',
    context:
      'Extended analysis on geometric eccentricity relationships in heavy-ion collision simulations.',
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
    link: 'https://doi.org/10.54254/2753-8818/34/20240704',
  },
]
