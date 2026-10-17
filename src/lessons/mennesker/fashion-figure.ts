import { ellipse } from '../shapes'
import type { Lesson } from '../types'

const HEAD = 34 // one head length; a fashion figure is nine heads tall
const ticks = Array.from({ length: 10 }, (_, k) => `M194 ${25 + k * HEAD} H206`).join(' ')
const skirt = 'M186 128 Q172 230 138 336 M214 128 Q236 230 282 332'
const hem = 'M138 336 Q160 328 182 340 Q204 350 226 338 Q250 326 264 340 Q274 344 282 332'
const ponytail = 'M212 28 Q234 26 238 50 Q240 70 230 84 Q228 62 222 46 Q218 36 212 32'

export const fashionFigure: Lesson = {
  id: 'fashion-figure',
  title: { da: 'Modetegning: kjole', en: 'Fashion drawing: a gown' },
  category: 'mennesker',
  sub: 'dukker',
  level: 4,
  style: 'naturtro',
  motif: 'doll',
  minutes: 35,
  intro: {
    da: 'Sådan tegner modedesignere deres kjoler: en lang, elegant figur på ni hoveder, en hofte, der skyder ud, og stof, der falder i folder.',
    en: 'This is how fashion designers draw their gowns: a long, elegant figure nine heads tall, a hip pushed out, and fabric falling in folds.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler'],
  steps: [
    {
      text: {
        da: 'Tegn let en lodret linje og del den i ni lige store stykker. Hvert stykke er ét hoved.',
        en: 'Lightly draw a vertical line and divide it into nine equal parts. Each part is one head.',
      },
      tip: {
        da: 'Rigtige mennesker er syv-otte hoveder høje. Modetegnere gør figuren længere, så tøjet ser elegant ud.',
        en: 'Real people are seven or eight heads tall. Fashion designers make the figure longer so the clothes look elegant.',
      },
      strokes: [{ d: 'M200 25 V331', kind: 'guide' }, { d: ticks, kind: 'guide' }],
      labels: [{ x: 290, y: 336, text: { da: '9 hoveder', en: '9 heads' }, anchor: 'start' }],
    },
    {
      text: {
        da: 'Tegn en skrå linje for skuldrene og en for hofterne. De hælder hver sin vej – så står figuren med vægten på det ene ben.',
        en: 'Draw a slanted line for the shoulders and one for the hips. They tilt opposite ways – then the figure stands with its weight on one leg.',
      },
      strokes: [{ d: 'M166 70 L234 78 M176 162 L228 150', kind: 'guide' }],
    },
    {
      text: { da: 'Tegn hovedet, halsen og kjolens overdel ned til taljen.', en: 'Draw the head, the neck and the top of the gown down to the waist.' },
      strokes: [
        { d: ellipse(200, 42, 13, 17) },
        { d: 'M196 58 V70 M204 58 V72' },
        { d: 'M174 72 Q180 104 186 128 M226 78 Q218 104 214 128 M186 72 Q200 92 214 74 M186 128 H214' },
      ],
    },
    {
      text: { da: 'Tegn armene: den ene hånd på hoften, den anden hænger løst ned.', en: 'Draw the arms: one hand on the hip, the other hanging loosely down.' },
      strokes: [
        { d: 'M172 72 Q154 92 152 112 Q160 132 184 140 M180 88 Q166 102 164 112 Q172 124 186 130' },
        { d: `M228 78 Q244 116 240 160 M222 94 Q232 124 232 158 ${ellipse(236, 166, 5, 8)}` },
      ],
    },
    {
      text: {
        da: 'Tegn skørtet, der falder fra taljen og spreder sig ud mod gulvet, med en bølget kant forneden.',
        en: 'Draw the skirt falling from the waist and spreading out towards the floor, with a wavy hem.',
      },
      strokes: [{ d: skirt }, { d: hem }],
    },
    {
      text: {
        da: 'Visk hjælpelinjerne ud. Tegn håret med en hestehale, et enkelt ansigt og skospidser under kjolen.',
        en: 'Erase the guidelines. Draw the hair with a ponytail, a simple face and the tips of the shoes under the gown.',
      },
      tip: { da: 'I modetegninger er ansigtet enkelt – det er tøjet, der er det vigtigste.', en: 'In fashion drawings the face is simple – the clothes are what matters.' },
      erase: 'guides',
      strokes: [
        { d: 'M187 40 Q188 22 202 24 Q215 26 214 40' },
        { d: ponytail },
        { d: 'M193 42 H197 M203 42 H207 M197 52 Q200 54 203 52' },
        { d: 'M184 344 Q188 352 198 350 M220 342 Q226 350 234 346' },
      ],
    },
    {
      text: {
        da: 'Tegn folderne: lange, bløde streger fra taljen og ned, der spreder sig som en vifte.',
        en: 'Draw the folds: long, soft lines from the waist down that spread out like a fan.',
      },
      strokes: [{ d: 'M194 138 Q186 240 172 336 M206 138 Q214 240 230 336 M200 146 Q202 250 204 344 M190 160 Q170 250 152 334', weight: 0.6 }],
    },
    {
      text: {
        da: 'Skyg mellem folderne og i højre side, væk fra lyset. Lad toppen af hver fold være lys – så ser stoffet blødt og levende ud.',
        en: 'Shade between the folds and on the right side, away from the light. Keep the top of each fold light – then the fabric looks soft and alive.',
      },
      strokes: [
        { d: 'M206 140 Q214 240 230 336 L250 330 Q228 240 212 132 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M194 140 Q186 240 172 336 L184 340 Q194 240 198 146 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: 'M214 128 Q236 230 282 332 L264 338 Q232 240 210 132 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M214 80 Q218 104 214 128 L208 128 Q212 104 210 80 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: `${ponytail} Z`, kind: 'shade', fill: 'soft', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Den kjole kunne gå direkte på catwalken!', en: 'That gown could go straight onto the catwalk!' }],
  nextTip: {
    da: 'Design dit eget tøj: tegn den samme figur igen i bukser og jakke, eller i en kjole med mønster.',
    en: 'Design your own clothes: draw the same figure again in trousers and a jacket, or in a patterned dress.',
  },
}
