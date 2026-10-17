import { useCallback, useEffect, useState } from 'react'
import { useLang, useT } from '../i18n'
import { BUILD, commitUrl, latestSha, shortSha, updateApp } from '../version'

type Status = 'idle' | 'checking' | 'latest' | 'offline' | 'newer'

/**
 * Bottom of the home screen: which version is running (linked to its commit), whether a newer one is out,
 * and a button that updates the app.
 */
export function AppInfo() {
  const t = useT()
  const lang = useLang()
  const [status, setStatus] = useState<Status>('idle')
  const [latest, setLatest] = useState('')

  /** Shows what version.json says; `asked` also reports "up to date" and "offline" when the child asked. */
  const show = useCallback((sha: string | null, asked: boolean) => {
    if (sha && sha !== BUILD.sha) {
      setLatest(sha)
      setStatus('newer')
    } else if (asked) {
      setStatus(sha ? 'latest' : 'offline')
    }
  }, [])

  const check = () => {
    setStatus('checking')
    void latestSha().then((sha) => show(sha, true))
  }

  // Check when the home screen opens and whenever the app comes back to the front – an installed app can stay
  // open for days. The browser may also install a new version in the background while the app is open.
  useEffect(() => {
    if (!BUILD.sha) return
    const look = () => void latestSha().then((sha) => show(sha, false))
    look()
    const onVisible = () => {
      if (document.visibilityState === 'visible') look()
    }
    const onNewWorker = () => setStatus('newer')
    const sw = navigator.serviceWorker
    const hadWorker = !!sw?.controller
    document.addEventListener('visibilitychange', onVisible)
    if (hadWorker) sw.addEventListener('controllerchange', onNewWorker)
    return () => {
      document.removeEventListener('visibilitychange', onVisible)
      if (hadWorker) sw.removeEventListener('controllerchange', onNewWorker)
    }
  }, [show])

  if (!BUILD.sha) {
    return (
      <footer className="app-info" data-testid="app-info">
        <span>{t('app.devVersion')}</span>
      </footer>
    )
  }

  const date = new Date(BUILD.date).toLocaleString(lang === 'da' ? 'da-DK' : 'en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
  const newer = latest ? t('app.newer', { sha: shortSha(latest) }) : ''
  const message = { idle: '', checking: t('app.checking'), latest: t('app.latest'), offline: t('app.offline'), newer }[
    status
  ]

  return (
    <footer className="app-info" data-testid="app-info">
      <a className="version" href={commitUrl(BUILD)} target="_blank" rel="noopener noreferrer">
        {t('app.version', { sha: shortSha(BUILD.sha), date })}
      </a>
      {status === 'newer' ? (
        <button className="btn leaf small" onClick={() => void updateApp()} data-testid="update">
          {t('app.update')}
        </button>
      ) : (
        <button className="link-btn" onClick={check} disabled={status === 'checking'} data-testid="check-update">
          {t('app.check')}
        </button>
      )}
      {message && (
        <span role="status" data-testid="update-status">
          {message}
        </span>
      )}
    </footer>
  )
}
