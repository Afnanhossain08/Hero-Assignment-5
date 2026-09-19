import logoText from '../assets/logo-text.png'

const LINK_GROUPS = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Technologies', href: '#technologies' },
      { label: 'Projects', href: '#projects' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home">
              <img src={logoText} alt="Dev Stack" className="h-8 w-auto" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-ink-muted)]">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex items-center gap-5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-[var(--color-ink)]">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--color-ink-faint)]">
            © {year} Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="text-xs text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]">
              Privacy
            </a>
            <a href="#terms" className="text-xs text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
