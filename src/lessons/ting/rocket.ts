import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const star = (x: number, y: number, s: number) =>
  `M${x} ${y - s} Q${x} ${y} ${x + s} ${y} Q${x} ${y} ${x} ${y + s} Q${x} ${y} ${x - s} ${y} Q${x} ${y} ${x} ${y - s} Z`

export const rocket: Lesson = {
  id: 'rocket',
  title: { da: 'Rumraket', en: 'Space rocket' },
  category: 'ting',
  sub: 'rummet',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En raket på vej ud i rummet – med vindue, finner, flammer og en planet med ringe.',
    en: 'A rocket heading into space – with a window, fins, flames and a ringed planet.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn raketten som en høj form med spids top og flad bund.', en: 'Draw the rocket as a tall shape with a pointy top and a flat bottom.' },
      tip: { da: 'Tegn den ene side først, og spejl den så på den anden side.', en: 'Draw one side first, then mirror it on the other side.' },
      strokes: [{ d: 'M200 40 C250 90 256 170 248 290 H152 C144 170 150 90 200 40 Z' }],
    },
    {
      text: { da: 'Tegn et rundt vindue øverst – med en cirkel inden i.', en: 'Draw a round window near the top – with a circle inside.' },
      strokes: [{ d: circle(200, 148, 28) }, { d: circle(200, 148, 19) }],
    },
    {
      text: { da: 'Tegn to finner nederst på hver side.', en: 'Draw two fins at the bottom on each side.' },
      strokes: [{ d: 'M152 222 L104 300 L152 290' }, { d: 'M248 222 L296 300 L248 290' }],
    },
    {
      text: { da: 'Tegn motoren under raketten – en lille, bred trapez.', en: 'Draw the engine under the rocket – a small, wide trapezoid.' },
      strokes: [{ d: 'M166 290 L176 314 H224 L234 290' }],
    },
    {
      text: { da: 'Tegn flammer, der kommer ud af motoren. En stor flamme og en lille inden i.', en: 'Draw flames coming out of the engine. A big flame with a small one inside.' },
      strokes: [{ d: 'M180 316 Q166 352 200 388 Q234 352 220 316' }, { d: 'M192 318 Q188 342 200 362 Q212 342 208 318' }],
    },
    {
      text: { da: 'Tegn striber på raketten og en planet med ringe på himlen.', en: 'Draw stripes on the rocket and a planet with rings in the sky.' },
      strokes: [
        { d: 'M155 210 Q200 220 245 210' },
        { d: 'M170 80 Q200 90 230 80' },
        { d: circle(330, 92, 24) },
        { d: ellipse(330, 92, 44, 11, -18) },
      ],
    },
    {
      text: { da: 'Tegn stjerner rundt om raketten. Nu er den klar til at lette!', en: 'Draw stars around the rocket. Now it is ready for take-off!' },
      strokes: [{ d: star(70, 70, 14) }, { d: star(90, 220, 10) }, { d: star(320, 230, 12) }, { d: star(60, 330, 9) }, { d: star(340, 330, 8) }],
    },
  ],
  praise: [{ da: '3 … 2 … 1 … Afgang! Din raket ser klar ud til rummet.', en: '3 … 2 … 1 … Lift-off! Your rocket looks ready for space.' }],
  nextTip: { da: 'Tegn en astronaut, der kigger ud af vinduet.', en: 'Draw an astronaut looking out of the window.' },
}
