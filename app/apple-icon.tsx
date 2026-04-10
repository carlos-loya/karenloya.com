import { ImageResponse } from 'next/og'
import { loadGreatVibes } from '@/lib/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default async function AppleIcon() {
  const greatVibes = await loadGreatVibes()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#6B7F49', // olive-700
        }}
      >
        <div
          style={{
            fontSize: 78,
            color: '#FAFAF8', // cream-50
            fontFamily: 'Great Vibes',
            lineHeight: 1,
            marginLeft: -10,
            marginTop: 21,
          }}
        >
          K
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
