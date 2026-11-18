import { Fragment } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Note } from '../components/ui/Note'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'

const pipeline = [
  { step: 'Instruction text', detail: 'Medication name, SIG text, row ID' },
  { step: 'Llama 8B', detail: 'Screens rows and cleans the text' },
  { step: 'Qwen3.5-9B', detail: 'Dosing events as JSON, with the words behind them' },
  { step: 'Python', detail: 'Normalizes the schedule and does the arithmetic' },
  { step: 'Daily dose', detail: 'Average, in micrograms' },
]

const steps = [
  'The model sees the medication name fields, the instruction text and a row ID. The structured dose, unit and frequency fields stay out of the prompt, and the row ID ties each output to its row.',
  "Llama 8B screens out rows that aren't relevant and cleans up the instruction text.",
  'Qwen3.5-9B, with its own prompt, returns the dosing events as JSON, along with the words in the instruction that support each one.',
  'Python normalizes the schedule and computes the average daily dose.',
  "Each stage logs its status. The runner repairs invalid JSON, strips Qwen's thinking blocks and records which stage failed.",
]

const myPart = [
  'Early on, a literature review for the cohort study, covering thyroid hormone prescribing and safety along with recent work on language models in clinical reasoning and mental health AI.',
  'Narrowing what the model sees to the instruction text and medication names, with the row ID kept for tracing.',
  'Splitting the work between two models and moving all of the dose arithmetic into Python.',
  'Making failures visible at each stage, from reading the data through parsing and the dose calculation.',
  'Running the pipeline end to end on GPUs, including the first comparisons with and without retrieval.',
]

function PipelineDiagram() {
  return (
    <figure className="mb-8">
      <div role="list" className="flex flex-col gap-1 md:flex-row md:items-stretch md:gap-0">
        {pipeline.map((item, index) => (
          <Fragment key={item.step}>
            {index > 0 ? (
              <div aria-hidden="true" className="flex items-center justify-center py-0.5 text-ink-subtle md:px-1.5 md:py-0">
                <ArrowDown strokeWidth={1.75} className="h-4 w-4 md:hidden" />
                <ArrowRight strokeWidth={1.75} className="hidden h-4 w-4 md:block" />
              </div>
            ) : null}
            <div role="listitem" className="flex-1 rounded-lg border border-rule bg-paper-raised px-3 py-3">
              <p className="t-ui text-ink">{item.step}</p>
              <p className="t-caption mt-1 text-ink-muted">{item.detail}</p>
            </div>
          </Fragment>
        ))}
      </div>
      <figcaption className="t-caption mt-3 max-w-measure text-ink-muted">
        <span className="font-semibold text-ink">Figure 1.</span> The pipeline as it runs now. A
        retrieval step that adds up to three similar instructions before extraction is being
        tested.
      </figcaption>
    </figure>
  )
}

export function ReachProjectPage() {
  return (
    <>
      <PageHeader
        backTo="/research"
        backLabel="Research"
        kicker="Research note"
        title="Extracting levothyroxine doses from EHR prescription text"
        lede="Notes on the dose extraction pipeline I work on in the Data Science for Psychiatry Lab, for anyone who wants more than the summary on the research page."
        meta="Data Science for Psychiatry Lab, Johns Hopkins University · Advisor: Roy Adams · Feb 2026 – present"
      >
        <Note label="Status">
          This is ongoing work. There are no clinical findings and no validated accuracy numbers
          here, because there is no human-labeled reference set yet.
        </Note>
      </PageHeader>

      <Section id="background" number="1" title="Background" className="md:mt-16">
        <div className="t-body prose-body max-w-measure text-ink">
          <p>
            The lab is planning a cohort study of thyroid hormone prescribing in adults who take
            antidepressants and have no known thyroid disease. It compares psychiatry with primary
            care and looks at TSH testing, starting and final doses, which thyroid hormone was
            prescribed, and safety outcomes such as exogenous thyrotoxicosis.
          </p>
          <p>
            Several of those depend on dose, and a daily dose has to be worked out from the
            free-text instructions (the SIG). Those can get messy: escalating or phased regimens,
            schedules that don't repeat weekly, supplemental doses on top of a daily one.
          </p>
        </div>
      </Section>

      <Section id="question" number="2" title="The question" className="md:mt-16">
        <p className="t-lede max-w-measure text-ink">
          Can noisy levothyroxine instructions be turned into an average daily dose, in
          micrograms, that a person can check, without asking a language model to do the
          arithmetic?
        </p>
      </Section>

      <Section id="data" number="3" title="Data" className="md:mt-16">
        <p className="t-body max-w-measure text-ink">
          The study uses de-identified EHR data from Johns Hopkins&apos; REACH resource, and all
          analysis runs inside approved secure environments. No patient-level data, notes or
          identifiers appear on this site.
        </p>
      </Section>

      <Section id="pipeline" number="4" title="How the pipeline works" className="md:mt-16">
        <PipelineDiagram />
        <ol className="t-body prose-body max-w-measure text-ink">
          {steps.map((step) => (
            <li key={step.slice(0, 24)}>{step}</li>
          ))}
        </ol>
      </Section>

      <Section id="now" number="5" title="What I'm working on now" className="md:mt-16">
        <div className="t-body prose-body max-w-measure text-ink">
          <p>
            Two additions are in progress. One is a retrieval step that shows the extractor up to
            three similar instructions before it answers. The other is an index that groups
            instructions by dosing pattern, built from the model&apos;s judgments about which
            instructions follow the same pattern.
          </p>
          <p>
            I want to know whether retrieval lowers the dose error. In the first full runs,
            retrieval was losing doses. The cause was numbers coming back
            written out as words, which the parser couldn&apos;t read, so I fixed the parser and
            the prompt and reran the baseline. The retrieval rerun is next, and a real answer
            will need the labeled reference set.
          </p>
        </div>
      </Section>

      <Section id="my-part" number="6" title="My part" className="md:mt-16">
        <ul className="t-body prose-body max-w-measure text-ink">
          {myPart.map((item) => (
            <li key={item.slice(0, 24)}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="limits" number="7" title="Limits" className="md:mt-16">
        <p className="t-body max-w-measure text-ink">
          An early internal check of the first, single-model version found 15 of 20 sampled rows
          acceptable. Most failures were invalid JSON, escalating or phased schedules that
          don&apos;t repeat weekly, or supplemental doses. I treat that check, and the later runs,
          as debugging aids.
        </p>
      </Section>
    </>
  )
}
