import type { Lesson, Level } from './types'

export type Interest = 'animals' | 'vehicles' | 'homes' | 'people' | 'technique' | 'surprise'
export const INTERESTS: Interest[] = ['animals', 'vehicles', 'homes', 'people', 'technique', 'surprise']

export function levelForAge(age: number): Level {
  if (age <= 5) return 1
  if (age <= 8) return 2
  if (age <= 12) return 3
  return 4
}

export function matchesInterest(lesson: Lesson, interest: Interest): boolean {
  switch (interest) {
    case 'animals':
      return lesson.category === 'dyr' || ['fugle', 'fisk', 'landdyr'].includes(lesson.sub ?? '')
    case 'vehicles':
      return lesson.sub === 'koeretoejer' || lesson.sub === 'rummet'
    case 'homes':
      return lesson.sub === 'bygninger' || lesson.category === 'natur'
    case 'people':
      return lesson.category === 'mennesker'
    case 'technique':
      return lesson.category === 'teknik'
    case 'surprise':
      return true
  }
}

/**
 * Picks `count` lessons for a level and interest: matching lessons first, closest level first,
 * lessons not yet drawn before ones already drawn. `random` breaks ties (and drives "surprise me").
 */
export function recommend(
  lessons: Lesson[],
  level: Level,
  interest: Interest,
  completed: ReadonlySet<string>,
  count = 3,
  random: () => number = Math.random,
): Lesson[] {
  const scored = lessons.map((lesson) => {
    const miss = matchesInterest(lesson, interest) ? 0 : 10
    const levelGap = Math.abs(lesson.level - level) * 3 + (lesson.level > level ? 1 : 0)
    const done = completed.has(lesson.id) ? 4 : 0
    return { lesson, score: miss + levelGap + done + random() * (interest === 'surprise' ? 3 : 0.5) }
  })
  return scored
    .sort((a, b) => a.score - b.score)
    .slice(0, count)
    .map((s) => s.lesson)
}
