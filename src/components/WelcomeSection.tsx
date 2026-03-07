import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <div className="mb-8">
      <h2 className="font-playfair text-2xl md:text-3xl font-normal text-olive-900 mb-6">
        Welcome
      </h2>
      <div className="relative border-4 border-olive-700 mb-5">
        <Image
          src="/images/welcome-karen.jpeg"
          alt="Karen"
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <p className="font-inter text-olive-800 text-[15px] leading-relaxed">
        Hi, I&apos;m Karen! Welcome to my little space on the internet where I share
        thoughts on books, career, wellness, and all the things that make life a
        little more interesting. Grab a cup of coffee and stay awhile.
      </p>
    </div>
  );
}
