import { circle } from '../shapes'
import type { Lesson } from '../types'

export const eggShape = 'M200 70 Q262 72 286 196 Q304 330 200 340 Q96 330 114 196 Q138 72 200 70 Z'

const zigzag = 'M124 184 ' + Array.from({ length: 12 }, (_, i) => `L${124 + (i + 1) * 12.7} ${i % 2 ? 184 : 164}`).join(' ')
const wave = (x0: number, y: number, n: number, step: number) =>
  `M${x0} ${y} ` + Array.from({ length: n }, (_, i) => `q${step / 2} ${i % 2 ? 12 : -12} ${step} 0`).join(' ')

export const EGG = {
  bandTop: 'M126 150 Q200 162 274 150 M115 190 Q200 202 285 190',
  zigzag,
  waves: `${wave(112, 250, 8, 22)} ${wave(116, 270, 8, 21)}`,
  dots: [[184, 104], [216, 104], [170, 128], [200, 124], [230, 128], [160, 300], [200, 306], [240, 300], [180, 324], [220, 324]]
    .map(([x, y]) => circle(x, y, 5))
    .join(' '),
}

export const easterEgg: Lesson = {
  id: 'easter-egg',
  title: { da: 'Påskeæg', en: 'Easter egg' },
  category: 'hoejtider',
  sub: 'paaske',
  level: 1,
  minutes: 8,
  intro: {
    da: 'Et stort påskeæg med zigzag, bølger og prikker – du bestemmer farverne!',
    en: 'A big Easter egg with zigzags, waves and dots – you choose the colours!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et stort æg – smallere foroven og bredere forneden.', en: 'Draw a big egg – narrower at the top and wider at the bottom.' },
      strokes: [{ d: eggShape }],
    },
    {
      text: { da: 'Tegn to buede streger tværs over ægget, så der bliver et bånd.', en: 'Draw two curved lines across the egg to make a band.' },
      strokes: [{ d: EGG.bandTop }],
    },
    {
      text: { da: 'Tegn en zigzag inde i båndet.', en: 'Draw a zigzag inside the band.' },
      strokes: [{ d: EGG.zigzag }],
    },
    {
      text: { da: 'Tegn to bølgestreger længere nede.', en: 'Draw two wavy lines further down.' },
      strokes: [{ d: EGG.waves }],
    },
    {
      text: { da: 'Tegn prikker foroven og forneden, og farvelæg ægget i dine yndlingsfarver.', en: 'Draw dots at the top and bottom, and colour the egg in your favourite colours.' },
      strokes: [
        { d: EGG.dots },
        { d: eggShape, kind: 'shade', tone: 0.15 },
        { d: 'M126 150 Q200 162 274 150 L285 190 Q200 202 115 190 Z', kind: 'shade', tone: 0.35 },
        { d: EGG.dots, kind: 'shade', tone: 0.5 },
      ],
    },
  ],
  praise: [{ da: 'Det er det flotteste påskeæg – hvem mon finder det?', en: 'That is the prettiest Easter egg – I wonder who will find it?' }],
  nextTip: { da: 'Lav dit eget mønster med hjerter, stjerner eller blomster.', en: 'Make your own pattern with hearts, stars or flowers.' },
}
