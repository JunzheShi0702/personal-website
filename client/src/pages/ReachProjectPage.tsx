const reachSections = [
  {
    title: 'Problem',
    body:
      'Clinical AI work can move too quickly from available EHR data to modeled conclusions. REACH starts earlier: defining what cohort should be studied, what clinical context matters, and where evidence quality or confounding could mislead interpretation.',
  },
  {
    title: 'Motivation',
    body:
      'Thyroid hormone prescribing patterns in psychiatric contexts sit at the intersection of medication history, diagnosis, patient safety, and clinician decision-making. A useful AI research workflow has to respect that complexity before any model or dashboard is trusted.',
  },
  {
    title: 'Research Question',
    body:
      'How can EHR-based cohort planning help study thyroid hormone prescribing patterns in psychiatric contexts while preserving patient-safety, confounding, and evidence-quality constraints?',
  },
  {
    title: 'My Contribution',
    body:
      'I supported research-question refinement, clinical and AI literature synthesis, comparative evidence mapping, and cohort-planning discussions. My role focused on making assumptions explicit and helping separate feasible data questions from claims that would require stronger empirical validation.',
  },
  {
    title: 'Current Work',
    body:
      'Completed work includes evidence review, research framing, and cohort-planning support. Ongoing work concerns sharper cohort definitions and responsible interpretation. Future work may include deeper EHR analysis or decision-support evaluation, but this page does not claim completed results from those steps.',
  },
  {
    title: 'Why It Matters',
    body:
      'REACH gives the website a concrete clinical AI center of gravity. It connects earlier quantitative modeling work to the harder question of how AI systems should behave when the evidence affects healthcare decisions.',
  },
]

const statusBoundaries = [
  ['Completed', 'Literature synthesis, evidence-quality review, research-question refinement, and cohort-planning support.'],
  ['Ongoing', 'More precise cohort definitions, clinical framing, and patient-safety interpretation.'],
  ['Future', 'EHR analysis, stronger empirical evaluation, and decision-support implications if the data and study design support them.'],
]

export function ReachProjectPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/15 bg-slate-950/80 p-6 md:p-8 lg:p-10">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 transition hover:text-cyan-100"
        >
          <span aria-hidden="true">&lt;</span>
          Back to Projects
        </a>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
          REACH · Clinical AI Research Support
        </p>
        <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Cohort planning and evidence review for responsible clinical AI
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          REACH represents my current movement toward clinical AI: not by claiming
          finished model results, but by doing the careful research work that makes
          later EHR analysis interpretable.
        </p>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        {statusBoundaries.map(([label, detail]) => (
          <article
            key={label}
            className="rounded-2xl border border-white/15 bg-slate-900/70 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
              {label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{detail}</p>
          </article>
        ))}
      </section>

      <section className="space-y-4">
        {reachSections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-white/15 bg-slate-900/70 p-5 md:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/70">
              {section.title}
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base">
              {section.body}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
          Research connection
        </p>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-200">
          The progression is deliberate: physics taught simulation under uncertainty;
          materials work taught experimental evidence and publication discipline; AI
          systems work taught grounding and human review; REACH applies those habits to
          clinical evidence, where careful boundaries matter most.
        </p>
      </section>
    </div>
  )
}
