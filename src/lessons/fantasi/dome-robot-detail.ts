import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const beam = 'M232 128 L300 52 M232 132 L366 88'
const hologram = `${circle(330, 66, 18)} ${ellipse(330, 66, 32, 7, -15)}`
const beeps = 'M110 100 q-8 10 0 20 M98 92 q-14 18 0 36 M86 84 q-20 26 0 52'
const arm = 'M250 220 H290 M290 220 L302 210 M290 220 L302 230'
const stripes = 'M160 110 Q200 100 240 110 M156 128 Q170 124 178 126'
const scuffs = 'M160 290 l8 -4 M232 288 l6 4 M140 336 l8 -6 M262 336 l8 -6'

export const domeRobotDetail: Lesson = {
  id: 'dome-robot-detail',
  title: { da: 'Kuppelrobot med hologram', en: 'Dome robot with a hologram' },
  category: 'fantasi',
  sub: 'rumeventyr',
  level: 2,
  style: 'detaljer',
  base: 'dome-robot',
  minutes: 14,
  intro: {
    da: 'Byg videre på din robot: en lysstråle med et svævende hologram, bip-lyde, en griberarm, striber på kuplen og et metalskær.',
    en: 'Build on your robot: a beam of light with a floating hologram, beeping sounds, a gripper arm, stripes on the dome and a metal sheen.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en lysstråle fra lampen og en lille planet, der svæver i strålen.', en: 'Draw a beam of light from the lamp and a little planet floating in the beam.' },
      strokes: [{ d: beam, weight: 0.6, opacity: 0.7 }, { d: hologram }],
    },
    {
      text: { da: 'Tegn buede bip-lyde ved siden af robotten.', en: 'Draw curved beeping sounds next to the robot.' },
      strokes: [{ d: beeps }],
    },
    {
      text: { da: 'Tegn en lille griberarm, der kommer ud fra kroppen.', en: 'Draw a little gripper arm coming out of the body.' },
      strokes: [{ d: arm }],
    },
    {
      text: { da: 'Tegn striber på kuplen og små ridser på kroppen.', en: 'Draw stripes on the dome and little scratches on the body.' },
      strokes: [{ d: stripes }, { d: scuffs, weight: 0.5, opacity: 0.7 }],
    },
    {
      text: {
        da: 'Skyg kroppen i højre side, og lad en hvid stribe stå til venstre – så ligner det metal. Farvelæg hologrammet lyseblåt.',
        en: 'Shade the right side of the body, and leave a white stripe on the left – that makes it look like metal. Colour the hologram light blue.',
      },
      tip: { da: 'Metal har skarpe lyse og mørke striber side om side.', en: 'Metal has sharp light and dark stripes side by side.' },
      strokes: [
        { d: 'M226 150 Q238 152 250 150 V300 Q240 304 226 306 Z', kind: 'shade', tone: 0.3 },
        { d: 'M160 156 H168 V302 H160 Z', kind: 'shade', fill: 'paper' },
        { d: 'M232 128 L300 52 L366 88 L232 132 Z', kind: 'shade', fill: 'soft', tone: 0.1 },
        { d: hologram, kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [{ da: 'Bip-bip! Robotten har en hemmelig besked til dig!', en: 'Beep beep! The robot has a secret message for you!' }],
  nextTip: { da: 'Tegn rumridderen, der lytter til robottens besked.', en: 'Draw the space knight listening to the robot’s message.' },
}
