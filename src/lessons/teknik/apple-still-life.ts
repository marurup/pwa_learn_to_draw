import { circle, ellipse, type Pt } from '../shapes'
import type { Lesson } from '../types'

const apple =
  'M200 136 Q176 112 136 120 Q88 134 86 204 Q86 270 124 310 Q158 344 200 330 Q242 344 276 310 Q314 270 314 204 Q312 134 264 120 Q224 112 200 136 Z'
const leaf = 'M210 106 Q244 76 284 86 Q252 118 210 106 Z'
// Small light speckles that apples have, spread over the skin.
const speckles = (
  [
    [130, 190],
    [150, 240],
    [178, 200],
    [120, 260],
    [230, 180],
    [256, 230],
    [212, 262],
    [280, 196],
    [170, 290],
    [246, 290],
    [196, 168],
  ] as Pt[]
)
  .map(([x, y]) => circle(x, y, 1.4))
  .join(' ')

export const appleStillLife: Lesson = {
  id: 'apple-still-life',
  title: { da: 'Stilleben: æble', en: 'Still life: apple' },
  category: 'teknik',
  level: 3,
  style: 'naturtro',
  minutes: 30,
  intro: {
    da: 'Et stilleben er en tegning af ting, der står stille. Læg et rigtigt æble foran dig, og tegn det med lys, skygge og slagskygge.',
    en: 'A still life is a drawing of things that stay still. Put a real apple in front of you, and draw it with light, shade and a cast shadow.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Tegn let en cirkel og en midterlinje. Bestem, hvor lyset kommer fra – her fra øverst til venstre.',
        en: 'Lightly draw a circle and a centre line. Decide where the light comes from – here from the top left.',
      },
      strokes: [
        { d: circle(200, 226, 108), kind: 'guide' },
        { d: 'M200 110 V340', kind: 'guide' },
        { d: 'M36 40 L76 80 M76 80 L62 78 M76 80 L74 66', opacity: 0.6 },
      ],
      labels: [{ x: 44, y: 30, text: { da: 'lys', en: 'light' } }],
    },
    {
      text: {
        da: 'Tegn æblets form rundt om cirklen: to buler foroven med en fordybning i midten, og lidt smallere forneden.',
        en: 'Draw the apple’s shape around the circle: two bumps at the top with a dip in the middle, and a little narrower at the bottom.',
      },
      tip: { da: 'Et æble er aldrig helt rundt – kig på dit eget æble, og se efter buler.', en: 'An apple is never perfectly round – look at your own apple and look for bumps.' },
      strokes: [{ d: apple }],
    },
    {
      text: { da: 'Tegn stilken i fordybningen, et blad og bordkanten bag æblet.', en: 'Draw the stalk in the dip, a leaf and the edge of the table behind the apple.' },
      strokes: [
        { d: 'M198 136 Q196 112 206 92 L212 94 Q204 114 205 136' },
        { d: leaf },
        { d: 'M210 106 Q248 96 284 86', weight: 0.6 },
        { d: 'M20 268 H87 M313 268 H380' },
      ],
    },
    {
      text: {
        da: 'Visk hjælpelinjerne ud. Første lag: Skyg hele æblet let, men lad en lys plet stå oppe til venstre – der rammer lyset.',
        en: 'Erase the guidelines. First layer: shade the whole apple lightly, but leave a light spot at the top left – that is where the light hits.',
      },
      erase: 'guides',
      strokes: [
        { d: apple, kind: 'shade', fill: 'soft', tone: 0.15 },
        { d: ellipse(146, 172, 18, 11, -35), kind: 'shade', fill: 'paper' },
      ],
    },
    {
      text: {
        da: 'Skyg den mørke side: en bred halvmåne i højre side og forneden. Hold dig lidt inde fra kanten.',
        en: 'Shade the dark side: a wide crescent on the right and at the bottom. Stay a little in from the edge.',
      },
      tip: {
        da: 'Den smalle, lysere kant forneden er lys, der kastes op fra bordet. Den gør æblet rundt.',
        en: 'The narrow, lighter edge at the bottom is light bouncing up from the table. It makes the apple look round.',
      },
      strokes: [
        {
          d: 'M270 136 Q306 150 304 206 Q302 262 268 302 Q238 326 200 322 Q170 330 146 316 Q214 314 250 280 Q284 230 270 136 Z',
          kind: 'shade',
          fill: 'soft',
          tone: 0.4,
        },
        { d: 'M188 140 Q200 150 214 140 Q200 160 188 140 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
      ],
    },
    {
      text: {
        da: 'Tegn slagskyggen på bordet. Den falder mod højre, væk fra lyset, og er allermørkest lige under æblet.',
        en: 'Draw the cast shadow on the table. It falls to the right, away from the light, and is darkest right under the apple.',
      },
      strokes: [
        { d: ellipse(256, 334, 92, 16), kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M146 326 Q200 344 262 324 Q200 354 146 326 Z', kind: 'shade', fill: 'soft', tone: 0.55 },
      ],
    },
    {
      text: {
        da: 'Til sidst: tynde, buede striber, der følger æblets form, små prikker i skrællen og skygge på bladet.',
        en: 'Finally: thin, curved stripes that follow the apple’s shape, little dots in the skin and shading on the leaf.',
      },
      strokes: [
        { d: 'M182 142 Q132 200 150 304 M218 142 Q270 200 252 304 M196 146 Q186 230 196 322', weight: 0.5, opacity: 0.5 },
        { d: speckles, kind: 'shade', tone: 0.5 },
        { d: 'M210 106 Q250 100 284 86 Q252 118 210 106 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Det æble ser så ægte ud, at man får lyst til at tage en bid!', en: 'That apple looks so real you want to take a bite!' }],
  nextTip: {
    da: 'Læg en appelsin eller en kop ved siden af æblet, og tegn dem sammen – med lyset fra samme side.',
    en: 'Put an orange or a cup next to the apple and draw them together – with the light from the same side.',
  },
}
