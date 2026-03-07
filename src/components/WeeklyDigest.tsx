import Link from 'next/link';
import type { SanityWeeklyDigest } from '@/sanity/lib/types';

interface WeeklyDigestProps {
  digest: SanityWeeklyDigest | null;
}

export default function WeeklyDigest({ digest }: WeeklyDigestProps) {
  return (
    <div className="mb-8">
      <h2 className="font-playfair text-2xl md:text-3xl font-normal text-olive-900 mb-4">
        Weekly Digest
      </h2>
      {digest ? (
        <div>
          <h3 className="font-inter text-sm uppercase tracking-wider text-olive-700 mb-2">
            {digest.title}
          </h3>
          {digest.description && (
            <p className="font-inter text-olive-800 text-sm mb-4 leading-relaxed">
              {digest.description}
            </p>
          )}
          <ul className="space-y-3">
            {digest.items?.map((post) => (
              <li key={post._id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-start gap-3"
                >
                  <span className="text-olive-700 mt-1 shrink-0">&bull;</span>
                  <span className="font-inter text-sm text-olive-800 group-hover:text-olive-600 transition-colors leading-snug">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="font-inter text-olive-600 text-sm italic">
          Check back soon for this week&apos;s picks!
        </p>
      )}
    </div>
  );
}
