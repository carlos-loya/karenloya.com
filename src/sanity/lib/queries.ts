import { defineQuery } from 'next-sanity'

export const allPostsQuery = defineQuery(`
  *[_type == "blogPost" && date <= now()] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    date,
    "categories": categories[]->title
  }
`)

export const postBySlugQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug && date <= now()][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    date,
    "categories": categories[]->title,
    content
  }
`)

export const postSlugsQuery = defineQuery(`
  *[_type == "blogPost" && date <= now()] { "slug": slug.current }
`)

export const recentPostsQuery = defineQuery(`
  *[_type == "blogPost" && date <= now()] | order(date desc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    date,
    "categories": categories[]->title
  }
`)

export const postsByCategoryQuery = defineQuery(`
  *[_type == "blogPost" && date <= now() && $category in categories[]->title] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    date,
    "categories": categories[]->title
  }
`)

export const searchPostsQuery = `
  *[_type == "blogPost" && date <= now() && (title match $query + "*" || excerpt match $query + "*" || pt::text(content) match $query + "*")] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    date,
    "categories": categories[]->title
  }
`

export const allCategoriesQuery = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title
  }
`)
