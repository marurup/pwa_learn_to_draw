import { Link, useNavigate } from 'react-router-dom'
import { StepCanvas } from '../components/StepCanvas'
import { HoldButton } from '../components/ui'
import { useT, useTL } from '../i18n'
import { LESSONS, getLesson } from '../lessons'
import { levelForAge } from '../lessons/recommend'
import type { Profile } from '../state/store'

export function Home({ profile }: { profile: Profile }) {
  const t = useT()
  const tl = useTL()
  const navigate = useNavigate()
  const level = levelForAge(profile.age)
  const examples = LESSONS.filter((l) => l.level === level).slice(0, 3)
  const current = getLesson(profile.current)
  const currentStep = current ? (profile.progress[current.id]?.lastStep ?? 0) + 1 : 1

  return (
    <main className="screen">
      <header className="topbar">
        <Link to="/who" className="profile-chip" aria-label={t('home.switch')}>
          <span className="avatar">{profile.avatar}</span>
          <span>{profile.name}</span>
        </Link>
        <span className="spacer" />
        <HoldButton className="icon-btn" label={t('parents.hold')} onHold={() => navigate('/parents')}>
          ⚙️
        </HoldButton>
      </header>

      <div className="stack" style={{ gap: 6 }}>
        <h1>{t('home.greeting', { name: profile.name })}</h1>
        <p className="lead muted">{t('home.question')}</p>
      </div>

      <div className="home-choices">
        <Link to="/catalog" className="choice big-choice sun-bg" data-testid="choose-know">
          <span className="thumbs">
            {examples.map((l) => (
              <StepCanvas key={l.id} lesson={l} mode="thumb" />
            ))}
          </span>
          <span className="choice-title">{t('home.know')}</span>
          <small>{t('home.knowSub')}</small>
        </Link>
        <Link to="/guide" className="choice big-choice sky-bg" data-testid="choose-help">
          <span className="emoji" aria-hidden="true">
            🧭
          </span>
          <span className="choice-title">{t('home.help')}</span>
          <small>{t('home.helpSub')}</small>
        </Link>
      </div>

      <div className="home-extra">
        {current && (
          <Link to={`/lesson/${current.id}/step/${currentStep}`} className="choice wide">
            <span className="mini-thumb">
              <StepCanvas lesson={current} mode="thumb" />
            </span>
            <span>
              {t('home.continue')}: {tl(current.title)}
            </span>
          </Link>
        )}
        <Link to="/gallery" className="choice wide">
          <span className="emoji small" aria-hidden="true">
            🖼️
          </span>
          <span>{t('home.gallery')}</span>
        </Link>
      </div>

      <p className="tip home-tip">
        <span className="tip-icon" aria-hidden="true">
          ✏️
        </span>
        <span>{t('welcome.paper')}</span>
      </p>
    </main>
  )
}
