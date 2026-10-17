import { pixels, rect, type Pt } from '../shapes'
import type { Lesson } from '../types'
import { blockGround } from './block-hero'

const handle: Pt[] = [[0, 7], [1, 6], [2, 5], [3, 4], [4, 3], [5, 2]]
const head: Pt[] = [[2, 0], [3, 0], [4, 0], [5, 0], [5, 1], [6, 1], [6, 2], [7, 2], [7, 3], [7, 4], [7, 5]]
const heartCells: Pt[] = [[1, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [2, 3]]
const hearts = [20, 56, 92].map((x) => pixels(heartCells, x, 20, 6)).join(' ')

export const blockHeroDetail: Lesson = {
  id: 'block-hero-detail',
  title: { da: 'Blokhelt med hakke', en: 'Block hero with a pickaxe' },
  category: 'spil',
  sub: 'blokke',
  level: 2,
  style: 'detaljer',
  base: 'block-hero',
  minutes: 14,
  intro: {
    da: 'Byg videre på din blokhelt: en hakke af små pixel-firkanter, blokke at stå på, liv-hjerter og skygger i blokstil.',
    en: 'Build on your block hero: a pickaxe made of little pixel squares, blocks to stand on, life hearts and block-style shading.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn en hakke af små firkanter i hans hånd – skaftet går skråt op, og hovedet bøjer.', en: 'Draw a pickaxe of little squares in his hand – the handle goes up at an angle and the head curves.' },
      strokes: [{ d: pixels(handle, 250, 170, 10) }, { d: pixels(head, 250, 170, 10) }],
    },
    {
      text: { da: 'Tegn en række blokke, han står på, med græs foroven.', en: 'Draw a row of blocks he is standing on, with grass on top.' },
      strokes: [{ d: blockGround }],
    },
    {
      text: { da: 'Tegn tre pixel-hjerter i hjørnet – det er hans liv!', en: 'Draw three pixel hearts in the corner – those are his lives!' },
      strokes: [{ d: hearts }],
    },
    {
      text: {
        da: 'Skyg højre kant af hver del med en mørkere firkant. Farvelæg hakken, blokkene og hjerterne.',
        en: 'Shade the right edge of every part with a darker strip. Colour the pickaxe, the blocks and the hearts.',
      },
      tip: { da: 'I blokverdenen er skyggerne også firkantede.', en: 'In the block world, even the shadows are square.' },
      strokes: [
        { d: `${rect(226, 82, 14, 58)} ${rect(226, 140, 14, 110)} ${rect(226, 250, 14, 110)} ${rect(264, 140, 12, 110)} ${rect(148, 140, 12, 110)}`, kind: 'shade', tone: 0.2 },
        { d: pixels(handle, 250, 170, 10), kind: 'shade', tone: 0.45 },
        { d: pixels(head, 250, 170, 10), kind: 'shade', tone: 0.2 },
        { d: 'M0 360 H400 V370 H0 Z', kind: 'shade', tone: 0.35 },
        { d: 'M0 370 V400 H400 V370 Z', kind: 'shade', tone: 0.5 },
        { d: hearts, kind: 'shade', tone: 0.5 },
      ],
    },
  ],
  praise: [{ da: 'Nu kan blokhelten bygge alt, han vil!', en: 'Now the block hero can build anything he wants!' }],
  nextTip: { da: 'Tegn en kiste fuld af ædelsten ved siden af ham.', en: 'Draw a chest full of gems next to him.' },
}
