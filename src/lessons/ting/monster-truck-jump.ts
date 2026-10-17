import { circle, radial, ring, transform } from '../shapes'
import type { Lesson } from '../types'
import { MONSTER } from './monster-truck'

// The truck, a little smaller, high up in the air.
const S = 0.6
const TX = 104
const TY = 0
const wheels = MONSTER.wheels.map(([x, y]) => [x * S + TX, y * S + TY] as const)
const R = MONSTER.tyre * S
const body = transform(MONSTER.body, S, TX, TY)

/** A small, squashed car standing on the ground. */
const car = (x: number) =>
  `M${x} 362 V346 Q${x + 2} 338 ${x + 10} 338 H${x + 14} L${x + 22} 328 H${x + 40} L${x + 48} 338 H${x + 52} Q${x + 58} 338 ${x + 58} 346 V362`
const cars = [140, 206, 272].map(car).join(' ')
const carWheels = [140, 206, 272].map((x) => `${circle(x + 12, 362, 6)} ${circle(x + 46, 362, 6)}`).join(' ')
const dust = 'M110 330 q-6 -12 6 -16 q4 -12 16 -6 q12 -4 12 8 q10 4 2 14 Z M84 346 q-4 -8 4 -10 q4 -8 12 -2 q8 2 2 12 Z'

export const monsterTruckJump: Lesson = {
  id: 'monster-truck-jump',
  title: { da: 'Monster truck i et kæmpehop', en: 'Monster truck in a giant jump' },
  category: 'ting',
  sub: 'maskiner',
  level: 3,
  style: 'detaljer',
  motif: 'monster-truck',
  minutes: 25,
  intro: {
    da: 'En monster truck, der flyver gennem luften over en række biler. Fartstreger og støv får det til at se ud, som om den bevæger sig.',
    en: 'A monster truck flying through the air over a row of cars. Speed lines and dust make it look like it is moving.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn jorden, en rampe til venstre og en landingsrampe til højre.', en: 'Draw the ground, a ramp on the left and a landing ramp on the right.' },
      strokes: [{ d: 'M10 362 H390 M10 362 L120 362 L120 316 Z M390 362 H340 L390 326' }],
    },
    {
      text: { da: 'Tegn tre små biler på række mellem ramperne.', en: 'Draw three little cars in a row between the ramps.' },
      strokes: [{ d: cars }, { d: carWheels }],
    },
    {
      text: {
        da: 'Tegn monster truckens store hjul højt oppe i luften – den er midt i hoppet.',
        en: 'Draw the monster truck’s big wheels high up in the air – it is in the middle of the jump.',
      },
      tip: { da: 'Når noget er højt oppe, er der luft mellem det og jorden – det er det, der gør hoppet spændende.', en: 'When something is high up, there is air between it and the ground – that is what makes the jump exciting.' },
      strokes: [{ d: wheels.map(([x, y]) => `${circle(x, y, R)} ${circle(x, y, 12)}`).join(' ') }],
    },
    {
      text: { da: 'Tegn bilen ovenpå, vinduet og stængerne ned til hjulene.', en: 'Draw the truck on top, the window and the bars down to the wheels.' },
      strokes: [{ d: body }, { d: transform(MONSTER.window, S, TX, TY) }, { d: transform(MONSTER.struts, S, TX, TY) }],
    },
    {
      text: { da: 'Tegn fartstreger bag trucken og støvskyer, hvor den sprang fra rampen.', en: 'Draw speed lines behind the truck and clouds of dust where it jumped off the ramp.' },
      strokes: [{ d: 'M40 150 H110 M30 172 H104 M46 194 H112 M70 128 H120', weight: 0.8 }, { d: dust }],
    },
    {
      text: { da: 'Tegn dækmønstre og vinduer i de små biler.', en: 'Draw tyre treads and windows in the little cars.' },
      strokes: [
        { d: wheels.map(([x, y]) => radial(x, y, R - 7, R, 20)).join(' '), weight: 1.2 },
        { d: [140, 206, 272].map((x) => `M${x + 18} 338 L${x + 24} 332 H${x + 38} L${x + 44} 338 Z`).join(' ') },
      ],
    },
    {
      text: {
        da: 'Tegn truckens skygge på jorden under den, og skyg dækkene mørke. Farvelæg!',
        en: 'Draw the truck’s shadow on the ground under it, and shade the tyres dark. Colour it in!',
      },
      tip: { da: 'Skyggen ligger på jorden – så kan man se, hvor højt trucken er.', en: 'The shadow lies on the ground – that shows how high the truck is.' },
      strokes: [
        { d: 'M164 372 Q224 366 284 372 Q224 380 164 372 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: wheels.map(([x, y]) => ring(x, y, R, R - 12)).join(' '), kind: 'shade', tone: 0.55 },
        { d: body, kind: 'shade', tone: 0.3 },
        { d: dust, kind: 'shade', fill: 'soft', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Wow, hvilket hop! Publikum jubler!', en: 'Wow, what a jump! The crowd is cheering!' }],
  nextTip: { da: 'Tegn trucken lige i det øjeblik, den lander, med støv der flyver til alle sider.', en: 'Draw the truck just as it lands, with dust flying everywhere.' },
}
