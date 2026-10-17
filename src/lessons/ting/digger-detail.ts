import { circle, hatch } from '../shapes'
import type { Lesson } from '../types'
import { DIGGER } from './digger'

// Track links: short upright lines along the top and bottom of the track.
const links = Array.from({ length: 13 }, (_, i) => {
  const x = 96 + i * 12
  return `M${x} 300 V306 M${x} 346 V352`
}).join(' ')
const dirtFalling = [
  [352, 290],
  [360, 304],
  [348, 316],
  [366, 322],
  [356, 336],
]
  .map(([x, y]) => circle(x, y, 2.5))
  .join(' ')
const cone = (x: number) => `M${x - 12} 352 L${x - 4} 318 H${x + 4} L${x + 12} 352 Z M${x - 8} 338 H${x + 8}`

export const diggerDetail: Lesson = {
  id: 'digger-detail',
  title: { da: 'Gravemaskine på byggepladsen', en: 'Digger on the building site' },
  category: 'ting',
  sub: 'maskiner',
  level: 3,
  style: 'detaljer',
  base: 'digger',
  minutes: 20,
  intro: {
    da: 'Byg videre på din gravemaskine: led på larvefødderne, hydraulik-stempler på armen, tænder på skovlen, advarselsstriber og en byggeplads med kegler.',
    en: 'Build on your digger: links on the tracks, hydraulic pistons on the arm, teeth on the bucket, warning stripes and a building site with cones.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn små streger langs larvefødderne – det er leddene, der kører rundt.', en: 'Draw little lines along the tracks – these are the links that go round.' },
      strokes: [{ d: links, weight: 0.8 }],
    },
    {
      text: {
        da: 'Tegn de hydrauliske stempler på armen: en tyk og en tynd stang, der skubber armen op.',
        en: 'Draw the hydraulic pistons on the arm: a thick and a thin rod that push the arm up.',
      },
      tip: { da: 'Stemplerne er gravemaskinens muskler.', en: 'The pistons are the digger’s muscles.' },
      strokes: [{ d: 'M236 280 L270 210 M244 284 L278 214 M270 210 L288 172 M274 212 L292 174 M306 150 L336 196 M312 146 L342 192' }],
    },
    {
      text: { da: 'Tegn tænder på skovlen og jord, der drysser ud af den.', en: 'Draw teeth on the bucket and dirt crumbling out of it.' },
      strokes: [{ d: 'M362 278 L366 288 L370 276 M370 268 L378 274 L376 262' }, { d: dirtFalling, kind: 'shade', tone: 0.6 }],
    },
    {
      text: { da: 'Tegn skrå advarselsstriber bag på maskinen og en lampe på taget.', en: 'Draw slanted warning stripes on the back of the machine and a light on the roof.' },
      strokes: [
        { d: 'M96 256 H128 V296 H96 Z' },
        { d: hatch(96, 256, 32, 40, 10, 45), kind: 'shade', tone: 0.7 },
        { d: 'M212 170 V160 H224 V170' },
      ],
    },
    {
      text: { da: 'Tegn kegler og et skilt, så det bliver en rigtig byggeplads.', en: 'Draw cones and a sign so it becomes a real building site.' },
      strokes: [{ d: `${cone(40)} ${cone(286)}` }, { d: 'M30 290 V352 M14 266 L46 266 L30 290 Z M30 274 V280 M30 284 V285' }],
    },
    {
      text: { da: 'Skyg jorden og under maskinen, og farvelæg den gul og sort.', en: 'Shade the dirt and under the machine, and colour it yellow and black.' },
      strokes: [
        { d: 'M300 352 Q330 300 380 352 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: DIGGER.track, kind: 'shade', tone: 0.45 },
        { d: 'M60 356 Q170 350 280 356 Q170 362 60 356 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Byggepladsen er klar – gravemaskinen kan gå i gang!', en: 'The building site is ready – the digger can get to work!' }],
  nextTip: { da: 'Tegn en kran, der løfter noget tungt, ved siden af gravemaskinen.', en: 'Draw a crane lifting something heavy next to the digger.' },
}
