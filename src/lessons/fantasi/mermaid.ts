import { circle, mirrorX, type Pt } from '../shapes'
import type { Lesson } from '../types'

/** The tail's two edges as quadratic curves (shared with the "Byg videre" version). */
export const TAIL_OUTER: Pt[][] = [
  [[176, 222], [158, 300], [210, 340]],
  [[210, 340], [250, 366], [292, 346]],
]
export const TAIL_INNER: Pt[][] = [
  [[224, 222], [226, 284], [256, 310]],
  [[256, 310], [274, 324], [296, 322]],
]
const quadPath = (segs: Pt[][]) =>
  `M${segs[0][0][0]} ${segs[0][0][1]} ` + segs.map(([, c, e]) => `Q${c[0]} ${c[1]} ${e[0]} ${e[1]}`).join(' ')
export const tailOuter = quadPath(TAIL_OUTER)
export const tailInner = quadPath(TAIL_INNER)
/** The whole tail as a closed shape: down the outer edge, across the end and back up the inner edge. */
export const tailShape =
  tailOuter +
  ` L${TAIL_INNER[1][2][0]} ${TAIL_INNER[1][2][1]} ` +
  [...TAIL_INNER].reverse().map(([s, c]) => `Q${c[0]} ${c[1]} ${s[0]} ${s[1]}`).join(' ') +
  ' Z'
export const fin = 'M296 322 Q326 296 356 292 Q336 318 334 334 Q340 352 356 372 Q320 366 292 346'

const torsoL = 'M190 151 Q178 156 177 172 Q174 200 176 222'
const armL = 'M180 162 Q156 180 160 206'
const hairL = 'M158 118 Q146 160 140 180 Q130 204 152 226 Q160 206 166 186 Q170 160 166 136'
const shellL = 'M178 182 Q184 164 198 180 Z'

export const mermaid: Lesson = {
  id: 'mermaid',
  title: { da: 'Havfrue', en: 'Mermaid' },
  category: 'fantasi',
  sub: 'havfruer',
  level: 1,
  minutes: 10,
  intro: {
    da: 'En glad havfrue med langt hår og en lang, buet fiskehale.',
    en: 'A happy mermaid with long hair and a long, curving fish tail.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en cirkel til hovedet.', en: 'Draw a circle for the head.' },
      strokes: [{ d: circle(200, 110, 42) }],
    },
    {
      text: { da: 'Tegn kroppen under hovedet og to arme.', en: 'Draw the body under the head and two arms.' },
      strokes: [
        { d: `${torsoL} ${mirrorX(torsoL, 200)}` },
        { d: `${armL} ${circle(160, 211, 5)}` },
        { d: `${mirrorX(armL, 200)} ${circle(240, 211, 5)}` },
      ],
    },
    {
      text: { da: 'Tegn den lange fiskehale. Den går ned og bøjer ud til siden.', en: 'Draw the long fish tail. It goes down and curves out to the side.' },
      tip: { da: 'Halen er bred foroven og bliver smallere mod enden.', en: 'The tail is wide at the top and gets narrower towards the end.' },
      strokes: [{ d: 'M176 222 Q200 230 224 222' }, { d: tailOuter }, { d: tailInner }],
    },
    {
      text: { da: 'Tegn halefinnen for enden af halen – den ligner en stor sommerfugl.', en: 'Draw the tail fin at the end of the tail – it looks like a big butterfly.' },
      strokes: [{ d: fin }],
    },
    {
      text: { da: 'Tegn det lange hår, der hænger ned på begge sider, og pandehår.', en: 'Draw the long hair hanging down on both sides, and a fringe.' },
      strokes: [
        { d: 'M158 118 Q156 64 200 62 Q244 64 242 118' },
        { d: `${hairL} ${mirrorX(hairL, 200)}` },
        { d: 'M166 92 Q186 100 200 80 Q212 100 234 92' },
      ],
    },
    {
      text: { da: 'Tegn øjne, en glad mund og to muslinger som top. Farvelæg din havfrue!', en: 'Draw eyes, a happy mouth and two shells as a top. Colour in your mermaid!' },
      strokes: [
        { d: `${circle(184, 114, 5)} ${circle(216, 114, 5)}`, kind: 'shade', tone: 0.9 },
        { d: `${circle(182, 112, 1.6)} ${circle(214, 112, 1.6)}`, kind: 'shade', fill: 'paper' },
        { d: 'M188 130 Q200 140 212 130' },
        { d: `${shellL} ${mirrorX(shellL, 200)}` },
        { d: tailShape, kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en smuk havfrue – hun er klar til at svømme ud i havet!', en: 'What a beautiful mermaid – she is ready to swim out to sea!' }],
  nextTip: { da: 'Tegn en lille fisk eller en søhest, som er havfruens ven.', en: 'Draw a little fish or a seahorse as the mermaid’s friend.' },
}
