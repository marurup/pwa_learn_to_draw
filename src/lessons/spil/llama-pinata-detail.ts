import { circle, ellipse, poly, starPoints } from '../shapes'
import type { Lesson } from '../types'

const rope = 'M168 0 V190 M162 184 Q168 176 174 184'
const crack = 'M180 280 l6 8 l6 -6 l6 8 l6 -6'
const sweet = (x: number, y: number) => `${ellipse(x, y, 9, 6)} M${x - 9} ${y} l-7 -5 v10 Z M${x + 9} ${y} l7 -5 v10 Z`
const lolly = (x: number, y: number) => `${circle(x, y, 9)} M${x} ${y + 9} v18 M${x - 5} ${y - 2} q5 -6 10 0`
const candy = [sweet(186, 318), sweet(214, 350), lolly(196, 368), circle(176, 352, 5), circle(226, 322, 5)].join(' ')
const stars = [poly(starPoints(60, 80, 14, 6), true), poly(starPoints(352, 180, 12, 5), true), poly(starPoints(60, 300, 10, 4), true), poly(starPoints(350, 320, 12, 5), true)].join(' ')

export const llamaPinataDetail: Lesson = {
  id: 'llama-pinata-detail',
  title: { da: 'Festlama med slik', en: 'Party llama with sweets' },
  category: 'spil',
  sub: 'spilfigurer',
  level: 3,
  style: 'detaljer',
  base: 'llama-pinata',
  minutes: 18,
  intro: {
    da: 'Byg videre på din festlama: snoren den hænger i, en revne med slik, der drysser ud, festlige stjerner og skygger.',
    en: 'Build on your party llama: the rope it hangs from, a crack with sweets pouring out, party stars and shading.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn snoren, som lamaen hænger i, oppefra og ned til ryggen.', en: 'Draw the rope the llama hangs from, from the top down to its back.' },
      strokes: [{ d: rope }],
    },
    {
      text: { da: 'Tegn en takket revne under maven.', en: 'Draw a jagged crack under its tummy.' },
      strokes: [{ d: crack }],
    },
    {
      text: { da: 'Tegn slik, der drysser ud af revnen – bolsjer, en slikkepind og små kugler.', en: 'Draw sweets pouring out of the crack – candies, a lollipop and little balls.' },
      strokes: [{ d: candy }],
    },
    {
      text: { da: 'Tegn festlige stjerner rundt om lamaen.', en: 'Draw party stars around the llama.' },
      strokes: [{ d: stars }],
    },
    {
      text: {
        da: 'Skyg under kroppen og hovedet, så lamaen bliver rund. Farvelæg slikket og stjernerne i klare farver.',
        en: 'Shade under the body and the head so the llama looks round. Colour the sweets and the stars in bright colours.',
      },
      tip: { da: 'Skyggen hører til undersiden – lyset kommer oppefra.', en: 'The shadow belongs underneath – the light comes from above.' },
      strokes: [
        { d: 'M100 250 H280 V258 Q280 280 258 280 H122 Q100 280 100 258 Z M226 96 H312 Q312 110 292 110 H246 Q226 110 226 96 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: candy, kind: 'shade', tone: 0.45 },
        { d: stars, kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [{ da: 'Slik-regn! Det er den bedste fest nogensinde!', en: 'It is raining sweets! The best party ever!' }],
  nextTip: { da: 'Tegn børn med pinde, der står klar under lamaen.', en: 'Draw children with sticks waiting under the llama.' },
}
