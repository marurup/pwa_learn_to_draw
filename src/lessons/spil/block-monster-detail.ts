import { rect } from '../shapes'
import type { Lesson } from '../types'
import { blockGround } from './block-hero'

const pattern = [
  [158, 82], [214, 148], [176, 214], [204, 258], [170, 292], [222, 196], [160, 120], [238, 120],
].map(([x, y]) => rect(x, y, 12, 12)).join(' ')
const tree = `${rect(310, 230, 24, 130)} ${rect(270, 140, 104, 90)} ${rect(282, 152, 16, 16)} ${rect(338, 164, 16, 16)} ${rect(300, 196, 16, 16)}`
const sun = `${rect(40, 40, 50, 50)} M65 26 V34 M65 96 V104 M26 65 H34 M96 65 H104`
const cloud = 'M290 40 H370 V56 H390 V72 H270 V56 H290 Z'

export const blockMonsterDetail: Lesson = {
  id: 'block-monster-detail',
  title: { da: 'Blokmonster i skoven', en: 'Block monster in the forest' },
  category: 'spil',
  sub: 'blokke',
  level: 2,
  style: 'detaljer',
  base: 'block-monster',
  minutes: 14,
  intro: {
    da: 'Byg videre på dit blokmonster: et pixel-mønster på kroppen, et blok-træ, en firkantet sol og blokke at stå på.',
    en: 'Build on your block monster: a pixel pattern on its body, a block tree, a square sun and blocks to stand on.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn et mønster af lidt større firkanter på hoved og krop.', en: 'Draw a pattern of slightly bigger squares on the head and body.' },
      strokes: [{ d: pattern }],
    },
    {
      text: { da: 'Tegn et blok-træ: en lang stamme og en stor firkantet trækrone.', en: 'Draw a block tree: a tall trunk and a big square treetop.' },
      strokes: [{ d: tree }],
    },
    {
      text: { da: 'Tegn en firkantet sol og en kantet sky.', en: 'Draw a square sun and a blocky cloud.' },
      strokes: [{ d: sun }, { d: cloud }],
    },
    {
      text: { da: 'Tegn blokke med græs, som monsteret og træet står på. Monsteret siger Ssss…', en: 'Draw blocks with grass for the monster and the tree to stand on. The monster says Ssss…' },
      strokes: [{ d: blockGround }],
      labels: [{ x: 100, y: 150, text: { da: 'Ssss…', en: 'Ssss…' } }],
    },
    {
      text: { da: 'Farvelæg mønsteret mørkegrønt, træet grønt og brunt og solen gul.', en: 'Colour the pattern dark green, the tree green and brown and the sun yellow.' },
      tip: { da: 'To grønne nuancer gør blokverdenen levende.', en: 'Two shades of green bring the block world to life.' },
      strokes: [
        { d: pattern, kind: 'shade', tone: 0.6 },
        { d: rect(310, 230, 24, 130), kind: 'shade', tone: 0.55 },
        { d: rect(270, 140, 104, 90), kind: 'shade', tone: 0.35 },
        { d: rect(40, 40, 50, 50), kind: 'shade', tone: 0.15 },
        { d: 'M0 360 H400 V370 H0 Z', kind: 'shade', tone: 0.35 },
        { d: 'M0 370 V400 H400 V370 Z', kind: 'shade', tone: 0.5 },
      ],
    },
  ],
  praise: [{ da: 'Det grønne monster har fundet et godt gemmested!', en: 'The green monster has found a good hiding place!' }],
  nextTip: { da: 'Tegn blokhelten, der kommer gående mod monsteret.', en: 'Draw the block hero walking towards the monster.' },
}
