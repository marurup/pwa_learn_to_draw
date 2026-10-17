import { mirrorX, rect } from '../shapes'
import type { Lesson } from '../types'

/** Battlements: n merlons of width w along y, evenly spread from x0 to x1. */
function crenels(x0: number, x1: number, y: number, h: number, n: number, w: number): string {
  const gap = (x1 - x0 - n * w) / (n - 1)
  return Array.from({ length: n }, (_, i) => {
    const x = x0 + i * (w + gap)
    return `M${x.toFixed(1)} ${y} V${y - h} H${(x + w).toFixed(1)} V${y}`
  }).join(' ')
}
const stones = (x: number, y: number) => `${rect(x, y, 16, 8)} ${rect(x + 18, y, 16, 8)} ${rect(x + 9, y + 10, 16, 8)}`

const towerWindowsL = 'M76 214 V196 Q82 186 88 196 V214 Z M76 284 V266 Q82 256 88 266 V284 Z'
const gate = 'M172 360 V296 Q172 264 200 264 Q228 264 228 296 V360'

export const castle: Lesson = {
  id: 'castle',
  title: { da: 'Slot', en: 'Castle' },
  category: 'ting',
  sub: 'bygninger',
  level: 3,
  style: 'detaljer',
  minutes: 25,
  intro: {
    da: 'Et eventyrslot med tårne, murtinder, faldgitter og flag. Det er bygget af firkanter og trekanter – og mange små detaljer.',
    en: 'A fairy-tale castle with towers, battlements, a portcullis and flags. It is built from rectangles and triangles – and lots of little details.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en bred mur i midten og et højt tårn i hver side.', en: 'Draw a wide wall in the middle and a tall tower on each side.' },
      tip: { da: 'Brug en lineal – så står slottet lige.', en: 'Use a ruler – then the castle stands up straight.' },
      strokes: [{ d: rect(114, 210, 172, 150) }, { d: `${rect(50, 150, 64, 210)} ${rect(286, 150, 64, 210)}` }],
    },
    {
      text: { da: 'Tegn spidse tage på tårnene og et flag på toppen af hvert tag.', en: 'Draw pointed roofs on the towers and a flag on top of each roof.' },
      strokes: [
        { d: 'M42 150 L82 70 L122 150 Z M278 150 L318 70 L358 150 Z' },
        { d: 'M82 70 V42 L106 50 L82 58 M318 70 V42 L342 50 L318 58' },
      ],
    },
    {
      text: { da: 'Tegn et firkantet tårn i midten, der stikker op bag muren.', en: 'Draw a square tower in the middle, sticking up behind the wall.' },
      strokes: [{ d: 'M160 194 V120 H240 V194' }, { d: 'M200 106 V64 L226 72 L200 80' }],
    },
    {
      text: {
        da: 'Tegn murtinder – små firkanter med lige store mellemrum – på muren og det midterste tårn.',
        en: 'Draw battlements – small squares with equal gaps – on the wall and the middle tower.',
      },
      tip: { da: 'Tegn først den yderste tinde i hver side, og fordel så resten imellem.', en: 'Draw the outermost merlon on each side first, then spread the rest out between them.' },
      strokes: [{ d: crenels(114, 286, 210, 16, 7, 16) }, { d: crenels(160, 240, 120, 14, 5, 10) }],
    },
    {
      text: { da: 'Tegn porten med en rund top, og faldgitteret som et net af streger inden i.', en: 'Draw the gate with a round top, and the portcullis as a grid of lines inside it.' },
      strokes: [
        { d: gate },
        { d: 'M182 269 V360 M191 265 V360 M200 264 V360 M209 265 V360 M218 269 V360 M172 284 H228 M172 306 H228 M172 328 H228 M172 350 H228', weight: 0.7 },
      ],
    },
    {
      text: { da: 'Tegn smalle vinduer med runde toppe på tårnene.', en: 'Draw narrow windows with round tops on the towers.' },
      strokes: [{ d: towerWindowsL }, { d: mirrorX(towerWindowsL, 200) }, { d: 'M194 164 V148 Q200 140 206 148 V164 Z' }],
    },
    {
      text: {
        da: 'Tegn små grupper af sten på murene, en vej op til porten og striber på flagene.',
        en: 'Draw small groups of stones on the walls, a path up to the gate and stripes on the flags.',
      },
      strokes: [
        { d: `${stones(124, 228)} ${stones(246, 236)} ${stones(128, 316)} ${stones(244, 330)} ${stones(62, 318)} ${stones(300, 226)} ${stones(296, 304)} ${stones(204, 172)}`, weight: 0.6 },
        { d: 'M20 360 H380 M172 360 L152 398 M228 360 L248 398' },
        { d: 'M90 46 V54 M98 48 V52 M326 46 V54 M334 48 V52', weight: 0.7 },
      ],
    },
    {
      text: {
        da: 'Skyg: porten og vinduerne helt mørke, højre side af tårnene og tagene, og under tagkanten.',
        en: 'Shade: the gate and windows really dark, the right side of the towers and roofs, and under the edge of the roofs.',
      },
      strokes: [
        { d: `${gate} Z ${towerWindowsL} ${mirrorX(towerWindowsL, 200)} M194 164 V148 Q200 140 206 148 V164 Z`, kind: 'shade', tone: 0.75 },
        { d: 'M96 150 H114 V360 H96 Z M332 150 H350 V360 H332 Z M226 120 H240 V194 H226 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M82 70 L122 150 H96 Z M318 70 L358 150 H332 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M50 152 H114 V164 H50 Z M286 152 H350 V164 H286 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Et helt slot! Det ser ud, som om der bor en konge og en dronning derinde.', en: 'A whole castle! It looks like a king and queen live in there.' }],
  nextTip: { da: 'Tegn en voldgrav med en vindebro, eller en drage, der flyver over slottet.', en: 'Draw a moat with a drawbridge, or a dragon flying over the castle.' },
}
