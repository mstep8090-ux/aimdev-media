import { Metadata } from 'next';
import { PortfolioPageClient } from './portfolio-page-client';
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Explore Case studies and media highlights from our partner churches: sermon clips, vertical graphics, landscape videos, and ad campaigns.',
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Our Portfolio', item: '/portfolio' },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <PortfolioPageClient />
    </>
  );
}
