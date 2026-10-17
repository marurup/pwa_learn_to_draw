import { circle, poly, starPoints } from '../shapes'
import type { Lesson } from '../types'

export const TREE = {
  star: poly(starPoints(200, 70, 24, 10), true),
  top: 'M200 94 L146 170 Q200 182 254 170 Z',
  middle: 'M170 174 L118 252 Q200 266 282 252 L230 174',
  bottom: 'M160 257 L96 336 Q200 352 304 336 L240 257',
  trunk: 'M184 344 V376 H216 V344',
  garlands: 'M153 200 Q200 228 245 196 M141 280 Q200 310 255 276',
  baubles: [circle(176, 150, 7), circle(222, 140, 6), circle(150, 230, 8), circle(214, 230, 7), circle(252, 236, 6), circle(130, 318, 8), circle(190, 324, 7), circle(244, 316, 8), circle(282, 326, 5)].join(' '),
}

// The tree as one closed shape, for colouring.
export const treeShape = 'M200 94 L146 170 Q158 173 170 174 L118 252 Q139 256 160 257 L96 336 Q200 352 304 336 L240 257 Q261 256 282 252 L230 174 Q242 173 254 170 Z'

export const christmasTree: Lesson = {
  id: 'christmas-tree',
  title: { da: 'Juletræ', en: 'Christmas tree' },
  category: 'hoejtider',
  sub: 'jul',
  level: 1,
  minutes: 8,
  intro: {
    da: 'Et juletræ af tre trekanter med en stjerne i toppen, julekugler og guirlander.',
    en: 'A Christmas tree made of three triangles with a star on top, baubles and garlands.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en stjerne øverst på papiret.', en: 'Draw a star at the top of the paper.' },
      strokes: [{ d: TREE.star }],
    },
    {
      text: { da: 'Tegn en trekant under stjernen. Bunden må gerne bue lidt.', en: 'Draw a triangle under the star. The bottom can curve a little.' },
      strokes: [{ d: TREE.top }],
    },
    {
      text: { da: 'Tegn to større trekanter nedenunder – hver starter under den forrige.', en: 'Draw two bigger triangles below – each one starts under the one before.' },
      tip: { da: 'Træet bliver bredere og bredere nedad.', en: 'The tree gets wider and wider towards the bottom.' },
      strokes: [{ d: TREE.middle }, { d: TREE.bottom }],
    },
    {
      text: { da: 'Tegn en lille stamme.', en: 'Draw a little trunk.' },
      strokes: [{ d: TREE.trunk }],
    },
    {
      text: { da: 'Pynt træet med guirlander og runde julekugler.', en: 'Decorate the tree with garlands and round baubles.' },
      strokes: [{ d: TREE.garlands }, { d: TREE.baubles }],
    },
    {
      text: { da: 'Farvelæg træet grønt, stjernen gul og kuglerne i alle de farver, du kan lide!', en: 'Colour the tree green, the star yellow and the baubles in all the colours you like!' },
      strokes: [
        { d: treeShape, kind: 'shade', tone: 0.35 },
        { d: TREE.baubles, kind: 'shade', tone: 0.6 },
        { d: TREE.star, kind: 'shade', tone: 0.15 },
        { d: `${TREE.trunk} Z`, kind: 'shade', tone: 0.55 },
      ],
    },
  ],
  praise: [{ da: 'Sikke et flot juletræ – nu kan julen bare komme!', en: 'What a lovely Christmas tree – Christmas can come now!' }],
  nextTip: { da: 'Tegn gaver under træet.', en: 'Draw presents under the tree.' },
}
