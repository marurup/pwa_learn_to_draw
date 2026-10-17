import { poly, rect, starPoints } from '../shapes'
import type { Lesson } from '../types'

const cap = 'M164 72 Q166 36 200 36 Q234 36 236 72 Z M236 72 Q262 70 272 80 H236'
const headBelowCap = 'M166 72 V100 Q166 114 180 114 H220 Q234 114 234 100 V72'
const glasses = 'M176 74 H198 V86 Q187 92 176 86 Z M202 74 H224 V86 Q213 92 202 86 Z M198 78 H202'
const star = poly(starPoints(200, 176, 24, 10), true)
const platforms = `${rect(110, 346, 180, 24)} ${rect(310, 250, 70, 18)} ${rect(20, 270, 60, 18)}`
const checks = [130, 170, 210, 250].map((x) => rect(x, 346, 20, 12)).join(' ') + ' ' + [150, 190, 230, 270].map((x) => rect(x, 358, 20, 12)).join(' ')

export const brickFigureDetail: Lesson = {
  id: 'brick-figure-detail',
  title: { da: 'Klodsfigur med kasket', en: 'Brick figure with a cap' },
  category: 'spil',
  sub: 'spilfigurer',
  level: 2,
  style: 'detaljer',
  base: 'brick-figure',
  minutes: 14,
  intro: {
    da: 'Byg videre på din klodsfigur: en kasket, seje solbriller, en stjerne på trøjen og svævende platforme at hoppe på.',
    en: 'Build on your brick figure: a cap, cool sunglasses, a star on the shirt and floating platforms to jump on.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Visk toppen af hovedet ud, og tegn en kasket med skygge. Tegn resten af hovedet under kasketten.',
        en: 'Rub out the top of the head, and draw a cap with a peak. Draw the rest of the head under the cap.',
      },
      erase: ['head'],
      strokes: [{ d: cap }, { d: headBelowCap }],
    },
    {
      text: { da: 'Tegn solbriller over øjnene.', en: 'Draw sunglasses over the eyes.' },
      strokes: [{ d: glasses }],
    },
    {
      text: { da: 'Tegn en stor stjerne på trøjen.', en: 'Draw a big star on the shirt.' },
      strokes: [{ d: star }],
    },
    {
      text: { da: 'Tegn en ternet platform under figuren og to små platforme, der svæver i luften.', en: 'Draw a checked platform under the figure and two little platforms floating in the air.' },
      tip: { da: 'Hvilken platform skal figuren hoppe til først?', en: 'Which platform should the figure jump to first?' },
      strokes: [{ d: platforms }, { d: checks }],
    },
    {
      text: { da: 'Farvelæg kasket, briller og stjerne, og skyg figurens højre side.', en: 'Colour the cap, glasses and star, and shade the right side of the figure.' },
      strokes: [
        { d: cap, kind: 'shade', tone: 0.55 },
        { d: glasses, kind: 'shade', tone: 0.9 },
        { d: star, kind: 'shade', fill: 'paper' },
        { d: checks, kind: 'shade', tone: 0.6 },
        { d: `${rect(310, 250, 70, 18)} ${rect(20, 270, 60, 18)}`, kind: 'shade', tone: 0.35 },
        { d: 'M238 122 H254 L262 236 H246 Z M236 236 H250 V346 H236 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en sej figur – klar til næste bane!', en: 'What a cool figure – ready for the next level!' }],
  nextTip: { da: 'Tegn en hel bane med platforme, figuren skal hoppe over.', en: 'Draw a whole course of platforms for the figure to jump across.' },
}
