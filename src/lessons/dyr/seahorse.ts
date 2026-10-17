import { circle } from '../shapes'
import type { Lesson } from '../types'

export const SEAHORSE = {
  head: 'M214 70 Q240 72 246 110 M214 70 Q196 74 196 92 L140 96 V110 L186 114',
  body: 'M246 110 Q272 170 252 226 Q240 258 222 276 M186 114 Q156 150 168 196 Q178 232 202 270',
  tail: 'M222 276 Q232 320 206 336 Q178 346 172 320 Q168 300 188 298 Q200 300 198 314 M202 270 Q212 300 198 314',
  fin: 'M260 176 Q290 178 286 206 Q274 206 256 208',
}

export const seahorse: Lesson = {
  id: 'seahorse',
  title: { da: 'Søhest', en: 'Seahorse' },
  category: 'dyr',
  sub: 'fisk',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En søhest med lang snude, en lille krone og en hale, der krøller sig sammen.',
    en: 'A seahorse with a long snout, a little crown and a tail that curls up.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn hovedet med en lang snude, der peger til venstre.', en: 'Draw the head with a long snout pointing to the left.' },
      strokes: [{ d: SEAHORSE.head }],
    },
    {
      text: { da: 'Tegn kroppen: en rund mave foran og en buet ryg bagpå.', en: 'Draw the body: a round tummy at the front and a curved back behind.' },
      strokes: [{ d: SEAHORSE.body }],
    },
    {
      text: { da: 'Tegn halen, der bliver smal og krøller sig sammen som en snegl.', en: 'Draw the tail getting narrow and curling up like a snail.' },
      strokes: [{ d: SEAHORSE.tail }],
    },
    {
      text: { da: 'Tegn en lille krone på hovedet og en finne på ryggen.', en: 'Draw a little crown on the head and a fin on the back.' },
      strokes: [{ d: 'M206 74 L208 58 L216 71 L224 60 L228 78' }, { d: SEAHORSE.fin }],
    },
    {
      text: { da: 'Tegn et øje og nogle buede striber hen over maven. Farvelæg din søhest!', en: 'Draw an eye and some curved stripes across the tummy. Colour in your seahorse!' },
      strokes: [
        { d: circle(212, 94, 7) },
        { d: circle(214, 95, 3.5), kind: 'shade', tone: 0.9 },
        { d: 'M170 150 Q190 160 214 154 M168 178 Q192 188 222 182 M172 206 Q194 216 222 210 M184 234 Q200 242 220 238' },
      ],
    },
  ],
  praise: [{ da: 'Sikke en sød søhest – den ser ud, som om den svæver i vandet!', en: 'What a cute seahorse – it looks like it is floating in the water!' }],
  nextTip: { da: 'Tegn to søheste, der holder hale med hinanden.', en: 'Draw two seahorses holding tails.' },
}
