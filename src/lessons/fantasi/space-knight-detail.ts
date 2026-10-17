import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const planet = `${circle(70, 80, 34)} ${ellipse(70, 80, 56, 12, -15)}`
const moon = `${circle(330, 300, 22)} ${circle(322, 292, 5)} ${circle(338, 308, 4)}`
const stars = [circle(150, 40, 2), circle(250, 30, 2.5), circle(40, 200, 2), circle(370, 200, 2), circle(90, 300, 2.5), circle(300, 60, 1.6), circle(30, 360, 1.6), circle(370, 370, 2)].join(' ')
const glowLines = 'M300 120 l-10 -10 M330 96 l-10 -12 M322 138 l12 10 M352 112 l12 8 M288 150 l-12 -6'
const folds = 'M150 220 Q146 280 150 340 M250 220 Q254 280 250 340 M200 210 V246'

export const spaceKnightDetail: Lesson = {
  id: 'space-knight-detail',
  title: { da: 'Rumridder blandt planeterne', en: 'Space knight among the planets' },
  category: 'fantasi',
  sub: 'rumeventyr',
  level: 3,
  style: 'detaljer',
  base: 'space-knight',
  minutes: 22,
  intro: {
    da: 'Byg videre på din rumridder: en planet med ringe, en måne med kratere, stjerner, et skær omkring sværdet og folder i kappen.',
    en: 'Build on your space knight: a ringed planet, a cratered moon, stars, a glow around the sword and folds in the cloak.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en planet med en ring om i hjørnet.', en: 'Draw a planet with a ring around it in the corner.' },
      tip: { da: 'Ringen er en flad, skrå oval.', en: 'The ring is a flat, tilted oval.' },
      strokes: [{ d: planet }],
    },
    {
      text: { da: 'Tegn en lille måne med kratere og stjerner rundt omkring.', en: 'Draw a little moon with craters and stars all around.' },
      strokes: [{ d: moon }, { d: stars, kind: 'shade', tone: 0.6 }],
    },
    {
      text: { da: 'Tegn små streger rundt om klingen, så den stråler.', en: 'Draw little lines around the blade so it shines.' },
      strokes: [{ d: glowLines, weight: 0.6 }],
    },
    {
      text: { da: 'Tegn folder i kappen og kjortlen.', en: 'Draw folds in the cloak and the tunic.' },
      strokes: [{ d: folds, weight: 0.6, opacity: 0.7 }],
    },
    {
      text: {
        da: 'Skyg kappen i siderne, og farvelæg planeten og månen. Skyg månen i den ene side.',
        en: 'Shade the sides of the cloak, and colour the planet and the moon. Shade one side of the moon.',
      },
      strokes: [
        { d: 'M178 120 Q138 200 130 352 H150 Q150 230 178 130 Z M222 120 Q262 200 270 352 H250 Q250 230 222 130 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: circle(70, 80, 34), kind: 'shade', tone: 0.35 },
        { d: 'M352 300 A22 22 0 0 1 330 322 Q340 304 330 278 A22 22 0 0 1 352 300 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Galaksen er tryg med sådan en ridder!', en: 'The galaxy is safe with a knight like that!' }],
  nextTip: { da: 'Tegn ridderens rumskib, der venter på månen.', en: 'Draw the knight’s spaceship waiting on the moon.' },
}
