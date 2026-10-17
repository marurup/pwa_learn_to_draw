import { arc, circle, mirrorX, poly, starPoints, type Pt } from '../shapes'
import type { Lesson } from '../types'
import { TAIL_INNER, TAIL_OUTER, tailShape } from './mermaid'

const quadPt = ([s, c, e]: Pt[], t: number): Pt => [
  (1 - t) ** 2 * s[0] + 2 * t * (1 - t) * c[0] + t ** 2 * e[0],
  (1 - t) ** 2 * s[1] + 2 * t * (1 - t) * c[1] + t ** 2 * e[1],
]
const sample = (segs: Pt[][]) => segs.flatMap((seg) => Array.from({ length: 16 }, (_, i) => quadPt(seg, i / 16)))
const tailPolygon = [...sample(TAIL_OUTER), ...sample(TAIL_INNER).reverse()]
/** Point-in-polygon by ray casting. */
function inTail([x, y]: Pt): boolean {
  let inside = false
  for (let i = 0, j = tailPolygon.length - 1; i < tailPolygon.length; j = i++) {
    const [xi, yi] = tailPolygon[i]
    const [xj, yj] = tailPolygon[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}
// Scales in staggered rows, only where a whole scale fits inside the tail.
const scales = Array.from({ length: 12 }, (_, r) => 234 + r * 11)
  .flatMap((y, r) => Array.from({ length: 12 }, (_, c): Pt => [158 + c * 14 + (r % 2) * 7, y]))
  .filter(([x, y]) => [[0, 0], [-9, 0], [9, 0], [0, 9], [0, -5]].every(([dx, dy]) => inTail([x + dx, y + dy])))
  .map(([x, y]) => arc(x, y, 7, 20, 160))
  .join(' ')

const pearls = Array.from({ length: 7 }, (_, i) => quadPt([[176, 222], [200, 230], [224, 222]], i / 6))
  .map(([x, y]) => circle(x, y + 3, 3))
  .join(' ')
const necklace = Array.from({ length: 7 }, (_, i) => quadPt([[190, 153], [200, 164], [210, 153]], i / 6))
  .map(([x, y]) => circle(x, y, 2.2))
  .join(' ')
const hairStrandsL = 'M152 150 Q144 180 150 210 M160 140 Q154 170 158 196'
const shellRidgesL = 'M188 178 L184 170 M188 178 L189 168 M188 178 L194 171'

export const mermaidDetail: Lesson = {
  id: 'mermaid-detail',
  title: { da: 'Havfrue med skæl og perler', en: 'Mermaid with scales and pearls' },
  category: 'fantasi',
  sub: 'havfruer',
  level: 2,
  style: 'detaljer',
  base: 'mermaid',
  minutes: 15,
  intro: {
    da: 'Byg videre på din havfrue: skæl på halen, perler, en søstjerne i håret, bobler og glans.',
    en: 'Build on your mermaid: scales on the tail, pearls, a starfish in her hair, bubbles and shine.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn skæl på halen: små buer i rækker, der ligger forskudt – ligesom tagsten.', en: 'Draw scales on the tail: small curves in staggered rows – like roof tiles.' },
      tip: { da: 'Start øverst, og tegn én række ad gangen.', en: 'Start at the top and draw one row at a time.' },
      strokes: [{ d: scales, weight: 0.6 }],
    },
    {
      text: { da: 'Tegn streger i halefinnen og et bælte af perler, hvor halen begynder.', en: 'Draw lines in the tail fin and a belt of pearls where the tail begins.' },
      strokes: [{ d: 'M300 330 L346 300 M302 334 L330 330 M300 338 L346 364', weight: 0.6 }, { d: pearls }],
    },
    {
      text: { da: 'Tegn lokker i håret og en søstjerne som hårspænde.', en: 'Draw locks in the hair and a starfish hair clip.' },
      strokes: [{ d: `${hairStrandsL} ${mirrorX(hairStrandsL, 200)}`, weight: 0.6 }, { d: poly(starPoints(236, 84, 11, 5), true) }],
    },
    {
      text: { da: 'Tegn riller på muslingerne og en perlekæde om halsen.', en: 'Draw ridges on the shells and a pearl necklace around her neck.' },
      strokes: [{ d: `${shellRidgesL} ${mirrorX(shellRidgesL, 200)}`, weight: 0.6 }, { d: necklace }],
    },
    {
      text: { da: 'Tegn bobler, der stiger op, og tang, der vifter på havbunden.', en: 'Draw bubbles rising up, and seaweed waving on the seabed.' },
      strokes: [
        { d: `${circle(286, 120, 7)} ${circle(300, 92, 5)} ${circle(290, 66, 4)} ${circle(110, 120, 5)} ${circle(100, 96, 3.5)}` },
        { d: 'M60 390 Q46 350 64 318 Q78 292 66 262 Q86 290 76 320 Q60 352 72 390 M86 390 Q96 360 88 336 Q80 314 92 292 Q102 316 98 338 Q108 362 98 390' },
      ],
    },
    {
      text: {
        da: 'Skyg halen let langs den inderste kant, og lad en lys stribe stå – så skinner den. Farvelæg!',
        en: 'Shade the tail lightly along the inner edge, and leave a light stripe – then it shines. Colour it in!',
      },
      strokes: [
        { d: 'M222 226 Q226 286 256 312 Q276 326 296 322 Q268 316 250 300 Q230 278 222 226 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M186 236 Q182 290 220 322 Q190 290 192 236 Z', kind: 'shade', fill: 'paper' },
        { d: tailShape, kind: 'shade', fill: 'soft', tone: 0.12 },
      ],
    },
  ],
  praise: [{ da: 'Hun glimter som en rigtig havfrue!', en: 'She sparkles like a real mermaid!' }],
  nextTip: { da: 'Tegn et undervandsslot, som havfruen bor i.', en: 'Draw an underwater castle for the mermaid to live in.' },
}
