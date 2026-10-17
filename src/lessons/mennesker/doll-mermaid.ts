import { arc, circle, type Pt } from '../shapes'
import type { Lesson } from '../types'
import { DOLL_IDS } from './doll'

const tail = 'M176 206 Q160 270 186 334 M224 206 Q240 270 214 334'
const fin = 'M186 334 Q160 352 146 384 Q176 376 200 360 Q224 376 254 384 Q240 352 214 334'
const scales = (
  [
    [190, 222],
    [206, 222],
    [182, 236],
    [198, 236],
    [214, 236],
    [190, 250],
    [206, 250],
    [184, 264],
    [200, 264],
    [216, 264],
    [192, 278],
    [208, 278],
    [196, 292],
    [204, 306],
  ] as Pt[]
)
  .map(([x, y]) => arc(x, y, 6, 20, 160))
  .join(' ')

export const dollMermaid: Lesson = {
  id: 'doll-mermaid',
  title: { da: 'Dukke som havfrue', en: 'Doll as a mermaid' },
  category: 'mennesker',
  sub: 'dukker',
  level: 2,
  style: 'detaljer',
  base: 'doll',
  minutes: 15,
  intro: {
    da: 'Forvandl din dukke til en havfrue: kjolen og benene bliver til en lang fiskehale med skæl.',
    en: 'Turn your doll into a mermaid: the dress and the legs become a long fish tail with scales.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Visk kjolen, benene og skoene ud. Tegn kroppen ned til taljen og en muslinge-top.', en: 'Rub out the dress, the legs and the shoes. Draw the body down to the waist and a shell top.' },
      erase: [DOLL_IDS.dress, DOLL_IDS.legs, DOLL_IDS.shoes, 'dressColour'],
      strokes: [
        { d: 'M178 152 Q170 180 176 206 M222 152 Q230 180 224 206' },
        { d: 'M180 182 Q186 166 198 180 Z M202 180 Q214 166 220 182 Z' },
      ],
    },
    {
      text: { da: 'Tegn halen fra taljen og ned. Den bliver smallere forneden.', en: 'Draw the tail from the waist down. It gets narrower at the bottom.' },
      strokes: [{ d: 'M176 206 Q200 214 224 206' }, { d: tail }],
    },
    {
      text: { da: 'Tegn en stor halefinne, der spreder sig ud til siderne.', en: 'Draw a big tail fin spreading out to the sides.' },
      strokes: [{ d: fin }, { d: 'M196 346 L168 374 M204 346 L232 374 M200 350 V364', weight: 0.6 }],
    },
    {
      text: { da: 'Tegn skæl på halen og en søstjerne i håret.', en: 'Draw scales on the tail and a starfish in her hair.' },
      strokes: [{ d: scales, weight: 0.6 }, { d: 'M240 60 l4 9 l10 1 l-8 6 l3 10 l-9 -6 l-9 6 l3 -10 l-8 -6 l10 -1 Z' }],
    },
    {
      text: { da: 'Tegn bobler og en lille fisk, der svømmer forbi. Farvelæg halen i havets farver!', en: 'Draw bubbles and a little fish swimming by. Colour the tail in the colours of the sea!' },
      strokes: [
        { d: `${circle(276, 160, 7)} ${circle(290, 132, 5)} ${circle(280, 108, 4)}` },
        { d: 'M80 260 Q98 246 116 260 Q98 274 80 260 Z M80 260 L68 250 V270 Z', weight: 0.8 },
        { d: `${tail.split(' M')[0]} L214 334 Q240 270 224 206 Z`, kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [{ da: 'Plask! Din dukke er blevet til en havfrue.', en: 'Splash! Your doll has turned into a mermaid.' }],
  nextTip: { da: 'Tegn et undervandsslot til havfrue-dukken.', en: 'Draw an underwater castle for the mermaid doll.' },
}
