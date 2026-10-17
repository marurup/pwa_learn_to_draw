import { circle, radial } from '../shapes'
import type { Lesson } from '../types'

const bolts = [
  [148, 78],
  [252, 78],
  [148, 146],
  [252, 146],
  [132, 174],
  [268, 174],
  [132, 286],
  [268, 286],
]
  .map(([x, y]) => `${circle(x, y, 3)} M${x - 2} ${y} H${x + 2}`)
  .join(' ')
const armJoints = 'M96 204 H124 M96 232 H124 M276 204 H304 M276 232 H304'

export const robotDetail: Lesson = {
  id: 'robot-detail',
  title: { da: 'Robot med bolte og lys', en: 'Robot with bolts and lights' },
  category: 'fantasi',
  sub: 'eventyr',
  level: 2,
  style: 'detaljer',
  base: 'robot',
  minutes: 12,
  intro: {
    da: 'Byg videre på din robot: bolte i hjørnerne, led i armene, en blinkende antenne, et højtalergitter og blankt metal.',
    en: 'Build on your robot: bolts in the corners, joints in the arms, a blinking antenna, a speaker grille and shiny metal.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn små bolte i hjørnerne af hovedet og kroppen.', en: 'Draw little bolts in the corners of the head and the body.' },
      strokes: [{ d: bolts, weight: 0.7 }],
    },
    {
      text: { da: 'Tegn led i armene, så robotten kan bøje dem.', en: 'Draw joints in the arms so the robot can bend them.' },
      strokes: [{ d: armJoints }],
    },
    {
      text: { da: 'Tegn lysstråler rundt om antennens kugle – den blinker!', en: 'Draw rays of light around the ball on the antenna – it is blinking!' },
      strokes: [{ d: radial(200, 34, 12, 20, 8) }],
    },
    {
      text: { da: 'Tegn et højtalergitter på siden af hovedet og en lille lampe på maven.', en: 'Draw a speaker grille on the side of the head and a little lamp on the tummy.' },
      strokes: [{ d: 'M244 86 V100 M250 86 V100 M256 86 V100', weight: 0.7 }, { d: `${circle(240, 274, 7)} ${radial(240, 274, 9, 13, 6)}` }],
    },
    {
      text: {
        da: 'Skyg robottens højre side, og lad hvide glimt stå på hjørnerne – så ligner det blankt metal. Farvelæg!',
        en: 'Shade the right side of the robot, and leave white gleams on the corners – then it looks like shiny metal. Colour it in!',
      },
      strokes: [
        { d: 'M246 72 Q258 74 260 84 V140 Q258 152 246 154 Z M258 168 Q274 170 276 180 V284 Q274 294 258 294 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M146 80 Q148 74 156 74 H172 Q156 76 150 86 Z M130 172 Q132 168 140 168 H160 Q142 170 134 180 Z', kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'Bip! Din robot er opgraderet til version 2.0!', en: 'Beep! Your robot has been upgraded to version 2.0!' }],
  nextTip: { da: 'Tegn robotten med raketter under fødderne, så den kan flyve.', en: 'Draw the robot with rockets under its feet so it can fly.' },
}
