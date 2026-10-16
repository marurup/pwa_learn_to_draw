import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StepCanvas } from '../components/StepCanvas'
import { TopBar } from '../components/ui'
import { speechSupported, useSpeech } from '../hooks/useSpeech'
import { useWakeLock } from '../hooks/useWakeLock'
import { useLang, useT, useTL } from '../i18n'
import type { Lesson } from '../lessons/types'
import { actions, type Profile } from '../state/store'

export function LessonPlayer({ lesson, profile }: { lesson: Lesson; profile: Profile }) {
  const t = useT()
  const tl = useTL()
  const lang = useLang()
  const navigate = useNavigate()
  const params = useParams()
  const total = lesson.steps.length
  const index = Math.min(total - 1, Math.max(0, Number(params.n ?? 1) - 1 || 0))
  const step = lesson.steps[index]
  const isLast = index === total - 1
  const [replay, setReplay] = useState(0)
  const { speak, stop, speaking } = useSpeech(lang)
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  useWakeLock()

  const text = tl(step.text)
  const tip = step.tip ? tl(step.tip) : ''

  useEffect(() => {
    actions.reachStep(profile.id, lesson.id, index)
  }, [profile.id, lesson.id, index])

  useEffect(() => {
    if (profile.autoRead) speak(tip ? `${text} ${tip}` : text)
    else stop()
    // Read again only when the step changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, lesson.id])

  const goTo = (i: number) => navigate(`/lesson/${lesson.id}/step/${i + 1}`, { replace: true })
  const next = () => {
    if (isLast) {
      stop()
      actions.completeLesson(profile.id, lesson.id)
      navigate(`/lesson/${lesson.id}/done`, { replace: true })
    } else goTo(index + 1)
  }
  const prev = () => index > 0 && goTo(index - 1)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const hasGuides = lesson.steps.slice(0, index + 1).some((s) => s.strokes?.some((k) => k.kind === 'guide'))

  return (
    <main className="screen player">
      <TopBar back={() => navigate(`/lesson/${lesson.id}`, { replace: true })} title={tl(lesson.title)} />

      <div className="player-layout">
        <div
          className="card canvas-card"
          onPointerDown={(e) => (swipeStart.current = { x: e.clientX, y: e.clientY })}
          onPointerUp={(e) => {
            const s = swipeStart.current
            swipeStart.current = null
            if (!s) return
            const dx = e.clientX - s.x
            if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(e.clientY - s.y) * 1.5) {
              if (dx < 0) next()
              else prev()
            }
          }}
          style={{ touchAction: 'pan-y' }}
        >
          <StepCanvas lesson={lesson} step={index} replayKey={replay} />
          <div className="legend" aria-hidden="true">
            <span>
              <i className="sw new" /> {t('player.legendNew')}
            </span>
            {index > 0 && (
              <span>
                <i className="sw done" /> {t('player.legendDone')}
              </span>
            )}
            {hasGuides && (
              <span>
                <i className="sw guide" /> {t('player.legendGuide')}
              </span>
            )}
          </div>
        </div>

        <div className="player-panel">
          <span className="step-count">{t('player.step', { n: index + 1, total })}</span>
          <p className="step-text" data-testid="step-text">
            {text}
          </p>
          {tip && (
            <div className="tip">
              <span className="tip-icon" aria-hidden="true">
                💡
              </span>
              <span>{tip}</span>
            </div>
          )}

          <div className="row player-tools">
            <button className="btn soft" onClick={() => setReplay((r) => r + 1)}>
              ↻ {t('player.replay')}
            </button>
            {speechSupported && (
              <button className="btn soft" onClick={() => (speaking ? stop() : speak(tip ? `${text} ${tip}` : text))}>
                {speaking ? `⏹ ${t('player.stop')}` : `🔊 ${t('player.read')}`}
              </button>
            )}
          </div>

          <nav className="step-dots" aria-label={t('player.step', { n: index + 1, total })}>
            {lesson.steps.map((_, i) => (
              <button
                key={i}
                className={i === index ? 'on' : i < index ? 'past' : ''}
                aria-label={t('player.step', { n: i + 1, total })}
                aria-current={i === index ? 'step' : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </nav>

          <div className="player-nav">
            <button className="btn soft big" onClick={prev} disabled={index === 0} data-testid="prev-step">
              ← {t('common.back')}
            </button>
            <button className={`btn big ${isLast ? 'leaf' : ''}`} onClick={next} data-testid="next-step">
              {isLast ? `${t('player.finish')} 🎉` : `${t('common.next')} →`}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
