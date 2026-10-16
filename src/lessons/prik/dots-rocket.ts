import { dotLesson } from '../dots'
import { circle } from '../shapes'

const sparkle = (x: number, y: number, s: number) => `M${x} ${y - s} L${x} ${y + s} M${x - s} ${y} L${x + s} ${y}`

export const dotsRocket = dotLesson({
  id: 'dots-rocket',
  title: { da: 'Prik-til-prik: Raket', en: 'Dot-to-dot: Rocket' },
  intro: {
    da: 'Forbind prikkerne til en raket, og send den ud i rummet med flammer og stjerner.',
    en: 'Join the dots to make a rocket, then send it into space with flames and stars.',
  },
  sub: 'rummet',
  dots: [
    [200, 40],
    [232, 82],
    [242, 135],
    [242, 262],
    [288, 328],
    [242, 308],
    [216, 308],
    [184, 308],
    [158, 308],
    [112, 328],
    [158, 262],
    [158, 135],
    [168, 82],
  ],
  stops: [5, 9, 13],
  finish: [
    {
      text: { da: 'Tegn et rundt vindue på raketten.', en: 'Draw a round window on the rocket.' },
      strokes: [{ d: circle(200, 165, 24) }, { d: circle(200, 165, 15) }],
    },
    {
      text: { da: 'Tegn flammer under raketten. Wuuush!', en: 'Draw flames under the rocket. Whoosh!' },
      strokes: [{ d: 'M180 310 Q170 345 200 380 Q230 345 220 310' }, { d: 'M192 312 Q188 335 200 355 Q212 335 208 312' }],
    },
    {
      text: { da: 'Tegn stjerner rundt om raketten.', en: 'Draw stars around the rocket.' },
      strokes: [{ d: sparkle(80, 80, 12) }, { d: sparkle(330, 120, 10) }, { d: sparkle(70, 230, 9) }, { d: sparkle(340, 260, 12) }, { d: sparkle(310, 50, 7) }],
    },
  ],
  praise: [{ da: 'Din raket er klar til at lette!', en: 'Your rocket is ready for take-off!' }],
  nextTip: { da: 'Tegn en planet med ringe, som raketten flyver hen til.', en: 'Draw a planet with rings for the rocket to fly to.' },
})
