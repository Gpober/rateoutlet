import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

// Campaign landing pages (/lp/*) are intentionally excluded — they are noindex.
const ROUTES = ['', '/loan-programs', '/calculator', '/about', '/contact', '/realtors']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
