import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const bootL = 'M176 330 H196 V346 H168 Q166 336 176 330 Z'

/** A glowing laser blade from (x1, y1) to (x2, y2), w wide, with a round tip. */
export const laserBlade = (x1: number, y1: number, x2: number, y2: number, w: number) => {
  const len = Math.hypot(x2 - x1, y2 - y1)
  const nx = (-(y2 - y1) / len) * (w / 2)
  const ny = ((x2 - x1) / len) * (w / 2)
  return `M${x1 + nx} ${y1 + ny} L${x2 + nx} ${y2 + ny} A${w / 2} ${w / 2} 0 0 0 ${x2 - nx} ${y2 - ny} L${x1 - nx} ${y1 - ny} Z`
}

export const SPACE_KNIGHT = {
  head: circle(200, 90, 26),
  hair: 'M176 86 Q178 60 202 62 Q224 62 226 86 Q210 72 190 76 Q182 80 176 86 Z',
  tunic: 'M178 118 H222 L236 250 H164 Z',
  sash: 'M182 122 L218 196',
  belt: 'M169 190 H231 V202 H168 Z',
  arms: 'M178 122 Q160 160 162 200 M222 122 Q250 140 262 168',
  hands: `${circle(162, 206, 7)} ${circle(264, 172, 8)}`,
  legs: 'M184 250 V330 M216 250 V330',
  boots: `${bootL} ${mirrorX(bootL, 200)}`,
  cloak: 'M178 120 Q138 200 130 352 H176 M222 120 Q262 200 270 352 H224',
  hilt: 'M258 182 L270 168 L280 176 L268 190 Z M262 178 l8 6 M266 173 l8 6',
  blade: laserBlade(276, 170, 352, 94, 10),
}

export const spaceKnight: Lesson = {
  id: 'space-knight',
  title: { da: 'Rumridder', en: 'Space knight' },
  category: 'fantasi',
  sub: 'rumeventyr',
  level: 2,
  minutes: 16,
  intro: {
    da: 'En modig ridder fra rummet med en lang kappe og et lysende lasersværd.',
    en: 'A brave knight from outer space with a long cloak and a glowing laser sword.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn hovedet, håret og et modigt ansigt.', en: 'Draw the head, the hair and a brave face.' },
      strokes: [
        { d: SPACE_KNIGHT.head },
        { d: SPACE_KNIGHT.hair },
        { d: `${circle(190, 92, 2.5)} ${circle(210, 92, 2.5)}`, kind: 'shade', tone: 0.9 },
        { d: 'M184 84 l10 2 M216 84 l-10 2 M193 104 H207' },
      ],
    },
    {
      text: { da: 'Tegn kjortlen med et skråt bånd og et bælte.', en: 'Draw the tunic with a sash across it and a belt.' },
      strokes: [{ d: SPACE_KNIGHT.tunic }, { d: SPACE_KNIGHT.sash }, { d: SPACE_KNIGHT.belt }],
    },
    {
      text: { da: 'Tegn armene – den ene holder sværdet op.', en: 'Draw the arms – one holds the sword up.' },
      strokes: [{ d: SPACE_KNIGHT.arms }, { d: SPACE_KNIGHT.hands }],
    },
    {
      text: { da: 'Tegn benene og støvlerne.', en: 'Draw the legs and the boots.' },
      strokes: [{ d: SPACE_KNIGHT.legs }, { d: SPACE_KNIGHT.boots }],
    },
    {
      text: { da: 'Tegn den lange kappe bag ridderen.', en: 'Draw the long cloak behind the knight.' },
      strokes: [{ d: SPACE_KNIGHT.cloak }],
    },
    {
      text: { da: 'Tegn sværdets skaft i hånden og en lang, lysende klinge skråt op.', en: 'Draw the sword’s hilt in the hand and a long glowing blade going up at an angle.' },
      strokes: [{ d: SPACE_KNIGHT.hilt }, { d: SPACE_KNIGHT.blade }],
    },
    {
      text: { da: 'Farvelæg kappen brun, kjortlen lys og klingen i en klar farve med et blødt skær omkring.', en: 'Colour the cloak brown, the tunic light and the blade in a bright colour with a soft glow around it.' },
      tip: { da: 'Lad klingen være lys i midten og stærkest i kanten – så lyser den.', en: 'Keep the blade light in the middle and strongest at the edge – that makes it glow.' },
      strokes: [
        { d: 'M178 120 Q138 200 130 352 H176 V250 H164 L178 118 Z M222 120 Q262 200 270 352 H224 V250 H236 L222 118 Z', kind: 'shade', tone: 0.45 },
        { d: SPACE_KNIGHT.tunic, kind: 'shade', tone: 0.12 },
        { d: `${SPACE_KNIGHT.belt} ${SPACE_KNIGHT.boots}`, kind: 'shade', tone: 0.7 },
        { d: laserBlade(276, 170, 352, 94, 22), kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: SPACE_KNIGHT.blade, kind: 'shade', fill: 'paper' },
        { d: SPACE_KNIGHT.hilt, kind: 'shade', tone: 0.55 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en modig rumridder – sværdet lyser helt op!', en: 'What a brave space knight – the sword is glowing!' }],
  nextTip: { da: 'Tegn ridderen ude i rummet mellem planeter og stjerner.', en: 'Draw the knight out in space between planets and stars.' },
}
