import { circle, intersect, line, poly, type Pt } from '../shapes'
import type { Lesson } from '../types'

const VP1: Pt = [10, 130]
const VP2: Pt = [390, 130]
const front = { top: [200, 176] as Pt, bottom: [200, 290] as Pt }
const leftX = 126
const rightX = 284
const atX = (from: Pt, to: Pt, x: number): Pt => [x, from[1] + ((to[1] - from[1]) * (x - from[0])) / (to[0] - from[0])]

const leftTop = atX(front.top, VP1, leftX)
const leftBottom = atX(front.bottom, VP1, leftX)
const rightTop = atX(front.top, VP2, rightX)
const rightBottom = atX(front.bottom, VP2, rightX)
const back = intersect(leftTop, VP2, rightTop, VP1)

const seg = (a: Pt, b: Pt) => line(a[0], a[1], b[0], b[1])

export const perspective2pt: Lesson = {
  id: 'perspective-2pt',
  title: { da: '2-punkts perspektiv: en kasse', en: 'Two-point perspective: a box' },
  category: 'teknik',
  level: 4,
  minutes: 25,
  intro: {
    da: 'Med to forsvindingspunkter kan du tegne ting set fra hjørnet – som huse og kasser, der står helt rigtigt i rummet.',
    en: 'With two vanishing points you can draw things seen from a corner – like houses and boxes standing properly in space.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn horisonten højt oppe, og sæt et forsvindingspunkt (FP) i hver ende.', en: 'Draw the horizon high up, and put a vanishing point (VP) at each end.' },
      tip: { da: 'Jo længere fra hinanden punkterne er, jo mere naturlig ser kassen ud.', en: 'The further apart the points are, the more natural the box looks.' },
      strokes: [
        { d: seg(VP1, VP2), kind: 'guide' },
        { d: circle(VP1[0], VP1[1], 5), kind: 'shade', tone: 1, id: 'vp1' },
        { d: circle(VP2[0], VP2[1], 5), kind: 'shade', tone: 1, id: 'vp2' },
      ],
      labels: [
        { x: 14, y: 116, text: { da: 'FP 1', en: 'VP 1' }, anchor: 'start' },
        { x: 386, y: 116, text: { da: 'FP 2', en: 'VP 2' }, anchor: 'end' },
        { x: 200, y: 120, text: { da: 'horisont', en: 'horizon' } },
      ],
    },
    {
      text: { da: 'Tegn kassens forreste hjørne: en lodret streg under horisonten.', en: 'Draw the front corner of the box: a vertical line below the horizon.' },
      strokes: [{ d: seg(front.top, front.bottom) }],
    },
    {
      text: { da: 'Tegn lette hjælpelinjer fra toppen og bunden af stregen ud til begge forsvindingspunkter.', en: 'Draw light guide lines from the top and bottom of the line out to both vanishing points.' },
      strokes: [
        { d: seg(front.top, VP1), kind: 'guide' },
        { d: seg(front.bottom, VP1), kind: 'guide' },
        { d: seg(front.top, VP2), kind: 'guide' },
        { d: seg(front.bottom, VP2), kind: 'guide' },
      ],
    },
    {
      text: { da: 'Bestem, hvor bred kassen er: Tegn en lodret streg på hver side mellem hjælpelinjerne.', en: 'Decide how wide the box is: draw a vertical line on each side between the guide lines.' },
      strokes: [{ d: seg(leftTop, leftBottom) }, { d: seg(rightTop, rightBottom) }],
    },
    {
      text: { da: 'Tegn kassens kanter oven på hjælpelinjerne – fra det forreste hjørne ud til siderne.', en: 'Draw the edges of the box over the guide lines – from the front corner out to the sides.' },
      strokes: [
        { d: seg(front.top, leftTop) },
        { d: seg(front.bottom, leftBottom) },
        { d: seg(front.top, rightTop) },
        { d: seg(front.bottom, rightBottom) },
      ],
    },
    {
      text: { da: 'Låget: Tegn en hjælpelinje fra hvert sidehjørne til det modsatte forsvindingspunkt. Hvor de krydser, er bageste hjørne.', en: 'The lid: draw a guide line from each side corner to the opposite vanishing point. Where they cross is the back corner.' },
      strokes: [
        { d: seg(leftTop, VP2), kind: 'guide' },
        { d: seg(rightTop, VP1), kind: 'guide' },
        { d: seg(leftTop, back) },
        { d: seg(rightTop, back) },
      ],
    },
    {
      text: { da: 'Visk hjælpelinjerne ud, og skyg siderne – den ene lidt mørkere end den anden. Nu står kassen i rummet!', en: 'Erase the guide lines and shade the sides – one a little darker than the other. Now the box stands in space!' },
      erase: ['guides', 'vp1', 'vp2'],
      strokes: [
        { d: poly([front.top, leftTop, leftBottom, front.bottom], true), kind: 'shade', tone: 0.2 },
        { d: poly([front.top, rightTop, rightBottom, front.bottom], true), kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Den kasse ser så ægte ud, at man kunne pakke en gave i den!', en: 'That box looks so real you could wrap a present in it!' }],
  nextTip: { da: 'Lav kassen om til et hus: Sæt et tag på, og tegn vinduer – alle linjer peger mod de to punkter.', en: 'Turn the box into a house: add a roof and windows – every line points to the two vanishing points.' },
}
