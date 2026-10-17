import { circle, rect, type Pt } from '../shapes'
import type { Lesson } from '../types'

const quadPt = (s: Pt, c: Pt, e: Pt, t: number): Pt => [
  (1 - t) ** 2 * s[0] + 2 * t * (1 - t) * c[0] + t ** 2 * e[0],
  (1 - t) ** 2 * s[1] + 2 * t * (1 - t) * c[1] + t ** 2 * e[1],
]
// Foam: little curls just below the shoreline (the shore runs from (16,292) to (384,272)).
const foam = Array.from({ length: 11 }, (_, i) => quadPt([16, 292], [200, 246], [384, 272], (i + 0.5) / 11))
  .filter(([x]) => (x < 90 || x > 170) && x < 290)
  .map(([x, y]) => `M${(x - 10).toFixed(1)} ${(y + 8).toFixed(1)} q5 -5 10 0 q5 -5 10 0`)
  .join(' ')
const castle = `${rect(300, 322, 70, 30)} M300 322 V314 H312 V322 M324 322 V314 H336 V322 M358 322 V314 H370 V322 ${rect(318, 292, 34, 30)} M318 292 V284 H328 V292 M342 292 V284 H352 V292 M335 284 V262 L350 268 L335 274 M328 352 V338 Q335 330 342 338 V352`
const sunRays = Array.from({ length: 7 }, (_, i) => {
  const a = ((198 + i * 24) * Math.PI) / 180
  return `M${(318 + 40 * Math.cos(a)).toFixed(1)} ${(196 + 40 * Math.sin(a)).toFixed(1)} L${(318 + 52 * Math.cos(a)).toFixed(1)} ${(196 + 52 * Math.sin(a)).toFixed(1)}`
}).join(' ')
const shoreY = (x: number) => {
  // The shore curve is close enough to a parabola through its ends and control point.
  const t = (x - 16) / 368
  return (1 - t) ** 2 * 292 + 2 * t * (1 - t) * 246 + t ** 2 * 272
}
const busy = [
  [28, 296, 70, 60], // bucket and spade
  [90, 170, 40, 190], // palm trunk
  [190, 300, 34, 60], // shell
  [250, 310, 42, 42], // starfish
  [296, 260, 80, 96], // sandcastle
]
let seed = 5 // repeatable pseudo-random numbers, so the sand looks the same every time
const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646
const sandDots = Array.from({ length: 70 }, (): Pt => [24 + rand() * 352, 296 + rand() * 98])
  .filter(([x, y]) => y > shoreY(x) + 14 && !busy.some(([bx, by, bw, bh]) => x > bx && x < bx + bw && y > by && y < by + bh))
  .map(([x, y]) => circle(x, y, 1.3))
  .join(' ')

export const beachDetail: Lesson = {
  id: 'beach-detail',
  title: { da: 'Strand med sandslot', en: 'Beach with a sandcastle' },
  category: 'natur',
  sub: 'landskab',
  level: 3,
  style: 'detaljer',
  base: 'beach',
  minutes: 18,
  intro: {
    da: 'Byg videre på din strand: et sandslot med flag, en spand og skovl, skum ved vandkanten, solstråler og prikket sand.',
    en: 'Build on your beach: a sandcastle with a flag, a bucket and spade, foam at the water’s edge, rays of sun and dotted sand.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et sandslot med to etager, tinder, en port og et flag.', en: 'Draw a sandcastle with two levels, battlements, a gate and a flag.' },
      strokes: [{ d: castle }],
    },
    {
      text: { da: 'Tegn en spand og en skovl i sandet.', en: 'Draw a bucket and a spade in the sand.' },
      strokes: [{ d: 'M32 322 H66 L60 354 H38 Z M32 322 Q49 300 66 322' }, { d: 'M76 354 L84 318 M78 320 L90 322 M84 318 L80 300 L90 302 Z' }],
    },
    {
      text: { da: 'Tegn skum, hvor bølgerne rammer stranden, og solens spejlbillede i vandet.', en: 'Draw foam where the waves meet the beach, and the sun’s reflection in the water.' },
      strokes: [{ d: foam, weight: 0.7 }, { d: 'M300 206 H336 M306 214 H330 M312 222 H324', weight: 0.8 }],
    },
    {
      text: { da: 'Tegn solstråler og prik sandet.', en: 'Draw rays of sunshine and dot the sand.' },
      strokes: [{ d: sunRays }, { d: sandDots, kind: 'shade', tone: 0.5 }],
    },
    {
      text: { da: 'Skyg slottets højre side og palmestammen, og farvelæg din strand!', en: 'Shade the right side of the castle and the palm trunk, and colour in your beach!' },
      strokes: [
        { d: 'M352 292 V322 H370 V352 H356 V322 H346 V292 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M120 354 Q126 262 160 176 L152 178 Q118 262 112 354 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M32 322 H66 L60 354 H38 Z', kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Den perfekte stranddag – med det flotteste sandslot!', en: 'The perfect beach day – with the finest sandcastle!' }],
  nextTip: { da: 'Tegn havfruen, der kigger op af vandet og ser på sandslottet.', en: 'Draw the mermaid peeking out of the water to look at the sandcastle.' },
}
