import { circle, radial, ring } from '../shapes'
import type { Lesson } from '../types'
import { MONSTER } from './monster-truck'

const treads = MONSTER.wheels.map(([x, y]) => radial(x, y, 50, MONSTER.tyre, 24)).join(' ')
const rims = MONSTER.wheels.map(([x, y]) => `${circle(x, y, 44)} ${radial(x, y, 20, 44, 6, 30)}`).join(' ')
const bolts = MONSTER.wheels.flatMap(([x, y]) => Array.from({ length: 5 }, (_, i) => {
  const a = ((i * 72 - 90) * Math.PI) / 180
  return circle(x + 12 * Math.cos(a), y + 12 * Math.sin(a), 2)
})).join(' ')
/** A coil spring between two heights. */
const spring = (x: number, y1: number, y2: number) =>
  `M${x} ${y1} ` + Array.from({ length: 6 }, (_, i) => `L${x + (i % 2 ? -7 : 7)} ${y1 + ((i + 0.5) * (y2 - y1)) / 6}`).join(' ') + ` L${x} ${y2}`
const flames = 'M150 232 L164 214 L170 226 L184 204 L192 224 L208 200 L216 222 L234 204 L240 224 L258 208 L264 226 L284 212 L290 228 L310 218 L330 232'
const mud = 'M40 330 q-8 -4 -4 -12 q8 2 6 10 Z M30 300 q-6 -2 -2 -8 q6 2 4 8 Z M372 320 q8 -2 6 -10 q-8 0 -8 8 Z'

export const monsterTruckDetail: Lesson = {
  id: 'monster-truck-detail',
  title: { da: 'Monster truck med flammer', en: 'Monster truck with flames' },
  category: 'ting',
  sub: 'maskiner',
  level: 2,
  style: 'detaljer',
  base: 'monster-truck',
  minutes: 15,
  intro: {
    da: 'Byg videre på din monster truck: grove dækmønstre, fælge med bolte, fjedre, flammer på siden og mudder, der sprøjter.',
    en: 'Build on your monster truck: chunky tyre treads, rims with bolts, springs, flames on the side and splashing mud.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn grove dækmønstre: korte streger hele vejen rundt om hjulene.', en: 'Draw chunky tyre treads: short lines all the way round the wheels.' },
      strokes: [{ d: treads, weight: 1.4 }],
    },
    {
      text: { da: 'Tegn fælgen som en cirkel med eger, og små bolte i midten.', en: 'Draw the rim as a circle with spokes, and little bolts in the middle.' },
      strokes: [{ d: rims }, { d: bolts, kind: 'shade', tone: 0.8 }],
    },
    {
      text: { da: 'Tegn fjedre, der snor sig om stængerne – de gør, at trucken kan hoppe.', en: 'Draw springs winding around the bars – they let the truck bounce.' },
      strokes: [{ d: [spring(110, 240, 278), spring(290, 240, 278)].join(' ') }],
    },
    {
      text: { da: 'Tegn flammer langs siden af bilen og en stjerne på døren.', en: 'Draw flames along the side of the truck and a star on the door.' },
      strokes: [{ d: flames }, { d: 'M212 202 l3 7 l7 1 l-5 5 l1 7 l-6 -3 l-6 3 l1 -7 l-5 -5 l7 -1 Z' }],
    },
    {
      text: { da: 'Tegn mudder, der sprøjter op fra hjulene, og skyg dækkene mørke. Farvelæg!', en: 'Draw mud splashing up from the wheels, and shade the tyres dark. Colour it in!' },
      strokes: [
        { d: mud, kind: 'shade', tone: 0.6 },
        { d: MONSTER.wheels.map(([x, y]) => ring(x, y, MONSTER.tyre, 44)).join(' '), kind: 'shade', tone: 0.55 },
        { d: `${flames} Z`, kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Den er klar til et monster-show – flammerne ser vilde ud!', en: 'It is ready for a monster show – the flames look wild!' }],
  nextTip: { da: 'Find på dit eget design: en monster truck, der ligner en haj eller en drage.', en: 'Make up your own design: a monster truck that looks like a shark or a dragon.' },
}
