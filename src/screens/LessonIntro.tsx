import { Link } from 'react-router-dom'
import { StepCanvas, canvasAspect } from '../components/StepCanvas'
import { LevelDots, Materials, TopBar } from '../components/ui'
import { useBack } from '../hooks/useBack'
import { useT, useTL } from '../i18n'
import type { Lesson } from '../lessons/types'

export function LessonIntro({ lesson }: { lesson: Lesson }) {
  const t = useT()
  const tl = useTL()
  const back = useBack('/catalog')
  const isDots = !!lesson.dots

  return (
    <main className="screen">
      <TopBar back={back} />
      <div className="intro-layout">
        <div className="card canvas-card" style={canvasAspect(lesson)}>
          <StepCanvas lesson={lesson} mode="final" />
        </div>
        <div className="stack">
          <h1>{tl(lesson.title)}</h1>
          <p className="row muted" style={{ gap: 10 }}>
            <LevelDots level={lesson.level} />
            <span>{t('level.label', { n: lesson.level, name: t(`level.${lesson.level}`) })}</span>
            <span>· {t('lesson.steps', { n: lesson.steps.length })}</span>
            <span>· {t('catalog.minutes', { n: lesson.minutes })}</span>
          </p>
          <p className="lead">{tl(lesson.intro)}</p>
          <div>
            <h3>{t('lesson.youNeed')}</h3>
            <Materials lesson={lesson} />
          </div>
          <div className="stack" style={{ gap: 14, marginTop: 8 }}>
            <Link to={`/lesson/${lesson.id}/step/1`} className="btn big leaf" data-testid="start-lesson">
              {t('lesson.start')} ▶
            </Link>
            <div className="row">
              <Link to={`/lesson/${lesson.id}/print`} className="btn soft">
                🖨️ {isDots ? t('lesson.print') : t('lesson.printSheet')}
              </Link>
              {lesson.level <= 2 && (
                <Link to={`/lesson/${lesson.id}/trace`} className="btn soft">
                  📄 {t('lesson.trace')}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
