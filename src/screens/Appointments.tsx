'use client'

import { useMemo, useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { centers, doctors, specialties } from '../data/mock'
import type { CenterId } from '../types'
import { useApp } from '../context'
import { Shell } from '../components/Shell'
import { GuestGate } from '../components/Widgets'

export function Appointments() {
  const { tr, lang, profile, appointments, addAppointment } = useApp()
  const router = useRouter()
  const [center, setCenter] = useState<CenterId>(profile?.center ?? 'karachi')
  const [specialty, setSpecialty] = useState<(typeof specialties)[number]['id']>('physio')
  const [doctorId, setDoctorId] = useState('d3')
  const [date, setDate] = useState('2026-10-03')
  const [time, setTime] = useState('10:00')
  const [mode, setMode] = useState<'in-person' | 'virtual'>('in-person')
  const [done, setDone] = useState(false)

  const filteredDoctors = useMemo(
    () => doctors.filter((d) => d.center === center && d.specialty === specialty),
    [center, specialty],
  )

  const visibleDoctors = filteredDoctors.length ? filteredDoctors : doctors.filter((d) => d.center === center)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const chosen = visibleDoctors.find((d) => d.id === doctorId) ?? visibleDoctors[0]
    if (!chosen) return
    addAppointment({
      id: `a-${Date.now()}`,
      doctorId: chosen.id,
      date,
      time,
      mode,
    })
    setDone(true)
  }

  return (
    <Shell title={tr('apptTitle')} listenText={`${tr('apptTitle')}. ${tr('apptLead')}`} backTo="/home">
      <GuestGate onRegister={() => router.push('/signup')}>
        <p>{tr('apptLead')}</p>
        {profile?.mrNumber ? (
          <p className="patient-mr">
            {tr('mrNumber')}: {profile.mrNumber}
            {profile.childName ? ` · ${profile.childName}` : null}
          </p>
        ) : null}
        <div className="split-2">
          <section className="card panel">
            {done ? (
              <div className="success-panel">
                <h2>{tr('booked')}</h2>
                <p>{tr('sampleNote')}</p>
                <button type="button" className="btn btn-primary" onClick={() => setDone(false)}>
                  {tr('bookNew')}
                </button>
              </div>
            ) : (
              <form className="form-grid" onSubmit={onSubmit}>
            <label>
              {tr('center')}
              <select
                value={center}
                onChange={(e) => {
                  const next = e.target.value as CenterId
                  setCenter(next)
                  const first = doctors.find((d) => d.center === next)
                  if (first) {
                    setSpecialty(first.specialty)
                    setDoctorId(first.id)
                  }
                }}
              >
                {centers.map((c) => (
                  <option key={c.id} value={c.id}>
                    {lang === 'ur' ? c.ur : c.en}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {tr('specialty')}
              <select
                value={specialty}
                onChange={(e) => {
                  const next = e.target.value as (typeof specialties)[number]['id']
                  setSpecialty(next)
                  const first = doctors.find((d) => d.center === center && d.specialty === next)
                  if (first) setDoctorId(first.id)
                }}
              >
                {specialties.map((s) => (
                  <option key={s.id} value={s.id}>
                    {lang === 'ur' ? s.ur : s.en}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {tr('doctor')}
              <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)}>
                {visibleDoctors.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {tr('date')}
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
              {tr('time')}
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
            <fieldset className="seg span-2">
              <legend>{tr('mode')}</legend>
              <button
                type="button"
                className={mode === 'in-person' ? 'selected' : ''}
                onClick={() => setMode('in-person')}
              >
                {tr('inPerson')}
              </button>
              <button
                type="button"
                className={mode === 'virtual' ? 'selected' : ''}
                onClick={() => setMode('virtual')}
              >
                {tr('virtual')}
              </button>
            </fieldset>
            <button type="submit" className="btn btn-cta span-2">
              {tr('confirmBook')}
            </button>
          </form>
            )}
          </section>
          <section>
            <h2 className="h2">{tr('yourAppts')}</h2>
            {appointments.length === 0 ? (
              <p className="muted">{tr('noAppts')}</p>
            ) : (
              <ul className="list">
                {appointments.map((a) => {
                  const doc = doctors.find((d) => d.id === a.doctorId)
                  const spec = specialties.find((s) => s.id === doc?.specialty)
                  const loc = centers.find((c) => c.id === doc?.center)
                  return (
                    <li key={a.id} className="card">
                      <strong>{doc?.name}</strong>
                      <p>
                        {lang === 'ur' ? spec?.ur : spec?.en} · {lang === 'ur' ? loc?.ur : loc?.en}
                      </p>
                      <p>
                        {a.date} · {a.time} · {a.mode === 'virtual' ? tr('virtual') : tr('inPerson')}
                      </p>
                      {profile?.mrNumber ? (
                        <p className="patient-mr">
                          {tr('mrNumber')}: {profile.mrNumber}
                        </p>
                      ) : null}
                    </li>
                  )
                })}
              </ul>
            )}
          </section>
        </div>
      </GuestGate>
    </Shell>
  )
}
