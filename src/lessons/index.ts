import type { Category, Lesson, Sub } from './types'
import { warmupLines } from './teknik/warmup-lines'
import { dotsFish } from './prik/dots-fish'
import { dotsStar } from './prik/dots-star'
import { dotsHouse } from './prik/dots-house'
import { dotsRocket } from './prik/dots-rocket'
import { sunFlower } from './natur/sun-flower'
import { happyFace } from './mennesker/happy-face'
import { cat } from './dyr/cat'
import { fish } from './dyr/fish'
import { bird } from './dyr/bird'
import { house } from './ting/house'
import { car } from './ting/car'
import { rocket } from './ting/rocket'
import { tree } from './natur/tree'
import { faceProportions } from './mennesker/face-proportions'
import { owl } from './dyr/owl'
import { puppy } from './dyr/puppy'
import { dolphin } from './dyr/dolphin'
import { elephant } from './dyr/elephant'
import { toneScale } from './teknik/tone-scale'
import { hatching } from './teknik/hatching'
import { sphereShading } from './teknik/sphere-shading'
import { perspective1pt } from './teknik/perspective-1pt'
import { perspective2pt } from './teknik/perspective-2pt'
import { stylesCat } from './teknik/styles-cat'

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
  fish,
  bird,
  house,
  car,
  rocket,
  tree,
  faceProportions,
  owl,
  puppy,
  dolphin,
  elephant,
  toneScale,
  hatching,
  sphereShading,
  perspective1pt,
  perspective2pt,
  stylesCat,
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
