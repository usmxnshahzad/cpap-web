'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Appointment, Lang, Profile } from './types'
import { t, type CopyKey } from './i18n'

const STORAGE_KEY = 'cpap-demo-state'

type Persisted = {
  lang: Lang
  profile: Profile | null
  appointments: Appointment[]
  answers: Record<string, string>
  surveyDone: boolean
}

const empty: Persisted = {
  lang: 'en',
  profile: null,
  appointments: [],
  answers: {},
  surveyDone: false,
}

type AppContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  profile: Profile | null
  setProfile: (profile: Profile | null) => void
  appointments: Appointment[]
  addAppointment: (appointment: Appointment) => void
  answers: Record<string, string>
  setAnswer: (id: string, value: string) => void
  surveyDone: boolean
  completeSurvey: () => void
  reset: () => void
  tr: (key: CopyKey) => string
}

const AppContext = createContext<AppContextValue | null>(null)

function scrubLabel(value: string) {
  return value.replace(/\s*\(\s*dummy\s*\)\s*/gi, '').trim()
}

function load(): Persisted {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) throw new Error('empty')
    const parsed = JSON.parse(raw) as Persisted
    if (!parsed.profile) return parsed
    return {
      ...parsed,
      profile: {
        ...parsed.profile,
        childName: scrubLabel(parsed.profile.childName),
        guardianName: scrubLabel(parsed.profile.guardianName),
      },
    }
  } catch {
    return empty
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Persisted>(empty)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setState(load())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    document.documentElement.lang = state.lang === 'ur' ? 'ur' : 'en'
    document.documentElement.dir = state.lang === 'ur' ? 'rtl' : 'ltr'
  }, [state, hydrated])

  const value = useMemo<AppContextValue>(
    () => ({
      lang: state.lang,
      setLang: (lang) => setState((s) => ({ ...s, lang })),
      profile: state.profile,
      setProfile: (profile) => setState((s) => ({ ...s, profile })),
      appointments: state.appointments,
      addAppointment: (appointment) =>
        setState((s) => ({ ...s, appointments: [appointment, ...s.appointments] })),
      answers: state.answers,
      setAnswer: (id, value) =>
        setState((s) => ({ ...s, answers: { ...s.answers, [id]: value } })),
      surveyDone: state.surveyDone,
      completeSurvey: () => setState((s) => ({ ...s, surveyDone: true })),
      reset: () => {
        localStorage.removeItem(STORAGE_KEY)
        setState({
          lang: state.lang,
          profile: null,
          appointments: [],
          answers: {},
          surveyDone: false,
        })
      },
      tr: (key) => t(state.lang, key),
    }),
    [state],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
