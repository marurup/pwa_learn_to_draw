import { circle } from '../shapes'
import type { Lesson, Stroke } from '../types'

export const SUNFLOWER = { cx: 200, cy: 150, r: 46, petalLength: 50, petals: 16 }

/** A pointed petal from the edge of the centre, pointing out at `deg`. */
export function sunflowerPetal(deg: number, inner = SUNFLOWER.r, length = SUNFLOWER.petalLength, half = 10): string {
  const { cx, cy } = SUNFLOWER
  const p = (r: number, a: number) => {
    const rad = (a * Math.PI) / 180
    return `${(cx + r * Math.cos(rad)).toFixed(1)} ${(cy + r * Math.sin(rad)).toFixed(1)}`
  }
  const tip = inner + length
  return `M${p(inner, deg - half)} Q${p(inner + length * 0.6, deg - half - 6)} ${p(tip, deg)} Q${p(inner + length * 0.6, deg + half + 6)} ${p(inner, deg + half)}`
}

const angles = Array.from({ length: SUNFLOWER.petals }, (_, i) => -90 + (i * 360) / SUNFLOWER.petals)
const cardinal = [-90, 0, 90, 180]
const petal = (deg: number): Stroke => ({ d: sunflowerPetal(deg) })

export const sunflower: Lesson = {
  id: 'sunflower',
  title: { da: 'Solsikke', en: 'Sunflower' },
  category: 'natur',
  sub: 'blomster',
  level: 2,
  minutes: 10,
  intro: {
    da: 'En stor solsikke med en rund midte, spidse kronblade og store blade.',
    en: 'A big sunflower with a round centre, pointed petals and big leaves.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en stor cirkel højt oppe. Det bliver blomstens midte.', en: 'Draw a big circle high up. That will be the middle of the flower.' },
      strokes: [{ d: circle(SUNFLOWER.cx, SUNFLOWER.cy, SUNFLOWER.r) }],
    },
    {
      text: { da: 'Tegn fire spidse kronblade: et op, et ned og et til hver side.', en: 'Draw four pointed petals: one up, one down and one to each side.' },
      tip: { da: 'Når de fire første sidder rigtigt, er det nemt at fylde resten ind imellem.', en: 'Once the first four are in place, it is easy to fill in the rest between them.' },
      strokes: cardinal.map(petal),
    },
    {
      text: { da: 'Fyld kronblade ind imellem, hele vejen rundt.', en: 'Fill in petals between them, all the way round.' },
      strokes: angles.filter((a) => !cardinal.some((c) => Math.abs(c - a) < 1)).map(petal),
    },
    {
      text: { da: 'Tegn en lille cirkel inde i midten.', en: 'Draw a small circle inside the middle.' },
      strokes: [{ d: circle(SUNFLOWER.cx, SUNFLOWER.cy, 30) }],
    },
    {
      text: { da: 'Tegn en tyk stilk ned fra blomsten.', en: 'Draw a thick stem down from the flower.' },
      strokes: [{ d: 'M194 244 Q188 310 194 380' }, { d: 'M206 244 Q202 310 208 380' }],
    },
    {
      text: { da: 'Tegn to store blade på stilken – et på hver side. Farvelæg solsikken gul og brun!', en: 'Draw two big leaves on the stem – one on each side. Colour the sunflower yellow and brown!' },
      strokes: [
        { d: 'M193 326 Q150 324 120 292 Q160 270 193 304', id: 'leafL' },
        { d: 'M205 300 Q246 272 288 284 Q262 324 206 324', id: 'leafR' },
      ],
    },
  ],
  praise: [{ da: 'Din solsikke stråler som en lille sol!', en: 'Your sunflower is shining like a little sun!' }],
  nextTip: { da: 'Tegn en hel række solsikker, der vender mod solen.', en: 'Draw a whole row of sunflowers turning towards the sun.' },
}
