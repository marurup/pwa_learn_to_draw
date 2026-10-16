import { useEffect, useState } from 'react'
import Cropper from 'react-easy-crop'
import { Navigate, useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui'
import { useObjectUrl } from '../hooks/useObjectUrl'
import { cropPhoto, loadImage, whitenPaper, type Area } from '../feedback/effects'
import { useT } from '../i18n'
import type { Lesson } from '../lessons/types'
import { savePhoto } from '../state/gallery'
import { clearPendingPhoto, peekPendingPhoto } from '../state/pending'
import { actions, type Profile } from '../state/store'

const ASPECTS = [
  { id: 'portrait', value: 3 / 4, icon: '▯' },
  { id: 'square', value: 1, icon: '◻' },
  { id: 'landscape', value: 4 / 3, icon: '▭' },
]

export function PhotoAdjust({ lesson, profile }: { lesson: Lesson; profile: Profile }) {
  const t = useT()
  const navigate = useNavigate()
  const [file] = useState(() => peekPendingPhoto())
  const url = useObjectUrl(file)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [aspect, setAspect] = useState(3 / 4)
  const [area, setArea] = useState<Area>()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    // Start with the aspect that matches the photo.
    loadImage(url)
      .then((img) => setAspect(img.naturalWidth > img.naturalHeight ? 4 / 3 : 3 / 4))
      .catch(() => setError(true))
  }, [url])

  if (!file) return <Navigate to={`/lesson/${lesson.id}/done`} replace />

  const save = async () => {
    if (!area) return
    setBusy(true)
    try {
      const image = await cropPhoto(file, area, rotation)
      const enhanced = await whitenPaper(image)
      const photo = await savePhoto({ profileId: profile.id, lessonId: lesson.id, image, enhanced })
      actions.addPhoto(profile.id, lesson.id)
      clearPendingPhoto()
      navigate(`/result/${photo.id}?new=1`, { replace: true })
    } catch {
      setError(true)
      setBusy(false)
    }
  }

  return (
    <main className="screen photo-screen">
      <TopBar back={() => navigate(`/lesson/${lesson.id}/done`, { replace: true })} title={t('photo.title')} />
      <p className="muted">{t('photo.hint')}</p>
      {error && <p className="notice">{t('photo.error')}</p>}
      <div className="crop-area">
        {url && (
          <Cropper
            image={url}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(_, pixels) => setArea(pixels)}
            objectFit="contain"
            showGrid={false}
          />
        )}
      </div>
      <div className="row center photo-tools">
        <button className="icon-btn" aria-label={`${t('photo.rotate')} ←`} onClick={() => setRotation((r) => (r + 270) % 360)}>
          ↺
        </button>
        <button className="icon-btn" aria-label={`${t('photo.rotate')} →`} onClick={() => setRotation((r) => (r + 90) % 360)}>
          ↻
        </button>
        {ASPECTS.map((a) => (
          <button key={a.id} className="chip" aria-pressed={aspect === a.value} onClick={() => setAspect(a.value)} aria-label={a.id}>
            {a.icon}
          </button>
        ))}
        <label className="zoom">
          <span>{t('photo.zoom')}</span>
          <input type="range" min={1} max={4} step={0.05} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} />
        </label>
      </div>
      <div className="row center">
        <button className="btn big leaf" disabled={!area || busy} onClick={save} data-testid="save-photo">
          {busy ? t('photo.saving') : `✓ ${t('photo.save')}`}
        </button>
      </div>
    </main>
  )
}
