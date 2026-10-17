import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'
import { braid } from './ice-princess'

const armL = 'M178 140 Q160 172 156 210'
const bootL = 'M178 330 H194 V360 H170 Q168 348 178 342 Z'

export const SISTER = {
  head: circle(200, 100, 30),
  hair: 'M170 104 Q166 62 200 62 Q234 62 230 104 M200 64 V78',
  braids: `${braid(176, 114, 166, 196, 4, 9)} ${braid(224, 114, 234, 196, 4, 9)}`,
  bodice: 'M178 136 H222 L228 200 H172 Z',
  lacing: 'M194 144 L206 152 L194 160 L206 168 L194 176 L206 184',
  arms: `${armL} ${mirrorX(armL, 200)}`,
  hands: `${circle(156, 216, 7)} ${circle(244, 216, 7)}`,
  skirt: 'M172 200 L146 300 H254 L228 200',
  legs: 'M186 300 V330 M214 300 V330',
  boots: `${bootL} ${mirrorX(bootL, 200)}`,
}

export const princessSister: Lesson = {
  id: 'princess-sister',
  title: { da: 'Prinsessesøster', en: 'Princess sister' },
  category: 'fantasi',
  sub: 'isriget',
  level: 2,
  minutes: 14,
  intro: {
    da: 'Isprinsessens modige lillesøster med to fletninger, fregner, snørelivsvest og støvler.',
    en: 'The ice princess’s brave little sister with two braids, freckles, a laced vest and boots.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn hovedet, håret med en midterskilning, og et glad ansigt med fregner.', en: 'Draw the head, the hair with a centre parting, and a happy face with freckles.' },
      strokes: [
        { d: SISTER.head },
        { d: SISTER.hair },
        { d: `${circle(189, 102, 3)} ${circle(211, 102, 3)}`, kind: 'shade', tone: 0.9 },
        { d: 'M190 114 Q200 122 210 114' },
        { d: [circle(184, 110, 1), circle(180, 107, 1), circle(216, 110, 1), circle(220, 107, 1)].join(' '), kind: 'shade', tone: 0.5 },
      ],
    },
    {
      text: { da: 'Tegn to fletninger, der hænger ned foran skuldrene.', en: 'Draw two braids hanging down in front of her shoulders.' },
      strokes: [{ d: SISTER.braids }],
    },
    {
      text: { da: 'Tegn overdelen med en snøre ned ad midten.', en: 'Draw the top with a lace down the middle.' },
      strokes: [{ d: 'M192 128 V136 M208 128 V136' }, { d: SISTER.bodice }, { d: SISTER.lacing, weight: 0.7 }],
    },
    {
      text: { da: 'Tegn armene og et skørt, der går til knæene.', en: 'Draw the arms and a skirt that goes down to the knees.' },
      strokes: [{ d: SISTER.arms }, { d: SISTER.hands }, { d: SISTER.skirt }],
    },
    {
      text: { da: 'Tegn ben og støvler.', en: 'Draw legs and boots.' },
      strokes: [{ d: SISTER.legs }, { d: SISTER.boots }],
    },
    {
      text: { da: 'Farvelæg håret rødbrunt, vesten mørk og skørtet i en varm farve.', en: 'Colour the hair reddish brown, the vest dark and the skirt a warm colour.' },
      strokes: [
        { d: `${SISTER.braids} M170 104 Q166 62 200 62 Q234 62 230 104 Q200 76 170 104 Z`, kind: 'shade', tone: 0.45 },
        { d: SISTER.bodice, kind: 'shade', tone: 0.6 },
        { d: `${SISTER.skirt} Z`, kind: 'shade', tone: 0.3 },
        { d: SISTER.boots, kind: 'shade', tone: 0.7 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en modig og glad prinsesse!', en: 'What a brave and cheerful princess!' }],
  nextTip: { da: 'Tegn de to prinsesser, der holder hinanden i hånden.', en: 'Draw the two princesses holding hands.' },
}
