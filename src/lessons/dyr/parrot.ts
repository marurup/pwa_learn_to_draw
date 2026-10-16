import { arc, circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const chestFeathers = [
  [162, 176],
  [176, 188],
  [158, 200],
  [172, 212],
  [186, 224],
  [164, 236],
  [178, 248],
  [192, 260],
  [174, 272],
  [188, 284],
]
  .map(([x, y]) => arc(x, y, 7, 20, 160))
  .join(' ')

const wingCoverts = [
  [212, 172],
  [226, 182],
  [210, 194],
  [224, 204],
  [238, 214],
  [212, 220],
  [226, 232],
  [240, 244],
]
  .map(([x, y]) => arc(x, y, 8, 20, 160))
  .join(' ')

export const parrot: Lesson = {
  id: 'parrot',
  title: { da: 'Papegøje', en: 'Parrot' },
  category: 'dyr',
  sub: 'fugle',
  level: 3,
  style: 'detaljer',
  minutes: 20,
  intro: {
    da: 'En papegøje på en gren, med et stort krumt næb, lag af fjer og en lang hale. Tegn den med hjælpefigurer først.',
    en: 'A parrot on a branch, with a big hooked beak, layers of feathers and a long tail. Draw it with helper shapes first.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Tegn let et par hjælpefigurer: en cirkel til hovedet og en skrå oval til kroppen.',
        en: 'Lightly draw a couple of helper shapes: a circle for the head and a tilted oval for the body.',
      },
      tip: { da: 'Kroppen er cirka to hoveder lang.', en: 'The body is about two heads long.' },
      strokes: [
        { d: circle(180, 118, 40), kind: 'guide' },
        { d: ellipse(198, 226, 46, 80, -12), kind: 'guide' },
      ],
    },
    {
      text: { da: 'Tegn det store, krumme næb på venstre side af hovedet. Overnæbbet krummer ned over undernæbbet.', en: 'Draw the big hooked beak on the left side of the head. The upper beak curves down over the lower beak.' },
      strokes: [
        { d: 'M146 96 C118 92 102 114 106 140 C108 154 114 164 120 166 C122 152 132 140 148 138' },
        { d: 'M148 138 Q132 142 130 152 Q140 164 154 154' },
      ],
    },
    {
      text: {
        da: 'Tegn omridset af hovedet og kroppen rundt om hjælpefigurerne: ryggen bag til højre og et rundt bryst foran.',
        en: 'Draw the outline of the head and body around the helper shapes: the back behind on the right and a round chest in front.',
      },
      strokes: [
        { d: 'M146 96 C160 74 200 72 214 96 C222 110 222 130 220 150 C248 190 254 250 236 300' },
        { d: 'M154 154 C140 190 142 250 180 300 Q208 312 236 300' },
      ],
    },
    {
      text: { da: 'Tegn den foldede vinge på siden af kroppen. Den ender i en spids forneden.', en: 'Draw the folded wing on the side of the body. It ends in a point at the bottom.' },
      strokes: [{ d: 'M206 150 C240 170 252 240 240 322 C216 300 198 252 196 204 C196 178 198 162 206 150 Z' }],
    },
    {
      text: {
        da: 'Tegn grenen og den lange hale, der hænger ned bag den. Tegn tæerne, der griber om grenen.',
        en: 'Draw the branch and the long tail hanging down behind it. Draw the toes gripping the branch.',
      },
      erase: 'guides',
      strokes: [
        { d: 'M40 300 Q120 296 190 299 M244 302 Q310 302 370 304 M40 316 Q120 312 204 314 M246 318 Q310 318 370 320' },
        { d: 'M40 300 Q34 308 40 316 M370 304 Q378 312 370 320' },
        { d: 'M206 312 Q208 352 220 390 Q230 352 232 314 M232 330 Q242 358 250 384 Q248 350 238 318' },
        { d: 'M184 300 Q176 306 178 316 M194 302 Q188 310 190 318 M212 304 Q206 310 208 318', weight: 1.4 },
      ],
    },
    {
      text: { da: 'Tegn øjet med en lys ring rundt om, og et lille næsebor oppe ved næbbet.', en: 'Draw the eye with a light ring around it, and a small nostril up by the beak.' },
      strokes: [
        { d: ellipse(172, 112, 14, 12), weight: 0.7 },
        { d: circle(172, 112, 6), kind: 'shade', tone: 0.9 },
        { d: circle(170, 110, 1.8), kind: 'shade', fill: 'paper' },
        { d: circle(150, 100, 2), kind: 'shade', tone: 0.8 },
      ],
    },
    {
      text: {
        da: 'Nu kommer detaljerne: små buede fjer på brystet og vingen, lange svingfjer forneden og striber på halen.',
        en: 'Now for the details: small curved feathers on the chest and wing, long flight feathers at the bottom and stripes on the tail.',
      },
      tip: { da: 'Fjerene bliver større, jo længere ned på vingen de sidder.', en: 'The feathers get bigger the further down the wing they sit.' },
      strokes: [
        { d: chestFeathers, weight: 0.6 },
        { d: wingCoverts, weight: 0.6 },
        { d: 'M204 252 Q216 284 236 316 M210 238 Q226 270 240 300 M222 232 Q236 262 244 284', weight: 0.6 },
        { d: 'M209 340 Q219 344 229 340 M213 364 Q219 367 225 364 M239 350 Q243 352 246 350', weight: 0.6 },
      ],
    },
    {
      text: {
        da: 'Skyg let under hovedet, langs vingens forkant og under grenen. Farvelæg – fx rødt hoved, gult bånd og blå vinger.',
        en: 'Shade lightly under the head, along the front edge of the wing and under the branch. Colour it – e.g. a red head, a yellow band and blue wings.',
      },
      strokes: [
        { d: 'M156 156 Q186 168 214 150 Q190 182 156 170 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M206 156 Q196 210 210 270 Q198 220 200 170 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M40 312 Q200 306 370 316 L370 322 Q200 318 40 318 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M108 140 C110 154 114 162 120 166 C122 154 128 146 136 142 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Wow, din papegøje er fuld af fjer og farver!', en: 'Wow, your parrot is full of feathers and colours!' }],
  nextTip: { da: 'Tegn to papegøjer, der sidder ved siden af hinanden på grenen.', en: 'Draw two parrots sitting next to each other on the branch.' },
}
