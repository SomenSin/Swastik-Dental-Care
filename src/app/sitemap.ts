import { MetadataRoute } from 'next';
import { NAV_LINKS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://swastikdentalcare.info';

  const routes = NAV_LINKS.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: link.href === '/' ? 1 : 0.8,
  }));

  // Add legal pages
  const legalPages = ['/privacy', '/terms', '/disclaimer'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [...routes, ...legalPages];
}
