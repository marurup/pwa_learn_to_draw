import { describe, expect, it } from 'vitest'
import type { Profile } from '../state/store'
import { computeBadges, newBadges } from './badges'
import { composeStep, dotNumberPositions } from './compose'
import { LESSONS } from './index'
import { levelForAge, matchesInterest, recommend } from './recommend'
import { hatch, intersect, mirrorX, pixels, transform } from './shapes'
import type { Lesson } from './types'

const t = { da: 'x', en: 'x' }
const lesson: Lesson = {
  id: 'test',
  title: t,
  intro: t,
  category: 'dyr',
  level: 2,
  minutes: 5,
  steps: [
    { text: t, strokes: [{ d: 'M0 0 L1 1', id: 'a' }, { d: 'M0 0 L2 2', kind: 'guide', id: 'g' }] },
    { text: t, strokes: [{ d: 'M0 0 L3 3' }], labels: [{ x: 0, y: 0, text: t }] },
    { text: t, erase: ['a'], strokes: [{ d: 'M0 0 L4 4' }] },
    { text: t, erase: 'guides' },
  ],
}

describe('composeStep', () => {
  it('shows earlier strokes and highlights the new ones', () => {
    const c = composeStep(lesson, 1)
    expect(c.strokes.map((s) => [s.stroke.d, s.current])).toEqual([
      ['M0 0 L1 1', false],
      ['M0 0 L2 2', false],
      ['M0 0 L3 3', true],
    ])
    expect(c.labels).toHaveLength(1)
  })

  it('rubs out strokes by id and all guides with "guides"', () => {
    expect(composeStep(lesson, 2).strokes.map((s) => s.stroke.d)).toEqual(['M0 0 L2 2', 'M0 0 L3 3', 'M0 0 L4 4'])
    const last = composeStep(lesson, 3)
    expect(last.strokes.map((s) => s.stroke.d)).toEqual(['M0 0 L3 3', 'M0 0 L4 4'])
    expect(last.labels).toHaveLength(0)
  })

  it('shows the finished drawing without guides in final mode', () => {
    const final = composeStep(lesson, 0, true)
    expect(final.strokes.every((s) => !s.current && s.stroke.kind !== 'guide')).toBe(true)
  })

  it('clamps the step number', () => {
    expect(composeStep(lesson, 99).strokes).toEqual(composeStep(lesson, 3).strokes)
    expect(composeStep(lesson, -5).strokes).toEqual(composeStep(lesson, 0).strokes)
  })
})

describe('shapes', () => {
  it('mirrors absolute paths around a vertical line', () => {
    expect(mirrorX('M10 20 L30 40 H50 V60', 100)).toBe('M190 20 L170 40 H150 V60')
    expect(mirrorX('M0 0 A5 5 0 0 1 10 0', 50)).toBe('M100 0 A5 5 0 0 0 90 0')
    expect(mirrorX('M10 10 l5 2 a3 3 0 0 1 6 0', 0)).toBe('M-10 10 l-5 2 a3 3 0 0 0 -6 0')
  })

  it('hatches inside the rectangle', () => {
    const d = hatch(0, 0, 100, 100, 10, 45)
    const nums = (d.match(/-?\d+(\.\d+)?/g) ?? []).map(Number)
    expect(nums.length).toBeGreaterThan(20)
    nums.forEach((v) => {
      expect(v).toBeGreaterThanOrEqual(-0.01)
      expect(v).toBeLessThanOrEqual(100.01)
    })
  })

  it('scales and moves absolute and relative paths', () => {
    expect(transform('M0 0 L10 10 h5 a2 2 0 0 1 4 0 V3', 2, 1, 1)).toBe('M1 1 L21 21 h10 a4 4 0 0 1 8 0 V7')
  })

  it('draws pixel cells on a grid', () => {
    expect(pixels([[1, 2]], 10, 20, 5)).toBe('M15 30 L20 30 L20 35 L15 35 Z')
  })

  it('intersects lines', () => {
    expect(intersect([0, 0], [10, 10], [0, 10], [10, 0])).toEqual([5, 5])
  })

  it('puts dot numbers outside the shape', () => {
    const [p] = dotNumberPositions(
      [
        [10, 0],
        [-10, 0],
      ],
      5,
    )
    expect(p).toEqual([15, 0])
  })
})

describe('recommend', () => {
  const none = new Set<string>()
  it('maps age to a level', () => {
    expect([3, 5, 6, 8, 9, 12, 13, 40].map(levelForAge)).toEqual([1, 1, 2, 2, 3, 3, 4, 4])
  })

  it('suggests matching lessons at the right level first', () => {
    const picks = recommend(LESSONS, 2, 'animals', none, 3, () => 0)
    expect(picks).toHaveLength(3)
    picks.forEach((l) => {
      expect(matchesInterest(l, 'animals')).toBe(true)
      expect(l.level).toBe(2)
    })
  })

  it('prefers lessons not drawn yet', () => {
    const first = recommend(LESSONS, 2, 'animals', none, 1, () => 0)[0]
    const next = recommend(LESSONS, 2, 'animals', new Set([first.id]), 1, () => 0)[0]
    expect(next.id).not.toBe(first.id)
  })

  it('finds technique lessons for experienced artists', () => {
    recommend(LESSONS, 4, 'technique', none, 3, () => 0).forEach((l) => expect(l.category).toBe('teknik'))
  })

  it('suggests the chosen style', () => {
    const picks = recommend(LESSONS, 3, 'people', none, 3, () => 0, 'naturtro')
    picks.forEach((l) => expect(l.style).toBe('naturtro'))
    expect(picks.map((l) => l.id)).not.toContain('portrait-shaded') // builds on a face not drawn yet
  })

  it('waits with a "Byg videre" lesson until its base drawing is done', () => {
    const simple: Lesson = { ...lesson, id: 'simple' }
    const detail: Lesson = { ...lesson, id: 'detail', style: 'detaljer', base: 'simple' }
    const harder: Lesson = { ...lesson, id: 'harder', style: 'detaljer', level: 4 }
    const pick = (done: string[]) => recommend([simple, detail, harder], 2, 'animals', new Set(done), 1, () => 0, 'detaljer')[0].id
    expect(pick([])).toBe('simple')
    expect(pick(['simple'])).toBe('detail')
  })
})

describe('badges', () => {
  const profile = (done: string[], photos = 0): Profile => ({
    id: 'p',
    name: 'Ida',
    age: 7,
    avatar: '🦊',
    createdAt: 0,
    autoRead: false,
    seenBadges: [],
    progress: Object.fromEntries(done.map((id, i) => [id, { lastStep: 0, completedAt: 1, timesCompleted: 1, photos: i === 0 ? photos : 0 }])),
  })
  const earned = (p: Profile) => computeBadges(p, LESSONS).filter((b) => b.earned).map((b) => b.id)

  it('starts with no badges', () => {
    expect(earned(profile([]))).toEqual([])
  })

  it('awards first drawing, photographer and dot master', () => {
    expect(earned(profile(['dots-fish', 'dots-star', 'dots-house'], 1))).toEqual(['first', 'photo', 'dots'])
  })

  it('awards the shading and perspective badges for the right lessons', () => {
    const ids = earned(profile(['tone-scale', 'hatching', 'sphere-shading', 'perspective-1pt', 'perspective-2pt']))
    expect(ids).toContain('shading')
    expect(ids).toContain('perspective')
  })

  it('awards the detail and realistic badges after three lessons in that style', () => {
    const some = earned(profile(['cat-detail', 'owl-detail', 'fish-detail', 'eye-real', 'nose-mouth']))
    expect(some).toContain('details')
    expect(some).not.toContain('realistic')
    expect(earned(profile(['eye-real', 'nose-mouth', 'fox-real']))).toContain('realistic')
  })

  it('announces each badge once', () => {
    const p = { ...profile(['cat']), seenBadges: ['first'] }
    expect(newBadges(p, LESSONS)).toEqual([])
  })
})
