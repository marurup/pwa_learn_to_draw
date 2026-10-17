import { arc, circle, poly, starPoints } from '../shapes'
import type { Lesson } from '../types'

/** A tiny five-petal flower. */
const flower = (x: number, y: number) =>
  Array.from({ length: 5 }, (_, i) => {
    const a = ((i * 72 - 90) * Math.PI) / 180
    return circle(x + 5 * Math.cos(a), y + 5 * Math.sin(a), 3.5)
  }).join(' ') + ` ${circle(x, y, 2)}`
const rainbow = [64, 76, 88, 100].map((r) => arc(0, 150, r, 270, 360)).join(' ')
// The band between the innermost and outermost arcs, for colouring in.
const rainbowBand = `${arc(0, 150, 100, 270, 360)} ${arc(0, 150, 64, 360, 270).replace('M', 'L')} Z`
const sparkles = [
  [150, 40, 7],
  [340, 70, 6],
  [360, 210, 5],
  [120, 300, 6],
]
  .map(([x, y, r]) => poly(starPoints(x, y, r, r * 0.4), true))
  .join(' ')

export const unicornDetail: Lesson = {
  id: 'unicorn-detail',
  title: { da: 'Enhjørning med blomster og regnbue', en: 'Unicorn with flowers and a rainbow' },
  category: 'fantasi',
  sub: 'eventyr',
  level: 3,
  style: 'detaljer',
  base: 'unicorn',
  minutes: 15,
  intro: {
    da: 'Byg videre på din enhjørning: blomster i manken, flere lokker, en regnbue, glimtende stjerner og et skinnende horn.',
    en: 'Build on your unicorn: flowers in the mane, more locks of hair, a rainbow, twinkling stars and a shining horn.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Sæt små blomster i manken og en ved øret.', en: 'Put little flowers in the mane and one by the ear.' },
      strokes: [{ d: `${flower(312, 150)} ${flower(330, 214)} ${flower(332, 280)} ${flower(246, 92)}` }],
    },
    {
      text: { da: 'Tegn flere lange lokker i manken, der følger de bølgede former.', en: 'Draw more long locks in the mane that follow the wavy shapes.' },
      strokes: [{ d: 'M290 112 Q306 128 300 150 M308 168 Q324 186 314 206 M312 238 Q330 256 318 276 M310 300 Q322 318 312 336', weight: 0.6 }],
    },
    {
      text: { da: 'Tegn en regnbue oppe i hjørnet og glimtende stjerner rundt om.', en: 'Draw a rainbow up in the corner and twinkling stars all around.' },
      strokes: [{ d: rainbow, weight: 0.8 }, { d: sparkles }],
    },
    {
      text: {
        da: 'Lad en hvid stribe stå på hornet, og skyg under kæben og på halsen. Farvelæg regnbuen og manken!',
        en: 'Leave a white stripe on the horn, and shade under the jaw and on the neck. Colour in the rainbow and the mane!',
      },
      strokes: [
        { d: 'M200 96 L188 40 L192 40 L204 94 Z', kind: 'shade', fill: 'paper' },
        { d: 'M226 210 Q262 214 290 176 Q300 230 300 280 Q280 240 234 236 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: rainbowBand, kind: 'shade', fill: 'soft', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Den mest magiske enhjørning nogensinde!', en: 'The most magical unicorn ever!' }],
  nextTip: { da: 'Tegn enhjørningen med vinger, så den bliver en flyvende pegasus-enhjørning.', en: 'Draw the unicorn with wings so it becomes a flying pegasus unicorn.' },
}
