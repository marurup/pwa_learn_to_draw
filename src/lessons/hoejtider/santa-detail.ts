import { circle } from '../shapes'
import type { Lesson } from '../types'

const sack = 'M100 300 Q124 330 112 386 Q68 396 22 386 Q10 330 66 300'
const sackNeck = 'M66 300 L60 286 Q82 278 104 286 L100 300'
const cane = 'M70 288 V256 Q70 242 58 242 Q46 242 46 254'
const gift = 'M80 290 V268 H100 V290 M90 268 V290'

export const santaDetail: Lesson = {
  id: 'santa-detail',
  title: { da: 'Julemand med gavesæk', en: 'Santa with his sack of presents' },
  category: 'hoejtider',
  sub: 'jul',
  level: 3,
  style: 'detaljer',
  base: 'santa',
  minutes: 20,
  intro: {
    da: 'Byg videre på din julemand: en pelsstribe ned ad frakken, en sæk fuld af gaver, røde kinder og bløde skygger.',
    en: 'Build on your Santa: a fur stripe down his coat, a sack full of presents, rosy cheeks and soft shading.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en pelsstribe ned midt på frakken, og giv pelsen små bølger.', en: 'Draw a fur stripe down the middle of the coat, and give the fur little waves.' },
      strokes: [
        { d: 'M192 214 V258 M208 214 V258 M192 282 V320 M208 282 V320' },
        { d: 'M160 110 q4 -4 8 0 q4 4 8 0 M200 110 q4 -4 8 0 q4 4 8 0 M140 330 q4 -4 8 0 q4 4 8 0 M200 330 q4 -4 8 0 q4 4 8 0 M244 330 q4 -4 8 0 q4 4 8 0', weight: 0.6, opacity: 0.7 },
      ],
    },
    {
      text: { da: 'Tegn en stor sæk, der står ved siden af julemanden.', en: 'Draw a big sack standing next to Santa.' },
      strokes: [{ d: sack }, { d: sackNeck }],
    },
    {
      text: { da: 'Tegn en slikstok og en gave, der kigger op af sækken.', en: 'Draw a candy cane and a present peeking out of the sack.' },
      strokes: [{ d: cane }, { d: 'M62 288 V254 Q62 250 58 250 Q54 250 54 254' }, { d: gift }],
    },
    {
      text: { da: 'Tegn røde kinder, glimt i øjnene og skriv HO HO HO!', en: 'Draw rosy cheeks and a twinkle in his eyes, and write HO HO HO!' },
      strokes: [
        { d: `${circle(180, 146, 6)} ${circle(220, 146, 6)}`, kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: `${circle(189, 133, 1.3)} ${circle(213, 133, 1.3)}`, kind: 'shade', fill: 'paper' },
      ],
      labels: [{ x: 330, y: 200, text: { da: 'HO HO HO!', en: 'HO HO HO!' } }],
    },
    {
      text: {
        da: 'Skyg frakken i højre side og sækken forneden. Farvelæg slikstokken med røde striber.',
        en: 'Shade the right side of the coat and the bottom of the sack. Colour the candy cane with red stripes.',
      },
      tip: { da: 'Skygger i den ene side gør julemanden rund og tyk.', en: 'Shading down one side makes Santa look round and plump.' },
      strokes: [
        { d: 'M224 198 Q264 210 270 260 L276 324 H244 Q256 250 224 198 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: `${sack} Z`, kind: 'shade', tone: 0.3 },
        { d: 'M22 386 Q68 396 112 386 Q116 360 114 346 Q70 380 18 360 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: 'M62 286 V278 H70 V286 Z M62 270 V262 H70 V270 Z M54 254 Q54 246 62 246 V252 Q58 250 54 254 Z', kind: 'shade', tone: 0.55 },
        { d: 'M80 290 V268 H100 V290 Z', kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [{ da: 'Ho ho ho! Sækken er fuld, og julemanden smiler over hele hovedet!', en: 'Ho ho ho! The sack is full and Santa is grinning from ear to ear!' }],
  nextTip: { da: 'Tegn julemanden, der kravler ned gennem en skorsten.', en: 'Draw Santa climbing down a chimney.' },
}
