import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fisiha Desta Portfolio',
  description: 'Personal portfolio website of Fisiha Desta',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @font-face {
            font-family: 'Neue Machina';
            src: url('/fonts/NeueMachina-Light.otf') format('opentype');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Neue Machina';
            src: url('/fonts/NeueMachina-Regular.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Neue Machina';
            src: url('/fonts/NeueMachina-Ultrabold.otf') format('opentype');
            font-weight: 800;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
