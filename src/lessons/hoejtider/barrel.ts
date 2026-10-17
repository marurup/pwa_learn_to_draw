import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

export const BARREL = {
  top: ellipse(200, 110, 72, 16),
  sides: 'M128 110 Q104 220 128 330 M272 110 Q296 220 272 330 M128 330 Q200 350 272 330',
  shape: 'M128 110 Q104 220 128 330 Q200 350 272 330 Q296 220 272 110 Z',
  hoops: 'M121 150 Q200 168 279 150 M121 290 Q200 308 279 290',
  staves: 'M164 124 Q154 230 164 337 M236 124 Q246 230 236 337',
  rope: 'M20 40 H380 M200 40 L150 98 M200 40 L250 98',
  catHead: circle(200, 228, 30),
  catEars: 'M178 212 L172 186 L192 200 M208 200 L228 186 L222 212',
}

export const barrel: Lesson = {
  id: 'barrel',
  title: { da: 'Fastelavnstønde', en: 'Shrovetide barrel' },
  category: 'hoejtider',
  sub: 'fastelavn',
  level: 2,
  minutes: 12,
  intro: {
    da: 'Tønden, som vi slår katten af til fastelavn – med jernbånd, et reb og en sort kat malet på.',
    en: 'The barrel we hit at Danish Shrovetide (fastelavn) – with iron hoops, a rope and a black cat painted on it.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en oval til toppen af tønden og to buede sider, der bliver bredere på midten.', en: 'Draw an oval for the top of the barrel and two curved sides that bulge in the middle.' },
      strokes: [{ d: BARREL.top }, { d: BARREL.sides }],
    },
    {
      text: { da: 'Tegn to buede jernbånd rundt om tønden.', en: 'Draw two curved iron hoops around the barrel.' },
      strokes: [{ d: BARREL.hoops, weight: 1.3 }],
    },
    {
      text: { da: 'Tegn et par buede streger for brædderne.', en: 'Draw a couple of curved lines for the planks.' },
      strokes: [{ d: BARREL.staves, weight: 0.7 }],
    },
    {
      text: { da: 'Tegn rebet, som tønden hænger i.', en: 'Draw the rope the barrel hangs from.' },
      strokes: [{ d: BARREL.rope }],
    },
    {
      text: { da: 'Mal en kat på tønden: et rundt hoved med spidse ører, øjne og knurhår.', en: 'Paint a cat on the barrel: a round head with pointy ears, eyes and whiskers.' },
      strokes: [
        { d: BARREL.catHead },
        { d: BARREL.catEars },
        { d: `${ellipse(189, 224, 5, 7)} ${ellipse(211, 224, 5, 7)} M196 236 L200 240 L204 236 M188 240 L168 236 M188 244 L168 248 M212 240 L232 236 M212 244 L232 248` },
      ],
    },
    {
      text: { da: 'Farvelæg tønden brun og katten sort – men lad øjnene være lyse.', en: 'Colour the barrel brown and the cat black – but keep the eyes light.' },
      strokes: [
        { d: `${BARREL.shape} ${BARREL.top}`, kind: 'shade', tone: 0.3 },
        { d: `${BARREL.catHead} M178 212 L172 186 L192 200 Z M208 200 L228 186 L222 212 Z`, kind: 'shade', tone: 0.8 },
        { d: `${ellipse(189, 224, 5, 7)} ${ellipse(211, 224, 5, 7)}`, kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'Slå katten af tønden! Sikke en flot fastelavnstønde.', en: 'Hit the barrel! What a great Shrovetide barrel.' }],
  nextTip: { da: 'Tegn dig selv udklædt med en kølle i hånden.', en: 'Draw yourself in a costume holding a bat.' },
}
