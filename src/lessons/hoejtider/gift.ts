import { ellipse } from '../shapes'
import type { Lesson } from '../types'

export const GIFT = {
  box: 'M126 210 V350 H274 V210',
  lid: 'M110 170 H290 V210 H110 Z',
  ribbon: 'M188 170 V350 M212 170 V350',
  bow: 'M200 170 Q154 120 146 150 Q150 172 200 170 Q246 120 254 150 Q250 172 200 170',
  knot: ellipse(200, 168, 10, 8),
  tails: 'M194 174 L178 200 M206 174 L222 200',
}

export const gift: Lesson = {
  id: 'gift',
  title: { da: 'Gave', en: 'Present' },
  category: 'hoejtider',
  sub: 'jul',
  level: 1,
  minutes: 6,
  intro: {
    da: 'En flot gave med låg, bånd og en stor sløjfe – til jul eller fødselsdag.',
    en: 'A lovely present with a lid, a ribbon and a big bow – for Christmas or a birthday.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn en firkant til æsken.', en: 'Draw a square for the box.' },
      tip: { da: 'Brug en lineal, hvis du vil have helt lige streger.', en: 'Use a ruler if you want perfectly straight lines.' },
      strokes: [{ d: GIFT.box }],
    },
    {
      text: { da: 'Tegn et låg, der er lidt bredere end æsken.', en: 'Draw a lid that is a little wider than the box.' },
      strokes: [{ d: GIFT.lid }],
    },
    {
      text: { da: 'Tegn et bånd lodret ned midt på gaven.', en: 'Draw a ribbon straight down the middle of the present.' },
      strokes: [{ d: GIFT.ribbon }],
    },
    {
      text: { da: 'Tegn en stor sløjfe med to løkker, en knude og to ender.', en: 'Draw a big bow with two loops, a knot and two ends.' },
      strokes: [{ d: GIFT.bow }, { d: GIFT.knot }, { d: GIFT.tails }],
    },
    {
      text: { da: 'Farvelæg gaven og båndet i to forskellige farver.', en: 'Colour the present and the ribbon in two different colours.' },
      strokes: [
        { d: `${GIFT.box} Z ${GIFT.lid}`, kind: 'shade', tone: 0.3 },
        { d: `M188 170 H212 V350 H188 Z ${GIFT.bow} ${GIFT.knot}`, kind: 'shade', tone: 0.6 },
      ],
    },
  ],
  praise: [{ da: 'Hvem mon får den flotte gave?', en: 'I wonder who gets that lovely present?' }],
  nextTip: { da: 'Tegn en stak gaver i forskellige størrelser.', en: 'Draw a stack of presents in different sizes.' },
}
