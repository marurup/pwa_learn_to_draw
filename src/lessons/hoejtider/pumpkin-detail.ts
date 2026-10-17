import { circle } from '../shapes'
import type { Lesson } from '../types'
import { pumpkinShape } from './pumpkin'

const face = 'M150 214 L172 186 L188 216 Z M212 216 L228 186 L250 214 Z M192 240 L200 226 L208 240 Z M140 262 Q200 300 260 262 L248 262 L240 274 L230 266 L220 280 L210 268 L200 282 L190 268 L180 280 L170 266 L160 274 L152 262 Z'

/** A small bat with spread wings, its body at (x, y); s scales it. */
export const bat = (x: number, y: number, s: number) => {
  const p = (px: number, py: number) => `${x + px * s} ${y + py * s}`
  return (
    `M${p(-3, -9)} L${p(-1, -5)} L${p(1, -5)} L${p(3, -9)} L${p(5, -3)} Q${p(14, -12)} ${p(30, -10)} ` +
    `Q${p(27, -4)} ${p(24, 2)} Q${p(20, -1)} ${p(16, 4)} Q${p(12, 1)} ${p(6, 6)} Q${p(3, 10)} ${p(0, 10)} ` +
    `Q${p(-3, 10)} ${p(-6, 6)} Q${p(-12, 1)} ${p(-16, 4)} Q${p(-20, -1)} ${p(-24, 2)} Q${p(-27, -4)} ${p(-30, -10)} ` +
    `Q${p(-14, -12)} ${p(-5, -3)} Z`
  )
}

export const pumpkinDetail: Lesson = {
  id: 'pumpkin-detail',
  title: { da: 'Lygtegræskar', en: 'Jack-o’-lantern' },
  category: 'hoejtider',
  sub: 'halloween',
  level: 2,
  style: 'detaljer',
  base: 'pumpkin',
  minutes: 12,
  intro: {
    da: 'Byg videre på dit græskar, så det bliver et lygtegræskar: et uhyggeligt ansigt, der lyser, riller, flagermus og en fuldmåne.',
    en: 'Build on your pumpkin to make a jack-o’-lantern: a spooky glowing face, grooves, bats and a full moon.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et ansigt: trekant-øjne, en trekant-næse og en mund med takker.', en: 'Draw a face: triangle eyes, a triangle nose and a mouth with jagged teeth.' },
      strokes: [{ d: face }],
    },
    {
      text: { da: 'Tegn riller i græskarret, der buer fra stilken og ned.', en: 'Draw grooves in the pumpkin curving down from the stalk.' },
      strokes: [{ d: 'M132 186 Q114 244 132 302 M268 186 Q286 244 268 302', weight: 0.7 }],
    },
    {
      text: { da: 'Tegn en stor fuldmåne bag græskarret og to flagermus.', en: 'Draw a big full moon behind the pumpkin and two bats.' },
      strokes: [{ d: circle(322, 82, 42) }, { d: `${bat(90, 90, 1.4)} ${bat(150, 50, 1)}` }],
    },
    {
      text: {
        da: 'Farvelæg græskarret, men lad ansigtet være lyst – det er lyset fra lyset indeni. Skyg siderne af græskarret.',
        en: 'Colour in the pumpkin, but keep the face light – that is the light from the candle inside. Shade the sides of the pumpkin.',
      },
      tip: { da: 'Farvelæg ansigtet gult, så det ser ud til at lyse.', en: 'Colour the face yellow so it looks like it is glowing.' },
      strokes: [
        { d: pumpkinShape, kind: 'shade', tone: 0.3 },
        { d: 'M98 210 Q90 244 100 280 Q120 300 140 312 Q100 270 106 220 Z M302 210 Q310 244 300 280 Q280 300 260 312 Q300 270 294 220 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: face, kind: 'shade', fill: 'paper' },
        { d: `${bat(90, 90, 1.4)} ${bat(150, 50, 1)}`, kind: 'shade', tone: 0.85 },
      ],
    },
  ],
  praise: [{ da: 'Uhh, hvor er det uhyggeligt flot!', en: 'Ooh, that is spookily good!' }],
  nextTip: { da: 'Find på dit eget græskaransigt – sødt, sjovt eller rigtig uhyggeligt.', en: 'Make up your own pumpkin face – cute, funny or really spooky.' },
}
