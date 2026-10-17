import { ellipse, roundRect } from '../shapes'
import type { Lesson } from '../types'

/** Ring i of the cake, counted from the bottom: each ring is a little narrower. */
export const ring = (i: number) => {
  const w = 220 - i * 18
  return { x: 200 - w / 2, y: 330 - i * 22, w }
}
const rings = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, k) => {
    const { x, y, w } = ring(from + k)
    return roundRect(x, y, w, 22, 11)
  }).join(' ')

/** A zigzag of icing across ring i. */
const icing = (i: number) => {
  const { x, y, w } = ring(i)
  const n = Math.max(2, Math.round((w - 16) / 10))
  const step = (w - 16) / n
  return `M${x + 8} ${y + 9} ` + Array.from({ length: n }, (_, k) => `l${step / 2} ${k % 2 ? -5 : 5} l${step / 2} ${k % 2 ? 5 : -5}`).join(' ')
}

export const KRANSEKAGE = {
  bottom: rings(0, 3),
  middle: rings(4, 7),
  top: rings(8, 10),
  icing: Array.from({ length: 11 }, (_, i) => icing(i)).join(' '),
  flag: 'M200 110 V66 M200 66 H232 V86 H200 M210 66 V86 M200 76 H232',
  plate: ellipse(200, 358, 140, 12),
}

export const kransekage: Lesson = {
  id: 'kransekage',
  title: { da: 'Kransekage', en: 'Ring cake tower' },
  category: 'hoejtider',
  sub: 'nytaar',
  level: 2,
  minutes: 12,
  intro: {
    da: 'Et højt tårn af kransekageringe med glasur og et lille flag på toppen – til nytår og store fester.',
    en: 'A tall tower of Danish ring-cake rings with icing and a little flag on top – for New Year and big parties.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et fad og fire brede ringe oven på hinanden – hver lidt smallere end den under.', en: 'Draw a plate and four wide rings on top of each other – each a little narrower than the one below.' },
      strokes: [{ d: KRANSEKAGE.plate }, { d: KRANSEKAGE.bottom }],
    },
    {
      text: { da: 'Tegn fire ringe mere – de bliver ved med at blive smallere.', en: 'Draw four more rings – they keep getting narrower.' },
      strokes: [{ d: KRANSEKAGE.middle }],
    },
    {
      text: { da: 'Tegn de tre mindste ringe øverst, så kagen bliver et spidst tårn.', en: 'Draw the three smallest rings at the top, so the cake becomes a pointed tower.' },
      strokes: [{ d: KRANSEKAGE.top }],
    },
    {
      text: { da: 'Tegn glasur som en zigzag på hver ring.', en: 'Draw icing as a zigzag on every ring.' },
      strokes: [{ d: KRANSEKAGE.icing, weight: 0.7 }],
    },
    {
      text: { da: 'Sæt et lille flag på toppen, og farvelæg kagen gyldenbrun.', en: 'Put a little flag on top, and colour the cake golden brown.' },
      strokes: [
        { d: KRANSEKAGE.flag },
        { d: `${KRANSEKAGE.bottom} ${KRANSEKAGE.middle} ${KRANSEKAGE.top}`, kind: 'shade', tone: 0.25 },
        { d: 'M200 66 H210 V76 H200 Z M216 66 H232 V76 H216 Z M200 82 H210 V86 H200 Z M216 82 H232 V86 H216 Z', kind: 'shade', tone: 0.5 },
      ],
    },
  ],
  praise: [{ da: 'Mmm! Sikke et flot kransekagetårn – skål og godt nytår!', en: 'Yum! What a fine ring cake tower – cheers and happy New Year!' }],
  nextTip: { da: 'Tegn kransekagen med knallerter og flag hele vejen rundt.', en: 'Draw the cake with crackers and flags all the way round.' },
}
