import type { Label, Lesson, Stroke } from './types'

export interface StrokeItem {
  key: string
  stroke: Stroke
  /** Added in the step being shown (highlighted and animated). */
  current: boolean
}

export interface LabelItem {
  key: string
  label: Label
  current: boolean
}

export interface Composition {
  strokes: StrokeItem[]
  labels: LabelItem[]
}

/**
 * Everything visible on the paper at `stepIndex`: strokes from earlier steps (minus the ones rubbed
 * out) plus the strokes of this step. `final` shows the finished drawing without guides or labels.
 */
export function composeStep(lesson: Lesson, stepIndex: number, final = false): Composition {
  const last = lesson.steps.length - 1
  const upTo = final ? last : Math.max(0, Math.min(stepIndex, last))
  let strokes: StrokeItem[] = []
  let labels: LabelItem[] = []

  for (let i = 0; i <= upTo; i++) {
    const step = lesson.steps[i]
    const ids = new Set(step.erase === 'guides' ? ['guides'] : (step.erase ?? []))
    if (ids.has('guides')) {
      strokes = strokes.filter((s) => s.stroke.kind !== 'guide')
      labels = []
    }
    if (ids.size) {
      strokes = strokes.filter((s) => !s.stroke.id || !ids.has(s.stroke.id))
      labels = labels.filter((l) => !l.label.id || !ids.has(l.label.id))
    }
    const current = !final && i === upTo
    step.strokes?.forEach((stroke, j) => strokes.push({ key: `${i}.${j}`, stroke, current }))
    step.labels?.forEach((label, j) => labels.push({ key: `${i}.l${j}`, label, current }))
  }

  if (final) {
    strokes = strokes.filter((s) => s.stroke.kind !== 'guide')
    labels = []
  }
  return { strokes, labels }
}

/** Where to put the number next to each dot: pushed outwards from the middle of the shape. */
export function dotNumberPositions(dots: [number, number][], distance = 16): [number, number][] {
  const cx = dots.reduce((s, d) => s + d[0], 0) / dots.length
  const cy = dots.reduce((s, d) => s + d[1], 0) / dots.length
  return dots.map(([x, y]) => {
    const dx = x - cx
    const dy = y - cy
    const len = Math.hypot(dx, dy) || 1
    return [x + (dx / len) * distance, y + (dy / len) * distance]
  })
}
