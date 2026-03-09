import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ''}
            width={1200}
            height={675}
            className="rounded-lg"
          />
        </div>
      )
    },
    photoGallery: ({ value }) => {
      if (!value?.images?.length) return null
      return (
        <figure className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {value.images.map((img: { asset?: { _ref?: string }; alt?: string }, i: number) => {
              if (!img?.asset) return null
              return (
                <Image
                  key={i}
                  src={urlFor(img).width(600).url()}
                  alt={img.alt || ''}
                  width={600}
                  height={600}
                  className="rounded-lg object-cover aspect-square"
                />
              )
            })}
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center font-inter text-sm text-olive-600 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || ''
      const isExternal = href.startsWith('http')
      return (
        <a
          href={href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      )
    },
  },
}

interface PortableTextRendererProps {
  content: PortableTextBlock[]
}

export default function PortableTextRenderer({ content }: PortableTextRendererProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-lora prose-headings:text-warm-gray-900 prose-p:font-inter prose-p:text-warm-gray-700 prose-p:leading-relaxed prose-a:text-olive-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-warm-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4">
      <PortableText value={content} components={components} />
    </div>
  )
}
