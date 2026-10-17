import { mirrorX } from '../shapes'
import type { Lesson } from '../types'
import { ring } from './kransekage'

/** A little flag on a stick poking out of the left side of ring i. */
const flagLeft = (i: number) => {
  const { x, y } = ring(i)
  const fx = x - 20
  const fy = y - 14
  return `M${x + 2} ${y + 11} L${fx} ${fy} M${fx} ${fy} h-18 v12 h18 Z M${fx - 6} ${fy} v12 M${fx - 18} ${fy + 6} h18`
}
const flags = [2, 5, 8].map((i) => flagLeft(i)).join(' ')
const flagsRight = [3, 6].map((i) => mirrorX(flagLeft(i), 200)).join(' ')
const cracker = (x: number) => `M${x} 372 h44 v14 h-44 Z M${x} 372 l-10 -4 v22 l10 -4 M${x + 44} 372 l10 -4 v22 l-10 -4`

export const kransekageDetail: Lesson = {
  id: 'kransekage-detail',
  title: { da: 'Kransekage med flag og knallerter', en: 'Ring cake with flags and crackers' },
  category: 'hoejtider',
  sub: 'nytaar',
  level: 3,
  style: 'detaljer',
  base: 'kransekage',
  minutes: 18,
  intro: {
    da: 'Byg videre på din kransekage: små flag, der stikker ud fra ringene, knallerter på bordet, festglimt og skygger.',
    en: 'Build on your ring cake: little flags poking out of the rings, crackers on the table, party sparkles and shading.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn små flag på pinde, der stikker skråt ud fra ringene i begge sider.', en: 'Draw little flags on sticks poking out at an angle from the rings on both sides.' },
      strokes: [{ d: `${flags} ${flagsRight}` }],
    },
    {
      text: { da: 'Tegn to knallerter, der ligger på bordet.', en: 'Draw two crackers lying on the table.' },
      strokes: [{ d: `${cracker(30)} ${cracker(326)}` }, { d: 'M40 372 V386 M64 372 V386 M336 372 V386 M360 372 V386', weight: 0.6 }],
    },
    {
      text: { da: 'Tegn festglimt rundt om kagen og skriv GODT NYTÅR!', en: 'Draw party sparkles around the cake and write HAPPY NEW YEAR!' },
      strokes: [{ d: 'M60 120 h12 M66 114 v12 M330 150 h12 M336 144 v12 M80 230 h10 M85 225 v10 M350 300 h10 M355 295 v10 M260 40 h10 M265 35 v10', weight: 0.7 }],
      labels: [{ x: 110, y: 52, text: { da: 'GODT NYTÅR!', en: 'HAPPY NEW YEAR!' } }],
    },
    {
      text: {
        da: 'Skyg ringene i højre side, så tårnet bliver rundt. Farvelæg flagene røde og knallerterne i flotte farver.',
        en: 'Shade the rings on the right so the tower looks round. Colour the flags red and the crackers in bright colours.',
      },
      tip: { da: 'En stribe skygge i den ene side gør alle ringene runde på én gang.', en: 'One stripe of shading down one side makes all the rings round at once.' },
      strokes: [
        { d: 'M216 110 L312 352 H280 L206 110 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: `${cracker(30)} ${cracker(326)}`, kind: 'shade', tone: 0.35 },
        { d: `${flags} ${flagsRight}`, kind: 'shade', tone: 0.15 },
        { d: 'M60 362 Q200 376 340 362 Q330 372 200 374 Q70 372 60 362 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
      ],
    },
  ],
  praise: [{ da: 'Det er det flotteste nytårsbord – nu kan klokken bare slå tolv!', en: 'That is the finest New Year table – now the clock can strike twelve!' }],
  nextTip: { da: 'Tegn din familie, der hopper ind i det nye år fra en stol.', en: 'Draw your family jumping into the new year from a chair.' },
}
