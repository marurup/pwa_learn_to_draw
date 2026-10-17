import { circle, transform } from '../shapes'
import type { Lesson } from '../types'

// The dolphin's outline from the base lesson, reused small for a baby dolphin.
const outline = [
  'M92 276 Q166 104 298 166 Q330 182 346 214',
  'M346 214 Q358 234 350 246 L370 272 Q352 270 332 260 Q244 206 112 292',
  'M92 276 Q70 260 44 266 Q64 284 74 302 Q74 322 60 340 Q94 326 112 292',
  'M182 160 Q196 106 234 102 Q214 124 224 150',
].join(' ')
const baby = transform(outline, 0.32, 14, 14)
const drops = 'M56 330 q-6 -12 0 -18 q6 6 0 18 Z M80 318 q-4 -9 0 -13 q4 4 0 13 Z M344 290 q-5 -10 0 -15 q5 5 0 15 Z M360 300 q-4 -8 0 -12 q4 4 0 12 Z'

export const dolphinDetail: Lesson = {
  id: 'dolphin-detail',
  title: { da: 'Delfin med unge', en: 'Dolphin with a baby' },
  category: 'dyr',
  sub: 'fisk',
  level: 3,
  style: 'detaljer',
  base: 'dolphin',
  minutes: 15,
  intro: {
    da: 'Byg videre på din delfin: mørk ryg og lys mave, glans, vandsprøjt – og en lille delfinunge, der hopper med.',
    en: 'Build on your dolphin: a dark back and a light tummy, shine, splashing water – and a little baby dolphin jumping along.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Skyg delfinens ryg mørkere end maven. Delfiner er mørke foroven og lyse forneden.',
        en: 'Shade the dolphin’s back darker than its tummy. Dolphins are dark on top and light underneath.',
      },
      strokes: [{ d: 'M92 276 Q166 104 298 166 Q330 182 346 214 Q300 200 240 196 Q160 200 110 280 Z', kind: 'shade', fill: 'soft', tone: 0.35 }],
    },
    {
      text: { da: 'Lad en lang, hvid glans stå hen over ryggen og en lille prik i øjet.', en: 'Leave a long white shine across the back and a little dot in the eye.' },
      strokes: [{ d: 'M140 200 Q190 140 270 152 Q190 152 146 206 Z', kind: 'shade', fill: 'paper' }, { d: circle(320, 218, 1.6), kind: 'shade', fill: 'paper' }],
    },
    {
      text: { da: 'Tegn en lille delfinunge, der hopper med oppe i hjørnet.', en: 'Draw a little baby dolphin jumping along up in the corner.' },
      tip: { da: 'Ungen har samme form – den er bare meget mindre.', en: 'The baby has the same shape – it is just much smaller.' },
      strokes: [{ d: baby }, { d: circle(117, 84, 2), kind: 'shade', tone: 0.95 }],
    },
    {
      text: { da: 'Tegn vanddråber, der sprøjter, og en bølge mere forneden. Farvelæg havet!', en: 'Draw drops of water splashing, and one more wave at the bottom. Colour in the sea!' },
      strokes: [{ d: drops }, { d: 'M10 380 q20 -10 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0', weight: 0.8 }],
    },
  ],
  praise: [{ da: 'Delfinerne leger i bølgerne – hvor er det flot!', en: 'The dolphins are playing in the waves – how lovely!' }],
  nextTip: { da: 'Tegn en hel flok delfiner, der hopper i en bue efter hinanden.', en: 'Draw a whole pod of dolphins jumping in an arc one after another.' },
}
