import { circle, ellipse, line, type Pt } from '../shapes'
import type { Lesson } from '../types'

const HEAD = { cx: 236, cy: 150, r: 58 }
const MUZZLE = { cx: 172, cy: 206, rx: 54, ry: 38, rot: (-35 * Math.PI) / 180 }

const headPts: Pt[] = Array.from({ length: 180 }, (_, i) => {
  const a = (i * 2 * Math.PI) / 180
  return [HEAD.cx + HEAD.r * Math.cos(a), HEAD.cy + HEAD.r * Math.sin(a)]
})
const muzzlePts: Pt[] = Array.from({ length: 180 }, (_, i) => {
  const t = (i * 2 * Math.PI) / 180
  const { cx, cy, rx, ry, rot } = MUZZLE
  return [cx + rx * Math.cos(t) * Math.cos(rot) - ry * Math.sin(t) * Math.sin(rot), cy + rx * Math.cos(t) * Math.sin(rot) + ry * Math.sin(t) * Math.cos(rot)]
})
const inHead = ([x, y]: Pt) => Math.hypot(x - HEAD.cx, y - HEAD.cy) < HEAD.r
const inMuzzle = ([x, y]: Pt) => {
  const { cx, cy, rx, ry, rot } = MUZZLE
  const u = (x - cx) * Math.cos(rot) + (y - cy) * Math.sin(rot)
  const v = -(x - cx) * Math.sin(rot) + (y - cy) * Math.cos(rot)
  return (u / rx) ** 2 + (v / ry) ** 2 < 1
}
/** The part of a closed curve that lies outside another shape, starting where it leaves that shape. */
function outside(pts: Pt[], inOther: (p: Pt) => boolean): Pt[] {
  const start = pts.findIndex((p, i) => !inOther(p) && inOther(pts[(i - 1 + pts.length) % pts.length]))
  const run: Pt[] = []
  for (let k = 0; k < pts.length && !inOther(pts[(start + k) % pts.length]); k++) run.push(pts[(start + k) % pts.length])
  return run
}
// Both curves run clockwise, so the head's outer arc continues straight into the muzzle's.
const outline = 'M' + [...outside(headPts, inMuzzle), ...outside(muzzlePts, inHead)].map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L') + ' Z'

// Spiral bands on the horn: from the left edge to a little higher on the right edge.
const hornL = (f: number): Pt => [203 - 19 * f, 102 - 72 * f]
const hornR = (f: number): Pt => [226 - 42 * f, 93 - 63 * f]
const hornBands = [0.15, 0.35, 0.55, 0.75].map((f) => line(...hornL(f), ...hornR(f + 0.1))).join(' ')

const mane =
  'M262 98 Q300 86 304 120 Q330 128 322 156 Q350 172 334 200 Q360 222 340 246 Q362 274 336 292 Q352 322 326 340 Q336 352 322 362'

export const unicorn: Lesson = {
  id: 'unicorn',
  title: { da: 'Enhjørning', en: 'Unicorn' },
  category: 'fantasi',
  sub: 'eventyr',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En enhjørning med et snoet horn og en bølgende manke. Hovedet bygges af en cirkel og en oval.',
    en: 'A unicorn with a twisted horn and a flowing mane. The head is built from a circle and an oval.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Tegn en cirkel til hovedet og en skrå oval til mulen nede til venstre. De må gerne gå lidt ind over hinanden.',
        en: 'Draw a circle for the head and a tilted oval for the muzzle down to the left. They can overlap a little.',
      },
      strokes: [
        { d: circle(HEAD.cx, HEAD.cy, HEAD.r), id: 'head' },
        { d: ellipse(MUZZLE.cx, MUZZLE.cy, MUZZLE.rx, MUZZLE.ry, -35), id: 'muzzle' },
      ],
    },
    {
      text: { da: 'Visk stregerne ud, hvor de to former går ind over hinanden. Nu har du hovedets omrids.', en: 'Erase the lines where the two shapes overlap. Now you have the outline of the head.' },
      erase: ['head', 'muzzle'],
      strokes: [{ d: outline }],
    },
    {
      text: { da: 'Tegn halsen: to buede streger ned fra hovedet.', en: 'Draw the neck: two curved lines down from the head.' },
      strokes: [{ d: 'M226 207 Q236 290 226 362 M290 168 Q318 250 322 362' }],
    },
    {
      text: { da: 'Tegn et spidst øre og hornet på panden. Tegn skrå streger hen over hornet, så det ser snoet ud.', en: 'Draw a pointy ear and the horn on the forehead. Draw slanted lines across the horn so it looks twisted.' },
      strokes: [
        { d: 'M251 95 L270 50 L280 108 M258 94 L269 64 L275 102' },
        { d: 'M203 102 L184 30 L226 93' },
        { d: hornBands, weight: 0.8 },
      ],
    },
    {
      text: { da: 'Tegn et stort øje med vipper, et næsebor og en glad mund.', en: 'Draw a big eye with lashes, a nostril and a happy mouth.' },
      strokes: [
        { d: circle(220, 146, 10), kind: 'shade', tone: 0.9 },
        { d: circle(216, 142, 3), kind: 'shade', fill: 'paper' },
        { d: 'M210 136 l-5 -6 M218 134 l-1 -8 M226 136 l4 -6' },
        { d: 'M136 214 q4 -5 9 0' },
        { d: 'M140 236 Q152 244 164 238' },
      ],
    },
    {
      text: { da: 'Tegn manken som bølgende lokker ned ad halsen, og en lille pandelok ved hornet.', en: 'Draw the mane as wavy locks down the neck, and a little forelock by the horn.' },
      tip: { da: 'Tegn lokkerne som bløde S-buer – så ser manken ud, som om den blafrer i vinden.', en: 'Draw the locks as soft S-curves – then the mane looks like it is blowing in the wind.' },
      strokes: [
        { d: mane },
        { d: 'M300 122 Q312 140 300 156 M320 160 Q332 180 316 198 M334 206 Q346 226 330 244 M336 252 Q348 272 330 288', weight: 0.7 },
        { d: 'M246 98 Q226 98 222 118 Q236 108 248 112' },
      ],
    },
    {
      text: { da: 'Farvelæg: manken i regnbuens farver, et gyldent horn og lyserøde kinder.', en: 'Colour it in: the mane in rainbow colours, a golden horn and pink cheeks.' },
      strokes: [
        { d: 'M203 102 L184 30 L226 93 Z', kind: 'shade', tone: 0.25 },
        { d: circle(196, 184, 9), kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: `${mane} L322 362 Q318 250 290 168 Q280 118 262 98 Z`, kind: 'shade', fill: 'soft', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Magisk! Din enhjørning ser ud, som om den er sprunget ud af et eventyr.', en: 'Magical! Your unicorn looks like it jumped right out of a fairy tale.' }],
  nextTip: { da: 'Giv enhjørningen vinger, eller tegn den på en sky med en regnbue.', en: 'Give the unicorn wings, or draw it on a cloud with a rainbow.' },
}
