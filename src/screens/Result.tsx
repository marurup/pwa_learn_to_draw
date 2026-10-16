import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { StepCanvas } from '../components/StepCanvas'
import { BadgeCelebration, Confetti, NextChallenge, Toast, TopBar } from '../components/ui'
import {
  BACKGROUNDS,
  BACKGROUND_CSS,
  FRAMES,
  composePicture,
  downloadBlob,
  sharePicture,
  type Background,
  type Frame,
} from '../feedback/effects'
import { getFeedback, hashSeed, type Feedback } from '../feedback/praise'
import { useObjectUrl } from '../hooks/useObjectUrl'
import { useLang, useT, useTL, type Key } from '../i18n'
import { getLesson } from '../lessons'
import { getPhoto, updatePhoto, type Photo, type Pride } from '../state/gallery'
import type { Profile } from '../state/store'

const PRIDE: { id: Pride; emoji: string }[] = [
  { id: 'ok', emoji: '🙂' },
  { id: 'good', emoji: '😀' },
  { id: 'super', emoji: '🤩' },
]

export function Result({ profile }: { profile: Profile }) {
  const t = useT()
  const tl = useTL()
  const lang = useLang()
  const navigate = useNavigate()
  const { photoId } = useParams()
  const [search] = useSearchParams()
  const isNew = search.get('new') === '1'

  const [photo, setPhoto] = useState<Photo | null | undefined>()
  const [white, setWhite] = useState(true)
  const [alive, setAlive] = useState(false)
  const [dance, setDance] = useState(false)
  const [background, setBackground] = useState<Background>('none')
  const [frame, setFrame] = useState<Frame>('none')
  const [compare, setCompare] = useState(false)
  const [feedback, setFeedback] = useState<Feedback>()
  const [toast, setToast] = useState<string>()
  const [size, setSize] = useState<{ w: number; h: number }>()

  useEffect(() => {
    let live = true
    getPhoto(photoId ?? '').then((p) => live && setPhoto(p ?? null))
    return () => {
      live = false
    }
  }, [photoId])

  const lesson = getLesson(photo?.lessonId)

  useEffect(() => {
    if (!photo || !lesson) return
    let live = true
    getFeedback({ lesson, name: profile.name, lang, seed: hashSeed(photo.id) }).then((f) => live && setFeedback(f))
    return () => {
      live = false
    }
  }, [photo, lesson, profile.name, lang])

  const shown = photo ? (white ? photo.enhanced : photo.image) : undefined
  const src = useObjectUrl(shown)

  useEffect(() => {
    if (!src) return
    const img = new Image()
    img.onload = () => setSize({ w: img.naturalWidth, h: img.naturalHeight })
    img.src = src
  }, [src])

  const [seed, setSeed] = useState(0)
  useEffect(() => {
    if (!alive) return
    const id = window.setInterval(() => setSeed((s) => (s + 1) % 3), 140)
    return () => window.clearInterval(id)
  }, [alive])

  if (photo === undefined) return <div className="loading">✏️</div>
  if (photo === null || !lesson) {
    return (
      <main className="screen center">
        <p className="lead">{t('result.notFound')}</p>
        <Link className="btn" to="/gallery">
          {t('result.gallery')}
        </Link>
      </main>
    )
  }

  const title = tl(lesson.title)
  const caption = `${title} · ${profile.name}`
  const fileName = `${lesson.id}-${new Date(photo.createdAt).toISOString().slice(0, 10)}.jpg`

  const picture = () => composePicture(shown!, { background, frame, caption })
  const share = async () => {
    const outcome = await sharePicture(await picture(), fileName, t('result.shareText', { title }))
    if (outcome === 'downloaded') setToast(t('result.saved'))
  }
  const save = async () => {
    downloadBlob(await picture(), fileName)
    setToast(t('result.saved'))
  }
  const choosePride = (pride: Pride) => {
    setPhoto({ ...photo, pride })
    void updatePhoto(photo.id, { pride })
  }

  const blend = background !== 'none' ? 'multiply' : undefined

  return (
    <main className="screen result">
      {isNew && <Confetti />}
      <TopBar back={() => navigate(isNew ? '/home' : '/gallery')} title={title} />

      <div className="result-layout">
        <div className="result-art">
          <div className={`artwork frame-${frame} ${dance ? 'dance' : ''}`} data-testid="artwork">
            <div className="paper" style={{ background: BACKGROUND_CSS[background] }}>
              {src && size && alive ? (
                <svg viewBox={`0 0 ${size.w} ${size.h}`} style={{ mixBlendMode: blend }} role="img" aria-label={caption}>
                  <defs>
                    {[0, 1, 2].map((k) => (
                      <filter key={k} id={`boil-${k}`} x="-2%" y="-2%" width="104%" height="104%">
                        <feTurbulence type="turbulence" baseFrequency="0.012" numOctaves={2} seed={k * 7 + 1} />
                        <feDisplacementMap in="SourceGraphic" scale={Math.max(size.w, size.h) / 160} />
                      </filter>
                    ))}
                  </defs>
                  <image href={src} width={size.w} height={size.h} filter={`url(#boil-${seed})`} />
                </svg>
              ) : (
                src && <img src={src} alt={caption} style={{ mixBlendMode: blend }} />
              )}
            </div>
            {frame === 'polaroid' && <div className="caption">{caption}</div>}
          </div>
          {compare && (
            <figure className="compare card">
              <StepCanvas lesson={lesson} mode="final" />
              <figcaption className="muted">{t('result.original')}</figcaption>
            </figure>
          )}
        </div>

        <div className="result-panel stack">
          {feedback && (
            <section className="card praise" data-testid="praise">
              <h2>{feedback.headline}</h2>
              <p>{feedback.message}</p>
              <p className="next-tip">
                <strong>{t('result.nextTime')}:</strong> {feedback.nextTip}
              </p>
            </section>
          )}

          <NextChallenge lesson={lesson} />

          <section className="card stack" style={{ gap: 10 }}>
            <h3>{t('result.howDidItGo')}</h3>
            <div className="row">
              {PRIDE.map((p) => (
                <button key={p.id} className="chip pride" aria-pressed={photo.pride === p.id} onClick={() => choosePride(p.id)}>
                  <span aria-hidden="true">{p.emoji}</span> {t(`result.pride.${p.id}` as Key)}
                </button>
              ))}
            </div>
            {photo.pride && <p className="muted">{t(`result.pride.${photo.pride}Reply` as Key)}</p>}
          </section>

          <section className="card stack" style={{ gap: 12 }}>
            <h3>✨ {t('result.make')}</h3>
            <div className="row">
              <button className="chip" aria-pressed={white} onClick={() => setWhite((v) => !v)}>
                🧼 {t('result.white')}
              </button>
              <button className="chip" aria-pressed={alive} onClick={() => setAlive((v) => !v)} data-testid="toggle-alive">
                〰️ {t('result.alive')}
              </button>
              <button className="chip" aria-pressed={dance} onClick={() => setDance((v) => !v)}>
                💃 {t('result.dance')}
              </button>
              <button className="chip" aria-pressed={compare} onClick={() => setCompare((v) => !v)}>
                👀 {t('result.compare')}
              </button>
            </div>
            <div>
              <h4>{t('result.background')}</h4>
              <div className="chips">
                {BACKGROUNDS.map((b) => (
                  <button key={b} className="chip swatch-chip" aria-pressed={background === b} onClick={() => setBackground(b)}>
                    <i className="swatch" style={{ background: BACKGROUND_CSS[b] }} /> {t(`bg.${b}`)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4>{t('result.frame')}</h4>
              <div className="chips">
                {FRAMES.map((f) => (
                  <button key={f} className="chip" aria-pressed={frame === f} onClick={() => setFrame(f)}>
                    {t(`frame.${f}`)}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <div className="row">
            <button className="btn sky" onClick={share} data-testid="share">
              📤 {t('result.share')}
            </button>
            <button className="btn soft" onClick={save}>
              💾 {t('result.saveImage')}
            </button>
          </div>
          <div className="row">
            <Link to="/gallery" className="btn soft">
              🖼️ {t('result.gallery')}
            </Link>
            <Link to="/catalog" className="btn soft">
              ✏️ {t('result.newDrawing')}
            </Link>
          </div>
        </div>
      </div>

      {isNew && <BadgeCelebration profile={profile} />}
      {toast && <Toast text={toast} onDone={() => setToast(undefined)} />}
    </main>
  )
}
