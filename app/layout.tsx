import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'AKAG RESIDENCY - Fine Dining',
  description: 'Digital Menu & Table Reservation System',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-lato bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
