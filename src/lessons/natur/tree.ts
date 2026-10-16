import { circle } from '../shapes'
import type { Lesson } from '../types'

const apples = [
  [150, 120],
  [236, 98],
  [282, 160],
  [190, 176],
  [118, 186],
]

export const tree: Lesson = {
  id: 'tree',
  title: { da: 'Æbletræ', en: 'Apple tree' },
  category: 'natur',
  level: 2,
  minutes: 10,
  intro: {
    da: 'Et stort træ med en bulet trækrone, en stamme med grene og røde æbler.',
    en: 'A big tree with a bumpy crown, a trunk with branches and red apples.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn trækronen som en stor sky med buler hele vejen rundt.', en: 'Draw the crown as a big cloud with bumps all the way round.' },
      tip: { da: 'Lav bulerne i forskellige størrelser – så ligner det rigtige blade.', en: 'Make the bumps different sizes – then it looks like real leaves.' },
      strokes: [
        {
          d: 'M140 232 Q94 234 92 194 Q66 164 96 132 Q92 88 140 80 Q160 42 206 50 Q248 36 272 74 Q318 76 318 120 Q344 152 318 188 Q314 230 266 232 Q238 250 208 238 Q176 252 140 232 Z',
        },
      ],
    },
    {
      text: { da: 'Tegn stammen: to streger ned fra kronen, der bliver lidt bredere forneden.', en: 'Draw the trunk: two lines down from the crown that get a little wider at the bottom.' },
      strokes: [{ d: 'M182 242 Q188 300 176 360' }, { d: 'M222 238 Q214 300 226 360' }],
    },
    {
      text: { da: 'Tegn rødder forneden og en streg for jorden.', en: 'Draw roots at the bottom and a line for the ground.' },
      strokes: [{ d: 'M176 360 Q166 366 150 370' }, { d: 'M226 360 Q236 366 252 370' }, { d: 'M40 370 H360' }],
    },
    {
      text: { da: 'Tegn to grene, der går fra stammen og op i kronen.', en: 'Draw two branches going from the trunk up into the crown.' },
      strokes: [{ d: 'M186 262 Q172 226 150 214' }, { d: 'M218 256 Q236 222 260 212' }],
    },
    {
      text: { da: 'Tegn æbler i trækronen – små cirkler med en lille stilk.', en: 'Draw apples in the crown – small circles with a tiny stem.' },
      strokes: apples.flatMap(([x, y]) => [{ d: circle(x, y, 11) }, { d: `M${x} ${y - 11} q2 -6 6 -8` }]),
    },
    {
      text: { da: 'Tegn bark-streger på stammen og et æble, der er faldet ned. Farvelæg træet!', en: 'Draw bark lines on the trunk and an apple that has fallen down. Colour in the tree!' },
      strokes: [{ d: 'M196 280 q4 10 0 20 M208 310 q-4 10 0 20 M200 336 q3 8 0 14' }, { d: circle(300, 360, 10) }, { d: 'M300 350 q2 -6 6 -8' }],
    },
  ],
  praise: [{ da: 'Mmm, de æbler ser lækre ud!', en: 'Mmm, those apples look tasty!' }],
  nextTip: { da: 'Tegn det samme træ om vinteren, foråret eller efteråret.', en: 'Draw the same tree in winter, spring or autumn.' },
}
