import { circle, ellipse, line } from '../shapes'
import type { Lesson } from '../types'

const lights = [
  [162, 206], [184, 216], [206, 218], [228, 208],
  [152, 288], [174, 298], [198, 302], [222, 298], [244, 286],
].map(([x, y]) => ellipse(x, y + 4, 3, 4.5)).join(' ')
// Rays only above the star, so they don't run into the tree.
const rays = [-180, -150, -120, -90, -60, -30, 0]
  .map((deg) => (deg * Math.PI) / 180)
  .map((a) => line(200 + 30 * Math.cos(a), 70 + 30 * Math.sin(a), 200 + 42 * Math.cos(a), 70 + 42 * Math.sin(a)))
  .join(' ')
const giftL = 'M30 334 H90 V388 H30 Z M60 334 V388 M30 356 H90'
const bowL = 'M60 334 Q44 316 40 328 Q44 336 60 334 Q76 316 80 328 Q76 336 60 334'
const giftR = 'M314 352 H374 V388 H314 Z M344 352 V388'
const giftTop = 'M326 330 H362 V352 H326 Z M344 330 V352'
const bowR = 'M344 330 Q330 314 326 324 Q330 332 344 330 Q358 314 362 324 Q358 332 344 330'

export const christmasTreeDetail: Lesson = {
  id: 'christmas-tree-detail',
  title: { da: 'Juletræ med lys og gaver', en: 'Christmas tree with lights and presents' },
  category: 'hoejtider',
  sub: 'jul',
  level: 2,
  style: 'detaljer',
  base: 'christmas-tree',
  minutes: 15,
  intro: {
    da: 'Byg videre på dit juletræ: en stjerne, der stråler, små lys på guirlanderne og gaver under træet.',
    en: 'Build on your Christmas tree: a shining star, little lights on the garlands and presents under the tree.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn korte stråler rundt om stjernen, så den skinner.', en: 'Draw short rays around the star so it shines.' },
      strokes: [{ d: rays, weight: 0.7 }],
    },
    {
      text: { da: 'Tegn små lys som dråber langs guirlanderne.', en: 'Draw little lights like drops along the garlands.' },
      strokes: [{ d: lights }],
    },
    {
      text: { da: 'Tegn gaver under træet – en stor til venstre og to stablede til højre – med bånd og sløjfer.', en: 'Draw presents under the tree – a big one on the left and two stacked on the right – with ribbons and bows.' },
      strokes: [{ d: `${giftL} ${bowL}` }, { d: `${giftR} ${giftTop} ${bowR}` }],
    },
    {
      text: {
        da: 'Skyg træet i den ene side, og lad en hvid prik stå på hver kugle. Farvelæg lysene gule og gaverne i flotte farver.',
        en: 'Shade one side of the tree, and leave a white dot on every bauble. Colour the lights yellow and the presents in bright colours.',
      },
      tip: { da: 'Den hvide prik får kuglerne til at skinne.', en: 'The white dot makes the baubles shine.' },
      strokes: [
        { d: 'M200 94 L254 170 L230 174 L282 252 L240 257 L304 336 Q260 344 236 346 Q260 300 226 256 Q240 216 214 170 Q222 130 200 94 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: [circle(173, 147, 2), circle(220, 138, 1.8), circle(147, 227, 2.4), circle(211, 227, 2), circle(250, 234, 1.6), circle(127, 315, 2.4), circle(187, 321, 2), circle(241, 313, 2.4)].join(' '), kind: 'shade', fill: 'paper' },
        { d: lights, kind: 'shade', tone: 0.15 },
        { d: 'M30 334 H90 V388 H30 Z M314 352 H374 V388 H314 Z', kind: 'shade', tone: 0.35 },
        { d: 'M326 330 H362 V352 H326 Z', kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [{ da: 'Træet stråler – og se alle de gaver!', en: 'The tree is shining – and look at all those presents!' }],
  nextTip: { da: 'Tegn en kat, der gemmer sig mellem gaverne.', en: 'Draw a cat hiding between the presents.' },
}
