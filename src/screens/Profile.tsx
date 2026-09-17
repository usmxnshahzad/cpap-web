'use client'

import { useRouter } from 'next/navigation'
import { careTeam, centers, cpTypes, milestones } from '../data/mock'
import { useApp } from '../context'
import { Shell } from '../components/Shell'
import { GuestGate } from '../components/Widgets'

export function Profile() {
  const { tr, lang, profile } = useApp()
  const router = useRouter()
  const cp = cpTypes.find((c) => c.id === profile?.cpType)
  const center = centers.find((c) => c.id === profile?.center)
  const doneCount = milestones.filter((m) => m.done).length

  return (
    <Shell title={tr('profileTitle')} listenText={`${tr('profileTitle')}. ${tr('profileLead')}`} backTo="/home">
      <GuestGate onRegister={() => router.push('/signup')}>
        <p>{tr('profileLead')}</p>
        <div className="split-2">
          <section className="card panel">
            <h2>{profile?.childName}</h2>
            <p>
              {tr('age')}: {profile?.age}
            </p>
            <p>
              {tr('cpType')}: {lang === 'ur' ? cp?.ur : cp?.en}
            </p>
            <p>
              {tr('center')}: {lang === 'ur' ? center?.ur : center?.en}
            </p>
            <p>
              {tr('guardianName')}: {profile?.guardianName}
            </p>
            <p>
              {tr('guardianContact')}: {profile?.guardianContact}
            </p>
            <p className="fine">{tr('sampleNote')}</p>
          </section>
          <div className="stack">
            <h2 className="h2">{tr('careTeam')}</h2>
            <ul className="list">
              {careTeam.map((member) => (
                <li key={member.name} className="card">
                  <strong>{member.name}</strong>
                  <p>{lang === 'ur' ? member.roleUr : member.roleEn}</p>
                </li>
              ))}
            </ul>
            <h2 className="h2">{tr('milestones')}</h2>
            <div className="progress">
              <span style={{ width: `${(doneCount / milestones.length) * 100}%` }} />
            </div>
            <ul className="list">
              {milestones.map((m) => (
                <li key={m.id} className="milestone">
                  <span className={m.done ? 'tick on' : 'tick'} />
                  {lang === 'ur' ? m.ur : m.en}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GuestGate>
    </Shell>
  )
}
