import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const veinsL = 'M190 176 Q140 130 76 104 M190 184 Q130 160 62 150 M190 192 Q140 196 100 200 M190 212 Q150 236 112 270 M190 222 Q166 270 150 310'
const edgeL = 'M62 92 C34 110 44 188 100 204 C70 190 56 130 74 102 Z M102 270 C104 312 150 324 176 296 C150 314 116 300 112 270 Z'
// Fine hairs along the sides of the body.
const hairsL = Array.from({ length: 8 }, (_, i) => `M189 ${170 + i * 14} l-6 -3`).join(' ')

export const butterflyDetail: Lesson = {
  id: 'butterfly-detail',
  title: { da: 'Sommerfugl med mønstre', en: 'Butterfly with patterns' },
  category: 'dyr',
  sub: 'insekter',
  level: 2,
  style: 'detaljer',
  base: 'butterfly',
  minutes: 12,
  intro: {
    da: 'Byg videre på din sommerfugl: årer i vingerne, en mørk kant med prikker, glans og en lodden krop.',
    en: 'Build on your butterfly: veins in the wings, a dark edge with dots, shine and a fuzzy body.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn tynde årer i vingerne, der går ud fra kroppen.', en: 'Draw thin veins in the wings going out from the body.' },
      tip: { da: 'Tegn dem ens på begge sider.', en: 'Draw them the same on both sides.' },
      strokes: [{ d: `${veinsL} ${mirrorX(veinsL, 200)}`, weight: 0.5 }],
    },
    {
      text: { da: 'Skyg en mørk kant langs vingernes yderkant.', en: 'Shade a dark edge along the outside of the wings.' },
      strokes: [{ d: `${edgeL} ${mirrorX(edgeL, 200)}`, kind: 'shade', fill: 'soft', tone: 0.45 }],
    },
    {
      text: { da: 'Lad små hvide prikker stå i den mørke kant og en glans på hovedet.', en: 'Leave little white dots in the dark edge and a shine on the head.' },
      strokes: [
        { d: `${circle(52, 130, 3)} ${circle(58, 170, 3)} ${circle(348, 130, 3)} ${circle(342, 170, 3)} ${circle(128, 312, 2.5)} ${circle(272, 312, 2.5)}`, kind: 'shade', fill: 'paper' },
        { d: circle(196, 122, 3), kind: 'shade', fill: 'paper' },
      ],
    },
    {
      text: { da: 'Tegn små hår på kroppen – sommerfugle er lidt lodne. Farvelæg!', en: 'Draw little hairs on the body – butterflies are a bit fuzzy. Colour it in!' },
      strokes: [{ d: `${hairsL} ${mirrorX(hairsL, 200)}`, weight: 0.5 }],
    },
  ],
  praise: [{ da: 'Sikke nogle flotte vinger – den er klar til at flagre afsted!', en: 'What beautiful wings – it is ready to flutter away!' }],
  nextTip: { da: 'Tegn en sommerfugl set fra siden, mens den sidder på en blomst.', en: 'Draw a butterfly from the side, sitting on a flower.' },
}
