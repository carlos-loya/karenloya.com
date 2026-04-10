import { ImageResponse } from 'next/og'
import { loadGreatVibes } from '@/lib/og'
import { siteMetadata } from '@/data/constants'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${siteMetadata.title} — ${siteMetadata.description}`

export default async function OpenGraphImage() {
  const greatVibes = await loadGreatVibes()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F7F8F5', // olive-50
          padding: 60,
        }}
      >
        {/* Inner frame */}
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '6px solid #6B7F49', // olive-700
            padding: 60,
            gap: 28,
          }}
        >
          <div
            style={{
              fontSize: 180,
              color: '#4A5531', // olive-900
              fontFamily: 'Great Vibes',
              lineHeight: 1,
              textAlign: 'center',
            }}
          >
            {siteMetadata.title}
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#5B6840', // olive-800
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
              fontStyle: 'italic',
            }}
          >
            {siteMetadata.description}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Great Vibes',
          data: greatVibes,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
