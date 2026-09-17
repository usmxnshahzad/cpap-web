'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import {
  abilities,
  ageBands,
  cpTypes,
  goals,
  treatments,
} from '../data/mock'
import type { AbilityId, AgeBand, CpTypeId, GoalId } from '../types'
import { useApp } from '../context'
import { Shell } from '../components/Shell'
import { EvidenceBadge } from '../components/Widgets'
import { Icons } from '../components/Icons'

export function Resources() {
  const { tr, lang, profile } = useApp()
  const [age, setAge] = useState<AgeBand | 'all'>('all')
  const [goal, setGoal] = useState<GoalId | 'all'>('all')
  const [ability, setAbility] = useState<AbilityId | 'all'>('all')
  const [cp, setCp] = useState<CpTypeId | 'all'>(profile?.cpType ?? 'all')

  const list = useMemo(
    () =>
      treatments.filter((item) => {
        if (age !== 'all' && !item.ages.includes(age)) return false
        if (goal !== 'all' && !item.goals.includes(goal)) return false
        if (ability !== 'all' && !item.abilities.includes(ability)) return false
        if (cp !== 'all' && item.cpTypes !== 'all' && !item.cpTypes.includes(cp)) return false
        return true
      }),
    [age, goal, ability, cp],
  )

  return (
    <Shell title={tr('resourcesTitle')} listenText={`${tr('resourcesTitle')}. ${tr('resourcesLead')}`} backTo="/home">
      <p>{tr('resourcesLead')}</p>
      <div className="legend">
        <EvidenceBadge level="green" />
        <EvidenceBadge level="amber" />
        <EvidenceBadge level="red" />
      </div>
      <div className="filters">
        <label>
          {tr('age')}
          <select value={age} onChange={(e) => setAge(e.target.value as AgeBand | 'all')}>
            <option value="all">{tr('all')}</option>
            {ageBands.map((b) => (
              <option key={b.id} value={b.id}>
                {lang === 'ur' ? b.ur : b.en}
              </option>
            ))}
          </select>
        </label>
        <label>
          {tr('filters')}
          <select value={goal} onChange={(e) => setGoal(e.target.value as GoalId | 'all')}>
            <option value="all">{tr('all')}</option>
            {goals.map((g) => (
              <option key={g.id} value={g.id}>
                {lang === 'ur' ? g.ur : g.en}
              </option>
            ))}
          </select>
        </label>
        <label>
          {lang === 'ur' ? 'صلاحیت' : 'Ability'}
          <select value={ability} onChange={(e) => setAbility(e.target.value as AbilityId | 'all')}>
            <option value="all">{tr('all')}</option>
            {abilities.map((a) => (
              <option key={a.id} value={a.id}>
                {lang === 'ur' ? a.ur : a.en}
              </option>
            ))}
          </select>
        </label>
        <label>
          {tr('cpType')}
          <select value={cp} onChange={(e) => setCp(e.target.value as CpTypeId | 'all')}>
            <option value="all">{tr('all')}</option>
            {cpTypes.map((c) => (
              <option key={c.id} value={c.id}>
                {lang === 'ur' ? c.ur : c.en}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ul className="card-grid">
        {list.map((item) => (
          <li key={item.id}>
            <Link className="card link-card" href={`/resources/${item.id}`}>
              <div className="row-between">
                <strong>{lang === 'ur' ? item.ur : item.en}</strong>
                <Icons.chevron />
              </div>
              <EvidenceBadge level={item.evidence} />
              <p>{lang === 'ur' ? item.summaryUr : item.summaryEn}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  )
}

export function ResourceDetail() {
  const params = useParams()
  const id = typeof params.id === 'string' ? params.id : params.id?.[0]
  const { tr, lang } = useApp()
  const router = useRouter()
  const [playing, setPlaying] = useState(false)
  const item = treatments.find((t) => t.id === id)

  if (!item) {
    return (
      <Shell title={tr('resourcesTitle')} backTo="/resources">
        <button type="button" className="btn" onClick={() => router.push('/resources')}>
          {tr('back')}
        </button>
      </Shell>
    )
  }

  return (
    <Shell
      title={lang === 'ur' ? item.ur : item.en}
      listenText={`${lang === 'ur' ? item.ur : item.en}. ${lang === 'ur' ? item.detailUr : item.detailEn}`}
      backTo="/resources"
    >
      <EvidenceBadge level={item.evidence} />
      <p className="muted">{lang === 'ur' ? item.evidenceNoteUr : item.evidenceNoteEn}</p>
      <div className="split-2">
        <p>{lang === 'ur' ? item.detailUr : item.detailEn}</p>
        <div>
          <button type="button" className="video-ph" onClick={() => setPlaying(true)}>
            <Icons.play />
            <span>
              {playing ? tr('playing') : tr('watch')}
              <small>{item.videoLabel}</small>
            </span>
          </button>
          <p className="fine">{tr('videoNote')}</p>
        </div>
      </div>
    </Shell>
  )
}
