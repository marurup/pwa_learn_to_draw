import { circle } from '../shapes'
import type { Lesson } from '../types'

export const CROSSER = {
  rear: [106, 300] as const,
  front: [300, 300] as const,
  tyre: 52,
  seat: 'M110 196 Q150 186 230 192 L236 208 H140 Q118 206 110 196 Z',
  sidePlate: 'M128 210 H176 L168 238 H140 Z',
}

export const motocross: Lesson = {
  id: 'motocross',
  title: { da: 'Crosser', en: 'Dirt bike' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En crosser til at køre i mudder og hoppe over bakker: høj og let, med store hjul og en lang forgaffel.',
    en: 'A dirt bike for riding in mud and jumping over hills: tall and light, with big wheels and a long front fork.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn to store hjul med en lille cirkel i midten.', en: 'Draw two big wheels with a small circle in the middle.' },
      strokes: [CROSSER.rear, CROSSER.front].map(([x, y]) => ({ d: `${circle(x, y, CROSSER.tyre)} ${circle(x, y, 7)}` })),
    },
    {
      text: {
        da: 'Tegn et langt, fladt sæde højt oppe, en nummerplade under det og en bagskærm, der peger op.',
        en: 'Draw a long, flat seat high up, a number plate under it and a back mudguard pointing up.',
      },
      strokes: [{ d: CROSSER.seat }, { d: CROSSER.sidePlate }, { d: 'M112 196 L66 178 L72 190 L116 206' }],
    },
    {
      text: { da: 'Tegn rammen fra styret ned til en lille motor, stangen til baghjulet og et udstødningsrør, der går højt bagud.', en: 'Draw the frame from the handlebars down to a small engine, the arm to the back wheel and an exhaust pipe going high at the back.' },
      strokes: [
        { d: 'M176 222 H222 L218 262 H180 Z' },
        { d: 'M254 176 L222 230 M244 186 L214 222 M170 208 L180 222' },
        { d: 'M186 258 L106 296 M190 266 L112 304' },
        { d: 'M178 232 Q150 216 122 218 L96 210 M96 210 L94 220 L122 228' },
      ],
    },
    {
      text: { da: 'Tegn den lange forgaffel ned til forhjulet, styret og en høj forskærm.', en: 'Draw the long front fork down to the front wheel, the handlebars and a high front mudguard.' },
      strokes: [
        { d: 'M252 170 L296 300 M262 166 L304 296' },
        { d: 'M238 160 L262 166 L274 152' },
        { d: 'M244 206 Q276 194 304 210 L298 218 Q276 206 252 214 Z' },
        { d: 'M250 172 L268 166 L274 194 L256 198 Z' },
      ],
    },
    {
      text: { da: 'Tegn en bakket jordbane, og farvelæg din crosser i en sej farve!', en: 'Draw a bumpy dirt track, and colour your dirt bike in a cool colour!' },
      strokes: [
        { d: 'M10 354 Q60 340 110 352 Q200 368 290 352 Q340 342 390 356' },
        { d: `${CROSSER.seat} M244 206 Q276 194 304 210 L298 218 Q276 206 252 214 Z`, kind: 'shade', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Den crosser er klar til at hoppe over bakkerne!', en: 'That dirt bike is ready to jump over the hills!' }],
  nextTip: { da: 'Tegn crosseren i luften over en bakke.', en: 'Draw the dirt bike in the air over a hill.' },
}
