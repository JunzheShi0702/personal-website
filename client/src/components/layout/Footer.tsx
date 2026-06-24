export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-white/10 pt-5 text-xs text-slate-400">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {year} Junzhe Shi</p>
        <p>Portfolio website: deep-dive layer behind the GitHub README.</p>
      </div>
    </footer>
  )
}
