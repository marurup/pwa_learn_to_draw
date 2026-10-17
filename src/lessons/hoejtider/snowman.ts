import { circle } from '../shapes'
import type { Lesson } from '../types'

export const SNOWMAN = {
  balls: `${circle(200, 316, 62)} ${circle(200, 212, 44)} ${circle(200, 136, 34)}`,
  hat: 'M162 108 H238 M178 108 V70 H222 V108',
  nose: 'M200 136 L234 142 L200 148 Z',
  arms: 'M158 200 L104 166 M118 175 L110 158 M118 175 L100 182 M242 200 L296 166 M282 175 L290 158 M282 175 L300 182',
  buttons: `${circle(200, 196, 5)} ${circle(200, 220, 5)} ${circle(200, 290, 6)}`,
  scarf: 'M170 164 Q200 178 230 164 L232 178 Q200 192 168 178 Z M212 184 L218 226 L234 222 L226 182',
}

export const snowman: Lesson = {
  id: 'snowman',
  title: { da: 'Snemand', en: 'Snowman' },
  category: 'hoejtider',
  sub: 'jul',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En glad snemand af tre snebolde med hat, gulerodsnæse og halstørklæde.',
    en: 'A happy snowman made of three snowballs with a hat, a carrot nose and a scarf.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn tre cirkler oven på hinanden – den største nederst.', en: 'Draw three circles on top of each other – the biggest at the bottom.' },
      strokes: [{ d: SNOWMAN.balls }],
    },
    {
      text: { da: 'Tegn en høj hat på hovedet.', en: 'Draw a tall hat on the head.' },
      strokes: [{ d: SNOWMAN.hat }],
    },
    {
      text: { da: 'Tegn øjne af kul, en gulerodsnæse og en mund af små prikker.', en: 'Draw coal eyes, a carrot nose and a mouth made of little dots.' },
      strokes: [
        { d: `${circle(186, 124, 4)} ${circle(214, 124, 4)}`, kind: 'shade', tone: 0.9 },
        { d: SNOWMAN.nose },
        { d: [circle(184, 154, 2), circle(192, 158, 2), circle(200, 160, 2), circle(208, 158, 2), circle(216, 154, 2)].join(' '), kind: 'shade', tone: 0.9 },
      ],
    },
    {
      text: { da: 'Tegn arme af pinde og knapper af kul.', en: 'Draw stick arms and coal buttons.' },
      strokes: [{ d: SNOWMAN.arms }, { d: SNOWMAN.buttons, kind: 'shade', tone: 0.9 }],
    },
    {
      text: { da: 'Tegn et halstørklæde og sneen, han står i. Farvelæg hat, næse og halstørklæde!', en: 'Draw a scarf and the snow he is standing in. Colour the hat, nose and scarf!' },
      strokes: [
        { d: SNOWMAN.scarf },
        { d: 'M40 376 Q120 366 200 374 Q280 382 360 372' },
        { d: 'M178 108 V70 H222 V108 Z', kind: 'shade', tone: 0.8 },
        { d: SNOWMAN.nose, kind: 'shade', tone: 0.35 },
        { d: SNOWMAN.scarf, kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en glad snemand – han smelter aldrig på papiret!', en: 'What a happy snowman – he will never melt on paper!' }],
  nextTip: { da: 'Tegn en lille snehund ved siden af ham.', en: 'Draw a little snow dog next to him.' },
}
