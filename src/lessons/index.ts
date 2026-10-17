import type { Category, Lesson, Style, Sub } from './types'
import { warmupLines } from './teknik/warmup-lines'
import { dotsFish } from './prik/dots-fish'
import { dotsStar } from './prik/dots-star'
import { dotsHouse } from './prik/dots-house'
import { dotsRocket } from './prik/dots-rocket'
import { sunFlower } from './natur/sun-flower'
import { happyFace } from './mennesker/happy-face'
import { cat } from './dyr/cat'
import { catDetail } from './dyr/cat-detail'
import { cactus } from './natur/cactus'
import { tulip } from './natur/tulip'
import { sunflower } from './natur/sunflower'
import { sunflowerDetail } from './natur/sunflower-detail'
import { rose } from './natur/rose'
import { roseReal } from './natur/rose-real'
import { leaves } from './natur/leaves'
import { flowerVase } from './natur/flower-vase'
import { sunFlowerDetail } from './natur/sun-flower-detail'
import { mountains } from './natur/mountains'
import { beach } from './natur/beach'
import { mountainDepth } from './natur/mountain-depth'
import { sunsetSea } from './natur/sunset-sea'
import { emotions } from './mennesker/emotions'
import { happyFaceDetail } from './mennesker/happy-face-detail'
import { figure } from './mennesker/figure'
import { eyeReal } from './mennesker/eye-real'
import { noseMouth } from './mennesker/nose-mouth'
import { faceProfile } from './mennesker/face-profile'
import { hairstyles } from './mennesker/hairstyles'
import { portraitShaded } from './mennesker/portrait-shaded'
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
import { butterfly } from './dyr/butterfly'
import { penguin } from './dyr/penguin'
import { rabbit } from './dyr/rabbit'
import { parrot } from './dyr/parrot'
import { horse } from './dyr/horse'
import { foxReal } from './dyr/fox-real'
import { owlDetail } from './dyr/owl-detail'
import { fishDetail } from './dyr/fish-detail'
import { puppyDetail } from './dyr/puppy-detail'
import { robot } from './fantasi/robot'
import { unicorn } from './fantasi/unicorn'
import { dragon } from './fantasi/dragon'
import { airplane } from './ting/airplane'
import { lighthouse } from './ting/lighthouse'
import { castle } from './ting/castle'
import { houseDetail } from './ting/house-detail'
import { textures } from './teknik/textures'
import { cylinderCone } from './teknik/cylinder-cone'
import { appleStillLife } from './teknik/apple-still-life'

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
  catDetail,
  cactus,
  tulip,
  sunflower,
  sunflowerDetail,
  rose,
  roseReal,
  leaves,
  flowerVase,
  sunFlowerDetail,
  mountains,
  beach,
  mountainDepth,
  sunsetSea,
  emotions,
  happyFaceDetail,
  figure,
  eyeReal,
  noseMouth,
  faceProfile,
  hairstyles,
  portraitShaded,
  butterfly,
  penguin,
  rabbit,
  parrot,
  horse,
  foxReal,
  owlDetail,
  fishDetail,
  puppyDetail,
  robot,
  unicorn,
  dragon,
  airplane,
  lighthouse,
  castle,
  houseDetail,
  textures,
  cylinderCone,
  appleStillLife,
]

const byId = new Map(LESSONS.map((l) => [l.id, l]))

export function getLesson(id: string | undefined): Lesson | undefined {
  return id ? byId.get(id) : undefined
}

export const CATEGORIES: Category[] = ['prik', 'dyr', 'natur', 'mennesker', 'ting', 'fantasi', 'teknik']

export const SUBS: Partial<Record<Category, Sub[]>> = {
  dyr: ['fugle', 'fisk', 'landdyr', 'insekter'],
  natur: ['blomster', 'landskab'],
  mennesker: ['ansigter', 'krop'],
  ting: ['koeretoejer', 'bygninger', 'rummet'],
}

export const CATEGORY_ICON: Record<Category, string> = {
  prik: '🔢',
  dyr: '🐾',
  natur: '🌸',
  mennesker: '🙂',
  ting: '🚗',
  fantasi: '🐉',
  teknik: '✏️',
}

export const STYLE_ICON: Record<Style, string> = { enkel: '✏️', detaljer: '✨', naturtro: '🎨' }

export function styleOf(lesson: Lesson): Style {
  return lesson.style ?? 'enkel'
}

/** The subject a lesson belongs to: its own motif, else its base lesson's, else its id. */
export function motifOf(lesson: Lesson): string {
  if (lesson.motif) return lesson.motif
  const base = getLesson(lesson.base)
  return base ? motifOf(base) : lesson.id
}

/** Lessons that continue on this lesson's finished drawing ("Byg videre"). */
export function extensionsOf(id: string): Lesson[] {
  return LESSONS.filter((l) => l.base === id)
}

/** Other lessons of the same subject, simplest first. */
export function variantsOf(lesson: Lesson): Lesson[] {
  const motif = motifOf(lesson)
  return LESSONS.filter((l) => l.id !== lesson.id && motifOf(l) === motif).sort((a, b) => a.level - b.level)
}
