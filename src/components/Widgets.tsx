'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { useApp } from '../context'
import { Icons } from './Icons'

function pickVoice(synth: SpeechSynthesis, langCode: string) {
  const voices = synth.getVoices()
  const prefix = langCode.slice(0, 2).toLowerCase()
  return (
    voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix)) ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith('en')) ??
    null
  )
}

export function ListenButton({ text }: { text: string }) {
  const { tr, lang } = useApp()
  const [speaking, setSpeaking] = useState(false)

  useEffect(() => {
    return () => window.speechSynthesis?.cancel()
  }, [])

  function speak() {
    // Placeholder for future AI / voice-guided navigation.
    // Demo only: uses the browser Web Speech API (speechSynthesis).
    const synth = window.speechSynthesis
    if (!synth) {
      window.alert(`${tr('listenHint')}\n\n${text}`)
      return
    }

    if (speaking) {
      synth.cancel()
      setSpeaking(false)
      return
    }

    synth.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang === 'ur' ? 'ur-PK' : 'en-PK'
    utterance.rate = 0.92
    const voice = pickVoice(synth, utterance.lang)
    if (voice) utterance.voice = voice
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)
    setSpeaking(true)
    synth.speak(utterance)
  }

  return (
    <button
      type="button"
      className={`listen-btn${speaking ? ' speaking' : ''}`}
      onClick={speak}
      aria-pressed={speaking}
    >
      <Icons.speaker />
      <span>
        {tr('listen')}
        <small>{speaking ? tr('listening') : tr('listenHint')}</small>
      </span>
    </button>
  )
}

export function EvidenceBadge({ level }: { level: 'green' | 'amber' | 'red' }) {
  const { tr } = useApp()
  return (
    <span className={`evidence evidence-${level}`}>
      <i />
      {tr(level)}
    </span>
  )
}

export function GuestGate({
  children,
  onRegister,
}: {
  children: ReactNode
  onRegister: () => void
}) {
  const { profile, tr } = useApp()
  if (profile?.registered) return children
  return (
    <div className="card lock-card">
      <Icons.lock />
      <p>{tr('locked')}</p>
      <button type="button" className="btn btn-primary" onClick={onRegister}>
        {tr('registerCta')}
      </button>
    </div>
  )
}
