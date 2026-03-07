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
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-[80px] font-normal text-olive-900 tracking-wide">
          {title}
        </h1>
      </div>
    </section>
  );
}