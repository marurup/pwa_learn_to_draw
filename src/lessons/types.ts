export type Lang = 'da' | 'en'
export const LANGS: Lang[] = ['da', 'en']

/** A text in every supported language. */
export type L10n = Record<Lang, string>

export type Level = 1 | 2 | 3 | 4

export type Category = 'prik' | 'dyr' | 'ting' | 'mennesker' | 'natur' | 'teknik'
export type Sub = 'fugle' | 'fisk' | 'landdyr' | 'koeretoejer' | 'bygninger' | 'rummet'

export type Material = 'pencil' | 'eraser' | 'paper' | 'ruler' | 'colors'

/**
 * One mark in the drawing, as SVG path data in a 400×400 space (unless the lesson sets viewBox).
 * - line: a pencil line (animated when it is new)
 * - guide: a light helper line, drawn dashed; usually erased in a later step
 * - shade: a filled area (tone, hatching or the sphere gradient)
 */
export interface Stroke {
  d: string
  kind?: 'line' | 'guide' | 'shade'
  /** Lets a later step erase this stroke. */
  id?: string
  /** Shade fill style. */
  fill?: 'tone' | 'hatch' | 'cross' | 'sphere' | 'gradient'
  /** Darkness 0..1 for fill 'tone'. */
  tone?: number
  /** Line thickness multiplier (e.g. 1.6 for "press harder"). */
  weight?: number
}

export interface Label {
  x: number
  y: number
  text: L10n
  id?: string
  anchor?: 'start' | 'middle' | 'end'
}

export interface Step {
  text: L10n
  tip?: L10n
  strokes?: Stroke[]
  labels?: Label[]
  /** Ids of earlier strokes/labels to rub out from this step on; 'guides' rubs out every guide (and label). */
  erase?: 'guides' | string[]
}

export interface Lesson {
  id: string
  title: L10n
  category: Category
  sub?: Sub
  level: Level
  minutes: number
  /** Defaults to "0 0 400 400". */
  viewBox?: string
  intro: L10n
  steps: Step[]
  /** Dot-to-dot points, numbered from 1 in array order. */
  dots?: [number, number][]
  materials?: Material[]
  /** Lesson-specific praise used on the result screen. */
  praise?: L10n[]
  /** "Next time, try …" suggestion. */
  nextTip?: L10n
}
