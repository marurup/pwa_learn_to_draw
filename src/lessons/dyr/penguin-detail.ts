import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const scarf = 'M138 200 Q200 222 262 200 L264 214 Q200 238 136 214 Z'
const scarfEnd = 'M232 220 L244 262 L228 264 L220 224'
const snow = [
  [60, 80],
  [330, 60],
  [40, 200],
  [356, 180],
  [80, 300],
]
  .map(([x, y]) => `M${x - 6} ${y} H${x + 6} M${x} ${y - 6} V${y + 6} M${x - 4} ${y - 4} L${x + 4} ${y + 4} M${x + 4} ${y - 4} L${x - 4} ${y + 4}`)
  .join(' ')
const chick = `${ellipse(344, 346, 22, 30)} ${ellipse(344, 354, 13, 20)} ${circle(337, 336, 2.5)} ${circle(351, 336, 2.5)} M340 344 L348 344 L344 350 Z M334 376 l-6 8 h12 Z M354 376 l-2 8 h12 Z`

export const penguinDetail: Lesson = {
  id: 'penguin-detail',
  title: { da: 'Pingvin med halstørklæde og unge', en: 'Penguin with a scarf and a chick' },
  category: 'dyr',
  sub: 'fugle',
  level: 2,
  style: 'detaljer',
  base: 'penguin',
  minutes: 12,
  intro: {
    da: 'Byg videre på din pingvin: et stribet halstørklæde, blanke fjer, et isflag, sne – og en lille pingvinunge.',
    en: 'Build on your penguin: a striped scarf, shiny feathers, an ice floe, snow – and a little penguin chick.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Lad en hvid prik være i øjnene og en blank glans på hovedet.', en: 'Leave a white dot in the eyes and a shiny gleam on the head.' },
      strokes: [{ d: `${circle(180, 148, 1.6)} ${circle(224, 148, 1.6)} M150 112 Q168 86 194 80 Q170 94 156 118 Z`, kind: 'shade', fill: 'paper' }],
    },
    {
      text: { da: 'Tegn et halstørklæde om halsen med striber og en ende, der hænger ned.', en: 'Draw a scarf around the neck with stripes and an end hanging down.' },
      strokes: [{ d: scarf }, { d: scarfEnd }, { d: 'M162 210 L164 224 M184 214 L186 228 M206 216 L206 230 M228 212 L226 226 M248 206 L246 220', weight: 0.8 }],
    },
    {
      text: { da: 'Tegn et isflag under pingvinen og vand på hver side.', en: 'Draw an ice floe under the penguin and water on each side.' },
      strokes: [{ d: 'M60 386 H340 M60 386 L74 398 M340 386 L326 398' }, { d: 'M10 394 q10 -6 20 0 q10 6 20 0 M350 394 q10 -6 20 0 q10 6 20 0', weight: 0.8 }],
    },
    {
      text: { da: 'Tegn en lille pingvinunge ved siden af og snefnug i luften.', en: 'Draw a little penguin chick next to it and snowflakes in the air.' },
      strokes: [{ d: chick }, { d: snow, weight: 0.7 }],
    },
    {
      text: { da: 'Farvelæg halstørklædet, og giv ungen grå, bløde dun.', en: 'Colour in the scarf, and give the chick soft grey down.' },
      strokes: [
        { d: `${scarf} ${scarfEnd} Z`, kind: 'shade', tone: 0.35 },
        { d: ellipse(344, 346, 22, 30), kind: 'shade', tone: 0.35 },
        { d: ellipse(344, 354, 13, 20), kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'Mor og unge er klar til en kold dag på isen!', en: 'Mum and chick are ready for a cold day on the ice!' }],
  nextTip: { da: 'Tegn pingvinerne, mens de glider på maven ned ad en isbakke.', en: 'Draw the penguins sliding on their tummies down an icy hill.' },
}
