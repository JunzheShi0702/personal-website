// Site copy and records. Publication metadata matches the Crossref record for each DOI, except
// the N_coll paper's title: Crossref's record drops the symbol, so that title follows the paper.

export type ContentLink = {
  label: string
  to?: string
  href?: string
  external?: boolean
  download?: boolean
}

export const profile = {
  name: 'Junzhe Shi',
  position: 'Computer Science, Johns Hopkins University · Class of 2028',
  email: 'jshi70@jh.edu',
  github: 'https://github.com/JunzheShi0702',
  linkedin: 'https://linkedin.com/in/junzheshi',
  cv: '/resume.pdf',
}

export const contactLinks: ContentLink[] = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'CV (PDF)', href: profile.cv, external: true },
  { label: 'GitHub', href: profile.github, external: true },
  { label: 'LinkedIn', href: profile.linkedin, external: true },
]

export type PublicationFigure = {
  src: string
  /** The figure's label in the paper, such as "Fig. 3". */
  label: string
  /** What the figure shows. Used for the enlarge button and the lightbox. */
  caption: string
  /**
   * Why the site may show it: the paper is open access under CC BY 4.0, or the
   * Royal Society of Chemistry lets authors reuse their own figures with credit.
   */
  license: 'cc-by-4.0' | 'rsc-author-reuse'
}

export type Publication = {
  /** Write a subscript as `_{...}`, for example `N_{coll}`. */
  title: string
  authors: string[]
  venue: string
  volume?: string
  issue?: string
  pages?: string
  year: string
  doi: string
  citation: string
  role: string
  /** One figure from the paper, shown as a thumbnail beside the entry. */
  figure?: PublicationFigure
}

// Newest first.
export const publications: Publication[] = [
  {
    title: 'Hyperbolic-Tangent-Function-Modeled Transit Light Curve and Planet Radius Calculation',
    authors: ['Junzhe Shi'],
    venue: 'Theoretical and Natural Science',
    volume: '34',
    issue: '1',
    pages: '134–140',
    year: '2024',
    doi: '10.54254/2753-8818/34/20240704',
    citation:
      'Shi, J. (2024). Hyperbolic-tangent-function-modeled transit light curve and planet radius calculation. Theoretical and Natural Science, 34(1), 134-140. https://doi.org/10.54254/2753-8818/34/20240704',
    role: 'the whole paper, including the light-curve processing code, the fits and the radius estimates.',
    figure: {
      src: '/paper-figures/transit-tanh-fit.webp',
      label: 'Fig. 3',
      caption:
        'The hyperbolic-tangent model (red) fitted to a WASP-12 transit in normalized TESS data. The fitted parameters give the planet radius estimate.',
      license: 'cc-by-4.0',
    },
  },
  {
    title: 'Optimization of Asymmetry of Pb-Pb Nucleus Collision Based on Glauber Model Simulation',
    authors: ['Haotian Xu', 'Junzhe Shi', 'Ziyan Song'],
    venue: 'Theoretical and Natural Science',
    volume: '28',
    issue: '1',
    pages: '206–217',
    year: '2023',
    doi: '10.54254/2753-8818/28/20230428',
    citation:
      'Xu, H., Shi, J., & Song, Z. (2023). Optimization of asymmetry of Pb-Pb nucleus collision based on Glauber model simulation. Theoretical and Natural Science, 28(1), 206-217. https://doi.org/10.54254/2753-8818/28/20230428',
    role: 'the Glauber Monte Carlo runs, the asymmetry analysis across harmonics and the interpretation of the results.',
    figure: {
      src: '/paper-figures/pbpb-ecc2-npart.webp',
      label: 'Fig. 2',
      caption:
        'Average path-length difference over a 20 × 20 grid of second-harmonic eccentricity (ecc2) and number of participants (Npart), generated in ROOT.',
      license: 'cc-by-4.0',
    },
  },
  {
    title: 'The Relationship Between N_{coll} and Eccentricities Based on Glauber Model',
    authors: ['Junzhe Shi'],
    venue: 'Theoretical and Natural Science',
    volume: '11',
    issue: '1',
    pages: '121–127',
    year: '2023',
    doi: '10.54254/2753-8818/11/20230390',
    citation:
      'Shi, J. (2023). The relationship between Ncoll and eccentricities based on Glauber model. Theoretical and Natural Science, 11(1), 121-127. https://doi.org/10.54254/2753-8818/11/20230390',
    role: 'the whole paper, including the collision simulations and the analysis of eccentricity against the number of collisions.',
    figure: {
      src: '/paper-figures/ncoll-ecc1-scatter.webp',
      label: 'Fig. 2(a)',
      caption:
        'Ncoll against Ecc1 for 10,000 simulated collision events, exported from CERN ROOT. The orange line marks the optimum average value.',
      license: 'cc-by-4.0',
    },
  },
  {
    title:
      'Trap Engineering Using Oxygen-Doped Graphitic Carbon Nitride for High-Performance Perovskite Solar Cells',
    authors: [
      'Yaling Lei',
      'Xiaoyan Li',
      'Jingying Liang',
      'Junzhe Shi',
      'Yunhao Wei',
      'Pingli Qin',
      'Hong Tao',
      'Jianjun Chen',
      'Zuojun Tan',
      'Hongwei Lei',
    ],
    venue: 'Journal of Materials Chemistry C',
    volume: '11',
    issue: '29',
    pages: '9860–9870',
    year: '2023',
    doi: '10.1039/D3TC01711G',
    citation:
      'Lei, Y., Li, X., Liang, J., Shi, J., Wei, Y., Qin, P., Tao, H., Chen, J., Tan, Z., & Lei, H. (2023). Trap engineering using oxygen-doped graphitic carbon nitride for high-performance perovskite solar cells. Journal of Materials Chemistry C, 11(29), 9860-9870. https://doi.org/10.1039/D3TC01711G',
    role: 'refining the setup and testing workflow, helping interpret device measurements, and working on the manuscript.',
    figure: {
      src: '/paper-figures/perovskite-graphical-abstract.webp',
      label: 'Graphical abstract',
      caption:
        'The oxygen-doped g-C₃N₄ additive at the SnO₂/perovskite interface, where it mitigates the two main deep traps: uncoordinated Sn dangling bonds and –OH groups.',
      license: 'rsc-author-reuse',
    },
  },
]

export type NewsItem = {
  date: string
  label: string
  text: string
}

export const news: NewsItem[] = [
  {
    date: '2026-09',
    label: 'Sep 2026',
    text: "Started working with the ARCADE Lab's skin lesion team on auditing medical imaging datasets.",
  },
  {
    date: '2026-05',
    label: 'Spring 2026',
    text: 'Built Atlas, a course planning assistant, with a team at Johns Hopkins, and contributed to LaunchStack, an open-source app for AI document work.',
  },
  {
    date: '2026-02',
    label: 'Feb 2026',
    text: 'Joined the Data Science for Psychiatry Lab at Johns Hopkins as a research assistant.',
  },
  {
    date: '2025-05',
    label: 'Summer 2025',
    text: 'Software engineering intern at EchoplusAI.',
  },
  {
    date: '2024-05-31',
    label: 'May 2024',
    text: 'My paper on fitting exoplanet transit light curves came out in Theoretical and Natural Science.',
  },
  {
    date: '2023-12-26',
    label: 'Dec 2023',
    text: 'Paper with Haotian Xu and Ziyan Song on Pb-Pb collision asymmetry in the Glauber model came out in Theoretical and Natural Science.',
  },
  {
    date: '2023-11-17',
    label: 'Nov 2023',
    text: 'My paper on collision eccentricities in the Glauber model came out in Theoretical and Natural Science.',
  },
  {
    date: '2023',
    label: '2023',
    text: 'Co-authored a perovskite solar cell paper in the Journal of Materials Chemistry C and presented the work at the 3rd Optoelectronic Materials and Devices Development Forum.',
  },
]

export type ResearchItem = {
  id: string
  period: string
  title: string
  affiliation?: string
  summary: string
  description: string[]
  note?: string
  status?: 'progress'
  methods?: string[]
  links?: ContentLink[]
  progress?: { label: string; text: string }[]
  /** Shows the matching diagram from components/figures/ResearchFigures. */
  figure?: boolean
}

export const currentResearch: ResearchItem[] = [
  {
    id: 'reach',
    period: 'Feb 2026 – present',
    status: 'progress',
    figure: true,
    title: 'Dose extraction from EHR prescription text',
    affiliation: 'Data Science for Psychiatry Lab, Johns Hopkins University · Advisor: Roy Adams',
    summary:
      'Language models read free-text levothyroxine instructions and pull out the dosing events. Python does the arithmetic, so each daily dose can be checked against the text it came from.',
    description: [
      "The lab is putting together an EHR cohort study, using Johns Hopkins' REACH data, on how thyroid hormone is prescribed to adults who take antidepressants and whether that differs between psychiatry and primary care. I started on the literature review and the study planning.",
      'Most of my time now goes into the dose extraction pipeline, which I run end to end. Llama 8B screens and cleans each prescription instruction, Qwen3.5-9B returns the dosing events along with the words that support them, and plain Python normalizes the schedule and computes the average daily dose. At the moment I am testing whether showing the extractor a few similar instructions first lowers the dose error.',
    ],
    note: "The pipeline isn't clinically validated, and there's no human-labeled reference set yet (one is planned).",
    methods: ['Llama 8B', 'Qwen3.5-9B', 'retrieval', 'Python dose normalization'],
    links: [{ label: 'Research note', to: '/research/reach' }],
  },
  {
    id: 'arcade',
    period: 'Sep 2026 – present',
    status: 'progress',
    figure: true,
    title: 'Synthetic images for auditing medical imaging datasets',
    affiliation:
      'ARCADE Lab, Johns Hopkins University · Project led by Mathias Unberath and Mitchell Pavlak',
    summary:
      'The project plants realistic biases in medical images and checks whether dataset audit methods find them. I render synthetic skin lesion images and train classifiers to see how the rendered artifacts compare with real ones.',
    description: [
      'ARCADE is building a benchmark for auditing large medical imaging datasets. The plan is to insert clinically relevant biases through realistic counterfactual images, then see which audit methods catch them.',
      "I am on the skin lesion team. I generate synthetic dermoscopy images with the project's physics-based renderer, label artifacts such as hair from the render settings, train ResNet-18 classifiers on the synthetic images and test them on real ISIC images, then go through the mistakes by hand.",
    ],
    note: 'Results so far are internal and exploratory, so I am not posting numbers.',
    progress: [
      {
        label: 'Oct 2026',
        text: 'Presented a literature review on medical image editing for model auditing.',
      },
      {
        label: 'Oct 2026',
        text: "Rendered a first batch of 300 synthetic images on the university's GPU cluster, built weak hair labels from the render settings and masks, and trained a first ResNet-18 hair classifier.",
      },
      {
        label: 'Nov 2026',
        text: 'Tested that classifier on a labeled set of real ISIC images to see how well training on synthetic images carries over.',
      },
      {
        label: 'Nov 2026',
        text: 'Checked a candidate fix for how the renderer draws short hair by re-rendering the same samples with one setting changed. Then rendered a second batch of 300 with the revised renderer and ran five-fold cross-validation across both batches, plus a small pilot on scale-bar labels.',
      },
      {
        label: 'Next',
        text: 'Confirm the hair fix with Mitchell, compare a model trained on real images against the synthetic-trained ones, then move on to rulers, scale bars and gentian violet ink marks.',
      },
    ],
    methods: ['Mitsuba 3', 'ResNet-18', 'ISIC dermoscopy images', 'cross-validation'],
  },
]

export const earlierResearch: ResearchItem[] = [
  {
    id: 'perovskite',
    period: 'Jun 2023 – Jun 2024',
    title: 'Trap engineering in perovskite solar cells',
    affiliation: 'Research assistant, Huazhong Agricultural University, Wuhan',
    summary: 'Co-author on a Journal of Materials Chemistry C paper.',
    description: [
      'I worked in a perovskite solar cell group of more than ten people. My part was refining the setup and testing workflow, helping interpret device measurements and working on the manuscript, which became a paper in the Journal of Materials Chemistry C. I presented the work at the 3rd Optoelectronic Materials and Devices Development Forum in 2023.',
    ],
    links: [{ label: 'Paper (DOI)', href: 'https://doi.org/10.1039/D3TC01711G', external: true }],
  },
  {
    id: 'exoplanet',
    period: 'Jun 2022 – Dec 2023',
    title: 'Modeling exoplanet transit light curves',
    affiliation: 'Independent project',
    summary: 'One paper, sole author.',
    description: [
      'I fit TESS light curves of WASP transits with a hyperbolic-tangent model to estimate planet-to-star radius ratios. I wrote the processing and fitting code with Lightkurve and NumPy and spent a lot of time on the residuals. It became a single-author paper.',
    ],
    methods: ['Lightkurve', 'NumPy', 'Matplotlib', 'TESS photometry'],
    links: [
      {
        label: 'Paper (DOI)',
        href: 'https://doi.org/10.54254/2753-8818/34/20240704',
        external: true,
      },
    ],
  },
  {
    id: 'glauber',
    period: 'Jun 2021 – Dec 2022',
    title: 'Glauber Monte Carlo simulations of Pb-Pb collisions',
    summary: 'Two papers on collision geometry.',
    description: [
      'Using ROOT and Glauber Monte Carlo simulations, I studied the geometry of lead-lead collisions: how eccentricity relates to the number of collisions, and how the asymmetry changes across harmonic orders. This led to a single-author paper and a paper with two co-authors.',
    ],
    methods: ['ROOT', 'Glauber Monte Carlo', 'Linux'],
    links: [
      {
        label: 'Eccentricity paper (DOI)',
        href: 'https://doi.org/10.54254/2753-8818/11/20230390',
        external: true,
      },
      {
        label: 'Asymmetry paper (DOI)',
        href: 'https://doi.org/10.54254/2753-8818/28/20230428',
        external: true,
      },
    ],
  },
]

export type Project = {
  id: string
  title: string
  period: string
  context: string
  summary: string
  myPart: string
  image?: { src: string; alt: string }
  gallery?: { src: string; alt: string; caption: string }[]
  writeUp?: string
  links: ContentLink[]
}

export const featuredProjects: Project[] = [
  {
    id: 'atlas',
    title: 'Atlas',
    period: 'Feb – May 2026',
    context: 'Team project, Johns Hopkins',
    summary:
      'A course search and schedule planner for Johns Hopkins students. They can ask for courses in plain language, and each suggestion is tied to course records, evaluation data and a specific change to their schedule.',
    myPart:
      'the schedule data model and saving, the weekly events API behind the calendar, loading course evaluations with the raw rows visible, and tests and CI near the end.',
    image: {
      src: '/screenshots/atlas-schedule-audit.webp',
      alt: 'Atlas schedule view with an AI schedule audit next to a weekly calendar',
    },
    gallery: [
      {
        src: '/screenshots/atlas-weekly-calendar.webp',
        alt: 'Atlas weekly calendar with courses added from the chat and an overlap warning',
        caption: 'Courses added from the chat land on the calendar.',
      },
      {
        src: '/screenshots/atlas-evaluation-data.webp',
        alt: 'Raw course evaluation rows behind a summary, instructor names blurred',
        caption: 'The raw evaluation rows behind a summary.',
      },
      {
        src: '/screenshots/atlas-custom-event.webp',
        alt: 'Dialog for editing a custom event called Lab meeting',
        caption: 'Editing a custom event.',
      },
    ],
    writeUp: '/projects/atlas',
    links: [
      { label: 'Write-up', to: '/projects/atlas' },
      { label: 'Demo', href: 'https://atlas.junzheshi.com', external: true },
      {
        label: 'Code',
        href: 'https://github.com/JunzheShi0702/atlas-course-assistant',
        external: true,
      },
      {
        label: 'Credits',
        href: 'https://github.com/JunzheShi0702/atlas-course-assistant/blob/master/CREDITS.md',
        external: true,
      },
      {
        label: 'Slides (PPTX)',
        href: '/ppt/AI%20Enabled%20SWE%20Final%20Presentation.pptx',
        external: true,
      },
    ],
  },
  {
    id: 'launchstack',
    title: 'LaunchStack',
    period: 'Feb – May 2026',
    context: 'Open-source team project',
    summary:
      'An open-source TypeScript app for AI-assisted document work. Generated text has to be reviewed and accepted before it changes a document.',
    myPart:
      'the rewrite workflow (file import, step-by-step options, a preview with a diff view) and its handoff into the editor, trend research clients for the Reddit, X, LinkedIn and Bluesky APIs, and Track Changes (DOCX redlining) for legal review.',
    image: {
      src: '/screenshots/launchstack-diff-review.webp',
      alt: 'LaunchStack diff view of AI-suggested edits waiting for review',
    },
    gallery: [
      {
        src: '/screenshots/launchstack-rewrite-options.webp',
        alt: 'Rewrite options with an instruction, tone presets and guardrails',
        caption: 'Choosing what to rewrite and how.',
      },
      {
        src: '/screenshots/launchstack-editor-handoff.webp',
        alt: 'The accepted rewrite open in the editor',
        caption: 'The accepted text in the editor.',
      },
      {
        src: '/screenshots/launchstack-campaign-draft.webp',
        alt: 'A campaign draft with trend references',
        caption: 'A campaign draft with its trend references.',
      },
    ],
    writeUp: '/projects/pdr-ai',
    links: [
      { label: 'Write-up', to: '/projects/pdr-ai' },
      { label: 'Demo', href: 'https://launch-stack-web.vercel.app/', external: true },
      { label: 'Code', href: 'https://github.com/JunzheShi0702/LaunchStack', external: true },
      {
        label: 'Redlining commit',
        href: 'https://github.com/JunzheShi0702/LaunchStack/commit/ce08f6e',
        external: true,
      },
    ],
  },
]

export const otherProjects: Project[] = [
  {
    id: 'referme',
    title: 'ReferMe',
    period: 'May – Aug 2025',
    context: 'Internship, EchoplusAI',
    summary: 'A web app where people can ask for referrals and offer them.',
    myPart:
      'sign-up, login and profile pages in Angular, plus the Node.js and Express services behind authentication and profiles.',
    links: [],
  },
  {
    id: 'go-microservices',
    title: 'Go microservices',
    period: 'May – Aug 2025',
    context: 'Internship, EchoplusAI',
    summary: 'Two backend services in Go: a broker that routes API calls and a central logging service.',
    myPart: 'both services, plus deploying them with Docker and Kubernetes and a Makefile for the routine steps.',
    links: [],
  },
]
