import { arc, circle, rect } from '../shapes'
import type { Lesson } from '../types'

export const TRACTOR = {
  rear: [130, 290, 64] as const,
  front: [304, 316, 38] as const,
  hood: 'M190 236 H316 Q332 236 332 252 V286 H190',
  cab: 'M100 226 V140 H190 V236',
}

export const tractor: Lesson = {
  id: 'tractor',
  title: { da: 'Traktor', en: 'Tractor' },
  category: 'ting',
  sub: 'maskiner',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En traktor med et kæmpe baghjul, et lille forhjul og et førerhus med vindue.',
    en: 'A tractor with a giant back wheel, a small front wheel and a cab with a window.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et stort hjul bagerst.', en: 'Draw a big wheel at the back.' },
      strokes: [{ d: `${circle(TRACTOR.rear[0], TRACTOR.rear[1], TRACTOR.rear[2])} ${circle(TRACTOR.rear[0], TRACTOR.rear[1], 18)}` }],
    },
    {
      text: { da: 'Tegn et lille hjul forrest.', en: 'Draw a small wheel at the front.' },
      strokes: [{ d: `${circle(TRACTOR.front[0], TRACTOR.front[1], TRACTOR.front[2])} ${circle(TRACTOR.front[0], TRACTOR.front[1], 10)}` }],
    },
    {
      text: { da: 'Tegn motorhjelmen mellem hjulene.', en: 'Draw the bonnet between the wheels.' },
      strokes: [{ d: TRACTOR.hood }],
    },
    {
      text: { da: 'Tegn førerhuset med et tag og et stort vindue.', en: 'Draw the cab with a roof and a big window.' },
      strokes: [{ d: TRACTOR.cab }, { d: 'M92 140 H198' }, { d: rect(112, 152, 66, 48) }],
    },
    {
      text: { da: 'Tegn en skærm over baghjulet og et udstødningsrør med røg.', en: 'Draw a mudguard over the back wheel and an exhaust pipe with smoke.' },
      strokes: [{ d: arc(130, 290, 74, 190, 350) }, { d: 'M286 236 V196 H296 V236' }, { d: `${circle(296, 182, 7)} ${circle(306, 166, 9)} ${circle(320, 148, 11)}` }],
    },
    {
      text: { da: 'Tegn marken, og farvelæg din traktor – rød, grøn eller blå?', en: 'Draw the field, and colour your tractor – red, green or blue?' },
      strokes: [
        { d: 'M20 354 H380' },
        { d: `${TRACTOR.hood} Z ${TRACTOR.cab} Z`, kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Den traktor er klar til at arbejde på marken!', en: 'That tractor is ready to work in the field!' }],
  nextTip: { da: 'Tegn en ko eller en gris, der kigger på traktoren.', en: 'Draw a cow or a pig looking at the tractor.' },
}
