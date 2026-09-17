'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { HELPLINE, HELPLINE_TEL } from '../data/mock'
import { useApp } from '../context'
import { Icons } from './Icons'
import { ListenButton } from './Widgets'

function Brand() {
  const { tr, profile } = useApp()
  const homeTo = profile?.registered ? '/home' : profile ? '/guidance' : '/'
  return (
    <Link href={homeTo} className="brand-row">
      <div className="logo" aria-hidden="true">
        CP
      </div>
      <div className="brand-text">
        <strong>{tr('appName')}</strong>
        <span>{tr('ihhn')}</span>
      </div>
    </Link>
  )
}

function TopActions() {
  const { tr, lang, setLang, profile, reset } = useApp()
  const router = useRouter()

  function logout() {
    reset()
    router.push('/')
  }

  return (
    <div className="top-actions">
      <a className="helpline-chip" href={`tel:${HELPLINE_TEL}`}>
        <Icons.phone />
        <span>
          <span className="helpline-label">{tr('helpline')}</span>
          <b>{HELPLINE}</b>
        </span>
      </a>
      <button
        type="button"
        className="lang-switch"
        onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
      >
        {lang === 'en' ? 'اردو' : 'EN'}
      </button>
      {profile ? (
        <button type="button" className="logout-btn" onClick={logout}>
          <Icons.logout />
          <span className="logout-text">{tr('logout')}</span>
        </button>
      ) : null}
    </div>
  )
}

function MainNav({ className }: { className: string }) {
  const { tr, profile } = useApp()
  const pathname = usePathname()
  const items = profile?.registered
    ? [
        { to: '/home', label: tr('home'), icon: Icons.home },
        { to: '/resources', label: tr('learn'), icon: Icons.learn },
        { to: '/appointments', label: tr('book'), icon: Icons.book },
        { to: '/help', label: tr('help'), icon: Icons.help },
      ]
    : [
        { to: '/guidance', label: tr('home'), icon: Icons.home },
        { to: '/resources', label: tr('learn'), icon: Icons.learn },
        { to: '/aids', label: tr('tileAids'), icon: Icons.walker },
        { to: '/help', label: tr('help'), icon: Icons.help },
      ]
  return (
    <>
      {items.map((item) => {
        const Icon = item.icon
        const active = pathname === item.to
        return (
          <Link
            key={item.to}
            href={item.to}
            className={`${className}${active ? ' active' : ''}`}
          >
            <Icon />
            {item.label}
          </Link>
        )
      })}
    </>
  )
}

export function PublicChrome({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <Brand />
          <TopActions />
        </div>
      </header>
      {children}
    </div>
  )
}

export function Shell({
  children,
  title,
  listenText,
  showNav = true,
  backTo,
  wide = true,
}: {
  children: ReactNode
  title?: string
  listenText?: string
  showNav?: boolean
  backTo?: string
  wide?: boolean
}) {
  const { tr, profile } = useApp()
  const router = useRouter()

  return (
    <div className={`app ${showNav ? 'has-nav' : ''}`}>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-cluster">
            {backTo ? (
              <button
                type="button"
                className="icon-btn"
                onClick={() => router.push(backTo)}
                aria-label={tr('back')}
              >
                <span className="back-chevron">‹</span>
              </button>
            ) : null}
            <Brand />
          </div>
          {showNav ? (
            <nav className="nav-inline" aria-label="Main">
              <MainNav className="nav-link" />
            </nav>
          ) : null}
          <TopActions />
        </div>
      </header>

      <main className="main">
        <div className={wide ? 'page' : 'page page-narrow'}>
          {title ? (
            <div className="page-head">
              <h1>{title}</h1>
              <ListenButton text={listenText ?? title} />
            </div>
          ) : null}
          {profile && !profile.registered ? <p className="guest-strip">{tr('guestBanner')}</p> : null}
          {children}
        </div>
      </main>

      {showNav ? (
        <nav className="tabbar" aria-label="Main">
          <MainNav className="tab" />
        </nav>
      ) : null}
    </div>
  )
}
