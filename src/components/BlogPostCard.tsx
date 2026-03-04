import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import type { SanityBlogPost } from '@/sanity/lib/types';

interface BlogPostCardProps {
  post: SanityBlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="bg-white overflow-hidden border border-warm-gray-200 transition-all duration-300 hover:shadow-lg">
        {/* Featured Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={urlFor(post.coverImage).width(600).height(800).url()}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h3 className="font-playfair text-2xl md:text-[28px] font-normal text-warm-gray-900 mb-4 line-clamp-3 group-hover:text-olive-700 transition-colors leading-tight">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="font-inter text-[15px] text-warm-gray-600 line-clamp-3 mb-4 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center text-xs text-warm-gray-500 uppercase tracking-wider">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
