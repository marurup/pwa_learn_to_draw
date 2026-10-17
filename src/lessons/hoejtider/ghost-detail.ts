import { circle, ellipse, transform } from '../shapes'
import type { Lesson } from '../types'
import { ghostBody } from './ghost'
import { bat } from './pumpkin-detail'

const small = transform(ghostBody, 0.4, 230, 190)
const tiny = transform(ghostBody, 0.28, 20, 60)
const bats = `${bat(250, 40, 0.8)} ${bat(64, 230, 0.7)}`
const moon = circle(150, 52, 30)
const smallFace = `${ellipse(306, 252, 3.5, 5.5)} ${ellipse(320, 252, 3.5, 5.5)} ${ellipse(64, 106, 2.5, 4)} ${ellipse(74, 106, 2.5, 4)}`

export const ghostDetail: Lesson = {
  id: 'ghost-detail',
  title: { da: 'Spøgelser i måneskin', en: 'Ghosts in the moonlight' },
  category: 'hoejtider',
  sub: 'halloween',
  level: 2,
  style: 'detaljer',
  base: 'ghost',
  minutes: 10,
  intro: {
    da: 'Byg videre på dit spøgelse: to små spøgelsesvenner, en fuldmåne, flagermus og et svagt, uhyggeligt skær.',
    en: 'Build on your ghost: two little ghost friends, a full moon, bats and a faint, spooky glow.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn to små spøgelser – samme form, bare mindre.', en: 'Draw two little ghosts – the same shape, just smaller.' },
      strokes: [{ d: `${small} ${tiny}` }, { d: smallFace, kind: 'shade', tone: 0.9 }],
    },
    {
      text: { da: 'Tegn en fuldmåne og et par flagermus.', en: 'Draw a full moon and a couple of bats.' },
      strokes: [{ d: moon }, { d: bats }],
    },
    {
      text: { da: 'Lad en hvid glans stå i øjnene, og skyg let i spøgelsets ene side.', en: 'Leave a white gleam in the eyes, and shade lightly down one side of the ghost.' },
      strokes: [
        { d: `${circle(185, 164, 2.5)} ${circle(221, 164, 2.5)}`, kind: 'shade', fill: 'paper' },
        { d: 'M236 120 Q260 140 260 184 V320 L244 306 Q248 220 236 120 Z', kind: 'shade', fill: 'soft', tone: 0.2 },
      ],
    },
    {
      text: {
        da: 'Farvelæg flagermusene sorte og månen gul. Tegn en blød skygge på jorden under spøgelserne.',
        en: 'Colour the bats black and the moon yellow. Draw a soft shadow on the ground under the ghosts.',
      },
      tip: { da: 'En skygge et stykke under spøgelset får det til at svæve.', en: 'A shadow a little below the ghost makes it float.' },
      strokes: [
        { d: bats, kind: 'shade', tone: 0.85 },
        { d: moon, kind: 'shade', tone: 0.15 },
        { d: `${ellipse(200, 372, 52, 7)} ${ellipse(310, 344, 22, 4)}`, kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Bøh! Hele spøgelsesfamilien er ude og flyve i nat.', en: 'Boo! The whole ghost family is out flying tonight.' }],
  nextTip: { da: 'Tegn spøgelserne, mens de kigger ud af vinduerne i et gammelt hus.', en: 'Draw the ghosts peeking out of the windows of an old house.' },
}
