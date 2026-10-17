import { circle, ellipse, line, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const earL = 'M138 128 Q116 70 112 28 Q150 46 182 102'
const innerEarL = 'M144 112 Q128 76 124 48 Q150 66 172 104'
const ruffL = 'M138 128 Q112 160 106 196 L86 218 L110 224 L94 248 L124 246 L118 266 Q150 266 176 280'
const eyeL = 'M144 162 Q164 152 184 172 Q160 180 144 162 Z'
const tearL = 'M184 176 Q178 200 182 226 Q186 202 190 178 Z'
const neckL = 'M120 262 Q116 312 100 364'
const cheekL = 'M146 176 Q152 214 178 254'

// Short fur strokes that point away from the middle of the face.
const furL = [
  ...Array.from({ length: 6 }, (_, i) => {
    const x = 186 - i * 8
    const y = 112 + i * 6
    return line(x, y, x - 8, y - 6)
  }),
  ...Array.from({ length: 5 }, (_, i) => {
    const y = 196 + i * 12
    const x = 126 + i * 6
    return line(x, y, x - 10, y + 4)
  }),
].join(' ')

export const foxReal: Lesson = {
  id: 'fox-real',
  title: { da: 'Naturtro ræv', en: 'Realistic fox' },
  category: 'dyr',
  sub: 'landdyr',
  level: 4,
  style: 'naturtro',
  minutes: 35,
  intro: {
    da: 'En ræv, der kigger lige på dig. Du bruger hjælpelinjer til at placere alt rigtigt, og pels-streger og bløde skygger til at gøre den levende.',
    en: 'A fox looking straight at you. You use guidelines to place everything correctly, and fur strokes and soft shading to bring it to life.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Tegn let hjælpelinjer: en cirkel til hovedet, en lodret midterlinje, en vandret øjenlinje og en trekant til snuden.',
        en: 'Lightly draw guidelines: a circle for the head, a vertical centre line, a horizontal eye line and a triangle for the muzzle.',
      },
      tip: { da: 'Snudens spids – næsen – ligger lige under cirklen.', en: 'The tip of the muzzle – the nose – sits just below the circle.' },
      strokes: [
        { d: circle(200, 180, 80), kind: 'guide' },
        { d: 'M200 84 V320 M110 170 H290', kind: 'guide' },
        { d: 'M156 204 L244 204 L200 276 Z', kind: 'guide' },
      ],
      labels: [{ x: 300, y: 166, text: { da: 'øjne', en: 'eyes' } }],
    },
    {
      text: {
        da: 'Tegn de store ører oven på cirklen. Ørernes inderkant peger ind mod øjnene.',
        en: 'Draw the big ears on top of the circle. The inner edges of the ears point in towards the eyes.',
      },
      strokes: [
        { d: earL },
        { d: mirrorX(earL, 200) },
        { d: 'M182 102 Q200 96 218 102' },
        { d: innerEarL, weight: 0.7 },
        { d: mirrorX(innerEarL, 200), weight: 0.7 },
      ],
    },
    {
      text: {
        da: 'Tegn kinderne med takket pels, der stritter ud til siderne og samles under snuden.',
        en: 'Draw the cheeks with jagged fur that sticks out to the sides and meets under the muzzle.',
      },
      tip: { da: 'Tegn pelsens takker i forskellige størrelser – så ser den mere naturlig ud.', en: 'Draw the fur points in different sizes – then it looks more natural.' },
      strokes: [{ d: ruffL }, { d: mirrorX(ruffL, 200) }, { d: neckL }, { d: mirrorX(neckL, 200) }],
    },
    {
      text: {
        da: 'Tegn de skrå, mandelformede øjne på øjenlinjen. Der er cirka én øjenbredde mellem dem.',
        en: 'Draw the slanted, almond-shaped eyes on the eye line. There is about one eye’s width between them.',
      },
      strokes: [
        { d: eyeL },
        { d: mirrorX(eyeL, 200) },
        { d: `${ellipse(166, 167, 2.5, 7)} ${ellipse(234, 167, 2.5, 7)}`, kind: 'shade', tone: 0.95 },
      ],
    },
    {
      text: {
        da: 'Tegn snuden ned til næsen i trekantens spids, og en mund og en hage under den.',
        en: 'Draw the muzzle down to the nose at the tip of the triangle, with a mouth and a chin below it.',
      },
      strokes: [
        { d: 'M178 194 Q182 236 189 263 M222 194 Q218 236 211 263' },
        { d: 'M184 266 Q200 256 216 266 Q214 282 200 286 Q186 282 184 266 Z' },
        { d: 'M200 286 V296 M200 296 Q188 306 176 298 M200 296 Q212 306 224 298' },
        { d: 'M176 298 Q200 322 224 298' },
      ],
    },
    {
      text: {
        da: 'Visk hjælpelinjerne ud. Tegn den mørke "tårestribe" fra øjet, grænsen til de hvide kinder og korte pels-streger.',
        en: 'Erase the guidelines. Draw the dark "tear line" from the eye, the edge of the white cheeks and short fur strokes.',
      },
      tip: { da: 'Pels-stregerne peger væk fra midten af ansigtet – som pelsen vokser.', en: 'The fur strokes point away from the middle of the face – the way the fur grows.' },
      erase: 'guides',
      strokes: [
        { d: `${tearL} ${mirrorX(tearL, 200)}`, kind: 'shade', fill: 'soft', tone: 0.6 },
        { d: cheekL, weight: 0.6, opacity: 0.7 },
        { d: mirrorX(cheekL, 200), weight: 0.6, opacity: 0.7 },
        { d: furL, weight: 0.5 },
        { d: mirrorX(furL, 200), weight: 0.5 },
        { d: 'M168 338 l-4 10 M184 344 l-2 10 M200 346 v10 M216 344 l2 10 M232 338 l4 10', weight: 0.5 },
      ],
    },
    {
      text: {
        da: 'Skyg den orange pels let – panden, snudens top og ørerne – men lad kinderne og hagen være hvide.',
        en: 'Lightly shade the orange fur – the forehead, the top of the muzzle and the ears – but keep the cheeks and chin white.',
      },
      strokes: [
        { d: 'M140 126 Q182 100 200 100 Q218 100 260 126 Q280 150 254 176 Q232 210 214 256 L186 256 Q168 210 146 176 Q120 150 140 126 Z', kind: 'shade', fill: 'soft', tone: 0.16 },
        { d: `${earL} Z ${mirrorX(earL, 200)} Z`, kind: 'shade', fill: 'soft', tone: 0.2 },
        { d: `${innerEarL} Z ${mirrorX(innerEarL, 200)} Z`, kind: 'shade', fill: 'soft', tone: 0.45 },
      ],
    },
    {
      text: {
        da: 'Til sidst det mørkeste: ørespidserne, næsen, pupillerne og om øjnene. Lad en hvid prik stå i øjne og på næsen.',
        en: 'Finally the darkest parts: the ear tips, the nose, the pupils and around the eyes. Leave a white dot in the eyes and on the nose.',
      },
      strokes: [
        { d: 'M112 28 Q116 52 122 66 Q130 46 112 28 Z M288 28 Q284 52 278 66 Q270 46 288 28 Z', kind: 'shade', tone: 0.8 },
        { d: 'M184 266 Q200 256 216 266 Q214 282 200 286 Q186 282 184 266 Z', kind: 'shade', tone: 0.85 },
        { d: `${eyeL} ${mirrorX(eyeL, 200)}`, kind: 'shade', tone: 0.35 },
        { d: `${circle(162, 164, 2)} ${circle(230, 164, 2)} ${ellipse(196, 266, 5, 2.5)}`, kind: 'shade', fill: 'paper' },
        { d: `${eyeL} ${mirrorX(eyeL, 200)}`, weight: 1.5 },
      ],
    },
  ],
  praise: [{ da: 'Den ræv ser næsten levende ud – du har styr på pels og skygger!', en: 'That fox looks almost alive – you have mastered fur and shading!' }],
  nextTip: { da: 'Tegn hele ræven siddende, med en stor busket hale om poterne.', en: 'Draw the whole fox sitting, with a big bushy tail around its paws.' },
}
