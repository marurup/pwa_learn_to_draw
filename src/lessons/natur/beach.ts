import { arc, circle, line } from '../shapes'
import type { Lesson } from '../types'

const star = (x: number, y: number, r: number) =>
  Array.from({ length: 10 }, (_, i) => {
    const rr = i % 2 ? r * 0.45 : r
    const a = ((-90 + i * 36) * Math.PI) / 180
    return `${i ? 'L' : 'M'}${(x + rr * Math.cos(a)).toFixed(1)} ${(y + rr * Math.sin(a)).toFixed(1)}`
  }).join(' ') + ' Z'

export const beach: Lesson = {
  id: 'beach',
  title: { da: 'Strand med palme', en: 'Beach with a palm tree' },
  category: 'natur',
  sub: 'landskab',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En solskinsstrand med hav, en palme, en sejlbåd og en søstjerne i sandet.',
    en: 'A sunny beach with the sea, a palm tree, a sailing boat and a starfish in the sand.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn horisonten: en lige streg, hvor havet møder himlen.', en: 'Draw the horizon: a straight line where the sea meets the sky.' },
      strokes: [{ d: line(16, 196, 384, 196) }],
    },
    {
      text: { da: 'Tegn strandkanten som en blød bue, og et par små bølger på havet.', en: 'Draw the edge of the beach as a soft curve, and a few small waves on the sea.' },
      strokes: [
        { d: 'M16 292 Q200 246 384 272' },
        { d: 'M60 226 q8 -6 16 0 q8 -6 16 0 M250 216 q8 -6 16 0 q8 -6 16 0 M300 244 q8 -6 16 0 q8 -6 16 0' },
      ],
    },
    {
      text: { da: 'Tegn palmens stamme: to buede streger, der læner sig lidt.', en: 'Draw the palm trunk: two curved lines leaning a little.' },
      strokes: [
        { d: 'M96 352 Q104 256 146 172' },
        { d: 'M120 354 Q126 262 160 176' },
        { d: 'M104 320 q10 4 18 0 M108 286 q10 4 18 0 M116 252 q10 4 18 -1 M126 220 q10 3 17 -2', weight: 0.7 },
      ],
    },
    {
      text: { da: 'Tegn palmeblade: fem lange, buede blade, der hænger ud fra toppen.', en: 'Draw palm leaves: five long, curved leaves hanging out from the top.' },
      tip: { da: 'Start alle bladene i samme punkt øverst på stammen.', en: 'Start all the leaves at the same point at the top of the trunk.' },
      strokes: [
        { d: 'M154 172 Q110 140 62 172 Q108 156 154 176' },
        { d: 'M154 172 Q130 118 86 112 Q126 132 152 170' },
        { d: 'M154 172 Q170 116 214 108 Q178 132 158 170' },
        { d: 'M154 172 Q206 146 246 176 Q202 162 156 176' },
        { d: 'M154 174 Q140 202 120 226 Q146 206 158 178' },
      ],
    },
    {
      text: { da: 'Tegn en sol, der er ved at gå ned i havet, og en lille sejlbåd.', en: 'Draw a sun setting into the sea, and a little sailing boat.' },
      strokes: [
        { d: arc(318, 196, 32, 180, 360) },
        { d: 'M222 186 H258 L252 194 H228 Z M240 186 V150 L258 182 Z' },
      ],
    },
    {
      text: { da: 'Tegn kokosnødder i palmen, en søstjerne og en muslingeskal i sandet. Farvelæg!', en: 'Draw coconuts in the palm tree, a starfish and a seashell in the sand. Colour it in!' },
      strokes: [
        { d: `${circle(146, 184, 7)} ${circle(160, 188, 7)}` },
        { d: star(270, 330, 18) },
        { d: 'M196 352 Q206 330 218 352 Z M200 350 L207 336 M207 351 V336 M214 350 L207 336', weight: 0.8 },
      ],
    },
  ],
  praise: [{ da: 'Man kan næsten høre bølgerne!', en: 'You can almost hear the waves!' }],
  nextTip: { da: 'Tegn et sandslot og en parasol på stranden.', en: 'Draw a sandcastle and a beach umbrella on the beach.' },
}
