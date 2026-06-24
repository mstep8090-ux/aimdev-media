import { Metadata } from 'next';
import { ServicesPageClient } from './services-page-client';
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Aimdev Media\'s premium church media services: professional sermon clipping, social media management, targeted lead generation ads, graphic design, and video production.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Our Services', item: '/services' },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <ServicesPageClient />
    </>
  );
}
