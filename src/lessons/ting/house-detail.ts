import { circle, rect } from '../shapes'
import type { Lesson } from '../types'

/** A little patch of bricks; every other row is shifted half a brick. */
const bricks = (x: number, y: number, cols: number, rows: number) =>
  Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, c) => rect(x + c * 20 + (r % 2) * 10, y + r * 10, 18, 8)).join(' ')).join(' ')

const flowerBox = (x: number) =>
  `${rect(x - 4, 266, 60, 12)} ${circle(x + 6, 261, 4)} ${circle(x + 20, 259, 4)} ${circle(x + 34, 261, 4)} ${circle(x + 48, 259, 4)}`
const curtains = (x: number) => `M${x + 2} 222 Q${x + 18} 240 ${x + 4} 264 M${x + 50} 222 Q${x + 34} 240 ${x + 48} 264`
const crown = 'M342 300 Q326 296 330 280 Q324 258 346 256 Q352 238 372 244 Q394 240 396 262 Q406 282 390 296 Q386 312 366 306 Q350 314 342 300 Z'

export const houseDetail: Lesson = {
  id: 'house-detail',
  title: { da: 'Hus med have', en: 'House with a garden' },
  category: 'ting',
  sub: 'bygninger',
  level: 2,
  style: 'detaljer',
  base: 'house',
  minutes: 15,
  intro: {
    da: 'Byg videre på dit hus: mursten, gardiner og blomsterkasser, en plankedør, et kvistvindue, en have med et træ – og skygger.',
    en: 'Build on your house: bricks, curtains and flower boxes, a plank door, an attic window, a garden with a tree – and shadows.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn små grupper af mursten på væggene.', en: 'Draw small groups of bricks on the walls.' },
      tip: {
        da: 'Du behøver ikke tegne alle murstenene. Et par grupper her og der får hele væggen til at ligne mursten.',
        en: 'You don’t need to draw every brick. A few groups here and there make the whole wall look like bricks.',
      },
      strokes: [{ d: `${bricks(96, 284, 3, 3)} ${bricks(240, 300, 3, 3)} ${bricks(96, 196, 2, 2)} ${bricks(250, 196, 2, 2)}`, weight: 0.6 }],
    },
    {
      text: { da: 'Tegn gardiner i vinduerne og en blomsterkasse med blomster under hvert vindue.', en: 'Draw curtains in the windows and a flower box with flowers under each window.' },
      strokes: [
        { d: `${curtains(110)} ${curtains(238)}`, weight: 0.7 },
        { d: `${flowerBox(110)} ${flowerBox(238)}` },
      ],
    },
    {
      text: { da: 'Tegn planker på døren og en lille lampe ved siden af den.', en: 'Draw planks on the door and a little lamp next to it.' },
      strokes: [
        { d: 'M187 265 V360 M200 262 V360 M213 265 V308 M213 320 V360', weight: 0.6 },
        { d: 'M236 288 H246 V302 H236 Z M234 288 H248 M241 288 V282' },
      ],
    },
    {
      text: { da: 'Tegn et rundt kvistvindue på taget og mursten på skorstenen.', en: 'Draw a round attic window on the roof and bricks on the chimney.' },
      strokes: [
        { d: `${circle(200, 112, 10)} M190 112 H210 M200 102 V122` },
        { d: 'M258 108 H284 M258 120 H284 M271 96 V108 M264 108 V120 M278 108 V120 M271 120 V132', weight: 0.6 },
      ],
    },
    {
      text: { da: 'Lav en have: et træ ved siden af huset og nogle blomster i græsset.', en: 'Make a garden: a tree next to the house and some flowers in the grass.' },
      strokes: [
        { d: `M358 360 V306 M374 360 V306 ${crown}` },
        { d: `M30 360 V338 ${circle(30, 333, 5)} M78 360 V342 ${circle(78, 337, 5)} M322 360 V340 ${circle(322, 335, 5)}` },
      ],
    },
    {
      text: {
        da: 'Skyg let: under tagkanten på væggen, taget, døren og vinduesglasset. Skyg trækronen i højre side. Farvelæg!',
        en: 'Shade lightly: under the edge of the roof on the wall, the roof, the door and the window glass. Shade the tree crown on the right. Colour it in!',
      },
      strokes: [
        { d: 'M90 190 H310 V204 H90 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M70 190 L200 80 L330 190 Z', kind: 'shade', fill: 'soft', tone: 0.15 },
        { d: 'M174 360 V288 Q174 262 200 262 Q226 262 226 288 V360 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: `${rect(112, 222, 48, 42)} ${rect(240, 222, 48, 42)}`, kind: 'shade', fill: 'soft', tone: 0.1 },
        { d: 'M376 248 Q398 256 396 280 Q396 300 380 306 Q384 280 376 248 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Sikke et hyggeligt hjem – med have og det hele!', en: 'What a cosy home – with a garden and everything!' }],
  nextTip: { da: 'Tegn en hel gade med huse ved siden af hinanden.', en: 'Draw a whole street with houses next to each other.' },
}
