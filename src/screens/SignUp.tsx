'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { centers } from '../data/mock'
import type { CenterId } from '../types'
import { useApp } from '../context'
import { Shell } from '../components/Shell'

export function SignUp() {
  const { tr, lang, setProfile } = useApp()
  const router = useRouter()
  const [childName, setChildName] = useState('Ahmed')
  const [mrNumber, setMrNumber] = useState('IH-2024-100245')
  const [age, setAge] = useState('5')
  const [guardianName, setGuardianName] = useState('Fatima')
  const [guardianContact, setGuardianContact] = useState('0300-0000000')
  const [center, setCenter] = useState<CenterId>('karachi')
  const [error, setError] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!childName.trim() || !mrNumber.trim() || !age.trim() || !guardianContact.trim()) {
      setError(true)
      return
    }
    setProfile({
      childName: childName.trim(),
      mrNumber: mrNumber.trim(),
      age: age.trim(),
      guardianName: guardianName.trim(),
      guardianContact: guardianContact.trim(),
      center,
      cpType: 'spastic',
      registered: true,
    })
    router.push('/cp-type')
  }

  return (
    <Shell title={tr('signupTitle')} listenText={`${tr('signupTitle')}. ${tr('signupLead')}`} showNav={false} backTo="/status" wide={false}>
      <p>{tr('signupLead')}</p>
      <form className="form-grid" onSubmit={onSubmit}>
        <label>
          {tr('childName')}
          <input value={childName} onChange={(e) => setChildName(e.target.value)} autoComplete="name" />
        </label>
        <label>
          {tr('mrNumber')}
          <input
            value={mrNumber}
            onChange={(e) => setMrNumber(e.target.value)}
            autoComplete="off"
            inputMode="text"
          />
        </label>
        <label>
          {tr('age')}
          <input value={age} onChange={(e) => setAge(e.target.value)} inputMode="numeric" />
        </label>
        <label>
          {tr('guardianName')}
          <input value={guardianName} onChange={(e) => setGuardianName(e.target.value)} />
        </label>
        <label>
          {tr('guardianContact')}
          <input value={guardianContact} onChange={(e) => setGuardianContact(e.target.value)} inputMode="tel" />
        </label>
        <label className="span-2">
          {tr('center')}
          <select value={center} onChange={(e) => setCenter(e.target.value as CenterId)}>
            {centers.map((c) => (
              <option key={c.id} value={c.id}>
                {lang === 'ur' ? c.ur : c.en}
              </option>
            ))}
          </select>
        </label>
        {error ? <p className="error span-2">{tr('required')}</p> : null}
        <button type="submit" className="btn btn-primary span-2">
          {tr('continue')}
        </button>
      </form>
    </Shell>
  )
}
