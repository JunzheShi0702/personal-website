const researchQuestion =
  'How can noisy EHR levothyroxine instructions be converted into inspectable, normalized average daily dose estimates without asking a model to perform the final arithmetic?'

const contributionItems = [
  'Narrowed the SIG_LLM route so model-facing Databricks inputs center on row_id, medication name fields, and SIG text rather than structured dose/unit/frequency fields.',
  'Separated model responsibilities: Llama 8B supports relevance preprocessing and SIG cleaning; Qwen3.5-9B handles structured JSON extraction with its own prompt profile.',
  'Shifted the extraction prompt toward evidence-grounded raw structure, leaving schedule normalization and average_daily_dose_mcg arithmetic to deterministic Python logic.',
  'Improved debugging and failure visibility across Databricks read, model loading, preprocessing, extraction, JSON repair, parser status, and deterministic calculation status.',
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
      'Frames why medication history, SIG text, medication names, labs, demographics, and encounter context have to be interpreted as research data rather than raw truth.',
  },
  {
    title: 'Clinical AI boundaries',
    body:
      'Keeps the LLM role narrow: relevance preprocessing, SIG cleaning, and structured extraction support that still needs validation before any clinical conclusion.',
  },
]

const architectureSteps = [
  {
    title: 'Input boundary',
    body:
      'The SIG route sends row_id, med_display_name, med_name, and sig to the model-facing path. Structured Databricks dose, unit, and frequency fields are intentionally kept outside the extraction prompt.',
  },
  {
    title: 'Model routing',
    body:
      'Llama 8B handles relevance preprocessing and SIG cleaning. Qwen3.5-9B uses a separate extraction prompt profile for evidence-grounded JSON structure.',
  },
  {
    title: 'Deterministic dose math',
    body:
      'The model extracts raw dosage events and evidence. Python then normalizes schedules and calculates average_daily_dose_mcg deterministically.',
  },
  {
    title: 'Traceable failures',
    body:
      'The runner includes invalid JSON repair, Qwen think-wrapper handling, non-thinking inference support, model-cache flags, and progress logs for each major stage.',
  },
]

const boundaryItems = [
  'No preliminary results or psychiatry-versus-primary-care conclusions are claimed.',
  'No patient-level data, raw notes, real row IDs, table names, or internal debug payloads are shown.',
  'No validated LLM accuracy, production-readiness, benchmark, or clinical model-performance number is claimed.',
  'The internal baseline review is treated as a debugging signal, not as a validated accuracy result.',
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
          extracting normalized average daily levothyroxine dose from noisy EHR
          medication instructions, while keeping the model role inspectable and
          the public claims inside the evidence currently supported.
        </p>
        <div className="mt-8 max-w-3xl border-l border-cyan-100/20 pl-5">
          <p className="text-sm font-semibold uppercase tracking-[0.13em] text-cyan-100/85">
            Affiliation
          </p>
          <p className="mt-2 text-base leading-relaxed text-slate-300 md:text-lg">
            Data Science for Psychiatry Lab, Johns Hopkins University. Advised by{' '}
            <a
              href="mailto:radams@jhu.edu"
              className="font-semibold text-cyan-100 underline decoration-cyan-200/45 underline-offset-4 transition hover:text-white"
            >
              Roy Adams
            </a>
            .
          </p>
        </div>
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
          This pipeline supports the broader thyroid-prescribing study by making
          dose representation inspectable. It does not claim completed clinical
          results, validated extraction accuracy, or production readiness.
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
            Public wording avoids unsourced working-set counts. The page does not
            state a final analytic cohort size, patient count, or completed
            analysis volume for the levothyroxine-dose pipeline.
          </p>
        </div>
      </section>

      <section className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionLabel>Dosage Methodology</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Daily dose is extracted by models, then normalized by deterministic code.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            Recent work moved the pipeline away from an early SIG-only,
            single-model flow. The current architecture separates model-assisted
            interpretation from final arithmetic so dosage estimates remain
            easier to inspect and debug.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            The model-facing route uses SIG-centered inputs; row_id acts as a
            provenance anchor. Structured dose fields are not silently mixed into
            the extraction prompt, and the final daily-dose calculation belongs to
            Python rather than the LLM.
          </p>
        </div>

        <div className="space-y-7">
          {architectureSteps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-4 border-l border-cyan-100/20 pl-5 sm:grid-cols-[3rem_1fr]"
            >
              <p className="font-mono text-sm text-cyan-200/65">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div>
                <h3 className="text-xl font-semibold text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-400">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionLabel>My Contribution</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Clinical NLP pipeline iteration with explicit ownership boundaries.
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
            The current result is an inspectable iteration, not a solved clinical system.
          </h2>
        </div>
        <div className="space-y-7">
          <p className="text-base leading-8 text-slate-300 md:text-lg">
            A small internal baseline review before the multi-model branch found
            that roughly 15 of 20 sampled examples were acceptable. The failures
            clustered around invalid JSON, complex escalating or phased non-weekly
            regimens, and supplemental daily-dose instructions.
          </p>
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
        </div>
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
          becomes a recommendation. Here, that means levothyroxine SIG text,
          normalized daily dose, TSH context, medication type, and a clear boundary
          between methodology iteration and completed clinical results.
        </p>
      </section>
    </article>
  )
}
