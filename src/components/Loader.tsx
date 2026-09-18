'use client'

export function AppLoader({ label = 'Loading' }: { label?: string }) {
  return (
    <div className="app-loader" role="status" aria-live="polite" aria-busy="true">
      <div className="loader-inner">
        <div className="loader-mark" aria-hidden="true">
          CP
        </div>
        <div className="loader-spinner" />
        <p>{label}</p>
      </div>
    </div>
  )
}

export function RouteProgress() {
  return <div className="route-progress" role="progressbar" aria-hidden="true" />
}
