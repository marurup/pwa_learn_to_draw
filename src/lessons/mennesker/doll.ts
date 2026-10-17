import { circle, mirrorX, roundRect } from '../shapes'
import type { Lesson } from '../types'

// Ids the dress-up versions rub out before giving the doll new clothes.
export const DOLL_IDS = { dress: 'dress', legs: 'legs', shoes: 'shoes', arms: 'arms' }

const armL = `M176 154 Q160 182 150 214 M184 168 Q172 192 164 216 ${circle(156, 222, 8)}`

export const doll: Lesson = {
  id: 'doll',
  title: { da: 'Påklædningsdukke', en: 'Dress-up doll' },
  category: 'mennesker',
  sub: 'dukker',
  level: 1,
  minutes: 10,
  intro: {
    da: 'En dukke med en enkel kjole. Bagefter kan du give hende nyt tøj: en prinsessekjole, en tutu eller en havfruehale!',
    en: 'A doll in a simple dress. Afterwards you can give her new clothes: a princess gown, a tutu or a mermaid tail!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en stor cirkel til hovedet.', en: 'Draw a big circle for the head.' },
      strokes: [{ d: circle(200, 96, 44) }],
    },
    {
      text: { da: 'Tegn håret: en hue af hår over hovedet, lokker ned langs siderne og pandehår.', en: 'Draw the hair: a cap of hair over the head, locks down the sides and a fringe.' },
      strokes: [
        { d: 'M156 96 Q152 46 200 46 Q248 46 244 96' },
        { d: 'M156 96 Q150 130 164 150 M244 96 Q250 130 236 150' },
        { d: 'M164 72 Q184 82 200 64 Q216 82 236 72' },
      ],
    },
    {
      text: { da: 'Tegn store øjne, røde kinder og en glad mund.', en: 'Draw big eyes, rosy cheeks and a happy mouth.' },
      strokes: [
        { d: `${circle(184, 100, 7)} ${circle(216, 100, 7)}`, kind: 'shade', tone: 0.9 },
        { d: `${circle(181, 97, 2.2)} ${circle(213, 97, 2.2)}`, kind: 'shade', fill: 'paper' },
        { d: `${circle(174, 118, 6)} ${circle(226, 118, 6)}`, kind: 'shade', fill: 'soft', tone: 0.2 },
        { d: 'M190 120 Q200 128 210 120' },
      ],
    },
    {
      text: { da: 'Tegn en hals og en kjole, der bliver bredere forneden.', en: 'Draw a neck and a dress that gets wider at the bottom.' },
      tip: { da: 'Kjolen ligner en trekant, hvor spidsen er skåret af.', en: 'The dress looks like a triangle with the tip cut off.' },
      strokes: [{ d: 'M192 140 V150 M208 140 V150' }, { d: 'M176 150 H224 L250 270 H150 Z', id: DOLL_IDS.dress }],
    },
    {
      text: { da: 'Tegn armene med runde hænder.', en: 'Draw the arms with round hands.' },
      strokes: [{ d: `${armL} ${mirrorX(armL, 200)}`, id: DOLL_IDS.arms }],
    },
    {
      text: { da: 'Tegn benene og et par sko.', en: 'Draw the legs and a pair of shoes.' },
      strokes: [
        { d: 'M184 270 V340 M196 270 V340 M204 270 V340 M216 270 V340', id: DOLL_IDS.legs },
        { d: `${roundRect(176, 338, 24, 12, 6)} ${roundRect(200, 338, 24, 12, 6)}`, id: DOLL_IDS.shoes },
      ],
    },
    {
      text: { da: 'Farvelæg dukken. Hvilken farve skal kjolen have?', en: 'Colour in the doll. What colour should the dress be?' },
      strokes: [
        { d: 'M176 150 H224 L250 270 H150 Z', kind: 'shade', tone: 0.2, id: 'dressColour' },
        { d: 'M156 96 Q152 46 200 46 Q248 46 244 96 Q236 70 200 64 Q164 70 156 96 Z', kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en sød dukke! Nu kan du give hende nyt tøj.', en: 'What a sweet doll! Now you can give her new clothes.' }],
  nextTip: { da: 'Find selv på en kjole til dukken – med prikker, striber eller blomster.', en: 'Make up your own dress for the doll – with dots, stripes or flowers.' },
}
