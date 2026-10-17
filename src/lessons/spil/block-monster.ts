import { rect } from '../shapes'
import type { Lesson } from '../types'

export const MONSTER = {
  head: rect(150, 70, 100, 90),
  body: rect(165, 160, 70, 150),
  feet: `${rect(145, 310, 45, 50)} ${rect(210, 310, 45, 50)}`,
  eyes: `${rect(168, 96, 22, 22)} ${rect(210, 96, 22, 22)}`,
  mouth: 'M176 134 H224 V146 H212 V140 H188 V146 H176 Z',
  spots: [[158, 142], [232, 78], [176, 190], [216, 230], [184, 272], [152, 326], [238, 330]].map(([x, y]) => rect(x, y, 8, 8)).join(' '),
}

export const blockMonster: Lesson = {
  id: 'block-monster',
  title: { da: 'Grønt blokmonster', en: 'Green block monster' },
  category: 'spil',
  sub: 'blokke',
  level: 1,
  minutes: 6,
  intro: {
    da: 'Et grønt, firkantet monster fra blokverdenen med et surt ansigt og små fødder.',
    en: 'A green, square monster from the block world with a grumpy face and little feet.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn en stor firkant til hovedet.', en: 'Draw a big square for the head.' },
      strokes: [{ d: MONSTER.head }],
    },
    {
      text: { da: 'Tegn en lang, smallere firkant til kroppen.', en: 'Draw a long, narrower rectangle for the body.' },
      strokes: [{ d: MONSTER.body }],
    },
    {
      text: { da: 'Tegn to firkantede fødder forneden.', en: 'Draw two square feet at the bottom.' },
      strokes: [{ d: MONSTER.feet }],
    },
    {
      text: { da: 'Tegn to firkantede øjne og en sur, kantet mund.', en: 'Draw two square eyes and a grumpy, blocky mouth.' },
      strokes: [{ d: `${MONSTER.eyes} ${MONSTER.mouth}`, kind: 'shade', tone: 0.9 }, { d: `${MONSTER.eyes} ${MONSTER.mouth}` }],
    },
    {
      text: { da: 'Tegn små firkantede pletter, og farvelæg monsteret grønt.', en: 'Draw little square spots, and colour the monster green.' },
      strokes: [
        { d: MONSTER.spots },
        { d: `${MONSTER.head} ${MONSTER.body} ${MONSTER.feet}`, kind: 'shade', tone: 0.35 },
        { d: MONSTER.spots, kind: 'shade', tone: 0.6 },
      ],
    },
  ],
  praise: [{ da: 'Uha, det ser surt ud – men det er nu ret sødt!', en: 'Uh-oh, it looks grumpy – but it is actually quite cute!' }],
  nextTip: { da: 'Tegn monsteret, der gemmer sig bag et blok-træ.', en: 'Draw the monster hiding behind a block tree.' },
}
