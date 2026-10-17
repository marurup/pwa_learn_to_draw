import { circle, goldenSpiral, line, ring } from '../shapes'
import type { Lesson } from '../types'
import { SUNFLOWER, sunflowerPetal } from './sunflower'

const { cx, cy, petals } = SUNFLOWER
const angles = Array.from({ length: petals }, (_, i) => -90 + (i * 360) / petals)
const between = angles.map((a) => a + 180 / petals)

const seeds = goldenSpiral(cx, cy, 27, 110)
  .map(([x, y]) => circle(x, y, 1.4))
  .join(' ')
const stamenRing = goldenSpiral(cx, cy, 43, 260)
  .filter(([x, y]) => Math.hypot(x - cx, y - cy) > 32)
  .map(([x, y]) => circle(x, y, 1.1))
  .join(' ')
const petalLines = angles
  .map((deg) => {
    const a = (deg * Math.PI) / 180
    return line(cx + 52 * Math.cos(a), cy + 52 * Math.sin(a), cx + 86 * Math.cos(a), cy + 86 * Math.sin(a))
  })
  .join(' ')

export const sunflowerDetail: Lesson = {
  id: 'sunflower-detail',
  title: { da: 'Solsikke med detaljer', en: 'Detailed sunflower' },
  category: 'natur',
  sub: 'blomster',
  level: 3,
  style: 'detaljer',
  base: 'sunflower',
  minutes: 20,
  intro: {
    da: 'Byg videre på din solsikke: frø i spiraler, kronblade i to lag, bladårer og skygger.',
    en: 'Build on your sunflower: seeds in spirals, two layers of petals, leaf veins and shadows.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Prik frøene i midten. De sidder i spiraler, der drejer begge veje – start i midten og arbejd udad.',
        en: 'Dot the seeds in the middle. They sit in spirals turning both ways – start in the centre and work outwards.',
      },
      tip: {
        da: 'Små prikker tæt sammen i midten, lidt større længere ude.',
        en: 'Small dots close together in the middle, a little bigger further out.',
      },
      strokes: [{ d: seeds, kind: 'shade', tone: 0.85 }],
    },
    {
      text: {
        da: 'Lav en mørk kant mellem frøene og kronbladene med mange små prikker.',
        en: 'Make a dark border between the seeds and the petals with lots of tiny dots.',
      },
      strokes: [{ d: stamenRing, kind: 'shade', tone: 0.9 }],
    },
    {
      text: {
        da: 'Tegn en let streg midt i hvert kronblad – fra midten og ud mod spidsen.',
        en: 'Draw a light line down the middle of each petal – from the centre out towards the tip.',
      },
      strokes: [{ d: petalLines, weight: 0.5 }],
    },
    {
      text: {
        da: 'Tegn en række kronblade bagved: kun spidserne, der kigger frem mellem de forreste.',
        en: 'Draw a row of petals behind: only the tips peeking out between the front ones.',
      },
      tip: {
        da: 'Ting, der ligger bagved, bliver delvist gemt. Det giver dybde.',
        en: 'Things behind are partly hidden. That gives depth.',
      },
      strokes: between.map((deg) => ({ d: sunflowerPetal(deg, 74, 26, 6) })),
    },
    {
      text: {
        da: 'Tegn bladårer: en midterlinje i hvert blad og små årer, der går skråt ud mod kanten.',
        en: 'Draw leaf veins: a middle line in each leaf and small veins going out at a slant towards the edge.',
      },
      strokes: [
        { d: 'M192 320 Q156 306 124 293', weight: 0.7 },
        { d: 'M178 314 l-6 -12 M162 308 l-6 -12 M146 302 l-4 -10 M176 315 l-6 10 M160 309 l-8 8', weight: 0.5 },
        { d: 'M207 312 Q248 296 284 285', weight: 0.7 },
        { d: 'M224 306 l6 -12 M242 300 l6 -11 M260 294 l5 -9 M226 306 l6 10 M244 300 l6 9', weight: 0.5 },
      ],
    },
    {
      text: {
        da: 'Skyg let: tæt ved midten under kronbladene, nederst i midten, på stilkens ene side og på bladenes underside.',
        en: 'Shade lightly: close to the centre under the petals, at the bottom of the middle, on one side of the stem and under the leaves.',
      },
      tip: {
        da: 'Gnid skyggen ud med fingeren, så den bliver blød.',
        en: 'Smudge the shadow with your finger so it becomes soft.',
      },
      strokes: [
        { d: ring(cx, cy, 60, 47), kind: 'shade', fill: 'soft', tone: 0.2 },
        { d: `M${cx - 40} ${cy + 18} Q${cx} ${cy + 52} ${cx + 40} ${cy + 18} Q${cx} ${cy + 36} ${cx - 40} ${cy + 18} Z`, kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M202 250 Q200 312 204 376 L206 376 Q202 312 204 250 Z', kind: 'shade', fill: 'soft', tone: 0.5 },
        { d: 'M190 322 Q154 320 128 296 Q160 314 190 314 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M208 318 Q250 318 280 290 Q250 306 208 310 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [
    { da: 'Frø i spiraler og kronblade i to lag – det ligner en rigtig solsikke!', en: 'Seeds in spirals and petals in two layers – it looks like a real sunflower!' },
  ],
  nextTip: {
    da: 'Find en rigtig blomst, og se efter: Hvordan sidder kronbladene, og hvor er skyggerne?',
    en: 'Find a real flower and look closely: how do the petals sit, and where are the shadows?',
  },
}
