'use client'

import { useRouter } from 'next/navigation'
import { cpTypes } from '../data/mock'
import type { CpTypeId } from '../types'
import { useApp } from '../context'
import { Shell } from '../components/Shell'

export function CpTypeSelect() {
  const { tr, lang, profile, setProfile } = useApp()
  const router = useRouter()

  function choose(id: CpTypeId) {
    if (!profile) return
    setProfile({ ...profile, cpType: id })
    router.push('/next')
  }

  return (
    <Shell title={tr('cpTitle')} listenText={`${tr('cpTitle')}. ${tr('cpLead')}`} showNav={false} backTo="/signup">
      <p>{tr('cpLead')}</p>
      <div className="choice-grid">
        {cpTypes.map((type) => (
          <button key={type.id} type="button" className="choice tall" onClick={() => choose(type.id)}>
            <strong>{lang === 'ur' ? type.ur : type.en}</strong>
            <span>{lang === 'ur' ? type.descUr : type.descEn}</span>
          </button>
        ))}
      </div>
    </Shell>
  )
}
