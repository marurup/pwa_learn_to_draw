import { useSyncExternalStore } from 'react'
import type { Lang } from '../lessons/types'

export interface LessonProgress {
  /** Highest step index the artist has reached (0-based). */
  lastStep: number
  completedAt?: number
  timesCompleted: number
  photos: number
}

export interface Profile {
  id: string
  name: string
  age: number
  avatar: string
  createdAt: number
  autoRead: boolean
  progress: Record<string, LessonProgress>
  /** Lesson the artist was last working on, for "continue". */
  current?: string
  /** Badges already celebrated, so a badge is announced once. */
  seenBadges: string[]
}

export interface AppState {
  lang: Lang
  /** True once someone picked a language (the first onboarding step). */
  langChosen: boolean
  profiles: Profile[]
  activeId?: string
}

const STORAGE_KEY = 'laer-at-tegne:v1'

function detectLang(): Lang {
  const langs = typeof navigator === 'undefined' ? [] : navigator.languages ?? [navigator.language]
  return langs.some((l) => l?.toLowerCase().startsWith('da')) ? 'da' : langs.length ? 'en' : 'da'
}

function initialState(): AppState {
  return { lang: detectLang(), langChosen: false, profiles: [] }
}

function load(): AppState {
  try {
    const raw = globalThis.localStorage?.getItem(STORAGE_KEY)
    if (raw) return { ...initialState(), ...JSON.parse(raw) }
  } catch {
    // Private mode or corrupt data: start fresh.
  }
  return initialState()
}

let state: AppState = load()
const listeners = new Set<() => void>()

function commit(next: AppState) {
  state = next
  try {
    globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Storage full or unavailable: keep working in memory.
  }
  listeners.forEach((l) => l())
}

export function getState(): AppState {
  return state
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** Test helper: replace the whole state. */
export function resetState(next: AppState = initialState()) {
  commit(next)
}

export function useAppState(): AppState {
  return useSyncExternalStore(subscribe, getState, getState)
}

export function useActiveProfile(): Profile | undefined {
  const s = useAppState()
  return s.profiles.find((p) => p.id === s.activeId)
}

export function activeProfile(): Profile | undefined {
  return state.profiles.find((p) => p.id === state.activeId)
}

function newId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
}

function updateProfile(id: string, fn: (p: Profile) => Profile) {
  commit({ ...state, profiles: state.profiles.map((p) => (p.id === id ? fn(p) : p)) })
}

function lessonProgress(p: Profile, lessonId: string): LessonProgress {
  return p.progress[lessonId] ?? { lastStep: 0, timesCompleted: 0, photos: 0 }
}

export const actions = {
  setLang(lang: Lang) {
    commit({ ...state, lang, langChosen: true })
  },

  addProfile(input: { name: string; age: number; avatar: string }): Profile {
    const profile: Profile = {
      id: newId(),
      name: input.name.trim(),
      age: input.age,
      avatar: input.avatar,
      createdAt: Date.now(),
      autoRead: input.age <= 6,
      progress: {},
      seenBadges: [],
    }
    commit({ ...state, profiles: [...state.profiles, profile], activeId: profile.id })
    return profile
  },

  editProfile(id: string, patch: Partial<Pick<Profile, 'name' | 'age' | 'avatar' | 'autoRead'>>) {
    updateProfile(id, (p) => ({ ...p, ...patch }))
  },

  removeProfile(id: string) {
    const profiles = state.profiles.filter((p) => p.id !== id)
    commit({ ...state, profiles, activeId: state.activeId === id ? undefined : state.activeId })
  },

  setActive(id: string | undefined) {
    commit({ ...state, activeId: id })
  },

  reachStep(profileId: string, lessonId: string, step: number) {
    updateProfile(profileId, (p) => {
      const lp = lessonProgress(p, lessonId)
      return {
        ...p,
        current: lessonId,
        progress: { ...p.progress, [lessonId]: { ...lp, lastStep: Math.max(lp.lastStep, step) } },
      }
    })
  },

  completeLesson(profileId: string, lessonId: string) {
    updateProfile(profileId, (p) => {
      const lp = lessonProgress(p, lessonId)
      return {
        ...p,
        current: p.current === lessonId ? undefined : p.current,
        progress: {
          ...p.progress,
          [lessonId]: { ...lp, completedAt: Date.now(), timesCompleted: lp.timesCompleted + 1 },
        },
      }
    })
  },

  addPhoto(profileId: string, lessonId: string) {
    updateProfile(profileId, (p) => {
      const lp = lessonProgress(p, lessonId)
      return { ...p, progress: { ...p.progress, [lessonId]: { ...lp, photos: lp.photos + 1 } } }
    })
  },

  removePhoto(profileId: string, lessonId: string) {
    updateProfile(profileId, (p) => {
      const lp = lessonProgress(p, lessonId)
      return { ...p, progress: { ...p.progress, [lessonId]: { ...lp, photos: Math.max(0, lp.photos - 1) } } }
    })
  },

  clearPhotoCounts() {
    commit({
      ...state,
      profiles: state.profiles.map((p) => ({
        ...p,
        progress: Object.fromEntries(Object.entries(p.progress).map(([k, v]) => [k, { ...v, photos: 0 }])),
      })),
    })
  },

  markBadgesSeen(profileId: string, badgeIds: string[]) {
    updateProfile(profileId, (p) => ({ ...p, seenBadges: [...new Set([...p.seenBadges, ...badgeIds])] }))
  },
}
