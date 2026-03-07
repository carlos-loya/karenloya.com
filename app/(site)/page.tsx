import Hero from '@/components/Hero';
import LatestPostsFeed from '@/components/LatestPostsFeed';
import WelcomeSection from '@/components/WelcomeSection';
import WeeklyDigest from '@/components/WeeklyDigest';
import { getAllPosts, getActiveWeeklyDigest } from '@/sanity/lib/fetchers';

export const revalidate = 60;

export default async function HomePage() {
  const [posts, digest] = await Promise.all([
    getAllPosts(),
    getActiveWeeklyDigest(),
  ]);

  return (
    <>
      <Hero />
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          {/* Mobile: sidebar content above posts */}
          <div className="md:hidden mb-12 space-y-8">
            <WelcomeSection />
            <WeeklyDigest digest={digest} />
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Left column: post feed */}
            <div className="md:w-7/12">
              <LatestPostsFeed posts={posts} />
            </div>

            {/* Right column: sticky sidebar (desktop only) */}
            <aside className="hidden md:block md:w-5/12">
              <div className="md:sticky md:top-28 max-h-[calc(100vh-7rem)] overflow-y-auto">
                <WelcomeSection />
                <WeeklyDigest digest={digest} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
