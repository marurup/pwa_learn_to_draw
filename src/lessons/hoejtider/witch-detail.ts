import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const cauldron = `${ellipse(80, 300, 46, 12)} M34 300 Q30 360 80 362 Q130 360 126 300 M50 360 L44 372 M110 360 L116 372`
const bubbles = `${circle(66, 290, 8)} ${circle(88, 284, 10)} ${circle(76, 266, 6)} ${circle(96, 250, 4)}`
const cat = `${ellipse(340, 344, 26, 18)} ${circle(330, 314, 14)} M320 304 L318 290 L328 300 M334 300 L342 290 L342 304 M366 340 Q390 320 378 300`

export const witchDetail: Lesson = {
  id: 'witch-detail',
  title: { da: 'Heks med kat og heksekedel', en: 'Witch with a cat and a cauldron' },
  category: 'hoejtider',
  sub: 'halloween',
  level: 3,
  style: 'detaljer',
  base: 'witch',
  minutes: 18,
  intro: {
    da: 'Byg videre på din heks: et spænde og en lap på hatten, stribede strømper, en boblende heksekedel og en sort kat.',
    en: 'Build on your witch: a buckle and a patch on the hat, striped stockings, a bubbling cauldron and a black cat.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et spænde på hattebåndet og en firkantet lap med sting.', en: 'Draw a buckle on the hat band and a square patch with stitches.' },
      strokes: [{ d: 'M192 100 H208 V114 H192 Z M196 104 H204 V110 H196 Z' }, { d: 'M210 60 L226 62 L224 78 L208 76 Z M212 64 l-4 -2 M222 66 l4 -2 M212 74 l-4 2', weight: 0.7 }],
    },
    {
      text: { da: 'Tegn striber på strømperne og stjerner på kjolen.', en: 'Draw stripes on the stockings and stars on the dress.' },
      strokes: [
        { d: 'M176 336 H186 M176 342 H186 M214 336 H224 M214 342 H224', weight: 0.8 },
        { d: 'M180 250 l3 7 l7 1 l-5 5 l1 7 l-6 -3 l-6 3 l1 -7 l-5 -5 l7 -1 Z M220 286 l2 5 l5 1 l-4 3 l1 5 l-4 -2 l-4 2 l1 -5 l-4 -3 l5 -1 Z' },
      ],
    },
    {
      text: { da: 'Tegn en heksekedel med bobler, der stiger op.', en: 'Draw a cauldron with bubbles rising up.' },
      strokes: [{ d: cauldron }, { d: bubbles }],
    },
    {
      text: { da: 'Tegn en sort kat, der sidder ved heksens fødder.', en: 'Draw a black cat sitting at the witch’s feet.' },
      strokes: [{ d: cat }, { d: `${circle(325, 312, 2)} ${circle(336, 312, 2)}`, kind: 'shade', fill: 'paper' }],
    },
    {
      text: { da: 'Farvelæg katten og kedlen mørke, og skyg kjolens folder. Farvelæg boblerne grønne!', en: 'Colour the cat and the cauldron dark, and shade the folds of the dress. Colour the bubbles green!' },
      strokes: [
        { d: `${ellipse(340, 344, 26, 18)} ${circle(330, 314, 14)} M34 300 Q30 360 80 362 Q130 360 126 300 Z`, kind: 'shade', tone: 0.75 },
        { d: 'M196 196 L176 326 H188 Z M210 200 L232 326 H244 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: bubbles, kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [{ da: 'Hokus pokus – heksen og katten er klar til halloween!', en: 'Hocus pocus – the witch and her cat are ready for Halloween!' }],
  nextTip: { da: 'Tegn heksens hus med et skævt tag og en skorsten, der ryger.', en: 'Draw the witch’s house with a crooked roof and a smoking chimney.' },
}
