import { useId } from 'react'
import type { ReactNode } from 'react'
import { ArrowDown } from 'lucide-react'

const frameClass = 'space-y-2.5 rounded-lg border border-rule bg-paper-sunken p-4 sm:p-5'
const boxClass = 'rounded-md border border-rule bg-paper-raised'

function Step({ children }: { children: ReactNode }) {
  return (
    <p className="t-caption flex items-center gap-1.5 pl-1 text-ink-subtle">
      <ArrowDown aria-hidden="true" strokeWidth={1.75} className="h-3.5 w-3.5 shrink-0" />
      {children}
    </p>
  )
}

function Evidence({ children }: { children: ReactNode }) {
  return <mark className="rounded-sm bg-accent-tint px-0.5 text-ink">{children}</mark>
}

const doseEvents = [
  { dose: '1 × 88 mcg', when: 'Monday to Saturday' },
  { dose: '2 × 88 mcg', when: 'Sunday' },
]

export function ReachFigure() {
  return (
    <figure>
      <div
        role="img"
        aria-label="Example: the instruction 'Take 1 tab (88 mcg) by mouth daily, 2 tabs on Sundays' becomes two dosing events, one 88 mcg tablet Monday to Saturday and two on Sunday, which Python averages to 100.6 mcg a day."
        className={frameClass}
      >
        <p className="t-label text-ink-subtle">Prescription instruction</p>
        <p className={`${boxClass} px-3 py-2 font-mono text-[0.8125rem] leading-6 text-ink`}>
          Take <Evidence>1 tab</Evidence> (<Evidence>88 mcg</Evidence>) by mouth{' '}
          <Evidence>daily</Evidence>, <Evidence>2 tabs</Evidence> on <Evidence>Sundays</Evidence>
        </p>
        <Step>Qwen3.5-9B returns dosing events and the words behind them</Step>
        <div className="grid grid-cols-2 gap-2">
          {doseEvents.map((event) => (
            <div key={event.when} className={`${boxClass} px-3 py-2`}>
              <p className="t-meta text-ink">{event.dose}</p>
              <p className="t-caption text-ink-muted">{event.when}</p>
            </div>
          ))}
        </div>
        <Step>Python normalizes the schedule and does the arithmetic</Step>
        <p className="flex items-baseline justify-between gap-3 rounded-md bg-accent px-3 py-2 text-on-accent">
          <span className="t-ui">Average daily dose</span>
          <span className="font-mono text-[0.9375rem] font-medium">100.6 mcg</span>
        </p>
      </div>
      <figcaption className="t-caption mt-2.5 text-ink-subtle">
        A made-up instruction, not patient data. Llama 8B screens and cleans the text before this
        step.
      </figcaption>
    </figure>
  )
}

const hairStrands = [
  'M8 38 C 34 50 66 46 112 70',
  'M14 96 C 40 78 76 86 110 48',
  'M20 66 C 44 60 58 26 92 10',
  'M40 116 C 52 92 64 80 100 98',
  'M4 58 C 24 66 30 84 46 112',
  'M70 6 C 74 30 96 40 116 34',
]

function LesionTile({ hair, label }: { hair: boolean; label: string }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '')

  return (
    <div className="space-y-1.5">
      <svg viewBox="0 0 120 120" aria-hidden="true" className="block w-full rounded-md">
        <defs>
          <radialGradient id={`skin-${id}`} cx="50%" cy="45%" r="62%">
            <stop offset="0%" stopColor="#f2d8c4" />
            <stop offset="100%" stopColor="#d4a181" />
          </radialGradient>
          <radialGradient id={`lesion-${id}`} cx="47%" cy="46%" r="56%">
            <stop offset="0%" stopColor="#3b2115" />
            <stop offset="55%" stopColor="#6a3f28" />
            <stop offset="100%" stopColor="#9c6b50" stopOpacity="0.8" />
          </radialGradient>
          <clipPath id={`scope-${id}`}>
            <circle cx="60" cy="60" r="56" />
          </clipPath>
        </defs>
        <rect width="120" height="120" fill="#121212" />
        <g clipPath={`url(#scope-${id})`}>
          <rect width="120" height="120" fill={`url(#skin-${id})`} />
          <path
            d="M60 33 C 77 31 90 44 88 59 C 87 74 76 88 58 86 C 42 85 31 73 33 58 C 34 44 45 34 60 33 Z"
            fill={`url(#lesion-${id})`}
          />
          {hair ? (
            <g fill="none" stroke="#20140c" strokeWidth="1.3" strokeLinecap="round">
              {hairStrands.map((d) => (
                <path key={d} d={d} />
              ))}
            </g>
          ) : null}
        </g>
      </svg>
      <p className="t-meta text-center text-ink-muted">{label}</p>
    </div>
  )
}

const auditSteps = ['Train ResNet-18', 'Test on real ISIC images', 'Review the errors by hand']

export function ArcadeFigure() {
  return (
    <figure>
      <div
        role="img"
        aria-label="Schematic: the same synthetic skin lesion rendered with and without hair, labeled from the render settings. A ResNet-18 trained on images like these is tested on real ISIC images, and its errors are reviewed by hand."
        className={frameClass}
      >
        <p className="t-label text-ink-subtle">Same scene, one render setting changed</p>
        <div className="grid grid-cols-2 gap-3">
          <LesionTile hair={false} label="hair = 0" />
          <LesionTile hair label="hair = 1" />
        </div>
        <Step>Labels come from the render settings</Step>
        <ol className="grid grid-cols-3 gap-2">
          {auditSteps.map((step, index) => (
            <li key={step} className={`${boxClass} px-2.5 py-2`}>
              <p className="t-meta text-ink-subtle">{index + 1}</p>
              <p className="t-caption text-ink">{step}</p>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="t-caption mt-2.5 text-ink-subtle">
        A schematic drawing, not actual renders or results.
      </figcaption>
    </figure>
  )
}

export function ResearchFigure({ id }: { id: string }) {
  if (id === 'reach') return <ReachFigure />
  if (id === 'arcade') return <ArcadeFigure />
  return null
}
