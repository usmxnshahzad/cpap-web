'use client'

import { useRouter } from 'next/navigation'
import { HELPLINE, HELPLINE_TEL } from '../data/mock'
import { useApp } from '../context'
import { Shell } from '../components/Shell'
import { Icons } from '../components/Icons'

export function Help() {
  const { tr, reset } = useApp()
  const router = useRouter()

  return (
    <Shell title={tr('helpTitle')} listenText={`${tr('helpTitle')}. ${tr('callHelpline')} ${HELPLINE}`} backTo="/home">
      <a className="helpline-card" href={`tel:${HELPLINE_TEL}`}>
        <Icons.phone />
        <span>
          {tr('callHelpline')}
          <b>{HELPLINE}</b>
        </span>
      </a>
      <h2 className="h2">{tr('faq')}</h2>
      <div className="faq-grid">
      <details className="card faq" open>
        <summary>{tr('faq1q')}</summary>
        <p>{tr('faq1a')}</p>
      </details>
      <details className="card faq">
        <summary>{tr('faq2q')}</summary>
        <p>{tr('faq2a')}</p>
      </details>
      <details className="card faq">
        <summary>{tr('faq3q')}</summary>
        <p>{tr('faq3a')}</p>
      </details>
      </div>
      <p className="fine">{tr('aiNote')}</p>
      <button
        type="button"
        className="btn btn-ghost btn-block"
        onClick={() => {
          reset()
          router.push('/')
        }}
      >
        {tr('logout')}
      </button>
    </Shell>
  )
}
