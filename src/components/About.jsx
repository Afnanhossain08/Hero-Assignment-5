export default function About({ technologyCount, categoryCount }) 
{
  const stats = [
    { label: 'Technologies catalogued', value: technologyCount },
    { label: 'Categories covered', value: categoryCount },
    { label: 'Cost to use', value: 'Free' },
  ]

  return (
    <section id="about" className="border-b border-[var(--color-border)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20 lg:px-8">
        <div>
          <h2 className="font-[var(--font-display)] text-3xl font-extrabold text-[var(--color-ink)]">
            One place to decide what goes into your next build
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--color-ink-muted)]">
            Dev Stack started as a personal checklist for choosing tools on a
            new project. Instead of reopening old repos to remember which
            database paired well with which framework, everything lives here:
            compare options side by side, then keep a running list of what
            you've settled on.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--color-ink-muted)]">
            Nothing you add gets pushed anywhere your stack lives in this
            session so you can experiment freely before you commit to it in
            a real project.
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-4 md:grid-cols-1">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-center shadow-sm md:text-left"
            >
              <dt className="text-xs font-medium text-[var(--color-ink-muted)]">{stat.label}</dt>
              <dd className="mt-1 font-[var(--font-display)] text-2xl font-bold text-[var(--color-accent)]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
