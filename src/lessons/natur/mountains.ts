import { circle, poly } from '../shapes'
import type { Lesson } from '../types'

const pine = (x: number, y: number, h: number) =>
  poly(
    [
      [x - h * 0.3, y],
      [x, y - h],
      [x + h * 0.3, y],
    ],
    true,
  ) + ` M${x} ${y} V${y + h * 0.18}`

export const mountains: Lesson = {
  id: 'mountains',
  title: { da: 'Bjerge med sne', en: 'Snowy mountains' },
  category: 'natur',
  sub: 'landskab',
  level: 1,
  minutes: 6,
  intro: {
    da: 'Høje bjerge med sne på toppen, en sol og små grantræer. Bjergene er bare store trekanter!',
    en: 'Tall mountains with snow on top, a sun and little pine trees. The mountains are just big triangles!',
  },
  materials: ['pencil', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et stort bjerg: en høj trekant uden bund.', en: 'Draw a big mountain: a tall triangle without a bottom.' },
      strokes: [{ d: 'M36 320 L170 110 L304 320' }],
    },
    {
      text: { da: 'Tegn et mindre bjerg bagved til højre. Det starter på det store bjergs side.', en: 'Draw a smaller mountain behind it on the right. It starts on the side of the big mountain.' },
      tip: { da: 'Det bagerste bjerg bliver gemt, hvor det store bjerg står foran.', en: 'The mountain behind gets hidden where the big mountain stands in front.' },
      strokes: [{ d: 'M232 207 L300 140 L384 320' }],
    },
    {
      text: { da: 'Tegn sne på toppene: en takket streg tværs over hvert bjerg.', en: 'Draw snow on the peaks: a zigzag line across each mountain.' },
      strokes: [
        { d: 'M137 163 L150 176 L162 160 L176 178 L190 158 L203 163' },
        { d: 'M277 163 L287 172 L297 160 L308 172 L311 166' },
      ],
    },
    {
      text: { da: 'Tegn jorden og en sol på himlen.', en: 'Draw the ground and a sun in the sky.' },
      strokes: [
        { d: 'M16 320 H384' },
        { d: circle(72, 74, 24) },
        { d: 'M72 38 V30 M72 110 V118 M36 74 H28 M108 74 H116 M47 49 L41 43 M97 49 L103 43 M47 99 L41 105 M97 99 L103 105' },
      ],
    },
    {
      text: { da: 'Tegn små grantræer ved bjergets fod og nogle fugle på himlen. Farvelæg!', en: 'Draw little pine trees at the foot of the mountain and some birds in the sky. Colour it in!' },
      strokes: [
        { d: `${pine(56, 372, 56)} ${pine(100, 384, 72)} ${pine(330, 378, 60)}` },
        { d: 'M238 70 q8 -8 16 0 q8 -8 16 0 M290 96 q6 -6 12 0 q6 -6 12 0' },
      ],
    },
  ],
  praise: [{ da: 'Det ligner en rigtig bjergtur!', en: 'It looks like a real mountain trip!' }],
  nextTip: { da: 'Tegn en lille hytte og en sti op ad bjerget.', en: 'Draw a little cabin and a path up the mountain.' },
}
