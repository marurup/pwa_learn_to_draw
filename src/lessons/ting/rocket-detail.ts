import { circle, type Pt } from '../shapes'
import type { Lesson } from '../types'

const quadPt = (s: Pt, c: Pt, e: Pt, t: number): Pt => [
  (1 - t) ** 2 * s[0] + 2 * t * (1 - t) * c[0] + t ** 2 * e[0],
  (1 - t) ** 2 * s[1] + 2 * t * (1 - t) * c[1] + t ** 2 * e[1],
]
/** Rivets in a row just under one of the rocket's bands. */
const rivets = (s: Pt, c: Pt, e: Pt) =>
  [0.15, 0.32, 0.5, 0.68, 0.85]
    .map((t) => quadPt(s, c, e, t))
    .map(([x, y]) => circle(x, y + 7, 2))
    .join(' ')
const smoke = 'M118 396 q-12 -16 6 -24 q6 -16 24 -8 q14 -6 18 8 Z M282 396 q12 -16 -6 -24 q-6 -16 -24 -8 q-14 -6 -18 8 Z'

export const rocketDetail: Lesson = {
  id: 'rocket-detail',
  title: { da: 'Raket med astronaut', en: 'Rocket with an astronaut' },
  category: 'ting',
  sub: 'rummet',
  level: 3,
  style: 'detaljer',
  base: 'rocket',
  minutes: 15,
  intro: {
    da: 'Byg videre på din raket: nitter og plader, en astronaut i vinduet, røg ved affyringen og kratere på planeten.',
    en: 'Build on your rocket: rivets and panels, an astronaut in the window, smoke at take-off and craters on the planet.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn nitter under båndene og samlinger mellem metalpladerne.', en: 'Draw rivets under the bands and seams between the metal plates.' },
      strokes: [
        { d: `${rivets([155, 210], [200, 220], [245, 210])} ${rivets([170, 80], [200, 90], [230, 80])}`, kind: 'shade', tone: 0.6 },
        { d: 'M200 178 V286 M200 56 V118', weight: 0.6 },
      ],
    },
    {
      text: { da: 'Tegn en astronaut i vinduet: en hjelm med et mørkt visir.', en: 'Draw an astronaut in the window: a helmet with a dark visor.' },
      strokes: [{ d: circle(200, 150, 12) }, { d: 'M191 148 Q200 141 209 148 Q200 156 191 148 Z', kind: 'shade', tone: 0.8 }],
    },
    {
      text: { da: 'Tegn store røgskyer på hver side af flammen.', en: 'Draw big clouds of smoke on each side of the flame.' },
      strokes: [{ d: smoke }],
    },
    {
      text: { da: 'Tegn kratere på planeten og et stjerneskud.', en: 'Draw craters on the planet and a shooting star.' },
      strokes: [{ d: `${circle(322, 84, 4)} ${circle(338, 98, 3)} ${circle(326, 104, 2.5)}` }, { d: 'M30 160 L84 136 M84 136 l3 7 l7 1 l-5 5 l1 7 l-6 -3 l-6 3 l1 -7 l-5 -5 l7 -1 Z' }],
    },
    {
      text: {
        da: 'Skyg rakettens højre side, så den ser rund ud, og lad en hvid glans stå på vinduet. Farvelæg!',
        en: 'Shade the right side of the rocket so it looks round, and leave a white shine on the window. Colour it in!',
      },
      strokes: [
        { d: 'M226 76 C250 112 254 180 248 290 H230 C236 190 236 124 218 72 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M188 132 Q196 126 204 128 Q196 132 190 140 Z', kind: 'shade', fill: 'paper' },
        { d: 'M248 222 L296 300 L248 290 Z', kind: 'shade', tone: 0.35 },
        { d: smoke, kind: 'shade', fill: 'soft', tone: 0.12 },
      ],
    },
  ],
  praise: [{ da: '3, 2, 1 … affyring! Astronauten er på vej ud i rummet.', en: '3, 2, 1 … lift-off! The astronaut is on the way to space.' }],
  nextTip: { da: 'Tegn astronauten, der svæver i rummet uden for raketten.', en: 'Draw the astronaut floating in space outside the rocket.' },
}
