import { circle } from '../shapes'
import type { Lesson } from '../types'

export const ROCKET_CAR = {
  wheels: `${circle(136, 298, 36)} ${circle(316, 298, 36)}`,
  hubs: `${circle(136, 298, 12)} ${circle(316, 298, 12)}`,
  // A low wedge with round arches over both wheels.
  body: 'M80 290 L84 254 Q86 244 98 242 L174 236 L220 202 Q228 196 238 196 H276 Q286 196 294 204 L332 236 L368 246 Q378 250 376 262 L372 290 H352 A36 36 0 0 0 280 290 H172 A36 36 0 0 0 100 290 Z',
  window: 'M224 212 Q230 206 238 206 H274 Q282 206 288 212 L314 236 H200 Z',
  door: 'M256 236 V282',
  spoiler: 'M88 246 L78 222 H120 L116 238',
  booster: 'M54 250 H82 V276 H54 Z M54 254 L46 250 V276 L54 272',
  lights: 'M362 252 h10',
}

export const rocketCar: Lesson = {
  id: 'rocket-car',
  title: { da: 'Raketbil', en: 'Rocket car' },
  category: 'spil',
  sub: 'raketbiler',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En lav, spids sportsvogn med store hjul og en raketmotor bagpå – den kan både køre og hoppe!',
    en: 'A low, pointy sports car with big wheels and a rocket engine at the back – it can drive and jump!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn to store hjul.', en: 'Draw two big wheels.' },
      strokes: [{ d: ROCKET_CAR.wheels }],
    },
    {
      text: { da: 'Tegn bilen: lav og spids fortil, med buer hen over hjulene.', en: 'Draw the car: low and pointy at the front, with arches over the wheels.' },
      tip: { da: 'Lad der være lidt luft mellem buen og hjulet.', en: 'Leave a little gap between the arch and the wheel.' },
      strokes: [{ d: ROCKET_CAR.body }],
    },
    {
      text: { da: 'Tegn ruden, en dør og en spoiler bagpå.', en: 'Draw the window, a door and a spoiler at the back.' },
      strokes: [{ d: ROCKET_CAR.window }, { d: ROCKET_CAR.door }, { d: ROCKET_CAR.spoiler }],
    },
    {
      text: { da: 'Tegn raketmotoren bagerst og en lygte fortil.', en: 'Draw the rocket engine at the very back and a light at the front.' },
      strokes: [{ d: ROCKET_CAR.booster }, { d: ROCKET_CAR.lights, weight: 1.6 }],
    },
    {
      text: { da: 'Tegn navene, og farvelæg bilen i din yndlingsfarve.', en: 'Draw the hubs, and colour the car in your favourite colour.' },
      strokes: [
        { d: ROCKET_CAR.hubs },
        { d: ROCKET_CAR.wheels, kind: 'shade', tone: 0.8 },
        { d: ROCKET_CAR.hubs, kind: 'shade', fill: 'paper' },
        { d: `${ROCKET_CAR.body} ${ROCKET_CAR.spoiler} Z`, kind: 'shade', tone: 0.4 },
        { d: ROCKET_CAR.window, kind: 'shade', tone: 0.15 },
        { d: ROCKET_CAR.booster, kind: 'shade', tone: 0.6 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en lynhurtig raketbil!', en: 'What a lightning-fast rocket car!' }],
  nextTip: { da: 'Tegn bilen, mens raketten tænder, og den flyver op.', en: 'Draw the car as the rocket fires and it flies up.' },
}
