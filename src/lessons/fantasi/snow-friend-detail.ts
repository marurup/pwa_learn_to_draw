import { circle, radial } from '../shapes'
import type { Lesson } from '../types'

const sun = `${circle(330, 66, 26)} ${radial(330, 66, 34, 48, 12)}`
const bouquet = 'M272 150 L292 120 M272 150 L300 132 M272 150 L284 116'
const blooms = `${circle(292, 114, 7)} ${circle(304, 128, 7)} ${circle(282, 108, 6)}`
const butterfly = (x: number, y: number) => `M${x} ${y} q-14 -14 -16 0 q2 10 16 0 q14 -14 16 0 q-2 10 -16 0 M${x} ${y} l-3 -8 M${x} ${y} l3 -8`
const grass = 'M20 340 q4 -14 8 0 q4 -16 8 0 M60 344 q4 -14 8 0 q4 -16 8 0 M300 344 q4 -14 8 0 q4 -16 8 0 M350 340 q4 -14 8 0 q4 -16 8 0'
const flowers = `${circle(90, 326, 6)} M90 332 V350 ${circle(120, 334, 5)} M120 339 V352 ${circle(290, 330, 6)} M290 336 V352 ${circle(326, 324, 5)} M326 329 V346`

export const snowFriendDetail: Lesson = {
  id: 'snow-friend-detail',
  title: { da: 'Snevennen drømmer om sommer', en: 'The snow friend dreams of summer' },
  category: 'fantasi',
  sub: 'isriget',
  level: 2,
  style: 'detaljer',
  base: 'snow-friend',
  minutes: 12,
  intro: {
    da: 'Byg videre på din sneven: en sol, en buket blomster i hånden, sommerfugle og en blomstereng – og blide skygger, så han bliver rund.',
    en: 'Build on your snow friend: a sun, a bunch of flowers in his hand, butterflies and a flower meadow – and gentle shading so he looks round.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en stor sol med stråler.', en: 'Draw a big sun with rays.' },
      strokes: [{ d: sun }],
    },
    {
      text: { da: 'Tegn en lille buket blomster i den ene kvisthånd.', en: 'Draw a little bunch of flowers in one twig hand.' },
      strokes: [{ d: bouquet }, { d: blooms }],
    },
    {
      text: { da: 'Tegn to sommerfugle, der flyver omkring ham.', en: 'Draw two butterflies flying around him.' },
      strokes: [{ d: `${butterfly(90, 120)} ${butterfly(320, 210)}` }],
    },
    {
      text: { da: 'Tegn græs og blomster forneden.', en: 'Draw grass and flowers at the bottom.' },
      strokes: [{ d: grass }, { d: flowers }],
    },
    {
      text: {
        da: 'Skyg sneboldene let forneden i højre side, og farvelæg solen, blomsterne og sommerfuglene.',
        en: 'Shade the snowballs lightly at the bottom on the right, and colour the sun, the flowers and the butterflies.',
      },
      tip: { da: 'Lyseblå skygger får sne til at se kold og hvid ud.', en: 'Light blue shadows make snow look cold and white.' },
      strokes: [
        { d: 'M256 262 A56 54 0 0 1 160 300 Q226 300 240 230 Z M230 176 A30 28 0 0 1 182 198 Q214 198 222 160 Z', kind: 'shade', fill: 'soft', tone: 0.2 },
        { d: sun, kind: 'shade', tone: 0.15 },
        { d: `${blooms} ${flowers}`, kind: 'shade', tone: 0.4 },
        { d: `${butterfly(90, 120)} ${butterfly(320, 210)}`, kind: 'shade', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Sommer! Snevennen er lykkelig – lad os håbe, han ikke smelter!', en: 'Summer! The snow friend is overjoyed – let’s hope he doesn’t melt!' }],
  nextTip: { da: 'Tegn ham på stranden med en badebold.', en: 'Draw him on the beach with a beach ball.' },
}
