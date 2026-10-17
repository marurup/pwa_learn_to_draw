import { ellipse, mirrorX } from '../shapes'
import type { Lesson } from '../types'

export const PUMPKIN = {
  middle: ellipse(200, 242, 46, 82),
  lobeL: 'M184 164 Q86 166 84 244 Q88 322 184 320',
  stem: 'M190 164 Q188 132 176 120 L192 114 Q206 134 210 164',
}
export const pumpkinShape = `M184 164 Q86 166 84 244 Q88 322 184 320 L216 320 Q312 322 316 244 Q314 166 216 164 Z`

export const pumpkin: Lesson = {
  id: 'pumpkin',
  title: { da: 'Græskar', en: 'Pumpkin' },
  category: 'hoejtider',
  sub: 'halloween',
  level: 1,
  minutes: 6,
  intro: {
    da: 'Et rundt græskar med en stilk og et blad – lige til halloween.',
    en: 'A round pumpkin with a stalk and a leaf – just right for Halloween.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en høj oval i midten.', en: 'Draw a tall oval in the middle.' },
      strokes: [{ d: PUMPKIN.middle }],
    },
    {
      text: { da: 'Tegn en stor bue på hver side af ovalen.', en: 'Draw a big curve on each side of the oval.' },
      tip: { da: 'Buerne gør græskarret bredt og tykt.', en: 'The curves make the pumpkin wide and chunky.' },
      strokes: [{ d: PUMPKIN.lobeL }, { d: mirrorX(PUMPKIN.lobeL, 200) }],
    },
    {
      text: { da: 'Tegn en lille, buet stilk på toppen.', en: 'Draw a little curved stalk on top.' },
      strokes: [{ d: PUMPKIN.stem }],
    },
    {
      text: { da: 'Tegn et blad og en krøllet ranke ved stilken.', en: 'Draw a leaf and a curly tendril by the stalk.' },
      strokes: [{ d: 'M210 150 Q240 128 264 140 Q238 158 210 150 Z' }, { d: 'M204 136 q20 -22 36 -10 q10 10 -2 16 q-10 2 -6 -8' }],
    },
    {
      text: { da: 'Tegn jorden, og farvelæg græskarret orange.', en: 'Draw the ground, and colour the pumpkin orange.' },
      strokes: [{ d: 'M40 326 H360' }, { d: pumpkinShape, kind: 'shade', tone: 0.25 }],
    },
  ],
  praise: [{ da: 'Sikke et flot græskar – klar til halloween!', en: 'What a great pumpkin – ready for Halloween!' }],
  nextTip: { da: 'Tegn tre græskar i forskellige størrelser ved siden af hinanden.', en: 'Draw three pumpkins of different sizes next to each other.' },
}
