import { circle, ellipse, radial } from '../shapes'
import type { Lesson } from '../types'

const flake = (x: number, y: number, r: number) => radial(x, y, 0, r, 6, 90)
const flakes = [flake(60, 60, 10), flake(330, 50, 8), flake(100, 150, 7), flake(320, 130, 9), flake(56, 250, 8), flake(352, 240, 7), flake(260, 40, 6), flake(140, 60, 6)].join(' ')
const bird = 'M188 54 Q192 40 206 42 Q216 44 216 54 Q222 52 226 56 L216 60 Q208 66 194 62 Q186 60 188 54 Z M202 62 L200 70 M208 62 L208 70'
const broom = 'M246 214 L312 330 M300 336 L322 324 L350 366 L316 378 Z M312 348 L324 374 M324 340 L336 370'

export const snowmanDetail: Lesson = {
  id: 'snowman-detail',
  title: { da: 'Snemand i snevejr', en: 'Snowman in the snow' },
  category: 'hoejtider',
  sub: 'jul',
  level: 2,
  style: 'detaljer',
  base: 'snowman',
  minutes: 14,
  intro: {
    da: 'Byg videre på din snemand: snefnug, en lille fugl på hatten, en kost og bløde skygger, så sneboldene bliver runde.',
    en: 'Build on your snowman: snowflakes, a little bird on his hat, a broom and soft shadows that make the snowballs round.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn snefnug i luften – små stjerner med seks arme.', en: 'Draw snowflakes in the air – little stars with six arms.' },
      strokes: [{ d: flakes, weight: 0.7 }],
    },
    {
      text: { da: 'Tegn en lille fugl, der sidder på snemandens hat.', en: 'Draw a little bird sitting on the snowman’s hat.' },
      strokes: [{ d: bird }, { d: circle(207, 49, 1.8), kind: 'shade', tone: 0.9 }],
    },
    {
      text: { da: 'Tegn en kost, der læner sig op ad snemanden, og striber på halstørklædet.', en: 'Draw a broom leaning against the snowman, and stripes on the scarf.' },
      strokes: [{ d: broom }, { d: 'M184 168 L182 182 M200 170 V186 M216 168 L218 182 M214 198 L230 196 M216 212 L232 210', weight: 0.7 }],
    },
    {
      text: {
        da: 'Skyg sneboldene blødt forneden i højre side, så de bliver runde, og tegn en skygge på sneen. Farvelæg fuglen rød.',
        en: 'Shade the snowballs softly at the bottom on the right so they look round, and draw a shadow on the snow. Colour the bird red.',
      },
      tip: { da: 'Skyggen ligger på den side, der vender væk fra lyset.', en: 'The shadow is on the side facing away from the light.' },
      strokes: [
        { d: `M262 316 A62 62 0 0 1 154 358 Q220 360 250 300 Z`, kind: 'shade', fill: 'soft', tone: 0.22 },
        { d: `M244 212 A44 44 0 0 1 168 242 Q216 246 232 196 Z`, kind: 'shade', fill: 'soft', tone: 0.22 },
        { d: `M234 136 A34 34 0 0 1 176 160 Q214 160 226 118 Z`, kind: 'shade', fill: 'soft', tone: 0.22 },
        { d: ellipse(236, 378, 80, 8), kind: 'shade', fill: 'soft', tone: 0.2 },
        { d: bird, kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Han ser helt rund og snedækket ud – og fuglen har fundet en ven!', en: 'He looks perfectly round and snowy – and the bird has found a friend!' }],
  nextTip: { da: 'Tegn snemanden om natten med lygter og stjerner.', en: 'Draw the snowman at night with lanterns and stars.' },
}
