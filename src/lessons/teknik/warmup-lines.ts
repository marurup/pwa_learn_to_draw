import { arc, circle, poly, rect } from '../shapes'
import type { Lesson } from '../types'

export const warmupLines: Lesson = {
  id: 'warmup-lines',
  title: { da: 'Streger og former', en: 'Lines and shapes' },
  category: 'teknik',
  level: 1,
  minutes: 5,
  intro: {
    da: 'Alle tegninger er lavet af streger og former. Her øver du dem, du skal bruge allermest.',
    en: 'Every drawing is made of lines and shapes. Here you practise the ones you will use the most.',
  },
  materials: ['pencil', 'paper'],
  steps: [
    {
      text: { da: 'Tegn en lige streg fra venstre mod højre. Tag god tid.', en: 'Draw a straight line from left to right. Take your time.' },
      tip: { da: 'Kig på det sted, hvor stregen skal ende – ikke på blyanten.', en: 'Look at where the line should end – not at the pencil.' },
      strokes: [{ d: 'M50 60 L350 60' }],
    },
    {
      text: { da: 'Tegn en bølgestreg: op og ned, op og ned – som bølger på havet.', en: 'Draw a wavy line: up and down, up and down – like waves on the sea.' },
      strokes: [{ d: 'M50 120 Q87 85 125 120 T200 120 T275 120 T350 120' }],
    },
    {
      text: { da: 'Tegn en takket streg: op, ned, op, ned – som bjerge.', en: 'Draw a zigzag: up, down, up, down – like mountains.' },
      strokes: [
        {
          d: poly([
            [50, 200],
            [87, 165],
            [125, 200],
            [162, 165],
            [200, 200],
            [237, 165],
            [275, 200],
            [312, 165],
            [350, 200],
          ]),
        },
      ],
    },
    {
      text: { da: 'Tegn en cirkel. Den må gerne være lidt skæv – det er alle cirkler i starten!', en: 'Draw a circle. It may be a bit wobbly – all circles are at first!' },
      tip: { da: 'Bevæg hele armen, ikke kun fingrene. Så bliver cirklen rundere.', en: 'Move your whole arm, not just your fingers. The circle gets rounder.' },
      strokes: [{ d: circle(88, 292, 50) }],
    },
    {
      text: { da: 'Tegn en firkant med fire lige sider.', en: 'Draw a square with four straight sides.' },
      strokes: [{ d: rect(155, 244, 96, 96) }],
    },
    {
      text: { da: 'Tegn en trekant: en spids top og en flad bund.', en: 'Draw a triangle: a pointy top and a flat bottom.' },
      strokes: [
        {
          d: poly(
            [
              [318, 244],
              [368, 340],
              [268, 340],
            ],
            true,
          ),
        },
      ],
    },
    {
      text: { da: 'Bonus: Giv cirklen øjne og en smilemund. Nu kan du alle de former, man bruger til at tegne!', en: 'Bonus: Give the circle eyes and a smile. Now you know all the shapes used for drawing!' },
      strokes: [
        { d: circle(72, 280, 5), kind: 'shade', tone: 0.9 },
        { d: circle(104, 280, 5), kind: 'shade', tone: 0.9 },
        { d: arc(88, 298, 20, 25, 155) },
      ],
    },
  ],
  praise: [{ da: 'Flotte streger! Det er dem, alle tegninger bygges af.', en: 'Great lines! Every drawing is built from them.' }],
  nextTip: { da: 'Prøv en prik-til-prik – så får du brugt dine lige streger.', en: 'Try a dot-to-dot – it puts your straight lines to use.' },
}
