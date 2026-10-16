import { expect, test, type Page } from '@playwright/test'

const FIXTURE = new URL('./fixtures/drawing.jpg', import.meta.url).pathname

async function onboard(page: Page, lang: 'Dansk' | 'English' = 'Dansk', name = 'Ida', age = '7') {
  await page.goto('./')
  await page.getByRole('button', { name: new RegExp(lang) }).click()
  await page.getByRole('textbox').fill(name)
  await page.getByRole('button', { name: /Næste|Next/ }).click()
  await page.getByRole('button', { name: age, exact: true }).click()
  await page.getByRole('button', { name: '🦊' }).click()
  await page.getByRole('button', { name: /Næste|Next/ }).click()
  await page.getByRole('button', { name: /Lad os tegne|Let's draw/ }).click()
}

test('a child picks a drawing with help, draws it step by step and saves a photo', async ({ page }) => {
  // Suggestions break ties at random; fix it so the cat is always among them.
  await page.addInitScript(() => {
    Math.random = () => 0
  })
  await onboard(page)
  await expect(page.getByRole('heading', { name: 'Hej Ida!' })).toBeVisible()

  // Guided choice: level, subject and style.
  await page.getByTestId('choose-help').click()
  await expect(page.getByTestId('level-2').getByText('Passer til din alder')).toBeVisible()
  await page.getByTestId('level-2').click()
  await page.getByTestId('interest-animals').click()
  await page.getByTestId('style-enkel').click()
  await expect(page.getByRole('heading', { name: 'Prøv en af disse, Ida!' })).toBeVisible()
  await expect(page.locator('.lesson-grid .lesson-card')).toHaveCount(3)
  await page.getByTestId('lesson-cat').click()

  // Lesson intro and player: forward, back and jumping between steps.
  await expect(page.getByRole('heading', { name: 'Kat' })).toBeVisible()
  await page.getByTestId('start-lesson').click()
  await expect(page.getByText('Trin 1 af 7')).toBeVisible()
  await page.getByTestId('next-step').click()
  await expect(page.getByText('Trin 2 af 7')).toBeVisible()
  await page.getByTestId('prev-step').click()
  await expect(page.getByText('Trin 1 af 7')).toBeVisible()
  await page.getByRole('button', { name: 'Trin 7 af 7' }).click()
  await expect(page.getByTestId('step-text')).toContainText('striber')
  await page.getByTestId('next-step').click()

  // Done: badge, then photo.
  await expect(page.getByRole('heading', { name: /Godt gået, Ida!/ })).toBeVisible()
  await page.getByTestId('close-badges').click()
  await page.getByTestId('photo-input').setInputFiles(FIXTURE)
  await expect(page.getByRole('heading', { name: 'Tilpas billedet' })).toBeVisible()
  await page.getByTestId('save-photo').click()

  // Result with personal praise, effects and the gallery.
  await expect(page).toHaveURL(/#\/result\//)
  await page.getByTestId('close-badges').click()
  await expect(page.getByTestId('praise')).toContainText('Ida')
  await page.getByTestId('toggle-alive').click()
  await expect(page.getByTestId('artwork').locator('svg image')).toBeVisible()
  await page.getByRole('button', { name: 'Polaroid' }).click()
  await expect(page.getByTestId('artwork')).toContainText('Kat · Ida')
  await page.getByRole('button', { name: /Super/ }).click()
  await expect(page.getByText('køleskabet')).toBeVisible()

  await page.getByRole('link', { name: /Til galleriet/ }).click()
  await expect(page.getByRole('heading', { name: 'Idas galleri' })).toBeVisible()
  await expect(page.locator('.photo-card')).toHaveCount(1)
  await expect(page.locator('.badge.earned')).toHaveCount(2)
})

test('a finished drawing can be built on with more details', async ({ page }) => {
  await onboard(page, 'Dansk', 'Ida', '9')
  await page.goto('./#/lesson/cat/step/7')
  await page.getByTestId('next-step').click()
  await expect(page.getByRole('heading', { name: /Godt gået, Ida!/ })).toBeVisible()
  await page.getByTestId('close-badges').click()
  await page.getByTestId('next-challenge').getByRole('link', { name: /Gør den mere detaljeret/ }).click()

  await expect(page.getByRole('heading', { name: 'Kat med pels og skygge' })).toBeVisible()
  await expect(page.getByTestId('builds-on')).toContainText('Kat')
  await page.getByTestId('start-lesson').click()
  // The finished cat is already on the paper in grey, and only the new strokes are highlighted.
  const canvas = page.locator('.step-canvas.step')
  await expect(canvas.locator('.s-line.current').first()).toBeVisible()
  expect(await canvas.locator('.s-line:not(.current)').count()).toBeGreaterThan(10)
})

test('the catalogue can be filtered by style, easiest first', async ({ page }) => {
  await onboard(page, 'Dansk', 'Ida', '9')
  await page.getByTestId('choose-know').click()
  await page.getByTestId('cat-mennesker').click()
  await page.getByTestId('style-naturtro').click()
  const cards = page.locator('.lesson-grid .lesson-card')
  await expect(cards).toHaveCount(4)
  await expect(page.getByTestId('lesson-eye-real')).toBeVisible()
  await expect(page.getByTestId('lesson-happy-face')).toHaveCount(0)
  await expect(cards.last()).toHaveAttribute('data-testid', 'lesson-portrait-shaded')
})

test('the app works in English and remembers where you were', async ({ page }) => {
  await onboard(page, 'English', 'Sam', '10')
  await expect(page.getByRole('heading', { name: 'Hi Sam!' })).toBeVisible()
  await page.getByTestId('choose-know').click()
  await page.getByTestId('cat-teknik').click()
  await expect(page.getByTestId('lesson-perspective-1pt')).toBeVisible()
  await expect(page.getByTestId('lesson-cat')).toHaveCount(0)
  await page.getByTestId('lesson-perspective-1pt').click()
  await page.getByTestId('start-lesson').click()
  await page.getByTestId('next-step').click()
  await expect(page.getByText('Step 2 of 7')).toBeVisible()

  await page.reload()
  await expect(page.getByText('Step 2 of 7')).toBeVisible()
  await page.goto('./#/home')
  await expect(page.getByRole('link', { name: /Continue: One-point perspective/ })).toBeVisible()
})

test('siblings get their own profiles', async ({ page }) => {
  await onboard(page)
  await page.getByRole('link', { name: /Skift tegner/ }).click()
  await page.getByRole('link', { name: /Ny tegner/ }).click()
  await page.getByRole('textbox').fill('Bo')
  await page.getByRole('button', { name: 'Næste' }).click()
  await page.getByRole('button', { name: '4', exact: true }).click()
  await page.getByRole('button', { name: '🐸' }).click()
  await page.getByRole('button', { name: /Næste/ }).click()
  await page.getByRole('button', { name: /Lad os tegne/ }).click()
  await expect(page.getByRole('heading', { name: 'Hej Bo!' })).toBeVisible()

  await page.getByRole('link', { name: /Skift tegner/ }).click()
  await expect(page.getByRole('button', { name: /Ida/ })).toBeVisible()
  await expect(page.getByRole('button', { name: /Bo/ })).toBeVisible()
})

test('dot-to-dot can be traced on a locked screen and printed', async ({ page }) => {
  await onboard(page, 'Dansk', 'Ida', '4')
  await page.goto('./#/lesson/dots-fish')
  await page.getByRole('link', { name: /Kalkér på skærmen/ }).click()
  await page.getByTestId('trace-lock').click()
  const locked = page.getByTestId('trace-locked')
  await expect(locked).toBeVisible()
  // A quick tap does not unlock; holding does.
  await page.getByRole('button', { name: /Hold her for at låse op/ }).click()
  await expect(locked).toBeVisible()
  const unlock = page.getByRole('button', { name: /Hold her for at låse op/ })
  await unlock.hover()
  await page.mouse.down()
  await page.waitForTimeout(1800)
  await page.mouse.up()
  await expect(locked).toBeHidden()

  await page.goto('./#/lesson/dots-fish/print')
  await expect(page.locator('.sheet .s-dot')).toHaveCount(14)
})

test('grown-ups can switch language behind a press-and-hold button', async ({ page }) => {
  await onboard(page)
  const gear = page.getByRole('button', { name: /Voksne: hold knappen inde/ })
  await gear.hover()
  await page.mouse.down()
  await page.waitForTimeout(2300)
  await page.mouse.up()
  await expect(page.getByRole('heading', { name: 'For voksne' })).toBeVisible()
  await page.getByRole('button', { name: /English/ }).click()
  await expect(page.getByRole('heading', { name: 'For grown-ups' })).toBeVisible()
})

test('it is an installable PWA that works offline', async ({ page, context, request }) => {
  const manifest = await (await request.get('./manifest.webmanifest')).json()
  expect(manifest).toMatchObject({ name: 'Lær at tegne', display: 'standalone' })
  expect(manifest.icons.map((i: { sizes: string }) => i.sizes)).toEqual(expect.arrayContaining(['192x192', '512x512']))

  await onboard(page)
  await page.evaluate(() => navigator.serviceWorker.ready)
  await page.reload() // let the service worker take control
  await context.setOffline(true)
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Hej Ida!' })).toBeVisible()
  await page.goto('./#/lesson/rocket/step/3')
  await expect(page.getByText('Trin 3 af 7')).toBeVisible()
  await context.setOffline(false)
})
