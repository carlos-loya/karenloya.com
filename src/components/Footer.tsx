import Link from 'next/link';
import { navLinks, instagramUrl } from '@/data/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-gray-50 py-16 md:py-20 border-t border-warm-gray-200">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="inline-block font-playfair text-3xl font-normal text-warm-gray-900 mb-4 tracking-wide">
              KAREN
            </Link>
            <p className="text-warm-gray-600 font-inter text-[15px] leading-relaxed">
              A lifestyle journal exploring fashion, wellness, home, beauty, and the art of mindful living.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-playfair text-xl font-normal text-warm-gray-900 mb-5 tracking-wide">
              Navigate
            </h3>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-warm-gray-600 hover:text-olive-700 transition-colors font-inter text-[15px]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className="text-warm-gray-600 hover:text-olive-700 transition-colors font-inter text-[15px]"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-playfair text-xl font-normal text-warm-gray-900 mb-5 tracking-wide">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-warm-gray-200 hover:bg-olive-700 hover:text-white hover:border-olive-700 transition-all"
                aria-label="Follow on Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-warm-gray-200">
          <p className="text-center text-warm-gray-500 font-inter text-sm">
            &copy; {currentYear} Karen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}