import { circle } from '../shapes'
import type { Lesson } from '../types'

/** The truck's parts, shared with the "Byg videre" versions. */
export const MONSTER = {
  wheels: [
    [110, 300],
    [290, 300],
  ] as [number, number][],
  tyre: 62,
  body: 'M56 236 V196 H140 L162 148 H240 L262 196 H332 Q344 198 344 214 V236 Z',
  window: 'M170 192 L184 158 H230 L246 192 Z M207 158 V192',
  struts: 'M100 236 V282 M120 236 V282 M280 236 V282 M300 236 V282',
}
export const monsterWheels = MONSTER.wheels.map(([x, y]) => `${circle(x, y, MONSTER.tyre)} ${circle(x, y, 20)}`).join(' ')

export const monsterTruck: Lesson = {
  id: 'monster-truck',
  title: { da: 'Monster truck', en: 'Monster truck' },
  category: 'ting',
  sub: 'maskiner',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En monster truck med kæmpestore hjul og en lille bil ovenpå. Den kan køre over alt!',
    en: 'A monster truck with giant wheels and a little truck on top. It can drive over anything!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn to kæmpestore hjul ved siden af hinanden.', en: 'Draw two giant wheels next to each other.' },
      tip: { da: 'Hjulene er det største på en monster truck – tegn dem rigtig store.', en: 'The wheels are the biggest part of a monster truck – draw them really big.' },
      strokes: MONSTER.wheels.map(([x, y]) => ({ d: circle(x, y, MONSTER.tyre) })),
    },
    {
      text: { da: 'Tegn en lille cirkel i midten af hvert hjul.', en: 'Draw a small circle in the middle of each wheel.' },
      strokes: MONSTER.wheels.map(([x, y]) => ({ d: circle(x, y, 20) })),
    },
    {
      text: { da: 'Tegn bilen højt oppe over hjulene: et lad bagi og et førerhus foran.', en: 'Draw the truck high up above the wheels: a bed at the back and a cab at the front.' },
      strokes: [{ d: MONSTER.body }],
    },
    {
      text: { da: 'Tegn vinduet i førerhuset.', en: 'Draw the window in the cab.' },
      strokes: [{ d: MONSTER.window }],
    },
    {
      text: { da: 'Tegn stænger fra bilen ned til hjulene, og en lygte foran.', en: 'Draw bars from the truck down to the wheels, and a light at the front.' },
      strokes: [{ d: MONSTER.struts }, { d: `${circle(334, 210, 6)} M344 226 H354` }],
    },
    {
      text: { da: 'Tegn jorden, og farvelæg din monster truck med en sej farve!', en: 'Draw the ground, and colour your monster truck in a cool colour!' },
      strokes: [
        { d: 'M20 362 H380' },
        { d: MONSTER.body, kind: 'shade', tone: 0.3 },
        { d: MONSTER.wheels.map(([x, y]) => circle(x, y, MONSTER.tyre)).join(' '), kind: 'shade', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Vroom! Den monster truck kan køre over hvad som helst!', en: 'Vroom! That monster truck can drive over anything!' }],
  nextTip: { da: 'Tegn monster trucken, mens den kører over en bunke biler.', en: 'Draw the monster truck driving over a pile of cars.' },
}
