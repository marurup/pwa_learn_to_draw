import { ellipse, ellipseArc, rect } from '../shapes'
import type { Lesson } from '../types'

/** The front edge of the cake's top, at x. */
const frontEdge = (x: number) => 200 + 22 * Math.sqrt(Math.max(0, 1 - ((x - 200) / 100) ** 2))
const drips =
  `M100 210 ` +
  Array.from({ length: 10 }, (_, i) => {
    const x = 100 + (i + 1) * 20
    const deep = i % 2 === 0
    return `Q${x - 10} ${frontEdge(x - 10) + (deep ? 34 : 8)} ${x} ${frontEdge(x) + 10}`
  }).join(' ')
const candle = (x: number, base: number) => `${rect(x - 6, base - 44, 12, 44)} M${x} ${base - 44} V${base - 50}`
const flame = (x: number, top: number) => `M${x} ${top} Q${x + 9} ${top - 12} ${x} ${top - 26} Q${x - 9} ${top - 12} ${x} ${top} Z`

export const CAKE = {
  top: ellipse(200, 200, 100, 22),
  sides: `M100 200 V320 M300 200 V320 ${ellipseArc(200, 320, 100, 22, 0, 180)}`,
  shape: `M100 200 V320 A100 22 0 0 0 300 320 V200 Z`,
  drips,
  icing: `M100 200 V210 ${drips.slice(8)} L300 200 A100 22 0 0 0 100 200 Z`,
  candles: `${candle(160, 206)} ${candle(200, 212)} ${candle(240, 206)}`,
  flames: `${flame(160, 156)} ${flame(200, 162)} ${flame(240, 156)}`,
  plate: 'M70 330 Q200 376 330 330 M70 330 Q76 318 100 316 M330 330 Q324 318 300 316',
}

export const birthdayCake: Lesson = {
  id: 'birthday-cake',
  title: { da: 'Fødselsdagskage', en: 'Birthday cake' },
  category: 'hoejtider',
  sub: 'foedselsdag',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En stor fødselsdagskage med glasur, der løber ned ad siden, og lys, der brænder.',
    en: 'A big birthday cake with icing running down the sides and candles burning.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en bred oval til toppen af kagen.', en: 'Draw a wide oval for the top of the cake.' },
      strokes: [{ d: CAKE.top }],
    },
    {
      text: { da: 'Tegn to lige sider ned og en bue forneden.', en: 'Draw two straight sides down and a curve at the bottom.' },
      strokes: [{ d: CAKE.sides }],
    },
    {
      text: { da: 'Tegn glasur, der drypper ned ad kagen.', en: 'Draw icing dripping down the cake.' },
      strokes: [{ d: CAKE.drips }],
    },
    {
      text: { da: 'Tegn tre lys på toppen.', en: 'Draw three candles on top.' },
      tip: { da: 'Hvor gammel bliver du? Tegn lige så mange lys!', en: 'How old are you turning? Draw that many candles!' },
      strokes: [{ d: CAKE.candles }],
    },
    {
      text: { da: 'Tegn små flammer som dråber på lysene og en tallerken under kagen.', en: 'Draw little flames like drops on the candles and a plate under the cake.' },
      strokes: [{ d: CAKE.flames }, { d: CAKE.plate }],
    },
    {
      text: { da: 'Farvelæg kagen, glasuren og lysene i dine yndlingsfarver.', en: 'Colour the cake, the icing and the candles in your favourite colours.' },
      strokes: [
        { d: CAKE.shape, kind: 'shade', tone: 0.35 },
        { d: CAKE.icing, kind: 'shade', fill: 'paper' },
        { d: CAKE.candles, kind: 'shade', tone: 0.3 },
        { d: CAKE.flames, kind: 'shade', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Tillykke med fødselsdagen! Husk at ønske, når du puster lysene ud.', en: 'Happy birthday! Remember to make a wish when you blow out the candles.' }],
  nextTip: { da: 'Tegn en kage med to etager.', en: 'Draw a cake with two layers.' },
}
