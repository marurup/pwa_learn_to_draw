import { circle, ellipse, line } from '../shapes'
import type { Lesson, Stroke } from '../types'

/** A stick figure at x = cx: head, spine, shoulders, hips, arms and legs with joints. */
function skeleton(cx: number, kind: 'line' | 'guide'): Stroke[] {
  const s = (d: string): Stroke => ({ d, kind })
  return [
    s(circle(cx, 86, 26)),
    s(line(cx, 112, cx, 232)),
    s(line(cx - 32, 128, cx + 32, 128)),
    s(line(cx - 20, 232, cx + 20, 232)),
    s(`M${cx - 32} 128 L${cx - 44} 186 L${cx - 50} 240 M${cx + 32} 128 L${cx + 44} 186 L${cx + 50} 240`),
    s(`M${cx - 20} 232 L${cx - 24} 306 L${cx - 26} 376 M${cx + 20} 232 L${cx + 24} 306 L${cx + 26} 376`),
  ]
}

const joints = (cx: number) =>
  [
    [cx - 44, 186],
    [cx + 44, 186],
    [cx - 24, 306],
    [cx + 24, 306],
  ]
    .map(([x, y]) => circle(x, y, 4))
    .join(' ')

const B = 292 // the right-hand figure

export const figure: Lesson = {
  id: 'figure',
  title: { da: 'Fra pindemand til krop', en: 'From stick figure to body' },
  category: 'mennesker',
  sub: 'krop',
  level: 2,
  minutes: 15,
  intro: {
    da: 'Alle kunstnere starter en person med en pindemand. Så bygger de kroppen udenpå med enkle former.',
    en: 'All artists start a person with a stick figure. Then they build the body on top with simple shapes.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Tegn en pindemand til venstre: hoved, ryg, en streg for skuldrene og en kortere for hofterne.',
        en: 'Draw a stick figure on the left: head, back, a line for the shoulders and a shorter one for the hips.',
      },
      tip: {
        da: 'En person er cirka 6 hoveder høj. Skuldrene er cirka 2–3 hoveder brede.',
        en: 'A person is about 6 heads tall. The shoulders are about 2–3 heads wide.',
      },
      strokes: skeleton(108, 'line').slice(0, 4),
    },
    {
      text: {
        da: 'Tegn arme og ben med små cirkler ved albuer og knæ. Albuerne sidder ved taljen, og hænderne når ned til lårene.',
        en: 'Draw arms and legs with small circles at the elbows and knees. The elbows sit at the waist, and the hands reach the thighs.',
      },
      strokes: [...skeleton(108, 'line').slice(4), { d: joints(108) }],
    },
    {
      text: { da: 'Tegn den samme pindemand helt let til højre. Den er skelettet, som kroppen bygges på.', en: 'Draw the same stick figure very lightly on the right. It is the skeleton the body is built on.' },
      strokes: skeleton(B, 'guide'),
    },
    {
      text: { da: 'Tegn kroppen udenpå: en hals, en overkrop, der er bredest ved skuldrene, og et bækken.', en: 'Draw the body on top: a neck, a chest that is widest at the shoulders, and the hips.' },
      strokes: [
        { d: ellipse(B, 86, 24, 28) },
        { d: `M${B - 8} 112 V120 M${B + 8} 112 V120` },
        { d: `M${B - 36} 126 Q${B} 116 ${B + 36} 126 L${B + 24} 206 Q${B} 214 ${B - 24} 206 Z` },
        { d: `M${B - 24} 206 L${B - 28} 244 H${B + 28} L${B + 24} 206` },
      ],
    },
    {
      text: { da: 'Tegn arme og ben som rør rundt om pindene – lidt tykkere foroven. Tegn hænder og fødder.', en: 'Draw arms and legs like tubes around the sticks – a little thicker at the top. Draw hands and feet.' },
      tip: { da: 'Lårene er de tykkeste dele af benene. Underarmene er tyndere end overarmene.', en: 'The thighs are the thickest parts of the legs. Forearms are thinner than upper arms.' },
      strokes: [
        { d: `M${B - 36} 128 L${B - 54} 186 L${B - 58} 236 M${B - 26} 140 L${B - 36} 186 L${B - 42} 236` },
        { d: `M${B + 36} 128 L${B + 54} 186 L${B + 58} 236 M${B + 26} 140 L${B + 36} 186 L${B + 42} 236` },
        { d: `M${B - 28} 244 L${B - 34} 306 L${B - 34} 372 M${B} 246 L${B - 14} 306 L${B - 18} 372` },
        { d: `M${B + 28} 244 L${B + 34} 306 L${B + 34} 372 M${B} 246 L${B + 14} 306 L${B + 18} 372` },
        { d: `${circle(B - 50, 246, 9)} ${circle(B + 50, 246, 9)}` },
        { d: `${ellipse(B - 30, 378, 16, 7)} ${ellipse(B + 30, 378, 16, 7)}` },
      ],
    },
    {
      text: {
        da: 'Visk pindemanden ud inde i kroppen. Giv personen et ansigt, hår og tøj – fx en trøje og bukser.',
        en: 'Erase the stick figure inside the body. Give the person a face, hair and clothes – e.g. a jumper and trousers.',
      },
      erase: 'guides',
      strokes: [
        { d: `${circle(B - 9, 84, 2.5)} ${circle(B + 9, 84, 2.5)}`, kind: 'shade', tone: 0.9 },
        { d: `M${B - 8} 98 Q${B} 104 ${B + 8} 98` },
        { d: `M${B - 26} 76 Q${B - 22} 52 ${B} 54 Q${B + 24} 52 ${B + 26} 76 Q${B + 10} 64 ${B - 26} 76` },
        { d: `M${B - 24} 206 H${B + 24} M${B - 8} 124 L${B} 134 L${B + 8} 124` },
        { d: `M${B - 36} 166 H${B - 50} M${B + 36} 166 H${B + 50}`, weight: 0.7 },
      ],
    },
  ],
  praise: [{ da: 'Flotte proportioner – personen står helt naturligt!', en: 'Great proportions – the person stands completely naturally!' }],
  nextTip: {
    da: 'Tegn pindemænd, der løber, hopper eller danser – og byg så kroppen udenpå.',
    en: 'Draw stick figures running, jumping or dancing – then build the body on top.',
  },
}
