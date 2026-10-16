import { circle, ellipse, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const upperWingL = 'M189 170 C160 116 96 70 62 92 C34 110 44 188 100 204 C136 214 170 208 189 198'
const lowerWingL = 'M189 206 C150 206 100 226 102 270 C104 312 150 324 176 296 C188 282 190 250 190 230'
const antennaL = 'M195 116 Q184 86 168 72'
const spotsL = `${circle(112, 140, 22)} ${circle(160, 186, 8)} ${circle(70, 112, 5)} ${circle(60, 150, 5)} ${circle(140, 270, 16)} ${circle(116, 296, 5)}`

export const butterfly: Lesson = {
  id: 'butterfly',
  title: { da: 'Sommerfugl', en: 'Butterfly' },
  category: 'dyr',
  sub: 'insekter',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En sommerfugl med fire vinger. Det sjove er, at begge sider er ens – som et spejlbillede.',
    en: 'A butterfly with four wings. The fun part is that both sides are the same – like a mirror image.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en lang, smal oval til kroppen og en lille cirkel ovenpå til hovedet.', en: 'Draw a long, thin oval for the body and a small circle on top for the head.' },
      strokes: [{ d: ellipse(200, 215, 11, 72) }, { d: circle(200, 128, 15) }],
    },
    {
      text: { da: 'Tegn to store vinger øverst – én på hver side af kroppen.', en: 'Draw two big wings at the top – one on each side of the body.' },
      tip: { da: 'Tegn den ene vinge først, og prøv så at gøre den anden lige så stor.', en: 'Draw one wing first, then try to make the other one just as big.' },
      strokes: [{ d: upperWingL }, { d: mirrorX(upperWingL, 200) }],
    },
    {
      text: { da: 'Tegn to mindre, runde vinger nederst.', en: 'Draw two smaller, round wings at the bottom.' },
      strokes: [{ d: lowerWingL }, { d: mirrorX(lowerWingL, 200) }],
    },
    {
      text: { da: 'Tegn to følehorn med små kugler på spidsen, og giv sommerfuglen et glad ansigt.', en: 'Draw two feelers with little balls on the tips, and give the butterfly a happy face.' },
      strokes: [
        { d: `${antennaL} ${circle(166, 70, 5)}` },
        { d: `${mirrorX(antennaL, 200)} ${circle(234, 70, 5)}` },
        { d: `${circle(194, 126, 2.2)} ${circle(206, 126, 2.2)}`, kind: 'shade', tone: 0.9 },
        { d: 'M194 134 Q200 139 206 134' },
      ],
    },
    {
      text: {
        da: 'Tegn prikker på vingerne. Det, du tegner på den ene side, tegner du også på den anden!',
        en: 'Draw spots on the wings. Whatever you draw on one side, draw on the other side too!',
      },
      tip: { da: 'Sommerfuglens vinger er symmetriske – begge sider er ens.', en: 'A butterfly’s wings are symmetrical – both sides are the same.' },
      strokes: [{ d: spotsL }, { d: mirrorX(spotsL, 200) }],
    },
    {
      text: { da: 'Tegn striber på kroppen, og farvelæg din sommerfugl med dine yndlingsfarver.', en: 'Draw stripes on the body, and colour your butterfly with your favourite colours.' },
      strokes: [
        { d: 'M191 176 H209 M189 198 H211 M189 220 H211 M190 242 H210 M193 264 H207' },
        { d: `${circle(112, 140, 22)} ${circle(140, 270, 16)} ${circle(288, 140, 22)} ${circle(260, 270, 16)}`, kind: 'shade', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en flot sommerfugl – den ser ud, som om den kan flyve væk!', en: 'What a lovely butterfly – it looks like it could fly away!' }],
  nextTip: { da: 'Tegn en sommerfugl, der sidder på en blomst.', en: 'Draw a butterfly sitting on a flower.' },
}
