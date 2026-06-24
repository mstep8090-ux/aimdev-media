'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    // Sync theme
    const savedTheme = localStorage.getItem('rg_theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
      }
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('rg_theme', 'light')
      setTheme('light')
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('rg_theme', nextTheme)
    if (nextTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  const links = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
  ]

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link href="/" className="logo-component nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="Aimdev Media Logo"
              width={24}
              height={24}
              style={{
                borderRadius: '6px',
                marginRight: '8px',
                objectFit: 'contain'
              }}
            />
            <span className="logo-text nav-logo-text">Aimdev Media</span>
          </Link>

          <div className="nav-links">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="nav-actions">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={toggleTheme}
                className="theme-cycle-btn"
                aria-label="Toggle theme"
                style={{ cursor: 'pointer' }}
              >
                <span className="theme-cycle-icon-el">
                  {theme === 'light' ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4"/>
                      <path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
                      <path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                    </svg>
                  )}
                </span>
              </button>
              <Link href="/about#contact" className="btn btn-ghost btn-sm">
                Get Started
              </Link>
              <Link href="/about#contact" className="btn btn-primary btn-sm">
                Book Audit
              </Link>
            </div>
          </div>

          <div className="nav-mobile-right">
            <button
              onClick={toggleTheme}
              className="theme-cycle-btn nav-mobile-theme-btn"
              aria-label="Toggle theme"
            >
              <span className="theme-cycle-icon-el">
                {theme === 'light' ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
                    <path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                  </svg>
                )}
              </span>
            </button>
            <button
              className={`nav-mobile-toggle ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="2" width="24" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" viewBox="0 0 24 24" className="lucide lucide-menu menu-icon">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="2" width="24" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" viewBox="0 0 24 24" className="lucide lucide-x close-icon">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-menu-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          )
        })}
        <div className="mobile-menu-actions" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Link href="/about#contact" className="btn btn-ghost" style={{ flex: 1, textAlign: 'center' }} onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
          <Link href="/about#contact" className="btn btn-primary" style={{ flex: 1.2, textAlign: 'center' }} onClick={() => setIsOpen(false)}>
            Book Audit
          </Link>
        </div>
      </div>
    </>
  )
}
