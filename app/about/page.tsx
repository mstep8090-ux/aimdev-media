import { Metadata } from 'next';
import { AboutPageClient } from './about-page-client';
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about the team behind Aimdev Media and how we help ministries drive engagement, build online communities, and grow their local reach.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'About Us', item: '/about' },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <AboutPageClient />
    </>
  );
}
