import { arc, circle } from '../shapes'
import type { Lesson } from '../types'

const coverts = [
  [234, 192],
  [218, 190],
  [202, 192],
  [186, 196],
  [226, 204],
  [210, 204],
  [194, 206],
]
  .map(([x, y]) => arc(x, y, 7, 20, 160))
  .join(' ')
const berries = `M120 312 Q118 328 112 336 M120 312 Q124 330 126 340 ${circle(110, 341, 5)} ${circle(124, 346, 5)} ${circle(102, 350, 4.5)}`

export const birdDetail: Lesson = {
  id: 'bird-detail',
  title: { da: 'Fugl med fjer og bær', en: 'Bird with feathers and berries' },
  category: 'dyr',
  sub: 'fugle',
  level: 3,
  style: 'detaljer',
  base: 'bird',
  minutes: 15,
  intro: {
    da: 'Byg videre på din fugl: lag af fjer på vingen, streger i halen, glans i øjet, bark på grenen og røde bær.',
    en: 'Build on your bird: layers of feathers on the wing, lines in the tail, a shiny eye, bark on the branch and red berries.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Lad en lille prik være hvid i øjet, og tegn små fjer på hovedet.', en: 'Leave a little white dot in the eye, and draw small feathers on the head.' },
      strokes: [
        { d: circle(273, 119, 2.5), kind: 'shade', fill: 'paper' },
        { d: 'M240 102 l6 4 M250 94 l6 5 M262 90 l5 6 M232 116 l6 3', weight: 0.6 },
      ],
    },
    {
      text: {
        da: 'Tegn små buede fjer øverst på vingen og lange svingfjer forneden.',
        en: 'Draw small curved feathers at the top of the wing and long flight feathers at the bottom.',
      },
      tip: { da: 'Fjerene bliver længere, jo længere ude på vingen de sidder.', en: 'The feathers get longer the further out on the wing they sit.' },
      strokes: [{ d: coverts, weight: 0.6 }, { d: 'M240 214 Q204 216 172 214 M234 224 Q198 228 158 229', weight: 0.6 }],
    },
    {
      text: { da: 'Tegn en midterstreg i hver halefjer og prikker på brystet.', en: 'Draw a centre line in each tail feather and speckles on the breast.' },
      strokes: [
        { d: 'M104 210 L52 194 M104 216 L46 226 M106 220 L56 246', weight: 0.6 },
        { d: `${circle(242, 214, 2)} ${circle(230, 230, 2)} ${circle(254, 240, 2)} ${circle(216, 244, 2)}`, kind: 'shade', tone: 0.6 },
      ],
    },
    {
      text: { da: 'Tegn bark på grenen og en klase røde bær, der hænger ned.', en: 'Draw bark on the branch and a bunch of red berries hanging down.' },
      strokes: [{ d: 'M60 305 q10 -3 20 0 M150 299 q10 -3 20 0 M250 302 q10 -3 20 0 M330 308 q8 -3 16 0', weight: 0.7 }, { d: berries }],
    },
    {
      text: { da: 'Skyg let under maven, under vingen og under grenen. Farvelæg!', en: 'Shade lightly under the tummy, under the wing and under the branch. Colour it in!' },
      strokes: [
        { d: 'M110 222 C150 262 226 266 266 232 C230 254 150 254 110 222 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M156 228 C196 236 236 226 252 198 C238 236 196 242 156 232 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M30 312 Q200 300 372 316 L372 320 Q200 308 30 318 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: `${circle(110, 341, 5)} ${circle(124, 346, 5)} ${circle(102, 350, 4.5)}`, kind: 'shade', tone: 0.5 },
      ],
    },
  ],
  praise: [{ da: 'Den fugl ser ud, som om den kan synge en sang!', en: 'That bird looks like it could sing a song!' }],
  nextTip: { da: 'Tegn en rede med æg ved siden af fuglen.', en: 'Draw a nest with eggs next to the bird.' },
}
