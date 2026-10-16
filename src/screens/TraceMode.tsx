import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StepCanvas, canvasAspect } from '../components/StepCanvas'
import { HoldButton, TopBar } from '../components/ui'
import { useWakeLock } from '../hooks/useWakeLock'
import { useT, useTL } from '../i18n'
import type { Lesson } from '../lessons/types'

type FsDoc = Document & { webkitExitFullscreen?: () => Promise<void>; webkitFullscreenElement?: Element }
type FsEl = HTMLElement & { webkitRequestFullscreen?: () => Promise<void> }

function enterFullscreen() {
  const el = document.documentElement as FsEl
  const req = el.requestFullscreen?.bind(el) ?? el.webkitRequestFullscreen?.bind(el)
  req?.()?.catch?.(() => {})
}

function exitFullscreen() {
  const doc = document as FsDoc
  if (!(doc.fullscreenElement ?? doc.webkitFullscreenElement)) return
  const exit = doc.exitFullscreen?.bind(doc) ?? doc.webkitExitFullscreen?.bind(doc)
  exit?.()?.catch?.(() => {})
}

/** Lightbox mode: the tablet becomes a light table – paper on the screen, trace the lines. */
export function TraceMode({ lesson }: { lesson: Lesson }) {
  const t = useT()
  const tl = useTL()
  const navigate = useNavigate()
  const [locked, setLocked] = useState(false)
  const [size, setSize] = useState(90)
  const [dotsOnly, setDotsOnly] = useState(!!lesson.dots)

  useWakeLock(locked)

  if (locked) {
    return (
      <div
        className="trace-overlay"
        onPointerDown={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        data-testid="trace-locked"
      >
        <div className="trace-art" style={{ width: `${size}vmin`, height: `${size}vmin` }}>
          <StepCanvas lesson={lesson} mode="trace" dotsOnly={dotsOnly} />
        </div>
        <HoldButton
          className="unlock"
          ms={1500}
          onHold={() => {
            exitFullscreen()
            setLocked(false)
          }}
        >
          🔒 {t('trace.unlock')}
        </HoldButton>
      </div>
    )
  }

  return (
    <main className="screen">
      <TopBar back={() => navigate(`/lesson/${lesson.id}`, { replace: true })} title={`${t('trace.title')}: ${tl(lesson.title)}`} />
      <div className="intro-layout">
        <div className="card canvas-card" style={canvasAspect(lesson)}>
          <StepCanvas lesson={lesson} mode="trace" dotsOnly={dotsOnly} />
        </div>
        <div className="stack">
          <p className="lead">{t('trace.intro')}</p>
          {lesson.dots && (
            <div className="row">
              <button className="chip" aria-pressed={dotsOnly} onClick={() => setDotsOnly(true)}>
                🔢 {t('trace.dots')}
              </button>
              <button className="chip" aria-pressed={!dotsOnly} onClick={() => setDotsOnly(false)}>
                🖼️ {t('trace.all')}
              </button>
            </div>
          )}
          <label className="stack" style={{ gap: 6 }}>
            <strong>{t('trace.size')}</strong>
            <input type="range" min={40} max={100} value={size} onChange={(e) => setSize(Number(e.target.value))} />
          </label>
          <button
            className="btn big leaf"
            onClick={() => {
              enterFullscreen()
              setLocked(true)
            }}
            data-testid="trace-lock"
          >
            🔒 {t('trace.lock')}
          </button>
        </div>
      </div>
    </main>
  )
}
