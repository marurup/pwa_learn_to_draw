import { ellipse } from '../shapes'
import type { Lesson } from '../types'

export const BALLOONS = {
  middle: ellipse(200, 120, 48, 60),
  sides: `${ellipse(100, 150, 48, 60)} ${ellipse(300, 150, 48, 60)}`,
  knots: 'M100 210 L93 220 H107 Z M200 180 L193 190 H207 Z M300 210 L293 220 H307 Z',
  strings: 'M100 220 Q110 300 196 350 M200 190 Q190 270 200 350 M300 220 Q290 300 204 350',
  bow: 'M200 350 Q186 340 184 352 Q188 360 200 350 Q214 340 216 352 Q212 360 200 350 M198 352 L192 372 M202 352 L208 372',
  shine: 'M74 130 Q78 112 92 104 M174 100 Q178 82 192 74 M274 130 Q278 112 292 104',
}

export const balloons: Lesson = {
  id: 'balloons',
  title: { da: 'Balloner', en: 'Balloons' },
  category: 'hoejtider',
  sub: 'foedselsdag',
  level: 1,
  minutes: 6,
  intro: {
    da: 'Tre festlige balloner, der er bundet sammen med en sløjfe.',
    en: 'Three party balloons tied together with a bow.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en oval ballon i midten.', en: 'Draw an oval balloon in the middle.' },
      strokes: [{ d: BALLOONS.middle }],
    },
    {
      text: { da: 'Tegn to balloner mere – lidt lavere – på hver side.', en: 'Draw two more balloons – a little lower – on each side.' },
      strokes: [{ d: BALLOONS.sides }],
    },
    {
      text: { da: 'Tegn en lille trekant under hver ballon – det er knuden.', en: 'Draw a little triangle under each balloon – that is the knot.' },
      strokes: [{ d: BALLOONS.knots }],
    },
    {
      text: { da: 'Tegn snorene, så de mødes forneden, og bind en sløjfe.', en: 'Draw the strings so they meet at the bottom, and tie a bow.' },
      strokes: [{ d: BALLOONS.strings, weight: 0.8 }, { d: BALLOONS.bow }],
    },
    {
      text: { da: 'Tegn en lille glansstreg på hver ballon, og farvelæg dem i tre farver.', en: 'Draw a little shine line on each balloon, and colour them in three colours.' },
      strokes: [
        { d: BALLOONS.shine, weight: 0.7 },
        { d: ellipse(100, 150, 48, 60), kind: 'shade', tone: 0.3 },
        { d: BALLOONS.middle, kind: 'shade', tone: 0.45 },
        { d: ellipse(300, 150, 48, 60), kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [{ da: 'Sikke festlige balloner – nu kan festen begynde!', en: 'What cheerful balloons – let the party begin!' }],
  nextTip: { da: 'Tegn en ballon formet som et hjerte.', en: 'Draw a balloon shaped like a heart.' },
}
