import { circle, radial } from '../shapes'
import type { Lesson } from '../types'

const neck = 'M172 284 Q166 330 162 384 M228 284 Q234 330 238 384'
const collar = 'M168 318 Q200 332 232 318 L234 334 Q200 348 166 334 Z'
const bells = `${circle(200, 350, 9)} ${circle(182, 346, 6)} ${circle(218, 346, 6)}`
const holly = 'M200 110 Q188 94 170 98 Q182 108 200 110 Q212 94 230 98 Q218 108 200 110'
const flake = (x: number, y: number, r: number) => radial(x, y, 0, r, 6, 90)

export const reindeerDetail: Lesson = {
  id: 'reindeer-detail',
  title: { da: 'Rensdyr med klokker', en: 'Reindeer with bells' },
  category: 'hoejtider',
  sub: 'jul',
  level: 2,
  style: 'detaljer',
  base: 'reindeer',
  minutes: 14,
  intro: {
    da: 'Byg videre på dit rensdyr: en hals med et halsbånd fuld af klokker, kristtorn mellem gevirerne, snefnug og en næse, der skinner.',
    en: 'Build on your reindeer: a neck with a collar full of bells, holly between the antlers, snowflakes and a nose that shines.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn halsen og et halsbånd med tre klokker.', en: 'Draw the neck and a collar with three bells.' },
      strokes: [{ d: neck }, { d: collar }, { d: bells }, { d: 'M196 354 H204 M180 349 H184 M216 349 H220', weight: 0.7 }],
    },
    {
      text: { da: 'Tegn to kristtornblade og røde bær mellem gevirerne.', en: 'Draw two holly leaves and red berries between the antlers.' },
      strokes: [{ d: holly }, { d: `${circle(195, 104, 4)} ${circle(205, 104, 4)} ${circle(200, 98, 4)}` }],
    },
    {
      text: { da: 'Tegn snefnug rundt om rensdyret.', en: 'Draw snowflakes around the reindeer.' },
      strokes: [{ d: [flake(70, 230, 10), flake(330, 230, 10), flake(60, 330, 7), flake(340, 330, 8), flake(300, 60, 7), flake(100, 50, 7)].join(' '), weight: 0.7 }],
    },
    {
      text: {
        da: 'Lad glimt stå hvide i øjnene og på næsen. Skyg hovedet i den ene side, og farvelæg halsbåndet rødt og klokkerne guld.',
        en: 'Leave white twinkles in the eyes and on the nose. Shade one side of the head, and colour the collar red and the bells gold.',
      },
      tip: { da: 'En hvid prik på næsen får den til at skinne.', en: 'A white dot on the nose makes it shine.' },
      strokes: [
        { d: `${circle(181, 174, 3)} ${circle(225, 174, 3)} ${circle(194, 236, 3.5)}`, kind: 'shade', fill: 'paper' },
        { d: 'M226 112 Q246 116 250 150 Q254 220 240 260 Q230 284 214 290 Q240 230 234 150 Q232 124 226 112 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M172 284 Q166 330 162 384 H238 Q234 330 228 284 Q200 300 172 284 Z', kind: 'shade', tone: 0.35 },
        { d: collar, kind: 'shade', tone: 0.55 },
        { d: bells, kind: 'shade', tone: 0.2 },
        { d: `${holly} Z`, kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Klingeling! Rensdyret er klar til at trække slæden.', en: 'Jingle jingle! The reindeer is ready to pull the sleigh.' }],
  nextTip: { da: 'Tegn en hel række rensdyr, der flyver over himlen.', en: 'Draw a whole line of reindeer flying across the sky.' },
}
