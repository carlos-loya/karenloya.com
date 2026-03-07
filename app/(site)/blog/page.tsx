import Link from 'next/link';
import Hero from '@/components/Hero';
import BlogPostCard from '@/components/BlogPostCard';
import { getAllPosts, getPostsByCategory, searchPosts } from '@/sanity/lib/fetchers';

export const revalidate = 60;

interface BlogPageProps {
  searchParams: Promise<{ category?: string; search?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category, search } = await searchParams;

  let posts;
  let pageTitle = 'Blog';
  let pageSubtitle = 'Stories, Inspiration & Lifestyle Insights';

  if (search) {
    posts = await searchPosts(search);
    pageTitle = `Search: "${search}"`;
    pageSubtitle = `${posts.length} result${posts.length !== 1 ? 's' : ''} found`;
  } else if (category) {
    posts = await getPostsByCategory(category);
    pageTitle = category;
    pageSubtitle = `${posts.length} post${posts.length !== 1 ? 's' : ''} in ${category}`;
  } else {
    posts = await getAllPosts();
  }

  return (
    <>
      <Hero
        title={pageTitle}
        subtitle={pageSubtitle}
        fullHeight={false}
      />

      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-6">
          {/* Active filter indicator */}
          {(category || search) && (
            <div className="mb-8 flex items-center gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 px-4 py-2 bg-olive-100 text-olive-700 font-inter text-sm rounded-full hover:bg-olive-200 transition-colors"
              >
                &larr; All Posts
              </Link>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-lora text-xl text-olive-800">
                {search
                  ? `No posts found for "${search}". Try a different search term.`
                  : category
                    ? `No posts in "${category}" yet. Check back soon!`
                    : 'No blog posts available yet. Check back soon!'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
