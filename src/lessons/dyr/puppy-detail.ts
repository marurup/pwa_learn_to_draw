import { circle, ellipse, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const earFurL = 'M96 140 Q88 170 92 200 M106 132 Q100 166 106 206 M84 158 Q80 184 86 214'
const muzzleDots = [
  [176, 222],
  [170, 230],
  [180, 232],
  [224, 222],
  [230, 230],
  [220, 232],
]
  .map(([x, y]) => circle(x, y, 1.5))
  .join(' ')

export const puppyDetail: Lesson = {
  id: 'puppy-detail',
  title: { da: 'Hvalp med pels', en: 'Puppy with fur' },
  category: 'dyr',
  sub: 'landdyr',
  level: 3,
  style: 'detaljer',
  base: 'puppy',
  minutes: 18,
  intro: {
    da: 'Byg videre på din hvalp: glans i øjnene, blød pels, prikker på snuden, et navneskilt og bløde skygger.',
    en: 'Build on your puppy: shiny eyes, soft fur, dots on the muzzle, a name tag and soft shadows.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Lad en lille prik være hvid i hvert øje, og tegn en lille bue under øjnene.', en: 'Leave a little white dot in each eye, and draw a small curve under the eyes.' },
      strokes: [
        { d: `${circle(161, 155, 3.5)} ${circle(229, 155, 3.5)}`, kind: 'shade', fill: 'paper' },
        { d: 'M156 178 Q166 182 176 178', weight: 0.6 },
        { d: mirrorX('M156 178 Q166 182 176 178', 200), weight: 0.6 },
      ],
    },
    {
      text: {
        da: 'Tegn pels: en lille tot på toppen af hovedet og lange streger ned ad ørerne.',
        en: 'Draw fur: a little tuft on top of the head and long lines down the ears.',
      },
      tip: { da: 'Tegn pelsen i den retning, den vokser – ørerne hænger nedad.', en: 'Draw the fur in the direction it grows – the ears hang down.' },
      strokes: [
        { d: 'M186 82 L192 72 L196 82 L202 70 L206 82 L212 74 L214 84' },
        { d: earFurL, weight: 0.6 },
        { d: mirrorX(earFurL, 200), weight: 0.6 },
      ],
    },
    {
      text: { da: 'Sæt små prikker på snuden, og lad en lille plet være lys på næsen – så ser den våd og blank ud.', en: 'Put little dots on the muzzle, and leave a small light spot on the nose – then it looks wet and shiny.' },
      strokes: [{ d: muzzleDots, kind: 'shade', tone: 0.8 }, { d: ellipse(194, 206, 6, 3), kind: 'shade', fill: 'paper' }],
    },
    {
      text: { da: 'Tegn et navneskilt formet som et ben og prikker på halsbåndet.', en: 'Draw a name tag shaped like a bone and dots on the collar.' },
      strokes: [
        { d: 'M186 338 Q180 332 186 328 Q192 326 194 332 H206 Q208 326 214 328 Q220 332 214 338 Q220 344 214 348 Q208 350 206 344 H194 Q192 350 186 348 Q180 344 186 338 Z' },
        { d: `${circle(160, 284, 2)} ${circle(180, 292, 2)} ${circle(220, 292, 2)} ${circle(240, 284, 2)}`, kind: 'shade', tone: 0.8 },
      ],
    },
    {
      text: {
        da: 'Skyg let: under ørerne på hovedet, under snuden, inde i munden og på halsen under hovedet.',
        en: 'Shade lightly: under the ears on the head, under the muzzle, inside the mouth and on the neck under the head.',
      },
      strokes: [
        { d: 'M118 130 Q112 170 126 206 Q132 170 130 130 Z M282 130 Q288 170 274 206 Q268 170 270 130 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M156 254 Q200 278 244 254 Q200 268 156 254 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M146 262 Q200 296 254 262 L256 282 Q200 310 144 282 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Hvalpen ser så blød ud, at man vil kramme den!', en: 'The puppy looks so soft you want to hug it!' }],
  nextTip: { da: 'Tegn hvalpen med en bold eller et ben i munden.', en: 'Draw the puppy with a ball or a bone in its mouth.' },
}
