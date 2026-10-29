import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

// /lp/* is left crawlable on purpose: those pages carry a `noindex` robots
// meta tag, which crawlers can only see if they are allowed to fetch the page.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
