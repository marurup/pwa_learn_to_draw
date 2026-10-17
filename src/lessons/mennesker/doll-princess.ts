import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'
import { DOLL_IDS } from './doll'

const skirt = 'M184 200 Q150 260 116 344 Q200 362 284 344 Q250 260 216 200'
// Ruffles: little curves along the hem.
const ruffles = Array.from({ length: 8 }, (_, i) => {
  const x = 120 + i * 20.5
  return `M${x.toFixed(1)} ${(346 + Math.sin((i / 7) * Math.PI) * 8).toFixed(1)} q10 10 20 0`
}).join(' ')
const sleeveL = 'M178 152 Q156 148 158 168 Q162 180 180 172'
const swagL = 'M150 300 Q172 316 200 304'
const crown = 'M174 52 L178 26 L190 40 L200 20 L210 40 L222 26 L226 52 Z'

export const dollPrincess: Lesson = {
  id: 'doll-princess',
  title: { da: 'Dukke i prinsessekjole', en: 'Doll in a princess gown' },
  category: 'mennesker',
  sub: 'dukker',
  level: 2,
  style: 'detaljer',
  base: 'doll',
  minutes: 15,
  intro: {
    da: 'Giv din dukke en stor prinsessekjole med pufærmer, flæser og en krone.',
    en: 'Give your doll a big princess gown with puffed sleeves, ruffles and a crown.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Visk kjolen, benene og skoene ud. Tegn en tætsiddende overdel og et stort skørt, der går helt ned til gulvet.',
        en: 'Rub out the dress, the legs and the shoes. Draw a fitted top and a big skirt that goes all the way to the floor.',
      },
      erase: [DOLL_IDS.dress, DOLL_IDS.legs, DOLL_IDS.shoes, 'dressColour'],
      strokes: [{ d: 'M178 150 H222 L216 200 H184 Z' }, { d: skirt }],
    },
    {
      text: { da: 'Tegn runde pufærmer på skuldrene og flæser langs kjolens kant.', en: 'Draw round puffed sleeves on the shoulders and ruffles along the hem.' },
      strokes: [{ d: `${sleeveL} ${mirrorX(sleeveL, 200)}` }, { d: ruffles }],
    },
    {
      text: { da: 'Tegn en krone med juveler oven på håret.', en: 'Draw a crown with jewels on top of the hair.' },
      strokes: [{ d: crown }, { d: `${circle(200, 44, 3)} ${circle(186, 46, 2.5)} ${circle(214, 46, 2.5)}`, kind: 'shade', tone: 0.6 }],
    },
    {
      text: { da: 'Pynt kjolen: buer af stof med sløjfer og en perlekæde.', en: 'Decorate the gown: swags of fabric with bows and a pearl necklace.' },
      strokes: [
        { d: `${swagL} ${mirrorX(swagL, 200)}` },
        { d: 'M150 300 l-8 -6 v12 Z M150 300 l8 -6 v12 Z M250 300 l-8 -6 v12 Z M250 300 l8 -6 v12 Z M200 304 l-8 -6 v12 Z M200 304 l8 -6 v12 Z' },
        { d: [184, 192, 200, 208, 216].map((x) => circle(x, 160 - (x - 200) ** 2 / 64, 2.2)).join(' ') },
      ],
    },
    {
      text: { da: 'Tegn folder i skørtet og glimmer rundt om prinsessen. Farvelæg!', en: 'Draw folds in the skirt and sparkles around the princess. Colour it in!' },
      strokes: [
        { d: 'M192 210 Q176 270 160 340 M208 210 Q224 270 240 340 M200 212 V350', weight: 0.6 },
        { d: 'M100 120 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z M300 100 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z M310 230 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z' },
        { d: `${skirt} Z`, kind: 'shade', tone: 0.18 },
        { d: crown, kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Din dukke er klar til ballet på slottet!', en: 'Your doll is ready for the ball at the castle!' }],
  nextTip: { da: 'Tegn en prins eller et slot ved siden af prinsessen.', en: 'Draw a prince or a castle next to the princess.' },
}
