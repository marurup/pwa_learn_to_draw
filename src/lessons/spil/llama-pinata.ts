import { circle, rect, roundRect } from '../shapes'
import type { Lesson } from '../types'

const scallops = (x: number, y: number, n: number, deep: number) => `M${x} ${y} ` + Array.from({ length: n }, () => `q7 ${deep} 14 0`).join(' ')

export const LLAMA = {
  body: roundRect(100, 190, 180, 90, 22),
  neck: 'M236 190 V104 M268 190 V106',
  head: roundRect(226, 62, 86, 48, 20),
  ears: 'M240 64 L236 30 L254 60 M262 62 L262 28 L278 60',
  legs: `${rect(116, 280, 22, 80)} ${rect(150, 280, 22, 80)} ${rect(212, 280, 22, 80)} ${rect(246, 280, 22, 80)}`,
  tail: 'M100 214 Q76 210 80 238 Q90 230 100 232',
  fringe: `${scallops(104, 214, 12, 8)} ${scallops(104, 238, 12, 8)} ${scallops(104, 262, 12, 8)} ${scallops(238, 130, 2, 6)} ${scallops(238, 154, 2, 6)}`,
}

export const llamaPinata: Lesson = {
  id: 'llama-pinata',
  title: { da: 'Festlama', en: 'Party llama' },
  category: 'spil',
  sub: 'spilfigurer',
  level: 2,
  minutes: 14,
  intro: {
    da: 'En festlig lama-piñata af papirfryns i mange farver – fyldt med slik!',
    en: 'A party llama piñata made of paper fringe in lots of colours – full of sweets!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn kroppen som en aflang firkant med runde hjørner.', en: 'Draw the body as a long rectangle with round corners.' },
      strokes: [{ d: LLAMA.body }],
    },
    {
      text: { da: 'Tegn en lang hals op fra kroppen og et hoved, der peger til højre.', en: 'Draw a long neck up from the body and a head pointing to the right.' },
      strokes: [{ d: LLAMA.neck }, { d: LLAMA.head }],
    },
    {
      text: { da: 'Tegn to spidse ører, et øje og et smil.', en: 'Draw two pointy ears, an eye and a smile.' },
      strokes: [{ d: LLAMA.ears }, { d: circle(288, 80, 5), kind: 'shade', tone: 0.9 }, { d: 'M294 96 Q302 100 308 94' }],
    },
    {
      text: { da: 'Tegn fire ben og en lille hale.', en: 'Draw four legs and a little tail.' },
      strokes: [{ d: LLAMA.legs }, { d: LLAMA.tail }],
    },
    {
      text: { da: 'Tegn rækker af små buer på kroppen og halsen – det er papirfrynsene.', en: 'Draw rows of little curves on the body and neck – that is the paper fringe.' },
      strokes: [{ d: LLAMA.fringe, weight: 0.7 }],
    },
    {
      text: { da: 'Farvelæg lamaen i stribede farver – jo flere, jo bedre!', en: 'Colour the llama in striped colours – the more the better!' },
      strokes: [
        { d: `${LLAMA.body} ${LLAMA.head} M236 190 V104 H268 V190 Z`, kind: 'shade', tone: 0.25 },
        { d: `${rect(100, 214, 180, 24)} M236 130 H268 V154 H236 Z`, kind: 'shade', tone: 0.3 },
        { d: LLAMA.legs, kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en festlama – hvem tør slå til den?', en: 'What a party llama – who dares to hit it?' }],
  nextTip: { da: 'Tegn slik, der drysser ud af lamaen.', en: 'Draw sweets falling out of the llama.' },
}
