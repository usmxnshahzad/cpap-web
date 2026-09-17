'use client'

import { useRouter } from 'next/navigation'
import { HELPLINE, HELPLINE_TEL, treatments } from '../data/mock'
import { useApp } from '../context'
import { Icons } from '../components/Icons'
import { ListenButton } from '../components/Widgets'
import { PublicChrome } from '../components/Shell'

const previewIds = ['task-training', 'speech', 'hbot'] as const

export function Landing() {
  const { tr, lang, setLang } = useApp()
  const router = useRouter()
  const listenText = [
    tr('appName'),
    tr('landingTagline'),
    tr('landingInviteTitle'),
    tr('whatIsBody'),
    tr('howItWorks'),
    tr('how1'),
    tr('how2'),
    tr('helpline'),
    HELPLINE,
  ].join('. ')
  const preview = previewIds
    .map((id) => treatments.find((item) => item.id === id))
    .filter((item): item is (typeof treatments)[number] => Boolean(item))

  function start() {
    router.push('/status')
  }

  return (
    <PublicChrome>
      <main className="landing">
        <div className="landing-hero-band">
          <section className="landing-hero">
            <div className="landing-hero-copy">
              <p className="landing-crumb">{tr('ihhn')}</p>
              <h1>{tr('appName')}</h1>
              <p className="landing-tagline">{tr('landingTagline')}</p>
              <ListenButton text={listenText} />
            </div>
            <div className="app-preview" aria-hidden="true">
              <div className="phone">
                <div className="phone-screen">
                  <p className="phone-kicker">{tr('appName')}</p>
                  <strong className="phone-title">{tr('resourcesTitle')}</strong>
                  {preview.map((item) => (
                    <div key={item.id} className={`phone-row phone-${item.evidence}`}>
                      <span />
                      {lang === 'ur' ? item.ur : item.en}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="landing-invite">
          <div className="landing-invite-inner">
            <h2>{tr('landingInviteTitle')}</h2>
            <p className="landing-kicker">{tr('landingInviteLead')}</p>
            <p>{tr('landingInviteBody')}</p>
            <button type="button" className="btn btn-on-teal" onClick={start}>
              {tr('getStarted')}
            </button>
          </div>
        </section>

        <div className="landing-wrap landing-article">
          <section className="landing-block">
            <h2>{tr('whatIsTitle')}</h2>
            <p>{tr('whatIsBody')}</p>
          </section>

          <section className="landing-block">
            <h2>{tr('howItWorks')}</h2>
            <p>{tr('howWorkLead')}</p>
            <div className="landing-features">
              <article className="landing-feature">
                <span className="feature-icon" aria-hidden="true">
                  <Icons.learn />
                </span>
                <p>{tr('how1')}</p>
              </article>
              <article className="landing-feature">
                <span className="feature-icon" aria-hidden="true">
                  <Icons.video />
                </span>
                <p>{tr('how2')}</p>
              </article>
              <article className="landing-feature">
                <span className="feature-icon" aria-hidden="true">
                  <Icons.users />
                </span>
                <p>{tr('how3')}</p>
              </article>
            </div>
            <div className="landing-key">
              <span className="landing-key-label">{tr('evidenceKey')}</span>
              <span className="evidence evidence-green">
                <i />
                {tr('green')}
              </span>
              <span className="evidence evidence-amber">
                <i />
                {tr('amber')}
              </span>
              <span className="evidence evidence-red">
                <i />
                {tr('red')}
              </span>
            </div>
          </section>

          <section className="landing-access">
            <div>
              <h2>{tr('accessTitle')}</h2>
              <p>{tr('accessLead')}</p>
            </div>
            <div className="landing-access-form">
              <fieldset className="lang-pick">
                <legend>{tr('language')}</legend>
                <div className="choice-grid">
                  <button
                    type="button"
                    className={lang === 'en' ? 'choice selected' : 'choice'}
                    onClick={() => setLang('en')}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    className={lang === 'ur' ? 'choice selected' : 'choice'}
                    onClick={() => setLang('ur')}
                  >
                    اردو
                  </button>
                </div>
              </fieldset>
              <button type="button" className="btn btn-cta btn-block" onClick={start}>
                {tr('getStarted')}
              </button>
            </div>
          </section>

          <section className="landing-contact">
            <div>
              <h2>{tr('tellMoreTitle')}</h2>
              <p>{tr('tellMoreBody')}</p>
            </div>
            <a className="btn btn-primary" href={`tel:${HELPLINE_TEL}`}>
              <Icons.phone />
              {tr('callHelpline')} · {HELPLINE}
            </a>
          </section>
        </div>

        <footer className="landing-foot">
          <div className="landing-wrap">
            <p>{tr('landingAck')}</p>
            <p className="landing-partner">{tr('ihhn')}</p>
          </div>
        </footer>
      </main>
    </PublicChrome>
  )
}

export function RegistrationStatus() {
  const { tr, setProfile } = useApp()
  const router = useRouter()

  return (
    <PublicChrome>
      <main className="main">
        <div className="page page-narrow">
          <div className="page-head">
            <h1>{tr('statusTitle')}</h1>
            <ListenButton text={`${tr('statusTitle')}. ${tr('statusLead')}`} />
          </div>
          <p>{tr('statusLead')}</p>
          <div className="choice-grid">
            <button type="button" className="choice tall" onClick={() => router.push('/signup')}>
              <strong>{tr('registered')}</strong>
              <span>{tr('registeredHint')}</span>
            </button>
            <button
              type="button"
              className="choice tall"
              onClick={() => {
                setProfile({
                  childName: '',
                  age: '',
                  guardianName: '',
                  guardianContact: '',
                  center: 'karachi',
                  cpType: 'spastic',
                  registered: false,
                })
                router.push('/guidance')
              }}
            >
              <strong>{tr('unregistered')}</strong>
              <span>{tr('unregisteredHint')}</span>
            </button>
          </div>
          <button type="button" className="btn btn-ghost" onClick={() => router.push('/')}>
            {tr('back')}
          </button>
        </div>
      </main>
    </PublicChrome>
  )
}
