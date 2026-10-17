import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const wingL = 'M140 230 Q108 254 124 290 Q146 284 156 254'

export const CHICK = {
  head: circle(200, 150, 50),
  body: 'M158 176 Q104 214 114 284 Q130 344 200 346 Q270 344 286 284 Q296 214 242 176',
  beak: 'M186 164 L200 156 L214 164 L200 178 Z M186 164 H214',
  wings: `${wingL} ${mirrorX(wingL, 200)}`,
  feet: 'M180 346 V362 M168 370 L180 362 L192 370 M220 346 V362 M208 370 L220 362 L232 370',
}

export const chick: Lesson = {
  id: 'chick',
  title: { da: 'Påskekylling', en: 'Easter chick' },
  category: 'hoejtider',
  sub: 'paaske',
  level: 1,
  minutes: 6,
  intro: {
    da: 'En lille, gul og blød påskekylling med store øjne og små vinger.',
    en: 'A little, fluffy yellow Easter chick with big eyes and tiny wings.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en cirkel til hovedet og en stor, rund krop nedenunder.', en: 'Draw a circle for the head and a big round body underneath.' },
      strokes: [{ d: CHICK.head }, { d: CHICK.body }],
    },
    {
      text: { da: 'Tegn to store øjne og et lille næb.', en: 'Draw two big eyes and a little beak.' },
      strokes: [
        { d: `${circle(182, 144, 6)} ${circle(218, 144, 6)}`, kind: 'shade', tone: 0.9 },
        { d: `${circle(184, 141, 2)} ${circle(220, 141, 2)}`, kind: 'shade', fill: 'paper' },
        { d: CHICK.beak },
      ],
    },
    {
      text: { da: 'Tegn to små vinger og en dun-tot på hovedet.', en: 'Draw two little wings and a tuft of fluff on its head.' },
      strokes: [{ d: CHICK.wings }, { d: 'M194 101 Q186 86 196 80 M202 100 Q206 84 218 86' }],
    },
    {
      text: { da: 'Tegn tynde ben og fødder med tre tæer. Farvelæg kyllingen gul og næb og fødder orange.', en: 'Draw thin legs and feet with three toes. Colour the chick yellow and the beak and feet orange.' },
      strokes: [
        { d: CHICK.feet },
        // The body is mirrored so it runs the same way round as the head, and they colour as one shape.
        { d: `${CHICK.head} ${mirrorX(CHICK.body, 200)} Z`, kind: 'shade', tone: 0.2 },
        { d: CHICK.beak, kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Pip pip! Sikke en sød lille kylling!', en: 'Cheep cheep! What a sweet little chick!' }],
  nextTip: { da: 'Tegn kyllingen, mens den kigger ud af ægget.', en: 'Draw the chick peeking out of its egg.' },
}
