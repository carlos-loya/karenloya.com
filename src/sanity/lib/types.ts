import type { PortableTextBlock } from '@portabletext/react'
import type { SanityImageSource } from '@sanity/image-url'

export interface SanityBlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage: SanityImageSource
  date: string
  categories: string[]
  content?: PortableTextBlock[]
}

export interface SanityWeeklyDigest {
  _id: string
  title: string
  weekOf: string
  description?: string
  items: SanityBlogPost[]
}
