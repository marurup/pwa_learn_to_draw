import { circle, ellipse, ellipseArc, line, poly, type Pt } from '../shapes'
import type { Lesson } from '../types'

const daisyPetals = Array.from({ length: 14 }, (_, i) => {
  const deg = (i * 360) / 14
  const a = (deg * Math.PI) / 180
  return ellipse(200 + 26 * Math.cos(a), 92 + 26 * Math.sin(a), 15, 5, deg)
}).join(' ')

// A round, frilly flower: a circle with a wavy edge.
const frilly: Pt[] = Array.from({ length: 73 }, (_, i) => {
  const a = (i * 5 * Math.PI) / 180
  const r = 24 + 3 * Math.sin(a * 9)
  return [266 + r * Math.cos(a), 128 + r * Math.sin(a)]
})

export const flowerVase: Lesson = {
  id: 'flower-vase',
  title: { da: 'Blomster i vase (stilleben)', en: 'Flowers in a vase (still life)' },
  category: 'natur',
  sub: 'blomster',
  level: 4,
  style: 'naturtro',
  minutes: 30,
  intro: {
    da: 'Et stilleben er en tegning af ting, der står stille. Du tegner en glasvase med tre blomster og lægger lys, skygge og glans på glasset.',
    en: 'A still life is a drawing of things that stand still. You draw a glass vase with three flowers and add light, shadow and shine on the glass.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler'],
  steps: [
    {
      text: {
        da: 'Tegn en let, lodret midterlinje og en vandret streg for bordkanten bagved.',
        en: 'Draw a light vertical centre line and a horizontal line for the back edge of the table.',
      },
      tip: { da: 'Midterlinjen hjælper dig med at gøre vasen lige bred på begge sider.', en: 'The centre line helps you make the vase equally wide on both sides.' },
      strokes: [{ d: line(200, 60, 200, 340), kind: 'guide' }, { d: line(20, 300, 380, 300) }],
    },
    {
      text: {
        da: 'Tegn vasen: en flad oval foroven, to buede sider og en rund bund. Åbningen er en oval, fordi vi ser den lidt oppefra.',
        en: 'Draw the vase: a flat oval at the top, two curved sides and a round bottom. The opening is an oval because we see it slightly from above.',
      },
      strokes: [
        { d: ellipse(200, 212, 34, 8) },
        { d: 'M166 212 Q152 272 172 326' },
        { d: 'M234 212 Q248 272 228 326' },
        { d: ellipseArc(200, 326, 28, 7, 0, 180) },
      ],
    },
    {
      text: {
        da: 'Tegn vandlinjen og stilkene inde i vasen. Tegn dem lettere – de ses gennem glasset.',
        en: 'Draw the water line and the stems inside the vase. Draw them lighter – they are seen through the glass.',
      },
      strokes: [
        { d: ellipse(200, 244, 36, 7), opacity: 0.6 },
        { d: 'M190 214 Q192 270 196 324 M204 214 Q204 270 202 324 M212 214 Q210 270 206 324', opacity: 0.5, weight: 0.7 },
      ],
    },
    {
      text: {
        da: 'Tegn tre blomster: en marguerit i midten, en tulipan til venstre og en rund, kruset blomst til højre – med stilke ned i vasen.',
        en: 'Draw three flowers: a daisy in the middle, a tulip on the left and a round, frilly flower on the right – with stems down into the vase.',
      },
      strokes: [
        { d: circle(200, 92, 11) },
        { d: daisyPetals, weight: 0.8 },
        { d: 'M200 104 Q198 160 200 210' },
        { d: 'M122 126 Q116 166 136 180 Q150 188 164 176 Q176 160 168 122 L156 142 L144 116 L134 144 Z' },
        { d: 'M150 184 Q172 200 190 212' },
        { d: poly(frilly, true) },
        { d: circle(266, 128, 9), weight: 0.7 },
        { d: 'M258 152 Q232 186 212 212' },
      ],
    },
    {
      text: { da: 'Tegn to blade, der hænger ud over vasens kant.', en: 'Draw two leaves hanging out over the rim of the vase.' },
      strokes: [
        { d: 'M186 210 Q146 198 128 236 Q154 220 186 216' },
        { d: 'M214 210 Q256 196 276 236 Q248 220 214 216' },
      ],
    },
    {
      text: {
        da: 'Lyset kommer fra venstre. Skyg vasens højre side og de mørke kanter i glasset, blomsternes højre side og slagskyggen på bordet.',
        en: 'The light comes from the left. Shade the right side of the vase and the dark edges in the glass, the right side of the flowers and the cast shadow on the table.',
      },
      tip: { da: 'Glas er lyst i midten og mørkt langs kanterne.', en: 'Glass is light in the middle and dark along the edges.' },
      strokes: [
        { d: 'M222 216 Q240 270 224 322 Q234 270 222 216 Z', kind: 'shade', fill: 'soft', tone: 0.55 },
        { d: 'M170 218 Q160 270 176 322 Q168 270 170 218 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M228 330 Q300 340 360 322 Q300 316 232 318 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M206 84 Q214 92 206 100 Q212 92 206 84 Z M272 108 Q292 128 274 150 Q284 128 272 108 Z M156 130 Q166 150 156 174 Q170 150 156 130 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
      ],
    },
    {
      text: {
        da: 'Visk midterlinjen ud, og lad en lys stribe stå i venstre side af glasset – det er glansen. Tryk hårdere på skyggesidens streger.',
        en: 'Erase the centre line, and leave a light stripe on the left side of the glass – that is the shine. Press harder on the lines on the shadow side.',
      },
      erase: 'guides',
      strokes: [
        { d: 'M178 222 Q172 262 182 304 Q178 262 184 222 Z', kind: 'shade', fill: 'paper' },
        { d: 'M234 212 Q248 272 228 326', weight: 1.5 },
      ],
    },
  ],
  praise: [{ da: 'Glasset ser ægte ud – det er svært, og du klarede det!', en: 'The glass looks real – that is hard, and you did it!' }],
  nextTip: {
    da: 'Stil en rigtig vase eller et glas i vindueskarmen, og tegn det, du ser.',
    en: 'Put a real vase or glass on the windowsill and draw what you see.',
  },
}
