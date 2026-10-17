import { arc, ellipse } from '../shapes'
import type { Lesson } from '../types'

// Little leaf curves just inside the edge of the crown.
const leaves = [
  [110, 190],
  [104, 150],
  [128, 110],
  [168, 82],
  [212, 74],
  [256, 92],
  [292, 122],
  [300, 164],
  [290, 204],
  [250, 222],
  [170, 228],
  [150, 150],
  [200, 120],
  [250, 150],
  [210, 180],
]
  .map(([x, y]) => arc(x, y, 8, 200, 340))
  .join(' ')

export const treeDetail: Lesson = {
  id: 'tree-detail',
  title: { da: 'Æbletræ med gynge', en: 'Apple tree with a swing' },
  category: 'natur',
  level: 3,
  style: 'detaljer',
  base: 'tree',
  minutes: 15,
  intro: {
    da: 'Byg videre på dit æbletræ: blade i kronen, bark og et hul i stammen, en gynge i grenen og skygge under træet.',
    en: 'Build on your apple tree: leaves in the crown, bark and a hole in the trunk, a swing on a branch and shade under the tree.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn små buer rundt i kronen – det er bladene.', en: 'Draw little curves all over the crown – those are the leaves.' },
      tip: { da: 'Du behøver ikke tegne alle blade. Nogle grupper her og der er nok.', en: 'You don’t need to draw every leaf. A few groups here and there are enough.' },
      strokes: [{ d: leaves, weight: 0.6 }],
    },
    {
      text: { da: 'Tegn mere bark på stammen og et hul, hvor et egern kunne bo.', en: 'Draw more bark on the trunk and a hole where a squirrel could live.' },
      strokes: [{ d: 'M190 254 q-3 12 0 24 M212 286 q3 12 0 24 M188 330 q-3 10 0 20 M216 330 q3 10 0 18', weight: 0.7 }, { d: ellipse(204, 300, 7, 10) }],
    },
    {
      text: { da: 'Tegn en gynge, der hænger i to reb fra en gren.', en: 'Draw a swing hanging from a branch on two ropes.' },
      strokes: [{ d: 'M120 228 V316 M152 234 V316' }, { d: 'M112 316 H160 V324 H112 Z' }],
    },
    {
      text: {
        da: 'Skyg undersiden af kronen og stammens højre side, og tegn træets skygge på jorden. Farvelæg!',
        en: 'Shade the underside of the crown and the right side of the trunk, and draw the tree’s shadow on the ground. Colour it in!',
      },
      strokes: [
        { d: 'M100 196 Q122 236 200 242 Q282 238 312 192 Q302 230 266 232 Q238 250 208 238 Q176 252 140 232 Q102 232 100 196 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M210 244 Q204 300 216 358 H226 Q214 300 222 240 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: ellipse(214, 372, 120, 8), kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: ellipse(204, 300, 7, 10), kind: 'shade', tone: 0.8 },
      ],
    },
  ],
  praise: [{ da: 'Det ser ud som det bedste træ at lege under!', en: 'It looks like the best tree to play under!' }],
  nextTip: { da: 'Tegn det samme træ om efteråret med gule og røde blade, der falder.', en: 'Draw the same tree in autumn with yellow and red leaves falling.' },
}
