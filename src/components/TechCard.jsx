const BADGE_STYLES = 
{
  Popular: 'bg-blue-50 text-blue-600',
  'Full-Stack': 'bg-violet-50 text-violet-600',

  Essential: 'bg-blue-50 text-blue-600',
  Lightweight: 'bg-cyan-50 text-cyan-700',
  'Batteries-Included': 'bg-amber-50 text-amber-700',
  'Top SQL': 'bg-blue-50 text-blue-600',
  Flexible: 'bg-teal-50 text-teal-700',
  Fast: 'bg-orange-50 text-orange-600',
  'Type-Safe': 'bg-indigo-50 text-indigo-600',
  Versatile: 'bg-green-50 text-green-600',
  'Utility-First': 'bg-pink-50 text-pink-600',

  Reusable: 'bg-teal-50 text-teal-700',
  Containers: 'bg-blue-50 text-blue-600',
  Design: 'bg-violet-50 text-violet-600',
}

export default function TechCard({ technology, isAdded, onAdd }) 
{
  const { name, category, description, icon, rating, difficulty, badge } = technology
  const badgeClass = BADGE_STYLES[badge] || 'bg-slate-100 text-slate-600'

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-slate-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          <img src={icon} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
        </div>
        {badge && (
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${badgeClass}`}>
            {badge}
          </span>
        )}
      </div>
      <h3 className="mt-4 font-[var(--font-display)] text-lg font-bold text-[var(--color-ink)]">
        {name}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[var(--color-border-soft)] pt-3">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {category}
        </span>
        <span className="text-xs font-medium text-[var(--color-ink-muted)]">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-[var(--color-ink)]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.88 1.18 6.86L12 17.77l-6.18 3.24L7 14.15 2 9.27l7.1-1.01z" />
          </svg>
          {rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? 'cursor-not-allowed bg-slate-100 text-slate-400'
            : 'bg-[var(--color-dark-btn)] text-white hover:bg-[var(--color-dark-btn-hover)]'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}
