import { circle, ellipse, type Pt } from '../shapes'
import type { Lesson, Stroke } from '../types'

const XS = [72, 200, 328]
const face = (cx: number): Stroke[] => [
  { d: `${circle(cx - 15, 208, 3)} ${circle(cx + 15, 208, 3)}`, kind: 'shade', tone: 0.9 },
  { d: `M${cx - 3} 216 Q${cx - 6} 228 ${cx + 3} 228 M${cx - 12} 240 Q${cx} 248 ${cx + 12} 240` },
  { d: `M${cx - 46} 204 Q${cx - 56} 206 ${cx - 52} 222 Q${cx - 50} 232 ${cx - 44} 230 M${cx + 46} 204 Q${cx + 56} 206 ${cx + 52} 222 Q${cx + 50} 232 ${cx + 44} 230` },
]

// Curly hair: a bumpy outline around the top and sides of the head.
const curlyPts: Pt[] = Array.from({ length: 85 }, (_, i) => {
  const deg = 150 + i * 3
  const a = (deg * Math.PI) / 180
  const r = 70 + 7 * Math.abs(Math.sin(a * 7))
  return [328 + r * Math.cos(a) * 0.95, 200 + r * Math.sin(a)]
})
const curlyOutline = 'M' + curlyPts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L')
const curls = [
  [300, 150],
  [340, 140],
  [370, 170],
  [284, 182],
  [322, 172],
  [270, 230],
  [386, 222],
]
  .map(([x, y]) => `M${x} ${y} a7 7 0 1 1 7 7 a4 4 0 1 1 -3 -6`)
  .join(' ')

export const hairstyles: Lesson = {
  id: 'hairstyles',
  title: { da: 'Tre frisurer', en: 'Three hairstyles' },
  category: 'mennesker',
  sub: 'ansigter',
  level: 3,
  style: 'detaljer',
  minutes: 20,
  intro: {
    da: 'Kort og strittende, langt og glat eller krøllet. Lær at tegne hår i lokker og former – ikke hår for hår.',
    en: 'Short and spiky, long and straight or curly. Learn to draw hair in locks and shapes – not hair by hair.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Tegn tre ovale hoveder ved siden af hinanden, med en hals under hvert.', en: 'Draw three oval heads side by side, with a neck under each.' },
      strokes: XS.map((cx) => ({ d: `${ellipse(cx, 212, 46, 58)} M${cx - 16} 268 V300 M${cx + 16} 268 V300` })),
    },
    {
      text: { da: 'Tegn enkle ansigter og ører. Det er håret, der er hovedsagen i dag.', en: 'Draw simple faces and ears. The hair is the main thing today.' },
      strokes: XS.flatMap(face),
    },
    {
      text: {
        da: 'Kort og strittende: Tegn hårets form som en hætte over hovedet, med spidser foroven.',
        en: 'Short and spiky: draw the shape of the hair like a cap over the head, with spikes on top.',
      },
      tip: { da: 'Håret ligger udenpå hovedet – tegn det lidt større end hovedets kant.', en: 'Hair sits on top of the head – draw it a little bigger than the edge of the head.' },
      strokes: [{ d: 'M24 204 Q20 152 46 138 L40 120 L58 132 L62 110 L76 128 L88 108 L94 130 L110 118 L106 140 Q124 154 120 204 Q112 174 96 168 Q72 178 48 168 Q32 176 24 204 Z' }],
      labels: [{ x: 72, y: 330, text: { da: 'kort', en: 'short' } }],
    },
    {
      text: {
        da: 'Langt og glat: Tegn håret ned over skuldrene og en pandehår, der hænger lige ned. Tegn et par lange streger, der følger håret.',
        en: 'Long and straight: draw the hair down over the shoulders and a fringe hanging straight down. Draw a few long lines following the hair.',
      },
      strokes: [
        { d: 'M154 214 Q144 136 200 132 Q256 136 246 214 L258 330 Q228 320 232 270 M154 214 L142 330 Q172 320 168 270' },
        { d: 'M156 186 Q170 172 180 188 Q190 168 204 186 Q216 168 228 186 Q238 172 246 184' },
        { d: 'M150 234 L146 314 M160 240 L156 318 M250 234 L254 314 M240 240 L244 318', weight: 0.6, opacity: 0.7 },
      ],
      labels: [{ x: 200, y: 352, text: { da: 'langt', en: 'long' } }],
    },
    {
      text: {
        da: 'Krøllet: Tegn en bulet sky af hår rundt om hovedet, og små krøller inden i.',
        en: 'Curly: draw a bumpy cloud of hair around the head, with little curls inside.',
      },
      strokes: [{ d: curlyOutline }, { d: curls, weight: 0.6 }],
      labels: [{ x: 328, y: 330, text: { da: 'krøllet', en: 'curly' } }],
    },
    {
      text: {
        da: 'Hår kaster skygge: Skyg let på panden under håret og i de dybeste dele af håret.',
        en: 'Hair casts shadows: shade lightly on the forehead under the hair and in the deepest parts of the hair.',
      },
      strokes: [
        { d: 'M40 176 Q72 186 104 176 Q72 196 40 176 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M160 190 Q200 202 240 190 Q200 210 160 190 Z M150 240 L146 320 L156 320 L160 244 Z M250 240 L254 320 L244 320 L240 244 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M290 172 Q328 160 366 172 Q328 186 290 172 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: 'M378 160 Q400 200 390 246 Q378 210 372 176 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Tre helt forskellige frisurer – du er en rigtig frisør med blyanten!', en: 'Three completely different hairstyles – you are a real hairdresser with a pencil!' }],
  nextTip: { da: 'Tegn flere frisurer: hestehale, fletninger, knold eller en mohawk.', en: 'Draw more hairstyles: a ponytail, plaits, a bun or a mohawk.' },
}
