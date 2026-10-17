import { circle, poly, starPoints } from '../shapes'
import type { Lesson } from '../types'

// The lighthouse's outline, traced the other way round so it becomes a hole in the dark sky.
const towerHole =
  'M200 40 L178 76 L184 76 L184 120 L166 120 L166 132 L178 132 L160 340 L240 340 L222 132 L234 132 L234 120 L216 120 L216 76 L222 76 Z'
const sky = `M0 0 H400 V342 H0 Z ${towerHole}`
const beams = 'M184 86 L30 52 L30 144 L184 110 Z M216 86 L370 52 L370 144 L216 110 Z'
const stars = [
  [50, 200, 6],
  [110, 30, 5],
  [300, 210, 6],
  [270, 30, 4],
  [96, 260, 4],
  [350, 260, 5],
]
  .map(([x, y, r]) => poly(starPoints(x, y, r, r * 0.45), true))
  .join(' ')

export const lighthouseDetail: Lesson = {
  id: 'lighthouse-detail',
  title: { da: 'Fyrtårn om natten', en: 'Lighthouse at night' },
  category: 'ting',
  sub: 'bygninger',
  level: 3,
  style: 'detaljer',
  base: 'lighthouse',
  minutes: 18,
  intro: {
    da: 'Byg videre på dit fyrtårn og gør det til nat: en mørk himmel, lysstråler, der skærer gennem mørket, måne og stjerner og lys på vandet.',
    en: 'Build on your lighthouse and make it night: a dark sky, beams of light cutting through the dark, a moon and stars and light on the water.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Skyg himlen mørk hele vejen rundt om fyrtårnet. Tryk let og byg mørket op i lag.',
        en: 'Shade the sky dark all the way around the lighthouse. Press lightly and build the darkness up in layers.',
      },
      tip: { da: 'Det mørke rundt om får lyset til at se meget stærkere ud.', en: 'The darkness around it makes the light look much brighter.' },
      strokes: [{ d: sky, kind: 'shade', fill: 'soft', tone: 0.5 }],
    },
    {
      text: { da: 'Visk lysstrålerne frem igen – de skal være helt lyse – og en lysende ring om lygten.', en: 'Rub the beams of light out again – they should be really light – and a glowing ring around the lamp.' },
      strokes: [{ d: beams, kind: 'shade', fill: 'paper' }, { d: circle(200, 98, 30), kind: 'shade', fill: 'paper' }],
    },
    {
      text: { da: 'Visk en måne og nogle stjerner frem i den mørke himmel.', en: 'Rub out a moon and some stars in the dark sky.' },
      strokes: [{ d: `${circle(330, 196, 18)} ${stars}`, kind: 'shade', fill: 'paper' }],
    },
    {
      text: { da: 'Gør havet mørkt med lyse striber, hvor lyset spejler sig i vandet.', en: 'Make the sea dark with light stripes where the light is reflected in the water.' },
      strokes: [
        { d: 'M0 346 H400 V400 H0 Z', kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: 'M108 358 H172 V362 H108 Z M238 370 H302 V374 H238 Z M128 384 H182 V388 H128 Z', kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'Fyrtårnet lyser op i natten – skibene er i sikkerhed!', en: 'The lighthouse lights up the night – the ships are safe!' }],
  nextTip: { da: 'Tegn et skib på havet, der følger lyset hjem.', en: 'Draw a ship at sea following the light home.' },
}
