'use client'

import { useRouter } from 'next/navigation'
import { questionnaire } from '../data/mock'
import { useApp } from '../context'
import { Shell } from '../components/Shell'
import { GuestGate } from '../components/Widgets'

export function Questionnaire() {
  const { tr, lang, profile, answers, setAnswer, surveyDone, completeSurvey } = useApp()
  const router = useRouter()
  const total = questionnaire.questions.length
  const filled = questionnaire.questions.filter((q) => answers[q.id]).length
  const ready = filled === total

  return (
    <Shell title={tr('surveyTitle')} listenText={`${tr('surveyTitle')}. ${tr('surveyLead')}`} backTo="/home" wide={false}>
      <GuestGate onRegister={() => router.push('/signup')}>
        <p>{tr('surveyLead')}</p>
        {profile?.mrNumber ? (
          <p className="patient-mr">
            {tr('mrNumber')}: {profile.mrNumber}
            {profile.childName ? ` · ${profile.childName}` : null}
          </p>
        ) : null}
        <p>
          {lang === 'ur' ? questionnaire.discipline.ur : questionnaire.discipline.en} ·{' '}
          {lang === 'ur' ? questionnaire.cadenceUr : questionnaire.cadenceEn}
        </p>
        <div className="progress" aria-label={tr('progress')}>
          <span style={{ width: `${(filled / total) * 100}%` }} />
        </div>
        <p className="muted">
          {tr('progress')}: {filled}/{total}
        </p>
        {surveyDone ? (
          <div className="card success">
            <h2>{tr('thanks')}</h2>
          </div>
        ) : (
          <>
            <ol className="q-list">
              {questionnaire.questions.map((q) => (
                <li key={q.id} className="card">
                  <p>{lang === 'ur' ? q.ur : q.en}</p>
                  <div className="scale">
                    {questionnaire.scale.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        className={answers[q.id] === opt.id ? 'selected' : ''}
                        onClick={() => setAnswer(q.id, opt.id)}
                      >
                        {lang === 'ur' ? opt.ur : opt.en}
                      </button>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
            <button
              type="button"
              className="btn btn-cta btn-block"
              disabled={!ready}
              onClick={completeSurvey}
            >
              {tr('submit')}
            </button>
          </>
        )}
      </GuestGate>
    </Shell>
  )
}
