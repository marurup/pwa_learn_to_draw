import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const sprinkles = 'M120 196 l6 -3 M134 210 l5 4 M262 192 l6 3 M276 206 l-5 4 M180 186 l6 2 M222 186 l-6 2 M150 224 l4 -5 M250 224 l-4 -5 M200 226 h6'
const strawberry = (x: number, y: number) => `M${x} ${y} Q${x - 10} ${y - 2} ${x - 8} ${y - 12} Q${x} ${y - 16} ${x + 8} ${y - 12} Q${x + 10} ${y - 2} ${x} ${y} Z M${x - 5} ${y - 13} L${x} ${y - 18} L${x + 5} ${y - 13}`
const strawberries = `${strawberry(180, 214)} ${strawberry(220, 214)} ${strawberry(130, 208)} ${strawberry(270, 208)}`
const flagL = 'M116 204 L104 146 M104 146 L136 140 L140 162 L108 168 M114 145 L118 167 M106 157 L138 151'
const flagR = mirrorX(flagL, 200)
const flagCloth = 'M104 146 L136 140 L140 162 L108 168 Z'
const banner = 'M80 64 H320 L306 84 L320 104 H80 L94 84 Z'

export const birthdayCakeDetail: Lesson = {
  id: 'birthday-cake-detail',
  title: { da: 'Fødselsdagskage med flag', en: 'Birthday cake with flags' },
  category: 'hoejtider',
  sub: 'foedselsdag',
  level: 2,
  style: 'detaljer',
  base: 'birthday-cake',
  minutes: 14,
  intro: {
    da: 'Byg videre på din kage: krymmel og jordbær, flag, et banner med TILLYKKE og bløde skygger.',
    en: 'Build on your cake: sprinkles and strawberries, flags, a HAPPY BIRTHDAY banner and soft shading.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn krymmel på glasuren og jordbær mellem lysene.', en: 'Draw sprinkles on the icing and strawberries between the candles.' },
      strokes: [{ d: sprinkles, weight: 0.8 }, { d: strawberries }],
    },
    {
      text: { da: 'Stik et flag i hver side af kagen.', en: 'Stick a flag into each side of the cake.' },
      strokes: [{ d: `${flagL} ${flagR}` }],
    },
    {
      text: { da: 'Tegn et banner over kagen og skriv TILLYKKE!', en: 'Draw a banner above the cake and write HAPPY BIRTHDAY!' },
      strokes: [{ d: banner }],
      labels: [{ x: 200, y: 90, text: { da: 'TILLYKKE!', en: 'HAPPY BIRTHDAY!' } }],
    },
    {
      text: {
        da: 'Skyg kagen i højre side og under tallerkenen. Farvelæg jordbærrene røde og flagene, som du vil.',
        en: 'Shade the right side of the cake and under the plate. Colour the strawberries red and the flags however you like.',
      },
      tip: { da: 'Lad lige en hvid prik stå på hvert jordbær, så skinner de.', en: 'Leave a white dot on each strawberry so they shine.' },
      strokes: [
        { d: 'M270 214 Q300 210 300 200 V320 Q290 336 266 340 Q284 280 270 214 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M80 344 Q200 386 320 344 Q300 372 200 378 Q100 372 80 344 Z', kind: 'shade', fill: 'soft', tone: 0.2 },
        { d: strawberries, kind: 'shade', tone: 0.5 },
        { d: [circle(176, 206, 1.8), circle(216, 206, 1.8), circle(126, 200, 1.8), circle(266, 200, 1.8)].join(' '), kind: 'shade', fill: 'paper' },
        { d: `${flagCloth} ${mirrorX(flagCloth, 200)}`, kind: 'shade', tone: 0.35 },
        { d: banner, kind: 'shade', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Hurra! Sikke en festkage – tillykke!', en: 'Hooray! What a party cake – happy birthday!' }],
  nextTip: { da: 'Tegn alle gæsterne rundt om bordet med kagen.', en: 'Draw all the guests around the table with the cake.' },
}
