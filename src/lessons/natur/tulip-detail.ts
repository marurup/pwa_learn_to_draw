import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const ladybug = `${circle(250, 300, 9)} M250 291 V309 ${circle(250, 289, 4)} ${circle(246, 298, 1.6)} ${circle(254, 304, 1.6)} ${circle(245, 306, 1.4)}`

export const tulipDetail: Lesson = {
  id: 'tulip-detail',
  title: { da: 'Tulipaner med mariehøne', en: 'Tulips with a ladybird' },
  category: 'natur',
  sub: 'blomster',
  level: 3,
  style: 'detaljer',
  base: 'tulip',
  minutes: 15,
  intro: {
    da: 'Byg videre på din tulipan: årer i kronbladene, en knop ved siden af, vanddråber, en mariehøne og bløde skygger.',
    en: 'Build on your tulip: veins in the petals, a bud next to it, water drops, a ladybird and soft shading.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn tynde årer i kronbladene, der går op fra bunden.', en: 'Draw thin veins in the petals going up from the bottom.' },
      strokes: [{ d: 'M184 200 Q170 170 166 136 M216 200 Q230 170 234 136 M200 208 Q196 170 200 130', weight: 0.5 }],
    },
    {
      text: { da: 'Tegn en tulipanknop på en tynd stilk ved siden af.', en: 'Draw a tulip bud on a thin stem next to it.' },
      strokes: [{ d: 'M110 372 Q104 300 92 248' }, { d: 'M92 248 Q72 228 82 198 L92 210 L102 196 Q112 228 92 248 Z' }],
    },
    {
      text: { da: 'Tegn en mariehøne på bladet og et par vanddråber på blomsten.', en: 'Draw a ladybird on the leaf and a couple of water drops on the flower.' },
      strokes: [{ d: ladybug }, { d: 'M170 170 q-4 8 0 10 q4 -2 0 -10 Z M232 182 q-3 6 0 8 q3 -2 0 -8 Z' }],
    },
    {
      text: {
        da: 'Skyg tulipanens højre side og midterribben på bladene. Lad et lyst skær stå på venstre kronblad. Farvelæg!',
        en: 'Shade the right side of the tulip and the middle of the leaves. Keep a light gleam on the left petal. Colour it in!',
      },
      strokes: [
        { d: 'M222 150 L244 118 Q254 182 226 208 Q214 216 204 214 Q226 190 222 150 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M164 130 Q160 170 176 196 Q166 170 170 140 Z', kind: 'shade', fill: 'paper' },
        { d: 'M194 322 Q172 286 128 236 Q150 300 190 344 Z M204 334 Q236 306 278 262 Q262 320 210 350 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: circle(250, 300, 9), kind: 'shade', tone: 0.35 },
        { d: ellipse(200, 376, 90, 5), kind: 'shade', fill: 'soft', tone: 0.25 },
      ],
    },
  ],
  praise: [{ da: 'Hvor er de fine – og mariehønen har fundet et godt sted at sidde!', en: 'How lovely – and the ladybird has found a nice place to sit!' }],
  nextTip: { da: 'Tegn en hel buket tulipaner i en vase.', en: 'Draw a whole bunch of tulips in a vase.' },
}
