import 'fake-indexeddb/auto'
import { beforeEach, describe, expect, it } from 'vitest'
import { deleteAllPhotos, deletePhoto, deleteProfilePhotos, getPhoto, listPhotos, savePhoto, updatePhoto } from './gallery'
import { actions, getState, resetState } from './store'

describe('store', () => {
  beforeEach(() => resetState({ lang: 'da', langChosen: false, profiles: [] }))

  it('adds a profile, makes it active and reads aloud for young children', () => {
    const p = actions.addProfile({ name: '  Ida ', age: 5, avatar: '🦊' })
    expect(getState().activeId).toBe(p.id)
    expect(p.name).toBe('Ida')
    expect(p.autoRead).toBe(true)
    expect(actions.addProfile({ name: 'Bo', age: 9, avatar: '🐸' }).autoRead).toBe(false)
  })

  it('tracks progress, completion and photos', () => {
    const p = actions.addProfile({ name: 'Ida', age: 7, avatar: '🦊' })
    actions.reachStep(p.id, 'cat', 3)
    actions.reachStep(p.id, 'cat', 1)
    let saved = getState().profiles[0]
    expect(saved.progress.cat.lastStep).toBe(3)
    expect(saved.current).toBe('cat')

    actions.completeLesson(p.id, 'cat')
    actions.addPhoto(p.id, 'cat')
    saved = getState().profiles[0]
    expect(saved.progress.cat.completedAt).toBeTypeOf('number')
    expect(saved.progress.cat.photos).toBe(1)
    expect(saved.current).toBeUndefined()

    actions.removePhoto(p.id, 'cat')
    actions.removePhoto(p.id, 'cat')
    expect(getState().profiles[0].progress.cat.photos).toBe(0)
  })

  it('removes a profile and clears the active one', () => {
    const p = actions.addProfile({ name: 'Ida', age: 7, avatar: '🦊' })
    actions.removeProfile(p.id)
    expect(getState().profiles).toEqual([])
    expect(getState().activeId).toBeUndefined()
  })

  it('remembers the chosen language', () => {
    actions.setLang('en')
    expect(getState()).toMatchObject({ lang: 'en', langChosen: true })
  })
})

describe('gallery', () => {
  beforeEach(() => deleteAllPhotos())
  const blob = () => new Blob(['x'], { type: 'image/jpeg' })

  it('saves, lists per profile (newest first), updates and deletes photos', async () => {
    const a = await savePhoto({ profileId: 'p1', lessonId: 'cat', image: blob(), enhanced: blob() })
    await new Promise((r) => setTimeout(r, 2))
    const b = await savePhoto({ profileId: 'p1', lessonId: 'fish', image: blob(), enhanced: blob() })
    await savePhoto({ profileId: 'p2', lessonId: 'cat', image: blob(), enhanced: blob() })

    expect((await listPhotos('p1')).map((p) => p.id)).toEqual([b.id, a.id])

    await updatePhoto(a.id, { pride: 'super' })
    expect((await getPhoto(a.id))?.pride).toBe('super')

    await deletePhoto(b.id)
    expect(await listPhotos('p1')).toHaveLength(1)

    await deleteProfilePhotos('p1')
    expect(await listPhotos('p1')).toHaveLength(0)
    expect(await listPhotos('p2')).toHaveLength(1)
  })
})
