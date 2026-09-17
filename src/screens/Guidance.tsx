'use client'

import { useRouter } from 'next/navigation'
import { centers } from '../data/mock'
import { useApp } from '../context'
import { Shell } from '../components/Shell'
import { Icons } from '../components/Icons'

export function Guidance() {
  const { tr, lang, profile } = useApp()
  const router = useRouter()

  return (
    <Shell title={tr('guidanceTitle')} listenText={`${tr('guidanceTitle')}. ${tr('guidanceLead')}`}>
      <p>{tr('guidanceLead')}</p>
      <div className="choice-grid">
        <button type="button" className="choice tall" onClick={() => router.push('/resources')}>
          <Icons.learn />
          <strong>{tr('tileLearn')}</strong>
          <span>{tr('resourcesLead')}</span>
        </button>
        <button type="button" className="choice tall" onClick={() => router.push('/aids')}>
          <Icons.walker />
          <strong>{tr('tileAids')}</strong>
          <span>{tr('aidsLead')}</span>
        </button>
      </div>
      <h2 className="h2">{tr('centersTitle')}</h2>
      <p className="muted">{tr('centersLead')}</p>
      <ul className="card-grid">
        {centers.map((center) => (
          <li key={center.id} className="card">
            <strong>{lang === 'ur' ? center.ur : center.en}</strong>
            <p className="muted">{tr('ihhn')}</p>
          </li>
        ))}
      </ul>
      {!profile?.registered ? (
        <div className="actions">
          <button type="button" className="btn btn-primary" onClick={() => router.push('/signup')}>
            {tr('registerCta')}
          </button>
        </div>
      ) : null}
    </Shell>
  )
}
