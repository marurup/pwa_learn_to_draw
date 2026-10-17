import { circle, ellipse, line } from '../shapes'
import type { Lesson } from '../types'

/** A snowflake: six arms, each with a little V of branches. */
export const snowflake = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = ((i * 60 - 90) * Math.PI) / 180
    const bx = cx + 0.6 * r * Math.cos(a)
    const by = cy + 0.6 * r * Math.sin(a)
    const b = 0.3 * r
    return `${line(cx, cy, cx + r * Math.cos(a), cy + r * Math.sin(a))} ${line(bx, by, bx + b * Math.cos(a - 0.8), by + b * Math.sin(a - 0.8))} ${line(bx, by, bx + b * Math.cos(a + 0.8), by + b * Math.sin(a + 0.8))}`
  }).join(' ')

/** A braid: a chain of tilted ovals from (x1, y1) to (x2, y2). */
export const braid = (x1: number, y1: number, x2: number, y2: number, n: number, w: number) =>
  Array.from({ length: n }, (_, k) => {
    const t = (k + 0.5) / n
    return ellipse(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, w, ((y2 - y1) / n) * 0.62, -15)
  }).join(' ')

export const ICE_PRINCESS = {
  head: circle(200, 96, 30),
  hair: 'M170 100 Q166 58 204 58 Q236 60 232 100 M172 86 Q198 64 230 80',
  tiara: 'M186 62 L190 50 L196 58 L200 46 L204 58 L210 50 L214 62',
  braid: braid(178, 116, 156, 256, 6, 11),
  bodice: 'M180 134 H220 L226 190 H174 Z',
  arms: 'M180 140 Q162 172 160 208 M186 152 Q174 178 172 208 M220 140 Q248 148 262 126 M222 154 Q250 160 268 140',
  hands: `${circle(166, 214, 7)} ${circle(268, 130, 8)}`,
  skirt: 'M174 190 Q150 280 120 360 M226 190 Q250 280 280 360 M120 360 Q140 352 160 360 Q180 368 200 360 Q220 352 240 360 Q260 368 280 360',
  cape: 'M180 136 Q120 210 100 372 Q200 392 300 372 Q280 210 220 136',
}

export const icePrincess: Lesson = {
  id: 'ice-princess',
  title: { da: 'Isprinsesse', en: 'Ice princess' },
  category: 'fantasi',
  sub: 'isriget',
  level: 2,
  minutes: 16,
  intro: {
    da: 'En isprinsesse med en lang fletning, en glitrende kjole og en kappe så let som sne. Hun kan trylle med isen!',
    en: 'An ice princess with a long braid, a glittering dress and a cape as light as snow. She can do magic with ice!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn hovedet, håret, der er strøget til siden, og en lille tiara.', en: 'Draw the head, the hair swept to one side, and a little tiara.' },
      strokes: [
        { d: ICE_PRINCESS.head },
        { d: ICE_PRINCESS.hair },
        { d: ICE_PRINCESS.tiara },
        { d: `${circle(189, 100, 3)} ${circle(211, 100, 3)}`, kind: 'shade', tone: 0.9 },
        { d: 'M192 112 Q200 118 208 112' },
      ],
    },
    {
      text: { da: 'Tegn en lang fletning, der falder ned over skulderen – små ovaler i en række.', en: 'Draw a long braid falling over her shoulder – little ovals in a row.' },
      strokes: [{ d: ICE_PRINCESS.braid }, { d: 'M154 258 l-6 14 M154 258 l2 16 M154 258 l8 12' }],
    },
    {
      text: { da: 'Tegn overdelen af kjolen og arme med lange ærmer – den ene arm løftet til trylleri.', en: 'Draw the top of the dress and arms with long sleeves – one arm raised for magic.' },
      strokes: [{ d: 'M192 124 V134 M208 124 V134' }, { d: ICE_PRINCESS.bodice }, { d: ICE_PRINCESS.arms }, { d: ICE_PRINCESS.hands }],
    },
    {
      text: { da: 'Tegn et langt skørt, der bliver bredere nedad, med en bølget kant.', en: 'Draw a long skirt that gets wider towards the bottom, with a wavy hem.' },
      strokes: [{ d: ICE_PRINCESS.skirt }],
    },
    {
      text: { da: 'Tegn kappen, der flagrer bag hende ud til begge sider.', en: 'Draw the cape flowing behind her out to both sides.' },
      strokes: [{ d: ICE_PRINCESS.cape }],
    },
    {
      text: { da: 'Farvelæg kjolen isblå, kappen næsten hvid og håret lyst.', en: 'Colour the dress icy blue, the cape almost white and the hair light.' },
      tip: { da: 'Tryk let med blyanten for lyse, kolde farver.', en: 'Press lightly with your pencil for light, cool colours.' },
      strokes: [
        { d: `${ICE_PRINCESS.bodice} M174 190 Q150 280 120 360 Q200 372 280 360 Q250 280 226 190 Z`, kind: 'shade', tone: 0.3 },
        { d: `${ICE_PRINCESS.cape}`, kind: 'shade', tone: 0.08 },
        { d: `${ICE_PRINCESS.braid} M170 100 Q166 58 204 58 Q236 60 232 100 Q200 70 170 100 Z`, kind: 'shade', tone: 0.12 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en smuk isprinsesse – hun ser ud til at kunne trylle hele landet hvidt!', en: 'What a beautiful ice princess – she looks like she could turn the whole land white!' }],
  nextTip: { da: 'Tegn snefnug, der hvirvler ud fra hendes hånd.', en: 'Draw snowflakes swirling from her hand.' },
}
