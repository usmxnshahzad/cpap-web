'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { doctors } from '../data/mock'
import { useApp } from '../context'
import { Shell } from '../components/Shell'
import { GuestGate } from '../components/Widgets'
export function Consult() {
  const { tr, profile } = useApp()
  const router = useRouter()
  const [phase, setPhase] = useState<'idle' | 'connecting' | 'live'>('idle')
  const [muted, setMuted] = useState(false)
  const [cameraOff, setCameraOff] = useState(false)
  const doctor = doctors.find((d) => d.id === 'd3') ?? doctors[0]

  function join() {
    setPhase('connecting')
    window.setTimeout(() => setPhase('live'), 1200)
  }

  return (
    <Shell title={tr('consultTitle')} listenText={`${tr('consultTitle')}. ${tr('consultLead')}`} backTo="/home">
      <GuestGate onRegister={() => router.push('/signup')}>
        <p>{tr('consultLead')}</p>
        <div className="consult-layout">
          <div className={`call-stage ${phase}`}>
          <div className="avatar">{doctor.name.split(' ')[1]?.[0] ?? 'D'}</div>
          <p>
            {phase === 'idle' ? doctor.name : null}
            {phase === 'connecting' ? tr('connecting') : null}
            {phase === 'live' ? tr('inCall') : null}
          </p>
          <p className="muted">{profile?.childName ? `${tr('forChild')} ${profile.childName}` : null}</p>
        </div>
        <div className="consult-controls">
        {phase === 'idle' ? (
          <button type="button" className="btn btn-primary btn-block" onClick={join}>
            {tr('joinCall')}
          </button>
        ) : (
          <div className="call-actions">
            <button
              type="button"
              className={`btn btn-secondary${muted ? ' selected-toggle' : ''}`}
              onClick={() => setMuted((v) => !v)}
            >
              {tr('mute')}
            </button>
            <button
              type="button"
              className={`btn btn-secondary${cameraOff ? ' selected-toggle' : ''}`}
              onClick={() => setCameraOff((v) => !v)}
            >
              {tr('camera')}
            </button>
            <button type="button" className="btn btn-danger" onClick={() => setPhase('idle')}>
              {tr('leaveCall')}
            </button>
          </div>
        )}
        <p className="fine">
          {/* Future tele-consult integration with IHHN clinics. */}
          {tr('aiNote')}
        </p>
        </div>
        </div>
      </GuestGate>
    </Shell>
  )
}
