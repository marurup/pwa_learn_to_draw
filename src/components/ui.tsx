import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useT, useTL } from '../i18n'
import { LESSONS, STYLE_ICON, extensionsOf, styleOf, variantsOf } from '../lessons'
import { newBadges, type Badge } from '../lessons/badges'
import type { Lesson, Level, Style } from '../lessons/types'
import { actions, type Profile } from '../state/store'
import { StepCanvas } from './StepCanvas'

export function TopBar({ back, title, children }: { back?: string | (() => void); title?: ReactNode; children?: ReactNode }) {
  const navigate = useNavigate()
  const t = useT()
  return (
    <header className="topbar">
      {back !== undefined && (
        <button
          className="icon-btn"
          aria-label={t('common.back')}
          onClick={() => (typeof back === 'function' ? back() : navigate(back))}
        >
          ←
        </button>
      )}
      {typeof title === 'string' ? <h2>{title}</h2> : (title ?? <span className="spacer" />)}
      {children}
    </header>
  )
}

export function LevelDots({ level }: { level: Level }) {
  const t = useT()
  return (
    <span className="level-dots" title={t('level.label', { n: level, name: t(`level.${level}`) })}>
      {[1, 2, 3, 4].map((n) => (
        <i key={n} className={n <= level ? 'on' : ''} />
      ))}
    </span>
  )
}

export function StyleBadge({ style }: { style: Style }) {
  const t = useT()
  return (
    <span className={`style-badge ${style}`}>
      <span aria-hidden="true">{STYLE_ICON[style]}</span> {t(`style.${style}`)}
    </span>
  )
}

export function LessonCard({ lesson, done }: { lesson: Lesson; done?: boolean }) {
  const t = useT()
  const tl = useTL()
  const style = styleOf(lesson)
  return (
    <Link to={`/lesson/${lesson.id}`} className="lesson-card" data-testid={`lesson-${lesson.id}`}>
      <div className="thumb">
        <StepCanvas lesson={lesson} mode="thumb" />
      </div>
      {done && <span className="done-mark">✓ {t('catalog.done')}</span>}
      {style !== 'enkel' && <StyleBadge style={style} />}
      <h3>{tl(lesson.title)}</h3>
      <div className="meta">
        <LevelDots level={lesson.level} />
        <span>{t('catalog.minutes', { n: lesson.minutes })}</span>
      </div>
    </Link>
  )
}

/** A button that only fires after being held down – keeps small fingers out of grown-up settings. */
export function HoldButton({
  onHold,
  ms = 2000,
  className = 'btn soft',
  children,
  label,
}: {
  onHold: () => void
  ms?: number
  className?: string
  children: ReactNode
  label?: string
}) {
  const [progress, setProgress] = useState(0)
  const timer = useRef<number | undefined>(undefined)

  const stop = () => {
    window.clearInterval(timer.current)
    timer.current = undefined
    setProgress(0)
  }
  const start = () => {
    stop()
    const began = performance.now()
    timer.current = window.setInterval(() => {
      const p = Math.min(1, (performance.now() - began) / ms)
      setProgress(p)
      if (p >= 1) {
        stop()
        onHold()
      }
    }, 40)
  }
  useEffect(() => stop, [])

  return (
    <button
      className={`hold-btn ${className}`}
      aria-label={label}
      onPointerDown={start}
      onPointerUp={stop}
      onPointerLeave={stop}
      onPointerCancel={stop}
      onContextMenu={(e) => e.preventDefault()}
      style={{ '--p': progress } as CSSProperties}
    >
      {children}
    </button>
  )
}

export function Toast({ text, onDone }: { text: string; onDone: () => void }) {
  useEffect(() => {
    const id = window.setTimeout(onDone, 2600)
    return () => window.clearTimeout(id)
  }, [onDone])
  return (
    <div className="toast" role="status">
      {text}
    </div>
  )
}

const CONFETTI_COLORS = ['#ff7a59', '#ffc93c', '#4aa3df', '#3fb67a', '#9b6bd6']

export function Confetti({ pieces = 40 }: { pieces?: number }) {
  const [items] = useState(() =>
    Array.from({ length: pieces }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      dur: 2.2 + Math.random() * 1.6,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      rot: Math.random() * 360,
      round: Math.random() > 0.6,
    })),
  )
  return (
    <div className="confetti" aria-hidden="true">
      {items.map((c, i) => (
        <i
          key={i}
          style={
            {
              left: `${c.left}%`,
              background: c.color,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.dur}s`,
              borderRadius: c.round ? '50%' : '2px',
              '--rot': `${c.rot}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

export function Materials({ lesson }: { lesson: Lesson }) {
  const t = useT()
  const icons = { pencil: '✏️', eraser: '🧽', paper: '📄', ruler: '📏', colors: '🖍️' } as const
  const list = lesson.materials ?? ['pencil', 'eraser', 'paper']
  return (
    <ul className="materials">
      {list.map((m) => (
        <li key={m}>
          <span aria-hidden="true">{icons[m]}</span> {t(`mat.${m}`)}
        </li>
      ))}
    </ul>
  )
}

/** Announces badges the artist has just earned (each badge only once). */
export function BadgeCelebration({ profile }: { profile: Profile }) {
  const t = useT()
  // Worked out once, when the screen opens.
  const [badges, setBadges] = useState<Badge[]>(() => newBadges(profile, LESSONS))
  useEffect(() => {
    if (badges.length)
      actions.markBadgesSeen(
        profile.id,
        badges.map((b) => b.id),
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!badges.length) return null
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={t('badge.new')}>
      <div className="modal card">
        <h2>{t('badge.new')}</h2>
        {badges.map((b) => (
          <div key={b.id} className="badge-big">
            <span className="badge-icon">{b.icon}</span>
            <strong>{t(b.title)}</strong>
            <span className="muted">{t(b.desc)}</span>
          </div>
        ))}
        <button className="btn big leaf" onClick={() => setBadges([])} data-testid="close-badges">
          {t('badge.ok')} 🎉
        </button>
      </div>
    </div>
  )
}

/**
 * After a drawing: carry on with more details on the same paper, or try the realistic version of the
 * same subject (only versions that do not first need another drawing).
 */
export function NextChallenge({ lesson }: { lesson: Lesson }) {
  const t = useT()
  const tl = useTL()
  const more = extensionsOf(lesson.id)
  const realistic =
    styleOf(lesson) === 'naturtro' ? [] : variantsOf(lesson).filter((v) => styleOf(v) === 'naturtro' && !v.base)
  const options = [...more, ...realistic.slice(0, 2)]
  if (!options.length) return null
  return (
    <section className="next-challenge card" data-testid="next-challenge">
      <h3>{t('next.title')}</h3>
      <div className="row">
        {options.map((l) => {
          const real = styleOf(l) === 'naturtro'
          return (
            <Link key={l.id} to={`/lesson/${l.id}`} className={`btn ${real ? 'sky' : 'sun'}`}>
              {real ? `🎨 ${t('next.realistic')}` : `✨ ${t('next.detail')}`}
              {options.length > 1 ? `: ${tl(l.title)}` : ''}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
