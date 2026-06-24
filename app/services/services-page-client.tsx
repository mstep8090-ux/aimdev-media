'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Video, Smartphone, Sparkles, Film, Target, Mic, Globe, TrendingUp, Play, Calendar, Layers, BarChart2, CheckCircle2, Volume2, Type, Image as ImageIcon, Search, ArrowUpRight, ChevronDown } from 'lucide-react';

const services = [
  {
    id: 'clipping',
    title: "Sermon Clipping",
    description: "Transform long sermons into viral-ready short-form content",
    details: [
      "One 45-60 min service → 8-12 clips",
      "Trending audio integration",
      "Mobile-optimized formats (Reels, Shorts, TikToks)",
      "Motion graphics & text overlays",
      "Quote extraction & highlights",
      "24-48 hour turnaround",
      "Unlimited revisions"
    ],
    pricing: "Starting $500/month (8-12 clips)",
    ideal: "Ideal for: Churches wanting to maximize sermon reach",
    colSpan: "lg:col-span-6"
  },
  {
    id: 'social',
    title: "Social Media Management",
    description: "Daily content creation and community engagement",
    details: [
      "4-6 original posts per week",
      "Unlimited reels & stories",
      "Community management & responses",
      "Multi-platform posting (Instagram, TikTok, Facebook, YouTube)",
      "Monthly analytics report",
      "Trending content strategy"
    ],
    pricing: "Starting $1,200/month",
    ideal: "Ideal for: Growing your online community consistently",
    colSpan: "md:col-span-1 lg:col-span-3"
  },
  {
    id: 'design',
    title: "Graphic Design",
    description: "Professional visuals for every platform and purpose",
    details: [
      "Event promotion graphics",
      "Sermon graphics & social posts",
      "Conference materials",
      "Instagram Stories templates",
      "Flyers & posters",
      "Brand consistency maintained"
    ],
    pricing: "Starting $400/month (unlimited revisions)",
    ideal: "Ideal for: Consistent, professional visual branding",
    colSpan: "md:col-span-1 lg:col-span-3"
  },
  {
    id: 'video',
    title: "Video Production & Editing",
    description: "Professional video content for maximum impact",
    details: [
      "Worship highlight reels",
      "Event teaser videos",
      "Testimonial compilation videos",
      "Conference promotional videos",
      "Multi-camera editing",
      "Color grading & effects",
      "Music licensing included"
    ],
    pricing: "Starting $1,500/video or $2,500/month package",
    ideal: "Ideal for: Events and major announcements",
    colSpan: "lg:col-span-6"
  },
  {
    id: 'ads',
    title: "Lead Generation Ads",
    description: "Convert interested viewers into registered attendees",
    details: [
      "Ad strategy & copywriting",
      "Multi-platform setup (Meta, TikTok, YouTube)",
      "A/B testing & optimization",
      "Landing page design",
      "Lead capture forms",
      "Average $0.85 cost per lead"
    ],
    pricing: "Starting $2,000 campaign or $400/month ongoing",
    ideal: "Ideal for: Driving event registrations & conversions",
    colSpan: "md:col-span-1 lg:col-span-3"
  },
  {
    id: 'podcast',
    title: "Podcast Launch & Production",
    description: "Start or scale a ministry podcast",
    details: [
      "Podcast strategy & planning",
      "Recording setup consultation",
      "Audio editing & mastering",
      "Episode transcription",
      "Distribution to all platforms",
      "Monthly analytics"
    ],
    pricing: "Starting $800/month (2 episodes)",
    ideal: "Ideal for: Extending your reach with audio content",
    colSpan: "md:col-span-1 lg:col-span-3"
  },
  {
    id: 'web',
    title: "Website & Landing Pages",
    description: "Professional web presence that converts",
    details: [
      "Modern, mobile-responsive design",
      "Event registration integration",
      "Donation system setup",
      "Email capture forms",
      "Blog & sermon archives",
      "SEO optimization"
    ],
    pricing: "Starting $2,500 one-time or $500/month managed",
    ideal: "Ideal for: Your church's digital home base",
    colSpan: "lg:col-span-6"
  },
  {
    id: 'audit',
    title: "Social Media Strategy Audit",
    description: "Comprehensive analysis and growth roadmap",
    details: [
      "Current platform performance review",
      "Competitor analysis",
      "Audience demographics & insights",
      "Content strategy recommendations",
      "Growth roadmap (6-12 months)",
      "Platform-specific tactics"
    ],
    pricing: "$1,500 one-time audit",
    ideal: "Ideal for: Getting a clear growth strategy",
    colSpan: "lg:col-span-6"
  }
];

const packages = [
  {
    name: "Starter",
    price: "$2,500",
    period: "per month",
    description: "Perfect for churches just starting their digital journey",
    features: [
      "8-10 sermon clips/month",
      "2 social posts/week",
      "Monthly graphics package (5-8 pieces)",
      "Analytics report",
      "Email support"
    ],
    cta: "Get Started"
  },
  {
    name: "Growth",
    price: "$5,000",
    period: "per month",
    description: "Most popular - for churches serious about viral growth",
    features: [
      "12-16 sermon clips/month",
      "4-6 social posts/week",
      "Unlimited reels & stories",
      "20 graphics/month",
      "2 long-form videos",
      "Lead gen campaign prep",
      "Priority support",
      "Monthly strategy call"
    ],
    cta: "Most Popular",
    featured: true
  },
  {
    name: "Premium",
    price: "Custom",
    period: "pricing available",
    description: "Full-service media for large organizations",
    features: [
      "Everything in Growth",
      "Event video production",
      "Podcast production",
      "Website management",
      "Lead gen ads ($2K/month)",
      "Daily community management",
      "Dedicated account manager",
      "Custom strategy"
    ],
    cta: "Let's Talk"
  }
];

/* ==================== VISUAL INTERFACE COMPONENTS ==================== */

// 1. Sermon Clipping Visual
function ClippingVisual() {
  return (
    <div style={{
      background: 'var(--color-bg-secondary)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text-primary)',
      width: '100%',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontSize: '10px',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px' }}>
        <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>● TIMELINE EDITOR</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>0:00 - 0:60</span>
      </div>
      {/* Video track */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ color: 'var(--color-text-secondary)' }}>VIDEO TRACK</div>
        <div style={{ height: '24px', background: 'var(--color-bg-primary)', borderRadius: '4px', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '4px', border: '1px solid var(--color-border)' }}>
          <span style={{ background: 'var(--color-accent)', width: '25%', height: '14px', borderRadius: '2px', display: 'inline-block' }} />
          <span style={{ background: '#3b82f6', width: '55%', height: '14px', borderRadius: '2px', display: 'inline-block' }} />
          <span style={{ background: 'var(--color-accent)', width: '15%', height: '14px', borderRadius: '2px', display: 'inline-block' }} />
        </div>
      </div>
      {/* Audio track */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ color: 'var(--color-text-secondary)' }}>AUDIO SYNC</div>
        <div style={{ height: '20px', background: 'var(--color-bg-primary)', borderRadius: '4px', display: 'flex', alignItems: 'center', padding: '0 8px', border: '1px dashed var(--color-border)' }}>
          <svg width="100%" height="12" viewBox="0 0 200 20" fill="none">
            <path d="M 0,10 Q 5,2 10,10 T 20,10 T 30,10 T 40,10 T 50,10 T 60,10 T 70,10 T 80,10 T 90,10 T 100,10 T 110,10 T 120,10 T 130,10 T 140,10 T 150,10 T 160,10 T 170,10 T 180,10 T 190,10 T 200,10" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>
      {/* Captions */}
      <div style={{ height: '22px', background: 'var(--color-accent-light)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', border: '1px solid var(--color-accent-light)' }}>
        [CAPTIONS: &ldquo;Finding Peace in Chaos...&rdquo;]
      </div>
    </div>
  );
}

// 2. Social Media Visual
function SocialVisual() {
  return (
    <div style={{
      background: 'var(--color-bg-secondary)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      color: 'var(--color-text-primary)',
      width: '100%',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontSize: '10px',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', fontWeight: 'bold' }}>POST SCHEDULER</div>
      {/* Scheduled Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {[
          { platform: 'Instagram Reels', time: 'Mon 9:00 AM', status: 'Published' },
          { platform: 'YouTube Shorts', time: 'Wed 12:00 PM', status: 'Queued' },
          { platform: 'TikTok Video', time: 'Fri 3:00 PM', status: 'Draft' }
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 8px', background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '4px' }}>
            <div>
              <span style={{ fontWeight: 'bold' }}>{item.platform}</span>
              <span style={{ color: 'var(--color-text-secondary)', marginLeft: '6px' }}>{item.time}</span>
            </div>
            <span style={{
              background: item.status === 'Published' ? 'rgba(16, 185, 129, 0.15)' : item.status === 'Queued' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(107, 114, 128, 0.15)',
              color: item.status === 'Published' ? '#10b981' : item.status === 'Queued' ? '#3b82f6' : 'var(--color-text-secondary)',
              padding: '2px 6px',
              borderRadius: '3px',
              fontWeight: 'bold',
              fontSize: '8px'
            }}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Graphic Design Visual
function DesignVisual() {
  return (
    <div style={{
      background: 'var(--color-bg-secondary)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      color: 'var(--color-text-primary)',
      width: '100%',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontSize: '10px',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', fontWeight: 'bold' }}>BRAND DESIGN ASSETS</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', flex: 1 }}>
        <div style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', borderRadius: '6px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff' }}>
          <div style={{ fontSize: '8px', opacity: 0.8 }}>SERMON SERIES</div>
          <div style={{ fontWeight: 'bold', fontSize: '11px', lineHeight: 1.2 }}>RISING ABOVE</div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', borderRadius: '6px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff' }}>
          <div style={{ fontSize: '8px', opacity: 0.8 }}>YOUTH NIGHT</div>
          <div style={{ fontWeight: 'bold', fontSize: '11px', lineHeight: 1.2 }}>UNSHAKABLE</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '6px', fontSize: '8px', color: 'var(--color-text-secondary)', justifyContent: 'center' }}>
        <span>✔ Font Guidelines</span>
        <span>•</span>
        <span>✔ Preset Color Palettes</span>
      </div>
    </div>
  );
}

// 4. Video Production Visual
function VideoVisual() {
  return (
    <div style={{
      background: 'var(--color-bg-secondary)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      color: 'var(--color-text-primary)',
      width: '100%',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontSize: '10px',
      boxShadow: 'var(--shadow-lg)',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px' }}>
        <span style={{ fontWeight: 'bold' }}>🎥 VIDEO EXPORT</span>
        <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>1080p ProRes</span>
      </div>
      {/* Video Preview Frame */}
      <div style={{ height: '70px', background: 'var(--color-bg-primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
        {/* Play icon overlay */}
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: 'var(--shadow-md)' }}>
          <Play size={10} fill="#fff" style={{ marginLeft: '1.5px' }} />
        </div>
        <div style={{ position: 'absolute', bottom: '6px', left: '8px', fontSize: '8px', color: 'rgba(250, 248, 245, 0.7)' }}>0:15 / 2:30</div>
      </div>
      {/* Video rendering progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ flex: 1, height: '4px', background: 'var(--color-bg-primary)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', background: 'var(--color-accent)' }} />
        </div>
        <span style={{ fontSize: '8px', color: 'var(--color-text-secondary)' }}>Ready</span>
      </div>
    </div>
  );
}

// 5. Lead Gen Ads Visual
function AdsVisual() {
  return (
    <div style={{
      background: 'var(--color-bg-secondary)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      color: 'var(--color-text-primary)',
      width: '100%',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontSize: '10px',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', fontWeight: 'bold' }}>CAMPAIGN ANALYTICS</div>
      {/* Analytics values */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', margin: '6px 0' }}>
        <div style={{ padding: '8px', background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '6px' }}>
          <div style={{ fontSize: '8px', color: 'var(--color-text-secondary)', marginBottom: '2px' }}>Total Leads</div>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--color-accent)' }}>342</div>
        </div>
        <div style={{ padding: '8px', background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '6px' }}>
          <div style={{ fontSize: '8px', color: 'var(--color-text-secondary)', marginBottom: '2px' }}>Cost Per Lead</div>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#10b981' }}>$0.85</div>
        </div>
      </div>
      {/* Target audience criteria */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.15)', borderRadius: '4px', padding: '6px' }}>
        <span style={{ fontWeight: 'bold', color: '#3b82f6', fontSize: '8px' }}>TARGET AUDIENCE:</span>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: '8px' }}>Local radius 15 miles • Families with kids • Interests: faith, church</span>
      </div>
    </div>
  );
}

// 6. Podcast Visual
function PodcastVisual() {
  return (
    <div style={{
      background: 'var(--color-bg-secondary)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      color: 'var(--color-text-primary)',
      width: '100%',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontSize: '10px',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', fontWeight: 'bold' }}>PODCAST DISTRIBUTION</div>
      {/* Audio waveform */}
      <div style={{ height: '36px', background: 'var(--color-bg-primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)', gap: '2px', padding: '0 10px' }}>
        <Mic size={12} style={{ color: 'var(--color-accent)', marginRight: '6px' }} />
        {[60, 30, 80, 50, 90, 40, 70, 30, 85, 45, 60, 20, 75, 40, 90, 55, 70, 30].map((h, i) => (
          <span key={i} style={{ width: '2px', height: `${h}%`, background: 'var(--color-accent)', borderRadius: '1px' }} />
        ))}
      </div>
      {/* Output targets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', textAlign: 'center', marginTop: '4px' }}>
        {['Apple Podcasts', 'Spotify', 'Google Podcasts'].map((plat, i) => (
          <div key={i} style={{ padding: '4px', background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '7.5px', fontWeight: 'bold' }}>
            {plat}
          </div>
        ))}
      </div>
    </div>
  );
}

// 7. Web & Landing Pages Visual
function WebVisual() {
  return (
    <div style={{
      background: 'var(--color-bg-secondary)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      color: 'var(--color-text-primary)',
      width: '100%',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontSize: '10px',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', fontWeight: 'bold' }}>RESPONSIVE DESIGN</div>
      <div style={{ display: 'flex', gap: '8px', flex: 1, alignItems: 'stretch' }}>
        {/* Desktop Browser */}
        <div style={{ flex: 2, background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ height: '4px', background: 'var(--color-border)', borderRadius: '2px', width: '30%' }} />
          <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
            <div style={{ flex: 2, background: 'var(--color-accent-light)', borderRadius: '2px' }} />
            <div style={{ flex: 1, background: 'var(--color-bg-secondary)', borderRadius: '2px' }} />
          </div>
        </div>
        {/* Mobile Device */}
        <div style={{ width: '30px', background: 'var(--color-bg-primary)', border: '1.5px solid var(--color-text-primary)', borderRadius: '6px', padding: '4px 2px', display: 'flex', flexDirection: 'column', gap: '3px', position: 'relative' }}>
          <div style={{ width: '8px', height: '2px', background: 'var(--color-text-primary)', borderRadius: '1px', margin: '0 auto' }} />
          <div style={{ flex: 1, background: 'var(--color-accent-light)', borderRadius: '1px' }} />
        </div>
      </div>
      <div style={{ fontSize: '8px', color: 'var(--color-success)', fontWeight: 'bold', textAlign: 'center' }}>
        ✓ 100% PageSpeed Mobile Score Optimized
      </div>
    </div>
  );
}

// 8. Social Media Strategy Audit Visual
function AuditVisual() {
  return (
    <div style={{
      background: 'var(--color-bg-secondary)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      color: 'var(--color-text-primary)',
      width: '100%',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontSize: '10px',
      boxShadow: 'var(--shadow-lg)',
      justifyContent: 'space-between'
    }}>
      <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', fontWeight: 'bold' }}>GROWTH ROADMAP</div>
      {/* Milestone roadmap */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {[
          { label: 'Phase 1: Brand & Layout Audit', status: 'Completed' },
          { label: 'Phase 2: Content Acceleration', status: 'Active' },
          { label: 'Phase 3: Community Conversion', status: 'Scheduled' }
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.status === 'Completed' ? '#10b981' : item.status === 'Active' ? 'var(--color-accent)' : 'var(--color-border)', flexShrink: 0 }} />
            <span style={{ color: item.status === 'Completed' ? 'var(--color-text-secondary)' : 'var(--color-text-primary)', textDecoration: item.status === 'Completed' ? 'line-through' : 'none' }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '7.5px', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
        Roadmap Tailored specifically for 12 months growth.
      </div>
    </div>
  );
}

interface FAQItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ q, a, isOpen, onToggle }: FAQItemProps) {
  return (
    <div style={{
      background: 'var(--color-bg-card)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      transition: 'all var(--transition-base)'
    }}>
      <div
        onClick={onToggle}
        style={{
          padding: '20px 24px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          fontSize: 'var(--font-size-base)',
          userSelect: 'none'
        }}
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform var(--transition-base)',
            color: 'var(--color-text-secondary)'
          }}
        />
      </div>
      
      <div style={{
        maxHeight: isOpen ? '200px' : '0px',
        overflow: 'hidden',
        transition: 'max-height var(--transition-base) ease-in-out',
        background: 'rgba(var(--color-bg-card-rgb), 0.3)'
      }}>
        <p style={{
          color: 'var(--color-text-secondary)',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 1.6,
          marginTop: 'var(--space-4)',
          marginBottom: 0,
          paddingLeft: 'var(--space-4)',
          borderLeft: '2px solid var(--color-accent-glow)',
          paddingBottom: '20px',
          paddingRight: '20px'
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export function ServicesPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const renderVisual = (id: string) => {
    switch (id) {
      case 'clipping': return <ClippingVisual />;
      case 'social': return <SocialVisual />;
      case 'design': return <DesignVisual />;
      case 'video': return <VideoVisual />;
      case 'ads': return <AdsVisual />;
      case 'podcast': return <PodcastVisual />;
      case 'web': return <WebVisual />;
      case 'audit': return <AuditVisual />;
      default: return <ClippingVisual />;
    }
  };

  return (
    <div className="services-page" style={{ background: 'var(--color-bg-base)', minHeight: '100vh', paddingBottom: '1px' }}>
      {/* Header / Hero */}
      <section className="hero" style={{ overflow: 'hidden', padding: '160px 0 80px 0', textAlign: 'center' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <span className="section-badge" style={{ display: 'inline-block', marginBottom: 'var(--space-2)' }}>SERVICES</span>
          <h1 className="hero-title" style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontSize: '3rem' }}>
            Services Built for <span style={{ color: 'var(--color-accent)' }}>Church Growth</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-lg)' }}>
            Every service is designed to solve one problem: making your church visible, memorable, and growing.
          </p>
        </div>
      </section>

      {/* Bento Services Grid */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {services.map((service, index) => {
              const isLarge = service.colSpan === 'lg:col-span-6';
              return (
                <div
                  key={index}
                  className={`${service.colSpan} bento-card-hover`}
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-8)',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden'
                  }}
                >
                  <div className={`flex flex-col ${isLarge ? 'lg:flex-row gap-8 items-center' : 'gap-6'} w-full`}>
                    {/* Visual representation left (large) or top (small) */}
                    <div className={`${isLarge ? 'w-full lg:w-1/2' : 'w-full'} service-visual-wrapper`}>
                      <div className="service-visual-el">
                        {renderVisual(service.id)}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`${isLarge ? 'w-full lg:w-1/2' : 'w-full'} flex flex-col justify-between`}>
                      <div>
                        <h3 className="font-heading" style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>
                          {service.title}
                        </h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-base)', marginBottom: 'var(--space-4)', lineHeight: 1.5 }}>
                          {service.description}
                        </p>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-6) 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {service.details.map((detail, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '8px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
                              <CheckCircle2 size={12} style={{ color: 'var(--color-accent)', marginTop: '3px', flexShrink: 0 }} />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)', marginTop: 'auto' }}>
                        <p style={{ fontWeight: 600, color: 'var(--color-accent)', fontSize: 'var(--font-size-base)', marginBottom: '2px' }}>
                          {service.pricing}
                        </p>
                        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
                          {service.ideal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-badge" style={{ display: 'inline-block', marginBottom: 'var(--space-2)' }}>PRICING</span>
            <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>
              Monthly Packages
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              All packages include ongoing optimization and monthly strategy calls
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)', alignItems: 'stretch' }}>
            {packages.map((pkg, index) => {
              const cardBg = pkg.featured 
                ? 'linear-gradient(135deg, #1a1410 0%, #271e15 100%)' 
                : 'var(--color-bg-card)';
              const titleColor = pkg.featured ? '#ffffff' : 'var(--color-text-primary)';
              const descColor = pkg.featured ? 'rgba(250, 248, 245, 0.75)' : 'var(--color-text-secondary)';
              const textColor = pkg.featured ? 'rgba(250, 248, 245, 0.9)' : 'var(--color-text-primary)';
              const priceColor = pkg.featured ? 'var(--blue-400)' : 'var(--color-accent)';
              const borderColor = pkg.featured ? 'var(--color-accent)' : 'var(--color-border)';

              return (
                <div
                  key={index}
                  className="bento-card-hover"
                  style={{
                    background: cardBg,
                    border: `2px solid ${borderColor}`,
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-8)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: pkg.featured ? 'var(--shadow-xl)' : 'var(--shadow-md)',
                    transform: pkg.featured ? 'scale(1.02)' : 'none',
                    transition: 'all var(--transition-base)',
                  }}
                >
                  <div>
                    {pkg.featured && (
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '99px',
                        background: 'var(--color-accent)',
                        color: '#fff',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-4)'
                      }}>
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-heading" style={{ fontSize: '1.5rem', fontWeight: 700, color: titleColor, marginBottom: 'var(--space-2)' }}>
                      {pkg.name}
                    </h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: descColor, marginBottom: 'var(--space-6)' }}>
                      {pkg.description}
                    </p>

                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 800, color: priceColor }}>
                        {pkg.price}
                      </span>
                      <span style={{ fontSize: 'var(--font-size-sm)', color: descColor, marginLeft: '6px' }}>
                        {pkg.period}
                      </span>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0' }}>
                      {pkg.features.map((feature, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '10px', fontSize: 'var(--font-size-sm)', color: textColor, marginBottom: 'var(--space-3)' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: priceColor, display: 'block', marginTop: '7px', flexShrink: 0 }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/about#contact"
                    className={pkg.featured ? "btn btn-primary" : "btn btn-ghost"}
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      border: pkg.featured ? 'none' : '2px solid var(--color-accent)',
                      color: pkg.featured ? '#fff' : 'var(--color-accent)',
                      padding: '0.75rem 0'
                    }}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '100px 0', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-base)' }}>
        <div className="section-container" style={{ maxWidth: '840px', margin: '0 auto', padding: '0 var(--space-4)' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-badge" style={{ display: 'inline-block', marginBottom: 'var(--space-2)' }}>FAQ</span>
            <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Common Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {[
              {
                q: "Do you work with churches of all sizes?",
                a: "Yes! We work with everything from small churches (100 people) to large organizations (5,000+). We scale our services based on your goals and budget."
              },
              {
                q: "What's your turnaround time for content?",
                a: "Sermon clips: 24-48 hours. Graphics: 2-3 days. Videos: 5-7 days. Rush options available for urgent projects."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. Monthly packages can be paused or cancelled with 2 weeks notice. No long-term contracts required."
              },
              {
                q: "Do you offer custom packages?",
                a: "Absolutely. If our standard packages don't fit, let's talk. We create custom solutions for unique needs."
              },
              {
                q: "How do you measure success?",
                a: "We track views, engagement, reach, conversions, and event registrations. Monthly reports show exactly what's working."
              }
            ].map((item, index) => (
              <FAQItem
                key={index}
                q={item.q}
                a={item.a}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
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
            Which Package is Right for Your Church?
          </h2>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)', maxWidth: '640px', margin: '0 auto var(--space-8) auto' }}>
            Book a free consultation. We&apos;ll recommend the perfect fit.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/about#contact" className="btn btn-primary" style={{ minWidth: '220px' }}>
              Schedule Your Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
