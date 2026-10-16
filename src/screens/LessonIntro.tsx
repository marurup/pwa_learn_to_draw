import { Link } from 'react-router-dom'
import { StepCanvas, canvasAspect } from '../components/StepCanvas'
import { LevelDots, Materials, StyleBadge, TopBar } from '../components/ui'
import { useBack } from '../hooks/useBack'
import { useT, useTL } from '../i18n'
import { getLesson, styleOf, variantsOf } from '../lessons'
import type { Lesson } from '../lessons/types'

export function LessonIntro({ lesson }: { lesson: Lesson }) {
  const t = useT()
  const tl = useTL()
  const back = useBack('/catalog')
  const isDots = !!lesson.dots
  const base = getLesson(lesson.base)
  const variants = variantsOf(lesson)

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
            <StyleBadge style={styleOf(lesson)} />
          </p>
          <p className="lead">{tl(lesson.intro)}</p>
          {base && (
            <div className="builds-on" data-testid="builds-on">
              <Link to={`/lesson/${base.id}`} className="mini-thumb" aria-label={tl(base.title)}>
                <StepCanvas lesson={base} mode="thumb" />
              </Link>
              <div className="stack" style={{ gap: 6 }}>
                <strong>{t('lesson.buildsOn', { title: tl(base.title) })}</strong>
                <span className="muted">{t('lesson.buildsOnText')}</span>
                <Link to={`/lesson/${base.id}`} className="link">
                  {t('lesson.drawBaseFirst')} →
                </Link>
              </div>
            </div>
          )}
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
          {variants.length > 0 && (
            <div className="stack" style={{ gap: 8 }}>
              <h3>{t('lesson.otherVersions')}</h3>
              <div className="variants">
                {variants.map((v) => (
                  <Link key={v.id} to={`/lesson/${v.id}`} className="variant" replace>
                    <span className="mini-thumb">
                      <StepCanvas lesson={v} mode="thumb" />
                    </span>
                    <span>
                      {tl(v.title)}
                      <br />
                      <StyleBadge style={styleOf(v)} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
