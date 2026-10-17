import { circle, mirrorX, roundRect } from '../shapes'
import type { Lesson } from '../types'

export const BONFIRE = {
  // Three flame tips; the flame is symmetric, so mirroring it only turns it the other way round.
  flame: 'M200 90 Q214 130 230 152 Q236 132 248 120 Q252 160 262 200 Q272 250 244 288 Q228 306 200 308 Q172 306 156 288 Q128 250 138 200 Q148 160 152 120 Q164 132 170 152 Q186 130 200 90 Z',
  inner: 'M200 170 Q226 220 230 256 Q228 290 200 294 Q172 290 170 256 Q174 220 200 170 Z',
  logs: `M168 296 L106 344 L114 354 L176 304 M232 296 L294 344 L286 354 L224 304 ${roundRect(130, 334, 140, 20, 10)} ${circle(260, 344, 6)}`,
  sparks: [circle(150, 90, 3), circle(244, 84, 2.5), circle(276, 140, 3), circle(124, 150, 2), circle(222, 50, 2), circle(180, 56, 2.5)].join(' '),
  ground: 'M20 362 Q200 374 380 362',
}

export const bonfire: Lesson = {
  id: 'bonfire',
  title: { da: 'Sankthansbål', en: 'Midsummer bonfire' },
  category: 'hoejtider',
  sub: 'sankthans',
  level: 2,
  minutes: 10,
  intro: {
    da: 'Et stort, flammende bål til sankthansaften med gnister, der flyver op i luften.',
    en: 'A big blazing bonfire for Midsummer’s Eve with sparks flying up into the air.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en stor flamme med tre spidser foroven – den højeste i midten – og rund forneden.', en: 'Draw a big flame with three tips at the top – the tallest in the middle – and round at the bottom.' },
      strokes: [{ d: BONFIRE.flame }],
    },
    {
      text: { da: 'Tegn en mindre flamme inden i den store.', en: 'Draw a smaller flame inside the big one.' },
      strokes: [{ d: BONFIRE.inner }],
    },
    {
      text: { da: 'Tegn brændestykker under flammerne og jorden.', en: 'Draw logs under the flames and the ground.' },
      strokes: [{ d: BONFIRE.logs }, { d: BONFIRE.ground }],
    },
    {
      text: { da: 'Tegn gnister, der flyver op. Farvelæg flammen orange og rød og midten gul.', en: 'Draw sparks flying up. Colour the flame orange and red and the middle yellow.' },
      strokes: [
        { d: BONFIRE.sparks },
        // The inner flame is mirrored so it runs the other way round and stays a lighter hole.
        { d: `${BONFIRE.flame} ${mirrorX(BONFIRE.inner, 200)}`, kind: 'shade', tone: 0.4 },
        { d: BONFIRE.inner, kind: 'shade', tone: 0.12 },
        { d: BONFIRE.logs, kind: 'shade', tone: 0.6 },
      ],
    },
  ],
  praise: [{ da: 'Sikke et bål – nu skal vi synge midsommervisen!', en: 'What a bonfire – time to sing the midsummer song!' }],
  nextTip: { da: 'Tegn bålet ved stranden, når solen går ned.', en: 'Draw the bonfire on the beach at sunset.' },
}
