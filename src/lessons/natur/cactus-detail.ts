import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const ribSpines = [
  [190, 168],
  [192, 232],
  [208, 196],
  [208, 262],
  [148, 186],
  [256, 208],
]
  .map(([x, y]) => `M${x} ${y} l-6 -4 M${x} ${y} l6 -4 M${x} ${y} v-7`)
  .join(' ')
const soil = Array.from({ length: 10 }, (_, i) => circle(140 + i * 13, 290 + (i % 2) * 4, 2)).join(' ')
const potDots = Array.from({ length: 8 }, (_, i) => circle(162 + i * 11, 344, 2)).join(' ')

export const cactusDetail: Lesson = {
  id: 'cactus-detail',
  title: { da: 'Kaktus med mønstret potte', en: 'Cactus with a patterned pot' },
  category: 'natur',
  sub: 'blomster',
  level: 2,
  style: 'detaljer',
  base: 'cactus',
  minutes: 10,
  intro: {
    da: 'Byg videre på din kaktus: flere torne, jord i potten, prikker på potten og skygger, der gør kaktussen rund.',
    en: 'Build on your cactus: more spines, soil in the pot, dots on the pot and shadows that make the cactus round.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn små stjerner af torne langs stregerne på kaktussen.', en: 'Draw little stars of spines along the lines on the cactus.' },
      strokes: [{ d: ribSpines, weight: 0.6 }],
    },
    {
      text: { da: 'Tegn en prik i midten af blomsten og jord i potten.', en: 'Draw a dot in the middle of the flower and soil in the pot.' },
      strokes: [{ d: circle(200, 124, 4), kind: 'shade', tone: 0.6 }, { d: soil, kind: 'shade', tone: 0.6 }],
    },
    {
      text: { da: 'Tegn en række prikker på potten under zigzag-mønstret.', en: 'Draw a row of dots on the pot under the zigzag pattern.' },
      strokes: [{ d: potDots }],
    },
    {
      text: {
        da: 'Skyg kaktussens højre side, så den ser rund ud, og pottens højre side. Tegn skyggen på bordet. Farvelæg!',
        en: 'Shade the right side of the cactus so it looks round, and the right side of the pot. Draw the shadow on the table. Colour it in!',
      },
      strokes: [
        { d: 'M214 140 Q228 150 228 170 V280 H214 Z M248 192 Q262 194 262 206 V232 Q262 246 248 246 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M232 302 H262 L250 372 H226 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: ellipse(240, 376, 70, 6), kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Den kaktus er stikkende flot!', en: 'That cactus is prickly perfect!' }],
  nextTip: { da: 'Tegn en vindueskarm med tre forskellige kaktusser i potter.', en: 'Draw a windowsill with three different cacti in pots.' },
}
