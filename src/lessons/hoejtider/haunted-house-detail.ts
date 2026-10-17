import { ellipse } from '../shapes'
import type { Lesson } from '../types'
import { HAUNTED } from './haunted-house'
import { bat } from './pumpkin-detail'

// The house traced the other way round, so it becomes a hole in the dark sky.
const houseHole = 'M98 202 L110 360 L296 360 L302 192 L196 112 L172 134 V124 H180 L148 64 L118 124 H124 V178 Z'
const roofAndTower = 'M172 134 L196 112 L302 192 L172 193 Z M124 122 H172 V193 L124 195 Z M98 202 L124 178 V195 L120 196 Z'
const sky = `M0 0 H400 V360 H0 Z ${houseHole}`
const web = 'M120 196 L150 196 M120 196 L120 226 M120 196 L142 218 M132 196 Q130 208 120 208 M142 196 Q140 216 120 218'

export const hauntedHouseDetail: Lesson = {
  id: 'haunted-house-detail',
  title: { da: 'Spøgelseshus om natten', en: 'Haunted house at night' },
  category: 'hoejtider',
  sub: 'halloween',
  level: 3,
  style: 'detaljer',
  base: 'haunted-house',
  minutes: 20,
  intro: {
    da: 'Byg videre på dit spøgelseshus: brædder for vinduerne, revner og spindelvæv, et spøgelse i vinduet, flagermus og en mørk nattehimmel.',
    en: 'Build on your haunted house: boards over the windows, cracks and cobwebs, a ghost in the window, bats and a dark night sky.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn skæve brædder over det ene vindue og revner i væggen.', en: 'Draw crooked boards over one window and cracks in the wall.' },
      strokes: [{ d: 'M228 238 L274 230 L276 238 L230 246 Z M228 262 L274 256 L276 264 L230 270 Z' }, { d: 'M136 300 l10 10 l-6 8 l10 10 M270 300 l-8 12 l6 6', weight: 0.7 }],
    },
    {
      text: { da: 'Tegn et lille spøgelse, der kigger ud af det andet vindue, og spindelvæv i hjørnet.', en: 'Draw a little ghost peeking out of the other window, and a cobweb in the corner.' },
      strokes: [
        { d: 'M152 278 V256 Q152 244 165 244 Q178 244 178 256 V278 L172 272 L165 278 L158 272 Z' },
        { d: `${ellipse(161, 256, 2, 3)} ${ellipse(169, 256, 2, 3)}`, kind: 'shade', tone: 0.9 },
        { d: web, weight: 0.5 },
      ],
    },
    {
      text: { da: 'Tegn en flok flagermus, der flyver ud fra tårnet.', en: 'Draw a flock of bats flying out from the tower.' },
      strokes: [{ d: `${bat(220, 70, 1)} ${bat(260, 46, 0.8)} ${bat(300, 80, 0.7)}` }],
    },
    {
      text: {
        da: 'Skyg himlen mørk rundt om huset, men lad månen være lys. Farvelæg huset mørkt, og lad vinduerne lyse gult.',
        en: 'Shade the sky dark around the house, but keep the moon light. Colour the house dark, and let the windows glow yellow.',
      },
      tip: { da: 'Lyse vinduer i et mørkt hus ser hemmelighedsfulde ud.', en: 'Bright windows in a dark house look mysterious.' },
      strokes: [
        { d: sky, kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: 'M32 74 A34 34 0 1 1 100 74 A34 34 0 1 1 32 74 Z', kind: 'shade', fill: 'paper' },
        { d: `${bat(220, 70, 1)} ${bat(260, 46, 0.8)} ${bat(300, 80, 0.7)}`, kind: 'shade', tone: 0.9 },
        { d: HAUNTED.walls, kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: roofAndTower, kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: HAUNTED.windows, kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'Det er det mest uhyggelige hus i hele byen!', en: 'It is the spookiest house in the whole town!' }],
  nextTip: { da: 'Tegn børn i udklædning, der går hen mod huset for at sige "slik eller ballade".', en: 'Draw children in costumes walking up to the house to say "trick or treat".' },
}
