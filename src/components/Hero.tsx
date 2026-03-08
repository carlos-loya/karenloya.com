interface HeroProps {
  title?: string;
  subtitle?: string;
  fullHeight?: boolean;
}

export default function Hero({
  title = 'Welcome to My Corner',
  subtitle = '',
  fullHeight = false
}: HeroProps) {
  return (
    <section
      className={`${fullHeight ? 'min-h-screen' : 'py-8 md:py-12'} flex items-center justify-center bg-cream-50 pt-28 md:pt-32 border-b border-warm-gray-300`}
    >
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <svg className="w-16 md:w-24 h-auto text-olive-400 flex-shrink-0" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M118 12C110 12 108 4 100 4C92 4 90 20 82 20C74 20 72 4 64 4C56 4 54 20 46 20C38 20 36 4 28 4C20 4 18 20 10 20C6 20 4 16 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] text-olive-900 whitespace-nowrap" style={{ fontFamily: 'var(--font-family-great-vibes)' }}>
            {title}
          </h1>
          <svg className="w-16 md:w-24 h-auto text-olive-400 flex-shrink-0" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12C10 12 12 4 20 4C28 4 30 20 38 20C46 20 48 4 56 4C64 4 66 20 74 20C82 20 84 4 92 4C100 4 102 20 110 20C114 20 116 16 118 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
      </div>
    </section>
  );
}