import { mirrorX, transform } from '../shapes'
import type { Lesson } from '../types'

const halfL = 'M200 150 Q186 102 140 104 Q74 110 80 182 Q90 262 200 340'
export const heartShape = 'M200 340 Q90 262 80 182 Q74 110 140 104 Q186 102 200 150 Q214 102 260 104 Q326 110 320 182 Q310 262 200 340 Z'
const innerHeart = transform(heartShape, 0.6, 80, 88)
export const smallHearts = [transform(heartShape, 0.15, 300, 20), transform(heartShape, 0.15, 20, 280), transform(heartShape, 0.12, 330, 130), transform(heartShape, 0.12, 60, 12)].join(' ')

export const heart: Lesson = {
  id: 'heart',
  title: { da: 'Hjerte', en: 'Heart' },
  category: 'hoejtider',
  sub: 'hjerter',
  level: 1,
  minutes: 5,
  intro: {
    da: 'Et stort hjerte til én, du holder af – til valentinsdag eller bare fordi.',
    en: 'A big heart for someone you love – for Valentine’s Day or just because.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Start i midten foroven: tegn en bue ud til venstre og ned til en spids forneden.', en: 'Start at the top in the middle: draw a curve out to the left and down to a point at the bottom.' },
      strokes: [{ d: halfL }],
    },
    {
      text: { da: 'Tegn den anden halvdel lige sådan til højre.', en: 'Draw the other half the same way on the right.' },
      tip: { da: 'De to halvdele skal mødes i spidsen forneden.', en: 'The two halves should meet at the point at the bottom.' },
      strokes: [{ d: mirrorX(halfL, 200) }],
    },
    {
      text: { da: 'Tegn et mindre hjerte inden i.', en: 'Draw a smaller heart inside.' },
      strokes: [{ d: innerHeart }],
    },
    {
      text: { da: 'Tegn små hjerter rundt om. Farvelæg dem røde og lyserøde.', en: 'Draw little hearts all around. Colour them red and pink.' },
      strokes: [
        { d: smallHearts },
        // Mirroring the inner heart turns it the other way round, so it is a lighter hole in the red.
        { d: `${heartShape} ${mirrorX(innerHeart, 200)}`, kind: 'shade', tone: 0.45 },
        { d: innerHeart, kind: 'shade', tone: 0.15 },
        { d: smallHearts, kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Åh, sikke et kærligt hjerte!', en: 'Aw, what a loving heart!' }],
  nextTip: { da: 'Giv hjertet til én, du holder af.', en: 'Give the heart to someone you love.' },
}
