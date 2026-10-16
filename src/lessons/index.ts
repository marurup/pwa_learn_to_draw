import type { Category, Lesson, Sub } from './types'
import { warmupLines } from './teknik/warmup-lines'
import { dotsFish } from './prik/dots-fish'
import { dotsStar } from './prik/dots-star'
import { dotsHouse } from './prik/dots-house'
import { dotsRocket } from './prik/dots-rocket'
import { sunFlower } from './natur/sun-flower'
import { happyFace } from './mennesker/happy-face'
import { cat } from './dyr/cat'

/** Every lesson, in the order they appear in the catalog (easiest first). */
export const LESSONS: Lesson[] = [
  warmupLines,
  dotsFish,
  dotsStar,
  dotsHouse,
  dotsRocket,
  sunFlower,
  happyFace,
  cat,
]

const byId = new Map(LESSONS.map((l) => [l.id, l]))

export function getLesson(id: string | undefined): Lesson | undefined {
  return id ? byId.get(id) : undefined
}

export const CATEGORIES: Category[] = ['prik', 'dyr', 'ting', 'mennesker', 'natur', 'teknik']

export const SUBS: Partial<Record<Category, Sub[]>> = {
  dyr: ['fugle', 'fisk', 'landdyr'],
  ting: ['koeretoejer', 'bygninger', 'rummet'],
}

export const CATEGORY_ICON: Record<Category, string> = {
  prik: '🔢',
  dyr: '🐾',
  ting: '🚗',
  mennesker: '🙂',
  natur: '🌳',
  teknik: '✏️',
}
