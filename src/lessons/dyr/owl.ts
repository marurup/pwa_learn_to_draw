import { arc, circle, line, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const tuftL = 'M120 102 L104 50 L156 76'
const wingL = 'M100 196 Q150 232 142 330 Q112 314 98 276'
const belly = [
  [180, 252],
  [220, 252],
  [160, 278],
  [200, 278],
  [240, 278],
  [180, 304],
  [220, 304],
]
  .map(([x, y]) => arc(x, y, 11, 25, 155))
  .join(' ')

export const owl: Lesson = {
  id: 'owl',
  title: { da: 'Ugle', en: 'Owl' },
  category: 'dyr',
  sub: 'fugle',
  level: 3,
  minutes: 15,
  intro: {
    da: 'En klog ugle med store øjne. Du bruger hjælpelinjer til at få øjnene til at sidde symmetrisk.',
    en: 'A wise owl with big eyes. You use guide lines to make the eyes sit symmetrically.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en stor ægform. En ugle er næsten kun krop!', en: 'Draw a big egg shape. An owl is almost all body!' },
      strokes: [{ d: 'M200 60 C292 60 318 160 306 244 C296 330 252 362 200 362 C148 362 104 330 94 244 C82 160 108 60 200 60 Z' }],
    },
    {
      text: { da: 'Tegn en lodret midterlinje og en vandret linje højt oppe. Her skal øjnene sidde.', en: 'Draw a vertical centre line and a horizontal line high up. That is where the eyes go.' },
      tip: { da: 'Med en midterlinje bliver højre og venstre side lige store.', en: 'A centre line keeps the left and right sides the same size.' },
      strokes: [
        { d: line(200, 46, 200, 372), kind: 'guide' },
        { d: line(92, 150, 308, 150), kind: 'guide' },
      ],
    },
    {
      text: { da: 'Tegn to store cirkler på den vandrette linje – en på hver side af midten.', en: 'Draw two big circles on the horizontal line – one on each side of the middle.' },
      strokes: [{ d: circle(155, 150, 43) }, { d: circle(245, 150, 43) }],
    },
    {
      text: { da: 'Tegn øjnene inde i cirklerne med store, mørke pupiller.', en: 'Draw the eyes inside the circles with big, dark pupils.' },
      strokes: [
        { d: circle(156, 152, 23) },
        { d: circle(244, 152, 23) },
        { d: circle(160, 154, 13), kind: 'shade', tone: 0.92 },
        { d: circle(240, 154, 13), kind: 'shade', tone: 0.92 },
      ],
    },
    {
      text: { da: 'Tegn et lille, spidst næb mellem øjnene og to fjerduske på toppen.', en: 'Draw a small, pointy beak between the eyes and two feather tufts on top.' },
      strokes: [{ d: 'M188 188 L200 222 L212 188 Q200 182 188 188 Z' }, { d: tuftL }, { d: mirrorX(tuftL, 200) }],
    },
    {
      text: { da: 'Tegn vingerne langs siderne af kroppen.', en: 'Draw the wings along the sides of the body.' },
      strokes: [{ d: wingL }, { d: mirrorX(wingL, 200) }, { d: 'M118 250 Q128 262 126 280 M282 250 Q272 262 274 280' }],
    },
    {
      text: { da: 'Tegn fjer på maven som små buer i rækker.', en: 'Draw feathers on the belly as small curves in rows.' },
      tip: { da: 'Sæt buerne forskudt, som mursten i en mur.', en: 'Stagger the curves, like bricks in a wall.' },
      strokes: [{ d: belly }],
    },
    {
      text: { da: 'Visk hjælpelinjerne ud. Tegn kløer og en gren, som uglen sidder på.', en: 'Erase the guide lines. Draw claws and a branch for the owl to sit on.' },
      erase: 'guides',
      strokes: [
        { d: 'M172 356 L168 374 M182 358 L182 376 M192 356 L196 374' },
        { d: 'M208 356 L204 374 M218 358 L218 376 M228 356 L232 374' },
        { d: 'M36 370 Q200 360 364 374' },
        { d: 'M36 388 Q200 378 364 392' },
        { d: 'M330 372 Q350 350 372 352' },
      ],
    },
  ],
  praise: [{ da: 'Uhuu! Den ugle ser meget klog ud.', en: 'Twit-twoo! That owl looks very wise.' }],
  nextTip: { da: 'Tegn uglen om natten med en stor, rund måne bagved.', en: 'Draw the owl at night with a big round moon behind it.' },
}
