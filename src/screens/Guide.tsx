import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StepCanvas } from '../components/StepCanvas'
import { LessonCard, TopBar } from '../components/ui'
import { useT, type Key } from '../i18n'
import { LESSONS, getLesson, styleOf } from '../lessons'
import { INTERESTS, levelForAge, recommend, type Interest } from '../lessons/recommend'
import { STYLES, type Level, type Style } from '../lessons/types'
import type { Profile } from '../state/store'

const LEVEL_EXAMPLE: Record<Level, string> = { 1: 'dots-fish', 2: 'cat', 3: 'owl', 4: 'sphere-shading' }
const STYLE_EXAMPLE: Record<Style, string> = { enkel: 'cat', detaljer: 'cat-detail', naturtro: 'eye-real' }
const INTEREST_ICON: Record<Interest, string> = {
  animals: '🐾',
  flowers: '🌸',
  people: '🙂',
  things: '🏍️',
  fantasy: '🧜‍♀️',
  holidays: '🎄',
  games: '🎮',
  technique: '🌗',
  surprise: '🎁',
}

export function Guide({ profile }: { profile: Profile }) {
  const t = useT()
  const navigate = useNavigate()
  const [level, setLevel] = useState<Level | undefined>()
  const [interest, setInterest] = useState<Interest | undefined>()
  const [style, setStyle] = useState<Style | undefined>()
  const ageLevel = levelForAge(profile.age)

  const completed = useMemo(
    () => new Set(Object.entries(profile.progress).filter(([, p]) => p.completedAt).map(([id]) => id)),
    [profile.progress],
  )
  const picks = useMemo(
    () => (level && interest && style ? recommend(LESSONS, level, interest, completed, 3, Math.random, style) : []),
    [level, interest, style, completed],
  )

  const back = () => {
    if (style) setStyle(undefined)
    else if (interest) setInterest(undefined)
    else if (level) setLevel(undefined)
    else navigate('/home')
  }

  return (
    <main className="screen">
      <TopBar back={back} />

      {!level && (
        <section className="stack">
          <h1>{t('guide.q1')}</h1>
          <div className="choice-grid">
            {([1, 2, 3, 4] as Level[]).map((lv) => {
              const example = getLesson(LEVEL_EXAMPLE[lv]) ?? LESSONS.find((l) => l.level === lv)
              return (
                <button key={lv} className="choice" onClick={() => setLevel(lv)} data-testid={`level-${lv}`}>
                  {example && (
                    <span className="thumbs">
                      <StepCanvas lesson={example} mode="thumb" />
                    </span>
                  )}
                  {t(`guide.l${lv}` as Key)}
                  {lv === ageLevel && <span className="badge-suggested">{t('guide.suggested')}</span>}
                </button>
              )
            })}
          </div>
        </section>
      )}

      {level && !interest && (
        <section className="stack">
          <h1>{t('guide.q2')}</h1>
          <div className="choice-grid">
            {INTERESTS.map((i) => (
              <button key={i} className="choice" onClick={() => setInterest(i)} data-testid={`interest-${i}`}>
                <span className="emoji" aria-hidden="true">
                  {INTEREST_ICON[i]}
                </span>
                {t(`guide.i.${i}` as Key)}
              </button>
            ))}
          </div>
        </section>
      )}

      {level && interest && !style && (
        <section className="stack">
          <h1>{t('guide.q3')}</h1>
          <div className="choice-grid">
            {STYLES.map((st) => {
              const example = getLesson(STYLE_EXAMPLE[st]) ?? LESSONS.find((l) => styleOf(l) === st)
              return (
                <button key={st} className="choice" onClick={() => setStyle(st)} data-testid={`style-${st}`}>
                  {example && (
                    <span className="thumbs">
                      <StepCanvas lesson={example} mode="thumb" />
                    </span>
                  )}
                  {t(`guide.s.${st}` as Key)}
                </button>
              )
            })}
          </div>
        </section>
      )}

      {level && interest && style && (
        <section className="stack">
          <h1>{t('guide.result', { name: profile.name })}</h1>
          <div className="lesson-grid">
            {picks.map((l) => (
              <LessonCard key={l.id} lesson={l} done={completed.has(l.id)} />
            ))}
          </div>
          <div className="row center">
            <Link to="/catalog" className="btn soft">
              {t('guide.all')}
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}
