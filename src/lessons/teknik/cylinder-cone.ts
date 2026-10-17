import { ellipse, ellipseArc } from '../shapes'
import type { Lesson } from '../types'

// Cylinder: top ellipse at y 120, bottom at y 310. The bottom is rounder, because we look further down on it.
const CYL = { cx: 120, top: 120, bottom: 310, rx: 56, ryTop: 14, ryBottom: 22 }
// Cone: apex above a base ellipse.
const CONE = { cx: 290, apex: 100, base: 310, rx: 56, ry: 22 }

const f = (v: number) => v.toFixed(1)
const frontY = (cx: number, cy: number, rx: number, ry: number, x: number) => cy + ry * Math.sqrt(Math.max(0, 1 - ((x - cx) / rx) ** 2))

/** A vertical strip of the cylinder's side between x1 and x2, following its curved top and bottom. */
function cylStrip(x1: number, x2: number): string {
  const xs = Array.from({ length: 9 }, (_, i) => x1 + ((x2 - x1) * i) / 8)
  const top = xs.map((x) => `${f(x)} ${f(frontY(CYL.cx, CYL.top, CYL.rx, CYL.ryTop, x))}`)
  const bottom = [...xs].reverse().map((x) => `${f(x)} ${f(frontY(CYL.cx, CYL.bottom, CYL.rx, CYL.ryBottom, x))}`)
  return `M${top.join(' L')} L${bottom.join(' L')} Z`
}
/** A wedge of the cone from the apex down to the base between x1 and x2. */
function coneWedge(x1: number, x2: number): string {
  const xs = Array.from({ length: 9 }, (_, i) => x1 + ((x2 - x1) * i) / 8)
  return `M${CONE.cx} ${CONE.apex} L` + xs.map((x) => `${f(x)} ${f(frontY(CONE.cx, CONE.base, CONE.rx, CONE.ry, x))}`).join(' L') + ' Z'
}
const cylLeft = CYL.cx - CYL.rx
const cylRight = CYL.cx + CYL.rx
const coneLeft = CONE.cx - CONE.rx
const coneRight = CONE.cx + CONE.rx

export const cylinderCone: Lesson = {
  id: 'cylinder-cone',
  title: { da: 'Cylinder og kegle', en: 'Cylinder and cone' },
  category: 'teknik',
  level: 4,
  style: 'naturtro',
  minutes: 30,
  intro: {
    da: 'Næsten alt kan bygges af cylindre og kegler: kopper, træstammer, tårne, gulerødder. Lær at tegne dem med ellipser og skygge dem, så de ser runde ud.',
    en: 'Almost anything can be built from cylinders and cones: cups, tree trunks, towers, carrots. Learn to draw them with ellipses and shade them so they look round.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler'],
  steps: [
    {
      text: {
        da: 'Tegn let en lodret midterlinje til hver figur. Vi kigger ned på dem, så øjenhøjden er højt oppe over dem.',
        en: 'Lightly draw a vertical centre line for each shape. We are looking down on them, so the eye level is high up above them.',
      },
      strokes: [
        { d: `M${CYL.cx} 90 V340 M${CONE.cx} 80 V340`, kind: 'guide' },
        { d: 'M20 40 H380', kind: 'guide' },
      ],
      labels: [{ x: 200, y: 32, text: { da: 'øjenhøjde', en: 'eye level' } }],
    },
    {
      text: {
        da: 'Cylinderen: Tegn en flad ellipse foroven og en lidt rundere ellipse forneden. Forbind dem med to lodrette streger.',
        en: 'The cylinder: draw a flat ellipse at the top and a slightly rounder ellipse at the bottom. Join them with two vertical lines.',
      },
      tip: {
        da: 'Jo længere under øjenhøjden en ellipse er, jo rundere ser den ud.',
        en: 'The further below eye level an ellipse is, the rounder it looks.',
      },
      strokes: [
        { d: ellipse(CYL.cx, CYL.top, CYL.rx, CYL.ryTop) },
        { d: ellipse(CYL.cx, CYL.bottom, CYL.rx, CYL.ryBottom), kind: 'guide' },
        { d: `M${cylLeft} ${CYL.top} V${CYL.bottom} M${cylRight} ${CYL.top} V${CYL.bottom}` },
      ],
    },
    {
      text: { da: 'Keglen: Tegn en ellipse forneden og en spids øverst på midterlinjen. Forbind spidsen med ellipsens ender.', en: 'The cone: draw an ellipse at the bottom and a point at the top of the centre line. Join the point to the ends of the ellipse.' },
      strokes: [
        { d: ellipse(CONE.cx, CONE.base, CONE.rx, CONE.ry), kind: 'guide' },
        { d: `M${coneLeft} ${CONE.base} L${CONE.cx} ${CONE.apex} L${coneRight} ${CONE.base}` },
      ],
    },
    {
      text: {
        da: 'Visk hjælpelinjerne ud – også den bageste halvdel af de nederste ellipser, som man ikke kan se. Tegn den forreste halvdel tydeligt.',
        en: 'Erase the guidelines – including the back half of the bottom ellipses, which you can’t see. Draw the front half clearly.',
      },
      erase: 'guides',
      strokes: [
        { d: ellipseArc(CYL.cx, CYL.bottom, CYL.rx, CYL.ryBottom, 0, 180) },
        { d: ellipseArc(CONE.cx, CONE.base, CONE.rx, CONE.ry, 0, 180) },
      ],
    },
    {
      text: {
        da: 'Lyset kommer fra venstre. Skyg cylinderen i lodrette bånd: mørkest lidt inde fra højre kant, og lad en smal, lys stribe stå til venstre.',
        en: 'The light comes from the left. Shade the cylinder in vertical bands: darkest a little in from the right edge, and leave a narrow light stripe on the left.',
      },
      tip: {
        da: 'Helt ude ved højre kant bliver det lidt lysere igen. Det er "reflekslys" fra bordet.',
        en: 'Right at the right edge it gets a little lighter again. That is "reflected light" from the table.',
      },
      strokes: [
        { d: cylStrip(cylLeft, 80), kind: 'shade', fill: 'soft', tone: 0.15 },
        { d: cylStrip(96, cylRight), kind: 'shade', fill: 'soft', tone: 0.15 },
        { d: cylStrip(128, cylRight - 6), kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: cylStrip(146, cylRight - 10), kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
    {
      text: {
        da: 'Skyg keglen på samme måde, men i kiler, der samles i spidsen.',
        en: 'Shade the cone the same way, but in wedges that meet at the point.',
      },
      strokes: [
        { d: coneWedge(coneLeft, 250), kind: 'shade', fill: 'soft', tone: 0.15 },
        { d: coneWedge(266, coneRight), kind: 'shade', fill: 'soft', tone: 0.15 },
        { d: coneWedge(298, coneRight - 6), kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: coneWedge(316, coneRight - 10), kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
    {
      text: {
        da: 'Tegn slagskyggerne på bordet. De falder væk fra lyset – mod højre – og er mørkest helt inde ved figuren.',
        en: 'Draw the cast shadows on the table. They fall away from the light – to the right – and are darkest right next to the shape.',
      },
      strokes: [
        { d: 'M150 300 L226 278 Q240 284 230 296 L166 330 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M320 296 L386 264 L348 326 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: `${ellipseArc(CYL.cx, CYL.bottom + 2, CYL.rx - 4, CYL.ryBottom, 20, 160)} ${ellipseArc(CONE.cx, CONE.base + 2, CONE.rx - 4, CONE.ry, 20, 160)}`, weight: 1.6 },
      ],
    },
  ],
  praise: [{ da: 'De ser helt runde ud – du har styr på ellipser og skygger!', en: 'They look completely round – you have mastered ellipses and shading!' }],
  nextTip: {
    da: 'Find ting derhjemme, der er cylindre og kegler – fx et krus, en lampeskærm eller en is i vaffel – og tegn dem.',
    en: 'Find things at home that are cylinders and cones – like a mug, a lampshade or an ice cream cone – and draw them.',
  },
}
