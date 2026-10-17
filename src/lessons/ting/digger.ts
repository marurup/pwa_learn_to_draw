import { circle, rect, roundRect } from '../shapes'
import type { Lesson } from '../types'

export const DIGGER = {
  track: roundRect(70, 300, 200, 52, 26),
  rollers: [98, 144, 196, 242].map((x) => circle(x, 326, 14)),
  house: 'M96 300 V252 Q96 236 112 236 H250 V300',
  cab: 'M190 236 V170 H246 V236',
  boom: 'M246 252 L300 130 M262 258 L314 140',
  stick: 'M300 130 L346 230 M314 140 L356 224',
  bucket: 'M346 230 Q328 270 362 278 L382 238 Z',
}

export const digger: Lesson = {
  id: 'digger',
  title: { da: 'Gravemaskine', en: 'Digger' },
  category: 'ting',
  sub: 'maskiner',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En gravemaskine på larvefødder med en lang arm og en skovl, der kan grave store huller.',
    en: 'A digger on tracks with a long arm and a bucket that can dig big holes.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler', 'colors'],
  steps: [
    {
      text: { da: 'Tegn larvefødderne som en lang, rund firkant med fire hjul inden i.', en: 'Draw the tracks as a long, rounded rectangle with four wheels inside.' },
      strokes: [{ d: DIGGER.track }, { d: DIGGER.rollers.join(' ') }],
    },
    {
      text: { da: 'Tegn maskinens krop oven på larvefødderne.', en: 'Draw the body of the machine on top of the tracks.' },
      strokes: [{ d: DIGGER.house }],
    },
    {
      text: { da: 'Tegn førerhuset med et stort vindue.', en: 'Draw the cab with a big window.' },
      strokes: [{ d: DIGGER.cab }, { d: rect(198, 178, 40, 36) }],
    },
    {
      text: { da: 'Tegn den lange arm, der går skråt op fra maskinen.', en: 'Draw the long arm going up at an angle from the machine.' },
      strokes: [{ d: DIGGER.boom }],
    },
    {
      text: { da: 'Tegn den anden del af armen, der går ned igen, og skovlen for enden.', en: 'Draw the second part of the arm going down again, and the bucket at the end.' },
      tip: { da: 'Armen bøjer som en albue.', en: 'The arm bends like an elbow.' },
      strokes: [{ d: DIGGER.stick }, { d: DIGGER.bucket }],
    },
    {
      text: { da: 'Tegn jorden og en bunke jord, og farvelæg gravemaskinen gul!', en: 'Draw the ground and a pile of dirt, and colour the digger yellow!' },
      strokes: [
        { d: 'M20 352 H390' },
        { d: 'M300 352 Q330 300 380 352' },
        { d: `${DIGGER.house} Z ${DIGGER.cab} Z`, kind: 'shade', tone: 0.25 },
      ],
    },
  ],
  praise: [{ da: 'Den gravemaskine kan grave et kæmpe hul!', en: 'That digger can dig a giant hole!' }],
  nextTip: { da: 'Tegn en lastbil ved siden af, som gravemaskinen kan læsse jord på.', en: 'Draw a lorry next to it that the digger can load dirt into.' },
}
