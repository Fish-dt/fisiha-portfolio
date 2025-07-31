import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'fisiha',
  description: 'fisiha-desta-portfolio',
  generator: 'fisiha',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
