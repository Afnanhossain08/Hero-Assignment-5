import { useEffect, useState } from 'react'
import logoText from '../assets/logo-text.png'

const NAV_LINKS = 
[
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() 
{
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => 
    {
    function handleResize() 
    {
      if (window.innerWidth >= 768) 
        setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => 
    {
    if (!menuOpen) return undefined
    function handleKeyDown(event) 
    {
      if (event.key === 'Escape') 
        setMenuOpen(false)
    }

    const previousOverflow=document.body.style.overflow
    document.body.style.overflow ='hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => 
        {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile*/}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-ink)] md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 
          (
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 2l16 12M18 2L2 14" strokeLinecap="round" />
            </svg>
          ):
          (
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 2h18M1 8h18M1 14h18" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Desktop brand (left) */}
        <a href="#home" className="hidden shrink-0 md:block">
          <img src={logoText} alt="Dev Stack" className="h-8 w-auto" />
        </a>

        {/* Mobile (center) */}
        <a href="#home" className="md:hidden">
          <img src={logoText} alt="Dev Stack" className="h-7 w-auto" />
        </a>

        {/* Center link desktop*/}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  link.label === 'Home'
                    ? 'text-sm font-medium text-[var(--color-accent)]'
                    : 'text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right button */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#sign-in"
            className="text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            Sign In
          </a>
          <a
            href="#sign-up"
            className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-5"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile  menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--color-surface-muted)] ${
                  link.label === 'Home' ? 'text-[var(--color-accent)]' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
