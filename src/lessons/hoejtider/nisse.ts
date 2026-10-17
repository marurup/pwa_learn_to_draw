import { circle, mirrorX, roundRect } from '../shapes'
import type { Lesson } from '../types'

const sleeveL = 'M157 310 Q128 320 122 344 H140 Q142 336 151 330'
const clogL = 'M154 368 H186 Q192 368 192 376 Q192 384 182 384 H156 Q142 384 142 376 Q144 368 154 368 Z'

export const NISSE = {
  hat: 'M140 186 Q154 104 226 64 Q252 50 268 60 Q240 84 236 120 Q236 160 260 186',
  pompom: circle(274, 60, 11),
  brim: roundRect(132, 180, 136, 22, 11),
  nose: circle(200, 218, 15),
  beard: 'M140 202 Q132 268 170 300 Q200 318 230 300 Q268 268 260 202',
  body: 'M163 293 L144 356 H256 L237 293',
  sleeves: `${sleeveL} ${mirrorX(sleeveL, 200)}`,
  mittens: `${circle(131, 352, 10)} ${circle(269, 352, 10)}`,
  clogs: `${clogL} ${mirrorX(clogL, 200)}`,
}

export const nisse: Lesson = {
  id: 'nisse',
  title: { da: 'Nisse', en: 'Christmas elf' },
  category: 'hoejtider',
  sub: 'jul',
  level: 1,
  minutes: 8,
  intro: {
    da: 'En lille gårdnisse med en stor, rød hue helt ned over øjnene, en rund næse og et langt skæg.',
    en: 'A little Danish Christmas elf with a big red hat right down over his eyes, a round nose and a long beard.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en høj, spids hue, hvor spidsen hænger ned til siden, og en kvast.', en: 'Draw a tall, pointed hat with the tip hanging down to the side, and a pompom.' },
      strokes: [{ d: NISSE.hat }, { d: NISSE.pompom }],
    },
    {
      text: { da: 'Tegn en bred kant forneden på huen og en stor, rund næse lige under.', en: 'Draw a wide brim at the bottom of the hat and a big round nose just below.' },
      tip: { da: 'Huen dækker øjnene – så kan nissen ikke se, at du tegner ham!', en: 'The hat covers his eyes – so the elf can’t see you drawing him!' },
      strokes: [{ d: NISSE.brim }, { d: NISSE.nose }],
    },
    {
      text: { da: 'Tegn et stort skæg, der går ned i en rund bue.', en: 'Draw a big beard that comes down in a round curve.' },
      strokes: [{ d: NISSE.beard }],
    },
    {
      text: { da: 'Tegn kroppen under skægget, ærmer og vanter.', en: 'Draw the body under the beard, sleeves and mittens.' },
      strokes: [{ d: NISSE.body }, { d: NISSE.sleeves }, { d: NISSE.mittens }],
    },
    {
      text: { da: 'Tegn korte ben og træsko. Farvelæg huen rød og tøjet gråt!', en: 'Draw short legs and wooden clogs. Colour the hat red and the clothes grey!' },
      strokes: [
        { d: 'M176 356 V368 M224 356 V368' },
        { d: NISSE.clogs },
        { d: `${NISSE.hat} Z`, kind: 'shade', tone: 0.5 },
        { d: `${NISSE.body} L230 300 Q200 318 170 300 Z ${NISSE.sleeves}`, kind: 'shade', tone: 0.3 },
        { d: `${NISSE.clogs} ${NISSE.mittens}`, kind: 'shade', tone: 0.45 },
        { d: NISSE.nose, kind: 'shade', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en sød nisse – husk at give ham risengrød juleaften!', en: 'What a sweet elf – remember to give him rice pudding on Christmas Eve!' }],
  nextTip: { da: 'Tegn nissen med en skål risengrød.', en: 'Draw the elf with a bowl of rice pudding.' },
}
