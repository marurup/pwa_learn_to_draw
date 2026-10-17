import { arc, circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const rock = 'M50 360 Q56 300 100 278 Q140 262 180 280 Q240 284 290 290 Q336 300 344 360'
const tailTop = 'M186 236 Q230 252 268 250 Q296 248 308 230'
const tailBottom = 'M158 248 Q190 282 250 282 Q296 280 318 254'
const fin = 'M308 230 Q310 196 338 182 Q332 208 346 226 Q330 240 318 254'
const scales = [
  [204, 256],
  [222, 260],
  [240, 262],
  [258, 262],
  [276, 260],
  [212, 270],
  [230, 272],
  [248, 272],
  [266, 271],
  [284, 266],
  [294, 252],
]
  .map(([x, y]) => arc(x, y, 6, 20, 160))
  .join(' ')
const waves = [366, 380, 394]
  .map((y, i) => `M${10 + (i % 2) * 14} ${y}` + ' q10 -6 20 0 q10 6 20 0'.repeat(9))
  .join(' ')

export const mermaidRock: Lesson = {
  id: 'mermaid-rock',
  title: { da: 'Havfrue på en klippe', en: 'Mermaid on a rock' },
  category: 'fantasi',
  sub: 'havfruer',
  level: 3,
  style: 'detaljer',
  motif: 'mermaid',
  minutes: 25,
  intro: {
    da: 'En havfrue, der sidder på en klippe i havet, med halen hvilende på stenen og håret blafrende i vinden.',
    en: 'A mermaid sitting on a rock in the sea, with her tail resting on the stone and her hair blowing in the wind.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn havets horisont som en vandret streg, og en stor, rund klippe forneden.', en: 'Draw the horizon of the sea as a flat line, and a big, round rock at the bottom.' },
      strokes: [{ d: 'M10 236 H130 M246 236 H304 M350 236 H390' }, { d: rock }],
    },
    {
      text: { da: 'Tegn hovedet, kroppen og armene. Den ene arm støtter på klippen.', en: 'Draw the head, the body and the arms. One arm leans on the rock.' },
      tip: { da: 'Hun sidder lidt over midten af klippen – tegn hende, så hun rører stenen.', en: 'She sits a little above the middle of the rock – draw her so she touches the stone.' },
      strokes: [
        { d: circle(170, 120, 26) },
        { d: 'M162 146 Q154 180 158 240 M180 146 Q190 180 186 236' },
        { d: `M160 158 Q130 200 126 262 ${ellipse(124, 266, 7, 4)}` },
        { d: `M182 158 Q200 190 196 220 ${circle(196, 225, 5)}` },
      ],
    },
    {
      text: {
        da: 'Tegn halen, der ligger hen over klippen og løfter sig for enden, og en stor halefinne.',
        en: 'Draw the tail lying across the rock and lifting at the end, and a big tail fin.',
      },
      strokes: [{ d: `${tailTop} ${tailBottom}` }, { d: fin }],
    },
    {
      text: { da: 'Tegn det lange hår, der blafrer bagud i vinden.', en: 'Draw the long hair blowing backwards in the wind.' },
      strokes: [
        { d: 'M146 116 Q144 86 170 92 Q198 90 200 118 Q214 150 232 170 Q252 196 238 226' },
        { d: 'M196 132 Q200 160 214 178 Q228 198 218 222 M146 116 Q138 140 150 162' },
        { d: 'M154 106 Q166 112 172 98 Q180 110 192 104' },
      ],
    },
    {
      text: { da: 'Tegn ansigtet og muslinge-toppen.', en: 'Draw the face and the shell top.' },
      strokes: [
        { d: `${circle(162, 122, 3)} ${circle(178, 122, 3)}`, kind: 'shade', tone: 0.9 },
        { d: 'M164 132 Q170 137 176 132' },
        { d: 'M160 174 Q165 162 172 172 Z M174 172 Q181 162 186 174 Z' },
      ],
    },
    {
      text: { da: 'Tegn skæl på halen, streger i finnen og revner i klippen.', en: 'Draw scales on the tail, lines in the fin and cracks in the rock.' },
      strokes: [
        { d: scales, weight: 0.6 },
        { d: 'M318 240 L332 196 M322 244 L340 222', weight: 0.6 },
        { d: 'M90 320 L104 304 L100 292 M260 330 L272 314 M300 322 L312 336', weight: 0.7 },
      ],
    },
    {
      text: { da: 'Tegn bølger foran klippen, en sol, der går ned i havet bag havfruen, og et par måger.', en: 'Draw waves in front of the rock, a sun setting in the sea behind the mermaid and a couple of seagulls.' },
      strokes: [
        { d: waves, weight: 0.8 },
        { d: `${arc(66, 236, 24, 180, 360)} M36 246 H96 M46 254 H86`, weight: 0.8 },
        { d: 'M70 150 q8 -8 16 0 q8 -8 16 0 M280 90 q6 -6 12 0 q6 -6 12 0', weight: 0.8 },
      ],
    },
    {
      text: {
        da: 'Skyg klippens højre side og under halen, og lad en lys stribe stå på halen. Farvelæg solnedgangen!',
        en: 'Shade the right side of the rock and under the tail, and leave a light stripe on the tail. Colour in the sunset!',
      },
      strokes: [
        { d: 'M290 290 Q336 300 344 360 L300 360 Q300 320 280 296 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M160 252 Q190 288 250 288 Q296 286 318 258 L318 270 Q290 300 230 298 Q180 294 160 252 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M196 246 Q236 262 290 254 Q236 268 196 246 Z', kind: 'shade', fill: 'paper' },
        { d: 'M200 132 Q216 156 232 172 Q246 192 238 226 Q226 196 216 180 Q204 160 200 132 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en drømmeagtig tegning – havfruen, klippen og solnedgangen!', en: 'What a dreamy drawing – the mermaid, the rock and the sunset!' }],
  nextTip: { da: 'Tegn en delfin, der hopper op af vandet ved siden af havfruen.', en: 'Draw a dolphin jumping out of the water next to the mermaid.' },
}
