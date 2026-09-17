'use client'

import type { ReactNode } from 'react'
import { AppProvider } from '@/context'

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

export function Providers({ children }: { children: ReactNode }) {
  return <AppProvider>{children}</AppProvider>
}
