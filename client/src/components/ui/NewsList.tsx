import type { NewsItem } from '../../content/siteContent'

export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ol className="max-w-[50rem] divide-y divide-rule border-y border-rule">
      {items.map((item) => (
        <li
          key={`${item.date}-${item.label}`}
          className="grid gap-1 py-3 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-4"
        >
          <time dateTime={item.date} className="t-meta pt-0.5 text-ink-subtle">
            {item.label}
          </time>
          <p className="t-body-sm text-ink">{item.text}</p>
        </li>
      ))}
    </ol>
  )
}
