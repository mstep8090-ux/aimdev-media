'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function AboutPageClient() {
  const [formData, setFormData] = useState({
    churchName: '',
    firstName: '',
    email: '',
    phone: '',
    primaryService: 'sermon-clipping',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({
      churchName: '',
      firstName: '',
      email: '',
      phone: '',
      primaryService: 'sermon-clipping',
      message: ''
    })
  }

  // Focus/Blur state helper for custom input ring styling
  const [focusField, setFocusField] = useState<string | null>(null)

  const getInputStyle = (fieldName: string) => ({
    width: '100%',
    borderRadius: 'var(--radius-md)',
    border: focusField === fieldName ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
    background: focusField === fieldName ? 'var(--color-bg-base)' : 'rgba(var(--color-bg-card-rgb), 0.5)',
    padding: '12px 16px',
    color: 'var(--color-text-primary)',
    outline: 'none',
    boxShadow: focusField === fieldName ? '0 0 0 2px var(--color-accent-glow)' : 'none',
    transition: 'all var(--transition-base)',
    fontSize: 'var(--font-size-sm)',
    fontFamily: 'var(--font-family)',
  })

  return (
    <div className="about-page" style={{ background: 'var(--color-bg-base)', minHeight: '100vh', paddingBottom: '1px' }}>
      {/* About Founder Section */}
      <section className="hero" style={{ overflow: 'visible', padding: '160px 0 80px 0' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>
            <div>
              <span className="section-badge" style={{ display: 'inline-block', marginBottom: 'var(--space-2)' }}>ABOUT US</span>
              <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-6)', fontSize: '3rem', lineHeight: 1.2 }}>
                Meet Your <span style={{ color: 'var(--color-accent)' }}>Media Partner</span>
              </h1>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-lg)', lineHeight: 1.7, marginBottom: 'var(--space-8)' }}>
                I&apos;m passionate about helping churches reach more people. For the past 3+ years, I&apos;ve been transforming ministry content into viral moments that drive real growth.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div style={{ paddingLeft: 'var(--space-4)', borderLeft: '2px solid var(--color-accent)' }}>
                  <h3 className="font-heading" style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                    Why I Started This
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: 1.6, margin: 0 }}>
                    I watched churches with powerful messages struggle to reach people because their digital presence didn&apos;t match their impact. That&apos;s wrong. Every church deserves professional media. I&apos;m here to make that accessible.
                  </p>
                </div>

                <div style={{ paddingLeft: 'var(--space-4)', borderLeft: '2px solid var(--color-accent)' }}>
                  <h3 className="font-heading" style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                    What I Specialize In
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: 1.6, margin: 0 }}>
                    Sermon clipping, social media growth, video editing, graphic design, and lead generation. Every tool focused on one goal: making your ministry visible and memorable.
                  </p>
                </div>

                <div style={{ paddingLeft: 'var(--space-4)', borderLeft: '2px solid var(--color-accent)' }}>
                  <h3 className="font-heading" style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                    The Result
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: 1.6, margin: 0 }}>
                    50+ churches growing. 2.5M+ total reach generated. 12%+ average engagement rates (industry standard is 3-5%). 100% client retention.
                  </p>
                </div>
              </div>

              {/* Stats Counters */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--space-2)',
                marginTop: 'var(--space-10)',
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-4) var(--space-6)',
              }}>
                <div style={{ textAlign: 'center', borderRight: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1, margin: 0 }}>50+</p>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginTop: '4px', marginBottom: 0 }}>Churches served</p>
                </div>
                <div style={{ textAlign: 'center', borderRight: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1, margin: 0 }}>2.5M+</p>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginTop: '4px', marginBottom: 0 }}>Total reach generated</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1, margin: 0 }}>3yrs+</p>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginTop: '4px', marginBottom: 0 }}>In ministry media</p>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div style={{ position: 'relative', maxWidth: '430px', width: '100%' }}>
                {/* Background dashed canvas border */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '-16px',
                  width: '100%',
                  height: '100%',
                  border: '1.5px dashed var(--color-accent)',
                  borderRadius: 'var(--radius-xl)',
                  opacity: 0.4,
                  pointerEvents: 'none',
                  zIndex: 0
                }} />
                
                {/* Accent glow behind image */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  opacity: 0.7,
                  pointerEvents: 'none',
                  zIndex: 0
                }} />

                {/* Main image container */}
                <div 
                  className="bento-card-hover"
                  style={{
                    position: 'relative',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '16px',
                    background: 'var(--color-bg-card)',
                    boxShadow: 'var(--shadow-xl)',
                    transition: 'all var(--transition-base)',
                    zIndex: 2
                  }}
                >
                  <Image
                    src="/headshot.png"
                    alt="Founder of Aimdev Media"
                    width={400}
                    height={500}
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 'var(--radius-lg)',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '24px',
                    right: '-12px',
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                    color: '#fff',
                    borderRadius: 'var(--radius-lg)',
                    padding: '10px 20px',
                    boxShadow: 'var(--shadow-md)',
                    fontWeight: 600,
                    fontSize: 'var(--font-size-xs)',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    zIndex: 10
                  }}>
                    Always learning. Always growing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values ("How We Work") Section */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-badge" style={{ display: 'inline-block', marginBottom: 'var(--space-2)' }}>VALUES</span>
            <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              How We Work
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)' }}>
            {[
              {
                title: "Fast Turnaround",
                description: "You need your content quickly. Sermon clips in 24-48 hours. Graphics in 2-3 days. No waiting around."
              },
              {
                title: "Results Focused",
                description: "We don't just create content—we create content that converts. Every piece is optimized for engagement and ROI."
              },
              {
                title: "Partnership Mentality",
                description: "Your success is our success. We're invested in your growth and work like we're part of your team."
              },
              {
                title: "Professional Quality",
                description: "You deserve premium work. We use industry-standard tools, techniques, and creative strategies."
              },
              {
                title: "Transparent Communication",
                description: "Monthly reports. Clear metrics. No surprises. You always know what's working and why."
              },
              {
                title: "Your Brand Voice",
                description: "We learn your ministry's tone and values. Every piece reflects who you are, not who we think you should be."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bento-card-hover"
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6) var(--space-8)',
                  transition: 'all var(--transition-base)',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Floating blur indicator */}
                <div style={{
                  position: 'absolute',
                  top: '-24px',
                  right: '-24px',
                  width: '80px',
                  height: '80px',
                  background: 'var(--color-accent-light)',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  opacity: 0.5,
                  pointerEvents: 'none'
                }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                  <h3 className="font-heading" style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                    {value.title}
                  </h3>
                  <span style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                    background: 'var(--color-accent-light)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: 1.6, margin: 0 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-badge" style={{ display: 'inline-block', marginBottom: 'var(--space-2)' }}>REVIEWS</span>
            <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              What Churches Say
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'var(--space-8)' }}>
            {[
              {
                quote: "Our sermon reach went from 50 views to 50,000 in 3 months. People are discovering our church who never would have before.",
                author: "Pastor James",
                church: "Grace Community Church"
              },
              {
                quote: "The lead gen ads brought us 340 qualified registrations for our conference. The ROI is insane. Best investment we made.",
                author: "Sarah M.",
                church: "Faith First Ministries"
              },
              {
                quote: "Having someone handle our social media freed up hours every week. We finally have a consistent, professional presence.",
                author: "Pastor Mike",
                church: "Victory Church"
              },
              {
                quote: "The quality of work is professional studio-level. People ask us all the time who's producing our content.",
                author: "David L.",
                church: "The Bridge Ministry"
              }
            ].map((testimonial, index) => {
              const initials = testimonial.author.split(' ').map(n => n[0]).join('');
              const avatarBg = index % 2 === 0
                ? 'linear-gradient(135deg, var(--color-accent) 0%, var(--blue-400) 100%)'
                : 'linear-gradient(135deg, var(--color-accent-hover) 0%, var(--color-accent) 100%)';

              return (
                <div
                  key={index}
                  className="bento-card-hover"
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-8)',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'all var(--transition-base)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Large faded quote mark in the background */}
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    right: '24px',
                    fontSize: '8rem',
                    fontWeight: 900,
                    color: 'var(--color-border)',
                    opacity: 0.15,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    fontFamily: 'serif'
                  }}>&ldquo;</span>

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', gap: '3px', marginBottom: 'var(--space-4)', color: '#ffb000', fontSize: '1rem' }} aria-hidden="true">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-primary)', fontStyle: 'italic', marginBottom: 'var(--space-6)', lineHeight: 1.6, fontWeight: 500 }}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 2 }}>
                    {/* Circle initials avatar */}
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: avatarBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 'bold',
                      fontSize: 'var(--font-size-sm)',
                      boxShadow: 'var(--shadow-sm)',
                      flexShrink: 0
                    }}>
                      {initials}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: 'var(--font-size-base)', margin: 0 }}>
                        {testimonial.author}
                      </p>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-xs)', margin: 0 }}>
                        {testimonial.church}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-12)' }}>
            <div>
              <span className="section-badge" style={{ display: 'inline-block', marginBottom: 'var(--space-2)' }}>CONTACT</span>
              <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)' }}>
                Get Started Today
              </h2>
              <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-8)' }}>
                Ready to transform your church&apos;s digital presence? Let&apos;s chat about your goals and find the perfect solution.
              </p>

              <div style={{ marginBottom: 'var(--space-8)' }}>
                <h3 className="font-heading" style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)' }}>
                  Next Steps:
                </h3>
                <div style={{ position: 'relative', paddingLeft: '8px' }}>
                  {/* Connecting vertical line */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    bottom: '12px',
                    left: '20px',
                    width: '2px',
                    background: 'linear-gradient(to bottom, var(--color-accent) 0%, var(--color-border) 100%)',
                    opacity: 0.5,
                  }} />
                  <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', zIndex: 2 }}>
                    {[
                      "Fill out the form (takes 2 minutes)",
                      "We'll send you portfolio examples for your industry",
                      "Schedule a free 20-minute consultation call",
                      "We'll show you exactly how to 10x your reach"
                    ].map((step, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--color-text-primary)', fontSize: 'var(--font-size-sm)' }}>
                        <span style={{
                          display: 'inline-flex',
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: 'var(--color-accent)',
                          color: '#fff',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          fontSize: '11px',
                          flexShrink: 0,
                          boxShadow: '0 0 0 4px var(--color-accent-light)'
                        }}>
                          {i + 1}
                        </span>
                        <span style={{ fontWeight: 500 }}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div style={{
                marginTop: 'var(--space-10)',
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-5) var(--space-6)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{ position: 'relative', width: '8px', height: '8px', flexShrink: 0 }}>
                  <span style={{ display: 'block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-success)' }} />
                  <span style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-success)',
                    opacity: 0.4,
                    transform: 'scale(2.2)'
                  }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--color-text-primary)', margin: 0, fontSize: 'var(--font-size-sm)' }}>
                    Average Response Time
                  </h4>
                  <p style={{ color: 'var(--color-text-secondary)', margin: '2px 0 0 0', fontSize: 'var(--font-size-xs)' }}>
                    Within 2-4 hours during business days
                  </p>
                </div>
              </div>
            </div>

            {/* Form card wrapper */}
            <div style={{
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-8)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', textAlign: 'center' }}>
                  <div style={{ fontSize: '3.5rem', color: 'var(--color-accent)', marginBottom: 'var(--space-4)', lineHeight: 1 }}>✓</div>
                  <h3 className="font-heading" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '10px' }}>
                    Thank you!
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-base)', lineHeight: 1.6, maxWidth: '340px', margin: '0 auto' }}>
                    We&apos;ve received your message. We&apos;ll respond within 2-4 hours with next steps and portfolio examples for your ministry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Church / Ministry Name *
                    </label>
                    <input
                      type="text"
                      name="churchName"
                      value={formData.churchName}
                      onChange={handleChange}
                      onFocus={() => setFocusField('churchName')}
                      onBlur={() => setFocusField(null)}
                      required
                      style={getInputStyle('churchName')}
                      placeholder="Grace Community Church"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => setFocusField('firstName')}
                      onBlur={() => setFocusField(null)}
                      required
                      style={getInputStyle('firstName')}
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusField('email')}
                      onBlur={() => setFocusField(null)}
                      required
                      style={getInputStyle('email')}
                      placeholder="john@church.com"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusField('phone')}
                      onBlur={() => setFocusField(null)}
                      style={getInputStyle('phone')}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      What are you most interested in?
                    </label>
                    <select
                      name="primaryService"
                      value={formData.primaryService}
                      onChange={handleChange}
                      onFocus={() => setFocusField('primaryService')}
                      onBlur={() => setFocusField(null)}
                      style={getInputStyle('primaryService')}
                    >
                      <option value="sermon-clipping">Sermon Clipping</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="video">Video Production</option>
                      <option value="design">Graphic Design</option>
                      <option value="ads">Lead Gen Ads</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Tell us about your goals
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusField('message')}
                      onBlur={() => setFocusField(null)}
                      rows={4}
                      style={{
                        ...getInputStyle('message'),
                        resize: 'none'
                      }}
                      placeholder="What are you trying to accomplish? What's your biggest content challenge?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.75rem 0',
                      marginTop: 'var(--space-2)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>Book My Free Consultation</span>
                    <ArrowRight size={16} />
                  </button>

                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', textAlign: 'center', marginTop: '4px' }}>
                    We&apos;ll never spam you. Your info is safe with us.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
