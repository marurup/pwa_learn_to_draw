import { describe, expect, it } from 'vitest'
import { CATEGORIES, LESSONS, SUBS, getLesson } from './index'
import { composeStep } from './compose'
import type { L10n, Lesson } from './types'

const ARITY: Record<string, number> = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7, z: 0 }

/** Checks SVG path data: starts with a move, only known commands, right number of arguments. */
function pathProblems(d: string): string[] {
  const problems: string[] = []
  if (!/^\s*[Mm]/.test(d)) problems.push('does not start with M')
  if (/[^MmLlHhVvCcSsQqTtAaZz0-9eE.,\s-]/.test(d)) problems.push('contains unexpected characters')
  const parts = d.match(/[A-Za-z][^A-Za-z]*/g) ?? []
  for (const part of parts) {
    const cmd = part[0].toLowerCase()
    const nums = part.slice(1).match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? []
    if (nums.some((n) => Number.isNaN(Number(n)))) problems.push(`bad number in "${part}"`)
    const arity = ARITY[cmd]
    if (arity === undefined) problems.push(`unknown command ${part[0]}`)
    else if (arity === 0 ? nums.length !== 0 : nums.length === 0 || nums.length % arity !== 0)
      problems.push(`"${part.trim()}" has ${nums.length} numbers`)
  }
  return problems
}

function texts(lesson: Lesson): L10n[] {
  return [
    lesson.title,
    lesson.intro,
    ...(lesson.praise ?? []),
    ...(lesson.nextTip ? [lesson.nextTip] : []),
    ...lesson.steps.flatMap((s) => [s.text, ...(s.tip ? [s.tip] : []), ...(s.labels ?? []).map((l) => l.text)]),
  ]
}

describe('lesson catalogue', () => {
  it('has unique ids', () => {
    const ids = LESSONS.map((l) => l.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('covers every level and category', () => {
    for (const level of [1, 2, 3, 4]) expect(LESSONS.some((l) => l.level === level)).toBe(true)
    for (const cat of CATEGORIES) expect(LESSONS.some((l) => l.category === cat)).toBe(true)
  })

  it('includes birds, fish and land animals, vehicles, houses and space', () => {
    for (const subs of Object.values(SUBS)) for (const sub of subs ?? []) expect(LESSONS.some((l) => l.sub === sub)).toBe(true)
  })

  it('finds lessons by id', () => {
    expect(getLesson('cat')?.id).toBe('cat')
    expect(getLesson('nope')).toBeUndefined()
    expect(getLesson(undefined)).toBeUndefined()
  })
})

describe.each(LESSONS.map((l) => [l.id, l] as const))('lesson %s', (_, lesson) => {
  it('has at least three steps, and every step says what to do', () => {
    expect(lesson.steps.length).toBeGreaterThanOrEqual(3)
    lesson.steps.forEach((s) => expect(s.text.da.length).toBeGreaterThan(5))
  })

  it('has every text in both Danish and English', () => {
    for (const t of texts(lesson)) {
      expect(t.da.trim(), JSON.stringify(t)).not.toBe('')
      expect(t.en.trim(), JSON.stringify(t)).not.toBe('')
    }
  })

  it('uses valid SVG path data', () => {
    lesson.steps.forEach((step, i) =>
      step.strokes?.forEach((s, j) => expect(pathProblems(s.d), `step ${i + 1}, stroke ${j + 1}: ${s.d}`).toEqual([])),
    )
  })

  it('only erases strokes that were drawn in an earlier step', () => {
    const seen = new Set<string>()
    lesson.steps.forEach((step, i) => {
      if (Array.isArray(step.erase)) {
        for (const id of step.erase) if (id !== 'guides') expect(seen.has(id), `step ${i + 1} erases "${id}"`).toBe(true)
      }
      step.strokes?.forEach((s) => s.id && seen.add(s.id))
      step.labels?.forEach((l) => l.id && seen.add(l.id))
    })
  })

  it('finishes with something on the paper and no guide lines', () => {
    const final = composeStep(lesson, 0, true)
    expect(final.strokes.length).toBeGreaterThan(0)
    expect(final.strokes.some((s) => s.stroke.kind === 'guide')).toBe(false)
  })

  it('keeps dot-to-dot points inside the drawing area', () => {
    for (const [x, y] of lesson.dots ?? []) {
      expect(x).toBeGreaterThanOrEqual(0)
      expect(x).toBeLessThanOrEqual(400)
      expect(y).toBeGreaterThanOrEqual(0)
      expect(y).toBeLessThanOrEqual(400)
    }
  })
})
