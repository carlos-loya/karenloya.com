import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <div className="mb-8">
      <h2 className="font-playfair text-2xl md:text-3xl font-normal text-olive-900 mb-6">
        Welcome
      </h2>
      <div className="relative mb-5 p-[14px] bg-gradient-to-br from-[#6B7F49] via-[#7C8C5E] to-[#5B6840]" style={{
        boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.3), inset -2px -2px 4px rgba(0,0,0,0.3), 4px 4px 12px rgba(0,0,0,0.2)',
      }}>
        {/* Inner bevel */}
        <div className="p-[3px] bg-gradient-to-br from-[#4A5531] to-[#6B7F49]" style={{
          boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.4), inset -1px -1px 2px rgba(255,255,255,0.2)',
        }}>
          {/* Mat/liner */}
          <div className="p-[6px] bg-[#F5F0E8]">
            <Image
              src="/images/welcome-karen.jpeg"
              alt="Karen"
              width={600}
              height={600}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
      <p className="font-inter text-olive-800 text-[15px] leading-relaxed">
        Hi, I&apos;m Karen! Welcome to my little space on the internet where I share
        thoughts on books, career, wellness, and all the things that make life a
        little more interesting. Grab a cup of coffee and stay awhile.
      </p>
    </div>
  );
}
