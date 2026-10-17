import { pixels, type Pt } from '../shapes'
import type { Lesson } from '../types'

/** A 12 × 12 grid of 24 px squares; every pixel drawing in this lesson sits on it. */
export const GRID = { x: 56, y: 56, size: 24 }
export const cells = (c: Pt[]) => pixels(c, GRID.x, GRID.y, GRID.size)
const gridLines = Array.from({ length: 13 }, (_, i) => {
  const p = GRID.x + i * GRID.size
  return `M${p} 56 V344 M56 ${p} H344`
}).join(' ')

export const SWORD = {
  bladeA: [[5, 6], [6, 5], [7, 4], [8, 3], [9, 2], [10, 1]] as Pt[],
  bladeB: [[6, 6], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1]] as Pt[],
  tip: [[11, 0]] as Pt[],
  guard: [[3, 5], [4, 6], [5, 7], [6, 8], [7, 9]] as Pt[],
  handle: [[4, 8], [3, 9], [2, 10]] as Pt[],
  pommel: [[1, 10], [1, 11], [2, 11]] as Pt[],
}

export const pixelSword: Lesson = {
  id: 'pixel-sword',
  title: { da: 'Pixelsværd', en: 'Pixel sword' },
  category: 'spil',
  sub: 'blokke',
  level: 1,
  minutes: 10,
  intro: {
    da: 'Et sværd tegnet som i et computerspil – firkant for firkant på et ternet net.',
    en: 'A sword drawn like in a video game – square by square on a grid.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn et net af lyse streger – 12 felter hver vej. Ternet papir er perfekt!', en: 'Draw a grid of light lines – 12 squares each way. Squared paper is perfect!' },
      strokes: [{ d: gridLines, kind: 'guide' }],
    },
    {
      text: { da: 'Tegn klingen: to rækker felter, der går skråt op mod højre hjørne.', en: 'Draw the blade: two rows of squares going up at an angle towards the right corner.' },
      tip: { da: 'Tæl felterne – ét til højre og ét op hver gang.', en: 'Count the squares – one right and one up each time.' },
      strokes: [{ d: cells([...SWORD.bladeA, ...SWORD.bladeB, ...SWORD.tip]) }],
    },
    {
      text: { da: 'Tegn parerstangen på tværs under klingen.', en: 'Draw the crossguard across, under the blade.' },
      strokes: [{ d: cells(SWORD.guard) }],
    },
    {
      text: { da: 'Tegn grebet og knappen nederst.', en: 'Draw the grip and the knob at the bottom.' },
      strokes: [{ d: cells([...SWORD.handle, ...SWORD.pommel]) }],
    },
    {
      text: { da: 'Visk nettet ud, og farvelæg felterne – klingen lys, grebet brunt.', en: 'Rub out the grid, and colour the squares – a light blade and a brown grip.' },
      erase: 'guides',
      strokes: [
        { d: cells([...SWORD.bladeA, ...SWORD.bladeB, ...SWORD.tip]), kind: 'shade', tone: 0.15 },
        { d: cells(SWORD.guard), kind: 'shade', tone: 0.5 },
        { d: cells(SWORD.handle), kind: 'shade', tone: 0.4 },
        { d: cells(SWORD.pommel), kind: 'shade', tone: 0.6 },
      ],
    },
  ],
  praise: [{ da: 'Et rigtigt pixelsværd – klar til eventyr!', en: 'A real pixel sword – ready for adventure!' }],
  nextTip: { da: 'Prøv at tegne et hjerte eller en svamp i pixels.', en: 'Try drawing a heart or a mushroom in pixels.' },
}
