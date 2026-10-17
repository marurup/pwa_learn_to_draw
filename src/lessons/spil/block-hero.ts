import { rect } from '../shapes'
import type { Lesson } from '../types'

export const HERO = {
  head: rect(160, 60, 80, 80),
  body: rect(160, 140, 80, 110),
  legs: `${rect(160, 250, 40, 110)} ${rect(200, 250, 40, 110)}`,
  arms: `${rect(124, 140, 36, 110)} ${rect(240, 140, 36, 110)}`,
  hair: 'M160 60 H240 V82 H228 V72 H172 V82 H160 Z',
  eyes: `${rect(170, 94, 18, 10)} ${rect(212, 94, 18, 10)}`,
  pupils: `${rect(180, 94, 8, 10)} ${rect(212, 94, 8, 10)}`,
  mouth: rect(186, 118, 28, 6),
  clothes: 'M124 190 H160 M240 190 H276 M160 340 H240',
}

/** A row of blocks with a stepped grass edge, for the block lessons to stand on. */
export const blockGround = `${Array.from({ length: 10 }, (_, i) => rect(i * 40, 360, 40, 40)).join(' ')} M0 370 ${Array.from({ length: 20 }, () => 'h10 v5 h10 v-5').join(' ')}`

export const blockHero: Lesson = {
  id: 'block-hero',
  title: { da: 'Blokhelt', en: 'Block hero' },
  category: 'spil',
  sub: 'blokke',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En helt fra blokverdenen, hvor alt er firkanter – hoved, krop, arme og ben.',
    en: 'A hero from the block world, where everything is squares – head, body, arms and legs.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn en firkant til hovedet.', en: 'Draw a square for the head.' },
      tip: { da: 'En lineal hjælper dig med at få helt lige kanter.', en: 'A ruler helps you get perfectly straight edges.' },
      strokes: [{ d: HERO.head }],
    },
    {
      text: { da: 'Tegn en aflang firkant til kroppen og to til benene.', en: 'Draw a long rectangle for the body and two for the legs.' },
      strokes: [{ d: HERO.body }, { d: HERO.legs }],
    },
    {
      text: { da: 'Tegn to lange, smalle firkanter til armene.', en: 'Draw two long, narrow rectangles for the arms.' },
      strokes: [{ d: HERO.arms }],
    },
    {
      text: { da: 'Tegn kantet hår, firkantede øjne og en lige mund.', en: 'Draw blocky hair, square eyes and a straight mouth.' },
      strokes: [{ d: HERO.hair }, { d: HERO.eyes }, { d: HERO.pupils, kind: 'shade', tone: 0.8 }, { d: HERO.mouth }],
    },
    {
      text: { da: 'Tegn en streg, hvor ærmerne slutter, og en ved skoene. Farvelæg blusen, bukserne og håret.', en: 'Draw a line where the sleeves end and one at the shoes. Colour the shirt, the trousers and the hair.' },
      strokes: [
        { d: HERO.clothes },
        { d: `${rect(160, 140, 80, 110)} ${rect(124, 140, 36, 50)} ${rect(240, 140, 36, 50)}`, kind: 'shade', tone: 0.35 },
        { d: `${rect(124, 190, 36, 60)} ${rect(240, 190, 36, 60)} M160 82 H172 V72 H228 V82 H240 V140 H160 Z`, kind: 'shade', tone: 0.12 },
        { d: rect(160, 250, 80, 90), kind: 'shade', tone: 0.55 },
        { d: rect(160, 340, 80, 20), kind: 'shade', tone: 0.75 },
        { d: HERO.hair, kind: 'shade', tone: 0.6 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en sej blokhelt – klar til at bygge!', en: 'What a cool block hero – ready to build!' }],
  nextTip: { da: 'Tegn et blokhus til helten.', en: 'Draw a block house for the hero.' },
}
