import { StepCanvas } from '../components/StepCanvas'
import { TopBar } from '../components/ui'
import { useBack } from '../hooks/useBack'
import { useT, useTL } from '../i18n'
import type { Lesson } from '../lessons/types'

/** A printable A4 sheet: the numbered dots of a dot-to-dot, or the finished drawing to copy. */
export function PrintSheet({ lesson }: { lesson: Lesson }) {
  const t = useT()
  const tl = useTL()
  const back = useBack(`/lesson/${lesson.id}`)
  const isDots = !!lesson.dots

  return (
    <main className="screen print-screen">
      <div className="no-print stack">
        <TopBar back={back} title={tl(lesson.title)}>
          <button className="btn" onClick={() => window.print()}>
            🖨️ {t('print.print')}
          </button>
        </TopBar>
        <p className="muted">{isDots ? t('print.hint') : t('print.hintSheet')}</p>
      </div>
      <article className="sheet">
        <header className="sheet-head">
          <h1>{tl(lesson.title)}</h1>
          <span>
            {t('print.name')} <span className="name-line" />
          </span>
        </header>
        <div className="sheet-art">
          <StepCanvas lesson={lesson} mode="print" dotsOnly={isDots} />
        </div>
        <footer className="sheet-foot">{t('app.name')}</footer>
      </article>
    </main>
  )
}
