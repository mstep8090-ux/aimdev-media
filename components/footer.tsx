'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="lp-footer">
      <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="footer-logo">
              <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
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
                <span className="logo-text footer-logo-text">Aimdev Media</span>
              </Link>
              </div>
            </div>
            <p className="footer-tagline">
              Transforming sermons into viral moments and building thriving digital communities for churches worldwide.
            </p>
            <div className="footer-social" style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
              <a href="#" className="footer-social-link" aria-label="Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
            <p className="footer-tagline" style={{ marginTop: '16px', fontSize: '11px', opacity: 0.8 }}>
              Average response time: 2-4 hours.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Services</h4>
            <ul className="footer-links">
              <li>
                <Link href="/services">Sermon Clipping</Link>
              </li>
              <li>
                <Link href="/services">Social Media Management</Link>
              </li>
              <li>
                <Link href="/services">Video Editing</Link>
              </li>
              <li>
                <Link href="/services">Graphic Design</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/about#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-row">
            <div className="footer-copyright">© 2026 Aimdev Media. All rights reserved.</div>
            <div className="footer-legal">
              <a href="#">TERMS OF SERVICE</a>
              <a href="#">PRIVACY POLICY</a>
            </div>
          </div>
          <div className="footer-brand-huge" style={{ letterSpacing: '0.05em' }}>
            <span>A</span>
            <span>i</span>
            <span>m</span>
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>M</span>
            <span>e</span>
            <span>d</span>
            <span>i</span>
            <span>a</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
