import { circle, ellipse, radial, ring } from '../shapes'
import type { Lesson } from '../types'
import { MOTORBIKE } from './motorcycle'

const wheels = [MOTORBIKE.rear, MOTORBIKE.front]
const spokes = wheels.map(([x, y]) => `${circle(x, y, 40)} ${radial(x, y, 8, 40, 16)}`).join(' ')
const fins = 'M184 238 H228 M184 246 H228 M184 254 H228 M184 262 H228'

export const motorcycleDetail: Lesson = {
  id: 'motorcycle-detail',
  title: { da: 'Motorcykel med krom og eger', en: 'Motorbike with chrome and spokes' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 3,
  style: 'detaljer',
  base: 'motorcycle',
  minutes: 20,
  intro: {
    da: 'Byg videre på din motorcykel: eger i hjulene, køleribber på motoren, en kæde, spejle, striber og blank krom.',
    en: 'Build on your motorbike: spokes in the wheels, cooling fins on the engine, a chain, mirrors, stripes and shiny chrome.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en fælg inden i hvert dæk og mange tynde eger fra midten og ud.', en: 'Draw a rim inside each tyre and lots of thin spokes from the middle outwards.' },
      tip: { da: 'Tegn egerne parvis lige over for hinanden – så bliver de jævnt fordelt.', en: 'Draw the spokes in pairs opposite each other – then they are evenly spread.' },
      strokes: [{ d: spokes, weight: 0.5 }],
    },
    {
      text: { da: 'Tegn køleribber på motoren og en kæde fra motoren til baghjulet.', en: 'Draw cooling fins on the engine and a chain from the engine to the back wheel.' },
      strokes: [{ d: fins, weight: 0.7 }, { d: `${circle(196, 262, 7)} M196 255 L110 282 M196 269 L110 298`, weight: 0.8 }],
    },
    {
      text: { da: 'Tegn en bremseskive på forhjulet, et spejl på styret og en baglygte.', en: 'Draw a brake disc on the front wheel, a mirror on the handlebars and a tail light.' },
      strokes: [
        { d: `${circle(296, 290, 18)} ${radial(296, 290, 12, 16, 8)}`, weight: 0.7 },
        { d: `M262 188 L256 166 ${ellipse(254, 160, 8, 5)}` },
        { d: 'M116 214 L104 212 L106 222 L118 222' },
      ],
    },
    {
      text: { da: 'Tegn to racerstriber på tanken og et tal på siden.', en: 'Draw two racing stripes on the tank and a number on the side.' },
      strokes: [{ d: 'M180 216 Q206 200 236 206 M182 222 Q208 206 238 212', weight: 0.8 }, { d: 'M136 232 H148 L140 252 M154 232 H166 L158 252' }],
    },
    {
      text: {
        da: 'Skyg dækkene mørke og tanken i bunden. Lad hvide striber stå på tanken og udstødningen – så skinner kromen. Farvelæg!',
        en: 'Shade the tyres dark and the bottom of the tank. Leave white stripes on the tank and the exhaust – then the chrome shines. Colour it in!',
      },
      strokes: [
        { d: wheels.map(([x, y]) => ring(x, y, MOTORBIKE.tyre, 40)).join(' '), kind: 'shade', tone: 0.6 },
        { d: 'M176 224 H238 Q246 216 242 210 Q210 222 176 218 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M186 204 Q206 194 226 198 Q206 200 186 208 Z M124 277 Q160 281 186 274 L186 277 Q160 284 124 280 Z', kind: 'shade', fill: 'paper' },
        { d: 'M60 346 Q200 336 340 346 Q200 354 60 346 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Den skinner som en rigtig motorcykel fra butikken!', en: 'It shines like a real motorbike from the shop!' }],
  nextTip: { da: 'Tegn en sidevogn på motorcyklen – med en hund i!', en: 'Draw a sidecar on the motorbike – with a dog in it!' },
}
