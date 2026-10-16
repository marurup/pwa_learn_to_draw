import { ellipse, line, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const earL = 'M136 112 L146 46 L186 84'
const whiskersL = [line(152, 176, 96, 166), line(152, 183, 92, 186), line(152, 190, 97, 205)].join(' ')

export const cat: Lesson = {
  id: 'cat',
  title: { da: 'Kat', en: 'Cat' },
  category: 'dyr',
  sub: 'landdyr',
  level: 2,
  minutes: 10,
  intro: {
    da: 'En siddende kat bygget af en oval, to trekanter og en pæreform.',
    en: 'A sitting cat built from an oval, two triangles and a pear shape.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en bred oval til hovedet.', en: 'Draw a wide oval for the head.' },
      strokes: [{ d: ellipse(200, 150, 80, 70) }],
    },
    {
      text: { da: 'Tegn to spidse ører som trekanter oven på hovedet.', en: 'Draw two pointy ears like triangles on top of the head.' },
      tip: { da: 'Ørerne starter på hovedets kant og peger lidt udad.', en: 'The ears start on the edge of the head and point slightly outwards.' },
      strokes: [{ d: earL }, { d: mirrorX(earL, 200) }, { d: 'M151 92 L156 64 L174 82' }, { d: mirrorX('M151 92 L156 64 L174 82', 200) }],
    },
    {
      text: { da: 'Tegn kroppen som en pære under hovedet, og to forpoter forneden.', en: 'Draw the body like a pear under the head, with two front paws at the bottom.' },
      strokes: [
        { d: 'M152 206 Q108 262 114 330 Q120 370 200 370 Q280 370 286 330 Q292 262 248 206' },
        { d: 'M160 370 Q160 338 180 338 Q200 338 200 370' },
        { d: 'M200 370 Q200 338 220 338 Q240 338 240 370' },
      ],
    },
    {
      text: { da: 'Tegn øjne, en lille trekantet næse og en mund, der ligner et W.', en: 'Draw eyes, a small triangle nose and a mouth shaped like a W.' },
      strokes: [
        { d: ellipse(170, 146, 11, 15) },
        { d: ellipse(230, 146, 11, 15) },
        { d: ellipse(171, 147, 4, 10), kind: 'shade', tone: 0.9, id: 'pupilL' },
        { d: ellipse(231, 147, 4, 10), kind: 'shade', tone: 0.9, id: 'pupilR' },
        { d: 'M192 170 L208 170 L200 180 Z' },
        { d: 'M182 190 Q191 200 200 181 Q209 200 218 190' },
      ],
    },
    {
      text: { da: 'Tegn knurhår: tre streger på hver side af næsen.', en: 'Draw whiskers: three lines on each side of the nose.' },
      strokes: [{ d: whiskersL }, { d: mirrorX(whiskersL, 200) }],
    },
    {
      text: { da: 'Tegn en lang, buet hale, der snor sig op ved siden af kroppen.', en: 'Draw a long, curvy tail curling up beside the body.' },
      strokes: [{ d: 'M284 334 C340 334 352 292 342 258 C336 236 346 218 362 216 C376 216 380 230 372 238 C362 246 356 262 362 284 C372 330 340 358 288 356' }],
    },
    {
      text: { da: 'Tegn striber på panden og halen. Farvelæg katten, hvis du vil!', en: 'Draw stripes on the forehead and tail. Colour in the cat if you like!' },
      strokes: [
        { d: 'M200 92 V114 M184 95 L187 115 M216 95 L213 115' },
        { d: 'M345 300 L362 296 M342 270 L356 260 M300 336 L312 352' },
      ],
    },
  ],
  praise: [{ da: 'Mjav! Den kat ser ud, som om den spinder.', en: 'Meow! That cat looks like it is purring.' }],
  nextTip: { da: 'Tegn katten med et garnnøgle eller en mus ved siden af.', en: 'Draw the cat with a ball of yarn or a mouse next to it.' },
}
