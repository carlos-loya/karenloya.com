import { readFile } from 'node:fs/promises'
import path from 'node:path'

/**
 * Loads the Great Vibes TTF bundled in the repo for use inside next/og's
 * ImageResponse. We bundle the font (rather than fetching it at build time)
 * so deploys are self-contained and don't depend on Google Fonts / jsDelivr
 * being reachable from Vercel's build infra.
 */
export async function loadGreatVibes(): Promise<ArrayBuffer> {
  const filePath = path.join(process.cwd(), 'src/assets/fonts/GreatVibes-Regular.ttf')
  const buf = await readFile(filePath)
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer
}
