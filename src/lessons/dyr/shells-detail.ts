import { circle, ellipse, poly, starPoints } from '../shapes'
import type { Lesson } from '../types'
import { SCALLOP_TOP, spiral } from './shells'

// Curved bands across the scallop's ridges, getting wider towards the edge.
const bands = [22, 34, 46]
  .map((r) => {
    const pts = SCALLOP_TOP.slice(1, -1).map(([x, y]) => [120 + ((x - 120) * r) / 56, 286 + ((y - 286) * r) / 56])
    return 'M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L')
  })
  .join(' ')
const starDots = starPoints(214, 250, 30, 12)
  .filter((_, i) => i % 2 === 0)
  .map(([x, y]) => circle(x, y, 2.5))
  .join(' ')
const sandDots = Array.from({ length: 26 }, (_, i) => circle(16 + ((i * 53) % 370), 316 + ((i * 29) % 70), 1.2)).join(' ')

export const shellsDetail: Lesson = {
  id: 'shells-detail',
  title: { da: 'Strandskatte med krabbe', en: 'Beach treasures with a crab' },
  category: 'dyr',
  sub: 'fisk',
  level: 2,
  style: 'detaljer',
  base: 'shells',
  minutes: 15,
  intro: {
    da: 'Byg videre på dine strandskatte: mønstre på muslingen og søstjernen, sand, skygger – og en lille krabbe, der kigger frem.',
    en: 'Build on your beach treasures: patterns on the shell and the starfish, sand, shadows – and a little crab peeking out.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn buede bånd hen over muslingens riller.', en: 'Draw curved bands across the ridges of the shell.' },
      strokes: [{ d: bands, weight: 0.6 }],
    },
    {
      text: { da: 'Tegn prikker på søstjernens arme og en lille ring i midten.', en: 'Draw dots on the starfish’s arms and a little ring in the middle.' },
      strokes: [{ d: starDots, kind: 'shade', tone: 0.6 }, { d: circle(214, 250, 6) }],
    },
    {
      text: { da: 'Tegn en spiral mere inden i den første, så sneglehuset får et bånd.', en: 'Draw another spiral inside the first one, so the snail shell gets a band.' },
      strokes: [{ d: spiral(316, 258, 28, 2.5), weight: 0.6 }],
    },
    {
      text: {
        da: 'Tegn en lille krabbe, der kigger frem: en flad krop, øjne på stilke, to klosøkser og små ben.',
        en: 'Draw a little crab peeking out: a flat body, eyes on stalks, two pincers and little legs.',
      },
      strokes: [
        { d: ellipse(116, 362, 30, 16) },
        { d: `M106 348 V332 ${circle(106, 328, 4)} M126 348 V332 ${circle(126, 328, 4)}` },
        { d: 'M88 354 Q72 342 76 326 Q84 320 88 330 Q84 338 92 342 M144 354 Q160 342 156 326 Q148 320 144 330 Q148 338 140 342' },
        { d: 'M90 370 L76 382 M94 374 L84 390 M142 370 L156 382 M138 374 L148 390' },
        { d: 'M106 366 Q116 372 126 366' },
      ],
    },
    {
      text: {
        da: 'Prik sandet, og skyg under muslingen, søstjernen og sneglehuset, hvor de rører sandet. Farvelæg!',
        en: 'Dot the sand, and shade under the shell, the starfish and the snail shell where they touch the sand. Colour it in!',
      },
      strokes: [
        { d: sandDots, kind: 'shade', tone: 0.5 },
        { d: `${ellipse(124, 302, 40, 6)} ${ellipse(222, 300, 40, 6)} ${ellipse(322, 300, 34, 6)} ${ellipse(120, 380, 30, 5)}`, kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: poly(starPoints(214, 250, 44, 20), true), kind: 'shade', fill: 'soft', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Krabben har fundet de flotteste skatte på stranden!', en: 'The crab has found the finest treasures on the beach!' }],
  nextTip: { da: 'Tegn et sandslot med muslinger som pynt.', en: 'Draw a sandcastle decorated with shells.' },
}
