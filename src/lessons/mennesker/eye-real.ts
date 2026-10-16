import { circle, line, type Pt } from '../shapes'
import type { Lesson } from '../types'

// Eyelids as quadratic curves from the inner corner (left) to the outer corner (right).
const inner: Pt = [70, 214]
const outer: Pt = [336, 206]
const upperCtrl: Pt = [168, 112]
const lowerCtrl: Pt = [190, 286]
const upper = `M${inner[0]} ${inner[1]} Q${upperCtrl[0]} ${upperCtrl[1]} ${outer[0]} ${outer[1]}`
const lower = `M${inner[0]} ${inner[1]} Q${lowerCtrl[0]} ${lowerCtrl[1]} ${outer[0]} ${outer[1]}`

const bezier = (p0: Pt, p1: Pt, p2: Pt, t: number): Pt => [
  (1 - t) ** 2 * p0[0] + 2 * t * (1 - t) * p1[0] + t ** 2 * p2[0],
  (1 - t) ** 2 * p0[1] + 2 * t * (1 - t) * p1[1] + t ** 2 * p2[1],
]
/** y of a lid curve at x (found by bisection on t; x grows with t). */
const lidY = (ctrl: Pt, x: number) => {
  let lo = 0
  let hi = 1
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2
    if (bezier(inner, ctrl, outer, mid)[0] < x) lo = mid
    else hi = mid
  }
  return bezier(inner, ctrl, outer, lo)[1]
}
const between = ([x, y]: Pt) => x > inner[0] && x < outer[0] && y > lidY(upperCtrl, x) && y < lidY(lowerCtrl, x)

/** The parts of a circle that are visible between the lids, as path data. */
function visibleCircle(cx: number, cy: number, r: number): string {
  const pts: (Pt | null)[] = Array.from({ length: 181 }, (_, i) => {
    const a = (i * 2 * Math.PI) / 180
    const p: Pt = [cx + r * Math.cos(a), cy + r * Math.sin(a)]
    return between(p) ? p : null
  })
  const parts: string[] = []
  let cur: Pt[] = []
  const flush = () => {
    if (cur.length > 1) parts.push('M' + cur.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L'))
    cur = []
  }
  pts.forEach((p) => (p ? cur.push(p) : flush()))
  flush()
  return parts.join(' ')
}

/** A circle squeezed into the eye opening (points above/below the lids are moved onto the lids). */
function clampedCircle(cx: number, cy: number, r: number, reverse = false): string {
  const pts: Pt[] = Array.from({ length: 120 }, (_, i) => {
    const a = ((reverse ? -i : i) * 3 * Math.PI) / 180
    const x = cx + r * Math.cos(a)
    const y = cy + r * Math.sin(a)
    return [x, Math.min(Math.max(y, lidY(upperCtrl, x) + 1), lidY(lowerCtrl, x) - 1)]
  })
  return 'M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L') + ' Z'
}

const IRIS = { cx: 200, cy: 202, r: 56 }
const irisLines = Array.from({ length: 36 }, (_, i) => {
  const a = (i * 10 * Math.PI) / 180
  const r1 = 26
  const r2 = IRIS.r - 6 - (i % 3) * 4
  const p1: Pt = [IRIS.cx + r1 * Math.cos(a), IRIS.cy + r1 * Math.sin(a)]
  const p2: Pt = [IRIS.cx + r2 * Math.cos(a), IRIS.cy + r2 * Math.sin(a)]
  return between(p1) && between(p2) ? line(p1[0], p1[1], p2[0], p2[1]) : ''
}).join(' ')

const upperLashes = Array.from({ length: 16 }, (_, i) => {
  const t = 0.18 + i * 0.05
  const [x, y] = bezier(inner, upperCtrl, outer, t)
  const len = 14 + t * 22
  const lean = 6 + t * 20
  return `M${x.toFixed(1)} ${y.toFixed(1)} q${(lean * 0.3).toFixed(1)} ${(-len * 0.7).toFixed(1)} ${lean.toFixed(1)} ${(-len).toFixed(1)}`
}).join(' ')
const lowerLashes = Array.from({ length: 8 }, (_, i) => {
  const t = 0.35 + i * 0.075
  const [x, y] = bezier(inner, lowerCtrl, outer, t)
  return `M${x.toFixed(1)} ${(y + 2).toFixed(1)} l${(3 + t * 6).toFixed(1)} ${(8 + t * 4).toFixed(1)}`
}).join(' ')
const brow = Array.from({ length: 26 }, (_, i) => {
  const t = i / 25
  const [x, y] = bezier([64, 92], [190, 22], [344, 86], t)
  const h = 10 + 8 * Math.sin(Math.PI * Math.min(1, t * 1.4))
  return `M${x.toFixed(1)} ${(y + h / 2).toFixed(1)} l${(10 + t * 6).toFixed(1)} ${(-h).toFixed(1)}`
}).join(' ')

export const eyeReal: Lesson = {
  id: 'eye-real',
  title: { da: 'Naturtro øje', en: 'Realistic eye' },
  category: 'mennesker',
  sub: 'ansigter',
  motif: 'face',
  level: 3,
  style: 'naturtro',
  minutes: 25,
  intro: {
    da: 'Tegn et stort øje, som det ser ud i virkeligheden: mandelform, iris, pupil, glans, øjenvipper og øjenbryn.',
    en: 'Draw a big eye the way it really looks: almond shape, iris, pupil, shine, eyelashes and eyebrow.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Tegn øjets mandelform: en høj bue foroven og en fladere bue forneden. Indre hjørne til venstre, ydre til højre.',
        en: 'Draw the almond shape of the eye: a high curve on top and a flatter curve below. Inner corner on the left, outer on the right.',
      },
      tip: {
        da: 'Øjet er ikke symmetrisk: Den øverste bue er højest tæt på næsen.',
        en: 'The eye is not symmetrical: the top curve is highest close to the nose.',
      },
      strokes: [{ d: upper }, { d: lower }],
    },
    {
      text: {
        da: 'Tegn tårekanalen i det indre hjørne, en tynd kant langs det nederste øjenlåg og folden over øjet.',
        en: 'Draw the tear duct in the inner corner, a thin rim along the lower lid and the fold above the eye.',
      },
      strokes: [
        { d: 'M70 214 Q82 204 94 210 Q86 222 70 214' },
        { d: 'M96 224 Q190 274 326 210', weight: 0.6 },
        { d: 'M76 196 Q160 82 344 192' },
      ],
    },
    {
      text: {
        da: 'Tegn iris som en cirkel og pupillen i midten. Toppen af iris gemmer sig under det øverste øjenlåg.',
        en: 'Draw the iris as a circle and the pupil in the middle. The top of the iris hides under the upper eyelid.',
      },
      strokes: [
        { d: visibleCircle(IRIS.cx, IRIS.cy, IRIS.r) },
        { d: circle(IRIS.cx, IRIS.cy, 22), kind: 'shade', tone: 0.95 },
      ],
    },
    {
      text: {
        da: 'Bestem, hvor glansen sidder, og lad den være helt hvid. Tegn fine streger i iris ud fra pupillen – som eger i et hjul.',
        en: 'Decide where the shine is, and keep it completely white. Draw fine lines in the iris out from the pupil – like spokes in a wheel.',
      },
      tip: { da: 'Glansen er det, der får øjet til at se levende ud.', en: 'The shine is what makes the eye look alive.' },
      strokes: [
        { d: irisLines, weight: 0.45, opacity: 0.8 },
        { d: circle(180, 186, 10), kind: 'shade', fill: 'paper' },
        { d: circle(224, 222, 3.5), kind: 'shade', fill: 'paper' },
      ],
    },
    {
      text: {
        da: 'Skyg iris: mørk ring yderst, og en skygge foroven, hvor øjenlåget kaster skygge. Skyg også det hvide i øjet let ude i hjørnerne.',
        en: 'Shade the iris: a dark ring around the edge, and a shadow at the top where the eyelid casts a shadow. Also shade the white of the eye lightly in the corners.',
      },
      tip: { da: 'Det hvide i øjet er aldrig helt hvidt – øjet er en kugle.', en: 'The white of the eye is never completely white – the eye is a ball.' },
      strokes: [
        { d: clampedCircle(IRIS.cx, IRIS.cy, IRIS.r - 2), kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: `${clampedCircle(IRIS.cx, IRIS.cy, IRIS.r - 1)} ${clampedCircle(IRIS.cx, IRIS.cy, IRIS.r - 9, true)}`, kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: 'M110 190 Q200 130 300 188 Q200 160 110 190 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M84 214 Q110 196 132 206 Q120 232 84 214 Z M322 206 Q296 190 270 200 Q284 228 322 206 Z', kind: 'shade', fill: 'soft', tone: 0.15 },
      ],
    },
    {
      text: {
        da: 'Tegn øjenvipper: buede streger, der vokser ud fra øjenlåget og bliver længere ude mod det ydre hjørne. Nederst er de korte.',
        en: 'Draw eyelashes: curved strokes that grow out of the eyelid and get longer towards the outer corner. At the bottom they are short.',
      },
      tip: { da: 'Tegn hver vippe med et hurtigt strøg, og løft blyanten til sidst.', en: 'Draw each lash with one quick stroke, lifting the pencil at the end.' },
      strokes: [{ d: upperLashes, weight: 0.7 }, { d: lowerLashes, weight: 0.5 }, { d: upper, weight: 1.6 }],
    },
    {
      text: {
        da: 'Tegn øjenbrynet med mange små streger, der følger hårenes retning. Skyg let i øjenhulen under brynet.',
        en: 'Draw the eyebrow with many small strokes following the direction of the hairs. Shade lightly in the eye socket under the brow.',
      },
      strokes: [
        { d: 'M66 100 Q190 28 344 90 Q340 78 330 74 Q190 14 70 88 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: brow, weight: 0.6 },
        { d: 'M80 150 Q180 70 330 140 Q200 110 80 150 Z', kind: 'shade', fill: 'soft', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Det øje ser lige på mig – det er utroligt levende!', en: 'That eye is looking right at me – it is incredibly alive!' }],
  nextTip: { da: 'Tegn dit eget øje ved at kigge i et spejl. Hvilken farve har din iris?', en: 'Draw your own eye by looking in a mirror. What colour is your iris?' },
}
