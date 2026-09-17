'use client'

import { useRouter } from 'next/navigation'
import { useApp } from '../context'
import { Shell } from '../components/Shell'
import { Icons } from '../components/Icons'

export function NextStep() {
  const { tr } = useApp()
  const router = useRouter()

  return (
    <Shell title={tr('nextTitle')} listenText={`${tr('nextTitle')}. ${tr('nextLead')}`} showNav={false} backTo="/cp-type">
      <p>{tr('nextLead')}</p>
      <div className="choice-grid">
        <button type="button" className="choice tall" onClick={() => router.push('/appointments')}>
          <Icons.book />
          <strong>{tr('chooseAppt')}</strong>
          <span>{tr('chooseApptHint')}</span>
        </button>
        <button type="button" className="choice tall" onClick={() => router.push('/guidance')}>
          <Icons.learn />
          <strong>{tr('chooseLearn')}</strong>
          <span>{tr('chooseLearnHint')}</span>
        </button>
      </div>
    </Shell>
  )
}
