// Which commit this copy of the app was built from. vite.config.ts fills it in at build time (it stays empty
// under `npm run dev`) and writes the same commit to version.json. That file is never cached, so an installed
// app can fetch it and see when a newer version has been published.

export interface Build {
  sha: string
  date: string
  repo: string
}

declare const __BUILD__: Build
export const BUILD: Build = __BUILD__

export const shortSha = (sha: string) => sha.slice(0, 7)

export const commitUrl = (build: Build) => (build.repo && build.sha ? `${build.repo}/commit/${build.sha}` : undefined)

/** The newest published commit, or null when it cannot be fetched (offline) or this is a development version. */
export async function latestSha(build: Build = BUILD, get: typeof fetch = fetch): Promise<string | null> {
  if (!build.sha) return null
  try {
    const res = await get('version.json', { cache: 'no-store' })
    if (!res.ok) return null
    const latest: unknown = await res.json()
    const sha = (latest as { sha?: unknown } | null)?.sha
    return typeof sha === 'string' && sha ? sha : null
  } catch {
    return null
  }
}

/** Start over from the server: drop the service worker and every cached file, then reload. */
export async function updateApp() {
  try {
    const regs = (await navigator.serviceWorker?.getRegistrations()) ?? []
    await Promise.all(regs.map((reg) => reg.unregister()))
    await Promise.all((await caches.keys()).map((key) => caches.delete(key)))
  } catch {
    // Reload anyway.
  }
  location.reload()
}
