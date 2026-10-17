import { circle, radial, ring } from '../shapes'
import type { Lesson } from '../types'

const wheels = [120, 280]

export const carDetail: Lesson = {
  id: 'car-detail',
  title: { da: 'Racerbil', en: 'Racing car' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 3,
  style: 'detaljer',
  base: 'car',
  minutes: 15,
  intro: {
    da: 'Byg videre på din bil, så den bliver en racerbil: striber, et startnummer, en spoiler, sportsfælge og flammer fra udstødningen.',
    en: 'Build on your car to make it a racing car: stripes, a race number, a spoiler, sports rims and flames from the exhaust.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn to racerstriber hele vejen langs bilen.', en: 'Draw two racing stripes all the way along the car.' },
      strokes: [{ d: 'M52 254 H348 M52 264 H348', weight: 0.9 }],
    },
    {
      text: { da: 'Tegn en rund plade med et startnummer på fordøren.', en: 'Draw a round plate with a race number on the front door.' },
      strokes: [{ d: circle(262, 230, 14) }, { d: 'M256 224 H268 L260 238' }],
    },
    {
      text: { da: 'Tegn en spoiler bag på bilen.', en: 'Draw a spoiler at the back of the car.' },
      tip: { da: 'Spoileren trykker bilen ned mod vejen, så den kan køre hurtigt i svingene.', en: 'The spoiler presses the car down onto the road so it can go fast round the bends.' },
      strokes: [{ d: 'M56 186 H108 L104 194 H60 Z M74 194 V202 M94 194 V202' }],
    },
    {
      text: { da: 'Tegn sportsfælge med fem eger, og flammer fra udstødningen.', en: 'Draw sports rims with five spokes, and flames from the exhaust.' },
      strokes: [
        { d: wheels.map((x) => `${circle(x, 290, 24)} ${radial(x, 290, 6, 24, 5, -90)}`).join(' ') },
        { d: 'M50 276 L28 268 L38 278 L20 284 L50 284' },
      ],
    },
    {
      text: {
        da: 'Skyg dækkene og ruderne, og lad en hvid stribe stå i ruderne – så ligner de glas. Farvelæg!',
        en: 'Shade the tyres and the windows, and leave a white stripe in the windows – then they look like glass. Colour it in!',
      },
      strokes: [
        { d: wheels.map((x) => ring(x, 290, 36, 24)).join(' '), kind: 'shade', tone: 0.7 },
        { d: 'M156 152 L128 196 H198 V152 Z M212 152 V196 H284 L254 152 Z', kind: 'shade', tone: 0.25 },
        { d: 'M170 156 L150 192 H158 L178 156 Z M226 156 L216 192 H224 L234 156 Z', kind: 'shade', fill: 'paper' },
        { d: 'M60 330 Q200 320 340 330 Q200 340 60 330 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Den racerbil kører først over målstregen!', en: 'That racing car crosses the finish line first!' }],
  nextTip: { da: 'Tegn et målflag og en tribune med publikum.', en: 'Draw a chequered flag and a stand full of spectators.' },
}
