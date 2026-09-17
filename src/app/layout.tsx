import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Manrope, Noto_Nastaliq_Urdu } from 'next/font/google'
import { Providers } from './providers'
import '../index.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-urdu',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CPAP · CP Care for Cerebral Palsy in Pakistan',
  description:
    'Frontend-only IHHN prototype for multidisciplinary cerebral palsy care, education, and appointments.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${nastaliq.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
