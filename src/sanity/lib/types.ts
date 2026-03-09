import type { PortableTextBlock } from '@portabletext/react'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

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

export interface SanitySinceLastTime {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage?: SanityImageSource
  date: string
  content?: PortableTextBlock[]
}
