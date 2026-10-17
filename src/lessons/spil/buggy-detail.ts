import type { Lesson } from '../types'

const flag = 'M96 196 V120 M96 120 L130 130 L96 140 Z'
const number = 'M150 240 H166 L156 256 M190 240 H206 M190 240 V248 H204 Q208 252 204 256 H190'
const ramp = 'M0 378 L64 352 V400'
const ground = 'M180 394 Q290 382 400 392'
const dust = 'M20 330 q-12 -10 2 -18 q4 -14 20 -8 q14 -6 18 8 q12 6 0 16 Z M44 300 q-8 -8 2 -14 q6 -8 14 0 q8 2 2 12 Z'
const speed = 'M6 230 H50 M14 256 H44 M0 282 H30'

export const buggyDetail: Lesson = {
  id: 'buggy-detail',
  title: { da: 'Buggy i et kæmpehop', en: 'Buggy doing a giant jump' },
  category: 'spil',
  sub: 'raketbiler',
  level: 2,
  style: 'detaljer',
  base: 'buggy',
  minutes: 14,
  intro: {
    da: 'Byg videre på din buggy: et flag på antennen, et løbsnummer, en rampe og sand, der sprøjter, så den flyver gennem luften.',
    en: 'Build on your buggy: a flag on the aerial, a race number, a ramp and spraying sand so it flies through the air.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en antenne med et flag bagpå.', en: 'Draw an aerial with a flag at the back.' },
      strokes: [{ d: flag }],
    },
    {
      text: { da: 'Skriv et løbsnummer på siden – fx 75.', en: 'Write a race number on the side – like 75.' },
      strokes: [{ d: number, weight: 1.2 }],
    },
    {
      text: { da: 'Tegn rampen, buggyen lige har forladt, og jorden langt fremme, hvor den skal lande.', en: 'Draw the ramp the buggy has just left, and the ground far ahead where it will land.' },
      tip: { da: 'Når hjulene ikke rører jorden, ser det ud, som om den flyver.', en: 'When the wheels do not touch the ground, it looks like it is flying.' },
      strokes: [{ d: ramp }, { d: ground }],
    },
    {
      text: { da: 'Tegn sandskyer bag hjulet og fartstreger.', en: 'Draw clouds of sand behind the wheel and speed lines.' },
      strokes: [{ d: dust }, { d: speed, weight: 0.7 }],
    },
    {
      text: { da: 'Farvelæg flaget, rampen og sandet. Skyg under bilen.', en: 'Colour the flag, the ramp and the sand. Shade under the car.' },
      strokes: [
        { d: 'M96 120 L130 130 L96 140 Z', kind: 'shade', tone: 0.45 },
        { d: `${ramp} H0 Z`, kind: 'shade', tone: 0.35 },
        { d: `${ground} V400 H180 Z`, kind: 'shade', tone: 0.25 },
        { d: dust, kind: 'shade', tone: 0.2 },
        { d: 'M74 254 H332 L350 262 H56 Z', kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Wiiii! Sikke et hop – den lander helt sikkert perfekt!', en: 'Wheee! What a jump – it will surely land perfectly!' }],
  nextTip: { da: 'Tegn en hel bane med klitter og flag.', en: 'Draw a whole track with dunes and flags.' },
}
