import { dotLesson } from '../dots'
import { circle, line, rect } from '../shapes'

export const dotsHouse = dotLesson({
  id: 'dots-house',
  title: { da: 'Prik-til-prik: Hus', en: 'Dot-to-dot: House' },
  intro: {
    da: 'Forbind prikkerne til et hus med skorsten. Bagefter tegner du dør og vinduer.',
    en: 'Join the dots to make a house with a chimney. Then draw a door and windows.',
  },
  sub: 'bygninger',
  dots: [
    [100, 355],
    [100, 195],
    [200, 95],
    [250, 145],
    [250, 100],
    [278, 100],
    [278, 173],
    [300, 195],
    [300, 355],
  ],
  stops: [3, 7, 9],
  finish: [
    {
      text: { da: 'Tegn en dør midt på huset.', en: 'Draw a door in the middle of the house.' },
      strokes: [{ d: 'M175 355 V285 H225 V355' }, { d: circle(215, 322, 3) }],
    },
    {
      text: { da: 'Tegn to vinduer med et kryds i.', en: 'Draw two windows with a cross in them.' },
      strokes: [
        { d: rect(118, 215, 48, 44) },
        { d: line(142, 215, 142, 259) + ' ' + line(118, 237, 166, 237) },
        { d: rect(234, 215, 48, 44) },
        { d: line(258, 215, 258, 259) + ' ' + line(234, 237, 282, 237) },
      ],
    },
    {
      text: { da: 'Tegn røg fra skorstenen og en sol på himlen.', en: 'Draw smoke from the chimney and a sun in the sky.' },
      strokes: [
        { d: 'M264 92 Q250 80 264 68 Q278 56 264 44 Q252 34 262 24' },
        { d: circle(352, 58, 22) },
        { d: 'M352 22 V12 M352 94 V104 M316 58 H306 M388 58 H398 M327 33 L320 26 M377 33 L384 26 M327 83 L320 90 M377 83 L384 90' },
      ],
    },
  ],
  praise: [{ da: 'Det hus vil jeg gerne bo i!', en: 'I would love to live in that house!' }],
  nextTip: { da: 'Tegn en have med blomster og et træ ved siden af huset.', en: 'Draw a garden with flowers and a tree next to the house.' },
})
