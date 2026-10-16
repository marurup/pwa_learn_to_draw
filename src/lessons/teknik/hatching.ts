import { circle, hatch, line, poly, rect } from '../shapes'
import type { Lesson } from '../types'

const sq = [40, 155, 270].map((x) => ({ x, y: 48, s: 90 }))
const h = (i: number, spacing: number, angle: number) => hatch(sq[i].x, sq[i].y, sq[i].s, sq[i].s, spacing, angle)

const top = poly([[200, 214], [276, 250], [200, 286], [124, 250]], true)
const left = poly([[124, 250], [200, 286], [200, 378], [124, 342]], true)
const right = poly([[200, 286], [276, 250], [276, 342], [200, 378]], true)
const sunRays = [0, 45, 90, 135, 180, 225, 270, 315]
  .map((deg) => {
    const a = (deg * Math.PI) / 180
    return line(58 + 20 * Math.cos(a), 226 + 20 * Math.sin(a), 58 + 28 * Math.cos(a), 226 + 28 * Math.sin(a))
  })
  .join(' ')

export const hatching: Lesson = {
  id: 'hatching',
  title: { da: 'Skravering og krydsskravering', en: 'Hatching and cross-hatching' },
  category: 'teknik',
  level: 4,
  minutes: 15,
  intro: {
    da: 'Man kan lave skygger med streger i stedet for at gnide. Jo flere lag streger, jo mørkere bliver det.',
    en: 'You can make shadows with lines instead of smudging. The more layers of lines, the darker it gets.',
  },
  materials: ['pencil', 'paper', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn tre firkanter ved siden af hinanden.', en: 'Draw three squares next to each other.' },
      strokes: sq.map(({ x, y, s }) => ({ d: rect(x, y, s, s) })),
    },
    {
      text: { da: 'Skravering: Fyld den første firkant med skrå streger, der alle går samme vej.', en: 'Hatching: fill the first square with slanted lines all going the same way.' },
      tip: { da: 'Hold samme afstand mellem stregerne, og løft blyanten hurtigt til sidst i hver streg.', en: 'Keep the same gap between the lines, and flick the pencil up at the end of each line.' },
      strokes: [{ d: h(0, 9, 45), weight: 0.6 }],
      labels: [{ x: 85, y: 160, text: { da: 'skravering', en: 'hatching' } }],
    },
    {
      text: { da: 'Krydsskravering: Lav samme streger i firkant 2 – og så et lag mere den anden vej.', en: 'Cross-hatching: draw the same lines in square 2 – then another layer the other way.' },
      strokes: [{ d: h(1, 9, 45), weight: 0.6 }, { d: h(1, 9, -45), weight: 0.6 }],
      labels: [{ x: 200, y: 160, text: { da: 'kryds', en: 'cross' } }],
    },
    {
      text: { da: 'Tre lag: I firkant 3 lægger du et tredje lag lige streger, tættere sammen. Nu er den mørkest.', en: 'Three layers: in square 3, add a third layer of straight lines closer together. Now it is the darkest.' },
      strokes: [{ d: h(2, 7, 45), weight: 0.6 }, { d: h(2, 7, -45), weight: 0.6 }, { d: h(2, 7, 0), weight: 0.6 }],
      labels: [{ x: 315, y: 160, text: { da: 'tre lag', en: 'three layers' } }],
    },
    {
      text: { da: 'Brug det på en terning. Tegn først en kasse set lidt oppefra – og en sol, der lyser fra venstre.', en: 'Use it on a cube. First draw a box seen slightly from above – and a sun shining from the left.' },
      strokes: [{ d: top }, { d: left }, { d: right }, { d: circle(58, 226, 14) }, { d: sunRays }],
    },
    {
      text: { da: 'Toppen får mest lys og forbliver hvid. Skravér venstre side let, og krydsskravér højre side, der er længst væk fra solen.', en: 'The top gets the most light and stays white. Hatch the left side lightly, and cross-hatch the right side, furthest from the sun.' },
      strokes: [
        { d: left, kind: 'shade', fill: 'hatch' },
        { d: right, kind: 'shade', fill: 'cross' },
      ],
    },
  ],
  praise: [{ da: 'Fine, jævne streger – sådan skygger illustratorer!', en: 'Nice, even lines – that is how illustrators shade!' }],
  nextTip: { da: 'Skravér skyggen på en tegning, du har lavet før – fx under en bil eller et træ.', en: 'Hatch the shadow on a drawing you made before – e.g. under a car or a tree.' },
}
