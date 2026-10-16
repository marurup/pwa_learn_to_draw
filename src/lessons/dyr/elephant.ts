import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const leg = (x: number, top: number, w = 38) => `M${x} ${top} L${x + 1} 340 Q${x + 1} 354 ${x + w / 2} 354 Q${x + w - 1} 354 ${x + w - 1} 340 L${x + w} ${top}`

export const elephant: Lesson = {
  id: 'elephant',
  title: { da: 'Elefant', en: 'Elephant' },
  category: 'dyr',
  sub: 'landdyr',
  level: 3,
  minutes: 20,
  intro: {
    da: 'En elefant set fra siden. Du bygger den af store, lette hjælpeformer og tegner omridset udenpå.',
    en: 'An elephant seen from the side. You build it from big, light guide shapes and draw the outline over them.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Tegn en stor, let oval til kroppen og en cirkel til hovedet, lidt højere oppe til højre.', en: 'Draw a big, light oval for the body and a circle for the head, a little higher up on the right.' },
      tip: { da: 'Hjælpeformerne viser, hvor stor hver del skal være. Tegn dem helt let.', en: 'The guide shapes show how big each part should be. Draw them very lightly.' },
      strokes: [
        { d: ellipse(170, 214, 112, 82), kind: 'guide' },
        { d: circle(292, 170, 54), kind: 'guide' },
      ],
    },
    {
      text: { da: 'Tegn ryggen: én lang bue fra hovedet, hen over kroppen og ned bagved.', en: 'Draw the back: one long curve from the head, over the body and down at the back.' },
      strokes: [{ d: 'M276 118 Q200 108 120 138 Q64 166 62 228 Q62 260 78 282' }],
    },
    {
      text: { da: 'Tegn fire tykke ben som søjler. De to bagerste står lidt bag de forreste.', en: 'Draw four thick legs like pillars. The two at the back stand a little behind the front ones.' },
      strokes: [{ d: leg(78, 282) }, { d: leg(126, 290, 36) }, { d: leg(222, 290) }, { d: 'M268 262 L269 340 Q269 354 286 354 Q303 354 303 340 L304 238' }, { d: 'M116 300 Q170 314 222 300' }],
    },
    {
      text: { da: 'Tegn hovedet og den lange snabel, der krøller op forneden.', en: 'Draw the head and the long trunk curling up at the bottom.' },
      strokes: [{ d: 'M276 118 Q330 106 346 158 Q352 200 342 232 Q332 282 348 328 Q354 344 368 338 Q374 330 366 324 Q352 312 354 280 Q358 250 322 236 Q310 240 304 236' }],
    },
    {
      text: { da: 'Tegn et stort øre som en bred flap på siden af hovedet.', en: 'Draw a big ear like a wide flap on the side of the head.' },
      strokes: [{ d: 'M264 130 Q206 126 204 196 Q206 252 250 254 Q274 252 282 226' }],
    },
    {
      text: { da: 'Tegn øjet, en stødtand og rynker på snablen.', en: 'Draw the eye, a tusk and wrinkles on the trunk.' },
      strokes: [
        { d: circle(318, 160, 5), kind: 'shade', tone: 0.95 },
        { d: 'M312 150 Q320 146 328 152' },
        { d: 'M322 238 Q332 258 358 254 Q344 246 338 234' },
        { d: 'M344 268 h12 M346 290 h12 M350 310 h10' },
      ],
    },
    {
      text: { da: 'Visk hjælpeformerne ud. Tegn halen, tæer på fødderne og jorden.', en: 'Erase the guide shapes. Draw the tail, toes on the feet and the ground.' },
      erase: 'guides',
      strokes: [
        { d: 'M64 206 Q44 226 50 256 M50 256 l-8 10 M50 256 l0 13 M50 256 l8 10' },
        { d: 'M86 354 q4 -6 8 0 M100 354 q4 -6 8 0 M232 354 q4 -6 8 0 M246 354 q4 -6 8 0' },
        { d: 'M20 356 H380' },
      ],
    },
  ],
  praise: [{ da: 'Sikke en stor og flot elefant!', en: 'What a big, beautiful elephant!' }],
  nextTip: { da: 'Tegn en lille elefantunge, der holder fast i mors hale med snablen.', en: 'Draw a baby elephant holding on to its mother’s tail with its trunk.' },
}
