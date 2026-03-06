import { client } from './client'
import {
  allPostsQuery,
  postBySlugQuery,
  postSlugsQuery,
  recentPostsQuery,
  postsByCategoryQuery,
  searchPostsQuery,
  allCategoriesQuery,
  activeWeeklyDigestQuery,
} from './queries'
import type { SanityBlogPost, SanityWeeklyDigest } from './types'

export async function getAllPosts(): Promise<SanityBlogPost[]> {
  return client.fetch(allPostsQuery)
}

export async function getPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  return client.fetch(postBySlugQuery, { slug })
}

export async function getPostSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(postSlugsQuery)
}

export async function getRecentPosts(limit: number = 6): Promise<SanityBlogPost[]> {
  return client.fetch(recentPostsQuery, { limit })
}

export async function getPostsByCategory(category: string): Promise<SanityBlogPost[]> {
  return client.fetch(postsByCategoryQuery, { category })
}

export async function searchPosts(query: string): Promise<SanityBlogPost[]> {
  return client.fetch<SanityBlogPost[]>(searchPostsQuery, { query } as Record<string, unknown>)
}

export async function getAllCategories(): Promise<{ _id: string; title: string }[]> {
  return client.fetch(allCategoriesQuery)
}

export async function getActiveWeeklyDigest(): Promise<SanityWeeklyDigest | null> {
  return client.fetch(activeWeeklyDigestQuery)
}
