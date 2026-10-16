import { circle, line } from '../shapes'
import type { Lesson } from '../types'

export const car: Lesson = {
  id: 'car',
  title: { da: 'Bil', en: 'Car' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En bil set fra siden. Du lærer også et smart trick: at viske de streger ud, der ligger bag noget andet.',
    en: 'A car seen from the side. You also learn a clever trick: erasing the lines that are hidden behind something.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn bilens krop som en lang firkant med runde hjørner.', en: 'Draw the body of the car as a long rectangle with round corners.' },
      strokes: [
        { d: 'M72 290 Q50 290 50 268 V224 Q50 202 72 202 H328 Q350 202 350 224 V268 Q350 290 328 290' },
        { d: line(72, 290, 328, 290), id: 'bottom' },
      ],
    },
    {
      text: { da: 'Tegn kabinen ovenpå: en form med skrå sider, som et lavt bjerg.', en: 'Draw the cabin on top: a shape with slanted sides, like a low mountain.' },
      strokes: [{ d: 'M108 202 L148 142 H258 L302 202' }],
    },
    {
      text: { da: 'Tegn to store hjul. De sidder under bilen, et foran og et bagved.', en: 'Draw two big wheels. They sit under the car, one at the front and one at the back.' },
      strokes: [{ d: circle(120, 290, 36) }, { d: circle(280, 290, 36) }],
    },
    {
      text: { da: 'Visk bundstregen ud inde i hjulene. Hjulene skal ligge foran bilen!', en: 'Erase the bottom line inside the wheels. The wheels should be in front of the car!' },
      tip: { da: 'Det her er et rigtigt tegnetrick: Det, der er tættest på dig, dækker det bagved.', en: 'This is a real artist trick: whatever is closest to you covers what is behind it.' },
      erase: ['bottom'],
      strokes: [{ d: line(72, 290, 84, 290) }, { d: line(156, 290, 244, 290) }, { d: line(316, 290, 328, 290) }],
    },
    {
      text: { da: 'Tegn to vinduer i kabinen og en lille cirkel inde i hvert hjul.', en: 'Draw two windows in the cabin and a small circle inside each wheel.' },
      strokes: [
        { d: 'M156 152 L128 196 H198 V152 Z' },
        { d: 'M212 152 V196 H284 L254 152 Z' },
        { d: circle(120, 290, 14) },
        { d: circle(280, 290, 14) },
      ],
    },
    {
      text: { da: 'Tegn døren, et håndtag, en forlygte og en baglygte.', en: 'Draw the door, a handle, a headlight and a tail light.' },
      strokes: [
        { d: 'M205 202 V282' },
        { d: 'M180 222 H194' },
        { d: 'M338 220 Q348 220 348 232 Q348 244 338 244 Z' },
        { d: 'M52 222 H64 V240 H52' },
      ],
    },
    {
      text: { da: 'Tegn en vej under bilen og fartstreger bagved. Brrrum!', en: 'Draw a road under the car and speed lines behind it. Vroom!' },
      strokes: [{ d: 'M20 328 H380' }, { d: 'M14 222 H38 M8 246 H38 M18 270 H38' }],
    },
  ],
  praise: [{ da: 'Sikke en flot bil! Den ser hurtig ud.', en: 'What a cool car! It looks fast.' }],
  nextTip: { da: 'Lav bilen om til en bus, en brandbil eller en racerbil.', en: 'Turn the car into a bus, a fire engine or a racing car.' },
}
