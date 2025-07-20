import { NextRequest } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET(request: NextRequest) {
  try {
    const imagePath = join(process.cwd(), 'src', 'assets', 'images', 'name-logo.jpeg')
    const imageBuffer = readFileSync(imagePath)
    
    return new Response(imageBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error serving OG image:', error)
    return new Response('Image not found', { status: 404 })
  }
} 