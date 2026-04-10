import { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/blog?category=books', label: 'Books' },
  { href: '/blog?category=career-and-finance', label: 'Career & Finance' },
  { href: '/blog?category=fun', label: 'Fun' },
  { href: '/blog?category=personal', label: 'Personal' },
  { href: '/blog?category=wellness', label: 'Wellness' },
];

export const instagramUrl = 'https://instagram.com/karenmloya';
export const siteMetadata = {
  title: 'Karen Monique',
  description: 'Exploring fashion, wellness, home, beauty, travel, and the art of mindful living.',
  author: 'Karen',
};
