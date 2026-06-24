import { SectionTitle } from '../components/ui/SectionTitle'

const links = [
  {
    label: 'Email',
    href: 'mailto:jshi70@jh.edu',
    value: 'jshi70@jh.edu',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/junzheshi',
    value: 'linkedin.com/in/junzheshi',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/JunzheShi0702',
    value: 'github.com/JunzheShi0702',
  },
]

export function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/15 bg-slate-900/80 p-6 md:p-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let us connect"
          subtitle="Open to research collaborations, AI product engineering roles, and technically rigorous build opportunities."
        />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === 'Email' ? undefined : '_blank'}
            rel={link.label === 'Email' ? undefined : 'noreferrer'}
            className="rounded-2xl border border-white/15 bg-slate-900/75 p-5 transition hover:-translate-y-1 hover:border-cyan-200/55"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200/75">
              {link.label}
            </p>
            <p className="mt-2 text-base font-semibold text-white">{link.value}</p>
          </a>
        ))}
      </section>
    </div>
  )
}
