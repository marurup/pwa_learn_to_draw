import { circle, ellipse, rect, roundRect } from '../shapes'
import type { Lesson } from '../types'

export const FIGURE = {
  head: roundRect(166, 54, 68, 60, 14),
  eyes: `${ellipse(186, 80, 5, 7)} ${ellipse(214, 80, 5, 7)}`,
  smile: 'M184 96 Q200 108 216 96',
  neck: 'M190 114 V122 M210 114 V122',
  torso: 'M146 122 H254 L262 236 H138 Z',
  arms: `${roundRect(108, 124, 34, 104, 10)} ${roundRect(258, 124, 34, 104, 10)}`,
  hands: `${circle(125, 240, 12)} ${circle(275, 240, 12)}`,
  legs: `${rect(150, 236, 48, 110)} ${rect(202, 236, 48, 110)}`,
  shoes: 'M150 326 H198 M202 326 H250',
}

export const brickFigure: Lesson = {
  id: 'brick-figure',
  title: { da: 'Klodsfigur', en: 'Brick figure' },
  category: 'spil',
  sub: 'spilfigurer',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En glad spilfigur bygget af klodser – med rundt hoved, firkantet krop og et stort smil.',
    en: 'A happy game figure built from bricks – with a round head, a square body and a big smile.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn hovedet som en firkant med runde hjørner, og giv det øjne og et smil.', en: 'Draw the head as a square with round corners, and give it eyes and a smile.' },
      strokes: [{ d: FIGURE.head, id: 'head' }, { d: FIGURE.eyes, kind: 'shade', tone: 0.9 }, { d: FIGURE.smile }],
    },
    {
      text: { da: 'Tegn en kort hals og kroppen – lidt bredere forneden.', en: 'Draw a short neck and the body – a little wider at the bottom.' },
      strokes: [{ d: FIGURE.neck }, { d: FIGURE.torso }],
    },
    {
      text: { da: 'Tegn arme på hver side og runde hænder.', en: 'Draw arms on each side and round hands.' },
      strokes: [{ d: FIGURE.arms }, { d: FIGURE.hands }],
    },
    {
      text: { da: 'Tegn to firkantede ben og en streg for skoene.', en: 'Draw two square legs and a line for the shoes.' },
      strokes: [{ d: FIGURE.legs }, { d: FIGURE.shoes }],
    },
    {
      text: { da: 'Farvelæg figuren – vælg selv tøjets farver!', en: 'Colour in the figure – you choose the colours of the clothes!' },
      strokes: [
        { d: `${FIGURE.head} ${FIGURE.hands}`, kind: 'shade', tone: 0.15 },
        { d: `${FIGURE.torso} ${FIGURE.arms}`, kind: 'shade', tone: 0.4 },
        { d: rect(150, 236, 100, 90), kind: 'shade', tone: 0.3 },
        { d: rect(150, 326, 100, 20), kind: 'shade', tone: 0.7 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en glad klodsfigur – den er klar til at spille!', en: 'What a happy brick figure – ready to play!' }],
  nextTip: { da: 'Giv figuren en kasket og et par seje solbriller.', en: 'Give the figure a cap and cool sunglasses.' },
}
