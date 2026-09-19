export default function Loader({ label = 'Loading technologies…' }) 
{
  return (
    <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center gap-4 py-24 text-center"
    >
        <span className="relative flex h-10 w-10">
            <span className="absolute inset-0 rounded-full border-4 border-slate-100" />
            <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--color-accent)] animate-spin" />
        </span>
        <p className="text-sm text-[var(--color-ink-muted)]">{label}</p>
    </div>
  );
}