import Image from 'next/image';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden border-4 border-olive-700 shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=675&fit=crop"
                alt="About Karen"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-olive-900 mb-4">
                  About Karen
                </h2>
                <div className="w-20 h-1 bg-olive-700"></div>
              </div>

              <div className="font-inter text-olive-800 space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  Welcome to my corner of the internet. I&apos;m Karen, a lifestyle journalist, creative spirit,
                  and firm believer in the art of slow living. Through this journal, I explore the beauty
                  in everyday moments—from the perfect cup of morning coffee to the golden hour light that
                  transforms an ordinary room into something magical.
                </p>

                <p>
                  Here, you&apos;ll find reflections on fashion that prioritizes quality over quantity, home
                  spaces that nurture the soul, beauty routines that honor both self-care and sustainability,
                  and travel experiences that open our eyes to new perspectives.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-olive-700 text-white font-inter font-medium rounded-lg hover:bg-olive-800 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-700 focus:ring-offset-2"
                >
                  Learn More About Me
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
