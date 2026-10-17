import { circle, radial } from '../shapes'
import type { Lesson } from '../types'

/** A little five-petal flower for the embroidery. */
const bloom = (x: number, y: number, r: number) =>
  `${circle(x, y, r * 0.4)} ` +
  Array.from({ length: 5 }, (_, i) => {
    const a = ((i * 72 - 90) * Math.PI) / 180
    return circle(x + r * Math.cos(a), y + r * Math.sin(a), r * 0.55)
  }).join(' ')
const border = [160, 182, 204, 226, 246].map((x) => bloom(x, 288, 5)).join(' ')
const vine = 'M152 278 Q166 270 180 278 Q194 286 208 278 Q222 270 236 278 Q244 282 250 278'
const bows = 'M166 198 l-10 -6 v12 Z M166 198 l10 -6 v12 Z M234 198 l-10 -6 v12 Z M234 198 l10 -6 v12 Z'
const crown = [bloom(182, 70, 5), bloom(200, 64, 5), bloom(218, 70, 5)].join(' ')
const flakes = [radial(70, 80, 0, 8, 6, 90), radial(330, 70, 0, 9, 6, 90), radial(60, 220, 0, 7, 6, 90), radial(340, 230, 0, 8, 6, 90), radial(110, 150, 0, 6, 6, 90), radial(300, 150, 0, 6, 6, 90)].join(' ')

export const princessSisterDetail: Lesson = {
  id: 'princess-sister-detail',
  title: { da: 'Prinsessesøster med blomsterbroderi', en: 'Princess sister with flower embroidery' },
  category: 'fantasi',
  sub: 'isriget',
  level: 3,
  style: 'detaljer',
  base: 'princess-sister',
  minutes: 18,
  intro: {
    da: 'Byg videre på din prinsessesøster: blomsterbroderi på skørtet, sløjfer i fletningerne, en blomsterkrans og snefnug.',
    en: 'Build on your princess sister: flower embroidery on her skirt, bows in her braids, a flower crown and snowflakes.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en bølget ranke og små blomster langs skørtets kant.', en: 'Draw a wavy vine and little flowers along the hem of the skirt.' },
      strokes: [{ d: vine, weight: 0.7 }, { d: border }],
    },
    {
      text: { da: 'Tegn sløjfer for enden af fletningerne.', en: 'Draw bows at the ends of the braids.' },
      strokes: [{ d: bows }],
    },
    {
      text: { da: 'Tegn en lille krans af blomster i håret.', en: 'Draw a little ring of flowers in her hair.' },
      strokes: [{ d: crown }],
    },
    {
      text: { da: 'Tegn snefnug, der daler ned omkring hende.', en: 'Draw snowflakes drifting down around her.' },
      strokes: [{ d: flakes, weight: 0.7 }],
    },
    {
      text: { da: 'Giv hende røde kinder, skyg skørtets folder, og farvelæg blomsterne i mange farver.', en: 'Give her rosy cheeks, shade the folds of the skirt, and colour the flowers in lots of colours.' },
      tip: { da: 'Skyg i bølger nedad, så skørtet ser ud til at svinge.', en: 'Shade in waves going down, so the skirt looks like it is swinging.' },
      strokes: [
        { d: `${circle(182, 112, 6)} ${circle(218, 112, 6)}`, kind: 'shade', fill: 'soft', tone: 0.2 },
        { d: 'M186 204 L176 296 H190 Z M214 204 L224 296 H210 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: `${border} ${crown}`, kind: 'shade', tone: 0.4 },
        { d: bows, kind: 'shade', tone: 0.5 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en flot prinsesse – broderiet er helt fint!', en: 'What a lovely princess – the embroidery is so pretty!' }],
  nextTip: { da: 'Tegn hende sammen med snevennen.', en: 'Draw her together with the snow friend.' },
}
