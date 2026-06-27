export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-white/10 pt-5 text-xs text-slate-400">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {year} Junzhe Shi</p>
        <nav className="flex flex-wrap gap-3" aria-label="Footer">
          <a href="/projects" className="transition hover:text-cyan-100">
            Projects
          </a>
          <a href="/research" className="transition hover:text-cyan-100">
            Research
          </a>
          <a href="/#contact" className="transition hover:text-cyan-100">
            Contact
          </a>
          <a href="mailto:jshi70@jh.edu" className="transition hover:text-cyan-100">
            Email
          </a>
        </nav>
      </div>
    </footer>
  )
}
