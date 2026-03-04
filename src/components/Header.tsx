'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, Search, ChevronDown, X } from 'lucide-react';
import { navLinks, instagramUrl } from '@/data/constants';
import { useState, useEffect, useRef } from 'react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  categories?: { _id: string; title: string }[];
}

export default function Header({ categories = [] }: HeaderProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const categoryRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close category dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-warm-gray-300">
        <div className="container mx-auto px-6 md:px-8 h-20 md:h-24 flex items-center justify-between gap-10 lg:gap-12">
          {/* Logo */}
          <Link href="/" className="font-playfair text-3xl md:text-[40px] font-normal text-warm-gray-900 tracking-wide hover:text-olive-700 transition-colors">
            KAREN
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-stretch h-full -my-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-warm-gray-700 hover:text-cream-50 hover:bg-olive-700 transition-all font-inter text-sm uppercase tracking-wider px-8 border-l border-warm-gray-300 flex items-center"
              >
                {link.label}
              </Link>
            ))}

            {/* Categories Dropdown */}
            {categories.length > 0 && (
              <div ref={categoryRef} className="relative flex items-stretch">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="text-warm-gray-700 hover:text-cream-50 hover:bg-olive-700 transition-all font-inter text-sm uppercase tracking-wider px-8 border-x border-warm-gray-300 flex items-center gap-1.5"
                >
                  Categories
                  <ChevronDown size={14} className={`transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCategoryOpen && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-warm-gray-300 shadow-lg">
                    {categories.map((cat) => (
                      <Link
                        key={cat._id}
                        href={`/blog?category=${encodeURIComponent(cat.title)}`}
                        onClick={() => setIsCategoryOpen(false)}
                        className="block px-6 py-3 font-inter text-sm text-warm-gray-700 hover:bg-olive-100 hover:text-olive-700 transition-colors"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Desktop Right Section: Search + Instagram */}
          <div className="hidden md:flex items-center gap-2">
            {/* Search */}
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search posts..."
                  className="w-48 px-3 py-2 border border-warm-gray-300 rounded font-inter text-sm text-warm-gray-900 placeholder:text-warm-gray-400 focus:outline-none focus:border-olive-700"
                />
                <button
                  type="button"
                  onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Close search"
                >
                  <X size={18} className="text-warm-gray-600" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Search"
              >
                <Search size={20} className="text-warm-gray-900" />
              </button>
            )}

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 hover:opacity-70 transition-opacity"
              aria-label="Follow on Instagram"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-warm-gray-900"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            aria-label="Open menu"
          >
            <Menu size={24} className="text-warm-gray-900" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        categories={categories}
      />
    </>
  );
}
