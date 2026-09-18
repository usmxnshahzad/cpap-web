'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { AppProvider } from '@/context'
import { RouteProgress } from '@/components/Loader'

if (process.env.NODE_ENV === 'development' && typeof performance !== 'undefined') {
  const originalMeasure = performance.measure.bind(performance)
  performance.measure = ((...args: Parameters<Performance['measure']>) => {
    try {
      return originalMeasure(...args)
    } catch (error) {
      if (error instanceof TypeError && String(error.message).includes('negative time stamp')) {
        return undefined as unknown as PerformanceMeasure
      }
      throw error
    }
  }) as Performance['measure']
}

function RouteLoader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    setVisible(true)
    const id = window.setTimeout(() => setVisible(false), 520)
    return () => window.clearTimeout(id)
  }, [pathname])

  return visible ? <RouteProgress /> : null
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <RouteLoader />
      {children}
    </AppProvider>
  )
}
