import { circle } from '../shapes'
import type { Lesson } from '../types'
import { SEAHORSE } from './seahorse'

// Little spikes along the back, pointing outwards.
const spikes = [
  [252, 132],
  [260, 152],
  [262, 226],
  [252, 246],
  [238, 264],
]
  .map(([x, y]) => `M${x} ${y} l9 2 l-6 6`)
  .join(' ')
const dots = [
  [228, 140],
  [236, 160],
  [232, 196],
  [240, 214],
  [222, 228],
  [212, 124],
]
  .map(([x, y]) => circle(x, y, 3))
  .join(' ')

export const seahorseDetail: Lesson = {
  id: 'seahorse-detail',
  title: { da: 'Søhest i tangen', en: 'Seahorse in the seaweed' },
  category: 'dyr',
  sub: 'fisk',
  level: 2,
  style: 'detaljer',
  base: 'seahorse',
  minutes: 12,
  intro: {
    da: 'Byg videre på din søhest: små takker på ryggen, prikker, striber i finnen, glans i øjet – og et tangstrå, den holder fast i med halen.',
    en: 'Build on your seahorse: little spikes on its back, dots, lines in the fin, a shiny eye – and a stalk of seaweed it holds with its tail.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Lad en lille prik være hvid i øjet, og tegn små takker langs ryggen.', en: 'Leave a little white dot in the eye, and draw small spikes along the back.' },
      strokes: [{ d: circle(212, 93, 1.5), kind: 'shade', fill: 'paper' }, { d: spikes }],
    },
    {
      text: { da: 'Tegn streger i rygfinnen og prikker på kroppen.', en: 'Draw lines in the back fin and dots on the body.' },
      strokes: [{ d: 'M262 184 L282 186 M262 192 L284 196 M262 200 L278 204', weight: 0.6 }, { d: dots }],
    },
    {
      text: { da: 'Tegn et tangstrå, der går gennem halens krølle – søhesten holder fast i det.', en: 'Draw a stalk of seaweed going through the curl of the tail – the seahorse is holding on to it.' },
      tip: { da: 'Søheste holder fast i tang med halen, så strømmen ikke tager dem.', en: 'Seahorses hold on to seaweed with their tails so the current doesn’t carry them away.' },
      strokes: [{ d: 'M182 396 Q176 366 182 336 M194 396 Q190 368 194 340 M182 368 Q156 350 148 318 Q168 336 184 352' }],
    },
    {
      text: { da: 'Tegn bobler fra snuden og et par små fisk i baggrunden.', en: 'Draw bubbles from the snout and a couple of little fish in the background.' },
      strokes: [
        { d: `${circle(126, 90, 5)} ${circle(116, 70, 4)} ${circle(124, 50, 3)}` },
        { d: 'M300 280 Q316 268 332 280 Q316 292 300 280 Z M300 280 L290 272 V288 Z M320 320 Q332 312 344 320 Q332 328 320 320 Z M320 320 L312 314 V326 Z', weight: 0.8 },
      ],
    },
    {
      text: { da: 'Skyg ryggen let og under hovedet. Farvelæg – søheste kan være gule, orange eller lilla!', en: 'Shade the back lightly and under the head. Colour it in – seahorses can be yellow, orange or purple!' },
      strokes: [
        { d: `${SEAHORSE.body.split(' M')[0]} Q236 180 232 120 Z`, kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M186 116 Q206 126 236 118 Q214 134 190 128 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Din søhest ser helt ægte ud i tangen!', en: 'Your seahorse looks really real in the seaweed!' }],
  nextTip: { da: 'Tegn en hel lille undervandsverden med koraller omkring søhesten.', en: 'Draw a whole little underwater world with corals around the seahorse.' },
}
