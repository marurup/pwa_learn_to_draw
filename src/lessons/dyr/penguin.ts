import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'

// The belly runs the other way round from the body, so filling both leaves the belly white.
const body = 'M200 66 C262 66 292 170 292 270 C292 340 256 364 200 364 C144 364 108 340 108 270 C108 170 138 66 200 66 Z'
const belly =
  'M200 128 C188 104 146 104 146 146 C146 176 156 190 148 226 C138 286 152 340 200 346 C248 340 262 286 252 226 C244 190 254 176 254 146 C254 104 212 104 200 128 Z'
const flipperL = 'M114 196 Q76 236 84 296 Q104 280 112 252'
const footL = 'M158 358 Q146 386 172 386 Q194 386 188 362'

export const penguin: Lesson = {
  id: 'penguin',
  title: { da: 'Pingvin', en: 'Penguin' },
  category: 'dyr',
  sub: 'fugle',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En glad pingvin bygget af et stort æg. Den har sort frakke og hvid mave.',
    en: 'A happy penguin built from a big egg. It wears a black coat and has a white belly.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et stort æg til kroppen – smal foroven og bred forneden.', en: 'Draw a big egg for the body – narrow at the top and wide at the bottom.' },
      strokes: [{ d: body }],
    },
    {
      text: {
        da: 'Tegn den hvide mave inden i: to buer foroven, der mødes i midten, og så ned til bunden.',
        en: 'Draw the white belly inside: two curves at the top that meet in the middle, then down to the bottom.',
      },
      tip: { da: 'Toppen af maven ligner toppen af et hjerte.', en: 'The top of the belly looks like the top of a heart.' },
      strokes: [{ d: belly }],
    },
    {
      text: { da: 'Tegn to runde øjne og et lille trekantet næb mellem dem.', en: 'Draw two round eyes and a small triangle beak between them.' },
      strokes: [
        { d: `${circle(176, 150, 9)} ${circle(224, 150, 9)}` },
        { d: `${circle(178, 151, 4.5)} ${circle(222, 151, 4.5)}`, kind: 'shade', tone: 0.9 },
        { d: 'M186 170 L214 170 L200 190 Z' },
      ],
    },
    {
      text: { da: 'Tegn en vinge på hver side. Pingviner kalder vi dem luffer.', en: 'Draw a wing on each side. On penguins we call them flippers.' },
      strokes: [{ d: flipperL }, { d: mirrorX(flipperL, 200) }],
    },
    {
      text: { da: 'Tegn to flade fødder forneden.', en: 'Draw two flat feet at the bottom.' },
      strokes: [{ d: footL }, { d: mirrorX(footL, 200) }],
    },
    {
      text: { da: 'Farvelæg ryggen og hovedet sort eller mørkeblå, og næbbet og fødderne orange.', en: 'Colour the back and head black or dark blue, and the beak and feet orange.' },
      strokes: [
        { d: `${body} ${belly}`, kind: 'shade', tone: 0.7 },
        { d: `${flipperL} Z ${mirrorX(flipperL, 200)} Z`, kind: 'shade', tone: 0.7 },
        { d: `M186 170 L214 170 L200 190 Z ${footL} Z ${mirrorX(footL, 200)} Z`, kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en sød pingvin – den er klar til at glide på isen!', en: 'What a cute penguin – it is ready to slide on the ice!' }],
  nextTip: { da: 'Tegn en lille pingvinunge ved siden af, og et isflag under dem.', en: 'Draw a little penguin chick next to it, and an ice floe underneath them.' },
}
