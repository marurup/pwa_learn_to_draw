import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

export const SNOW_FRIEND = {
  head: ellipse(200, 110, 44, 36),
  twigs: 'M196 75 L190 46 M191 56 L182 50 M204 75 L212 50 M209 60 L217 56 M200 74 V56',
  eyes: `${ellipse(184, 104, 6, 8)} ${ellipse(216, 104, 6, 8)}`,
  brows: 'M176 90 Q184 86 192 90 M208 90 Q216 86 224 90',
  nose: 'M200 114 L236 120 L200 124 Z',
  smile: 'M176 128 Q200 146 224 128 Z M196 131 V137 H204 V131',
  middle: ellipse(200, 176, 30, 28),
  bottom: ellipse(200, 262, 56, 54),
  feet: `${ellipse(176, 322, 18, 10)} ${ellipse(224, 322, 18, 10)}`,
  arms: 'M170 172 L128 150 M140 157 L134 144 M140 157 L126 160 M230 172 L272 150 M260 157 L266 144 M260 157 L274 160',
  buttons: `${circle(200, 168, 4)} ${circle(200, 186, 4)} ${circle(200, 250, 5)}`,
}

export const snowFriend: Lesson = {
  id: 'snow-friend',
  title: { da: 'Snevennen', en: 'The snow friend' },
  category: 'fantasi',
  sub: 'isriget',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En glad og lidt fjollet snemand med kvisthår, et stort grin og små snebold-fødder. Han elsker knus!',
    en: 'A happy, slightly silly snowman with twig hair, a big grin and little snowball feet. He loves hugs!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et bredt, ovalt hoved.', en: 'Draw a wide oval head.' },
      strokes: [{ d: SNOW_FRIEND.head }],
    },
    {
      text: { da: 'Tegn øjne med øjenbryn, en gulerodsnæse og et stort grin med én tand.', en: 'Draw eyes with eyebrows, a carrot nose and a big grin with one tooth.' },
      strokes: [
        { d: SNOW_FRIEND.eyes, kind: 'shade', tone: 0.9 },
        { d: `${circle(186, 101, 2)} ${circle(218, 101, 2)}`, kind: 'shade', fill: 'paper' },
        { d: SNOW_FRIEND.brows },
        { d: SNOW_FRIEND.nose },
        { d: SNOW_FRIEND.smile },
      ],
    },
    {
      text: { da: 'Tegn tre små kviste som hår.', en: 'Draw three little twigs for hair.' },
      strokes: [{ d: SNOW_FRIEND.twigs }],
    },
    {
      text: { da: 'Tegn en lille snebold til maven, en stor til bunden og to små fødder.', en: 'Draw a little snowball for the tummy, a big one for the bottom and two little feet.' },
      strokes: [{ d: SNOW_FRIEND.middle }, { d: SNOW_FRIEND.bottom }, { d: SNOW_FRIEND.feet }],
    },
    {
      text: { da: 'Tegn kvistarme, der vinker, og knapper af kul. Farvelæg næsen orange!', en: 'Draw waving twig arms and coal buttons. Colour the nose orange!' },
      strokes: [
        { d: SNOW_FRIEND.arms },
        { d: SNOW_FRIEND.buttons, kind: 'shade', tone: 0.85 },
        { d: SNOW_FRIEND.nose, kind: 'shade', tone: 0.4 },
        { d: 'M176 128 Q200 146 224 128 Z', kind: 'shade', tone: 0.6 },
      ],
    },
  ],
  praise: [{ da: 'Han ser ud, som om han vil give dig et kæmpe knus!', en: 'He looks like he wants to give you a giant hug!' }],
  nextTip: { da: 'Tegn snevennen, der drømmer om sommer.', en: 'Draw the snow friend dreaming of summer.' },
}
