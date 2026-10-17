import { circle, mirrorX, rect } from '../shapes'
import type { Lesson } from '../types'

/** Short dashes along a straight line – stitches. */
const stitches = (x1: number, y1: number, x2: number, y2: number, n: number) =>
  Array.from({ length: n }, (_, i) => {
    const t1 = (i + 0.2) / n
    const t2 = (i + 0.7) / n
    return `M${(x1 + (x2 - x1) * t1).toFixed(1)} ${(y1 + (y2 - y1) * t1).toFixed(1)} L${(x1 + (x2 - x1) * t2).toFixed(1)} ${(y1 + (y2 - y1) * t2).toFixed(1)}`
  }).join(' ')
const buttonHoles = (cx: number, cy: number, d: number) =>
  [circle(cx - d, cy - d, 1.3), circle(cx + d, cy - d, 1.3), circle(cx - d, cy + d, 1.3), circle(cx + d, cy + d, 1.3)].join(' ')
const legStripesL = 'M158 286 L176 298 M148 302 L166 314 M138 318 L156 330'

export const ragDollDetail: Lesson = {
  id: 'rag-doll-detail',
  title: { da: 'Kludedukke med lapper og sting', en: 'Rag doll with patches and stitches' },
  category: 'mennesker',
  sub: 'dukker',
  level: 2,
  style: 'detaljer',
  base: 'rag-doll',
  minutes: 15,
  intro: {
    da: 'Byg videre på din kludedukke: knaphuller i øjnene, sting, en lap på kjolen, knapper, stribede strømper og en sløjfe i håret.',
    en: 'Build on your rag doll: buttonholes in the eyes, stitches, a patch on the dress, buttons, striped stockings and a bow in her hair.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Lad fire små huller være hvide i hvert knapøje.', en: 'Leave four little holes white in each button eye.' },
      strokes: [{ d: `${buttonHoles(182, 104, 3)} ${buttonHoles(218, 104, 3)}`, kind: 'shade', fill: 'paper' }],
    },
    {
      text: { da: 'Tegn sting – små streger – langs kjolens kant og kraven.', en: 'Draw stitches – little dashes – along the hem and the collar.' },
      tip: { da: 'Sting viser, at dukken er syet af stof.', en: 'Stitches show that the doll is sewn from fabric.' },
      strokes: [{ d: `${stitches(156, 256, 244, 256, 11)} ${stitches(180, 160, 220, 160, 5)}`, weight: 0.7 }],
    },
    {
      text: { da: 'Tegn en firkantet lap med sting rundt om, to knapper og et hjerte på kjolen.', en: 'Draw a square patch with stitches round it, two buttons and a heart on the dress.' },
      strokes: [
        { d: rect(210, 214, 26, 24) },
        { d: `${stitches(213, 210, 233, 210, 3)} ${stitches(213, 242, 233, 242, 3)} ${stitches(206, 217, 206, 235, 3)} ${stitches(240, 217, 240, 235, 3)}`, weight: 0.6 },
        { d: `${circle(200, 182, 5)} ${circle(200, 202, 5)}` },
        { d: 'M176 224 Q168 212 176 208 Q182 206 184 214 Q186 206 192 208 Q200 212 192 224 L184 234 Z' },
      ],
    },
    {
      text: { da: 'Tegn striber på strømperne og en stor sløjfe i håret.', en: 'Draw stripes on the stockings and a big bow in her hair.' },
      strokes: [
        { d: `${legStripesL} ${mirrorX(legStripesL, 200)}` },
        { d: `M236 64 L220 54 V74 Z M236 64 L252 54 V74 Z ${circle(236, 64, 4)}` },
      ],
    },
    {
      text: { da: 'Skyg let under hovedet, i kjolens folder og mellem benene. Farvelæg!', en: 'Shade lightly under the head, in the folds of the dress and between the legs. Colour it in!' },
      strokes: [
        { d: 'M172 150 Q200 166 228 150 Q200 178 172 150 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M164 200 Q160 230 162 256 L172 256 Q168 230 170 200 Z M236 200 Q240 230 238 256 L228 256 Q232 230 230 200 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: 'M190 262 L200 300 L210 262 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: `M236 64 L220 54 V74 Z M236 64 L252 54 V74 Z ${rect(210, 214, 26, 24)}`, kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Hun ser ud, som om hun er syet i hånden – med kærlighed!', en: 'She looks like she was sewn by hand – with love!' }],
  nextTip: { da: 'Tegn en lille seng eller en kurv, kludedukken kan sove i.', en: 'Draw a little bed or a basket for the rag doll to sleep in.' },
}
