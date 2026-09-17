'use client'

import { aids, centers } from '../data/mock'
import { useApp } from '../context'
import { Shell } from '../components/Shell'

export function Aids() {
  const { tr, lang } = useApp()

  return (
    <Shell title={tr('aidsTitle')} listenText={`${tr('aidsTitle')}. ${tr('aidsLead')}`} backTo="/home">
      <p>{tr('aidsLead')}</p>
      <ul className="card-grid">
        {aids.map((aid) => (
          <li key={aid.id} className="card">
            <strong>{lang === 'ur' ? aid.ur : aid.en}</strong>
            <p>{lang === 'ur' ? aid.summaryUr : aid.summaryEn}</p>
            <p className="muted">{tr('availableAt')}</p>
            <p>
              {aid.centers
                .map((id) => {
                  const c = centers.find((x) => x.id === id)
                  return lang === 'ur' ? c?.ur : c?.en
                })
                .join(' · ')}
            </p>
          </li>
        ))}
      </ul>
    </Shell>
  )
}
