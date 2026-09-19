const BLUEPRINTS = [
  {
    title: 'SaaS Dashboard',
    description:
      'A subscription product with charts, user accounts, and an admin panel that needs to feel instant.',
    techIds: ['react', 'nextjs', 'postgresql', 'tailwindcss'],
  },
  {
    title: 'Realtime Chat App',
    description:
      'Messages that show up the moment they are sent, with presence indicators and a fast in-memory layer.',
    techIds: ['nodejs', 'express', 'redis', 'typescript'],
  },
  {
    title: 'Content-Heavy API',
    description:
      'A backend serving flexible, document-shaped content to multiple front ends without rigid migrations.',
    techIds: ['python', 'django', 'mongodb', 'docker'],
  },
]

export default function ProjectsShowcase({ technologies, addedIds, onAdd }) {
  const findTech = (id) => technologies.find((tech) => tech.id === id)

  return (
    <section id="projects" className="border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-[var(--font-display)] text-3xl font-extrabold text-[var(--color-ink)]">
            Blueprints to borrow from
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-muted)]">
            Not sure where to start? These are common combinations for a few
            project types — add any of them straight to your stack.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {BLUEPRINTS.map((blueprint) => (
            <div
              key={blueprint.title}
              className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-ink)]">
                {blueprint.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {blueprint.description}
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {blueprint.techIds.map((id) => {
                  const tech = findTech(id)
                  if (!tech) return null
                  const isAdded = addedIds.has(tech.id)
                  return (
                    <li
                      key={id}
                      className="flex items-center gap-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-2"
                    >
                      <img src={tech.icon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
                      <span className="flex-1 text-sm font-medium text-[var(--color-ink)]">
                        {tech.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => onAdd(tech)}
                        disabled={isAdded}
                        className={`text-xs font-semibold ${
                          isAdded
                            ? 'cursor-not-allowed text-[var(--color-ink-faint)]'
                            : 'text-[var(--color-accent)] hover:opacity-80'
                        }`}
                      >
                        {isAdded ? 'Added' : 'Add'}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
