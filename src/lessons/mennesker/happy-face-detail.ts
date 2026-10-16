import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const lashesL = 'M132 178 l-7 -6 M138 173 l-5 -8 M146 171 l-2 -9'
const freckles = [
  [176, 232],
  [184, 240],
  [170, 242],
  [216, 232],
  [224, 240],
  [230, 230],
]
  .map(([x, y]) => circle(x, y, 2.2))
  .join(' ')

export const happyFaceDetail: Lesson = {
  id: 'happy-face-detail',
  title: { da: 'Glad ansigt med detaljer', en: 'Happy face with details' },
  category: 'mennesker',
  sub: 'ansigter',
  level: 2,
  style: 'detaljer',
  base: 'happy-face',
  minutes: 12,
  intro: {
    da: 'Byg videre på dit glade ansigt: glans i øjnene, øjenvipper, hårlokker, fregner, en åben mund og en trøje.',
    en: 'Build on your happy face: shiny eyes, eyelashes, locks of hair, freckles, an open mouth and a jumper.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Lad en lille prik være hvid i hver pupil – det er glansen. Tegn tre små vipper ved hvert øje.',
        en: 'Leave a small white dot in each pupil – that is the shine. Draw three little lashes by each eye.',
      },
      strokes: [
        { d: `${circle(150, 189, 3)} ${circle(250, 189, 3)}`, kind: 'shade', fill: 'paper' },
        { d: lashesL },
        { d: mirrorX(lashesL, 200) },
      ],
    },
    {
      text: { da: 'Tegn hårlokker: buede streger, der følger hårets retning fra skilningen.', en: 'Draw locks of hair: curved lines that follow the direction of the hair from the parting.' },
      tip: { da: 'Tegn lokker – ikke hvert enkelt hår.', en: 'Draw locks – not every single hair.' },
      strokes: [{ d: 'M170 68 Q154 84 150 112 M200 62 Q188 80 188 104 M232 68 Q248 84 254 112 M120 90 Q106 108 102 138 M282 92 Q296 110 298 140', weight: 0.7 }],
    },
    {
      text: { da: 'Sæt fregner på næsen og kinderne – små prikker i små grupper.', en: 'Put freckles on the nose and cheeks – tiny dots in little groups.' },
      strokes: [{ d: freckles, kind: 'shade', tone: 0.75 }],
    },
    {
      text: { da: 'Gør munden åben: en streg hen over smilet, en række tænder og en lille tunge.', en: 'Open the mouth: a line across the smile, a row of teeth and a little tongue.' },
      strokes: [{ d: 'M144 271 Q200 282 256 271' }, { d: 'M154 276 Q200 290 246 276', weight: 0.7 }, { d: 'M180 293 Q200 280 220 293' }],
    },
    {
      text: { da: 'Tegn en bue inde i hvert øre, og en hals med en trøje.', en: 'Draw a curve inside each ear, and a neck with a jumper.' },
      strokes: [
        { d: 'M70 192 Q60 205 68 222' },
        { d: mirrorX('M70 192 Q60 205 68 222', 200) },
        { d: 'M164 342 L160 380 M236 342 L240 380' },
        { d: 'M96 400 Q110 372 160 376 Q200 392 240 376 Q290 372 304 400' },
      ],
    },
    {
      text: {
        da: 'Skyg let under håret på panden og under hagen. Farvelæg – fx røde kinder og din yndlingsfarve på trøjen!',
        en: 'Shade lightly under the hair on the forehead and under the chin. Colour it in – e.g. red cheeks and your favourite colour on the jumper!',
      },
      strokes: [
        { d: 'M96 166 Q110 132 148 128 Q120 146 108 176 Z M304 166 Q290 132 252 128 Q280 146 292 176 Z', kind: 'shade', fill: 'soft', tone: 0.16 },
        { d: 'M164 344 Q200 362 236 344 L238 362 Q200 376 162 362 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Sikke et livligt ansigt – det ser ud, som om det griner!', en: 'What a lively face – it looks like it is laughing!' }],
  nextTip: { da: 'Tegn dig selv – med din egen frisure og dine egne fregner eller briller.', en: 'Draw yourself – with your own hairstyle and your own freckles or glasses.' },
}
