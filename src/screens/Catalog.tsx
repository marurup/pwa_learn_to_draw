import { useSearchParams } from 'react-router-dom'
import { LessonCard, TopBar } from '../components/ui'
import { useT } from '../i18n'
import { CATEGORIES, CATEGORY_ICON, LESSONS, STYLE_ICON, SUBS, styleOf } from '../lessons'
import { STYLES, type Category, type Level, type Style, type Sub } from '../lessons/types'
import type { Profile } from '../state/store'

export function Catalog({ profile }: { profile: Profile }) {
  const t = useT()
  const [params, setParams] = useSearchParams()
  const cat = params.get('cat') as Category | null
  const sub = params.get('sub') as Sub | null
  const level = params.get('level') ? (Number(params.get('level')) as Level) : null
  const style = params.get('style') as Style | null

  const set = (key: string, value: string | null) => {
    const next = new URLSearchParams(params)
    if (value === null) next.delete(key)
    else next.set(key, value)
    if (key === 'cat') next.delete('sub')
    setParams(next, { replace: true })
  }

  const lessons = LESSONS.filter(
    (l) =>
      (!cat || l.category === cat) &&
      (!sub || l.sub === sub) &&
      (!level || l.level === level) &&
      (!style || styleOf(l) === style),
  )
  const subs = cat ? SUBS[cat] : undefined

  return (
    <main className="screen">
      <TopBar back="/home" title={t('catalog.title')} />

      <div className="filters stack" style={{ gap: 4 }}>
        <div className="chips" role="toolbar">
          <button className="chip" aria-pressed={!cat} onClick={() => set('cat', null)}>
            {t('catalog.all')}
          </button>
          {CATEGORIES.map((c) => (
            <button key={c} className="chip" aria-pressed={cat === c} onClick={() => set('cat', c)} data-testid={`cat-${c}`}>
              <span aria-hidden="true">{CATEGORY_ICON[c]}</span> {t(`cat.${c}`)}
            </button>
          ))}
        </div>
        {subs && (
          <div className="chips" role="toolbar">
            <button className="chip small" aria-pressed={!sub} onClick={() => set('sub', null)}>
              {t('catalog.all')}
            </button>
            {subs.map((s) => (
              <button key={s} className="chip small" aria-pressed={sub === s} onClick={() => set('sub', s)}>
                {t(`sub.${s}`)}
              </button>
            ))}
          </div>
        )}
        <div className="chips" role="toolbar">
          <button className="chip small" aria-pressed={!level} onClick={() => set('level', null)}>
            {t('catalog.allLevels')}
          </button>
          {([1, 2, 3, 4] as Level[]).map((lv) => (
            <button key={lv} className="chip small" aria-pressed={level === lv} onClick={() => set('level', String(lv))}>
              {lv}. {t(`level.${lv}`)}
            </button>
          ))}
        </div>
        <div className="chips" role="toolbar">
          <button className="chip small" aria-pressed={!style} onClick={() => set('style', null)}>
            {t('catalog.allStyles')}
          </button>
          {STYLES.map((st) => (
            <button key={st} className="chip small" aria-pressed={style === st} onClick={() => set('style', st)} data-testid={`style-${st}`}>
              <span aria-hidden="true">{STYLE_ICON[st]}</span> {t(`style.${st}`)}
            </button>
          ))}
        </div>
      </div>

      {lessons.length ? (
        <div className="lesson-grid">
          {lessons.map((l) => (
            <LessonCard key={l.id} lesson={l} done={!!profile.progress[l.id]?.completedAt} />
          ))}
        </div>
      ) : (
        <p className="empty">{t('catalog.empty')}</p>
      )}
    </main>
  )
}
