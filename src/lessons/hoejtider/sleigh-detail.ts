import { circle, poly, roundRect, starPoints } from '../shapes'
import type { Lesson } from '../types'

const santaHat = 'M248 156 Q252 124 276 126 Q292 130 294 148'
const santaBeard = 'M250 168 Q248 196 264 202 Q280 196 280 168'
const santaBody = 'M250 192 Q234 204 234 236 M280 192 Q296 204 296 229'
const arm = 'M286 212 Q304 210 314 198'
const reins = 'M322 192 L398 140 M322 200 L398 156'
const roofs = 'M0 400 V378 L30 362 L60 378 V400 M150 400 V384 L190 364 L230 384 V400 M200 374 V360 H214 V381 M300 400 V376 L340 356 L380 376 V400'
const stars = [poly(starPoints(150, 60, 9, 4), true), poly(starPoints(230, 90, 7, 3), true), poly(starPoints(350, 60, 8, 3.5), true), poly(starPoints(40, 140, 6, 2.5), true)].join(' ')
const sparkles = [circle(40, 280, 2.5), circle(26, 262, 2), circle(52, 300, 2), circle(18, 290, 1.6), circle(36, 316, 1.6)].join(' ')

export const sleighDetail: Lesson = {
  id: 'sleigh-detail',
  title: { da: 'Julemanden flyver over byen', en: 'Santa flying over the town' },
  category: 'hoejtider',
  sub: 'jul',
  level: 3,
  style: 'detaljer',
  base: 'sleigh',
  minutes: 22,
  intro: {
    da: 'Byg videre på din kane: julemanden sætter sig fortil og holder tømmerne, og kanen flyver over hustagene en stjerneklar nat.',
    en: 'Build on your sleigh: Santa sits in the front holding the reins, and the sleigh flies over the rooftops on a starry night.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn julemandens hoved med hue og skæg forrest i kanen.', en: 'Draw Santa’s head with his hat and beard at the front of the sleigh.' },
      strokes: [{ d: roundRect(244, 156, 40, 10, 5) }, { d: santaHat }, { d: circle(296, 154, 7) }, { d: santaBeard }, { d: `${circle(258, 174, 2)} ${circle(272, 174, 2)}`, kind: 'shade', tone: 0.9 }],
    },
    {
      text: { da: 'Tegn kroppen, en arm, der holder tømmerne, og tømmerne, der går ud af papiret.', en: 'Draw his body, an arm holding the reins, and the reins running off the paper.' },
      tip: { da: 'Rensdyrene er lige uden for papiret – dem kan du tegne på et nyt ark!', en: 'The reindeer are just off the paper – you can draw them on a new sheet!' },
      strokes: [{ d: santaBody }, { d: arm }, { d: circle(318, 196, 6) }, { d: reins }],
    },
    {
      text: { da: 'Tegn hustage med en skorsten forneden og stjerner på himlen.', en: 'Draw rooftops with a chimney at the bottom and stars in the sky.' },
      strokes: [{ d: roofs }, { d: stars }],
    },
    {
      text: { da: 'Tegn et spor af gnister bag kanen, så man kan se, den flyver.', en: 'Draw a trail of sparkles behind the sleigh so you can see it is flying.' },
      strokes: [{ d: sparkles, kind: 'shade', tone: 0.5 }, { d: 'M12 330 Q40 320 58 336 M8 306 Q30 300 46 312', weight: 0.6, opacity: 0.7 }],
    },
    {
      text: {
        da: 'Skyg himlen mørkeblå foroven, og lad stjernerne være lyse. Farvelæg julemanden rød og hustagene mørke.',
        en: 'Shade the sky dark blue at the top, and keep the stars light. Colour Santa red and the rooftops dark.',
      },
      strokes: [
        { d: 'M0 0 H400 V190 H0 Z', kind: 'shade', fill: 'fade-down', tone: 0.45 },
        { d: stars, kind: 'shade', fill: 'paper' },
        { d: roofs, kind: 'shade', tone: 0.5 },
        { d: 'M248 156 Q252 124 276 126 Q292 130 294 148 L288 158 H248 Z M250 192 Q234 204 234 236 H296 V229 Q296 204 280 192 Z', kind: 'shade', tone: 0.45 },
        { d: `${santaBeard} Z ${circle(296, 154, 7)}`, kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'Se, hvor han flyver! Børnene i byen får gaver i nat.', en: 'Look at him fly! The children in the town are getting presents tonight.' }],
  nextTip: { da: 'Tegn rensdyrene foran kanen på et nyt ark og læg arkene side om side.', en: 'Draw the reindeer in front of the sleigh on a new sheet and put the sheets side by side.' },
}
