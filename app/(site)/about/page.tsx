import Hero from '@/components/Hero';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Karen"
        subtitle="Lifestyle Journalist & Creative"
        fullHeight={false}
      />

      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-12">
              <div className="relative aspect-[3/2] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=675&fit=crop"
                  alt="Karen - Lifestyle Journalist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="prose prose-lg max-w-none">
              <div className="font-inter text-warm-gray-700 space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  Welcome to my corner of the internet. I&apos;m Karen, a lifestyle journalist, creative spirit,
                  and firm believer in the art of slow living. Through this journal, I explore the beauty
                  in everyday moments—from the perfect cup of morning coffee to the golden hour light that
                  transforms an ordinary room into something magical.
                </p>

                <p>
                  My journey into lifestyle writing began with a simple realization: life is made up of
                  small, intentional choices. The clothes we wear, the spaces we inhabit, the rituals we
                  cultivate—each one tells a story about who we are and how we want to experience the world.
                </p>

                <p>
                  Here, you&apos;ll find reflections on fashion that prioritizes quality over quantity, home
                  spaces that nurture the soul, beauty routines that honor both self-care and sustainability,
                  and travel experiences that open our eyes to new perspectives. My approach is simple:
                  embrace authenticity, celebrate craftsmanship, and always leave room for wonder.
                </p>

                <p>
                  When I&apos;m not writing, you&apos;ll find me exploring local farmers markets, curled up in my
                  reading nook with a cup of tea, or planning my next adventure to wine country. I believe
                  in the power of community, the importance of supporting local artisans, and the joy that
                  comes from sharing stories over a thoughtfully prepared meal.
                </p>

                <p>
                  This journal is an invitation—to slow down, to notice, to appreciate the beauty that
                  surrounds us. Whether you&apos;re here for style inspiration, wellness insights, or simply
                  a moment of calm in your busy day, I&apos;m grateful you&apos;ve stopped by.
                </p>

                <p className="text-xl font-lora text-olive-700 italic mt-8">
                  Thank you for being here, and for joining me on this journey toward a more intentional,
                  beautiful life.
                </p>

                <p className="text-2xl font-playfair text-warm-gray-900 mt-6">
                  — Karen
                </p>
              </div>
            </div>

            {/* Connect Section */}
            <div className="mt-16 p-8 bg-olive-100 rounded-2xl text-center">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-warm-gray-900 mb-4">
                Let&apos;s Connect
              </h2>
              <p className="font-inter text-warm-gray-700 mb-6">
                Follow along on Instagram for daily inspiration, behind-the-scenes moments, and glimpses into my creative process.
              </p>
              <a
                href="https://instagram.com/karenmloya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-olive-700 text-white font-inter rounded-lg hover:bg-olive-800 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}