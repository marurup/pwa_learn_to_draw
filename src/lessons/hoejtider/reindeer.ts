import { circle, ellipse, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const earL = 'M156 146 Q118 132 104 154 Q124 172 154 166'
const antlerL = 'M178 112 Q166 84 150 62 M166 88 Q148 86 134 94 M156 72 Q160 56 170 46'

export const REINDEER = {
  head: 'M150 150 Q146 220 160 260 Q172 292 200 292 Q228 292 240 260 Q254 220 250 150 Q246 108 200 108 Q154 108 150 150 Z',
  ears: `${earL} ${mirrorX(earL, 200)}`,
  antlers: `${antlerL} ${mirrorX(antlerL, 200)}`,
  eyes: `${circle(178, 178, 9)} ${circle(222, 178, 9)}`,
  muzzle: ellipse(200, 258, 34, 24),
  nose: ellipse(200, 240, 16, 12),
}

export const reindeer: Lesson = {
  id: 'reindeer',
  title: { da: 'Rensdyr', en: 'Reindeer' },
  category: 'hoejtider',
  sub: 'jul',
  level: 1,
  minutes: 8,
  intro: {
    da: 'Julemandens søde rensdyr med store gevirer og en rød, skinnende næse.',
    en: 'Santa’s sweet reindeer with big antlers and a shiny red nose.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn hovedet som et langt, rundt æg.', en: 'Draw the head like a long, round egg.' },
      strokes: [{ d: REINDEER.head }],
    },
    {
      text: { da: 'Tegn to ører, der stikker ud til siden.', en: 'Draw two ears sticking out to the sides.' },
      strokes: [{ d: REINDEER.ears }],
    },
    {
      text: { da: 'Tegn gevirerne som grene med små takker.', en: 'Draw the antlers like branches with little points.' },
      strokes: [{ d: REINDEER.antlers, weight: 1.3 }],
    },
    {
      text: { da: 'Tegn store øjne, en mule, en stor rund næse og et smil.', en: 'Draw big eyes, a muzzle, a big round nose and a smile.' },
      strokes: [
        { d: REINDEER.eyes, kind: 'shade', tone: 0.9 },
        { d: REINDEER.muzzle },
        { d: REINDEER.nose },
        { d: 'M184 266 Q200 278 216 266' },
      ],
    },
    {
      text: { da: 'Farvelæg rensdyret brunt og næsen knaldrød!', en: 'Colour the reindeer brown and the nose bright red!' },
      strokes: [
        // The muzzle runs the other way round from the head, so it stays a lighter hole in the brown.
        { d: `${REINDEER.head} ${REINDEER.muzzle} ${earL} Z ${mirrorX(earL, 200)} Z`, kind: 'shade', tone: 0.35 },
        { d: REINDEER.muzzle, kind: 'shade', tone: 0.12 },
        { d: REINDEER.nose, kind: 'shade', tone: 0.6 },
      ],
    },
  ],
  praise: [{ da: 'Med den næse finder rensdyret vej i selv den mørkeste juleaften!', en: 'With that nose, the reindeer can find the way on the darkest Christmas Eve!' }],
  nextTip: { da: 'Tegn rensdyret med en klokke om halsen.', en: 'Draw the reindeer with a bell around its neck.' },
}
