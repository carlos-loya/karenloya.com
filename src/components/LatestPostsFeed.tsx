import Link from 'next/link';
import BlogPostCard from './BlogPostCard';
import type { SanityBlogPost } from '@/sanity/lib/types';

interface LatestPostsFeedProps {
  posts: SanityBlogPost[];
  limit?: number;
}

export default function LatestPostsFeed({ posts, limit }: LatestPostsFeedProps) {
  const displayPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div>
      <h2 className="font-playfair text-3xl md:text-4xl font-normal text-olive-900 mb-8">
        The Latest
      </h2>
      <div className="space-y-8">
        {displayPosts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
      {posts.length > 0 && (
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-olive-700 text-white font-inter text-sm uppercase tracking-wider rounded hover:bg-olive-800 transition-colors"
          >
            Read More
          </Link>
        </div>
      )}
    </div>
  );
}
