const dosageFlowImage = '/research/reach/levothyroxine-dosage-flow.png'

const researchQuestion =
  'How do thyroid hormone prescribing patterns differ between psychiatry and primary care for adults with anxiety or depression and no known thyroid dysfunction?'

const contributionItems = [
  'Frame the protocol-defined research question for a public portfolio without turning ongoing work into claimed findings.',
  'Map the dose-representation problem around structured medication fields, SIG text, TSH context, medication type, and cohort exclusions.',
  'Review relevant clinical and AI literature around thyroid hormone prescribing, psychiatric augmentation, EHR methodology, and LLM validation risk.',
  'Help define what should remain bounded: cohort size, dosage parsing accuracy, patient-level data, and clinical conclusions before validation.',
]

const literatureLenses = [
  {
    title: 'Thyroid prescribing and safety',
    body:
      'Supports the clinical motivation around off-label thyroid hormone use, TSH context, aggressive dosing, and exogenous thyrotoxicosis risk.',
  },
  {
    title: 'EHR-derived evidence',
    body:
      'Frames why medication history, orders, labs, demographics, and encounter context have to be interpreted as research data rather than raw truth.',
  },
  {
    title: 'Clinical AI boundaries',
    body:
      'Keeps the LLM role narrow: medication-instruction interpretation support that still needs validation before any clinical conclusion.',
  },
]

const boundaryItems = [
  'No preliminary results or psychiatry-versus-primary-care conclusions are claimed.',
  'No patient-level data, raw notes, or identifiable clinical examples are shown.',
  'No validated LLM accuracy, benchmark, or model-performance number is claimed.',
  'The six-figure working-set estimate is not described as patients, final cohort size, or completed analysis.',
]

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/85">
      {children}
    </p>
  )
}

export function ReachProjectPage() {
  return (
    <article className="mx-auto max-w-6xl space-y-20">
      <section className="pt-8 md:pt-12">
        <a
          href="/research"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 underline decoration-cyan-200/60 underline-offset-4 transition hover:text-white"
        >
          <span aria-hidden="true">&lt;</span>
          Back to Research
        </a>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/85">
          REACH · Clinical AI / EHR Research Note
        </p>
        <h1 className="mt-5 max-w-[1020px] text-balance text-[clamp(3rem,5.2vw,5.5rem)] font-semibold leading-[1.02] tracking-tight text-white">
          Thyroid-prescribing research through careful EHR methodology.
        </h1>
        <p className="mt-7 max-w-4xl text-lg leading-[1.6] text-slate-300 md:text-[1.2rem]">
          REACH is research support, not a product case study. The work centers on
          defining a clinical question, representing thyroid dosage from EHR
          medication data, and keeping public claims inside the evidence currently
          supported by the protocol and local methodology artifacts.
        </p>
      </section>

      <section className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>Clinical Motivation</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Thyroid augmentation touches psychiatry, primary care, and dose safety.
          </h2>
        </div>
        <p className="text-base leading-8 text-slate-300 md:text-lg">
          The protocol studies adults with anxiety or depression who receive
          antidepressant treatment and lack known thyroid dysfunction. It asks how
          thyroid hormone therapy is prescribed across psychiatry and primary care,
          including TSH measurements, initial and final dose, thyroid hormone type,
          and safety-related outcomes such as exogenous thyrotoxicosis.
        </p>
      </section>

      <section className="border-t border-white/10 pt-12">
        <SectionLabel>Research Question</SectionLabel>
        <h2 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          {researchQuestion}
        </h2>
        <p className="mt-7 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
          The portfolio-safe version adds the measurement problem: how
          EHR-derived dose, TSH, medication type, and cohort logic can characterize
          prescribing intensity and safety risk without overstating results before
          analysis and validation are complete.
        </p>
      </section>

      <section className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionLabel>Data & Cohort Context</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            De-identified REACH EHR data stays inside the secure research environment.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-300 md:text-lg">
          <p>
            The protocol uses de-identified Johns Hopkins REACH EHR data under
            IRB00345054. The broader REACH resource is described as including
            approximately 8 million individuals, with analysis performed through
            approved secure systems such as Databricks or SAFER applications.
          </p>
          <p>
            Roy Adams / the project PI estimated that the thyroid-dosage workflow
            may involve a six-figure working set: roughly 100K-300K EHR-derived
            entries or records, pending exact public unit wording. This is not a
            patient count, final analytic cohort size, or completed analysis claim.
          </p>
        </div>
      </section>

      <section className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionLabel>Dosage Methodology</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Daily dose is a representation problem, not just a database field.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            The local methodology flow separates direct calculation, invalid
            missing-field cases, conflict handling, and an LLM-assisted branch for
            interpreting levothyroxine instructions when SIG text and structured
            medication fields require interpretation.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            That LLM role is bounded to medication-instruction support. The page
            does not claim validated accuracy, clinical recommendation ability, or
            completed downstream statistical results.
          </p>
        </div>

        <figure className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/45 p-3">
          <div className="overflow-hidden rounded-[1rem] bg-white">
            <img
              src={dosageFlowImage}
              alt="Levothyroxine daily dose calculation flowchart showing structured-field calculation, invalid missing-field cases, conflict handling, and LLM-assisted SIG parsing."
              className="mx-auto block max-h-[720px] w-full object-contain"
            />
          </div>
          <figcaption className="mt-3 border-t border-white/10 px-2 py-4 text-sm leading-relaxed text-slate-400">
            Methodology artifact: levothyroxine daily-dose parsing flow. It is
            shown as research-process evidence, not as proof of validated clinical
            extraction.
          </figcaption>
        </figure>
      </section>

      <section className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionLabel>My Contribution</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Research framing, methodology boundaries, and literature context.
          </h2>
        </div>
        <ol className="space-y-6">
          {contributionItems.map((item, index) => (
            <li key={item} className="grid gap-4 sm:grid-cols-[4rem_1fr]">
              <span className="font-mono text-sm text-cyan-100/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-base leading-8 text-slate-300 md:text-lg">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-white/10 pt-12">
        <div className="max-w-4xl">
          <SectionLabel>Literature Context</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            The literature corpus supports context, not personal publication claims.
          </h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {literatureLenses.map((item) => (
            <article key={item.title}>
              <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-400">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionLabel>Current Boundary</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            The useful part is the restraint.
          </h2>
        </div>
        <ul className="space-y-5">
          {boundaryItems.map((item) => (
            <li
              key={item}
              className="border-l border-cyan-100/25 pl-5 text-base leading-8 text-slate-300 md:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-white/10 pt-12">
        <SectionLabel>Why It Matters</SectionLabel>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          Clinical AI starts before the model: with cohort logic, measurement
          choices, and claims that can survive validation.
        </h2>
        <p className="mt-7 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
          REACH belongs in the research track because it shows the clinical side of
          the same portfolio theme: evidence has to stay interpretable before it
          becomes a recommendation. Here, that means thyroid hormone prescribing,
          psychiatry versus primary care, TSH, dose, medication type, and a clear
          boundary between methodology support and completed clinical results.
        </p>
      </section>
    </article>
  )
}
