import type { Lesson } from '../types'

const trunkRings = Array.from({ length: 8 }, (_, i) => {
  const y = 246 + i * 11
  return `M${334 + (i > 4 ? 6 : 0)} ${y} q8 3 ${16 - (i > 4 ? 2 : 0)} 0`
}).join(' ')
const knees = 'M84 320 q12 4 24 0 M132 324 q12 4 24 0 M228 324 q12 4 24 0 M274 318 q12 4 24 0 M86 334 q10 3 20 0 M276 334 q10 3 20 0'
const skin = 'M110 190 q6 4 12 0 M150 170 q6 4 12 0 M120 236 q6 4 12 0 M168 252 q6 4 12 0 M186 206 q6 4 12 0 M140 214 q6 4 12 0'

export const elephantReal: Lesson = {
  id: 'elephant-real',
  title: { da: 'Naturtro elefant med rynker', en: 'Realistic elephant with wrinkles' },
  category: 'dyr',
  sub: 'landdyr',
  level: 4,
  style: 'naturtro',
  base: 'elephant',
  minutes: 25,
  intro: {
    da: 'Byg videre på din elefant, så den ser ægte ud: rynker på snabel og ben, folder i øret, ru hud og dybe skygger.',
    en: 'Build on your elephant so it looks real: wrinkles on the trunk and legs, folds in the ear, rough skin and deep shadows.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Tegn rynker hen over snablen – tættere og tættere mod spidsen.', en: 'Draw wrinkles across the trunk – closer and closer together towards the tip.' },
      strokes: [{ d: trunkRings, weight: 0.6 }],
    },
    {
      text: { da: 'Tegn rynker ved knæene og folder i øret.', en: 'Draw wrinkles at the knees and folds in the ear.' },
      strokes: [{ d: knees, weight: 0.6 }, { d: 'M250 152 Q226 172 228 212 M244 236 Q228 220 234 196 M262 142 Q244 160 244 186', weight: 0.6 }],
    },
    {
      text: { da: 'Tegn små, korte buer spredt på kroppen – så ser huden ru ud.', en: 'Draw small, short curves spread over the body – then the skin looks rough.' },
      tip: { da: 'Tegn færre streger, hvor lyset rammer, og flere i skyggen.', en: 'Draw fewer lines where the light hits and more in the shadow.' },
      strokes: [{ d: skin, weight: 0.5, opacity: 0.8 }],
    },
    {
      text: {
        da: 'Skyg med lyset fra venstre: under maven, bag øret, de fjerne ben og snablens inderside.',
        en: 'Shade with the light from the left: under the belly, behind the ear, the far legs and the inside of the trunk.',
      },
      strokes: [
        { d: 'M80 270 Q170 316 266 284 L268 300 Q170 330 82 290 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M282 226 Q276 254 250 256 Q290 262 304 236 Z M264 132 Q300 140 300 200 Q296 160 270 140 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M126 290 V350 H162 V296 Z M268 262 V350 H304 V240 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M322 236 Q358 250 354 280 Q352 312 366 324 Q346 316 344 284 Q342 254 322 236 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M50 360 Q200 350 360 360 Q200 370 50 360 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Den elefant ser så ægte ud, at man næsten kan høre den trompetere!', en: 'That elephant looks so real you can almost hear it trumpet!' }],
  nextTip: { da: 'Tegn elefanten, der sprøjter vand op over sig selv med snablen.', en: 'Draw the elephant spraying water over itself with its trunk.' },
}
