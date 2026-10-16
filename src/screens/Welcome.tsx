import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useT } from '../i18n'
import type { Lang } from '../lessons/types'
import { actions, useAppState } from '../state/store'
import { TopBar } from '../components/ui'

export const AVATARS = ['🐱', '🐶', '🦊', '🐼', '🐸', '🦁', '🐰', '🐵', '🦄', '🐧', '🐢', '🐙', '🦉', '🐳', '🦖', '🐝']
export const AGES = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

type Stage = 'lang' | 'name' | 'age' | 'avatar' | 'ready'

export function Welcome() {
  const t = useT()
  const navigate = useNavigate()
  const app = useAppState()
  const first: Stage = app.langChosen ? 'name' : 'lang'
  const [stage, setStage] = useState<Stage>(first)
  const [name, setName] = useState('')
  const [age, setAge] = useState<number | undefined>()
  const [avatar, setAvatar] = useState<string | undefined>()

  const order: Stage[] = ['lang', 'name', 'age', 'avatar', 'ready']
  const back = () => {
    const i = order.indexOf(stage)
    if (stage === first) navigate(app.profiles.length ? '/who' : '/')
    else setStage(order[i - 1])
  }

  const chooseLang = (lang: Lang) => {
    actions.setLang(lang)
    setStage('name')
  }

  const finish = () => {
    if (!avatar || !age) return
    actions.addProfile({ name, age, avatar })
    setStage('ready')
  }

  const trimmed = name.trim()

  return (
    <main className="screen">
      {stage !== 'ready' && (stage !== 'lang' || app.profiles.length > 0) && <TopBar back={back} />}
      <div className="stack welcome" style={{ alignItems: 'center', textAlign: 'center', flex: 1, justifyContent: 'center' }}>
        {stage === 'lang' && (
          <>
            <div className="hero-emoji" aria-hidden="true">
              ✏️📄
            </div>
            <h1>{t('welcome.hello')}</h1>
            <p className="muted lead">{t('welcome.paper')}</p>
            <h2 style={{ marginTop: 16 }}>{t('welcome.chooseLang')}</h2>
            <div className="row center">
              <button className="btn big sun" onClick={() => chooseLang('da')}>
                🇩🇰 Dansk
              </button>
              <button className="btn big sky" onClick={() => chooseLang('en')}>
                🇬🇧 English
              </button>
            </div>
          </>
        )}

        {stage === 'name' && (
          <form
            className="stack"
            style={{ alignItems: 'center', width: '100%' }}
            onSubmit={(e) => {
              e.preventDefault()
              if (trimmed) setStage('age')
            }}
          >
            <h1>{t('welcome.nameQ')}</h1>
            <input
              className="text-input"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 24))}
              placeholder={t('welcome.namePlaceholder')}
              aria-label={t('welcome.nameQ')}
              autoFocus
              autoComplete="off"
              autoCapitalize="words"
              enterKeyHint="next"
            />
            <button className="btn big" type="submit" disabled={!trimmed}>
              {t('common.next')} →
            </button>
          </form>
        )}

        {stage === 'age' && (
          <>
            <h1>{t('welcome.ageQ', { name: trimmed })}</h1>
            <div className="number-grid">
              {AGES.map((a) => (
                <button
                  key={a}
                  aria-pressed={age === a}
                  onClick={() => {
                    setAge(a)
                    setStage('avatar')
                  }}
                >
                  {a === 13 ? '13+' : a}
                </button>
              ))}
            </div>
          </>
        )}

        {stage === 'avatar' && (
          <>
            <h1>{t('welcome.avatarQ')}</h1>
            <div className="avatar-grid">
              {AVATARS.map((a) => (
                <button key={a} aria-pressed={avatar === a} onClick={() => setAvatar(a)} aria-label={a}>
                  {a}
                </button>
              ))}
            </div>
            <button className="btn big" disabled={!avatar} onClick={finish}>
              {t('common.next')} →
            </button>
          </>
        )}

        {stage === 'ready' && (
          <>
            <div className="avatar big pop">{avatar}</div>
            <h1>{t('welcome.ready', { name: trimmed })}</h1>
            <p className="muted lead">{t('welcome.readySub')}</p>
            <button className="btn big leaf" onClick={() => navigate('/home', { replace: true })}>
              {t('welcome.go')} ✏️
            </button>
          </>
        )}
      </div>
    </main>
  )
}
