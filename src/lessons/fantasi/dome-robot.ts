import { circle, mirrorX, rect } from '../shapes'
import type { Lesson } from '../types'

const legL = 'M150 176 H126 V320 L112 346 H164 L150 320'

export const DOME_ROBOT = {
  dome: 'M150 150 Q150 88 200 88 Q250 88 250 150',
  rim: 'M150 150 Q200 164 250 150',
  body: 'M150 150 V300 Q200 316 250 300 V150',
  legs: `${legL} ${mirrorX(legL, 200)}`,
  middleLeg: 'M188 308 V330 H212 V308',
  eye: circle(200, 118, 11),
  light: circle(228, 130, 4),
  panels: `${rect(170, 180, 60, 36)} ${rect(166, 232, 22, 46)} ${rect(196, 232, 38, 18)} ${rect(196, 258, 38, 20)}`,
}

export const domeRobot: Lesson = {
  id: 'dome-robot',
  title: { da: 'Kuppelrobot', en: 'Dome robot' },
  category: 'fantasi',
  sub: 'rumeventyr',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En lille, trofast rumrobot med et rundt kuppelhoved, ét stort øje og tre ben. Bip-bip!',
    en: 'A loyal little space robot with a round dome head, one big eye and three legs. Beep beep!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn kuppelhovedet som en halv cirkel med en buet kant forneden.', en: 'Draw the dome head as half a circle with a curved edge at the bottom.' },
      strokes: [{ d: DOME_ROBOT.dome }, { d: DOME_ROBOT.rim }],
    },
    {
      text: { da: 'Tegn kroppen som en rund tønde.', en: 'Draw the body like a round barrel.' },
      strokes: [{ d: DOME_ROBOT.body }],
    },
    {
      text: { da: 'Tegn to ben på siderne med brede fødder og et lille ben i midten.', en: 'Draw two legs at the sides with wide feet and a little leg in the middle.' },
      strokes: [{ d: DOME_ROBOT.legs }, { d: DOME_ROBOT.middleLeg }],
    },
    {
      text: { da: 'Tegn det store øje og en lille lampe.', en: 'Draw the big eye and a little lamp.' },
      strokes: [{ d: DOME_ROBOT.eye }, { d: DOME_ROBOT.eye, kind: 'shade', tone: 0.85 }, { d: DOME_ROBOT.light }],
    },
    {
      text: { da: 'Tegn paneler på kroppen, og farvelæg dem blå. Resten er hvid og sølv.', en: 'Draw panels on the body, and colour them blue. The rest is white and silver.' },
      strokes: [
        { d: DOME_ROBOT.panels },
        { d: DOME_ROBOT.panels, kind: 'shade', tone: 0.45 },
        { d: `${DOME_ROBOT.dome} Z`, kind: 'shade', tone: 0.15 },
        { d: DOME_ROBOT.light, kind: 'shade', tone: 0.6 },
      ],
    },
  ],
  praise: [{ da: 'Bip-bip-bu! Robotten siger tak for tegningen!', en: 'Beep-boop! The robot says thank you for the drawing!' }],
  nextTip: { da: 'Tegn robotten, mens den viser et hologram.', en: 'Draw the robot projecting a hologram.' },
}
