import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Ubuntu, Noto_Nastaliq_Urdu } from 'next/font/google'
import { Providers } from './providers'
import '../index.css'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
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
      className={`${ubuntu.variable} ${nastaliq.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
