import type { Lesson, Level, Style } from './types'

export type Interest = 'animals' | 'flowers' | 'people' | 'things' | 'fantasy' | 'technique' | 'surprise'
export const INTERESTS: Interest[] = ['animals', 'flowers', 'people', 'things', 'fantasy', 'technique', 'surprise']

export function levelForAge(age: number): Level {
  if (age <= 5) return 1
  if (age <= 8) return 2
  if (age <= 12) return 3
  return 4
}

export function matchesInterest(lesson: Lesson, interest: Interest): boolean {
  switch (interest) {
    case 'animals':
      return lesson.category === 'dyr' || ['fugle', 'fisk', 'landdyr', 'insekter'].includes(lesson.sub ?? '')
    case 'flowers':
      return lesson.category === 'natur'
    case 'people':
      return lesson.category === 'mennesker'
    case 'things':
      return lesson.category === 'ting' || ['koeretoejer', 'bygninger', 'rummet'].includes(lesson.sub ?? '')
    case 'fantasy':
      return lesson.category === 'fantasi'
    case 'technique':
      return lesson.category === 'teknik'
    case 'surprise':
      return true
  }
}

/**
 * Picks `count` lessons for a level, interest and (optionally) style: matching lessons first, closest
 * level first, lessons not yet drawn before ones already drawn. A "Byg videre" lesson waits behind the
 * others until its base drawing is done. `random` breaks ties (and drives "surprise me").
 */
export function recommend(
  lessons: Lesson[],
  level: Level,
  interest: Interest,
  completed: ReadonlySet<string>,
  count = 3,
  random: () => number = Math.random,
  style?: Style,
): Lesson[] {
  const scored = lessons.map((lesson) => {
    const miss = matchesInterest(lesson, interest) ? 0 : 10
    const levelGap = Math.abs(lesson.level - level) * 3 + (lesson.level > level ? 1 : 0)
    const styleGap = style && (lesson.style ?? 'enkel') !== style ? 4 : 0
    const baseMissing = lesson.base && !completed.has(lesson.base) ? 6 : 0
    const done = completed.has(lesson.id) ? 4 : 0
    const noise = random() * (interest === 'surprise' ? 3 : 0.5)
    return { lesson, score: miss + levelGap + styleGap + baseMissing + done + noise }
  })
  return scored
    .sort((a, b) => a.score - b.score)
    .slice(0, count)
    .map((s) => s.lesson)
}
