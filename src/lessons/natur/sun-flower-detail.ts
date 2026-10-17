import { arc, circle, goldenSpiral, line } from '../shapes'
import type { Lesson } from '../types'

const wavyRays = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5]
  .map((deg) => {
    const a = (deg * Math.PI) / 180
    const p = (r: number, off: number) => {
      const b = a + off
      return `${(92 + r * Math.cos(b)).toFixed(1)} ${(92 + r * Math.sin(b)).toFixed(1)}`
    }
    return `M${p(54, 0)} Q${p(60, 0.12)} ${p(64, 0)} T${p(74, 0)}`
  })
  .join(' ')

const seeds = goldenSpiral(265, 170, 17, 36)
  .map(([x, y]) => circle(x, y, 1.3))
  .join(' ')
const petalLines = Array.from({ length: 6 }, (_, i) => {
  const a = ((i * 60 - 90) * Math.PI) / 180
  return line(265 + 30 * Math.cos(a), 170 + 30 * Math.sin(a), 265 + 58 * Math.cos(a), 170 + 58 * Math.sin(a))
}).join(' ')
const littleFlower = (x: number, y: number) =>
  [0, 72, 144, 216, 288]
    .map((deg) => {
      const a = ((deg - 90) * Math.PI) / 180
      return circle(x + 6 * Math.cos(a), y + 6 * Math.sin(a), 4)
    })
    .join(' ') + ` M${x} ${y + 10} V372`

export const sunFlowerDetail: Lesson = {
  id: 'sun-flower-detail',
  title: { da: 'Sol og blomst med detaljer', en: 'Sun and flower with details' },
  category: 'natur',
  sub: 'blomster',
  level: 2,
  style: 'detaljer',
  base: 'sun-flower',
  minutes: 12,
  intro: {
    da: 'Byg videre på din sol og blomst: et smil på solen, frø i blomsten, årer i bladene, en mariehøne og en sky.',
    en: 'Build on your sun and flower: a smile on the sun, seeds in the flower, veins in the leaves, a ladybird and a cloud.',
  },
  materials: ['pencil', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Giv solen et ansigt: to øjne og en stor smilemund.', en: 'Give the sun a face: two eyes and a big smile.' },
      strokes: [
        { d: `${circle(78, 84, 4)} ${circle(106, 84, 4)}`, kind: 'shade', tone: 0.9 },
        { d: arc(92, 96, 16, 20, 160) },
      ],
    },
    {
      text: { da: 'Tegn bølgede stråler ind imellem de lige stråler.', en: 'Draw wavy rays in between the straight rays.' },
      strokes: [{ d: wavyRays, weight: 0.8 }],
    },
    {
      text: { da: 'Prik frø i blomstens midte, og tegn en streg midt i hvert kronblad.', en: 'Dot seeds in the middle of the flower, and draw a line down the middle of each petal.' },
      strokes: [{ d: seeds, kind: 'shade', tone: 0.85 }, { d: petalLines, weight: 0.5 }],
    },
    {
      text: { da: 'Tegn en midterlinje og små årer i bladene.', en: 'Draw a middle line and small veins in the leaves.' },
      strokes: [
        { d: 'M264 298 Q292 282 322 281 M278 292 l4 -8 M292 287 l4 -7 M280 293 l6 6 M294 288 l6 5', weight: 0.6 },
        { d: 'M260 328 Q232 312 204 313 M246 321 l-4 -8 M232 316 l-4 -7 M244 322 l-6 6 M230 317 l-6 5', weight: 0.6 },
      ],
    },
    {
      text: { da: 'Tegn mere græs og to små blomster nede i græsset.', en: 'Draw more grass and two little flowers down in the grass.' },
      strokes: [
        { d: 'M40 372 l5 -14 l5 14 M150 372 l5 -18 l5 18 M180 372 l4 -10 l4 10 M300 372 l5 -14 l5 14 M352 372 l4 -12 l4 12' },
        { d: littleFlower(90, 342) },
        { d: littleFlower(336, 338) },
      ],
    },
    {
      text: { da: 'Tegn en sky på himlen og en lille mariehøne på bladet. Farvelæg det hele!', en: 'Draw a cloud in the sky and a little ladybird on the leaf. Colour it all in!' },
      strokes: [
        { d: 'M300 70 Q298 50 318 50 Q326 34 346 42 Q366 36 370 56 Q386 62 376 76 Z' },
        { d: circle(302, 284, 8) },
        { d: 'M302 276 V292' },
        { d: `${circle(298, 286, 1.8)} ${circle(306, 282, 1.8)} ${circle(306, 289, 1.8)}`, kind: 'shade', tone: 0.9 },
      ],
    },
  ],
  praise: [{ da: 'Solen smiler, og mariehønen har fundet et godt sted at sidde!', en: 'The sun is smiling, and the ladybird has found a nice spot!' }],
  nextTip: { da: 'Tegn en sommerfugl, der flyver hen til blomsten.', en: 'Draw a butterfly flying over to the flower.' },
}
