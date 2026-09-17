'use client'

import Link from 'next/link'
import { PublicChrome } from '@/components/Shell'
import { useApp } from '@/context'

export default function NotFound() {
  const { tr } = useApp()

  return (
    <PublicChrome>
      <main className="main">
        <div className="page page-narrow">
          <h1>{tr('notFoundTitle')}</h1>
          <p>{tr('notFoundLead')}</p>
          <Link href="/" className="btn btn-primary">
            {tr('home')}
          </Link>
        </div>
      </main>
    </PublicChrome>
  )
}
