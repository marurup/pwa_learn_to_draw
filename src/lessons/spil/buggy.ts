import { circle, radial } from '../shapes'
import type { Lesson } from '../types'

export const BUGGY = {
  wheels: `${circle(112, 306, 42)} ${circle(292, 306, 42)}`,
  hubs: `${circle(112, 306, 16)} ${circle(292, 306, 16)}`,
  treads: `${radial(112, 306, 42, 48, 18)} ${radial(292, 306, 42, 48, 18)}`,
  body: 'M56 262 L74 228 H332 L350 262 Z',
  cage: 'M126 228 L150 140 H246 L276 228 M138 184 H262',
  helmet: 'M182 196 a18 18 0 1 1 36 0 V214 H182 Z M200 192 H220 V204 H202 Z',
  spoiler: 'M70 228 L60 196 H100 L94 228',
}

export const buggy: Lesson = {
  id: 'buggy',
  title: { da: 'Buggy', en: 'Buggy' },
  category: 'spil',
  sub: 'raketbiler',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En sej buggy med kæmpe hjul og et bur af rør over køreren – klar til at køre i sandet.',
    en: 'A cool buggy with giant wheels and a frame of tubes over the driver – ready for the sand.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn to store hjul med god afstand.', en: 'Draw two big wheels with plenty of space between them.' },
      strokes: [{ d: BUGGY.wheels }],
    },
    {
      text: { da: 'Tegn bilens krop som en flad bakke oven på hjulene.', en: 'Draw the body of the car like a flat tray on top of the wheels.' },
      strokes: [{ d: BUGGY.body }],
    },
    {
      text: { da: 'Tegn buret af rør over sædet.', en: 'Draw the frame of tubes over the seat.' },
      strokes: [{ d: BUGGY.cage, weight: 1.3 }],
    },
    {
      text: { da: 'Tegn kørerens hjelm og en spoiler bagpå.', en: 'Draw the driver’s helmet and a spoiler at the back.' },
      strokes: [{ d: BUGGY.helmet }, { d: BUGGY.spoiler }],
    },
    {
      text: { da: 'Tegn navene og knopper på dækkene. Farvelæg buggyen!', en: 'Draw the hubs and knobbly treads on the tyres. Colour in the buggy!' },
      strokes: [
        { d: BUGGY.hubs },
        { d: BUGGY.treads },
        { d: BUGGY.wheels, kind: 'shade', tone: 0.75 },
        { d: BUGGY.hubs, kind: 'shade', fill: 'paper' },
        { d: `${BUGGY.body} ${BUGGY.spoiler} Z`, kind: 'shade', tone: 0.4 },
        { d: BUGGY.helmet, kind: 'shade', tone: 0.25 },
      ],
    },
  ],
  praise: [{ da: 'Wrooom! Den buggy kan køre over alt!', en: 'Vroom! That buggy can drive over anything!' }],
  nextTip: { da: 'Tegn buggyen, mens den hopper over en klit.', en: 'Draw the buggy jumping over a sand dune.' },
}
