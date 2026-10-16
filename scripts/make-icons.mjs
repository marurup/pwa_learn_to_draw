// Renders scripts/assets/icon-source.svg to the PNG icons the PWA manifest and iOS need.
import { readFile, writeFile } from 'node:fs/promises'
import { chromium } from '@playwright/test'

const svg = await readFile(new URL('./assets/icon-source.svg', import.meta.url), 'utf8')
const targets = [
  { file: 'pwa-192.png', size: 192, round: true },
  { file: 'pwa-512.png', size: 512, round: true },
  { file: 'pwa-maskable-512.png', size: 512, round: false },
  { file: 'apple-touch-icon.png', size: 180, round: false },
]

const browser = await chromium.launch()
const page = await browser.newPage()
for (const { file, size, round } of targets) {
  await page.setViewportSize({ width: size, height: size })
  const radius = round ? size * 0.22 : 0
  await page.setContent(
    `<style>html,body{margin:0;background:transparent}svg{width:${size}px;height:${size}px;display:block;border-radius:${radius}px;overflow:hidden}</style>${svg}`,
  )
  const png = await page.screenshot({ omitBackground: true })
  await writeFile(new URL(`../public/${file}`, import.meta.url), png)
  console.log('wrote', file)
}
await browser.close()

// Favicon: same artwork with rounded corners as a plain SVG.
const favicon = svg.replace('<rect width="512" height="512" fill="#ff7a59"/>', '<rect width="512" height="512" rx="112" fill="#ff7a59"/>')
await writeFile(new URL('../public/favicon.svg', import.meta.url), favicon)
console.log('wrote favicon.svg')
