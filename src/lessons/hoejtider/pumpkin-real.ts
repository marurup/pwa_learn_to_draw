import { ellipse, mirrorX } from '../shapes'
import type { Lesson } from '../types'

// A squat pumpkin with a dip at the top and the bottom, and ribs curving between them.
const outline = 'M200 168 C150 140 70 150 70 240 C70 320 150 340 200 318 C250 340 330 320 330 240 C330 150 250 140 200 168 Z'
const ribOuterL = 'M200 168 C178 156 128 168 126 240 C126 312 176 330 200 318'
const ribInnerL = 'M200 168 C192 164 166 182 164 240 C164 300 190 322 200 318'
const grooveShadeL = 'M126 240 C126 312 176 330 200 318 C170 320 136 300 136 240 C136 180 170 162 200 168 C176 158 128 168 126 240 Z'

export const pumpkinReal: Lesson = {
  id: 'pumpkin-real',
  title: { da: 'Naturtro græskar', en: 'Realistic pumpkin' },
  category: 'hoejtider',
  sub: 'halloween',
  level: 4,
  style: 'naturtro',
  motif: 'pumpkin',
  minutes: 30,
  intro: {
    da: 'Et græskar, der ser ægte ud: buede riller, en knudret stilk, dybe skygger i rillerne og blanke højlys.',
    en: 'A pumpkin that looks real: curved ribs, a knobbly stalk, deep shadows in the grooves and shiny highlights.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Tegn let en flad oval og en lodret midterlinje. Et græskar er bredere, end det er højt.',
        en: 'Lightly draw a flat oval and a vertical centre line. A pumpkin is wider than it is tall.',
      },
      strokes: [{ d: ellipse(200, 244, 130, 86), kind: 'guide' }, { d: 'M200 140 V340', kind: 'guide' }],
    },
    {
      text: { da: 'Tegn omridset med en lille fordybning foroven og forneden, hvor rillerne mødes.', en: 'Draw the outline with a small dip at the top and bottom where the ribs meet.' },
      strokes: [{ d: outline }],
    },
    {
      text: {
        da: 'Tegn rillerne: buer fra toppen til bunden. De yderste buer er bredest, de inderste smallest.',
        en: 'Draw the ribs: curves from the top to the bottom. The outer curves are widest, the inner ones narrowest.',
      },
      tip: { da: 'Rillerne følger græskarrets runde form – derfor er de buede.', en: 'The ribs follow the pumpkin’s round shape – that is why they are curved.' },
      strokes: [{ d: `${ribOuterL} ${mirrorX(ribOuterL, 200)}` }, { d: `${ribInnerL} ${mirrorX(ribInnerL, 200)}` }],
    },
    {
      text: { da: 'Visk hjælpelinjerne ud. Tegn en tyk, knudret stilk med små furer.', en: 'Erase the guidelines. Draw a thick, knobbly stalk with little furrows.' },
      erase: 'guides',
      strokes: [{ d: 'M188 166 Q186 136 172 118 Q180 110 190 116 Q206 132 212 164' }, { d: 'M192 160 Q190 140 182 126 M200 162 Q200 140 192 124', weight: 0.6 }],
    },
    {
      text: {
        da: 'Lyset kommer fra venstre. Skyg rillerne mørke, og hele højre side lidt mørkere end venstre.',
        en: 'The light comes from the left. Shade the grooves dark, and the whole right side a little darker than the left.',
      },
      strokes: [
        { d: `${grooveShadeL} ${mirrorX(grooveShadeL, 200)}`, kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M236 168 C290 150 330 170 330 240 C330 320 250 340 220 322 C300 300 304 200 236 168 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: outline, kind: 'shade', fill: 'soft', tone: 0.12 },
      ],
    },
    {
      text: {
        da: 'Lad et blankt højlys stå på hver bule til venstre, og tegn slagskyggen på bordet.',
        en: 'Leave a shiny highlight on each bulge on the left, and draw the cast shadow on the table.',
      },
      strokes: [
        { d: `${ellipse(98, 214, 6, 22, 10)} ${ellipse(146, 206, 6, 20, 6)} ${ellipse(182, 204, 5, 18)}`, kind: 'shade', fill: 'paper' },
        { d: 'M110 324 Q220 344 350 330 Q250 352 120 334 Z', kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: 'M172 118 Q180 110 190 116 Q206 132 212 164 L200 164 Q198 136 184 120 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
      ],
    },
  ],
  praise: [{ da: 'Det græskar ser så ægte ud, at man kunne bære det ind i køkkenet!', en: 'That pumpkin looks so real you could carry it into the kitchen!' }],
  nextTip: { da: 'Læg et rigtigt græskar foran dig, og tegn det med lyset fra en lampe.', en: 'Put a real pumpkin in front of you and draw it with the light from a lamp.' },
}
