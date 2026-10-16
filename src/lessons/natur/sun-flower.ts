import { circle, ellipse, line } from '../shapes'
import type { Lesson } from '../types'

const rays = Array.from({ length: 8 }, (_, i) => {
  const a = (i * 45 * Math.PI) / 180
  const [cx, cy] = [92, 92]
  return line(cx + 52 * Math.cos(a), cy + 52 * Math.sin(a), cx + 72 * Math.cos(a), cy + 72 * Math.sin(a))
}).join(' ')

const petals = Array.from({ length: 6 }, (_, i) => {
  const deg = i * 60 - 90
  const a = (deg * Math.PI) / 180
  return { d: ellipse(265 + 46 * Math.cos(a), 170 + 46 * Math.sin(a), 24, 15, deg) }
})

export const sunFlower: Lesson = {
  id: 'sun-flower',
  title: { da: 'Sol og blomst', en: 'Sun and flower' },
  category: 'natur',
  level: 1,
  minutes: 8,
  intro: {
    da: 'Tegn en glad sol og en blomst med cirkler, ovaler og streger.',
    en: 'Draw a happy sun and a flower with circles, ovals and lines.',
  },
  materials: ['pencil', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en cirkel oppe i hjørnet. Det bliver solen.', en: 'Draw a circle up in the corner. That will be the sun.' },
      strokes: [{ d: circle(92, 92, 44) }],
    },
    {
      text: { da: 'Tegn stråler rundt om solen: korte streger, der peger væk fra den.', en: 'Draw rays around the sun: short lines pointing away from it.' },
      tip: { da: 'Tegn først strålerne op, ned og til siderne – så de skrå imellem.', en: 'First draw the rays up, down and to the sides – then the slanted ones in between.' },
      strokes: [{ d: rays }],
    },
    {
      text: { da: 'Tegn en lille cirkel. Det er midten af blomsten.', en: 'Draw a small circle. That is the middle of the flower.' },
      strokes: [{ d: circle(265, 170, 22) }],
    },
    {
      text: { da: 'Tegn kronblade rundt om midten – de ligner små æg.', en: 'Draw petals around the middle – they look like little eggs.' },
      strokes: petals,
    },
    {
      text: { da: 'Tegn stilken: en lang streg ned fra blomsten.', en: 'Draw the stem: a long line down from the flower.' },
      strokes: [{ d: 'M265 231 Q258 300 265 372' }],
    },
    {
      text: { da: 'Tegn to blade på stilken og græs forneden. Farvelæg, hvis du vil!', en: 'Draw two leaves on the stem and grass at the bottom. Colour it in if you like!' },
      strokes: [
        { d: 'M262 300 Q290 268 326 280 Q300 312 262 300' },
        { d: 'M262 330 Q232 300 200 312 Q226 344 262 330' },
        { d: 'M30 372 L370 372' },
        { d: 'M60 372 L66 356 L72 372 M120 372 L126 354 L132 372 M320 372 L326 356 L332 372' },
      ],
    },
  ],
  praise: [{ da: 'Den blomst ser ud, som om den nyder solen!', en: 'That flower looks like it is enjoying the sun!' }],
  nextTip: { da: 'Tegn en hel blomstereng med blomster i forskellige størrelser.', en: 'Draw a whole meadow of flowers in different sizes.' },
}
