import Link from 'next/link';
import type { SanitySinceLastTime } from '@/sanity/lib/types';

interface SinceLastTimeProps {
  latest: SanitySinceLastTime | null;
}

export default function SinceLastTime({ latest }: SinceLastTimeProps) {
  return (
    <div className="mb-8">
      <h2 className="font-playfair text-2xl md:text-3xl font-normal text-olive-900 mb-4">
        Since Last Time
      </h2>
      {latest ? (
        <div>
          <h3 className="font-inter text-sm uppercase tracking-wider text-olive-700 mb-2">
            {latest.title}
          </h3>
          <p className="font-inter text-olive-800 text-sm mb-4 leading-relaxed">
            {latest.excerpt}
          </p>
          <Link
            href={`/since-last-time/${latest.slug}`}
            className="font-inter text-sm text-olive-700 hover:text-olive-500 transition-colors underline"
          >
            Read more
          </Link>
        </div>
      ) : (
        <p className="font-inter text-olive-600 text-sm italic">
          Check back soon for the latest update!
        </p>
      )}
    </div>
  );
}
