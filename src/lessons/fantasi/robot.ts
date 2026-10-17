import { circle, mirrorX, rect, roundRect } from '../shapes'
import type { Lesson } from '../types'

const handL = 'M100 262 Q96 290 110 292 Q124 290 120 262'

export const robot: Lesson = {
  id: 'robot',
  title: { da: 'Robot', en: 'Robot' },
  category: 'fantasi',
  sub: 'eventyr',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En venlig robot bygget af firkanter og cirkler. Du bestemmer selv, hvilke knapper den skal have!',
    en: 'A friendly robot built from squares and circles. You decide which buttons it gets!',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en firkant med runde hjørner til hovedet, og en antenne med en kugle på toppen.', en: 'Draw a square with round corners for the head, and an antenna with a ball on top.' },
      strokes: [{ d: roundRect(140, 70, 120, 84, 14) }, { d: `M200 70 V42 ${circle(200, 34, 8)}` }],
    },
    {
      text: { da: 'Tegn en lille hals og en stor firkant til kroppen.', en: 'Draw a little neck and a big square for the body.' },
      strokes: [{ d: rect(186, 154, 28, 12) }, { d: roundRect(124, 166, 152, 128, 10) }],
    },
    {
      text: { da: 'Tegn to arme som lange firkanter, med hænder som et U forneden.', en: 'Draw two arms like long rectangles, with hands like a U at the bottom.' },
      strokes: [
        { d: roundRect(96, 176, 28, 84, 12) },
        { d: roundRect(276, 176, 28, 84, 12) },
        { d: handL },
        { d: mirrorX(handL, 200) },
      ],
    },
    {
      text: { da: 'Tegn to ben og to store fødder.', en: 'Draw two legs and two big feet.' },
      strokes: [
        { d: `${rect(150, 294, 30, 50)} ${rect(220, 294, 30, 50)}` },
        { d: `${roundRect(138, 344, 54, 20, 8)} ${roundRect(208, 344, 54, 20, 8)}` },
      ],
    },
    {
      text: { da: 'Tegn ansigtet: to runde øjne, en mund med tænder og en bolt på hver side af hovedet.', en: 'Draw the face: two round eyes, a mouth with teeth and a bolt on each side of the head.' },
      strokes: [
        { d: `${circle(172, 106, 14)} ${circle(228, 106, 14)}` },
        { d: `${circle(174, 108, 6)} ${circle(226, 108, 6)}`, kind: 'shade', tone: 0.9 },
        { d: `${roundRect(172, 128, 56, 14, 4)} M186 128 V142 M200 128 V142 M214 128 V142` },
        { d: `${rect(130, 98, 10, 24)} ${rect(260, 98, 10, 24)}` },
      ],
    },
    {
      text: { da: 'Tegn en skærm på maven med en hjertelinje, og nogle knapper under den.', en: 'Draw a screen on its tummy with a heartbeat line, and some buttons below it.' },
      tip: { da: 'Find selv på flere knapper, lamper og håndtag!', en: 'Make up more buttons, lights and levers yourself!' },
      strokes: [
        { d: roundRect(150, 186, 100, 50, 6) },
        { d: 'M158 212 H180 L188 198 L198 228 L206 204 L212 212 H242' },
        { d: `${circle(160, 264, 9)} ${circle(186, 264, 9)} ${roundRect(206, 256, 44, 16, 6)} ${circle(222, 264, 4)}` },
      ],
    },
    {
      text: { da: 'Farvelæg din robot – sølv, blå eller en helt vild farve!', en: 'Colour your robot – silver, blue or a totally wild colour!' },
      strokes: [
        { d: `${roundRect(140, 70, 120, 84, 14)} ${roundRect(124, 166, 152, 128, 10)}`, kind: 'shade', tone: 0.15 },
        { d: `${circle(160, 264, 9)} ${circle(200, 34, 8)}`, kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Bip bop! Din robot siger tak, fordi du tegnede den så flot!', en: 'Beep boop! Your robot says thank you for drawing it so well!' }],
  nextTip: { da: 'Tegn en robot-hund eller en robot, der kan flyve.', en: 'Draw a robot dog or a robot that can fly.' },
}
