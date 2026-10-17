import { ellipse, poly, rect } from '../shapes'
import type { Lesson } from '../types'

const spines = [
  [184, 160],
  [216, 176],
  [184, 204],
  [216, 228],
  [184, 252],
  [150, 192],
  [252, 214],
]
  .map(([x, y]) => `M${x - 5} ${y - 5} L${x} ${y} L${x - 5} ${y + 5} M${x} ${y} L${x + 7} ${y}`)
  .join(' ')

const petals = [0, 72, 144, 216, 288]
  .map((deg) => {
    const a = ((deg - 90) * Math.PI) / 180
    return ellipse(200 + 11 * Math.cos(a), 124 + 11 * Math.sin(a), 8, 5, deg - 90)
  })
  .join(' ')

export const cactus: Lesson = {
  id: 'cactus',
  title: { da: 'Kaktus i potte', en: 'Cactus in a pot' },
  category: 'natur',
  sub: 'blomster',
  level: 1,
  minutes: 6,
  intro: {
    da: 'En glad kaktus med arme, torne og en lille blomst på toppen.',
    en: 'A happy cactus with arms, spines and a little flower on top.',
  },
  materials: ['pencil', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn potten: en flad firkant øverst og en bred spand under den.', en: 'Draw the pot: a flat rectangle on top and a wide bucket below it.' },
      strokes: [
        { d: rect(128, 280, 144, 22) },
        {
          d: poly([
            [138, 302],
            [150, 372],
            [250, 372],
            [262, 302],
          ]),
        },
      ],
    },
    {
      text: { da: 'Tegn kaktussen: to lange streger op fra potten med en rund top.', en: 'Draw the cactus: two long lines up from the pot with a round top.' },
      strokes: [{ d: 'M172 280 V170 Q172 132 200 132 Q228 132 228 170 V280' }],
    },
    {
      text: { da: 'Tegn to arme: en på hver side, der peger opad – som en, der vinker.', en: 'Draw two arms: one on each side pointing up – like someone waving.' },
      strokes: [
        { d: 'M172 226 H152 Q138 226 138 212 V182 Q138 168 150 168 Q162 168 162 182 V206 H172' },
        { d: 'M228 246 H248 Q262 246 262 232 V202 Q262 188 250 188 Q238 188 238 202 V226 H228' },
      ],
    },
    {
      text: { da: 'Tegn to buede ribber ned ad kaktussen.', en: 'Draw two curved ribs down the cactus.' },
      strokes: [{ d: 'M190 138 Q184 210 190 280 M210 138 Q216 210 210 280' }],
    },
    {
      text: { da: 'Tegn små torne – små pile, der stikker ud.', en: 'Draw little spines – tiny arrows sticking out.' },
      tip: { da: 'Tornene skal ikke sidde på række. Spred dem lidt.', en: 'The spines should not sit in a row. Spread them out a bit.' },
      strokes: [{ d: spines, weight: 0.7 }],
    },
    {
      text: { da: 'Tegn en lille blomst på toppen og et mønster på potten. Farvelæg!', en: 'Draw a little flower on top and a pattern on the pot. Colour it in!' },
      strokes: [
        { d: petals },
        { d: 'M150 326 L162 314 L174 326 L186 314 L198 326 L210 314 L222 326 L234 314 L246 326', weight: 0.8 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en sød kaktus – og den skal aldrig vandes!', en: 'What a cute cactus – and it never needs watering!' }],
  nextTip: { da: 'Tegn en hel vindueskarm med kaktusser i forskellige former.', en: 'Draw a whole windowsill of cactuses in different shapes.' },
}
