import { circle } from '../shapes'
import type { Lesson } from '../types'

const stars = [circle(40, 40, 2), circle(90, 130, 1.6), circle(260, 40, 2.5), circle(360, 120, 2), circle(30, 250, 2), circle(370, 260, 1.6), circle(280, 90, 1.6)].join(' ')
const planet = `${circle(340, 70, 34)} M308 60 Q340 72 372 60 M308 84 Q340 96 372 84`
const glow = 'M126 120 l-10 -4 M124 160 l-12 2 M154 110 l10 -6 M156 150 l12 0 M140 72 V60'
const smoke = 'M110 372 q-10 -12 4 -20 q4 -14 20 -8 q12 -10 22 4 M270 372 q-4 -14 12 -18 q10 -12 22 0 q14 -2 12 14'
const capeFolds = 'M140 220 Q130 290 128 356 M262 220 Q270 290 272 356'
const panelLights = `${circle(192, 164, 3)} ${circle(208, 164, 3)}`

export const darkKnightDetail: Lesson = {
  id: 'dark-knight-detail',
  title: { da: 'Den mørke ridder i rummet', en: 'The dark knight in space' },
  category: 'fantasi',
  sub: 'rumeventyr',
  level: 3,
  style: 'detaljer',
  base: 'dark-knight',
  minutes: 20,
  intro: {
    da: 'Byg videre på din mørke ridder: stjerner og en planet, et rødt skær omkring sværdet, lys i panelet, folder i kappen og røg ved fødderne.',
    en: 'Build on your dark knight: stars and a planet, a red glow around the sword, lights on the panel, folds in the cape and smoke at his feet.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn stjerner og en stribet planet i hjørnet.', en: 'Draw stars and a striped planet in the corner.' },
      strokes: [{ d: stars, kind: 'shade', tone: 0.6 }, { d: planet }],
    },
    {
      text: { da: 'Tegn små stråler rundt om den røde klinge.', en: 'Draw little rays around the red blade.' },
      strokes: [{ d: glow, weight: 0.6 }],
    },
    {
      text: { da: 'Tegn folder i kappen.', en: 'Draw folds in the cape.' },
      strokes: [{ d: capeFolds, weight: 0.7 }],
    },
    {
      text: { da: 'Tegn røgskyer ved fødderne.', en: 'Draw clouds of smoke at his feet.' },
      strokes: [{ d: smoke }],
    },
    {
      text: {
        da: 'Lad to knapper i panelet lyse, skyg folderne i kappen, og farvelæg planeten.',
        en: 'Let two buttons on the panel light up, shade the folds in the cape, and colour the planet.',
      },
      tip: { da: 'Små lyse prikker på noget mørkt ser ud som lys, der tænder.', en: 'Little bright dots on something dark look like lights switching on.' },
      strokes: [
        { d: panelLights, kind: 'shade', fill: 'paper' },
        { d: 'M140 220 Q130 290 128 356 H112 Q120 280 150 200 Z M262 220 Q270 290 272 356 H288 Q280 280 250 200 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: circle(340, 70, 34), kind: 'shade', tone: 0.3 },
        { d: smoke, kind: 'shade', fill: 'soft', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Uhh, han ser mægtig ud derude mellem stjernerne!', en: 'Ooh, he looks mighty out there among the stars!' }],
  nextTip: { da: 'Tegn hans mørke rumskib.', en: 'Draw his dark spaceship.' },
}
