import { circle, radial, ring } from '../shapes'
import type { Lesson } from '../types'
import { QUAD } from './quad'

const treads = QUAD.wheels.map(([x, y]) => radial(x, y, QUAD.tyre - 8, QUAD.tyre, 20)).join(' ')
const rims = QUAD.wheels.map(([x, y]) => `${circle(x, y, 26)} ${radial(x, y, 14, 26, 5, -90)}`).join(' ')
const mud = 'M70 280 q6 -6 12 0 q-2 6 -12 0 Z M96 262 q6 -4 10 2 q-4 4 -10 -2 Z M300 268 q6 -6 12 0 q-4 6 -12 0 Z M318 286 q4 -4 8 0 q-2 4 -8 0 Z'

export const quadDetail: Lesson = {
  id: 'quad-detail',
  title: { da: 'ATV på eventyr', en: 'Quad bike on an adventure' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 2,
  style: 'detaljer',
  base: 'quad',
  minutes: 15,
  intro: {
    da: 'Byg videre på din ATV: dækmønster, fælge, et flag, en kasse på bagagebæreren, lys fra lygten og mudder overalt.',
    en: 'Build on your quad bike: tyre treads, rims, a flag, a box on the luggage rack, light from the headlight and mud everywhere.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn dækmønster og fælge med fem eger.', en: 'Draw tyre treads and rims with five spokes.' },
      strokes: [{ d: treads, weight: 1.4 }, { d: rims }],
    },
    {
      text: { da: 'Tegn en kasse på den bageste bagagebærer og et flag på en lang stang.', en: 'Draw a box on the back luggage rack and a flag on a long pole.' },
      strokes: [{ d: 'M80 226 V200 H126 V226 M80 210 H126' }, { d: 'M74 226 V130 L106 140 L74 152' }],
    },
    {
      text: { da: 'Tegn lys, der stråler ud fra forlygten.', en: 'Draw light beaming out of the headlight.' },
      strokes: [{ d: 'M338 250 L392 236 M338 258 L392 272', opacity: 0.6 }],
    },
    {
      text: { da: 'Tegn mudderklatter på skærmene og en sti med græs.', en: 'Draw blobs of mud on the mudguards and a path with grass.' },
      strokes: [{ d: mud }, { d: 'M10 346 H390 M30 346 l5 -10 l5 10 M200 346 l5 -10 l5 10 M360 346 l5 -10 l5 10' }],
    },
    {
      text: { da: 'Skyg dækkene mørke og mudderet, og farvelæg din ATV.', en: 'Shade the tyres and the mud dark, and colour in your quad bike.' },
      strokes: [
        { d: QUAD.wheels.map(([x, y]) => ring(x, y, QUAD.tyre, 26)).join(' '), kind: 'shade', tone: 0.55 },
        { d: mud, kind: 'shade', tone: 0.7 },
        { d: 'M74 130 L106 140 L74 152 Z', kind: 'shade', tone: 0.4 },
      ],
    },
  ],
  praise: [{ da: 'Den ATV har været på et rigtigt mudret eventyr!', en: 'That quad bike has been on a real muddy adventure!' }],
  nextTip: { da: 'Tegn ATV’en, mens den kører gennem en vandpyt, så det sprøjter.', en: 'Draw the quad bike driving through a puddle so it splashes.' },
}
