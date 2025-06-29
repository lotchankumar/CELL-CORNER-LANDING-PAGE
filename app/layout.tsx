import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CELL CORNER',
  description: 'Created by Lotchan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
