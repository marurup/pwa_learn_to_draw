import { circle, radial } from '../shapes'
import type { Lesson } from '../types'

/** Dots in a ring – the sparks at the end of each firework line. */
export const sparkRing = (cx: number, cy: number, r: number, count: number, size: number, startDeg = 0) =>
  Array.from({ length: count }, (_, i) => {
    const a = ((startDeg + (i * 360) / count) * Math.PI) / 180
    return circle(cx + r * Math.cos(a), cy + r * Math.sin(a), size)
  }).join(' ')

export const FIREWORKS = {
  big: `${radial(200, 150, 12, 64, 16)} ${circle(200, 150, 4)}`,
  bigDots: sparkRing(200, 150, 74, 16, 3.5),
  small: `${radial(90, 250, 8, 38, 12)} ${radial(310, 230, 8, 42, 12, 15)}`,
  smallDots: `${sparkRing(90, 250, 46, 12, 2.8)} ${sparkRing(310, 230, 50, 12, 2.8, 15)}`,
  trails: 'M200 380 Q194 300 200 236 M90 390 Q96 340 90 304 M310 390 Q304 340 310 290',
}

export const fireworks: Lesson = {
  id: 'fireworks',
  title: { da: 'Fyrværkeri', en: 'Fireworks' },
  category: 'hoejtider',
  sub: 'nytaar',
  level: 1,
  minutes: 6,
  intro: {
    da: 'Nytårsfyrværkeri, der eksploderer i store stjerner på himlen. Bum!',
    en: 'New Year fireworks bursting into big stars in the sky. Boom!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en lille prik, og tegn streger, der stråler ud fra den hele vejen rundt.', en: 'Draw a little dot, and draw lines shooting out from it all the way round.' },
      tip: { da: 'Tegn først op, ned, til højre og til venstre – og så stregerne imellem.', en: 'Draw up, down, left and right first – then the lines in between.' },
      strokes: [{ d: FIREWORKS.big }],
    },
    {
      text: { da: 'Sæt en prik for enden af hver streg – det er gnisterne.', en: 'Put a dot at the end of every line – those are the sparks.' },
      strokes: [{ d: FIREWORKS.bigDots }],
    },
    {
      text: { da: 'Tegn to mindre fyrværkerier på samme måde.', en: 'Draw two smaller fireworks the same way.' },
      strokes: [{ d: FIREWORKS.small }, { d: FIREWORKS.smallDots }],
    },
    {
      text: { da: 'Tegn de bugtede spor fra raketterne, der fløj op.', en: 'Draw the wiggly trails from the rockets that flew up.' },
      strokes: [{ d: FIREWORKS.trails, id: 'trails', weight: 0.8 }],
    },
    {
      text: { da: 'Farvelæg himlen mørk og fyrværkeriet i alle regnbuens farver!', en: 'Colour the sky dark and the fireworks in all the colours of the rainbow!' },
      tip: { da: 'Lyse farver lyser flot op på en mørk himmel.', en: 'Bright colours glow beautifully on a dark sky.' },
      strokes: [{ d: 'M0 0 H400 V400 H0 Z', kind: 'shade', fill: 'fade-down', tone: 0.45 }],
    },
  ],
  praise: [{ da: 'Bum! Sikke et flot fyrværkeri – godt nytår!', en: 'Boom! What great fireworks – happy New Year!' }],
  nextTip: { da: 'Tegn fyrværkeri i form af et hjerte eller en stjerne.', en: 'Draw fireworks shaped like a heart or a star.' },
}
