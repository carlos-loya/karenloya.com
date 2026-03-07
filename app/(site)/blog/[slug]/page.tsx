import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';
import PortableTextRenderer from '@/components/PortableTextRenderer';
import { getPostBySlug, getPostSlugs } from '@/sanity/lib/fetchers';
import { urlFor } from '@/sanity/lib/image';

export const revalidate = 60;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | KAREN`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-6 py-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-olive-700 hover:text-olive-600 transition-colors font-inter text-sm"
          >
            <ChevronLeft size={20} />
            Back to Blog
          </Link>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-6 mb-12">
          <div className="relative aspect-[16/9] overflow-hidden border-4 border-olive-700 shadow-card">
            <Image
              src={urlFor(post.coverImage).width(1280).height(720).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* Article Header */}
        <div className="container mx-auto px-6 mb-12">
          <div className="max-w-3xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories?.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-olive-100 text-olive-700 font-inter text-xs rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-olive-900 mb-6">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex items-center gap-4 text-olive-700 font-inter text-sm mb-6">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {/* Excerpt */}
            <p className="font-inter text-lg md:text-xl text-olive-800 leading-relaxed italic border-l-4 border-olive-700 pl-6">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            {post.content && <PortableTextRenderer content={post.content} />}

            {/* Share Section */}
            <div className="mt-12 p-8 bg-olive-100 rounded-2xl text-center">
              <h3 className="font-playfair text-2xl font-bold text-olive-900 mb-4">
                Enjoyed this post?
              </h3>
              <p className="font-inter text-olive-800 mb-6">
                Share it with friends or explore more stories on the blog.
              </p>
              <Link
                href="/blog"
                className="inline-block px-8 py-3 bg-olive-700 text-white font-inter rounded-lg hover:bg-olive-800 transition-colors"
              >
                Explore More Posts
              </Link>
            </div>
          </div>
        </div>
      </article>

      <NewsletterSignup />
    </>
  );
}
