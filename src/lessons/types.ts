export type Lang = 'da' | 'en'
export const LANGS: Lang[] = ['da', 'en']

/** A text in every supported language. */
export type L10n = Record<Lang, string>

export type Level = 1 | 2 | 3 | 4

export type Category = 'prik' | 'dyr' | 'ting' | 'mennesker' | 'natur' | 'fantasi' | 'hoejtider' | 'spil' | 'teknik'
export type Sub =
  | 'fugle'
  | 'fisk'
  | 'landdyr'
  | 'insekter'
  | 'koeretoejer'
  | 'bygninger'
  | 'rummet'
  | 'blomster'
  | 'landskab'
  | 'ansigter'
  | 'krop'
  | 'dukker'
  | 'maskiner'
  | 'havfruer'
  | 'eventyr'
  | 'isriget'
  | 'rumeventyr'
  | 'halloween'
  | 'jul'
  | 'nytaar'
  | 'paaske'
  | 'fastelavn'
  | 'foedselsdag'
  | 'sankthans'
  | 'hjerter'
  | 'blokke'
  | 'spilfigurer'
  | 'raketbiler'

/** How the motif is drawn: simple shapes, with extra details, or as true to life as possible. */
export type Style = 'enkel' | 'detaljer' | 'naturtro'
export const STYLES: Style[] = ['enkel', 'detaljer', 'naturtro']

export type Material = 'pencil' | 'eraser' | 'paper' | 'ruler' | 'colors'

/**
 * One mark in the drawing, as SVG path data in a 400×400 space (unless the lesson sets viewBox).
 * - line: a pencil line (animated when it is new)
 * - guide: a light helper line, drawn dashed; usually erased in a later step
 * - shade: a filled area (tone, soft blended tone, hatching, gradients, or white paper for highlights)
 */
export interface Stroke {
  d: string
  kind?: 'line' | 'guide' | 'shade'
  /** Lets a later step erase this stroke. */
  id?: string
  /**
   * Shade fill style. 'soft' is a blended (smudged) tone; 'gradient' fades from light (left) to dark (right),
   * 'fade-down' from dark (top) to light, 'fade-up' from light (top) to dark; 'paper' is white and is painted
   * on top of other shading – for highlights that are left (or erased) white.
   */
  fill?: 'tone' | 'soft' | 'hatch' | 'cross' | 'sphere' | 'gradient' | 'fade-down' | 'fade-up' | 'paper'
  /** Darkness 0..1 for fill 'tone' and 'soft'. */
  tone?: number
  /** Line thickness multiplier (e.g. 1.6 for "press harder"). */
  weight?: number
  /** Lighter lines (0..1), e.g. fine hair or fur strokes. */
  opacity?: number
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
  /**
   * Builds on another lesson: its finished drawing is already on the paper (shown as drawn), and this
   * lesson adds to it. Steps may erase the base lesson's strokes by id.
   */
  base?: string
  /** Lessons of the same subject share a motif (defaults to the base lesson's motif, then the id). */
  motif?: string
  /** Defaults to 'enkel'. */
  style?: Style
}
