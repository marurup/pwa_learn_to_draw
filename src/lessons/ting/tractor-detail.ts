import { circle, radial, rect, ring } from '../shapes'
import type { Lesson } from '../types'
import { TRACTOR } from './tractor'

const [rx, ry, rr] = TRACTOR.rear
// Big chevron treads on the back tyre: little V's all the way round.
const chevrons = Array.from({ length: 16 }, (_, i) => {
  const a = (i / 16) * 2 * Math.PI
  const p = (r: number, da: number) => `${(rx + r * Math.cos(a + da)).toFixed(1)} ${(ry + r * Math.sin(a + da)).toFixed(1)}`
  return `M${p(rr - 10, -0.12)} L${p(rr, 0)} L${p(rr - 10, 0.12)}`
}).join(' ')
const bale = (x: number, y: number) => `${rect(x, y, 34, 26)} M${x + 4} ${y + 8} H${x + 30} M${x + 4} ${y + 17} H${x + 30}`

export const tractorDetail: Lesson = {
  id: 'tractor-detail',
  title: { da: 'Traktor med høvogn', en: 'Tractor with a hay trailer' },
  category: 'ting',
  sub: 'maskiner',
  level: 2,
  style: 'detaljer',
  base: 'tractor',
  minutes: 15,
  intro: {
    da: 'Byg videre på din traktor: store mønstre på dækkene, en kølergrill, lygter, en trappe – og en vogn fuld af høballer.',
    en: 'Build on your tractor: big treads on the tyres, a grille, lights, a step – and a trailer full of hay bales.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn store V-formede mønstre rundt om baghjulet, og eger i forhjulet.', en: 'Draw big V-shaped treads round the back wheel, and spokes in the front wheel.' },
      strokes: [{ d: chevrons, weight: 1.2 }, { d: `${circle(rx, ry, 40)} ${radial(304, 316, 10, 30, 6)} ${circle(304, 316, 30)}` }],
    },
    {
      text: { da: 'Tegn kølergrillen foran på motoren, en lygte og et trin op til førerhuset.', en: 'Draw the grille at the front of the engine, a light and a step up to the cab.' },
      strokes: [{ d: 'M320 244 V282 M326 246 V282 M314 244 V282', weight: 0.7 }, { d: circle(320, 228, 6) }, { d: 'M196 252 H214 M196 270 H214 M200 236 V286' }],
    },
    {
      text: {
        da: 'Tegn en vogn bag traktoren med et træk, og stabl høballer på den.',
        en: 'Draw a trailer behind the tractor with a tow bar, and stack hay bales on it.',
      },
      tip: { da: 'Vognen kører med ud af papiret – det er helt i orden.', en: 'The trailer goes off the edge of the paper – that is quite all right.' },
      strokes: [
        { d: 'M66 286 H0 M0 300 H66 M66 286 V300 M66 292 H80' },
        { d: `${circle(26, 320, 20)} ${circle(26, 320, 6)}` },
        { d: `${bale(0, 260)} ${bale(34, 260)} ${bale(16, 234)}` },
      ],
    },
    {
      text: { da: 'Tegn mudder på dækkene og høstrå, der flyver af vognen.', en: 'Draw mud on the tyres and bits of straw flying off the trailer.' },
      strokes: [
        { d: 'M98 336 q6 -6 12 0 q-4 6 -12 0 Z M160 342 q6 -4 10 2 q-4 4 -10 -2 Z', kind: 'shade', tone: 0.6 },
        { d: 'M64 236 L74 228 M70 248 L82 244 M58 226 L64 214', weight: 0.6 },
      ],
    },
    {
      text: { da: 'Skyg dækkene og under traktoren, og farvelæg høballerne gule.', en: 'Shade the tyres and under the tractor, and colour the hay bales yellow.' },
      strokes: [
        { d: ring(rx, ry, rr, 40), kind: 'shade', tone: 0.5 },
        { d: `${rect(0, 260, 68, 26)} ${rect(16, 234, 34, 26)}`, kind: 'shade', tone: 0.2 },
        { d: 'M80 358 Q220 350 350 358 Q220 366 80 358 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Høet er kørt i hus – godt arbejde, landmand!', en: 'The hay is in – good work, farmer!' }],
  nextTip: { da: 'Tegn en hel bondegård med en lade og dyr omkring traktoren.', en: 'Draw a whole farm with a barn and animals around the tractor.' },
}
