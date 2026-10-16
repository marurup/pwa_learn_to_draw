import { arc, circle } from '../shapes'
import type { Lesson } from '../types'

const scales = [
  [140, 182],
  [140, 212],
  [166, 168],
  [166, 197],
  [166, 226],
  [192, 182],
  [192, 212],
]
  .map(([x, y]) => arc(x, y, 13, -80, 80))
  .join(' ')

export const fish: Lesson = {
  id: 'fish',
  title: { da: 'Fisk', en: 'Fish' },
  category: 'dyr',
  sub: 'fisk',
  level: 2,
  minutes: 10,
  intro: {
    da: 'En glad fisk med finner og skæl. Den starter som en citron på siden!',
    en: 'A happy fish with fins and scales. It starts as a lemon on its side!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn kroppen som en citron, der ligger ned: spids i begge ender, tyk på midten.', en: 'Draw the body like a lemon lying down: pointy at both ends, fat in the middle.' },
      tip: { da: 'Tegn først den øverste bue og så den nederste.', en: 'Draw the top curve first, then the bottom one.' },
      strokes: [{ d: 'M80 200 C130 110 270 100 322 200' }, { d: 'M80 200 C130 290 270 300 322 200' }],
    },
    {
      text: { da: 'Tegn halen bagest: en trekant med en bue i enden.', en: 'Draw the tail at the back: a triangle with a curve at the end.' },
      strokes: [{ d: 'M80 200 L32 148 Q50 200 32 252 Z' }],
    },
    {
      text: { da: 'Tegn et stort øje tæt på næsen og en lille smilemund.', en: 'Draw a big eye close to the nose and a small smile.' },
      strokes: [
        { d: circle(274, 182, 14) },
        { d: circle(278, 183, 6), kind: 'shade', tone: 0.9 },
        { d: 'M321 206 Q308 216 296 208' },
      ],
    },
    {
      text: { da: 'Tegn gællerne: en bue bag øjet, fra toppen til bunden.', en: 'Draw the gills: a curve behind the eye, from top to bottom.' },
      strokes: [{ d: 'M238 136 Q262 200 238 264' }],
    },
    {
      text: { da: 'Tegn finner: en stor på ryggen, en lille på maven og en midt på siden.', en: 'Draw fins: a big one on the back, a small one on the belly and one on the side.' },
      strokes: [
        { d: 'M140 142 Q160 82 236 128' },
        { d: 'M168 262 Q176 300 212 271' },
        { d: 'M206 208 Q236 214 232 244 Q210 236 206 208' },
      ],
    },
    {
      text: { da: 'Tegn skæl som små buer på kroppen.', en: 'Draw scales as small curves on the body.' },
      tip: { da: 'Skællene behøver ikke dække hele fisken. Et par stykker er nok.', en: 'The scales do not have to cover the whole fish. A few are enough.' },
      strokes: [{ d: scales }],
    },
    {
      text: { da: 'Tegn bobler og striber på halen. Farvelæg fisken i dine yndlingsfarver!', en: 'Draw bubbles and stripes on the tail. Colour the fish in your favourite colours!' },
      strokes: [
        { d: 'M44 168 L66 196 M42 232 L66 204' },
        { d: circle(346, 178, 9) },
        { d: circle(360, 142, 7) },
        { d: circle(350, 112, 5) },
      ],
    },
  ],
  praise: [{ da: 'Sikke nogle flotte finner! Den fisk kan svømme langt.', en: 'What lovely fins! That fish can swim far.' }],
  nextTip: { da: 'Tegn en fiskefamilie: en stor, en mellem og en lille fisk.', en: 'Draw a fish family: a big, a medium and a small fish.' },
}
