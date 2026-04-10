import type { MetadataRoute } from 'next'
import { getAllPosts, getAllSinceLastTime } from '@/sanity/lib/fetchers'

const BASE_URL = 'https://karenloya.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, sinceLastTime] = await Promise.all([
    getAllPosts(),
    getAllSinceLastTime(),
  ])

  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const sinceLastTimeRoutes: MetadataRoute.Sitemap = sinceLastTime.map((post) => ({
    url: `${BASE_URL}/since-last-time/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes, ...sinceLastTimeRoutes]
}
