import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/config/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SEO_CONFIG.siteUrl;

  // 1. Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic Routes Placeholder/Example
  // This demonstrates how to fetch dynamic items (like portfolio case studies or blog posts) from a CMS/database
  // and map them into the sitemap.
  /*
  async function getDynamicPortfolioItems() {
    try {
      const res = await fetch('https://api.aimdevmedia.com/portfolio');
      if (!res.ok) return [];
      const items = await res.json();
      return items.map((item: { slug: string; updatedAt: string }) => ({
        url: `${baseUrl}/portfolio/${item.slug}`,
        lastModified: new Date(item.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    } catch (error) {
      console.error('Sitemap dynamic fetch failed:', error);
      return [];
    }
  }
  const dynamicRoutes = await getDynamicPortfolioItems();
  */

  // Mocked dynamic routes for demonstration purposes
  const mockDynamicRoutes = [
    { slug: 'hope-community-church-social-growth', updatedAt: new Date().toISOString() },
    { slug: 'sermon-clip-viral-campaign-2026', updatedAt: new Date().toISOString() },
  ].map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...mockDynamicRoutes];
}
