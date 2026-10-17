import { useRef, type ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StepCanvas } from '../components/StepCanvas'
import { BadgeCelebration, Confetti, NextChallenge } from '../components/ui'
import { useT } from '../i18n'
import type { Lesson } from '../lessons/types'
import { setPendingPhoto } from '../state/pending'
import type { Profile } from '../state/store'

export function LessonDone({ lesson, profile }: { lesson: Lesson; profile: Profile }) {
  const t = useT()
  const navigate = useNavigate()
  const cameraInput = useRef<HTMLInputElement>(null)
  const fileInput = useRef<HTMLInputElement>(null)

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    setPendingPhoto(file)
    navigate(`/lesson/${lesson.id}/photo`)
  }

  return (
    <main className="screen center done-screen">
      <Confetti />
      <BadgeCelebration profile={profile} />
      <div className="done-art card">
        <StepCanvas lesson={lesson} mode="final" />
      </div>
      <h1>{t('done.title', { name: profile.name })} 🎉</h1>
      <p className="lead muted" style={{ maxWidth: 620 }}>
        {t('done.text')}
      </p>
      <div className="row center">
        <button className="btn big" onClick={() => cameraInput.current?.click()} data-testid="take-photo">
          📷 {t('done.photo')}
        </button>
        <button className="btn big soft" onClick={() => fileInput.current?.click()}>
          🖼️ {t('done.choose')}
        </button>
      </div>
      <input ref={cameraInput} type="file" accept="image/*" capture="environment" hidden onChange={onFile} data-testid="photo-input" />
      <input ref={fileInput} type="file" accept="image/*" hidden onChange={onFile} />
      <NextChallenge lesson={lesson} />
      <div className="row center">
        <Link to={`/lesson/${lesson.id}/step/1`} className="btn soft" replace>
          ↻ {t('done.again')}
        </Link>
        <Link to="/catalog" className="btn soft">
          {t('done.newOne')}
        </Link>
        <Link to="/home" className="btn soft">
          {t('done.skip')}
        </Link>
      </div>
    </main>
  )
}
