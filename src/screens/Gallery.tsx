import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { TopBar } from '../components/ui'
import { useObjectUrl } from '../hooks/useObjectUrl'
import { useLang, useT, useTL } from '../i18n'
import { LESSONS, getLesson } from '../lessons'
import { computeBadges } from '../lessons/badges'
import { actions, type Profile } from '../state/store'
import { deletePhoto, listPhotos, type Photo } from '../state/gallery'

function Thumb({ photo }: { photo: Photo }) {
  const url = useObjectUrl(photo.enhanced)
  return url ? <img src={url} alt="" loading="lazy" /> : null
}

export function Gallery({ profile }: { profile: Profile }) {
  const t = useT()
  const tl = useTL()
  const lang = useLang()
  const [photos, setPhotos] = useState<Photo[]>()

  useEffect(() => {
    let live = true
    listPhotos(profile.id).then((p) => live && setPhotos(p))
    return () => {
      live = false
    }
  }, [profile.id])

  const badges = useMemo(() => computeBadges(profile, LESSONS), [profile])
  const finished = Object.values(profile.progress).filter((p) => p.completedAt).length

  const remove = async (photo: Photo) => {
    if (!window.confirm(t('gallery.confirmDelete'))) return
    await deletePhoto(photo.id)
    actions.removePhoto(profile.id, photo.lessonId)
    setPhotos((list) => list?.filter((p) => p.id !== photo.id))
  }

  return (
    <main className="screen">
      <TopBar back="/home" title={t('gallery.title', { name: profile.name })} />
      <p className="muted">{t('gallery.stats', { n: finished, p: photos?.length ?? 0 })}</p>

      <section className="stack" style={{ gap: 12 }}>
        <h3>{t('gallery.badges')}</h3>
        <div className="badge-row">
          {badges.map((b) => (
            <div key={b.id} className={`badge ${b.earned ? 'earned' : ''}`} title={t(b.desc)}>
              <span className="badge-icon">{b.icon}</span>
              <span className="badge-name">{t(b.title)}</span>
              <span className="badge-desc">{t(b.desc)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="stack" style={{ gap: 12 }}>
        <h3>{t('gallery.drawings')}</h3>
        {photos && photos.length === 0 && (
          <div className="empty card">
            <p className="lead">{t('gallery.empty')}</p>
            <Link to="/catalog" className="btn" style={{ marginTop: 16 }}>
              ✏️ {t('result.newDrawing')}
            </Link>
          </div>
        )}
        <div className="photo-grid">
          {photos?.map((p) => {
            const lesson = getLesson(p.lessonId)
            return (
              <figure key={p.id} className="photo-card">
                <Link to={`/result/${p.id}`}>
                  <Thumb photo={p} />
                </Link>
                <figcaption>
                  <span>
                    {lesson ? tl(lesson.title) : ''}
                    <small className="muted"> · {new Date(p.createdAt).toLocaleDateString(lang === 'da' ? 'da-DK' : 'en-GB')}</small>
                  </span>
                  <button className="icon-btn small" aria-label={t('common.delete')} onClick={() => remove(p)}>
                    🗑️
                  </button>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </section>
    </main>
  )
}
