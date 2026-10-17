import { ellipse, rect } from '../shapes'
import type { Lesson } from '../types'

export const FIGHTER = {
  body: 'M60 200 L120 186 H300 L360 200 L300 214 H120 Z',
  cockpit: ellipse(282, 200, 24, 8),
  wings: 'M150 186 L110 92 H142 L214 186 M150 214 L110 308 H142 L214 214',
  engines: `${rect(96, 80, 54, 14)} ${rect(96, 306, 54, 14)}`,
  cannons: 'M150 87 H226 M150 313 H226',
  stripes: 'M120 192 H220 M120 208 H220',
}

export const starFighter: Lesson = {
  id: 'star-fighter',
  title: { da: 'Stjernejager', en: 'Star fighter' },
  category: 'fantasi',
  sub: 'rumeventyr',
  level: 2,
  minutes: 12,
  intro: {
    da: 'Et hurtigt rumskib set oppefra med spidse vinger, motorer og laserkanoner.',
    en: 'A fast spaceship seen from above with pointed wings, engines and laser cannons.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn skibets lange, spidse krop.', en: 'Draw the ship’s long, pointed body.' },
      strokes: [{ d: FIGHTER.body }],
    },
    {
      text: { da: 'Tegn cockpittet foran som en aflang oval.', en: 'Draw the cockpit at the front as a long oval.' },
      strokes: [{ d: FIGHTER.cockpit }],
    },
    {
      text: { da: 'Tegn to vinger, der stritter skråt bagud – én op og én ned.', en: 'Draw two wings sweeping back at an angle – one up and one down.' },
      tip: { da: 'De to vinger er spejlbilleder af hinanden.', en: 'The two wings are mirror images of each other.' },
      strokes: [{ d: FIGHTER.wings }],
    },
    {
      text: { da: 'Tegn en motor ved hver vingespids og en laserkanon, der peger frem.', en: 'Draw an engine at each wing tip and a laser cannon pointing forwards.' },
      strokes: [{ d: FIGHTER.engines }, { d: FIGHTER.cannons, weight: 1.3 }],
    },
    {
      text: { da: 'Tegn striber på kroppen, og farvelæg skibet gråt med farvede striber.', en: 'Draw stripes on the body, and colour the ship grey with coloured stripes.' },
      strokes: [
        { d: FIGHTER.stripes },
        { d: `${FIGHTER.body} M150 186 L110 92 H142 L214 186 Z M150 214 L110 308 H142 L214 214 Z`, kind: 'shade', tone: 0.25 },
        { d: 'M120 192 H220 V208 H120 Z', kind: 'shade', tone: 0.35 },
        { d: FIGHTER.cockpit, kind: 'shade', tone: 0.6 },
        { d: FIGHTER.engines, kind: 'shade', tone: 0.5 },
      ],
    },
  ],
  praise: [{ da: 'Klar til start – stjernejageren suser af sted!', en: 'Ready for take-off – the star fighter zooms away!' }],
  nextTip: { da: 'Tegn skibet i rummet med planeter og laserskud.', en: 'Draw the ship in space with planets and laser shots.' },
}
