import type { Pt } from '../shapes'
import type { Lesson } from '../types'
import { GRID, SWORD, cells } from './pixel-sword'

const shieldL: Pt[] = [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2], [1, 2], [1, 3]]
const shieldR: Pt[] = [[2, 0], [3, 0], [2, 1], [3, 1], [2, 2], [3, 2], [2, 3]]
// The gem sits in the middle square of the crossguard.
const gx = GRID.x + 5 * GRID.size
const gy = GRID.y + 7 * GRID.size
const gem = `M${gx + 12} ${gy + 4} l8 8 l-8 8 l-8 -8 Z`
const sparkle = 'M352 30 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z M372 76 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 Z'

export const pixelSwordDetail: Lesson = {
  id: 'pixel-sword-detail',
  title: { da: 'Pixelsværd og skjold', en: 'Pixel sword and shield' },
  category: 'spil',
  sub: 'blokke',
  level: 2,
  style: 'detaljer',
  base: 'pixel-sword',
  minutes: 14,
  intro: {
    da: 'Byg videre på dit pixelsværd: et skjold, en ædelsten og to farver på klingen, så den glimter.',
    en: 'Build on your pixel sword: a shield, a gem and two colours on the blade so it gleams.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn et skjold af felter i øverste venstre hjørne – spidst forneden.', en: 'Draw a shield made of squares in the top left corner – pointed at the bottom.' },
      strokes: [{ d: cells([...shieldL, ...shieldR]) }],
    },
    {
      text: { da: 'Tegn en ædelsten midt på parerstangen.', en: 'Draw a gem in the middle of the crossguard.' },
      strokes: [{ d: gem }],
    },
    {
      text: { da: 'Tegn glimt ved sværdets spids.', en: 'Draw sparkles by the tip of the sword.' },
      strokes: [{ d: sparkle }],
    },
    {
      text: {
        da: 'Lad den øverste række felter på klingen være hvid og den nederste lidt mørkere. Giv skjoldet to farver.',
        en: 'Keep the top row of the blade white and make the bottom row a little darker. Give the shield two colours.',
      },
      tip: { da: 'I pixeltegning laver man glans med en lysere række felter.', en: 'In pixel art you make a gleam with a lighter row of squares.' },
      strokes: [
        { d: cells(SWORD.bladeA), kind: 'shade', fill: 'paper' },
        { d: cells(SWORD.bladeB), kind: 'shade', tone: 0.2 },
        { d: cells(shieldL), kind: 'shade', tone: 0.3 },
        { d: cells(shieldR), kind: 'shade', tone: 0.55 },
        { d: gem, kind: 'shade', tone: 0.7 },
        { d: sparkle, kind: 'shade', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Med sværd og skjold er du klar til næste bane!', en: 'With a sword and shield you are ready for the next level!' }],
  nextTip: { da: 'Tegn en pixel-drage, som helten skal kæmpe mod.', en: 'Draw a pixel dragon for the hero to battle.' },
}
