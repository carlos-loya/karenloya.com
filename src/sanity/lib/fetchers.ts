import { client } from './client'
import {
  allPostsQuery,
  postBySlugQuery,
  postSlugsQuery,
  recentPostsQuery,
  postsByCategoryQuery,
  searchPostsQuery,
  allCategoriesQuery,
  allSinceLastTimeQuery,
  sinceLastTimeBySlugQuery,
  sinceLastTimeSlugsQuery,
} from './queries'
import type { SanityBlogPost, SanitySinceLastTime } from './types'

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

export async function getAllSinceLastTime(): Promise<SanitySinceLastTime[]> {
  return client.fetch(allSinceLastTimeQuery)
}

export async function getSinceLastTimeBySlug(slug: string): Promise<SanitySinceLastTime | null> {
  return client.fetch(sinceLastTimeBySlugQuery, { slug })
}

export async function getSinceLastTimeSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(sinceLastTimeSlugsQuery)
}
