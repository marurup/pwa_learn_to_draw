import { arc, circle, line, type Pt } from '../shapes'
import type { Lesson } from '../types'

const moreScales = [
  [118, 196],
  [118, 220],
  [214, 168],
  [214, 196],
  [214, 224],
  [140, 160],
  [140, 236],
  [166, 146],
  [166, 252],
  [192, 152],
  [192, 244],
]
  .map(([x, y]) => arc(x, y, 12, -80, 80))
  .join(' ')

const quad = (p0: Pt, p1: Pt, p2: Pt, t: number): Pt => [
  (1 - t) ** 2 * p0[0] + 2 * t * (1 - t) * p1[0] + t ** 2 * p2[0],
  (1 - t) ** 2 * p0[1] + 2 * t * (1 - t) * p1[1] + t ** 2 * p2[1],
]
/** Rays from a fin's base (the line between its ends) to just inside its curved edge. */
const finRays = (p0: Pt, p1: Pt, p2: Pt, ts: number[]) =>
  ts
    .map((t) => {
      const [x, y] = quad(p0, p1, p2, t)
      const bx = p0[0] + (p2[0] - p0[0]) * t
      const by = p0[1] + (p2[1] - p0[1]) * t
      const len = Math.hypot(x - bx, y - by)
      const ux = (x - bx) / len
      const uy = (y - by) / len
      return line(bx + ux * 4, by + uy * 4, x - ux * 4, y - uy * 4)
    })
    .join(' ')

export const fishDetail: Lesson = {
  id: 'fish-detail',
  title: { da: 'Fisk med skæl og glans', en: 'Fish with scales and shine' },
  category: 'dyr',
  sub: 'fisk',
  level: 2,
  style: 'detaljer',
  base: 'fish',
  minutes: 12,
  intro: {
    da: 'Byg videre på din fisk: glans i øjet, flere skæl, striber på finnerne, skygge på ryggen og en lille havbund.',
    en: 'Build on your fish: a shiny eye, more scales, stripes on the fins, shading on the back and a little seabed.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Lad en lille prik være hvid i øjet, og tegn en ring rundt om det.', en: 'Leave a little white dot in the eye, and draw a ring around it.' },
      strokes: [{ d: circle(275, 179, 2.6), kind: 'shade', fill: 'paper' }, { d: circle(274, 182, 18), weight: 0.6 }],
    },
    {
      text: { da: 'Fyld flere skæl på kroppen – i rækker, der ligger forskudt.', en: 'Fill in more scales on the body – in staggered rows.' },
      strokes: [{ d: moreScales, weight: 0.7 }],
    },
    {
      text: { da: 'Tegn fine streger i finnerne og halen – de viser finnernes "ribben".', en: 'Draw fine lines in the fins and the tail – they show the fins’ "ribs".' },
      strokes: [
        { d: finRays([140, 142], [160, 82], [236, 128], [0.25, 0.4, 0.55, 0.7, 0.85]), weight: 0.5 },
        { d: 'M84 196 L44 170 M82 204 L40 210 M84 210 L46 238', weight: 0.5 },
        { d: finRays([168, 262], [176, 300], [212, 271], [0.3, 0.5, 0.7]), weight: 0.5 },
      ],
    },
    {
      text: { da: 'Skyg ryggen let og lad maven være lys – så ser fisken rund ud. Lad en lys stribe stå langs siden.', en: 'Shade the back lightly and keep the belly light – then the fish looks round. Leave a light stripe along its side.' },
      strokes: [
        { d: 'M96 186 C140 120 262 116 312 190 C262 140 140 146 96 186 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M120 230 C170 262 250 262 300 224 C250 248 170 250 120 230 Z', kind: 'shade', fill: 'soft', tone: 0.15 },
        { d: 'M140 196 C190 186 240 186 288 196 C240 192 190 192 140 196 Z', kind: 'shade', fill: 'paper' },
      ],
    },
    {
      text: { da: 'Tegn en havbund med sten og tang, der bølger op, og flere bobler. Farvelæg!', en: 'Draw a seabed with stones and seaweed waving up, and more bubbles. Colour it in!' },
      strokes: [
        { d: 'M10 376 Q100 362 200 372 Q300 382 390 368' },
        { d: 'M40 376 Q28 340 44 310 Q58 284 48 256 Q66 282 56 312 Q42 342 52 376 M62 376 Q72 346 62 322 Q52 298 66 274 Q76 300 72 322 Q84 348 74 376' },
        { d: 'M330 374 Q318 332 338 302 Q354 276 344 248 Q364 276 350 304 Q332 334 342 374' },
        { d: 'M120 374 Q130 360 146 366 Q150 376 120 374 Z M240 378 Q252 362 270 370 Q272 380 240 378 Z' },
        { d: `${circle(330, 210, 4)} ${circle(316, 240, 6)}` },
      ],
    },
  ],
  praise: [{ da: 'Den fisk glimter i vandet!', en: 'That fish is shimmering in the water!' }],
  nextTip: { da: 'Tegn en stime af fisk, der svømmer i samme retning.', en: 'Draw a school of fish swimming in the same direction.' },
}
