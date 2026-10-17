import { arc, line, rect } from '../shapes'
import type { Lesson } from '../types'

const H = 210 // horizon
const reflections = [
  [194, 206, 222],
  [186, 214, 236],
  [178, 222, 252],
  [168, 232, 272],
  [158, 242, 296],
  [146, 254, 324],
]
  .map(([x1, x2, y]) => rect(x1, y, x2 - x1, 3))
  .join(' ')
const waves = [
  [40, 236, 26],
  [300, 246, 30],
  [70, 270, 34],
  [282, 286, 40],
  [30, 314, 44],
  [310, 330, 46],
  [100, 352, 50],
  [240, 372, 56],
]
  .map(([x, y, w]) => `M${x} ${y} q${w / 4} -5 ${w / 2} 0 q${w / 4} -5 ${w / 2} 0`)
  .join(' ')

export const sunsetSea: Lesson = {
  id: 'sunset-sea',
  title: { da: 'Solnedgang over havet', en: 'Sunset over the sea' },
  category: 'natur',
  sub: 'landskab',
  level: 4,
  style: 'naturtro',
  minutes: 25,
  intro: {
    da: 'En stemningsfuld solnedgang tegnet med toner: mørk himmel foroven, lys omkring solen og en glitrende spejling i vandet.',
    en: 'A moody sunset drawn with tones: a dark sky at the top, light around the sun and a sparkling reflection in the water.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn horisonten lidt over midten af papiret. Brug en lineal.', en: 'Draw the horizon a little above the middle of the paper. Use a ruler.' },
      strokes: [{ d: line(10, H, 390, H) }],
    },
    {
      text: { da: 'Tegn solen som en halv cirkel, der står på horisonten.', en: 'Draw the sun as a half circle sitting on the horizon.' },
      strokes: [{ d: arc(200, H, 44, 180, 360) }],
    },
    {
      text: {
        da: 'Skyg himlen: mørkest helt foroven og lysere ned mod solen. Lad området lige om solen være helt lyst.',
        en: 'Shade the sky: darkest at the very top and lighter down towards the sun. Keep the area right around the sun completely light.',
      },
      tip: { da: 'Tegn med siden af blyantsstiften, og gnid ud med et stykke papir.', en: 'Draw with the side of the pencil lead, and smudge with a piece of paper.' },
      strokes: [{ d: rect(10, 10, 380, H - 10), kind: 'shade', fill: 'fade-down' }],
    },
    {
      text: {
        da: 'Skyg havet: lysest ved horisonten og mørkere, jo tættere det kommer på dig.',
        en: 'Shade the sea: lightest at the horizon and darker the closer it gets to you.',
      },
      strokes: [{ d: rect(10, H, 380, 180), kind: 'shade', fill: 'fade-up' }],
    },
    {
      text: {
        da: 'Visk solens spejling frem i vandet: vandrette striber under solen, der bliver bredere og kortere nedad.',
        en: 'Erase the sun’s reflection into the water: horizontal stripes under the sun that get wider and further apart going down.',
      },
      tip: { da: 'Viskelæderet er også et tegneredskab – det tegner med lys!', en: 'The eraser is a drawing tool too – it draws with light!' },
      strokes: [{ d: reflections, kind: 'shade', fill: 'paper' }],
    },
    {
      text: {
        da: 'Tegn lange, flade skyer, der ligger foran solen, og skyg dem mørkt. Lad underkanten være lys – der rammer solen.',
        en: 'Draw long, flat clouds lying in front of the sun, and shade them dark. Keep the bottom edge light – that is where the sun hits.',
      },
      strokes: [
        { d: 'M70 150 Q130 132 210 140 Q280 132 330 150 Q260 160 200 156 Q130 162 70 150 Z', kind: 'shade', fill: 'soft', tone: 0.6 },
        { d: 'M120 182 Q170 172 230 178 Q270 174 300 186 Q240 190 190 188 Q150 192 120 182 Z', kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: 'M90 154 Q150 160 200 158 Q260 160 316 152', kind: 'line', weight: 0.5, opacity: 0.6 },
      ],
    },
    {
      text: {
        da: 'Tegn små bølger, der bliver større forrest, og en sejlbåd som en mørk silhuet. Nu har du en hel stemning!',
        en: 'Draw little waves that get bigger at the front, and a sailing boat as a dark silhouette. Now you have a whole mood!',
      },
      strokes: [
        { d: waves, weight: 0.7 },
        { d: 'M300 196 H340 L334 204 H306 Z M318 196 V156 L340 192 Z M316 196 V164 L300 192 Z', kind: 'shade', tone: 0.85 },
        { d: 'M60 90 q7 -7 14 0 q7 -7 14 0 M100 70 q5 -5 10 0 q5 -5 10 0', weight: 0.8 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en stemning – man kan næsten mærke aftensolen!', en: 'What a mood – you can almost feel the evening sun!' }],
  nextTip: { da: 'Prøv den samme solnedgang med farveblyanter: orange, lilla og mørkeblå.', en: 'Try the same sunset with coloured pencils: orange, purple and dark blue.' },
}
