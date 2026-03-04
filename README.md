# karenloya.com

A lifestyle blog built for a real client, live at [karenloya.com](https://karenloya.com).

## Stack

- **Next.js 15** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS 4** for styling
- **Sanity CMS** for headless content management
- **Vercel** for hosting and deployment

## Architecture

```
app/                          # Next.js App Router
  layout.tsx                  # Root layout with fonts, header/footer
  page.tsx                    # Homepage
  about/page.tsx              # About page
  blog/page.tsx               # Blog listing with category filtering
  blog/[slug]/page.tsx        # Individual blog posts (SSG with ISR)
  studio/[[...tool]]/page.tsx # Embedded Sanity Studio
  api/revalidate/route.ts     # Webhook endpoint for on-demand ISR
src/
  components/                 # UI components (carousel, mobile menu, etc.)
  sanity/                     # CMS client, queries, schema definitions
  data/constants.tsx          # Site metadata and navigation config
```

### Content Pipeline

Blog content is authored in Sanity Studio, stored in Sanity's hosted backend, and rendered at build time via static generation. A webhook triggers on-demand revalidation when content changes, so new posts appear without a full rebuild.

### Key Details

- Server Components by default, Client Components only where interactivity is needed
- Sanity GROQ queries with parameterized inputs
- Responsive design (mobile-first) with keyboard-accessible navigation
- Image optimization via Next.js Image component and Sanity's image CDN

## Development

```bash
# Install dependencies
npm install

# Copy environment template and fill in values
cp .env.local.example .env.local

# Start dev server
npm run dev

# Build for production
npm run build
```

## License

Source available for educational and portfolio purposes. See [LICENSE](LICENSE) for details.
