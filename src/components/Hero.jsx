import bannerStack from '../assets/banner-stack.png'

export default function Hero() 
{
  return (
    <section id="home" className="border-b border-[var(--color-border)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="font-[var(--font-display)] text-4xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink-muted)]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={bannerStack}
            alt="3D illustration of a glowing, layered technology stack"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}
