import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'
import { snowflake } from './ice-princess'

// Two curtains of light, one on each side of the tall tower.
const auroraLeft = 'M0 60 Q40 30 80 50 Q120 70 150 40 M0 92 Q44 64 84 84 Q120 100 150 76'
const aurora = `${auroraLeft} ${mirrorX(auroraLeft, 200)}`
const raysLeft = [14, 40, 66, 92, 118, 140].map((x, i) => `M${x} ${54 + (i % 3) * 6} v${20 + (i % 2) * 8}`).join(' ')
const rays = `${raysLeft} ${mirrorX(raysLeft, 200)}`
const auroraShape = 'M0 60 Q40 30 80 50 Q120 70 150 40 L150 76 Q120 100 84 84 Q44 64 0 92 Z'
const mountains = 'M0 330 L50 250 L84 290 L110 260 M290 260 L320 230 L352 280 L380 250 L400 270'
const icicles = 'M170 140 l4 12 l4 -12 M222 140 l4 12 l4 -12 M110 190 l4 10 l4 -10 M282 190 l4 10 l4 -10'
const stars = [circle(40, 140, 2), circle(360, 130, 2), circle(80, 200, 1.6), circle(330, 190, 1.6), circle(260, 30, 1.6), circle(150, 24, 1.6)].join(' ')

export const iceCastleDetail: Lesson = {
  id: 'ice-castle-detail',
  title: { da: 'Isslottet under nordlyset', en: 'The ice castle under the northern lights' },
  category: 'fantasi',
  sub: 'isriget',
  level: 3,
  style: 'detaljer',
  base: 'ice-castle',
  minutes: 20,
  intro: {
    da: 'Byg videre på dit isslot: et snefnug på toppen, istapper, bjerge, stjerner og et dansende nordlys over himlen.',
    en: 'Build on your ice castle: a snowflake on top, icicles, mountains, stars and northern lights dancing across the sky.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et stort snefnug på toppen af det midterste tårn.', en: 'Draw a big snowflake on top of the middle tower.' },
      strokes: [{ d: snowflake(200, 44, 14) }],
    },
    {
      text: { da: 'Tegn små istapper under tagkanterne.', en: 'Draw little icicles under the roof edges.' },
      strokes: [{ d: icicles }],
    },
    {
      text: { da: 'Tegn bjerge bag slottet på begge sider.', en: 'Draw mountains behind the castle on both sides.' },
      strokes: [{ d: mountains }],
    },
    {
      text: { da: 'Tegn nordlyset som bølgende bånd med lodrette striber på hver side af tårnet, og stjerner.', en: 'Draw the northern lights as waving bands with upright streaks on each side of the tower, and stars.' },
      strokes: [{ d: aurora }, { d: rays, weight: 0.6, opacity: 0.7 }, { d: stars, kind: 'shade', tone: 0.6 }],
    },
    {
      text: {
        da: 'Farvelæg nordlyset grønt og lilla med bløde striber, og bjergene blå. Lad slottet være lyst.',
        en: 'Colour the northern lights green and purple with soft streaks, and the mountains blue. Keep the castle light.',
      },
      tip: { da: 'Gnid farven ud med fingeren, så nordlyset bliver blødt.', en: 'Smudge the colour with your finger so the northern lights look soft.' },
      strokes: [
        { d: `${auroraShape} ${mirrorX(auroraShape, 200)}`, kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M0 330 L50 250 L84 290 L110 260 V330 Z M290 260 L320 230 L352 280 L380 250 L400 270 V330 H290 Z', kind: 'shade', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Det er det smukkeste isslot – og nordlyset danser!', en: 'That is the most beautiful ice castle – and the northern lights are dancing!' }],
  nextTip: { da: 'Tegn isprinsessen på trappen foran slottet.', en: 'Draw the ice princess on the stairs in front of the castle.' },
}
