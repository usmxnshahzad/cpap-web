'use client'

import { useRouter } from 'next/navigation'
import { cpTypes } from '../data/mock'
import { useApp } from '../context'
import { Icons } from '../components/Icons'
import { Shell } from '../components/Shell'

export function Home() {
  const { tr, lang, profile } = useApp()
  const router = useRouter()
  const registered = Boolean(profile?.registered)
  const cp = cpTypes.find((c) => c.id === profile?.cpType)
  const child = profile?.childName || (lang === 'ur' ? 'مہمان' : 'Guest')

  const tiles = [
    { to: '/appointments', label: tr('tileAppt'), icon: Icons.book, lock: !registered },
    { to: '/resources', label: tr('tileLearn'), icon: Icons.learn, lock: false },
    { to: '/consult', label: tr('tileConsult'), icon: Icons.video, lock: !registered },
    { to: '/aids', label: tr('tileAids'), icon: Icons.walker, lock: false },
    { to: '/forum', label: tr('tileForum'), icon: Icons.users, lock: false },
    { to: '/questionnaire', label: tr('tileSurvey'), icon: Icons.clipboard, lock: !registered },
    { to: '/profile', label: tr('tileProfile'), icon: Icons.person, lock: !registered },
    { to: '/help', label: tr('tileHelp'), icon: Icons.help, lock: false },
  ]

  return (
    <Shell
      title={tr('dashboardHi')}
      listenText={`${tr('dashboardHi')}. ${tr('forChild')} ${child}.`}
    >
      <p className="child-line">
        {tr('forChild')} <strong>{child}</strong>
        {cp && registered ? ` · ${lang === 'ur' ? cp.ur : cp.en}` : null}
      </p>
      <div className="tile-grid">
        {tiles.map((tile) => {
          const Icon = tile.icon
          return (
            <button
              key={tile.to}
              type="button"
              className="tile"
              onClick={() => router.push(tile.to)}
            >
              <Icon />
              <span>{tile.label}</span>
              {tile.lock ? <em className="lock-dot" aria-label={tr('locked')} /> : null}
            </button>
          )
        })}
      </div>
      {!registered ? (
        <div className="actions">
          <button type="button" className="btn btn-primary" onClick={() => router.push('/signup')}>
            {tr('registerCta')}
          </button>
        </div>
      ) : null}
      <p className="fine">{tr('sampleNote')}</p>
    </Shell>
  )
}
