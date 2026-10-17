import { circle, ellipse, rect } from '../shapes'
import type { Lesson } from '../types'

/** Wallpaper dots in a room, keeping clear of the given boxes (window, furniture). */
const wallpaper = (x0: number, y0: number, x1: number, y1: number, keepClear: [number, number, number, number][]) =>
  Array.from({ length: Math.floor((y1 - y0) / 14) }, (_, r) => y0 + 7 + r * 14)
    .flatMap((y, r) => Array.from({ length: Math.floor((x1 - x0) / 16) }, (_, c) => [x0 + 8 + c * 16 + (r % 2) * 8, y]))
    .filter(([x, y]) => x < x1 - 4 && !keepClear.some(([bx, by, bw, bh]) => x > bx - 6 && x < bx + bw + 6 && y > by - 6 && y < by + bh + 6))
    .map(([x, y]) => circle(x, y, 1.4))
    .join(' ')

const bed = `${rect(88, 222, 8, 36)} ${rect(96, 238, 84, 12)} M96 250 V258 M176 250 V258 ${ellipse(110, 233, 10, 5)}`
const sleepingDoll = `${circle(124, 230, 6)} M130 238 Q150 228 172 238`
const bathtub = 'M212 234 H292 Q292 256 270 256 H234 Q212 256 212 234 Z M220 234 V222 H230'
const sofa = 'M92 356 V324 Q92 316 100 316 H164 Q172 316 172 324 V356 M100 338 H164 M100 330 V356 M164 330 V356'
const lamp = 'M184 356 V318 M176 318 H192 L188 302 H180 Z'
const table = 'M216 326 H284 M222 326 V356 M278 326 V356'
const cake = 'M240 326 V314 H260 V326 M250 314 V306'
const kitchenDoll = `${circle(302, 316, 6)} M302 322 L294 344 H310 Z M299 344 V356 M305 344 V356`

export const dollhouseDetail: Lesson = {
  id: 'dollhouse-detail',
  title: { da: 'Dukkehus med møbler', en: 'Dollhouse with furniture' },
  category: 'ting',
  sub: 'bygninger',
  level: 3,
  style: 'detaljer',
  base: 'dollhouse',
  minutes: 25,
  intro: {
    da: 'Byg videre på dit dukkehus: et soveværelse, et badeværelse, en stue og et køkken – med møbler, tapet og små dukker, der bor der.',
    en: 'Build on your dollhouse: a bedroom, a bathroom, a living room and a kitchen – with furniture, wallpaper and little dolls who live there.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Soveværelset: Tegn en seng med en pude, og en lille dukke, der sover under dynen.', en: 'The bedroom: draw a bed with a pillow, and a little doll sleeping under the duvet.' },
      strokes: [{ d: bed }, { d: sleepingDoll }],
    },
    {
      text: { da: 'Badeværelset: Tegn et badekar med en hane og sæbebobler, og et billede på væggen.', en: 'The bathroom: draw a bathtub with a tap and soap bubbles, and a picture on the wall.' },
      strokes: [
        { d: bathtub },
        { d: `${circle(236, 226, 6)} ${circle(250, 222, 8)} ${circle(266, 226, 6)} ${circle(280, 220, 4)}` },
        { d: `${rect(294, 188, 18, 16)} M296 202 L302 194 L306 200 L310 196` },
      ],
    },
    {
      text: { da: 'Stuen: Tegn en sofa og en standerlampe.', en: 'The living room: draw a sofa and a floor lamp.' },
      strokes: [{ d: sofa }, { d: lamp }],
    },
    {
      text: { da: 'Køkkenet: Tegn et bord med en kage og en dukke, der skal til at spise.', en: 'The kitchen: draw a table with a cake and a doll who is about to eat.' },
      strokes: [{ d: table }, { d: cake }, { d: kitchenDoll }],
    },
    {
      text: { da: 'Tegn tapet med små prikker i soveværelset og køkkenet.', en: 'Draw wallpaper with little dots in the bedroom and the kitchen.' },
      tip: { da: 'Spring over, hvor der står møbler og vinduer.', en: 'Skip the places where there is furniture or a window.' },
      strokes: [
        {
          d: `${wallpaper(80, 160, 200, 222, [[118, 182, 40, 30]])} ${wallpaper(200, 260, 320, 312, [[242, 282, 40, 30], [294, 306, 16, 50]])}`,
          kind: 'shade',
          tone: 0.5,
        },
      ],
    },
    {
      text: {
        da: 'Skyg let oppe under lofterne og bag møblerne – så får værelserne dybde. Farvelæg!',
        en: 'Shade lightly up under the ceilings and behind the furniture – then the rooms get depth. Colour it in!',
      },
      strokes: [
        { d: `${rect(80, 160, 240, 12)} ${rect(80, 260, 240, 12)}`, kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: `${rect(96, 250, 84, 8)} ${rect(92, 350, 80, 6)} ${rect(216, 350, 68, 6)}`, kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: bathtub, kind: 'shade', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Sikke et hyggeligt hjem – dukkerne har det rigtig godt!', en: 'What a cosy home – the dolls are really happy there!' }],
  nextTip: { da: 'Indret dit eget drømmeværelse i dukkehuset.', en: 'Design your own dream room in the dollhouse.' },
}
