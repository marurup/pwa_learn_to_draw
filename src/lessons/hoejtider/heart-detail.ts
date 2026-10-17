import { ellipse } from '../shapes'
import type { Lesson } from '../types'

// The arrow goes in behind the heart at the top left and comes out at the bottom right.
const arrowIn = 'M30 80 L94 122 M30 80 L20 92 M30 80 L40 68 M40 86 L30 98 M40 86 L50 74'
const arrowOut = 'M293 250 L370 300 M370 300 L346 296 L357 280 Z'
const banner = 'M60 350 H340 L326 366 L340 382 H60 L74 366 Z'
const sparkles = 'M110 40 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z M356 210 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z M40 210 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z'

export const heartDetail: Lesson = {
  id: 'heart-detail',
  title: { da: 'Valentinshjerte med pil', en: 'Valentine heart with an arrow' },
  category: 'hoejtider',
  sub: 'hjerter',
  level: 2,
  style: 'detaljer',
  base: 'heart',
  minutes: 12,
  intro: {
    da: 'Byg videre på dit hjerte: en amorpil, der går igennem, et bånd med en hilsen, glimt og en blank glans.',
    en: 'Build on your heart: a Cupid’s arrow going through it, a ribbon with a message, sparkles and a glossy shine.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn enden af en pil med fjer, der går ind i hjertet foroven til venstre.', en: 'Draw the end of an arrow with feathers going into the heart at the top left.' },
      strokes: [{ d: arrowIn }],
    },
    {
      text: { da: 'Tegn pilens spids, der kommer ud forneden til højre.', en: 'Draw the arrowhead coming out at the bottom right.' },
      tip: { da: 'De to stykker skal ligge på én lige linje, så pilen ser hel ud.', en: 'The two pieces should line up in one straight line so the arrow looks whole.' },
      strokes: [{ d: arrowOut }],
    },
    {
      text: { da: 'Tegn et bånd under hjertet, og skriv en hilsen i det.', en: 'Draw a ribbon under the heart, and write a message in it.' },
      strokes: [{ d: banner }],
      labels: [{ x: 200, y: 371, text: { da: 'Jeg elsker dig', en: 'I love you' } }],
    },
    {
      text: {
        da: 'Tegn glimt rundt om, skyg hjertet i højre side, og lad en hvid glans stå foroven til venstre.',
        en: 'Draw sparkles around, shade the right side of the heart, and leave a white shine at the top left.',
      },
      tip: { da: 'Glansen får hjertet til at se blankt ud – som en ballon.', en: 'The shine makes the heart look glossy – like a balloon.' },
      strokes: [
        { d: sparkles },
        { d: 'M260 104 Q326 110 320 182 Q310 262 200 340 Q290 250 290 180 Q290 130 260 104 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: ellipse(120, 146, 10, 22, 35), kind: 'shade', fill: 'paper' },
        { d: banner, kind: 'shade', tone: 0.15 },
        { d: sparkles, kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [{ da: 'Amor har ramt plet – det er et smukt hjerte!', en: 'Cupid hit the mark – that is a beautiful heart!' }],
  nextTip: { da: 'Lav et hjertekort og giv det til én, du holder af.', en: 'Make a heart card and give it to someone you love.' },
}
