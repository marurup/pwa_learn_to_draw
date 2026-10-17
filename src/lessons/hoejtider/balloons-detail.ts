import { circle, ellipse, rect } from '../shapes'
import type { Lesson } from '../types'

/** The bunting rope sags in a curve; each flag hangs from it. */
const ropeY = (x: number) => 14 + 64 * (x / 400) * (1 - x / 400)
const bunting =
  'M0 14 Q200 46 400 14 ' +
  Array.from({ length: 9 }, (_, i) => {
    const x = 20 + i * 45
    return `M${x} ${ropeY(x)} L${x + 11} ${ropeY(x + 11) + 20} L${x + 22} ${ropeY(x + 22)}`
  }).join(' ')
const confetti = [
  rect(36, 270, 8, 5), rect(160, 250, 6, 8), rect(244, 262, 8, 5), rect(356, 280, 6, 8), rect(60, 340, 8, 5), rect(330, 340, 6, 8),
  circle(140, 300, 3), circle(262, 310, 3), circle(30, 230, 3), circle(370, 236, 3), circle(130, 380, 3), circle(280, 384, 3),
].join(' ')
/** A soft crescent of shadow at the bottom right of a balloon centred at (cx, cy). */
const balloonShadow = (cx: number, cy: number) => `M${cx + 48} ${cy} A48 60 0 0 1 ${cx - 20} ${cy + 54} Q${cx + 30} ${cy + 40} ${cx + 36} ${cy - 20} Z`

export const balloonsDetail: Lesson = {
  id: 'balloons-detail',
  title: { da: 'Fødselsdagsballoner med flag', en: 'Birthday balloons with bunting' },
  category: 'hoejtider',
  sub: 'foedselsdag',
  level: 2,
  style: 'detaljer',
  base: 'balloons',
  minutes: 12,
  intro: {
    da: 'Byg videre på dine balloner: en flagranke, konfetti, TILLYKKE på ballonen og skygger, så de bliver runde.',
    en: 'Build on your balloons: bunting, confetti, HAPPY BIRTHDAY on a balloon and shading that makes them round.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en flagranke øverst: en snor, der hænger i en bue, med trekantede flag.', en: 'Draw bunting at the top: a string hanging in a curve, with triangle flags.' },
      strokes: [{ d: bunting }],
    },
    {
      text: { da: 'Tegn konfetti – små firkanter og prikker – rundt om ballonerne.', en: 'Draw confetti – little squares and dots – around the balloons.' },
      strokes: [{ d: confetti }],
    },
    {
      text: { da: 'Skriv TILLYKKE på den midterste ballon.', en: 'Write HAPPY BIRTHDAY on the middle balloon.' },
      labels: [{ x: 200, y: 126, text: { da: 'TILLYKKE', en: 'HAPPY B-DAY' } }],
    },
    {
      text: {
        da: 'Skyg hver ballon nederst i højre side, og lad en hvid glans stå foroven. Farvelæg flag og konfetti.',
        en: 'Shade each balloon at the bottom right, and leave a white shine at the top. Colour the flags and confetti.',
      },
      tip: { da: 'Skygge og glans over for hinanden gør ballonerne runde og blanke.', en: 'Shadow and shine opposite each other make the balloons round and glossy.' },
      strokes: [
        { d: `${balloonShadow(100, 150)} ${balloonShadow(200, 120)} ${balloonShadow(300, 150)}`, kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: `${ellipse(82, 124, 6, 12, 30)} ${ellipse(182, 94, 6, 12, 30)} ${ellipse(282, 124, 6, 12, 30)}`, kind: 'shade', fill: 'paper' },
        { d: bunting.slice(bunting.indexOf(' M')), kind: 'shade', tone: 0.35 },
        { d: confetti, kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Nu er der rigtig fødselsdagsstemning!', en: 'Now it really feels like a birthday party!' }],
  nextTip: { da: 'Tegn dig selv, der holder ballonerne.', en: 'Draw yourself holding the balloons.' },
}
