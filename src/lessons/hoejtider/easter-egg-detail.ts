import { circle, ellipse, mirrorX, transform } from '../shapes'
import type { Lesson } from '../types'
import { eggShape } from './easter-egg'

const flower = (x: number, y: number) =>
  `${circle(x, y, 3)} ` +
  Array.from({ length: 5 }, (_, i) => {
    const a = ((i * 72 - 90) * Math.PI) / 180
    return circle(x + 7 * Math.cos(a), y + 7 * Math.sin(a), 4)
  }).join(' ')
const flowers = [flower(150, 218), flower(200, 220), flower(250, 218)].join(' ')
const grass = 'M10 384 ' + Array.from({ length: 62 }, (_, i) => `l6 ${i % 2 ? 20 : -20}`).join(' ')
const smallEggs = `${transform(eggShape, 0.3, 0, 280)} ${transform(eggShape, 0.26, 290, 296)}`
// A snowdrop: the stem arches over and the white flower hangs down from its tip.
const snowdrop = 'M96 384 Q92 340 102 318 Q108 310 114 316 M114 316 Q106 320 106 332 Q114 340 122 332 Q122 320 114 316 Z M110 336 L114 330 L118 336 M97 364 Q88 356 90 344'
const snowdrops = `${snowdrop} ${mirrorX(snowdrop, 200)}`

export const easterEggDetail: Lesson = {
  id: 'easter-egg-detail',
  title: { da: 'Påskeæg i græsset', en: 'Easter eggs in the grass' },
  category: 'hoejtider',
  sub: 'paaske',
  level: 2,
  style: 'detaljer',
  base: 'easter-egg',
  minutes: 14,
  intro: {
    da: 'Byg videre på dit påskeæg: små blomster, græs, to små æg og vintergækker – og skygger, så ægget bliver rundt.',
    en: 'Build on your Easter egg: little flowers, grass, two small eggs and snowdrops – and shading that makes the egg round.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn tre små blomster midt på ægget.', en: 'Draw three little flowers in the middle of the egg.' },
      strokes: [{ d: flowers }],
    },
    {
      text: { da: 'Tegn græs forneden og to små æg, der gemmer sig i græsset.', en: 'Draw grass at the bottom and two little eggs hiding in the grass.' },
      strokes: [{ d: grass }, { d: smallEggs }],
    },
    {
      text: { da: 'Tegn to vintergækker med hængende hvide blomster.', en: 'Draw two snowdrops with hanging white flowers.' },
      strokes: [{ d: snowdrops }],
    },
    {
      text: {
        da: 'Skyg ægget i højre side, og lad en hvid glans stå foroven til venstre. Farvelæg de små æg og græsset.',
        en: 'Shade the right side of the egg, and leave a white shine at the top left. Colour the little eggs and the grass.',
      },
      tip: { da: 'Glansen og skyggen sidder over for hinanden.', en: 'The shine and the shadow sit opposite each other.' },
      strokes: [
        { d: 'M200 70 Q262 72 286 196 Q304 330 200 340 Q268 300 262 196 Q246 90 200 70 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: ellipse(156, 118, 9, 20, 25), kind: 'shade', fill: 'paper' },
        { d: smallEggs, kind: 'shade', tone: 0.35 },
        { d: `${grass} V400 H10 Z`, kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en påskeeng – nu skal æggene bare findes!', en: 'What an Easter meadow – now the eggs just need to be found!' }],
  nextTip: { da: 'Tegn en påskehare, der gemmer æggene.', en: 'Draw an Easter bunny hiding the eggs.' },
}
