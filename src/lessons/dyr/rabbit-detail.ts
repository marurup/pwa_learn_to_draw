import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

/** A little daisy: a ring of round petals around a centre, on a stem. */
const daisy = (x: number, y: number) =>
  `M${x} 378 V${y + 8} ` +
  Array.from({ length: 6 }, (_, i) => {
    const a = (i * 60 * Math.PI) / 180
    return circle(x + 7 * Math.cos(a), y + 7 * Math.sin(a), 4)
  }).join(' ') +
  ` ${circle(x, y, 3)}`
const grass = 'M40 378 l5 -12 l5 12 M70 378 l4 -10 l4 10 M262 378 l5 -12 l5 12 M372 378 l4 -10 l4 10'

export const rabbitDetail: Lesson = {
  id: 'rabbit-detail',
  title: { da: 'Kanin i græsset', en: 'Rabbit in the grass' },
  category: 'dyr',
  sub: 'landdyr',
  level: 3,
  style: 'detaljer',
  base: 'rabbit',
  minutes: 15,
  intro: {
    da: 'Byg videre på din kanin: blød pels på kinderne og brystet, græs og blomster, en lille sommerfugl og bløde skygger.',
    en: 'Build on your rabbit: soft fur on the cheeks and chest, grass and flowers, a little butterfly and soft shadows.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn små pelstotter på kinderne og under hagen.', en: 'Draw little tufts of fur on the cheeks and under the chin.' },
      tip: { da: 'Pels tegnes som små takker i stedet for en glat streg.', en: 'Fur is drawn as little zigzags instead of a smooth line.' },
      strokes: [{ d: 'M140 176 l-8 4 l8 3 l-7 5 M260 176 l8 4 l-8 3 l7 5 M184 222 l6 8 l6 -8 l6 8 l6 -8 l6 8 l6 -8' }],
    },
    {
      text: { da: 'Tegn jorden med græs og to små blomster.', en: 'Draw the ground with grass and two little flowers.' },
      strokes: [{ d: 'M20 378 H380' }, { d: grass }, { d: `${daisy(56, 340)} ${daisy(290, 330)}` }],
    },
    {
      text: { da: 'Tegn en lille sommerfugl, der flyver forbi ørerne.', en: 'Draw a little butterfly flying past the ears.' },
      strokes: [{ d: `${ellipse(84, 84, 8, 12, -30)} ${ellipse(100, 82, 8, 12, 30)} M92 74 V96` }],
    },
    {
      text: {
        da: 'Skyg let under hovedet, på kroppens sider og under kaninen. Farvelæg!',
        en: 'Shade lightly under the head, on the sides of the body and under the rabbit. Colour it in!',
      },
      strokes: [
        { d: 'M156 214 Q200 240 244 214 Q200 256 156 214 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M124 262 Q114 310 130 350 L142 350 Q128 310 136 262 Z M276 262 Q286 310 270 350 L258 350 Q272 310 264 262 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M80 380 Q200 372 320 380 Q200 390 80 380 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Kaninen ser så blød ud – og haven er fuld af blomster!', en: 'The rabbit looks so soft – and the garden is full of flowers!' }],
  nextTip: { da: 'Tegn kaninen fra siden med en lille, rund hale.', en: 'Draw the rabbit from the side with a little round tail.' },
}
