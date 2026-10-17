import { circle, radial, ring } from '../shapes'
import type { Lesson } from '../types'

const REAR = [100, 290] as const
const FRONT = [300, 290] as const
const TYRE = 52
const fairing = 'M250 196 L270 186 L334 214 L304 230 Q284 238 270 252 L250 252 Q244 222 250 196 Z'
const tank = 'M196 178 Q228 164 258 172 L250 204 H204 Z'
const tail = 'M196 180 L120 166 L116 176 Q136 196 200 198 Z'
const belly = 'M204 204 H250 L268 250 Q244 266 204 264 Q186 252 188 224 Z'

export const motorcycleReal: Lesson = {
  id: 'motorcycle-real',
  title: { da: 'Naturtro racermotorcykel', en: 'Realistic racing motorbike' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 4,
  style: 'naturtro',
  motif: 'motorcycle',
  minutes: 40,
  intro: {
    da: 'En moderne racermotorcykel med kåbe. Du bygger den op over en trekant af hjælpelinjer og giver den blanke højlys og skygger.',
    en: 'A modern racing motorbike with a fairing. You build it on a triangle of guidelines and give it shiny highlights and shadows.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler'],
  steps: [
    {
      text: {
        da: 'Tegn let to lige store cirkler til hjulene. Afstanden mellem dem er cirka fire hjul-radier.',
        en: 'Lightly draw two circles of the same size for the wheels. The distance between them is about four wheel radii.',
      },
      strokes: [{ d: `${circle(REAR[0], REAR[1], TYRE)} ${circle(FRONT[0], FRONT[1], TYRE)}`, kind: 'guide' }],
    },
    {
      text: {
        da: 'Tegn en trekant af hjælpelinjer: fra baghjulet op til sædet, frem til styret og ned til forhjulet.',
        en: 'Draw a triangle of guidelines: from the back wheel up to the seat, forward to the handlebars and down to the front wheel.',
      },
      tip: { da: 'Trekanten er motorcyklens "skelet". Alt det andet bygges uden på den.', en: 'The triangle is the motorbike’s "skeleton". Everything else is built around it.' },
      strokes: [{ d: 'M100 290 L150 186 L262 170 L300 290 M100 290 H300', kind: 'guide' }],
    },
    {
      text: { da: 'Tegn dækkene og fælgene med fem kraftige eger.', en: 'Draw the tyres and the rims with five strong spokes.' },
      strokes: [
        { d: `${circle(REAR[0], REAR[1], TYRE)} ${circle(FRONT[0], FRONT[1], TYRE)}` },
        { d: `${circle(REAR[0], REAR[1], 38)} ${circle(FRONT[0], FRONT[1], 38)}` },
        { d: `${radial(REAR[0], REAR[1], 8, 38, 5, -90)} ${radial(FRONT[0], FRONT[1], 8, 38, 5, -90)}`, weight: 1.6 },
      ],
    },
    {
      text: { da: 'Tegn tanken oven på trekanten, og sædet og halen, der peger skråt op bagud.', en: 'Draw the tank on top of the triangle, and the seat and tail pointing up at an angle at the back.' },
      strokes: [{ d: tank }, { d: tail }],
    },
    {
      text: { da: 'Tegn kåben, der skråner ned til en spids næse over forhjulet, forruden ovenpå og den nederste kåbe under tanken.', en: 'Draw the fairing sloping down to a pointed nose above the front wheel, the windscreen on top and the lower fairing under the tank.' },
      strokes: [{ d: fairing }, { d: 'M258 176 L280 162 L310 196 M280 162 L270 186' }, { d: belly }],
    },
    {
      text: {
        da: 'Visk hjælpelinjerne ud. Tegn forgaflen, svingarmen til baghjulet og udstødningen under halen.',
        en: 'Erase the guidelines. Draw the front fork, the swingarm to the back wheel and the exhaust under the tail.',
      },
      erase: 'guides',
      strokes: [
        { d: 'M276 238 L296 290 M288 232 L306 284' },
        { d: 'M196 254 L100 286 M202 262 L104 296' },
        { d: 'M190 256 L134 214 Q126 206 116 210 L122 224 L180 266' },
      ],
    },
    {
      text: { da: 'Tegn bremseskiver, en fodhviler og en forlygte.', en: 'Draw brake discs, a footrest and a headlight.' },
      strokes: [
        { d: `${circle(FRONT[0], FRONT[1], 24)} ${radial(FRONT[0], FRONT[1], 16, 22, 10)}`, weight: 0.6 },
        { d: 'M186 252 L170 262 H184' },
        { d: 'M314 208 L330 214 L318 218 Z' },
      ],
    },
    {
      text: {
        da: 'Skyg med lyset oppefra: dækkene mørke, undersiden af tank og kåbe mørkere, og lange hvide højlys på tanken og kåben.',
        en: 'Shade with the light from above: the tyres dark, the undersides of the tank and fairing darker, and long white highlights on the tank and fairing.',
      },
      tip: { da: 'Blanke ting har skarpe højlys lige ved siden af mørke skygger.', en: 'Shiny things have sharp highlights right next to dark shadows.' },
      strokes: [
        { d: `${ring(REAR[0], REAR[1], TYRE, 38)} ${ring(FRONT[0], FRONT[1], TYRE, 38)}`, kind: 'shade', tone: 0.7 },
        { d: `${belly}`, kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: 'M252 222 L318 222 L304 230 Q284 238 270 252 L250 252 Z M206 196 H252 L250 204 H204 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M208 180 Q230 168 254 176 Q230 174 208 186 Z M274 190 L326 212 L320 214 L272 194 Z', kind: 'shade', fill: 'paper' },
        { d: tail, kind: 'shade', fill: 'soft', tone: 0.15 },
        { d: 'M40 346 Q200 334 360 346 Q200 356 40 346 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Den ser lynhurtig ud – selv når den holder stille!', en: 'It looks lightning fast – even when it is standing still!' }],
  nextTip: {
    da: 'Tegn motorcyklen, mens den læner sig ind i et sving, med kører og knæet næsten nede ved vejen.',
    en: 'Draw the motorbike leaning into a bend, with a rider and their knee almost touching the road.',
  },
}
