import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <div className="mb-8">
      <h2 className="font-playfair text-2xl md:text-3xl font-normal text-warm-gray-900 mb-6">
        Welcome to My Corner
      </h2>
      <div className="relative w-28 h-28 rounded-full overflow-hidden mb-5">
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
          alt="Karen"
          fill
          className="object-cover"
        />
      </div>
      <p className="font-inter text-warm-gray-700 text-[15px] leading-relaxed">
        Hi, I&apos;m Karen! Welcome to my little space on the internet where I share
        thoughts on books, career, wellness, and all the things that make life a
        little more interesting. Grab a cup of coffee and stay awhile.
      </p>
    </div>
  );
}
