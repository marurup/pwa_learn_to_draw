import { circle, ellipse, mirrorX } from '../shapes'
import type { Lesson } from '../types'
import { FAIRY_WINGS, fairySkirt, fairyStar } from './fairy'

const veinsL = 'M188 158 Q150 126 116 124 M188 162 Q148 150 112 152 M188 178 Q160 190 144 214'
const spotsL = `${circle(122, 132, 5)} ${circle(116, 150, 3.5)} ${circle(146, 212, 4)}`
// A swirl of glitter from the star around the fairy.
const glitter = Array.from({ length: 14 }, (_, i) => {
  const t = i / 13
  const a = Math.PI * (0.1 + 1.6 * t)
  const r = 120 - 30 * t
  return circle(200 + r * Math.cos(a) * 1.1, 180 - r * Math.sin(a) * 0.8 + 60 * t, 1.6 + (i % 3) * 0.6)
}).join(' ')

export const fairyDetail: Lesson = {
  id: 'fairy-detail',
  title: { da: 'Fe i blomsterhaven', en: 'Fairy in the flower garden' },
  category: 'fantasi',
  sub: 'eventyr',
  level: 3,
  style: 'detaljer',
  base: 'fairy',
  minutes: 20,
  intro: {
    da: 'Byg videre på din fe: årer og prikker på vingerne, en blomsterkrans, glimmer, der hvirvler rundt, og en have med en svamp og en blomst.',
    en: 'Build on your fairy: veins and dots on the wings, a flower crown, glitter swirling around, and a garden with a toadstool and a flower.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn tynde årer i vingerne, der går ud fra kroppen, og små prikker ved kanten.', en: 'Draw thin veins in the wings going out from the body, and little dots near the edge.' },
      strokes: [{ d: `${veinsL} ${mirrorX(veinsL, 200)}`, weight: 0.5 }, { d: `${spotsL} ${mirrorX(spotsL, 200)}` }],
    },
    {
      text: { da: 'Tegn en krans af små blomster om knolden og årer i kjolens kronblade.', en: 'Draw a ring of little flowers around the bun and veins in the petals of the dress.' },
      strokes: [
        { d: `${circle(186, 74, 4)} ${circle(192, 62, 4)} ${circle(208, 62, 4)} ${circle(214, 74, 4)}` },
        { d: 'M178 228 L190 186 M196 232 L198 186 M212 232 L206 186 M228 228 L212 186', weight: 0.5 },
      ],
    },
    {
      text: { da: 'Tegn glimmer, der hvirvler rundt om feen i en stor bue.', en: 'Draw glitter swirling around the fairy in a big curve.' },
      strokes: [{ d: glitter, kind: 'shade', tone: 0.6 }],
    },
    {
      text: { da: 'Tegn en have under hende: en svamp med prikker og en stor blomst.', en: 'Draw a garden under her: a toadstool with spots and a big flower.' },
      strokes: [
        { d: 'M40 360 H360' },
        { d: `M80 360 V330 H110 V360 M60 332 Q60 296 95 294 Q130 296 130 332 Z ${circle(82, 312, 5)} ${circle(104, 306, 4)} ${circle(118, 320, 4)}` },
        { d: `M300 360 Q296 330 300 300 ${circle(300, 290, 10)} ${ellipse(300, 270, 8, 12)} ${ellipse(300, 310, 8, 12)} ${ellipse(280, 290, 12, 8)} ${ellipse(320, 290, 12, 8)}` },
        { d: 'M298 340 Q280 326 270 332 Q282 344 298 340' },
      ],
    },
    {
      text: {
        da: 'Skyg vingerne helt let, så de ser gennemsigtige ud, og lad stjernen lyse. Farvelæg!',
        en: 'Shade the wings very lightly so they look see-through, and let the star shine. Colour it in!',
      },
      strokes: [
        {
          d: `${FAIRY_WINGS.upperL} Z ${mirrorX(FAIRY_WINGS.upperL, 200)} Z ${FAIRY_WINGS.lowerL} Z ${mirrorX(FAIRY_WINGS.lowerL, 200)} Z`,
          kind: 'shade',
          fill: 'soft',
          tone: 0.12,
        },
        { d: `${fairySkirt} Z`, kind: 'shade', fill: 'soft', tone: 0.2 },
        { d: circle(288, 50, 24), kind: 'shade', fill: 'soft', tone: 0.12 },
        { d: fairyStar, kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'Hvor er det fortryllende – hele haven glimter!', en: 'How enchanting – the whole garden is sparkling!' }],
  nextTip: { da: 'Tegn et lille fe-hus inde i svampen med en dør og vinduer.', en: 'Draw a little fairy house inside the toadstool with a door and windows.' },
}
