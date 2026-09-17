'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { forumReplies, forumThreads } from '../data/mock'
import { useApp } from '../context'
import { Shell } from '../components/Shell'

export function Forum() {
  const { tr, lang } = useApp()

  return (
    <Shell title={tr('forumTitle')} listenText={`${tr('forumTitle')}. ${tr('forumLead')}`} backTo="/home">
      <p>{tr('forumLead')}</p>
      <div className="actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => window.alert(tr('postNote'))}
        >
          {tr('writePost')}
        </button>
      </div>
      <ul className="card-grid">
        {forumThreads.map((thread) => (
          <li key={thread.id}>
            <Link className="card link-card" href={`/forum/${thread.id}`}>
              <p className="tag">{thread.tag}</p>
              <strong>{lang === 'ur' ? thread.titleUr : thread.titleEn}</strong>
              <p className="muted">
                {thread.author} · {thread.replies} {tr('replies')}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  )
}

export function ForumThread() {
  const params = useParams()
  const id = typeof params.id === 'string' ? params.id : params.id?.[0]
  const { tr, lang } = useApp()
  const router = useRouter()
  const thread = forumThreads.find((t) => t.id === id)
  const replies = forumReplies.filter((r) => r.threadId === id)

  if (!thread) {
    return (
      <Shell title={tr('forumTitle')} backTo="/forum">
        <button type="button" className="btn" onClick={() => router.push('/forum')}>
          {tr('back')}
        </button>
      </Shell>
    )
  }

  return (
    <Shell
      title={lang === 'ur' ? thread.titleUr : thread.titleEn}
      listenText={lang === 'ur' ? thread.bodyUr : thread.bodyEn}
      backTo="/forum"
    >
      <p className="muted">{thread.author}</p>
      <p>{lang === 'ur' ? thread.bodyUr : thread.bodyEn}</p>
      <ul className="list">
        {replies.map((reply) => (
          <li key={reply.id} className="card">
            <strong>{reply.author}</strong>
            <p>{lang === 'ur' ? reply.bodyUr : reply.bodyEn}</p>
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-secondary btn-block" onClick={() => window.alert(tr('postNote'))}>
        {tr('reply')}
      </button>
    </Shell>
  )
}
