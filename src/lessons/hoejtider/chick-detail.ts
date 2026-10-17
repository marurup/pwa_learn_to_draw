import { circle } from '../shapes'
import type { Lesson } from '../types'

const shellLeft = 'M44 340 L54 330 L62 342 L72 328 L82 342 L92 330 L102 340 Q102 372 73 374 Q44 372 44 340 Z'
const shellTop = 'M304 370 Q306 338 332 334 Q358 338 362 366 L352 358 L344 370 L334 358 L324 370 L314 358 Z'
const tulip = 'M330 330 V290 M318 270 Q318 296 330 298 Q342 296 342 270 L336 280 L330 268 L324 280 Z M330 312 Q342 302 350 304'
const grass = 'M10 376 q6 -14 10 0 q4 -16 10 0 M120 378 q6 -14 10 0 q4 -16 10 0 M260 378 q6 -14 10 0 q4 -16 10 0 M370 376 q6 -14 10 0 q4 -16 10 0'

export const chickDetail: Lesson = {
  id: 'chick-detail',
  title: { da: 'Kylling lige ude af ægget', en: 'Chick just out of the egg' },
  category: 'hoejtider',
  sub: 'paaske',
  level: 2,
  style: 'detaljer',
  base: 'chick',
  minutes: 12,
  intro: {
    da: 'Byg videre på din kylling: den er lige kommet ud af ægget! Tegn æggeskallerne, en tulipan, røde kinder og bløde dun.',
    en: 'Build on your chick: it has just hatched! Draw the eggshells, a tulip, rosy cheeks and soft fluff.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn den nederste halvdel af æggeskallen med en takket kant.', en: 'Draw the bottom half of the eggshell with a jagged edge.' },
      strokes: [{ d: shellLeft }],
    },
    {
      text: { da: 'Tegn toppen af skallen, der ligger på jorden på den anden side.', en: 'Draw the top of the shell lying on the ground on the other side.' },
      strokes: [{ d: shellTop }],
    },
    {
      text: { da: 'Tegn en tulipan og små græstotter.', en: 'Draw a tulip and little tufts of grass.' },
      strokes: [{ d: tulip }, { d: grass }],
    },
    {
      text: { da: 'Tegn røde kinder og små dun-streger på kroppen. Skriv PIP!', en: 'Draw rosy cheeks and little fluffy strokes on the body. Write CHEEP!' },
      strokes: [
        { d: `${circle(168, 166, 7)} ${circle(232, 166, 7)}`, kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: 'M150 300 l6 -6 M160 312 l6 -6 M240 300 l6 -6 M230 316 l6 -6 M196 326 l6 -6', weight: 0.6, opacity: 0.7 },
      ],
      labels: [{ x: 300, y: 110, text: { da: 'PIP!', en: 'CHEEP!' } }],
    },
    {
      text: {
        da: 'Skyg kyllingen blødt i højre side og under hovedet. Lad skallerne være hvide, og farvelæg tulipanen.',
        en: 'Shade the chick softly on the right and under its head. Keep the shells white, and colour the tulip.',
      },
      tip: { da: 'Bløde skygger får kyllingen til at se dunet ud.', en: 'Soft shading makes the chick look fluffy.' },
      strokes: [
        { d: 'M242 176 Q296 214 286 284 Q270 344 200 346 Q262 310 262 240 Q260 200 242 176 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M158 186 Q200 214 242 186 Q200 200 158 186 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: `${shellLeft} ${shellTop}`, kind: 'shade', fill: 'paper' },
        { d: 'M318 270 Q318 296 330 298 Q342 296 342 270 L336 280 L330 268 L324 280 Z', kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Pip! Velkommen til verden, lille kylling!', en: 'Cheep! Welcome to the world, little chick!' }],
  nextTip: { da: 'Tegn en hel familie af kyllinger bag en høne.', en: 'Draw a whole family of chicks behind a mother hen.' },
}
