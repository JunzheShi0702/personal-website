type SectionTitleProps = {
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="max-w-3xl text-slate-300">{subtitle}</p> : null}
    </div>
  )
}
