import { circle, ellipse, mirrorX } from '../shapes'
import type { Lesson } from '../types'
import { braid, snowflake } from './ice-princess'

const eyeL = 'M160 152 Q176 140 192 152 Q176 160 160 152 Z'
const browL = 'M156 136 Q174 126 192 132'
const jaw = 'M140 140 Q140 200 168 224 Q186 238 200 238 Q214 238 232 224 Q260 200 260 140'
const hair = 'M136 150 Q124 70 198 62 Q274 66 266 150 M150 108 Q192 78 252 112'
const strands = 'M160 84 Q140 110 140 150 M180 72 Q160 100 156 128 M222 70 Q246 90 254 126 M240 78 Q262 104 262 140'
const shoulders = 'M178 232 L176 270 Q120 280 92 320 V400 M222 232 L224 270 Q280 280 308 320 V400'
const neckline = 'M140 292 Q200 336 260 292'
const crystals = `${snowflake(170, 326, 7)} ${snowflake(200, 340, 8)} ${snowflake(230, 326, 7)}`

export const icePrincessReal: Lesson = {
  id: 'ice-princess-real',
  title: { da: 'Isprinsesse, naturtro portræt', en: 'Ice princess, true-to-life portrait' },
  category: 'fantasi',
  sub: 'isriget',
  level: 4,
  style: 'naturtro',
  motif: 'ice-princess',
  minutes: 35,
  intro: {
    da: 'Et naturtro portræt af isprinsessen med rigtige proportioner, en flettet fletning og bløde skygger i ansigtet.',
    en: 'A true-to-life portrait of the ice princess with real proportions, a woven braid and soft shading on the face.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Tegn et æg til hovedet og hjælpelinjer: en lodret midterlinje og en vandret linje midt på – der sidder øjnene.',
        en: 'Draw an egg for the head and helper lines: an upright centre line and a line across the middle – that is where the eyes go.',
      },
      tip: { da: 'Øjnene sidder midt på hovedet, ikke højt oppe!', en: 'The eyes sit halfway down the head, not high up!' },
      strokes: [{ d: `${ellipse(200, 150, 62, 84)} M200 66 V234 M138 152 H262 M168 186 H232 M174 206 H226`, kind: 'guide' }],
    },
    {
      text: { da: 'Tegn kinderne og hagen. Kinderne går lige ned og bliver smallere ved hagen.', en: 'Draw the cheeks and chin. The cheeks go straight down and narrow towards the chin.' },
      strokes: [{ d: jaw }],
    },
    {
      text: { da: 'Tegn mandelformede øjne på linjen, med en rund iris, og øjenbryn over.', en: 'Draw almond-shaped eyes on the line, with a round iris, and eyebrows above.' },
      strokes: [
        { d: `${eyeL} ${mirrorX(eyeL, 200)}` },
        { d: `${circle(176, 151, 6)} ${circle(224, 151, 6)}`, kind: 'shade', tone: 0.6 },
        { d: `${browL} ${mirrorX(browL, 200)}` },
      ],
    },
    {
      text: { da: 'Tegn næsen med få streger og munden med en blød overlæbe.', en: 'Draw the nose with a few lines and the mouth with a soft upper lip.' },
      strokes: [{ d: 'M200 160 Q196 176 194 182 M190 186 Q200 192 210 186' }, { d: 'M184 206 Q192 200 200 204 Q208 200 216 206 Q200 216 184 206 Z M184 206 H216' }],
    },
    {
      text: { da: 'Tegn håret med fylde, en pandelok, der falder til siden, og en tyk fletning over skulderen.', en: 'Draw the hair with volume, a fringe falling to the side, and a thick braid over her shoulder.' },
      strokes: [{ d: hair }, { d: braid(146, 196, 122, 390, 7, 15) }],
    },
    {
      text: { da: 'Tegn halsen, skuldrene og kjolens halsudskæring med iskrystaller.', en: 'Draw the neck, the shoulders and the neckline of the dress with ice crystals.' },
      strokes: [{ d: shoulders }, { d: neckline }, { d: crystals, weight: 0.6 }],
    },
    {
      text: {
        da: 'Visk hjælpelinjerne ud. Skyg blødt langs kinderne, under hagen og på halsen – lyset kommer forfra.',
        en: 'Rub out the helper lines. Shade softly along the cheeks, under the chin and on the neck – the light comes from the front.',
      },
      erase: 'guides',
      strokes: [
        { d: 'M140 140 Q140 200 168 224 Q158 190 152 140 Z M260 140 Q260 200 232 224 Q242 190 248 140 Z', kind: 'shade', fill: 'soft', tone: 0.18 },
        { d: 'M178 236 Q200 252 222 236 L222 258 Q200 266 178 258 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M186 207 Q200 214 214 207 Q200 218 186 207 Z', kind: 'shade', tone: 0.35 },
      ],
    },
    {
      text: {
        da: 'Tegn tynde hårstrå, lad et lille glimt stå hvidt i øjnene, og farvelæg kjolen isblå og håret lyst.',
        en: 'Draw thin strands of hair, leave a tiny white twinkle in the eyes, and colour the dress icy blue and the hair light.',
      },
      tip: { da: 'Glimtet i øjnene gør hende levende.', en: 'The twinkle in the eyes brings her to life.' },
      strokes: [
        { d: strands, weight: 0.5, opacity: 0.6 },
        { d: `${circle(178, 148, 2)} ${circle(226, 148, 2)}`, kind: 'shade', fill: 'paper' },
        { d: 'M92 320 Q120 280 176 270 L178 286 Q200 300 222 286 L224 270 Q280 280 308 320 V400 H92 Z', kind: 'shade', tone: 0.25 },
        { d: `${braid(146, 196, 122, 390, 7, 15)} M136 150 Q124 70 198 62 Q274 66 266 150 Q252 100 200 92 Q150 100 136 150 Z`, kind: 'shade', fill: 'soft', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Et rigtigt portræt! Proportionerne og skyggerne gør hende helt levende.', en: 'A real portrait! The proportions and shading bring her to life.' }],
  nextTip: { da: 'Prøv at tegne et portræt af en ven eller dig selv på samme måde.', en: 'Try drawing a portrait of a friend or yourself the same way.' },
}
