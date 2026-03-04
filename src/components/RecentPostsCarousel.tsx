'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlogPostCard from './BlogPostCard';
import type { SanityBlogPost } from '@/sanity/lib/types';

interface RecentPostsCarouselProps {
  posts: SanityBlogPost[];
  postsPerView?: { mobile: number; tablet: number; desktop: number };
}

export default function RecentPostsCarousel({
  posts,
  postsPerView = { mobile: 1, tablet: 2, desktop: 3 }
}: RecentPostsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [postsToShow, setPostsToShow] = useState(postsPerView.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPostsToShow(postsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setPostsToShow(postsPerView.tablet);
      } else {
        setPostsToShow(postsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [postsPerView]);

  const maxIndex = Math.max(0, posts.length - postsToShow);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Adjust currentIndex if it exceeds maxIndex after resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  if (posts.length === 0) return null;

  return (
    <section className="py-8 md:py-12 bg-white border-b border-warm-gray-300">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          {posts.length > postsToShow && (
            <button
              onClick={goToPrevious}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 items-center justify-center w-12 h-12 bg-white border border-warm-gray-300 hover:bg-warm-gray-900 hover:text-white hover:border-warm-gray-900 transition-all duration-300"
              aria-label="Previous posts"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / postsToShow)}%)`,
              }}
            >
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="flex-shrink-0 px-4 md:px-6"
                  style={{ width: `${100 / postsToShow}%` }}
                >
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          {posts.length > postsToShow && (
            <button
              onClick={goToNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 items-center justify-center w-12 h-12 bg-white border border-warm-gray-300 hover:bg-warm-gray-900 hover:text-white hover:border-warm-gray-900 transition-all duration-300"
              aria-label="Next posts"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Mobile Navigation Buttons */}
        {posts.length > postsToShow && (
          <div className="flex md:hidden justify-center gap-4 mt-10">
            <button
              onClick={goToPrevious}
              className="flex items-center justify-center w-12 h-12 bg-white border border-warm-gray-300 hover:bg-warm-gray-900 hover:text-white hover:border-warm-gray-900 transition-all duration-300"
              aria-label="Previous posts"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="flex items-center justify-center w-12 h-12 bg-white border border-warm-gray-300 hover:bg-warm-gray-900 hover:text-white hover:border-warm-gray-900 transition-all duration-300"
              aria-label="Next posts"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Pagination Dots */}
        {posts.length > postsToShow && (
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-warm-gray-900 w-8'
                    : 'bg-warm-gray-300 hover:bg-warm-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}