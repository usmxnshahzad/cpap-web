import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

function Svg(props: P) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  )
}

export const Icons = {
  home: (p: P) => (
    <Svg {...p}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
    </Svg>
  ),
  book: (p: P) => (
    <Svg {...p}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 11h16" />
    </Svg>
  ),
  learn: (p: P) => (
    <Svg {...p}>
      <path d="M4 19V6l8-3 8 3v13" />
      <path d="M12 3v16M4 19c2 1.2 4.5 2 8 2s6-.8 8-2" />
    </Svg>
  ),
  help: (p: P) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.8.4-1.4 1-1.4 2v.2" />
      <circle cx="12" cy="17" r=".8" fill="currentColor" stroke="none" />
    </Svg>
  ),
  phone: (p: P) => (
    <Svg {...p}>
      <path d="M7 3h4l1 4-2 1a12 12 0 0 0 6 6l1-2 4 1v4c0 1-1 2-2 2C10 19 5 14 5 5c0-1 1-2 2-2z" />
    </Svg>
  ),
  speaker: (p: P) => (
    <Svg {...p}>
      <path d="M4 10v4h3l5 4V6L7 10H4zM16 9a4 4 0 0 1 0 6M18.5 7a7 7 0 0 1 0 10" />
    </Svg>
  ),
  video: (p: P) => (
    <Svg {...p}>
      <rect x="3" y="6" width="12" height="12" rx="2" />
      <path d="m15 10 6-3v10l-6-3z" />
    </Svg>
  ),
  walker: (p: P) => (
    <Svg {...p}>
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M7 16V8h8l2 8M9 8V5h6" />
    </Svg>
  ),
  users: (p: P) => (
    <Svg {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 13.5c2.4.4 4 2.2 4 5.5" />
    </Svg>
  ),
  clipboard: (p: P) => (
    <Svg {...p}>
      <rect x="6" y="5" width="12" height="15" rx="2" />
      <path d="M9 5V4h6v1M9 11h6M9 15h4" />
    </Svg>
  ),
  person: (p: P) => (
    <Svg {...p}>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </Svg>
  ),
  chevron: (p: P) => (
    <Svg {...p}>
      <path d="m9 6 6 6-6 6" />
    </Svg>
  ),
  play: (p: P) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4z" fill="currentColor" />
    </Svg>
  ),
  lock: (p: P) => (
    <Svg {...p}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </Svg>
  ),
  logout: (p: P) => (
    <Svg {...p}>
      <path d="M10 7V5a2 2 0 0 1 2-2h7v18h-7a2 2 0 0 1-2-2v-2" />
      <path d="M4 12h10M12 9l3 3-3 3" />
    </Svg>
  ),
}
