import { ellipse, rect, type Pt } from '../shapes'
import type { Lesson } from '../types'

/** Repeatable pseudo-random numbers, so the textures look the same every time. */
function random(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}
const f = (v: number) => v.toFixed(1)

// Fur: short, slightly curved strokes in overlapping rows, all leaning the same way.
const furRand = random(7)
const furRows = (from: number, to: number) =>
  Array.from({ length: Math.floor((to - from) / 11) + 1 }, (_, r) => from + r * 11)
    .flatMap((y) =>
      Array.from({ length: 16 }, (_, c) => {
        const x = 36 + c * 9 + (furRand() - 0.5) * 6
        const yy = y + (furRand() - 0.5) * 6
        return `M${f(x)} ${f(yy)} q-1 8 5 ${f(14 + furRand() * 4)}`
      }),
    )
    .join(' ')

// Wood: long wavy lines that bend around a knot.
const KNOT: Pt = [300, 95]
const grain = [34, 48, 62, 76, 90, 104, 118, 132, 146, 160]
  .map((y0, i) => {
    const pts = Array.from({ length: 27 }, (_, k) => {
      const x = 212 + k * 6
      const near = Math.max(0, 1 - Math.abs(y0 - KNOT[1]) / 50)
      const push = Math.sign(y0 - KNOT[1]) * 22 * near * Math.exp(-(((x - KNOT[0]) / 26) ** 2))
      return `${f(x)} ${f(y0 + 2.5 * Math.sin((x - 210) / 22 + i * 0.7) + push)}`
    })
    return 'M' + pts.join(' L')
  })
  .join(' ')

// Stones: rounded, slightly uneven shapes packed together.
const stoneRand = random(11)
const stones: Pt[][] = [0, 1, 2].flatMap((r) =>
  [0, 1, 2].map((c) => {
    const cx = 58 + c * 52 + (stoneRand() - 0.5) * 6
    const cy = 236 + r * 48 + (stoneRand() - 0.5) * 6
    return Array.from({ length: 7 }, (_, k): Pt => {
      const a = (k / 7) * 2 * Math.PI + stoneRand() * 0.4
      const j = 0.9 + stoneRand() * 0.15
      return [cx + 25 * j * Math.cos(a), cy + 22 * j * Math.sin(a)]
    })
  }),
)
/** A smooth closed curve through the midpoints, with the points as control points. */
const smooth = (pts: Pt[]) => {
  const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
  const start = mid(pts[pts.length - 1], pts[0])
  const curves = pts.map((p, i) => {
    const m = mid(p, pts[(i + 1) % pts.length])
    return `Q${f(p[0])} ${f(p[1])} ${f(m[0])} ${f(m[1])}`
  })
  return `M${f(start[0])} ${f(start[1])} ${curves.join(' ')} Z`
}
const stoneOutlines = stones.map(smooth).join(' ')
// The square minus the stones (they run the other way round), so only the cracks get dark.
const cracks = `${rect(30, 210, 160, 150)} ${stones.map((s) => smooth([...s].reverse())).join(' ')}`
const stoneShadows = stones
  .map((s) => {
    const cx = s.reduce((a, p) => a + p[0], 0) / s.length
    const cy = s.reduce((a, p) => a + p[1], 0) / s.length
    return smooth(s.map(([x, y]): Pt => [cx + (x - cx) * 0.7 + 5, cy + (y - cy) * 0.7 + 5]))
  })
  .join(' ')

// Water: small, close waves far away (top) and bigger, wider waves up close (bottom).
const waterRand = random(3)
const waves = Array.from({ length: 13 }, (_, k) => {
  const t = k / 12
  const y = 222 + 130 * t ** 1.4
  const len = 8 + 22 * t
  const amp = 1 + 3 * t
  const parts: string[] = []
  let x = 214 + waterRand() * 14
  while (x + len < 366) {
    parts.push(`M${f(x)} ${f(y)} q${f(len / 4)} ${f(-amp)} ${f(len / 2)} 0 q${f(len / 4)} ${f(amp)} ${f(len / 2)} 0`)
    x += len + 6 + waterRand() * (10 + 16 * t)
  }
  return parts.join(' ')
}).join(' ')

export const textures: Lesson = {
  id: 'textures',
  title: { da: 'Teksturer: pels, træ, sten og vand', en: 'Textures: fur, wood, stone and water' },
  category: 'teknik',
  level: 3,
  style: 'detaljer',
  minutes: 25,
  intro: {
    da: 'Tekstur er, hvordan noget ser ud til at føles – blødt, ru eller glat. Øv fire teksturer, som du kan bruge i alle dine tegninger.',
    en: 'Texture is how something looks like it would feel – soft, rough or smooth. Practise four textures you can use in all your drawings.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Tegn fire firkanter – én til hver tekstur.', en: 'Draw four squares – one for each texture.' },
      strokes: [{ d: `${rect(30, 20, 160, 150)} ${rect(210, 20, 160, 150)} ${rect(30, 210, 160, 150)} ${rect(210, 210, 160, 150)}`, opacity: 0.6 }],
      labels: [
        { x: 110, y: 190, text: { da: 'pels', en: 'fur' } },
        { x: 290, y: 190, text: { da: 'træ', en: 'wood' } },
        { x: 110, y: 380, text: { da: 'sten', en: 'stone' } },
        { x: 290, y: 380, text: { da: 'vand', en: 'water' } },
      ],
    },
    {
      text: {
        da: 'Pels: Tegn korte, let buede streger i rækker, der overlapper hinanden – alle i samme retning.',
        en: 'Fur: draw short, slightly curved strokes in overlapping rows – all going the same way.',
      },
      tip: { da: 'Træk hurtigt, og løft blyanten til sidst – så bliver hver streg tynd i spidsen.', en: 'Flick quickly and lift the pencil at the end – then each stroke gets a thin tip.' },
      strokes: [{ d: furRows(28, 150), weight: 0.6 }],
    },
    {
      text: {
        da: 'Tegn et lag mere med mørkere streger i den nederste halvdel. Så ser pelsen tyk og blød ud.',
        en: 'Draw one more layer of darker strokes in the bottom half. Then the fur looks thick and soft.',
      },
      strokes: [
        { d: furRows(96, 150), weight: 0.8 },
        { d: 'M32 100 H188 V168 H32 Z', kind: 'shade', fill: 'soft', tone: 0.15 },
      ],
    },
    {
      text: {
        da: 'Træ: Tegn en knast – et lille øje – og lange, bølgede streger, der bøjer uden om den.',
        en: 'Wood: draw a knot – a little eye – and long, wavy lines that bend around it.',
      },
      strokes: [
        { d: `${ellipse(KNOT[0], KNOT[1], 8, 5)} ${ellipse(KNOT[0], KNOT[1], 14, 9)}` },
        { d: grain, weight: 0.6 },
        { d: ellipse(KNOT[0], KNOT[1], 8, 5), kind: 'shade', tone: 0.6 },
      ],
    },
    {
      text: {
        da: 'Sten: Tegn runde, lidt skæve sten tæt sammen. Skyg sprækkerne mørke og hver sten lidt i bunden.',
        en: 'Stone: draw round, slightly uneven stones close together. Shade the cracks dark and each stone a little at the bottom.',
      },
      strokes: [
        { d: stoneOutlines },
        { d: cracks, kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: stoneShadows, kind: 'shade', fill: 'soft', tone: 0.25 },
      ],
    },
    {
      text: {
        da: 'Vand: Tegn små, vandrette bølger. Langt væk (øverst) er de små og tætte, tæt på (nederst) er de store.',
        en: 'Water: draw small, flat waves. Far away (at the top) they are small and close together; up close (at the bottom) they are big.',
      },
      tip: { da: 'Lad hvidt papir stå mellem bølgerne – det er lyset, der glimter i vandet.', en: 'Leave white paper between the waves – that is the light glittering on the water.' },
      strokes: [{ d: waves, weight: 0.7 }],
    },
  ],
  praise: [{ da: 'Fire teksturer – nu kan du give alle dine tegninger pels, træ, sten og vand!', en: 'Four textures – now you can give all your drawings fur, wood, stone and water!' }],
  nextTip: {
    da: 'Prøv flere teksturer: fjer, græs, mursten eller skyer. Brug dem i din næste tegning!',
    en: 'Try more textures: feathers, grass, bricks or clouds. Use them in your next drawing!',
  },
}
