import { circle, poly, rect, starPoints } from '../shapes'
import type { Lesson } from '../types'
import { sparkRing } from './fireworks'

const skyline = 'M0 400 V344 H40 V324 H80 V352 H130 V300 H140 L150 256 L160 300 H170 V330 H230 V316 H270 V340 H330 V322 H370 V348 H400 V400'
const trails = 'M202 330 Q196 290 200 236 M92 352 Q96 330 90 304 M308 340 Q304 316 310 290'
const windows = [
  [12, 360], [26, 360], [52, 340], [92, 368], [110, 368], [186, 346], [206, 346], [244, 330], [286, 356], [306, 356], [342, 338], [380, 362],
].map(([x, y]) => rect(x, y, 8, 10)).join(' ')
const ringBurst = `${sparkRing(330, 80, 36, 14, 3)} ${sparkRing(330, 80, 18, 8, 2.2)}`
const starBurst = poly(starPoints(70, 90, 30, 12), true)
const sparkles = 'M140 40 h10 M145 35 v10 M260 40 h10 M265 35 v10 M30 180 h8 M34 176 v8 M370 170 h8 M374 166 v8 M250 300 h8 M254 296 v8'

export const fireworksDetail: Lesson = {
  id: 'fireworks-detail',
  title: { da: 'Nytårsnat over byen', en: 'New Year’s night over the town' },
  category: 'hoejtider',
  sub: 'nytaar',
  level: 2,
  style: 'detaljer',
  base: 'fireworks',
  minutes: 15,
  intro: {
    da: 'Byg videre på dit fyrværkeri: en by med et tårnur, der slår tolv, flere slags fyrværkeri og en mørk nattehimmel.',
    en: 'Build on your fireworks: a town with a clock tower striking twelve, more kinds of fireworks and a dark night sky.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Visk raketsporene ud. Tegn husenes tage forneden og et tårn med en spids, og tegn sporene igen fra tagene.',
        en: 'Rub out the rocket trails. Draw the rooftops of the houses at the bottom and a tower with a spire, then draw the trails again from the roofs.',
      },
      erase: ['trails'],
      strokes: [{ d: skyline }, { d: trails, weight: 0.8 }],
    },
    {
      text: { da: 'Tegn et ur i tårnet, hvor begge visere peger på tolv, og små vinduer i husene.', en: 'Draw a clock in the tower with both hands pointing to twelve, and little windows in the houses.' },
      strokes: [{ d: `${circle(150, 318, 9)} M150 318 V311` }, { d: windows }],
    },
    {
      text: { da: 'Tegn et ring-fyrværkeri af prikker og et stjerne-fyrværkeri.', en: 'Draw a ring firework made of dots and a star firework.' },
      strokes: [{ d: ringBurst }, { d: starBurst }, { d: `${circle(330, 80, 3)} ${circle(70, 90, 3)}` }],
    },
    {
      text: { da: 'Tegn små glimt rundt på himlen.', en: 'Draw little twinkles around the sky.' },
      strokes: [{ d: sparkles, weight: 0.7 }],
    },
    {
      text: { da: 'Farvelæg husene helt mørke, men lad vinduerne og uret lyse gult.', en: 'Colour the houses very dark, but let the windows and the clock glow yellow.' },
      tip: { da: 'De mørke huse får fyrværkeriet til at lyse endnu mere.', en: 'The dark houses make the fireworks glow even brighter.' },
      strokes: [
        { d: `${skyline} Z`, kind: 'shade', tone: 0.75 },
        { d: `${windows} ${circle(150, 318, 9)}`, kind: 'shade', fill: 'paper' },
        { d: starBurst, kind: 'shade', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Klokken slår tolv – godt nytår til hele byen!', en: 'The clock strikes twelve – happy New Year to the whole town!' }],
  nextTip: { da: 'Tegn dig selv med en stjernekaster i hånden.', en: 'Draw yourself holding a sparkler.' },
}
