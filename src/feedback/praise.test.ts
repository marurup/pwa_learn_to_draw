import { describe, expect, it } from 'vitest'
import { LESSONS, getLesson } from '../lessons'
import { getFeedback, hashSeed } from './praise'

describe('getFeedback', () => {
  it('uses the artist’s name and is the same for the same photo', async () => {
    const lesson = getLesson('cat')!
    const a = await getFeedback({ lesson, name: 'Ida', lang: 'da', seed: hashSeed('photo-1') })
    const b = await getFeedback({ lesson, name: 'Ida', lang: 'da', seed: hashSeed('photo-1') })
    expect(a).toEqual(b)
    expect(a.headline).toContain('Ida')
  })

  it('gives every lesson praise and a tip in both languages', async () => {
    for (const lesson of LESSONS) {
      for (const lang of ['da', 'en'] as const) {
        for (const seed of [0, 1, 2, 3, 4, 5]) {
          const f = await getFeedback({ lesson, name: 'Bo', lang, seed })
          expect(f.headline).toContain('Bo')
          expect(f.message.length).toBeGreaterThan(10)
          expect(f.nextTip.length).toBeGreaterThan(10)
          expect(f.message + f.nextTip).not.toMatch(/\{\w+\}/)
        }
      }
    }
  })
})
