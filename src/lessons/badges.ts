import type { Key } from '../i18n'
import type { Profile } from '../state/store'
import type { Lesson } from './types'

export interface Badge {
  id: string
  icon: string
  title: Key
  desc: Key
  earned: boolean
}

interface Rule {
  id: string
  icon: string
  test: (done: Lesson[], photos: number) => boolean
}

const hasAll = (done: Lesson[], ids: string[]) => ids.every((id) => done.some((l) => l.id === id))

const RULES: Rule[] = [
  { id: 'first', icon: '🌱', test: (done) => done.length >= 1 },
  { id: 'photo', icon: '📸', test: (_, photos) => photos >= 1 },
  { id: 'dots', icon: '🔢', test: (done) => done.filter((l) => l.category === 'prik').length >= 3 },
  { id: 'animals', icon: '🐾', test: (done) => done.filter((l) => l.category === 'dyr').length >= 5 },
  { id: 'things', icon: '🚀', test: (done) => done.filter((l) => l.category === 'ting').length >= 3 },
  { id: 'shading', icon: '🌗', test: (done) => hasAll(done, ['tone-scale', 'hatching', 'sphere-shading']) },
  { id: 'perspective', icon: '📐', test: (done) => hasAll(done, ['perspective-1pt', 'perspective-2pt']) },
  { id: 'ten', icon: '🏅', test: (done) => done.length >= 10 },
  { id: 'allLevels', icon: '🌈', test: (done) => [1, 2, 3, 4].every((lv) => done.some((l) => l.level === lv)) },
]

export function computeBadges(profile: Profile, lessons: Lesson[]): Badge[] {
  const done = lessons.filter((l) => profile.progress[l.id]?.completedAt)
  const photos = Object.values(profile.progress).reduce((sum, p) => sum + p.photos, 0)
  return RULES.map((r) => ({
    id: r.id,
    icon: r.icon,
    title: `badge.${r.id}` as Key,
    desc: `badge.${r.id}.desc` as Key,
    earned: r.test(done, photos),
  }))
}

/** Badges earned but not yet celebrated. */
export function newBadges(profile: Profile, lessons: Lesson[]): Badge[] {
  return computeBadges(profile, lessons).filter((b) => b.earned && !profile.seenBadges.includes(b.id))
}
