import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SEO_CONFIG } from '@/config/seo'
import { JsonLd, getOrganizationSchema, getWebSiteSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: `%s | ${SEO_CONFIG.brandName}`,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: [...SEO_CONFIG.keywords],
  authors: [{ name: SEO_CONFIG.brandName, url: SEO_CONFIG.siteUrl }],
  creator: SEO_CONFIG.brandName,
  publisher: SEO_CONFIG.brandName,
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: {
      default: SEO_CONFIG.defaultTitle,
      template: `%s | ${SEO_CONFIG.brandName}`,
    },
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.brandName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: SEO_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${SEO_CONFIG.brandName} - Premium Church Media Agency`,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: SEO_CONFIG.defaultTitle,
      template: `%s | ${SEO_CONFIG.brandName}`,
    },
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.defaultOgImage],
    creator: SEO_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US',
    'geo.position': '37.09024;-95.712891',
    'ICBM': '37.09024, -95.712891',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <head>
        <JsonLd schema={getOrganizationSchema()} />
        <JsonLd schema={getWebSiteSchema()} />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
