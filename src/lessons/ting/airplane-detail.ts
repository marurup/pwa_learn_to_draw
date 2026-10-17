import { circle } from '../shapes'
import type { Lesson } from '../types'

export const airplaneDetail: Lesson = {
  id: 'airplane-detail',
  title: { da: 'Fly med kondensstriber', en: 'Plane with vapour trails' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 3,
  style: 'detaljer',
  base: 'airplane',
  minutes: 15,
  intro: {
    da: 'Byg videre på dit fly: et logo på halen, en pilot i cockpittet, hvide striber bag flyet, fugle og skygger, der gør flyet rundt.',
    en: 'Build on your plane: a logo on the tail, a pilot in the cockpit, white trails behind the plane, birds and shading that makes the plane round.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et logo på halerorret – fx en stjerne – og en stribe langs kanten.', en: 'Draw a logo on the tail fin – a star, for example – and a stripe along the edge.' },
      strokes: [{ d: 'M88 128 l4 9 l10 1 l-8 6 l3 10 l-9 -6 l-9 6 l3 -10 l-8 -6 l10 -1 Z' }, { d: 'M70 104 L94 168', weight: 0.8 }],
    },
    {
      text: { da: 'Tegn piloten i cockpitruden: et lille hoved med en kasket.', en: 'Draw the pilot in the cockpit window: a little head with a cap.' },
      strokes: [{ d: `${circle(334, 196, 4)} M329 193 Q334 186 340 192 L342 194` }],
    },
    {
      text: {
        da: 'Tegn lange, hvide striber bag flyet – de kommer fra motoren og vingespidsen.',
        en: 'Draw long white trails behind the plane – they come from the engine and the wing tip.',
      },
      tip: { da: 'Striberne er bølgede og bliver bredere langt bagude.', en: 'The trails are wavy and get wider far behind.' },
      strokes: [{ d: 'M190 258 Q120 254 14 262 M190 264 Q120 266 14 276 M144 294 Q80 298 12 292', opacity: 0.6 }],
    },
    {
      text: { da: 'Tegn et par fugle og en sol på himlen.', en: 'Draw a couple of birds and a sun in the sky.' },
      strokes: [
        { d: 'M240 80 q7 -7 14 0 q7 -7 14 0 M280 60 q5 -5 10 0 q5 -5 10 0' },
        { d: `${circle(60, 50, 16)} M60 24 V16 M60 76 V84 M34 50 H26 M86 50 H94` },
      ],
    },
    {
      text: {
        da: 'Skyg flyets underside og lad en hvid stribe stå langs toppen – så ser flykroppen rund ud. Farvelæg!',
        en: 'Shade the underside of the plane and leave a white stripe along the top – then the body looks round. Colour it in!',
      },
      strokes: [
        { d: 'M104 214 H312 Q346 220 358 210 Q348 224 312 224 H104 Q80 222 72 206 Q86 214 104 214 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M110 179 H300 Q318 180 328 186 H110 Z', kind: 'shade', fill: 'paper' },
        { d: 'M180 222 L144 298 H174 L252 222 Z', kind: 'shade', fill: 'soft', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Flyet suser hen over himlen – god tur!', en: 'The plane is whooshing across the sky – have a good trip!' }],
  nextTip: { da: 'Tegn flyet, mens det letter fra landingsbanen.', en: 'Draw the plane as it takes off from the runway.' },
}
