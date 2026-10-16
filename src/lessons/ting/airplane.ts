import { circle, roundRect } from '../shapes'
import type { Lesson } from '../types'

const body = 'M70 196 Q72 176 100 176 H300 Q346 178 362 204 Q350 224 312 224 H104 Q78 222 70 196 Z'
const windows = Array.from({ length: 9 }, (_, i) => circle(134 + i * 20, 194, 5.5)).join(' ')
const cloud = (x: number, y: number, s: number) =>
  `M${x} ${y} q${-14 * s} 0 ${-12 * s} ${-14 * s} q${2 * s} ${-14 * s} ${18 * s} ${-12 * s} q${8 * s} ${-18 * s} ${30 * s} ${-10 * s} q${18 * s} ${-4 * s} ${20 * s} ${14 * s} q${14 * s} ${2 * s} ${10 * s} ${16 * s} Z`

export const airplane: Lesson = {
  id: 'airplane',
  title: { da: 'Flyvemaskine', en: 'Aeroplane' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 2,
  minutes: 10,
  intro: {
    da: 'Et passagerfly set fra siden, med vinger, haleror, motor og en lang række vinduer.',
    en: 'A passenger plane seen from the side, with wings, a tail fin, an engine and a long row of windows.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler', 'colors'],
  steps: [
    {
      text: { da: 'Tegn flykroppen som en lang pølse med en rund næse til højre.', en: 'Draw the body of the plane like a long sausage with a round nose on the right.' },
      strokes: [{ d: body }],
    },
    {
      text: { da: 'Tegn halerorret, der stikker op bagerst, og et lille vandret haleror.', en: 'Draw the tail fin sticking up at the back, and a small flat tail wing.' },
      strokes: [{ d: 'M84 178 L60 104 H92 L140 176' }, { d: 'M80 210 L40 228 H64 L112 220' }],
    },
    {
      text: {
        da: 'Tegn den store vinge, der peger skråt bagud og ned. Den anden vinge kan du lige ane bag flyet.',
        en: 'Draw the big wing pointing back and down at a slant. You can just see the other wing behind the plane.',
      },
      tip: { da: 'Vingen sidder lidt foran midten af flyet.', en: 'The wing sits a little in front of the middle of the plane.' },
      strokes: [{ d: 'M180 222 L144 298 H174 L252 222' }, { d: 'M196 176 L176 140 H196 L236 176' }],
    },
    {
      text: { da: 'Tegn en motor under vingen. Den stikker lidt frem foran vingen.', en: 'Draw an engine under the wing. It sticks out a little in front of the wing.' },
      strokes: [{ d: roundRect(190, 250, 58, 22, 11) }, { d: 'M240 252 V270', weight: 0.7 }],
    },
    {
      text: { da: 'Tegn en lang række runde vinduer, cockpit-ruden foran og en dør bagved.', en: 'Draw a long row of round windows, the cockpit window at the front and a door at the back.' },
      strokes: [{ d: windows }, { d: 'M322 190 Q340 190 350 202 H324 Z' }, { d: roundRect(106, 182, 16, 32, 6) }],
    },
    {
      text: { da: 'Tegn en stribe langs flyet og nogle skyer. Farvelæg dit fly!', en: 'Draw a stripe along the plane and some clouds. Colour in your plane!' },
      strokes: [
        { d: 'M96 212 H342', weight: 0.8 },
        { d: `${cloud(80, 360, 1.2)} ${cloud(300, 120, 0.9)} ${cloud(330, 340, 0.8)}` },
        { d: 'M84 178 L60 104 H92 L140 176 Z', kind: 'shade', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Klar til afgang! Dit fly ser ud, som om det kan flyve jorden rundt.', en: 'Ready for take-off! Your plane looks like it could fly around the world.' }],
  nextTip: { da: 'Tegn en helikopter eller et lille propelfly.', en: 'Draw a helicopter or a small propeller plane.' },
}
