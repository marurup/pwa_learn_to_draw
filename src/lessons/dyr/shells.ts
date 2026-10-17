import { ellipse, poly, type Pt } from '../shapes'
import type { Lesson } from '../types'

/** A five-armed star. */
export const starPoints = (cx: number, cy: number, r: number, inner: number): Pt[] =>
  Array.from({ length: 10 }, (_, i): Pt => {
    const a = ((i * 36 - 90) * Math.PI) / 180
    const rr = i % 2 ? inner : r
    return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)]
  })

/** A spiral from the middle outwards, like a snail shell seen from the side. */
export const spiral = (cx: number, cy: number, r1: number, turns: number) =>
  'M' +
  Array.from({ length: 80 }, (_, i) => {
    const t = i / 79
    const a = t * turns * 2 * Math.PI
    const r = 3 + (r1 - 3) * t
    return `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`
  }).join(' L')

// Scallop: a fan from the hinge at the bottom to a bumpy top edge.
export const SCALLOP_TOP: Pt[] = Array.from({ length: 7 }, (_, i): Pt => {
  const a = ((200 + i * 23.3) * Math.PI) / 180
  return [120 + 56 * Math.cos(a), 280 + 56 * Math.sin(a)]
})
const scallopEdge =
  `M120 288 L${SCALLOP_TOP[0][0].toFixed(1)} ${SCALLOP_TOP[0][1].toFixed(1)} ` +
  SCALLOP_TOP.slice(1)
    .map((p, i) => {
      const prev = SCALLOP_TOP[i]
      const mx = (prev[0] + p[0]) / 2 + (prev[0] + p[0] - 240) * 0.06
      const my = (prev[1] + p[1]) / 2 - 8
      return `Q${mx.toFixed(1)} ${my.toFixed(1)} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`
    })
    .join(' ') +
  ' Z'
export const scallopRidges = SCALLOP_TOP.slice(1, -1)
  .map(([x, y]) => `M120 286 L${x.toFixed(1)} ${y.toFixed(1)}`)
  .join(' ')

export const shells: Lesson = {
  id: 'shells',
  title: { da: 'Muslinger og søstjerne', en: 'Shells and a starfish' },
  category: 'dyr',
  sub: 'fisk',
  level: 1,
  minutes: 8,
  intro: {
    da: 'Skatte fra stranden: en muslingeskal som en vifte, en søstjerne og et sneglehus.',
    en: 'Treasures from the beach: a shell like a fan, a starfish and a snail shell.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn sandet som en lang, bølget streg.', en: 'Draw the sand as a long, wavy line.' },
      strokes: [{ d: 'M10 304 Q100 296 200 302 Q300 308 390 300' }],
    },
    {
      text: { da: 'Tegn en muslingeskal som en vifte med bølget kant, og streger, der samles forneden.', en: 'Draw a shell like a fan with a wavy edge, and lines that meet at the bottom.' },
      strokes: [{ d: scallopEdge }, { d: scallopRidges }, { d: 'M108 288 L104 298 H136 L132 288' }],
    },
    {
      text: { da: 'Tegn en søstjerne med fem arme.', en: 'Draw a starfish with five arms.' },
      tip: { da: 'Tegn armene en ad gangen hele vejen rundt.', en: 'Draw the arms one at a time all the way round.' },
      strokes: [{ d: poly(starPoints(214, 250, 44, 20), true) }],
    },
    {
      text: { da: 'Tegn et sneglehus som en spiral, der starter i midten.', en: 'Draw a snail shell as a spiral that starts in the middle.' },
      strokes: [{ d: spiral(316, 258, 34, 2.5) }, { d: 'M350 258 Q356 288 330 296 L296 296' }],
    },
    {
      text: { da: 'Tegn små sten i sandet og bølger i havet. Farvelæg dine skatte!', en: 'Draw little pebbles in the sand and waves in the sea. Colour in your treasures!' },
      strokes: [
        { d: `${ellipse(60, 330, 10, 6)} ${ellipse(170, 346, 8, 5)} ${ellipse(260, 330, 12, 6)} ${ellipse(350, 352, 9, 5)}` },
        { d: 'M10 110 q20 -10 40 0 q20 10 40 0 q20 -10 40 0 q20 10 40 0 q20 -10 40 0 q20 10 40 0 q20 -10 40 0 q20 10 40 0 q20 -10 40 0' },
        { d: poly(starPoints(214, 250, 44, 20), true), kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Sikke nogle flotte strandskatte!', en: 'What lovely beach treasures!' }],
  nextTip: { da: 'Saml rigtige muslinger på stranden, og tegn dem af.', en: 'Collect real shells on the beach and draw them.' },
}
