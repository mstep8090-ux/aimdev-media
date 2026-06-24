import { Metadata } from 'next';
import { HomePageClient } from './home-page-client';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: SEO_CONFIG.defaultTitle,
  description: SEO_CONFIG.defaultDescription,
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomePageClient />;
}
