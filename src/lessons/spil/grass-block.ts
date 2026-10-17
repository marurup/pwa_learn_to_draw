import { poly, type Pt } from '../shapes'
import type { Lesson } from '../types'

// An isometric cube: the top is a diamond, and the two front faces slope down from the middle edge.
const leftEdge: Pt[] = Array.from({ length: 9 }, (_, k): Pt => [96 + 13 * k, 180 + 7.5 * k + (k % 2 ? 8 : 0)])
const rightEdge: Pt[] = Array.from({ length: 9 }, (_, k): Pt => [200 + 13 * k, 240 - 7.5 * k + (k % 2 ? 8 : 0)])
const pts = (p: Pt[]) => p.map(([x, y]) => `L${x} ${y}`).join(' ')
const speckL = (x: number, y: number) => `M${x} ${y} l10 5.8 v10 l-10 -5.8 Z`
const speckR = (x: number, y: number) => `M${x} ${y} l10 -5.8 v10 l-10 5.8 Z`
const speckTop = (x: number, y: number) => `M${x} ${y} l7 4 l-7 4 l-7 -4 Z`

export const GRASS_BLOCK = {
  top: 'M200 90 L304 150 L200 210 L96 150 Z',
  sides: 'M96 150 V270 L200 330 L304 270 V150 M200 210 V330',
  grassEdge: `${poly(leftEdge)} ${poly(rightEdge)}`,
  specks: [speckL(112, 214), speckL(150, 236), speckL(126, 252), speckL(170, 272), speckR(220, 272), speckR(260, 250), speckR(240, 290), speckR(278, 226)].join(' '),
  grassSpecks: [speckTop(180, 128), speckTop(232, 140), speckTop(200, 168), speckTop(150, 150), speckTop(254, 168)].join(' '),
  grass: `M200 90 L304 150 L304 180 ${pts([...rightEdge].reverse())} ${pts([...leftEdge].reverse())} L96 150 Z`,
  dirt: `M96 180 ${pts(leftEdge)} L200 330 L96 270 Z M200 240 ${pts(rightEdge)} L304 270 L200 330 Z`,
}

export const grassBlock: Lesson = {
  id: 'grass-block',
  title: { da: 'Græsblok', en: 'Grass block' },
  category: 'spil',
  sub: 'blokke',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En blok med græs ovenpå og jord nedenunder – tegnet, så man kan se tre sider på én gang.',
    en: 'A block with grass on top and earth underneath – drawn so you can see three sides at once.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn toppen af blokken som en flad diamant.', en: 'Draw the top of the block as a flat diamond.' },
      tip: { da: 'Siderne i diamanten er lige lange og skrå.', en: 'The sides of the diamond are equally long and slanted.' },
      strokes: [{ d: GRASS_BLOCK.top }],
    },
    {
      text: { da: 'Tegn tre lodrette streger ned fra hjørnerne, og forbind dem forneden.', en: 'Draw three straight lines down from the corners, and join them at the bottom.' },
      strokes: [{ d: GRASS_BLOCK.sides }],
    },
    {
      text: { da: 'Tegn en takket kant på begge sider, hvor græsset slutter.', en: 'Draw a stepped edge on both sides where the grass ends.' },
      strokes: [{ d: GRASS_BLOCK.grassEdge }],
    },
    {
      text: { da: 'Tegn små skrå firkanter i jorden og på græsset.', en: 'Draw little slanted squares in the earth and on the grass.' },
      strokes: [{ d: GRASS_BLOCK.specks }, { d: GRASS_BLOCK.grassSpecks, weight: 0.7 }],
    },
    {
      text: { da: 'Farvelæg græsset grønt og jorden brun.', en: 'Colour the grass green and the earth brown.' },
      strokes: [
        { d: GRASS_BLOCK.grass, kind: 'shade', tone: 0.3 },
        { d: GRASS_BLOCK.dirt, kind: 'shade', tone: 0.45 },
        { d: GRASS_BLOCK.specks, kind: 'shade', tone: 0.7 },
      ],
    },
  ],
  praise: [{ da: 'Den blok kunne man bygge en hel verden af!', en: 'You could build a whole world from that block!' }],
  nextTip: { da: 'Tegn flere blokke ved siden af og oven på hinanden.', en: 'Draw more blocks next to and on top of each other.' },
}
