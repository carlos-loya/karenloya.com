import { ImageResponse } from 'next/og'
import { loadGreatVibes } from '@/lib/og'

export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

export default async function Icon() {
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
            fontSize: 220,
            color: '#FAFAF8', // cream-50
            fontFamily: 'Great Vibes',
            lineHeight: 1,
            // Great Vibes K has a wide right swash and sits high in its em box;
            // nudge left and down so the visible ink is centered on the canvas.
            marginLeft: -30,
            marginTop: 60,
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
