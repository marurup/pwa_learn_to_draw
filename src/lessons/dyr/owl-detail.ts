import { arc, circle, line, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const discLines = (cx: number) =>
  Array.from({ length: 16 }, (_, i) => {
    const a = ((i * 22.5 - 90) * Math.PI) / 180
    return line(cx + 27 * Math.cos(a), 150 + 27 * Math.sin(a), cx + 39 * Math.cos(a), 150 + 39 * Math.sin(a))
  }).join(' ')

const headFeathers = [
  [180, 96],
  [200, 88],
  [220, 96],
  [190, 112],
  [210, 112],
  [200, 128],
]
  .map(([x, y]) => `M${x - 5} ${y - 3} L${x} ${y + 3} L${x + 5} ${y - 3}`)
  .join(' ')

const wingScallopsL = [
  [118, 222],
  [130, 236],
  [118, 252],
  [130, 268],
  [120, 286],
]
  .map(([x, y]) => arc(x, y, 9, 20, 160))
  .join(' ')
const primariesL = 'M112 300 L122 326 M120 296 L130 326 M128 292 L138 324'

const bellyChevrons = [
  [200, 266],
  [180, 290],
  [220, 290],
  [160, 316],
  [200, 316],
  [240, 316],
]
  .map(([x, y]) => `M${x - 6} ${y - 4} L${x} ${y + 2} L${x + 6} ${y - 4}`)
  .join(' ')

export const owlDetail: Lesson = {
  id: 'owl-detail',
  title: { da: 'Ugle med fjer', en: 'Owl with feathers' },
  category: 'dyr',
  sub: 'fugle',
  level: 3,
  style: 'detaljer',
  base: 'owl',
  minutes: 20,
  intro: {
    da: 'Byg videre på din ugle: glans i øjnene, fjer rundt om ansigtet, lag af fjer på vingerne og skygger.',
    en: 'Build on your owl: shiny eyes, feathers around the face, layers of feathers on the wings and shadows.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Lad en lille prik være hvid i hver pupil, og tegn korte streger rundt om øjnene – som en stjerne af fjer.',
        en: 'Leave a small white dot in each pupil, and draw short lines around the eyes – like a star of feathers.',
      },
      strokes: [
        { d: `${circle(155, 148, 4)} ${circle(235, 148, 4)}`, kind: 'shade', fill: 'paper' },
        { d: discLines(155), weight: 0.5 },
        { d: discLines(245), weight: 0.5 },
      ],
    },
    {
      text: { da: 'Tegn små v-fjer på panden mellem øjnene og fine streger i fjerduskene.', en: 'Draw little v-feathers on the forehead between the eyes and fine lines in the feather tufts.' },
      strokes: [
        { d: headFeathers, weight: 0.6 },
        { d: 'M116 92 L110 62 M126 86 L122 66', weight: 0.6 },
        { d: mirrorX('M116 92 L110 62 M126 86 L122 66', 200), weight: 0.6 },
      ],
    },
    {
      text: {
        da: 'Tegn fjer på vingerne: små buer i rækker øverst og lange fjer forneden.',
        en: 'Draw feathers on the wings: small curves in rows at the top and long feathers at the bottom.',
      },
      tip: { da: 'Fjer ligger som tagsten – hver række overlapper den næste.', en: 'Feathers lie like roof tiles – each row overlaps the next.' },
      strokes: [
        { d: wingScallopsL, weight: 0.6 },
        { d: mirrorX(wingScallopsL, 200), weight: 0.6 },
        { d: primariesL, weight: 0.6 },
        { d: mirrorX(primariesL, 200), weight: 0.6 },
      ],
    },
    {
      text: { da: 'Tegn små v-mærker på maven mellem de buede fjer.', en: 'Draw small v-marks on the belly between the curved feathers.' },
      strokes: [{ d: bellyChevrons, weight: 0.6 }],
    },
    {
      text: { da: 'Giv grenen bark-streger og et par blade på kvisten, og gør kløerne mørke.', en: 'Give the branch bark lines and a couple of leaves on the twig, and make the claws dark.' },
      strokes: [
        { d: 'M60 378 q10 -3 20 0 M120 376 q10 -3 20 0 M260 380 q10 -3 20 0 M310 382 q10 -3 20 0', weight: 0.6 },
        { d: 'M372 352 Q378 334 394 330 Q392 350 372 352 Z M350 358 Q340 342 348 326 Q360 342 350 358 Z M70 366 Q56 350 62 334 Q78 348 70 366 Z' },
        { d: 'M168 374 l-2 4 M182 376 l0 4 M196 374 l2 4 M204 374 l-2 4 M218 376 l0 4 M232 374 l2 4', weight: 1.6 },
      ],
    },
    {
      text: {
        da: 'Skyg uglen: under øjenskiverne, langs højre side af kroppen, under vingerne og under grenen.',
        en: 'Shade the owl: under the eye discs, along the right side of the body, under the wings and under the branch.',
      },
      strokes: [
        { d: 'M118 186 Q155 202 192 186 Q155 196 118 186 Z M208 186 Q245 202 282 186 Q245 196 208 186 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M296 200 Q306 260 290 320 Q276 344 252 352 Q280 300 286 240 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M142 300 Q140 330 130 330 Q120 316 112 300 Z M258 300 Q260 330 270 330 Q280 316 288 300 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M40 384 Q200 376 360 390 Q200 394 40 384 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
      ],
    },
  ],
  praise: [{ da: 'Fjer på fjer – din ugle ser blød og klog ud!', en: 'Feather upon feather – your owl looks soft and wise!' }],
  nextTip: { da: 'Tegn uglen, mens den flyver, med vingerne spredt ud.', en: 'Draw the owl flying, with its wings spread out.' },
}
