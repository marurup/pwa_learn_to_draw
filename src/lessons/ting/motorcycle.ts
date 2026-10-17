import { arc, circle, roundRect } from '../shapes'
import type { Lesson } from '../types'

export const MOTORBIKE = {
  rear: [110, 290] as const,
  front: [296, 290] as const,
  tyre: 50,
  tank: 'M170 210 Q200 188 242 198 Q250 214 238 224 H176 Z',
  seat: 'M116 214 Q140 202 172 210 L176 224 H122 Q114 222 116 214 Z',
  engine: roundRect(178, 228, 56, 40, 8),
  exhaust: 'M196 270 Q160 282 120 276 L94 272 M196 278 Q160 290 120 284 L94 280 M94 272 V280',
  fork: 'M256 192 L292 290 M266 188 L300 286',
}

export const motorcycle: Lesson = {
  id: 'motorcycle',
  title: { da: 'Motorcykel', en: 'Motorbike' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En motorcykel set fra siden: to hjul, en tank, et sæde, en motor og en lang forgaffel.',
    en: 'A motorbike seen from the side: two wheels, a tank, a seat, an engine and a long front fork.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn to hjul med god afstand imellem – der skal være plads til motoren.', en: 'Draw two wheels with plenty of space between them – there has to be room for the engine.' },
      strokes: [MOTORBIKE.rear, MOTORBIKE.front].map(([x, y]) => ({ d: `${circle(x, y, MOTORBIKE.tyre)} ${circle(x, y, 8)}` })),
    },
    {
      text: { da: 'Tegn tanken foroven i midten og sædet bag den.', en: 'Draw the tank at the top in the middle and the seat behind it.' },
      strokes: [{ d: MOTORBIKE.tank }, { d: MOTORBIKE.seat }],
    },
    {
      text: { da: 'Tegn motoren under tanken og udstødningsrøret, der går bagud.', en: 'Draw the engine under the tank and the exhaust pipe going backwards.' },
      strokes: [{ d: MOTORBIKE.engine }, { d: MOTORBIKE.exhaust }],
    },
    {
      text: { da: 'Tegn forgaflen ned til forhjulet, styret og en rund forlygte.', en: 'Draw the front fork down to the front wheel, the handlebars and a round headlight.' },
      strokes: [{ d: MOTORBIKE.fork }, { d: 'M246 182 L262 188 L276 176' }, { d: circle(280, 206, 10) }],
    },
    {
      text: { da: 'Tegn stangen fra motoren til baghjulet og skærme over begge hjul.', en: 'Draw the arm from the engine to the back wheel and mudguards over both wheels.' },
      strokes: [{ d: 'M180 260 L110 290 M184 268 L116 296' }, { d: `${arc(110, 290, 58, 200, 300)} ${arc(296, 290, 58, 230, 330)}` }],
    },
    {
      text: { da: 'Tegn vejen, og farvelæg din motorcykel – tanken må gerne være skinnende rød!', en: 'Draw the road, and colour your motorbike – the tank can be shiny red!' },
      strokes: [{ d: 'M20 342 H380' }, { d: MOTORBIKE.tank, kind: 'shade', tone: 0.35 }, { d: MOTORBIKE.seat, kind: 'shade', tone: 0.6 }],
    },
  ],
  praise: [{ da: 'Brrrm! Den motorcykel er klar til at køre en tur.', en: 'Vroom! That motorbike is ready for a ride.' }],
  nextTip: { da: 'Tegn en kører med hjelm på motorcyklen.', en: 'Draw a rider wearing a helmet on the motorbike.' },
}
