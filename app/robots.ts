import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Keep the embedded Sanity Studio login and internal API routes out of
      // search results. Studio has its own auth, but there's no reason for it
      // to show up in Google for a personal blog.
      disallow: ['/studio', '/api/'],
    },
    sitemap: 'https://karenloya.com/sitemap.xml',
    host: 'https://karenloya.com',
  }
}
