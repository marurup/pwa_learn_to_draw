import { ellipse, line, poly, type Pt } from '../shapes'
import type { Lesson } from '../types'

/** One side of a leaf from base to tip: x offset from the middle line for t in 0..1. */
type Width = (t: number) => number

function leafSide(cx: number, base: number, tip: number, width: Width, side: 1 | -1, steps = 40): Pt[] {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps
    return [cx + side * width(t), base + (tip - base) * t]
  })
}

function leafOutline(cx: number, base: number, tip: number, width: Width): string {
  const right = leafSide(cx, base, tip, width, 1)
  const left = leafSide(cx, base, tip, width, -1).reverse()
  return poly([...right, ...left.slice(1)], true)
}

/** Half a leaf (middle line + one edge), for shading. */
function leafHalf(cx: number, base: number, tip: number, width: Width): string {
  return poly([...leafSide(cx, base, tip, width, 1), [cx, base]], true)
}

function veins(cx: number, base: number, tip: number, width: Width, count: number): string {
  return Array.from({ length: count }, (_, k) => {
    const t = 0.12 + (k * 0.75) / count
    const y = base + (tip - base) * t
    const t2 = Math.min(1, t + 0.12)
    const y2 = base + (tip - base) * t2
    const w = width(t2) * 0.85
    return `${line(cx, y, cx + w, y2)} ${line(cx, y, cx - w, y2)}`
  }).join(' ')
}

// 1. Oval leaf with a toothed edge (like a birch leaf).
const ovalW: Width = (t) => 44 * Math.pow(Math.sin(Math.PI * Math.pow(t, 0.8)), 0.9) + (Math.round(t * 40) % 2 ? 3 : 0) * Math.sin(Math.PI * t)
// 2. Oak leaf: rounded lobes.
const oakW: Width = (t) => 46 * Math.pow(Math.sin(Math.PI * t), 0.9) * (0.62 + 0.38 * Math.abs(Math.sin(t * Math.PI * 4.5)))
// 4. Fern leaflets get smaller towards the tip.
const fern = Array.from({ length: 9 }, (_, i) => {
  const y = 372 - i * 18
  const rx = 26 * (1 - i / 10)
  return `${ellipse(300 - rx * 0.95, y - rx * 0.35, rx, 3.5, -22)} ${ellipse(300 + rx * 0.95, y - 9 - rx * 0.35, rx, 3.5, 22)}`
}).join(' ')

// 3. Maple leaf as a polar curve: five pointed lobes, small teeth, a notch for the stem.
const lobes = [
  { deg: -90, len: 64 },
  { deg: -32, len: 54 },
  { deg: -148, len: 54 },
  { deg: 28, len: 38 },
  { deg: 152, len: 38 },
]
const maplePts: Pt[] = Array.from({ length: 120 }, (_, i) => {
  const deg = -90 + i * 3
  const rad = (deg * Math.PI) / 180
  const lobe = Math.max(...lobes.map((l) => l.len * Math.pow(Math.max(0, Math.cos(rad - (l.deg * Math.PI) / 180)), 10)))
  const r = 24 + lobe + (i % 2 ? 3 : 0)
  return [100 + r * Math.cos(rad), 304 + r * Math.sin(rad)]
})
const mapleVeins = lobes
  .map((l) => {
    const rad = (l.deg * Math.PI) / 180
    return line(100, 312, 100 + (l.len + 6) * Math.cos(rad), 304 + (l.len + 6) * Math.sin(rad))
  })
  .join(' ')

export const leaves: Lesson = {
  id: 'leaves',
  title: { da: 'Fire slags blade', en: 'Four kinds of leaves' },
  category: 'natur',
  sub: 'blomster',
  level: 3,
  style: 'detaljer',
  minutes: 20,
  intro: {
    da: 'Et blad er ikke bare et blad! Tegn fire forskellige: et takket, et egeblad, et ahornblad og en bregne – med årer.',
    en: 'A leaf is not just a leaf! Draw four different ones: a toothed leaf, an oak leaf, a maple leaf and a fern – with veins.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Tegn et ovalt blad med små takker langs kanten og en kort stilk.', en: 'Draw an oval leaf with small teeth along the edge and a short stalk.' },
      tip: { da: 'Tegn først bladets form let – og tilføj så takkerne.', en: 'First draw the shape of the leaf lightly – then add the teeth.' },
      strokes: [{ d: leafOutline(100, 170, 22, ovalW) }, { d: line(100, 170, 98, 192) }],
    },
    {
      text: { da: 'Tegn midterlinjen og årerne. De går skråt opad mod kanten – som et fiskeben.', en: 'Draw the middle line and the veins. They go up at a slant towards the edge – like a fishbone.' },
      strokes: [{ d: line(100, 170, 100, 30) }, { d: veins(100, 170, 22, ovalW, 6), weight: 0.6 }],
    },
    {
      text: { da: 'Tegn et egeblad: en bølget kant med runde flige – og årer ud i hver flig.', en: 'Draw an oak leaf: a wavy edge with round lobes – and veins out into each lobe.' },
      strokes: [
        { d: leafOutline(300, 172, 20, oakW) },
        { d: line(300, 172, 302, 192) },
        { d: line(300, 172, 300, 26) },
        { d: veins(300, 172, 20, oakW, 4), weight: 0.6 },
      ],
    },
    {
      text: { da: 'Tegn et ahornblad: fem spidse flige med små takker, og årer fra midten ud i hver spids.', en: 'Draw a maple leaf: five pointed lobes with little teeth, and veins from the middle out to each point.' },
      tip: { da: 'Tegn først de fem årer som en stjerne – så er det nemmere at tegne kanten rundt om.', en: 'Draw the five veins first like a star – then it is easier to draw the edge around them.' },
      strokes: [{ d: mapleVeins, weight: 0.7 }, { d: poly(maplePts, true) }, { d: line(100, 312, 102, 360) }],
    },
    {
      text: { da: 'Tegn en bregne: en buet stilk med små blade på begge sider, der bliver mindre mod toppen.', en: 'Draw a fern: a curved stalk with small leaflets on both sides, getting smaller towards the top.' },
      strokes: [{ d: 'M300 392 Q298 300 304 212' }, { d: fern }],
    },
    {
      text: {
        da: 'Skyg den ene halvdel af de to øverste blade, som om de er foldet lidt langs midterlinjen.',
        en: 'Shade one half of the two top leaves, as if they are folded a little along the middle line.',
      },
      tip: { da: 'Så ser bladene ikke flade ud længere.', en: 'Then the leaves no longer look flat.' },
      strokes: [
        { d: leafHalf(100, 170, 22, ovalW), kind: 'shade', fill: 'soft', tone: 0.28 },
        { d: leafHalf(300, 172, 20, oakW), kind: 'shade', fill: 'soft', tone: 0.28 },
      ],
    },
  ],
  praise: [{ da: 'Fire helt forskellige blade – du har øje for detaljer!', en: 'Four completely different leaves – you have an eye for detail!' }],
  nextTip: {
    da: 'Saml blade på en gåtur, og tegn dem. Læg mærke til, hvordan årerne løber.',
    en: 'Collect leaves on a walk and draw them. Notice how the veins run.',
  },
}
