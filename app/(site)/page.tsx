import Hero from '@/components/Hero';
import RecentPostsCarousel from '@/components/RecentPostsCarousel';
import AboutPreview from '@/components/AboutPreview';
import { getRecentPosts } from '@/sanity/lib/fetchers';

export const revalidate = 60;

export default async function HomePage() {
  const recentPosts = await getRecentPosts(6);

  return (
    <>
      <Hero />
      <RecentPostsCarousel posts={recentPosts} />
      <AboutPreview />
    </>
  );
}
