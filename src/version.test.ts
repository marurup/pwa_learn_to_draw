import { describe, expect, it } from 'vitest'
import { BUILD, commitUrl, latestSha, shortSha } from './version'

const build = {
  sha: 'a'.repeat(40),
  date: '2026-10-17T08:00:00+02:00',
  repo: 'https://github.com/marurup/pwa_learn_to_draw',
}
const answer = (body: unknown, ok = true) => (async () => ({ ok, json: async () => body })) as unknown as typeof fetch

describe('version', () => {
  it('is a development version under the unit tests', () => {
    expect(BUILD.sha).toBe('')
  })

  it('links to the commit it was built from', () => {
    expect(shortSha(build.sha)).toBe('aaaaaaa')
    expect(commitUrl(build)).toBe(`https://github.com/marurup/pwa_learn_to_draw/commit/${build.sha}`)
    expect(commitUrl({ ...build, repo: '' })).toBeUndefined()
  })

  it('reads the newest published commit from version.json', async () => {
    expect(await latestSha(build, answer({ sha: 'b'.repeat(40) }))).toBe('b'.repeat(40))
    expect(await latestSha(build, answer({ sha: 42 }))).toBeNull()
    expect(await latestSha(build, answer(null))).toBeNull()
    expect(await latestSha(build, answer({ sha: 'b'.repeat(40) }, false))).toBeNull()
  })

  it('gives up quietly when offline, and never asks from a development version', async () => {
    const offline = (async () => {
      throw new TypeError('Failed to fetch')
    }) as typeof fetch
    expect(await latestSha(build, offline)).toBeNull()
    expect(await latestSha({ ...build, sha: '' }, answer({ sha: 'b'.repeat(40) }))).toBeNull()
  })
})
