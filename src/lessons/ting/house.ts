import { circle, line, rect } from '../shapes'
import type { Lesson } from '../types'

const window4 = (x: number, y: number) => [rect(x, y, 52, 46), line(x + 26, y, x + 26, y + 46), line(x, y + 23, x + 52, y + 23)]

export const house: Lesson = {
  id: 'house',
  title: { da: 'Hus', en: 'House' },
  category: 'ting',
  sub: 'bygninger',
  level: 2,
  minutes: 10,
  intro: {
    da: 'Et hus med tag, skorsten, dør og vinduer. Det er bygget af en firkant og en trekant.',
    en: 'A house with a roof, chimney, door and windows. It is built from a square and a triangle.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en stor firkant. Det er husets vægge.', en: 'Draw a big square. These are the walls of the house.' },
      tip: { da: 'Brug en lineal, hvis du har en – så bliver stregerne helt lige.', en: 'Use a ruler if you have one – the lines will be perfectly straight.' },
      strokes: [{ d: rect(90, 190, 220, 170) }],
    },
    {
      text: { da: 'Tegn taget som en trekant oven på væggene. Lad det stikke lidt ud til siderne.', en: 'Draw the roof like a triangle on top of the walls. Let it stick out a little on the sides.' },
      strokes: [{ d: 'M70 190 L200 80 L330 190 Z' }],
    },
    {
      text: { da: 'Tegn en skorsten på taget.', en: 'Draw a chimney on the roof.' },
      strokes: [{ d: 'M258 131 V96 H284 V153' }],
    },
    {
      text: { da: 'Tegn en dør midt på huset, med en rund top og et dørhåndtag.', en: 'Draw a door in the middle of the house, with a round top and a door handle.' },
      strokes: [{ d: 'M174 360 V288 Q174 262 200 262 Q226 262 226 288 V360' }, { d: circle(214, 314, 4) }],
    },
    {
      text: { da: 'Tegn to vinduer med sprosser – et på hver side af døren.', en: 'Draw two windows with crossbars – one on each side of the door.' },
      strokes: [...window4(110, 220), ...window4(238, 220)].map((d) => ({ d })),
    },
    {
      text: { da: 'Tegn tagsten som buer på taget og røg fra skorstenen.', en: 'Draw roof tiles as curves on the roof, and smoke from the chimney.' },
      strokes: [
        { d: 'M150 150 q12 10 24 0 q12 10 24 0 q12 10 24 0 q12 10 24 0 M122 174 q12 10 24 0 q12 10 24 0 q12 10 24 0 q12 10 24 0 q12 10 24 0 q12 10 24 0' },
        { d: 'M178 128 q11 10 22 0 q11 10 22 0' },
        { d: 'M272 88 Q256 74 272 60 Q288 46 272 32' },
      ],
    },
    {
      text: { da: 'Tegn en sti hen til døren og lidt græs. Farvelæg dit hus!', en: 'Draw a path to the door and some grass. Colour in your house!' },
      strokes: [
        { d: 'M180 360 L156 396 M220 360 L244 396' },
        { d: 'M30 360 H370' },
        { d: 'M50 360 l6 -14 l6 14 M110 360 l6 -14 l6 14 M290 360 l6 -14 l6 14 M340 360 l6 -14 l6 14' },
      ],
    },
  ],
  praise: [{ da: 'Det ser ud som et rigtig hyggeligt hus!', en: 'That looks like a really cosy house!' }],
  nextTip: { da: 'Tegn dit eget hus – hvor mange vinduer har det?', en: 'Draw your own home – how many windows does it have?' },
}
