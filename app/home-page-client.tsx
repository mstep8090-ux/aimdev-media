'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

// Live Feed mock events
const MOCK_EVENTS = [
  {
    platform: 'tiktok',
    source: '@gracefamily',
    views: '48.2K',
    time: '2m ago',
    score: 96,
    title: 'Sunday Sermon: Finding Peace in Chaos (Reel Highlight)',
  },
  {
    platform: 'youtube',
    source: 'Hope Chapel',
    views: '74.9K',
    time: '5m ago',
    score: 93,
    title: 'Why Community Matters More Than Ever (Short Clip)',
  },
  {
    platform: 'instagram',
    source: '@metrochurch',
    views: '28.1K',
    time: '11m ago',
    score: 91,
    title: 'Youth Summer Camp 2026 Promo Reel',
  },
  {
    platform: 'facebook',
    source: 'Elevate Ministry',
    views: '12.4K',
    time: '14m ago',
    score: 88,
    title: 'Pastor John: Embracing Gratitude (Daily Quote overlay)',
  },
  {
    platform: 'youtube',
    source: 'Faith Center',
    views: '53.6K',
    time: '22m ago',
    score: 94,
    title: 'Overcoming Anxiety: Sunday Message Clip',
  },
  {
    platform: 'tiktok',
    source: '@covenantlife',
    views: '61.2K',
    time: '31m ago',
    score: 95,
    title: 'Worship Highlights: Open the Gates of Heaven',
  }
]

export function HomePageClient() {
  // Rotating text index
  const rotatingWords = ['Viral', 'Online', 'Growing', 'Global']
  const [wordIdx, setWordIdx] = useState(0)

  // Live feed cards list
  const [feedCards, setFeedCards] = useState<any[]>([])
  const [feedIdx, setFeedIdx] = useState(0)

  // FAQ tab selection
  const [faqTab, setFaqTab] = useState<'general' | 'services' | 'pricing'>('general')
  const [faqActiveItem, setFaqActiveItem] = useState<number | null>(null)

  // Ref for tilt screenshot
  const screenshotRef = useRef<HTMLDivElement>(null)

  // 1. Word Rotator
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % rotatingWords.length)
    }, 2800)
    return () => clearInterval(wordInterval)
  }, [])

  // 2. Dynamic Live Feed Stack Logic
  useEffect(() => {
    // Seed initial 3 cards
    const initial = [
      { ...MOCK_EVENTS[0], key: 0, level: 0 },
      { ...MOCK_EVENTS[1], key: 1, level: 1 },
      { ...MOCK_EVENTS[2], key: 2, level: 2 },
    ]
    setFeedCards(initial)
    setFeedIdx(3)
  }, [])

  useEffect(() => {
    if (feedCards.length === 0) return

    const feedInterval = setInterval(() => {
      setFeedCards((prev) => {
        // Drop the oldest card (level 2)
        const nextCards = prev.map((card) => {
          if (card.level === 0) return { ...card, level: 1 }
          if (card.level === 1) return { ...card, level: 2 }
          return card
        }).filter((card) => card.level <= 2)

        // Add a new card at level 0
        const newCardData = MOCK_EVENTS[feedIdx % MOCK_EVENTS.length]
        const newCard = {
          ...newCardData,
          key: Date.now(),
          level: 0,
        }

        setFeedIdx((idx) => idx + 1)
        return [newCard, ...nextCards]
      })
    }, 3200)

    return () => clearInterval(feedInterval)
  }, [feedCards, feedIdx])

  // 3. 3D Tilt Screenshot Handler
  useEffect(() => {
    const handleScroll = () => {
      if (!screenshotRef.current) return
      const scrollY = window.scrollY
      const tiltZone = 1000
      const maxTilt = 10
      const progress = Math.min(scrollY / tiltZone, 1)
      const tilt = maxTilt * (1 - progress)
      screenshotRef.current.style.transform = `perspective(1200px) rotateX(${tilt}deg)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'tiktok':
        return (
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        )
      case 'youtube':
        return (
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
          </svg>
        )
      case 'instagram':
        return (
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        )
      case 'facebook':
        return (
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        )
      default:
        return null
    }
  }

  // FAQ contents
  const faqItems = {
    general: [
      {
        q: 'Do you work with churches of all sizes?',
        a: 'Yes! We work with everything from small churches (100 people) to large organizations (5,000+). We scale our services based on your goals and budget.'
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. Monthly packages can be paused or cancelled with 2 weeks notice. No long-term contracts required.'
      }
    ],
    services: [
      {
        q: "What's your turnaround time for content?",
        a: 'Sermon clips: 24-48 hours. Graphics: 2-3 days. Videos: 5-7 days. Rush options available for urgent projects.'
      },
      {
        q: 'Do you offer custom packages?',
        a: "Absolutely. If our standard packages don't fit, let's talk. We create custom solutions for unique needs."
      }
    ],
    pricing: [
      {
        q: 'How do you measure success?',
        a: 'We track views, engagement, reach, conversions, and event registrations. Monthly reports show exactly what\'s working.'
      }
    ]
  }

  return (
    <div className="landing-page" style={{ background: 'var(--color-bg-base)', minHeight: '100vh', paddingBottom: '1px' }}>
      {/* ── HERO SECTION ── */}
      <section className="hero" style={{ overflow: 'hidden' }}>
        <div className="hero-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div className="hero-content">
            {/* Top Badge (Semantic fix: changed h1 to span) */}
            <span className="hero-kw-label">
              <span className="kw-label-icons" aria-hidden="true">
                <span className="platform-icon-wrap" style={{ width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </span>
                <span className="platform-icon-wrap" style={{ width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  </svg>
                </span>
                <span className="platform-icon-wrap" style={{ width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" />
                  </svg>
                </span>
              </span>
              CHURCH MEDIA AGENCY
            </span>

            {/* Headline (Semantic fix: changed h2 to h1) */}
            <h1 className="hero-title">
              Your Church Deserves to
              <br />
              Go{' '}
              <span className="rotating-text-wrapper">
                <span className="rotating-text" style={{ color: 'var(--color-text-primary)' }}>
                  {rotatingWords[wordIdx]}
                </span>
                <svg className="brush-underline" viewBox="0 0 100 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M 2,16 Q 30,22 60,15 T 98,8" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" fill="none"></path>
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Transform your sermon into shareable moments. Build community online. Generate leads for your events. Professional media that grows your ministry fast.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
              <Link href="/about#contact" className="btn btn-primary" style={{ minWidth: '180px' }}>
                Start Your Free Audit
              </Link>
              <Link href="/portfolio" className="btn btn-outline" style={{ minWidth: '180px', border: '1px solid var(--color-border-strong)' }}>
                See Our Work
              </Link>
            </div>

            {/* Micro Stats Banner */}
            <div className="social-proof-wrap" style={{
              marginTop: 'var(--space-8)',
              width: '100%',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
              <p className="social-proof-text" style={{
                fontSize: 'clamp(9.5px, 2.5vw, 0.85rem)',
                whiteSpace: 'nowrap',
                margin: 'auto',
                padding: '0 var(--space-4)',
                letterSpacing: '-0.01em'
              }}>
                <strong className="social-proof-count" style={{ color: 'var(--color-accent)', fontSize: '1.2em' }}>50+</strong> churches trust us • <strong>50K+</strong> average views • <strong>12-48h</strong> turnaround • <strong>Monthly</strong> packages
              </p>
            </div>

            {/* ── Dynamic Live Feed Stack ── */}
            <div className="hero-live-feed" aria-label="Live viral clip reach results">
              <div className="hero-notif-viewport">
                <div className="hero-notif-stack" style={{ position: 'relative', height: '110px' }}>
                  {feedCards.map((card) => {
                    const r = 16
                    const sw = 3
                    const c = 2 * Math.PI * r
                    const offset = (1 - Math.min(card.score, 100) / 100) * c

                    // Layout positions based on level depth
                    let y = 0, scale = 1, opacity = 1, zIndex = 30
                    if (card.level === 1) {
                      y = 12
                      scale = 0.96
                      opacity = 0.9
                      zIndex = 20
                    } else if (card.level === 2) {
                      y = 22
                      scale = 0.92
                      opacity = 0.6
                      zIndex = 10
                    }

                    return (
                      <div
                        key={card.key}
                        className="hero-notif-card"
                        style={{
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                          transform: `translateY(${y}px) scale(${scale})`,
                          opacity: opacity,
                          zIndex: zIndex,
                          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '12px 16px',
                          background: 'var(--color-bg-card)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-xl)',
                          boxShadow: 'var(--shadow-md)'
                        }}
                      >
                        {/* Score Circular Ring */}
                        <div className="score-ring-wrap" style={{ width: '40px', height: '40px', position: 'relative', marginRight: '12px', flexShrink: 0 }}>
                          <svg className="score-circle" width="40" height="40" viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r={r} fill="none" stroke="var(--color-border)" strokeWidth={sw} />
                            <circle cx="20" cy="20" r={r} fill="none" stroke="var(--color-accent)" strokeWidth={sw}
                              strokeDasharray={c} strokeDashoffset={offset}
                              strokeLinecap="round" transform="rotate(-90 20 20)" />
                          </svg>
                          <div className="score-ring-icon" style={{ color: 'var(--color-accent)' }}>
                            {renderPlatformIcon(card.platform)}
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="lead-info" style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                          <div className="lead-title" style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {card.title}
                          </div>
                          <div className="lead-meta-row" style={{ display: 'flex', gap: '10px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', marginTop: '2px' }}>
                            <span className="lead-stat" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                              {card.views} reach
                            </span>
                            <span className="lead-subreddit">{card.source}</span>
                          </div>
                        </div>

                        {/* Star / Time */}
                        <div className="lead-right" style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: '12px' }}>
                          <span className="lead-time" style={{ fontSize: '10px', color: 'var(--color-text-tertiary)' }}>{card.time}</span>
                          <span className="lead-star-btn starred" style={{ marginTop: '4px', color: 'var(--color-accent)', display: 'inline-flex' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-accent)" stroke="var(--color-accent)" strokeWidth="2.5">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER SECTION ── */}
      <section className="before-after" id="before-after">
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div className="section-header">
            <span className="section-badge">WHY IT MATTERS</span>
            <h2 className="section-title">Your Church&apos;s Content Challenge</h2>
            <p className="section-subtitle">
              You&apos;re losing potential members because your digital presence isn&apos;t matching your ministry&apos;s impact.
            </p>
          </div>

          <div className="ba-grid">
            {/* Before Card */}
            <div className="ba-card ba-card--before">
              <div className="ba-card-label" style={{ background: 'rgba(239, 68, 68, 0.12)', color: 'rgb(239, 68, 68)' }}>
                Without Media Strategy
              </div>
              <ul className="ba-list">
                <li className="ba-item ba-item--bad">
                  <span className="ba-icon ba-icon--bad">✕</span>
                  <div>
                    <strong>Sermons Lost in Time:</strong>
                    <p style={{ fontSize: '13px', opacity: 0.85, marginTop: '2px' }}>
                      Powerful 45-minute sermons buried in YouTube. Only 3-5% of your audience watches full-length.
                    </p>
                  </div>
                </li>
                <li className="ba-item ba-item--bad">
                  <span className="ba-icon ba-icon--bad">✕</span>
                  <div>
                    <strong>No Social Strategy:</strong>
                    <p style={{ fontSize: '13px', opacity: 0.85, marginTop: '2px' }}>
                      Inconsistent posting, no engagement strategy, and you&apos;re invisible to people searching for your church.
                    </p>
                  </div>
                </li>
                <li className="ba-item ba-item--bad">
                  <span className="ba-icon ba-icon--bad">✕</span>
                  <div>
                    <strong>Event Leads Falling Through:</strong>
                    <p style={{ fontSize: '13px', opacity: 0.85, marginTop: '2px' }}>
                      Your conferences, retreats, and events aren&apos;t reaching people who need them most.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="ba-summary ba-summary--bad">= Buried sermons & stagnant growth</div>
            </div>

            {/* After Card */}
            <div className="ba-card ba-card--after">
              <div className="ba-card-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                With Aimdev Media
              </div>
              <ul className="ba-list">
                <li className="ba-item ba-item--good">
                  <span className="ba-icon ba-icon--good">✓</span>
                  <div>
                    <strong>Maximum Sermon Reach:</strong>
                    <p style={{ fontSize: '13px', opacity: 0.85, marginTop: '2px' }}>
                      We turn 45 min → 12 viral clips (50K+ views each) posted on TikTok, Reels, and Shorts.
                    </p>
                  </div>
                </li>
                <li className="ba-item ba-item--good">
                  <span className="ba-icon ba-icon--good">✓</span>
                  <div>
                    <strong>Complete Social Execution:</strong>
                    <p style={{ fontSize: '13px', opacity: 0.85, marginTop: '2px' }}>
                      We manage everything: daily posts, stories, reels, analytics, and responding to comments.
                    </p>
                  </div>
                </li>
                <li className="ba-item ba-item--good">
                  <span className="ba-icon ba-icon--good">✓</span>
                  <div>
                    <strong>Guaranteed Campaign Growth:</strong>
                    <p style={{ fontSize: '13px', opacity: 0.85, marginTop: '2px' }}>
                      We generate 300-500 qualified event leads per campaign targeting your local area.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="ba-summary ba-summary--good">= Growing, engaged digital community</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES / HOW IT WORKS SECTION ── */}
      <section className="how-it-works" id="how-it-works" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: 'var(--space-16) 0' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div className="how-it-works-sticky-container" style={{ position: 'relative' }}>
            <div className="section-header">
              <span className="section-badge">SERVICES</span>
              <h2 className="section-title">What We Deliver</h2>
              <p className="section-subtitle">Complete recurring media management for churches</p>
            </div>

            <div className="how-it-works-rows">
              {/* Step 1: Sermon Clipping */}
              <div className="how-it-works-row" style={{ '--hiw-z': '1' } as any}>
                <div className="hiw-text">
                  <div className="hiw-step-num">01</div>
                  <h3 className="hiw-title">Sermon Clipping</h3>
                  <p className="hiw-desc">
                    From 1 service, we create 8-12 viral-ready clips optimized for each platform. Quotes, highlights, and trending moments.
                  </p>
                  <ul style={{ listStyle: 'none', marginTop: 'var(--space-4)', padding: 0 }} className="space-y-2">
                    {['60-sec highlight reel', '3-4 quote clips', '30-sec viral moments', 'Mobile-optimized formats'].map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-sm)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', display: 'block' }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hiw-illus">
                  <div className="step-illus step-illus-1">
                    <div className="step-illus-frame" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                        <span style={{ fontSize: '11px', fontWeight: 'bold' }}>VIRAL CLIP TIMELINE</span>
                      </div>
                      {/* Mock Video timeline */}
                      <div style={{ height: '36px', background: 'var(--color-bg-base)', borderRadius: '6px', display: 'flex', alignItems: 'center', padding: '0 10px', justifyContent: 'space-between', border: '1px solid var(--color-border)' }}>
                        <span style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>0:00 - 0:60 Highlight Clip</span>
                        <span style={{ background: 'var(--color-accent)', color: '#fff', fontSize: '9px', padding: '2px 6px', borderRadius: '4px' }}>EDITED</span>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ flex: 1, height: '30px', background: 'var(--color-bg-base)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', border: '1px dashed var(--color-border)' }}>Audio Sync</div>
                        <div style={{ flex: 1, height: '30px', background: 'var(--color-bg-base)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', border: '1px dashed var(--color-border)' }}>Captions Overlay</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Social Media Management */}
              <div className="how-it-works-row" style={{ '--hiw-z': '2' } as any}>
                <div className="hiw-text">
                  <div className="hiw-step-num">02</div>
                  <h3 className="hiw-title">Social Media Management</h3>
                  <p className="hiw-desc">
                    Daily posts, reels, stories, and community management across Instagram, TikTok, Facebook, and YouTube.
                  </p>
                  <ul style={{ listStyle: 'none', marginTop: 'var(--space-4)', padding: 0 }} className="space-y-2">
                    {['4-6 posts/week', 'Unlimited reels/stories', 'Community responses', 'Analytics & reporting'].map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-sm)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', display: 'block' }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hiw-illus">
                  <div className="step-illus step-illus-2">
                    <div className="step-illus-frame step-illus-frame-padded step-illus-frame-clip" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 'bold' }}>WEEKLY SCHEDULER</span>
                        <span style={{ fontSize: '10px', color: 'var(--color-accent)' }}>4-6 posts/week</span>
                      </div>
                      {/* Mock social posts schedule */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                        {['Mon', 'Wed', 'Fri'].map((day, i) => (
                          <div key={i} style={{ padding: '6px', background: 'var(--color-bg-base)', border: '1px solid var(--color-border)', borderRadius: '6px', fontSize: '9px', textAlign: 'center' }}>
                            <div style={{ fontWeight: 'bold', borderBottom: '1px solid var(--color-border)', marginBottom: '4px' }}>{day}</div>
                            <span style={{ color: 'var(--color-accent)', fontSize: '8px' }}>Reel Scheduled</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ padding: '6px', background: 'rgba(5, 150, 105, 0.12)', color: '#059669', fontSize: '9px', border: '1px solid rgba(5, 150, 105, 0.25)', borderRadius: '6px', textAlign: 'center' }}>
                        ✓ Automatic Multi-Platform Posting Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Graphic Design */}
              <div className="how-it-works-row" style={{ '--hiw-z': '3' } as any}>
                <div className="hiw-text">
                  <div className="hiw-step-num">03</div>
                  <h3 className="hiw-title">Graphic Design</h3>
                  <p className="hiw-desc">
                    Event promotions, social graphics, sermon graphics, conference materials—everything on-brand.
                  </p>
                  <ul style={{ listStyle: 'none', marginTop: 'var(--space-4)', padding: 0 }} className="space-y-2">
                    {['Unlimited revisions', 'All platforms', 'Brand consistency', 'Quick turnaround'].map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-sm)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', display: 'block' }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hiw-illus">
                  <div className="step-illus step-illus-3">
                    <div className="step-illus-frame step-illus-frame-noPad step-illus-frame-clip" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 'bold', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>BRAND DESIGN PRESETS</span>
                      {/* Mock designs */}
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ width: '55px', height: '55px', background: 'linear-gradient(135deg, #ffd700 0%, #daa520 100%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 'bold', color: '#fff' }}>Sermon Poster</div>
                        <div style={{ width: '55px', height: '55px', background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 'bold', color: '#fff' }}>Event Flyer</div>
                        <div style={{ width: '55px', height: '55px', background: 'linear-gradient(135deg, #065f46 0%, #059669 100%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 'bold', color: '#fff' }}>Story Quote</div>
                      </div>
                      <div style={{ fontSize: '9px', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
                        24h Turnaround • Brand Guidelines Preserved
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Lead Generation Ads */}
              <div className="how-it-works-row" style={{ '--hiw-z': '4' } as any}>
                <div className="hiw-text">
                  <div className="hiw-step-num">04</div>
                  <h3 className="hiw-title">Lead Generation Ads</h3>
                  <p className="hiw-desc">
                    Targeted ads that convert interested people into registered attendees for your events and conferences.
                  </p>
                  <ul style={{ listStyle: 'none', marginTop: 'var(--space-4)', padding: 0 }} className="space-y-2">
                    {['$0.85 cost per lead', '12%+ conversion rate', 'A/B testing', 'Optimization included'].map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-sm)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', display: 'block' }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hiw-illus">
                  <div className="step-illus step-illus-4">
                    <div className="step-illus-frame step-illus-frame-padded" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 'bold', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>CAMPAIGN ANALYTICS</span>
                      {/* Mock Ads dashboard stats */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                        <div>
                          <div style={{ fontSize: '8px', color: 'var(--color-text-secondary)' }}>Cost Per Lead</div>
                          <div style={{ fontWeight: 'bold', color: 'var(--color-accent)' }}>$0.85</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '8px', color: 'var(--color-text-secondary)' }}>Conversion Rate</div>
                          <div style={{ fontWeight: 'bold', color: '#059669' }}>12.4%</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '8px', color: 'var(--color-text-secondary)' }}>Audience Reach</div>
                          <div style={{ fontWeight: 'bold' }}>18,400</div>
                        </div>
                      </div>
                      {/* Progress bar */}
                      <div style={{ height: '6px', background: 'var(--color-bg-base)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: '85%', height: '100%', background: 'var(--color-accent)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}>
            <Link href="/services" className="btn btn-ghost" style={{ border: '2px solid var(--color-accent)', color: 'var(--color-accent)', padding: '0.75rem 2rem' }}>
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS SECTION ── */}
      <section className="platforms" id="platforms">
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div className="section-header">
            <span className="section-badge">PLATFORMS</span>
            <h2 className="section-title">Reach People Where They Are</h2>
            <p className="section-subtitle">
              We publish, schedule, and optimize your video and graphic content across all major digital channels.
            </p>
          </div>

          <div className="platforms-grid">
            {/* Instagram */}
            <div className="platform-card platform-active">
              <div className="platform-icon-wrap" style={{ color: '#E1306C' }}>
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="platform-name">Instagram</div>
              <div className="platform-desc">Daily reels, posts, and stories posting</div>
            </div>

            {/* YouTube */}
            <div className="platform-card platform-active">
              <div className="platform-icon-wrap" style={{ color: '#FF0000' }}>
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </div>
              <div className="platform-name">YouTube Shorts</div>
              <div className="platform-desc">Full sermon archives and short clips</div>
            </div>

            {/* TikTok */}
            <div className="platform-card platform-active">
              <div className="platform-icon-wrap" style={{ color: 'var(--color-text-primary)' }}>
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </div>
              <div className="platform-name">TikTok</div>
              <div className="platform-desc">Trending clip editing & reach algorithms</div>
            </div>

            {/* Facebook */}
            <div className="platform-card platform-active">
              <div className="platform-icon-wrap" style={{ color: '#1877F2' }}>
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </div>
              <div className="platform-name">Facebook</div>
              <div className="platform-desc">Targeted local ads & video features</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO SECTION / RESULTS ── */}
      <section className="bento-section" id="features">
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div className="section-header">
            <span className="section-badge">RESULTS</span>
            <h2 className="section-title">Results That Speak</h2>
            <p className="section-subtitle">
              Verified analytics demonstrating consistent growth across mid-sized and large church ministries.
            </p>
          </div>

          <div className="bento-grid">
            {/* Bento Reach (Large Card) */}
            <div className="bento-card bento-large bento-time-card">
              <div className="bento-time-content">
                <div className="bento-stat">2.5M+</div>
                <h3 className="bento-title">Total Reach Generated</h3>
                <p className="bento-desc">
                  Expanding your sermon reach across local areas to engage visitors who have never stepped foot in your physical building.
                </p>
              </div>
              <div className="bento-time-illus" aria-hidden="true" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Visual bar graph comparing before & after reach */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                  <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>BEFORE (Organic)</div>
                  <div style={{ height: '14px', background: 'var(--color-bg-base)', border: '1px solid var(--color-border)', borderRadius: '4px', width: '10%', display: 'flex', alignItems: 'center', paddingLeft: '6px', fontSize: '8px' }}>5k</div>

                  <div style={{ fontSize: '10px', color: 'var(--color-accent)', fontWeight: 'bold', marginTop: '6px' }}>WITH AIMDEV MEDIA</div>
                  <div style={{ height: '14px', background: 'var(--color-accent)', borderRadius: '4px', width: '90%', display: 'flex', alignItems: 'center', paddingLeft: '6px', fontSize: '8px', color: '#fff', fontWeight: 'bold' }}>2.5M+ Reach</div>
                </div>
              </div>
            </div>

            {/* Card 2: Views */}
            <div className="bento-card">
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-accent)', lineHeight: 1.1 }}>50K+</div>
                <h3 className="bento-title" style={{ marginTop: '12px' }}>Average Views Per Clip</h3>
                <p className="bento-desc" style={{ marginTop: '6px' }}>
                  Professional clipping, trending audio integrations, and caption style templates.
                </p>
              </div>
            </div>

            {/* Card 3: Engagement */}
            <div className="bento-card">
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-accent)', lineHeight: 1.1 }}>18%</div>
                <h3 className="bento-title" style={{ marginTop: '12px' }}>Average Engagement Rate</h3>
                <p className="bento-desc" style={{ marginTop: '6px' }}>
                  Far exceeding the standard social listening benchmarks (typically 3-5%).
                </p>
              </div>
            </div>

            {/* Card 4: Leads */}
            <div className="bento-card">
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-accent)', lineHeight: 1.1 }}>340</div>
                <h3 className="bento-title" style={{ marginTop: '12px' }}>Leads Per Campaign</h3>
                <p className="bento-desc" style={{ marginTop: '6px' }}>
                  Generating qualified local visitor connections for mid-sized church campaigns.
                </p>
              </div>
            </div>

            {/* Card 5: Speed */}
            <div className="bento-card">
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-accent)', lineHeight: 1.1 }}>12-48h</div>
                <h3 className="bento-title" style={{ marginTop: '12px' }}>Turnaround Time</h3>
                <p className="bento-desc" style={{ marginTop: '6px' }}>
                  Quick editing turnaround from raw Sunday footage uploads to viral-ready files.
                </p>
              </div>
            </div>

            {/* Card 6: Retention */}
            <div className="bento-card">
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-accent)', lineHeight: 1.1 }}>100%</div>
                <h3 className="bento-title" style={{ marginTop: '12px' }}>Client Retention</h3>
                <p className="bento-desc" style={{ marginTop: '6px' }}>
                  Delivering consistent quality and transparent reports that build long-term trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="faq" id="faq" style={{ padding: 'var(--space-16) 0' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">Everything you need to know about growing your church reach</p>
          </div>

          <div className="faq-tabs-wrapper">
            <div className="faq-tab-nav">
              <button
                className={`faq-tab-btn ${faqTab === 'general' ? 'active' : ''}`}
                onClick={() => { setFaqTab('general'); setFaqActiveItem(null); }}
              >
                General
              </button>
              <button
                className={`faq-tab-btn ${faqTab === 'services' ? 'active' : ''}`}
                onClick={() => { setFaqTab('services'); setFaqActiveItem(null); }}
              >
                Deliverables
              </button>
              <button
                className={`faq-tab-btn ${faqTab === 'pricing' ? 'active' : ''}`}
                onClick={() => { setFaqTab('pricing'); setFaqActiveItem(null); }}
              >
                Strategy
              </button>
            </div>

            <div className="faq-tab-panel active">
              <div className="faq-list" style={{ maxWidth: '680px', margin: '0 auto' }}>
                {faqItems[faqTab].map((item, idx) => {
                  const isOpen = faqActiveItem === idx
                  return (
                    <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                      <div
                        className="faq-header"
                        onClick={() => setFaqActiveItem(isOpen ? null : idx)}
                        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        {item.q}
                        <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                      <div className="faq-body" style={{ display: isOpen ? 'block' : 'none' }}>
                        <div className="faq-content-wrapper">
                          <div className="faq-content">
                            <p>{item.a}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section className="final-cta" style={{ borderTop: '1px solid var(--color-border)', padding: 'var(--space-16) 0' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div className="final-cta-content hero" style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', padding: 'var(--space-12)' }}>
            <div className="final-cta-text" style={{ flex: 1, textAlign: 'left' }}>
              <h2 className="final-cta-title" style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                Ready to Transform Your Ministry&apos;s Digital Presence?
              </h2>
              <p className="final-cta-subtitle" style={{ color: 'var(--color-text-secondary)', marginTop: '12px', fontSize: 'var(--font-size-base)' }}>
                Book a free 20-minute audit. We&apos;ll show you exactly how to 10x your reach.
              </p>
              <div className="final-cta-actions" style={{ display: 'flex', gap: '1rem', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
                <Link href="/about#contact" className="btn btn-primary">
                  Book Free Audit
                </Link>
                <Link href="/portfolio" className="btn btn-ghost" style={{ border: '1px solid var(--color-border)' }}>
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Custom Visual mockup illustrating church magnifying reach */}
            <div className="final-cta-visual" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-4)' }}>
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: 'var(--color-bg-card)',
                  border: '3px solid var(--color-accent)',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '24px',
                  color: 'var(--color-accent)',
                  zIndex: 2
                }}>
                  10x
                </div>
                <div style={{
                  position: 'absolute',
                  width: '6px',
                  height: '60px',
                  background: 'var(--color-accent)',
                  transform: 'rotate(45deg) translate(50px, 50px)',
                  borderRadius: '3px',
                  zIndex: 1
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
