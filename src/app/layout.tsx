import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'CVS GFX | Graphic Designer',
  description:
    'Graphic Designer crafting visuals that command attention. Branding, posters, thumbnails, social media creatives and visual storytelling.',
  openGraph: {
    title: 'CVS GFX | Graphic Designer',
    description: 'Creating visuals that command attention.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}