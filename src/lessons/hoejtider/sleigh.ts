import type { Lesson } from '../types'

export const SLEIGH = {
  body: 'M100 300 L92 204 Q90 180 116 184 L124 236 H262 Q300 236 316 208 Q326 192 338 200 Q346 210 334 220 Q318 232 310 252 L300 300 Z',
  runners: 'M70 340 H320 Q350 340 352 318 Q352 302 338 304 M70 340 Q58 340 58 330',
  struts: 'M130 300 V340 M200 300 V340 M270 300 V340',
  swirls: 'M150 262 Q170 246 190 264 Q174 282 162 268 M226 262 Q246 246 266 264 Q250 282 238 268',
  gifts: 'M132 236 V196 H176 V236 M154 196 V236 M182 236 V208 H220 V236 M182 222 H220',
  bow: 'M154 196 Q142 182 138 192 Q142 200 154 196 Q166 182 170 192 Q166 200 154 196',
}

export const sleigh: Lesson = {
  id: 'sleigh',
  title: { da: 'Julemandens kane', en: 'Santa’s sleigh' },
  category: 'hoejtider',
  sub: 'jul',
  level: 2,
  minutes: 12,
  intro: {
    da: 'Julemandens kane med krøllede meder, snirkler på siden og gaver bagi.',
    en: 'Santa’s sleigh with curly runners, swirls on the side and presents in the back.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Tegn kanen: et højt ryglæn bagtil, et lavt sæde og en krøllet snabel fortil.',
        en: 'Draw the sleigh: a tall backrest at the back, a low seat and a curly front.',
      },
      tip: { da: 'Tegn langsomt rundt om krøllen – den må gerne være lidt rund og tyk.', en: 'Go slowly around the curl – it can be a little round and chunky.' },
      strokes: [{ d: SLEIGH.body }],
    },
    {
      text: { da: 'Tegn to lange meder med en krølle fortil og små stivere op til kanen.', en: 'Draw a long runner with a curl at the front and little struts up to the sleigh.' },
      strokes: [{ d: SLEIGH.runners }, { d: SLEIGH.struts }],
    },
    {
      text: { da: 'Tegn snirkler på siden af kanen.', en: 'Draw swirls on the side of the sleigh.' },
      strokes: [{ d: SLEIGH.swirls }],
    },
    {
      text: { da: 'Fyld kanen med gaver – med bånd og en sløjfe.', en: 'Fill the sleigh with presents – with ribbons and a bow.' },
      strokes: [{ d: SLEIGH.gifts }, { d: SLEIGH.bow }],
    },
    {
      text: { da: 'Farvelæg kanen rød og snirklerne og mederne guld!', en: 'Colour the sleigh red and the swirls and runners gold!' },
      strokes: [
        { d: SLEIGH.body, kind: 'shade', tone: 0.45 },
        { d: 'M132 236 V196 H176 V236 Z M182 236 V208 H220 V236 Z', kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en flot kane – nu mangler den bare rensdyr!', en: 'What a fine sleigh – now it just needs reindeer!' }],
  nextTip: { da: 'Tegn kanen, mens den flyver over hustagene om natten.', en: 'Draw the sleigh flying over the rooftops at night.' },
}
