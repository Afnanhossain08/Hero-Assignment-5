export default function StackSidebar({ stack, onRemove, onRemoveAll })
{
    const count = stack.length;

    return (
    <aside className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-ink)]">
        Your Stack
      </h3>
      <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-[var(--color-border)] px-4 py-10 text-center">
          <p className="text-sm text-[var(--color-ink-muted)]">Your stack is empty.</p>
        </div>
      ) : (
        <ul className="mt-5 flex flex-col gap-3">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] p-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                <img src={tech.icon} alt="" aria-hidden="true" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[var(--color-ink)]">{tech.name}</p>
                <p className="truncate text-xs text-[var(--color-ink-muted)]">{tech.category}</p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from your stack`}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-lg border border-red-200 bg-white py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  )
}