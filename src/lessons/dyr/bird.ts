import { circle } from '../shapes'
import type { Lesson } from '../types'

export const bird: Lesson = {
  id: 'bird',
  title: { da: 'Fugl på en gren', en: 'Bird on a branch' },
  category: 'dyr',
  sub: 'fugle',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En lille fugl, der sidder på en gren. Den er bygget af en cirkel og en dråbe.',
    en: 'A little bird sitting on a branch. It is built from a circle and a drop shape.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en cirkel til hovedet, lidt til højre på papiret.', en: 'Draw a circle for the head, a little to the right on the paper.' },
      strokes: [{ d: circle(262, 132, 44) }],
    },
    {
      text: { da: 'Tegn kroppen som en stor dråbe, der starter ved hovedet og bliver spids bagud.', en: 'Draw the body like a big drop that starts at the head and gets pointy towards the back.' },
      tip: { da: 'Lad kroppen være større end hovedet – cirka dobbelt så lang.', en: 'Make the body bigger than the head – about twice as long.' },
      strokes: [
        { d: 'M226 157 C176 152 130 176 98 212' },
        { d: 'M98 212 C140 266 228 272 270 232 C290 213 296 192 292 164' },
      ],
    },
    {
      text: { da: 'Tegn halen bagest: tre fjer, der stritter ud.', en: 'Draw the tail at the back: three feathers sticking out.' },
      strokes: [{ d: 'M104 205 L42 186 L60 208 L36 226 L62 230 L48 252 L112 224' }],
    },
    {
      text: { da: 'Tegn et næb som en lille trekant, og et rundt øje.', en: 'Draw a beak like a small triangle, and a round eye.' },
      strokes: [
        { d: 'M302 122 L338 136 L303 148' },
        { d: 'M303 136 L322 136' },
        { d: circle(276, 122, 8), kind: 'shade', tone: 0.9 },
        { d: circle(276, 122, 8) },
      ],
    },
    {
      text: { da: 'Tegn en vinge på kroppen, med takker i enden som fjer.', en: 'Draw a wing on the body, with points at the end like feathers.' },
      strokes: [{ d: 'M252 196 C226 168 178 170 146 196 L168 200 L148 214 L172 214 L156 230 C196 236 236 226 252 196' }],
    },
    {
      text: { da: 'Tegn en gren under fuglen og to små ben med tæer.', en: 'Draw a branch under the bird and two little legs with toes.' },
      strokes: [
        { d: 'M190 262 L186 292 M180 296 L186 292 L194 297' },
        { d: 'M222 260 L220 292 M214 296 L220 292 L228 297' },
        { d: 'M30 298 Q200 286 372 302' },
        { d: 'M30 314 Q200 302 372 318' },
        { d: 'M300 305 Q330 280 356 288 Q336 312 300 305' },
      ],
    },
    {
      text: { da: 'Tegn en rund kind og nogle fjerstreger på brystet. Farvelæg fuglen!', en: 'Draw a round cheek and some feather marks on the chest. Colour in the bird!' },
      strokes: [
        { d: circle(286, 152, 9), kind: 'shade', tone: 0.15 },
        { d: 'M258 222 q6 6 12 0 M244 238 q6 6 12 0 M266 202 q6 6 12 0' },
      ],
    },
  ],
  praise: [{ da: 'Den fugl ser ud, som om den synger!', en: 'That bird looks like it is singing!' }],
  nextTip: { da: 'Tegn en rede med æg ved siden af fuglen.', en: 'Draw a nest with eggs next to the bird.' },
}
