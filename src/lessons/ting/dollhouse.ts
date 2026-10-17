import { circle, rect } from '../shapes'
import type { Lesson } from '../types'

const windows = [rect(118, 182, 40, 30), rect(242, 182, 40, 30), rect(118, 282, 40, 30), rect(242, 282, 40, 30)]

export const dollhouse: Lesson = {
  id: 'dollhouse',
  title: { da: 'Dukkehus', en: 'Dollhouse' },
  category: 'ting',
  sub: 'bygninger',
  level: 2,
  minutes: 10,
  intro: {
    da: 'Et dukkehus, hvor man kan se ind i alle fire værelser. Bagefter kan du sætte møbler og dukker ind!',
    en: 'A dollhouse where you can see into all four rooms. Afterwards you can put furniture and dolls inside!',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en stor firkant til huset.', en: 'Draw a big square for the house.' },
      strokes: [{ d: rect(80, 160, 240, 200) }],
    },
    {
      text: { da: 'Tegn et stort tag som en trekant, og en skorsten.', en: 'Draw a big roof like a triangle, and a chimney.' },
      strokes: [{ d: 'M64 160 L200 60 L336 160 Z' }, { d: 'M270 104 V76 H292 V120' }],
    },
    {
      text: { da: 'Del huset i fire værelser: en vandret streg til gulvet og en lodret streg til væggen.', en: 'Divide the house into four rooms: a flat line for the floor and an upright line for the wall.' },
      tip: { da: 'I et dukkehus mangler forvæggen, så man kan lege inde i værelserne.', en: 'A dollhouse has no front wall, so you can play inside the rooms.' },
      strokes: [{ d: 'M80 260 H320 M200 160 V360' }],
    },
    {
      text: { da: 'Tegn et vindue i hvert værelse og et rundt vindue oppe under taget.', en: 'Draw a window in each room and a round window up under the roof.' },
      strokes: [
        { d: windows.join(' ') },
        { d: 'M138 182 V212 M262 182 V212 M138 282 V312 M262 282 V312' },
        { d: `${circle(200, 120, 18)} M182 120 H218 M200 102 V138` },
      ],
    },
    {
      text: { da: 'Tegn græs foran huset, og farvelæg taget og væggene.', en: 'Draw grass in front of the house, and colour in the roof and the walls.' },
      strokes: [
        { d: 'M30 360 H370 M44 360 l5 -12 l5 12 M340 360 l5 -12 l5 12 M356 360 l5 -12 l5 12' },
        { d: 'M64 160 L200 60 L336 160 Z', kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Sikke et dejligt dukkehus – nu mangler der bare nogen, der bor der!', en: 'What a lovely dollhouse – now it just needs someone to live in it!' }],
  nextTip: { da: 'Tegn dukkehuset med tre etager og en trappe.', en: 'Draw the dollhouse with three floors and a staircase.' },
}
