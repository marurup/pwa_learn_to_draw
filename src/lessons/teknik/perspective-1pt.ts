import { circle, line } from '../shapes'
import type { Lesson } from '../types'

const VP: [number, number] = [200, 160]
// Road stripes: equal pieces of road get shorter and thinner further away (y = 160 + 240 / distance).
const stripes = [
  [1.05, 1.3],
  [1.6, 1.95],
  [2.4, 2.9],
  [3.6, 4.3],
  [5.4, 6.4],
  [8, 9.5],
].map(([a, b], i) => ({ d: line(200, 160 + 240 / a, 200, 160 + 240 / b), weight: 1.7 - i * 0.22 }))

const poleXs = [40, 100, 140, 165, 180]
const bottomY = (x: number) => 160 + (200 - x) * (180 / 190)
const topY = (x: number) => 160 - (200 - x) * (130 / 190)
const poles = poleXs.map((x) => ({
  d: `${line(x, topY(x), x, bottomY(x))} ${line(x - (200 - x) * 0.09, topY(x) + 4, x + (200 - x) * 0.09, topY(x) + 4)}`,
}))

export const perspective1pt: Lesson = {
  id: 'perspective-1pt',
  title: { da: '1-punkts perspektiv: en vej', en: 'One-point perspective: a road' },
  category: 'teknik',
  style: 'detaljer',
  level: 4,
  minutes: 20,
  intro: {
    da: 'Ting ser mindre ud, jo længere væk de er. Med ét forsvindingspunkt kan du tegne en vej, der forsvinder i horisonten.',
    en: 'Things look smaller the further away they are. With one vanishing point you can draw a road disappearing over the horizon.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn en lang, vandret streg tværs over papiret. Det er horisonten – der hvor himmel og jord mødes.', en: 'Draw a long horizontal line across the paper. That is the horizon – where sky meets ground.' },
      tip: { da: 'Horisonten er altid i højde med dine øjne.', en: 'The horizon is always at the height of your eyes.' },
      strokes: [{ d: line(16, 160, 384, 160) }],
      labels: [{ x: 380, y: 150, text: { da: 'horisont', en: 'horizon' }, anchor: 'end' }],
    },
    {
      text: { da: 'Sæt en prik midt på horisonten. Det er forsvindingspunktet: Alt, der går væk fra dig, peger hertil.', en: 'Put a dot in the middle of the horizon. That is the vanishing point: everything going away from you points here.' },
      strokes: [{ d: circle(VP[0], VP[1], 5), kind: 'shade', tone: 1 }],
      labels: [{ x: 200, y: 140, text: { da: 'forsvindingspunkt', en: 'vanishing point' } }],
    },
    {
      text: { da: 'Tegn vejens to kanter fra bunden af papiret og helt ind til prikken. Brug en lineal.', en: 'Draw the two edges of the road from the bottom of the paper all the way to the dot. Use a ruler.' },
      strokes: [{ d: line(40, 396, VP[0], VP[1]) }, { d: line(360, 396, VP[0], VP[1]) }],
    },
    {
      text: { da: 'Tegn striber midt på vejen. De bliver kortere og tyndere, jo tættere de kommer på prikken.', en: 'Draw stripes down the middle of the road. They get shorter and thinner as they get closer to the dot.' },
      strokes: stripes,
    },
    {
      text: { da: 'Tegn to lette hjælpelinjer fra prikken ud til venstre: en høj og en lav. Mellem dem skal der stå pæle.', en: 'Draw two light guide lines from the dot out to the left: a high one and a low one. Poles will stand between them.' },
      strokes: [{ d: line(VP[0], VP[1], 10, 30), kind: 'guide' }, { d: line(VP[0], VP[1], 10, 340), kind: 'guide' }],
    },
    {
      text: { da: 'Tegn telefonpæle mellem hjælpelinjerne. Jo længere væk, jo mindre bliver de – og jo tættere står de.', en: 'Draw telephone poles between the guide lines. The further away, the smaller they get – and the closer together.' },
      strokes: poles,
    },
    {
      text: { da: 'Visk hjælpelinjerne ud, og tegn bjerge i horisonten og ledninger mellem pælene.', en: 'Erase the guide lines, and draw mountains on the horizon and wires between the poles.' },
      erase: 'guides',
      strokes: [
        { d: 'M214 160 L250 122 L270 140 L302 102 L344 160' },
        { d: `M40 ${topY(40) + 4} Q72 ${topY(40) + 40} 100 ${topY(100) + 4} Q122 ${topY(100) + 22} 140 ${topY(140) + 4} Q154 ${topY(140) + 12} 165 ${topY(165) + 4}` },
      ],
    },
  ],
  praise: [{ da: 'Wow, vejen ser ud, som om den fortsætter langt, langt væk!', en: 'Wow, the road looks like it goes on far, far away!' }],
  nextTip: { da: 'Tegn huse langs vejen – deres tage og vinduer skal også pege mod forsvindingspunktet.', en: 'Draw houses along the road – their roofs and windows also point to the vanishing point.' },
}
