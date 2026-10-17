import { pixels } from '../shapes'
import type { Lesson } from '../types'

/** A small isometric cube with its top corner at (x, y). */
const cube = (x: number, y: number, s: number) => {
  const h = s * 0.577
  return `M${x} ${y} l${s} ${h} l${-s} ${h} l${-s} ${-h} Z M${x - s} ${y + h} v${s} l${s} ${h} l${s} ${-h} v${-s} M${x} ${y + 2 * h} v${s}`
}
const cubeLeft = (x: number, y: number, s: number) => `M${x - s} ${y + s * 0.577} v${s} l${s} ${s * 0.577} v${-s} Z`
const cubeRight = (x: number, y: number, s: number) => `M${x} ${y + s * 1.155} l${s} ${-s * 0.577} v${s} l${-s} ${s * 0.577} Z`
// Grass blades that curve outwards, and a pixel flower on a stem.
const tufts = 'M160 146 q-2 -10 -10 -16 M164 146 q0 -12 2 -22 M168 146 q4 -10 12 -14 M236 156 q-2 -8 -8 -14 M240 156 q0 -10 2 -18 M244 156 q4 -8 10 -12'
const flower = `M206 134 V106 M206 122 q-10 -2 -12 -10 ${pixels([[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]], 196, 84, 8)}`
const plants = `${tufts} ${flower}`
const roots = 'M150 300 q-4 20 4 36 M200 330 q6 24 -4 42 M256 302 q6 18 -2 34 M118 284 q-6 14 0 26'
const clouds = 'M40 40 H100 V56 H116 V72 H24 V56 H40 Z M290 30 H350 V46 H370 V62 H274 V46 H290 Z'

export const grassBlockDetail: Lesson = {
  id: 'grass-block-detail',
  title: { da: 'Svævende blok-ø', en: 'Floating block island' },
  category: 'spil',
  sub: 'blokke',
  level: 3,
  style: 'detaljer',
  base: 'grass-block',
  minutes: 18,
  intro: {
    da: 'Byg videre på din græsblok: planter ovenpå, rødder og små blokke, der svæver, og skygger med tre toner, så blokken bliver helt 3D.',
    en: 'Build on your grass block: plants on top, roots and little floating blocks, and three-tone shading that makes the block truly 3D.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn græsstrå og en lille blomst på toppen.', en: 'Draw blades of grass and a little flower on top.' },
      strokes: [{ d: plants }],
    },
    {
      text: { da: 'Tegn rødder, der hænger ned under blokken.', en: 'Draw roots hanging down under the block.' },
      strokes: [{ d: roots }],
    },
    {
      text: { da: 'Tegn to små blokke, der svæver ved siden af – samme form, bare mindre.', en: 'Draw two little blocks floating beside it – the same shape, just smaller.' },
      strokes: [{ d: `${cube(70, 300, 26)} ${cube(334, 310, 20)}` }],
    },
    {
      text: { da: 'Tegn kantede skyer på himlen.', en: 'Draw blocky clouds in the sky.' },
      strokes: [{ d: clouds }],
    },
    {
      text: {
        da: 'Lyset kommer oppefra: lad toppen være lysest, skyg venstre side lidt og højre side mest. Gør det samme på de små blokke.',
        en: 'The light comes from above: keep the top lightest, shade the left side a little and the right side the most. Do the same on the little blocks.',
      },
      tip: { da: 'Tre sider, tre toner – så ser en blok rigtig 3D ud.', en: 'Three sides, three tones – that makes a block look truly 3D.' },
      strokes: [
        { d: 'M96 150 V270 L200 330 V210 Z', kind: 'shade', tone: 0.15 },
        { d: 'M304 150 V270 L200 330 V210 Z', kind: 'shade', tone: 0.35 },
        { d: `${cubeLeft(70, 300, 26)} ${cubeLeft(334, 310, 20)}`, kind: 'shade', tone: 0.2 },
        { d: `${cubeRight(70, 300, 26)} ${cubeRight(334, 310, 20)}`, kind: 'shade', tone: 0.4 },
      ],
    },
  ],
  praise: [{ da: 'En hel lille ø, der svæver – og den ser helt 3D ud!', en: 'A whole little island floating in the air – and it looks totally 3D!' }],
  nextTip: { da: 'Tegn et lille blokhus oven på øen.', en: 'Draw a little block house on top of the island.' },
}
