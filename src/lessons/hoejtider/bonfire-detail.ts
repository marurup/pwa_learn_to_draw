import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'
import { BONFIRE } from './bonfire'

const horizon = 'M0 230 H133 M267 230 H400'
const waves = 'M20 252 q10 -6 20 0 q10 6 20 0 M80 276 q10 -6 20 0 q10 6 20 0 M290 256 q10 -6 20 0 q10 6 20 0 M330 284 q10 -6 20 0 q10 6 20 0'
const witch = 'M40 110 L132 82 M40 110 l-14 -10 l2 18 Z M88 94 Q84 76 96 72 L104 54 L108 70 Q116 76 112 90 Z M96 72 H112 M112 84 l10 6'
const smoke = 'M200 84 Q188 66 200 50 Q212 34 200 18 M222 62 Q214 50 224 38'
const people = 'M40 362 V330 M30 316 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 M28 362 L40 336 L52 362 M350 362 V326 M340 312 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 M338 362 L350 332 L362 362 M372 362 V340 M366 330 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0'

export const bonfireDetail: Lesson = {
  id: 'bonfire-detail',
  title: { da: 'Sankthansaften ved stranden', en: 'Midsummer’s Eve on the beach' },
  category: 'hoejtider',
  sub: 'sankthans',
  level: 3,
  style: 'detaljer',
  base: 'bonfire',
  minutes: 20,
  intro: {
    da: 'Byg videre på dit bål: havet bagved, heksen der flyver forbi månen, røg og folk, der står og synger – og en mørk aftenhimmel.',
    en: 'Build on your bonfire: the sea behind it, a witch flying past the moon, smoke and people singing – and a dark evening sky.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn horisonten bag bålet og små bølger på havet.', en: 'Draw the horizon behind the bonfire and little waves on the sea.' },
      strokes: [{ d: horizon }, { d: waves, weight: 0.7 }],
    },
    {
      text: { da: 'Tegn en stor måne og en heks, der flyver forbi på sin kost.', en: 'Draw a big moon and a witch flying past on her broomstick.' },
      tip: { da: 'Heksen er på vej til Bloksbjerg, siger man.', en: 'People say the witch is on her way to the Brocken mountain.' },
      strokes: [{ d: circle(84, 86, 40) }, { d: witch }],
    },
    {
      text: { da: 'Tegn røg, der snor sig op fra flammerne.', en: 'Draw smoke curling up from the flames.' },
      strokes: [{ d: smoke, weight: 0.7, opacity: 0.7 }],
    },
    {
      text: { da: 'Tegn små mennesker, der står ved bålet og synger.', en: 'Draw little people standing by the fire singing.' },
      strokes: [{ d: people }],
    },
    {
      text: {
        da: 'Skyg himlen og havet mørke rundt om bålet, men lad flammerne og månen lyse. Farvelæg heksen og menneskene helt sorte.',
        en: 'Shade the sky and the sea dark around the bonfire, but keep the flames and the moon bright. Colour the witch and the people all black.',
      },
      tip: { da: 'Når alt omkring er mørkt, ser bålet ud til at lyse.', en: 'When everything around is dark, the fire seems to glow.' },
      strokes: [
        // The flame and the moon run the other way round here, so they stay bright holes in the dark evening.
        { d: `M0 0 H400 V400 H0 Z ${mirrorX(BONFIRE.flame, 200)} M44 86 a40 40 0 1 0 80 0 a40 40 0 1 0 -80 0`, kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: `${witch} ${people}`, kind: 'shade', tone: 0.9 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en sankthansaften – man kan næsten høre midsommervisen!', en: 'What a Midsummer’s Eve – you can almost hear the midsummer song!' }],
  nextTip: { da: 'Tegn bålet, når det er brændt ned, og gløderne lyser.', en: 'Draw the fire after it has burnt down and the embers are glowing.' },
}
