import { createStore, del, entries, get, set, clear, type UseStore } from 'idb-keyval'

export type Pride = 'ok' | 'good' | 'super'

export interface Photo {
  id: string
  profileId: string
  lessonId: string
  createdAt: number
  /** The cropped photo as taken. */
  image: Blob
  /** Same photo with the paper whitened and the lighting evened out. */
  enhanced: Blob
  pride?: Pride
}

let store: UseStore | undefined
function db(): UseStore {
  store ??= createStore('laer-at-tegne', 'photos')
  return store
}

export async function savePhoto(photo: Omit<Photo, 'id' | 'createdAt'>): Promise<Photo> {
  const full: Photo = { ...photo, id: crypto.randomUUID(), createdAt: Date.now() }
  await set(full.id, full, db())
  return full
}

export function getPhoto(id: string): Promise<Photo | undefined> {
  return get<Photo>(id, db())
}

export async function updatePhoto(id: string, patch: Partial<Pick<Photo, 'pride'>>): Promise<void> {
  const photo = await getPhoto(id)
  if (photo) await set(id, { ...photo, ...patch }, db())
}

export async function listPhotos(profileId: string): Promise<Photo[]> {
  const all = await entries<string, Photo>(db())
  return all
    .map(([, p]) => p)
    .filter((p) => p.profileId === profileId)
    .sort((a, b) => b.createdAt - a.createdAt)
}

export function deletePhoto(id: string): Promise<void> {
  return del(id, db())
}

export async function deleteProfilePhotos(profileId: string): Promise<void> {
  const photos = await listPhotos(profileId)
  await Promise.all(photos.map((p) => del(p.id, db())))
}

export function deleteAllPhotos(): Promise<void> {
  return clear(db())
}
