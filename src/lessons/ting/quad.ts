import { circle } from '../shapes'
import type { Lesson } from '../types'

export const QUAD = {
  wheels: [
    [110, 300],
    [286, 300],
  ] as [number, number][],
  tyre: 46,
  body: 'M56 296 Q60 238 110 234 Q160 238 166 270 H230 Q236 238 286 234 Q336 238 340 296',
  seat: 'M148 248 Q180 230 216 240 L212 254 H154 Z',
}

export const quad: Lesson = {
  id: 'quad',
  title: { da: 'ATV (firehjulet motorcykel)', en: 'Quad bike' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En ATV – en motorcykel med fire tykke hjul, der kan køre i skoven og i mudder.',
    en: 'A quad bike – a motorbike with four fat wheels that can ride in the woods and in the mud.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn to tykke hjul. Fra siden kan vi kun se to af de fire hjul.', en: 'Draw two fat wheels. From the side we can only see two of the four wheels.' },
      strokes: QUAD.wheels.map(([x, y]) => ({ d: `${circle(x, y, QUAD.tyre)} ${circle(x, y, 14)}` })),
    },
    {
      text: { da: 'Tegn skærmene som buer over hjulene, med en lav midte imellem.', en: 'Draw the mudguards as curves over the wheels, with a low middle in between.' },
      strokes: [{ d: QUAD.body }],
    },
    {
      text: { da: 'Tegn sædet i midten.', en: 'Draw the seat in the middle.' },
      strokes: [{ d: QUAD.seat }],
    },
    {
      text: { da: 'Tegn styret, der stikker op foran sædet.', en: 'Draw the handlebars sticking up in front of the seat.' },
      strokes: [{ d: 'M236 236 L250 206 L270 204 M244 206 H256' }],
    },
    {
      text: { da: 'Tegn bagagebærere foran og bagpå, og en forlygte. Farvelæg!', en: 'Draw luggage racks at the front and the back, and a headlight. Colour it in!' },
      strokes: [
        { d: 'M262 226 H330 M272 226 V236 M320 226 V238 M68 226 H138 M78 226 V238 M128 226 V236' },
        { d: circle(330, 254, 6) },
        { d: `${QUAD.body} Z`, kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Brum brum! ATV’en er klar til at køre i skoven.', en: 'Vroom vroom! The quad bike is ready to ride in the woods.' }],
  nextTip: { da: 'Tegn en lille trailer bag ATV’en.', en: 'Draw a little trailer behind the quad bike.' },
}
