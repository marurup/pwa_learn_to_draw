import { circle } from '../shapes'
import type { Lesson } from '../types'

const flames = 'M46 252 L20 244 L32 258 L8 263 L32 268 L20 282 L46 274'
const innerFlame = 'M46 256 L30 263 L46 270'
// A big ball with a five-sided patch in the middle and seams out to the edge.
const patch = Array.from({ length: 5 }, (_, i) => {
  const a = ((i * 72 - 90) * Math.PI) / 180
  return `${i ? 'L' : 'M'}${300 + 20 * Math.cos(a)} ${96 + 20 * Math.sin(a)}`
}).join(' ') + ' Z'
const seams = Array.from({ length: 5 }, (_, i) => {
  const a = ((i * 72 - 90) * Math.PI) / 180
  return `M${300 + 20 * Math.cos(a)} ${96 + 20 * Math.sin(a)} L${300 + 62 * Math.cos(a)} ${96 + 62 * Math.sin(a)}`
}).join(' ')
const speed = 'M20 214 H76 M10 232 H56 M30 304 H90'
const field = 'M0 340 H400 M20 362 H60 M100 362 H140 M180 362 H220 M260 362 H300 M340 362 H380'

export const rocketCarDetail: Lesson = {
  id: 'rocket-car-detail',
  title: { da: 'Raketbil og kæmpebold', en: 'Rocket car and giant ball' },
  category: 'spil',
  sub: 'raketbiler',
  level: 3,
  style: 'detaljer',
  base: 'rocket-car',
  minutes: 18,
  intro: {
    da: 'Byg videre på din raketbil: flammer fra raketten, en kæmpebold, fartstreger og en bane med streger.',
    en: 'Build on your rocket car: flames from the rocket, a giant ball, speed lines and a pitch with markings.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn spidse flammer, der skyder ud af raketten.', en: 'Draw spiky flames shooting out of the rocket.' },
      strokes: [{ d: flames }, { d: innerFlame }],
    },
    {
      text: { da: 'Tegn en kæmpe bold foran bilen – meget større end et hjul!', en: 'Draw a giant ball in front of the car – much bigger than a wheel!' },
      strokes: [{ d: circle(300, 96, 62) }],
    },
    {
      text: { da: 'Tegn en femkant midt på bolden og streger ud til kanten.', en: 'Draw a pentagon in the middle of the ball and lines out to the edge.' },
      strokes: [{ d: patch }, { d: seams }],
    },
    {
      text: { da: 'Tegn fartstreger bag bilen og banen med streger forneden.', en: 'Draw speed lines behind the car and the pitch with markings at the bottom.' },
      strokes: [{ d: speed, weight: 0.7 }, { d: field }],
    },
    {
      text: { da: 'Farvelæg flammerne gule og orange, femkanten mørk, og skyg bolden forneden.', en: 'Colour the flames yellow and orange, the pentagon dark, and shade the bottom of the ball.' },
      tip: { da: 'En skygge forneden på bolden gør den rund.', en: 'A shadow at the bottom of the ball makes it round.' },
      strokes: [
        { d: `${flames} Z`, kind: 'shade', tone: 0.35 },
        { d: `${innerFlame} Z`, kind: 'shade', fill: 'paper' },
        { d: patch, kind: 'shade', tone: 0.8 },
        { d: 'M238 96 A62 62 0 0 0 362 96 Q300 150 238 96 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M0 340 H400 V400 H0 Z', kind: 'shade', tone: 0.25 },
      ],
    },
  ],
  praise: [{ da: 'BOOST! Den bold ryger lige i mål!', en: 'BOOST! That ball is going straight into the goal!' }],
  nextTip: { da: 'Tegn målet med et stort net, bolden flyver ind i.', en: 'Draw the goal with a big net for the ball to fly into.' },
}
