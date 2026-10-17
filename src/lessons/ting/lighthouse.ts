import { circle, rect } from '../shapes'
import type { Lesson } from '../types'

// The tower narrows from 80 wide at the bottom (y 340) to 44 wide at the top (y 132).
const left = (y: number) => 160 + ((340 - y) * 18) / 208
const right = (y: number) => 240 - ((340 - y) * 18) / 208
const band = (y1: number, y2: number) =>
  `M${left(y1).toFixed(1)} ${y1} L${right(y1).toFixed(1)} ${y1} L${right(y2).toFixed(1)} ${y2} L${left(y2).toFixed(1)} ${y2} Z`
const bands = [band(160, 190), band(230, 260), band(300, 330)].join(' ')
const waves = [356, 374, 392]
  .map((y, i) => `M${8 + (i % 2) * 16} ${y}` + ' q11 -7 22 0 q11 7 22 0'.repeat(8))
  .join(' ')

export const lighthouse: Lesson = {
  id: 'lighthouse',
  title: { da: 'Fyrtårn', en: 'Lighthouse' },
  category: 'ting',
  sub: 'bygninger',
  level: 2,
  minutes: 12,
  intro: {
    da: 'Et stribet fyrtårn på en klippe ved havet, der lyser for skibene om natten.',
    en: 'A striped lighthouse on a rock by the sea, shining for the ships at night.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler', 'colors'],
  steps: [
    {
      text: { da: 'Tegn tårnet: bredt forneden og smallere foroven.', en: 'Draw the tower: wide at the bottom and narrower at the top.' },
      tip: { da: 'Brug en lineal til de lange, skrå sider.', en: 'Use a ruler for the long, slanted sides.' },
      strokes: [{ d: 'M160 340 L178 132 H222 L240 340 Z' }],
    },
    {
      text: { da: 'Tegn en altan ovenpå, lygtehuset med vinduer og et spidst tag med en kugle.', en: 'Draw a balcony on top, the lamp room with windows and a pointed roof with a ball.' },
      strokes: [
        { d: rect(166, 120, 68, 12) },
        { d: 'M168 120 V104 H184 M232 120 V104 H216' },
        { d: `${rect(184, 76, 32, 44)} M200 76 V120` },
        { d: `M178 76 L200 50 L222 76 Z ${circle(200, 46, 4)}` },
      ],
    },
    {
      text: { da: 'Tegn tre brede striber hen over tårnet.', en: 'Draw three wide stripes across the tower.' },
      strokes: [{ d: bands }],
    },
    {
      text: { da: 'Tegn en dør med rund top forneden og et lille vindue højere oppe.', en: 'Draw a door with a round top at the bottom and a small window higher up.' },
      strokes: [{ d: 'M188 340 V314 Q200 302 212 314 V340' }, { d: rect(194, 202, 12, 18) }],
    },
    {
      text: { da: 'Tegn klipperne, som tårnet står på, og bølger i havet.', en: 'Draw the rocks the tower stands on, and waves in the sea.' },
      strokes: [
        { d: 'M60 342 Q80 314 112 322 Q136 306 160 330 M240 330 Q262 310 290 320 Q318 312 340 342 M50 342 H350' },
        { d: waves, weight: 0.8 },
      ],
    },
    {
      text: { da: 'Tegn lysstråler ud fra lygten og et par måger. Farvelæg striberne røde!', en: 'Draw beams of light from the lamp and a couple of seagulls. Colour the stripes red!' },
      strokes: [
        { d: 'M216 86 L370 52 M216 110 L370 144 M184 86 L30 52 M184 110 L30 144', opacity: 0.5 },
        { d: 'M290 200 q8 -8 16 0 q8 -8 16 0 M80 220 q6 -6 12 0 q6 -6 12 0', weight: 0.8 },
        { d: bands, kind: 'shade', tone: 0.45 },
        { d: rect(184, 76, 32, 44), kind: 'shade', tone: 0.12 },
      ],
    },
  ],
  praise: [{ da: 'Dit fyrtårn lyser flot – skibene finder helt sikkert vej!', en: 'Your lighthouse shines beautifully – the ships will surely find their way!' }],
  nextTip: { da: 'Tegn fyrtårnet om natten med en mørk himmel og stjerner.', en: 'Draw the lighthouse at night with a dark sky and stars.' },
}
