'use client';

import { useState } from 'react';
import { ArrowRight, Play, Film, Image as ImageIcon, BarChart2, Globe, Heart, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const portfolioItems = [
  {
    id: 1,
    category: 'reels',
    ratio: '9/16',
    title: 'Grace Church Reels Campaign',
    description: 'Viral Instagram Reels turning sermons into shareable moments.',
    metrics: '50K views • 8.2K likes • 23% engagement',
    titleLabel: 'Sermon: Finding Peace in Chaos',
    church: 'Grace Family Church',
    likes: '8.2K',
    comments: '342',
  },
  {
    id: 2,
    category: 'graphics',
    ratio: '4/5',
    title: 'Faith First Social Suite',
    description: 'Vertical social media graphics optimized for Instagram feeds.',
    metrics: '127K reach • 15.3K interactions • 12% growth',
    titleLabel: 'Sunday Worship Post',
    church: 'Faith First Ministries',
    dateLabel: 'SUNDAY 10:00 AM • JOIN ONLINE',
  },
  {
    id: 3,
    category: 'reels',
    ratio: '9/16',
    title: 'Youth Summer Highlights',
    description: 'Energetic, fast-paced Reels compilation for summer camp promotion.',
    metrics: '94K views • 12.1K likes • 18% engagement',
    titleLabel: 'Summer Camp Recap Reel',
    church: 'Bridge Youth Church',
    likes: '12.1K',
    comments: '580',
  },
  {
    id: 4,
    category: 'graphics',
    ratio: '1/1',
    title: 'Conference Design Package',
    description: 'Square event promotional graphics for social feeds and sites.',
    metrics: '8 graphics • 3 days turnaround • 100% on-brand',
    titleLabel: 'YOUTH CONF 2026',
    church: 'Bridge Youth Church',
    dateLabel: 'AUG 14-16 • REGISTER NOW',
  },
  {
    id: 5,
    category: 'videos',
    ratio: '16/9',
    title: 'Worship Highlight Video',
    description: '45-minute service condensed into a powerful worship highlight.',
    metrics: '34K views • 2.8K shares • 4.2K likes',
    titleLabel: 'Sunday Worship Highlights',
    church: 'Grace Church Live',
    duration: '45:00',
    viewsLabel: '34.2K views',
  },
  {
    id: 6,
    category: 'campaigns',
    ratio: '16/10',
    title: 'Conference Promo Ads',
    description: 'Integrated multi-platform campaign generating event leads.',
    metrics: '850 registrations • 12.3% conversion rate',
    titleLabel: 'Meta Campaign Dashboard',
    church: 'Elevate Church',
    leads: '850',
    cpl: '$0.95',
  },
  {
    id: 7,
    category: 'campaigns',
    ratio: '16/10',
    title: 'Lead Generation Campaign',
    description: 'Targeted local ads driving direct registration leads.',
    metrics: '$0.85 CPL • 8.2% conversion • 340 leads',
    titleLabel: 'Lead Ads Performance',
    church: 'Hope Center',
    leads: '340',
    cpl: '$0.85',
  },
  {
    id: 8,
    category: 'videos',
    ratio: '16/9',
    title: 'Sermon Archive Highlights',
    description: 'Professional landscape clips optimized for YouTube and Facebook.',
    metrics: '2.5 hrs raw → 12 clips • 8.7K avg views',
    titleLabel: 'Sermon: Embracing Gratitude',
    church: 'Faith Center Live',
    duration: '12:30',
    viewsLabel: '8.7K views',
  },
];

// --- Mockup Aspect-Ratio Thumbnail Components ---

function ReelThumbnail({ item }: { item: any }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, #18181b 0%, #09090b 100%)',
      position: 'relative',
      color: '#fff',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontSize: '8px'
    }}>
      {/* Phone status bar overlay */}
      <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.6, fontSize: '7px' }}>
        <span>9:41</span>
        <span>Reels</span>
      </div>

      {/* Video preview simulation (Preacher outline/worship) */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: 0.12 }}>
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>

      {/* Center play icon overlay */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Play size={14} fill="currentColor" />
      </div>

      {/* Reel Info bottom overlay */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 2, textAlign: 'left' }}>
        <div style={{ fontWeight: 'bold', fontSize: '9px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }} />
          {item.church}
        </div>
        <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.3, fontSize: '8.5px' }}>{item.titleLabel}</p>
        
        {/* Audio tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.7, fontSize: '7px', background: 'rgba(255, 255, 255, 0.1)', padding: '2px 6px', borderRadius: '99px', alignSelf: 'start', marginTop: '4px' }}>
          <span>♫ Original Audio - {item.church}</span>
        </div>
      </div>

      {/* Floating sidebar buttons (Likes, Comments, Shares) */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        right: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        zIndex: 2,
        opacity: 0.8
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
          <Heart size={12} fill="#ff4b4b" stroke="#ff4b4b" />
          <span style={{ fontSize: '7px' }}>{item.likes}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
          <MessageSquare size={12} fill="currentColor" />
          <span style={{ fontSize: '7px' }}>{item.comments}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '10px' }}>➦</span>
          <span style={{ fontSize: '7px', marginTop: '2px' }}>Share</span>
        </div>
      </div>
    </div>
  );
}

function VerticalGraphicThumbnail({ item }: { item: any }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 100%)',
      position: 'relative',
      color: '#fff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      {/* Decorative gradient lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.25) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      {/* Top Header Label */}
      <div style={{ fontSize: '8px', opacity: 0.6, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'left' }}>
        {item.church}
      </div>

      {/* Large Creative Text */}
      <div style={{ margin: 'auto 0', display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
        <div style={{
          height: '1px',
          width: '30px',
          background: 'var(--color-accent)'
        }} />
        <h4 className="font-heading" style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#fff',
          margin: 0,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          SUNDAY
          <br />
          WORSHIP
        </h4>
        <div style={{
          fontSize: '9px',
          color: 'var(--blue-400)',
          fontWeight: 'bold',
          letterSpacing: '0.5px'
        }}>
          JOIN US LIVE ONLINE
        </div>
      </div>

      {/* Bottom info bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '6px',
        padding: '6px 10px',
        fontSize: '8px'
      }}>
        <span>{item.dateLabel}</span>
        <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>→</span>
      </div>
    </div>
  );
}

function SquareGraphicThumbnail({ item }: { item: any }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      position: 'relative',
      color: '#fff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      {/* Background Grid Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0)',
        backgroundSize: '12px 12px',
        pointerEvents: 'none'
      }} />

      {/* Top Banner Tag */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '8px', fontWeight: 'bold', background: 'var(--color-accent)', padding: '2px 6px', borderRadius: '4px' }}>
          LIVE EVENT
        </span>
        <span style={{ fontSize: '8px', opacity: 0.6 }}>{item.church}</span>
      </div>

      {/* Bold typography */}
      <div style={{ margin: 'auto 0', textAlign: 'center' }}>
        <h4 className="font-heading" style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          lineHeight: 1.1,
          color: '#fff',
          margin: 0,
          letterSpacing: '1px'
        }}>
          YOUTH
          <br />
          <span style={{ color: 'var(--color-accent)' }}>CONFERENCE</span>
          <br />
          2026
        </h4>
      </div>

      {/* Date badge */}
      <div style={{
        fontSize: '7.5px',
        color: 'var(--color-text-secondary)',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '8px',
        fontWeight: 600
      }}>
        {item.dateLabel}
      </div>
    </div>
  );
}

function VideoThumbnail({ item }: { item: any }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, #1f2937 0%, #111827 100%)',
      position: 'relative',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '12px',
      fontSize: '8px'
    }}>
      {/* Speaker preview simulation */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: 0.1 }}>
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
        </svg>
      </div>

      {/* Top Bar (YouTube Title) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)', margin: '-12px -12px 0 -12px', padding: '10px 12px' }}>
        <span style={{ fontWeight: 'bold', fontSize: '8.5px', textAlign: 'left', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '140px' }}>{item.titleLabel}</span>
        <span style={{ opacity: 0.6 }}>{item.duration}</span>
      </div>

      {/* Play Button Overlay */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'var(--color-accent)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-md)',
        cursor: 'pointer',
        zIndex: 3
      }}>
        <Play size={16} fill="currentColor" style={{ marginLeft: '2px' }} />
      </div>

      {/* Control bar bottom */}
      <div style={{ zIndex: 2, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)', margin: '0 -12px -12px -12px', padding: '12px 12px 10px 12px' }}>
        {/* Scrub bar */}
        <div style={{ height: '3px', width: '100%', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', position: 'relative', marginBottom: '8px', overflow: 'hidden' }}>
          <div style={{ width: '40%', height: '100%', background: 'var(--color-accent)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '7.5px', opacity: 0.8 }}>
          <span>{item.viewsLabel}</span>
          <span>{item.church}</span>
        </div>
      </div>
    </div>
  );
}

function CampaignThumbnail({ item }: { item: any }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'var(--color-bg-secondary)',
      position: 'relative',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontSize: '8px'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px' }}>
        <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', textAlign: 'left' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-success)' }} />
          {item.titleLabel}
        </span>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: '7.5px' }}>{item.church}</span>
      </div>

      {/* Simple graph visualization */}
      <div style={{ margin: '8px 0', height: '32px', position: 'relative' }}>
        <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
          <path d="M0,25 Q15,22 30,12 T60,18 T90,2 T100,5" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
          <path d="M0,25 Q15,22 30,12 T60,18 T90,2 T100,5 L100,30 L0,30 Z" fill="var(--color-accent-light)" opacity="0.3" />
        </svg>
      </div>

      {/* KPI block row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '6px',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '6px'
      }}>
        <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '4px 6px', textAlign: 'left' }}>
          <div style={{ fontSize: '7px', color: 'var(--color-text-secondary)' }}>Event Leads</div>
          <div style={{ fontWeight: 'bold', fontSize: '11px', color: 'var(--color-accent)', marginTop: '1px' }}>{item.leads}</div>
        </div>
        <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '4px 6px', textAlign: 'left' }}>
          <div style={{ fontSize: '7px', color: 'var(--color-text-secondary)' }}>Cost Per Lead</div>
          <div style={{ fontWeight: 'bold', fontSize: '11px', color: 'var(--color-success)', marginTop: '1px' }}>{item.cpl}</div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioPageClient() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'reels' | 'videos' | 'graphics' | 'campaigns'>('all');

  const filteredItems = selectedFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedFilter);

  const renderThumbnail = (item: any) => {
    switch (item.category) {
      case 'reels':
        return <ReelThumbnail item={item} />;
      case 'graphics':
        if (item.ratio === '4/5') {
          return <VerticalGraphicThumbnail item={item} />;
        }
        return <SquareGraphicThumbnail item={item} />;
      case 'videos':
        return <VideoThumbnail item={item} />;
      case 'campaigns':
        return <CampaignThumbnail item={item} />;
      default:
        return null;
    }
  };

  const getTabStyle = (category: typeof selectedFilter) => {
    const isActive = selectedFilter === category;
    return {
      padding: '8px 18px',
      borderRadius: 'var(--radius-full)',
      fontSize: 'var(--font-size-sm)',
      fontWeight: 600,
      background: isActive ? 'var(--color-accent)' : 'transparent',
      color: isActive ? '#fff' : 'var(--color-text-secondary)',
      border: isActive ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
      cursor: 'pointer',
      transition: 'all var(--transition-base)',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    };
  };

  return (
    <div className="portfolio-page" style={{ background: 'var(--color-bg-base)', minHeight: '100vh', paddingBottom: '1px' }}>
      {/* Header / Hero */}
      <section className="hero" style={{ overflow: 'hidden', padding: '160px 0 60px 0', textAlign: 'center' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <span className="section-badge" style={{ display: 'inline-block', marginBottom: 'var(--space-2)' }}>PORTFOLIO</span>
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontSize: '3rem' }}>
            Our <span style={{ color: 'var(--color-accent)' }}>Portfolio</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-lg)' }}>
            Real results from churches and ministries we&apos;ve partnered with. Every project demonstrates the impact of professional media management.
          </p>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section style={{ paddingBottom: '40px' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)', display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button onClick={() => setSelectedFilter('all')} style={getTabStyle('all')}>
            <Globe size={14} /> All Works
          </button>
          <button onClick={() => setSelectedFilter('reels')} style={getTabStyle('reels')}>
            <Film size={14} /> Reels (9:16)
          </button>
          <button onClick={() => setSelectedFilter('videos')} style={getTabStyle('videos')}>
            <Play size={14} /> Videos (16:9)
          </button>
          <button onClick={() => setSelectedFilter('graphics')} style={getTabStyle('graphics')}>
            <ImageIcon size={14} /> Graphics (1:1 / 4:5)
          </button>
          <button onClick={() => setSelectedFilter('campaigns')} style={getTabStyle('campaigns')}>
            <BarChart2 size={14} /> Campaigns & Leads
          </button>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-8)',
            alignItems: 'start' // Prevent stretching to display organic aspect ratio heights
          }}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bento-card-hover"
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  transition: 'all var(--transition-base)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Visual Representation container matching the exact aspect ratio */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: item.ratio === '9/16' ? '9/16' : item.ratio === '16/9' ? '16/9' : item.ratio === '4/5' ? '4/5' : item.ratio === '1/1' ? '1/1' : '16/10',
                  background: 'var(--color-bg-secondary)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'stretch',
                  borderBottom: '1px solid var(--color-border)'
                }}>
                  {renderThumbnail(item)}
                </div>

                {/* Content */}
                <div style={{ padding: 'var(--space-6) var(--space-8)', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', textAlign: 'left' }}>
                  <div style={{ marginBottom: 'var(--space-4)' }}>
                    <h3 className="font-heading" style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-base)', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Metrics Badge */}
                    <div style={{ paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)', marginTop: 'var(--space-4)' }}>
                      <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-accent)', margin: 0 }}>
                        {item.metrics}
                      </p>
                    </div>

                    {/* Learn More link */}
                    <div style={{ paddingTop: 'var(--space-4)' }}>
                      <span className="learn-more-link" style={{ color: 'var(--color-accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-sm)', cursor: 'pointer', transition: 'transform var(--transition-fast)' }}>
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', borderTop: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle blue glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '384px', height: '384px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.08)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div className="section-container" style={{ maxWidth: '890px', margin: '0 auto', padding: '0 var(--space-4)', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)' }}>
            Ready to See Your Ministry&apos;s Impact Grow?
          </h2>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)', maxWidth: '640px', margin: '0 auto var(--space-8) auto' }}>
            Every church in our portfolio started exactly where you are. Let&apos;s create something extraordinary together.
          </p>

          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about#contact" className="btn btn-primary" style={{ minWidth: '180px' }}>
              Schedule Consultation
            </Link>
            <Link href="/services" className="btn btn-ghost" style={{ minWidth: '180px', border: '1px solid var(--color-border)' }}>
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
