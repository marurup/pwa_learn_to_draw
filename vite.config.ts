/// <reference types="vitest/config" />
import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

/** https://…/owner/repo(.git) or git@github.com:owner/repo.git → https://github.com/owner/repo */
function githubUrl(remote: string): string {
  const m = remote.match(/[/:]([^/:]+)\/([^/]+?)(?:\.git)?$/)
  return m ? `https://github.com/${m[1]}/${m[2]}` : ''
}

/**
 * The commit a build is made from, shown at the bottom of the home screen. GITHUB_SHA, BUILD_DATE and REPO_URL
 * override what is read from git (the deploy workflow sets them). Empty when git is not available.
 */
function buildInfo() {
  const git = (args: string) =>
    execSync(`git ${args}`, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
  try {
    const sha = process.env.GITHUB_SHA || git('rev-parse HEAD')
    const date = process.env.BUILD_DATE || git(`log -1 --format=%cI ${sha}`)
    const repo = process.env.REPO_URL || githubUrl(git('remote get-url origin'))
    return { sha, date, repo }
  } catch {
    return { sha: '', date: '', repo: '' }
  }
}

// Relative base + hash router: the build works from any sub-path (GitHub Pages).
export default defineConfig(({ command }) => {
  // `npm run dev` and the unit tests run as a development version without a commit.
  const build = command === 'build' ? buildInfo() : { sha: '', date: '', repo: '' }
  return {
    base: './',
    define: { __BUILD__: JSON.stringify(build) },
    plugins: [
      react(),
      // version.json names the newest published commit. It is not precached, so an installed app can fetch it
      // and see that it is out of date.
      {
        name: 'version-json',
        apply: 'build',
        generateBundle() {
          if (build.sha)
            this.emitFile({
              type: 'asset',
              fileName: 'version.json',
              source: `${JSON.stringify({ sha: build.sha, date: build.date })}\n`,
            })
        },
      },
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
        manifest: {
          name: 'Lær at tegne',
          short_name: 'Lær at tegne',
          description: 'Trin-for-trin tegneøvelser til papir og blyant – fra prik-til-prik til perspektiv.',
          lang: 'da',
          start_url: './',
          scope: './',
          display: 'standalone',
          orientation: 'any',
          background_color: '#fff8ee',
          theme_color: '#ff7a59',
          icons: [
            { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
            { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
            { src: 'pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        },
      }),
    ],
    test: {
      include: ['src/**/*.test.ts'],
      environment: 'node',
    },
  }
})
