import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const lensL = 'M178 92 Q188 84 196 96 Q186 102 178 92 Z'
const bootL = 'M170 330 H196 V352 H164 Q164 338 170 330 Z'

export const DARK_KNIGHT = {
  helmet: 'M164 118 Q160 58 200 56 Q240 58 236 118 L252 138 H148 Z',
  lenses: `${lensL} ${mirrorX(lensL, 200)}`,
  grille: 'M188 108 L200 128 L212 108 Z M194 112 V120 M200 112 V124 M206 112 V120',
  chest: 'M166 138 H234 L242 250 H158 Z',
  panel: 'M184 156 H216 V178 H184 Z',
  belt: 'M160 236 H240 V248 H159 Z',
  cape: 'M166 140 Q108 220 98 362 H302 Q292 220 234 140',
  arms: 'M166 142 Q146 170 142 206 M234 142 Q260 180 252 220',
  hands: `${circle(140, 216, 9)} ${circle(250, 226, 9)}`,
  legs: 'M182 250 V330 M218 250 V330',
  boots: `${bootL} ${mirrorX(bootL, 200)}`,
  hilt: 'M134 196 H146 V232 H134 Z M134 204 H146 M134 212 H146',
  blade: 'M136 196 V88 Q140 80 144 88 V196',
}

export const darkKnight: Lesson = {
  id: 'dark-knight',
  title: { da: 'Den mørke rumridder', en: 'The dark space knight' },
  category: 'fantasi',
  sub: 'rumeventyr',
  level: 2,
  minutes: 16,
  intro: {
    da: 'En mørk rumridder med en blank hjelm, en stor kappe og et rødt lasersværd. Uhh!',
    en: 'A dark space knight with a shiny helmet, a big cape and a red laser sword. Ooh!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn hjelmen: rund foroven og bred forneden, som en klokke.', en: 'Draw the helmet: round at the top and wide at the bottom, like a bell.' },
      strokes: [{ d: DARK_KNIGHT.helmet }],
    },
    {
      text: { da: 'Tegn to skrå øjenglas og en trekantet ånderist.', en: 'Draw two slanted eye lenses and a triangle-shaped breathing grille.' },
      strokes: [{ d: DARK_KNIGHT.lenses }, { d: DARK_KNIGHT.grille }],
    },
    {
      text: { da: 'Tegn rustningen på brystet med et panel med knapper og et bælte.', en: 'Draw the chest armour with a panel of buttons and a belt.' },
      strokes: [
        { d: DARK_KNIGHT.chest },
        { d: DARK_KNIGHT.panel },
        { d: `${circle(192, 164, 3)} ${circle(200, 164, 3)} ${circle(208, 164, 3)} M188 172 H212` },
        { d: DARK_KNIGHT.belt },
      ],
    },
    {
      text: { da: 'Tegn den store kappe, der går helt ned til jorden.', en: 'Draw the big cape reaching all the way to the ground.' },
      strokes: [{ d: DARK_KNIGHT.cape }],
    },
    {
      text: { da: 'Tegn armene, benene og de store støvler.', en: 'Draw the arms, the legs and the big boots.' },
      strokes: [{ d: DARK_KNIGHT.arms }, { d: DARK_KNIGHT.hands }, { d: DARK_KNIGHT.legs }, { d: DARK_KNIGHT.boots }],
    },
    {
      text: { da: 'Tegn sværdets skaft i hånden og en lang, lige klinge op.', en: 'Draw the sword’s hilt in the hand and a long straight blade going up.' },
      strokes: [{ d: DARK_KNIGHT.hilt }, { d: DARK_KNIGHT.blade }],
    },
    {
      text: { da: 'Farvelæg ridderen helt sort, og klingen rød med et skær omkring.', en: 'Colour the knight all black, and the blade red with a glow around it.' },
      tip: { da: 'Lad en hvid stribe stå på hjelmen – så ser den blank ud.', en: 'Leave a white stripe on the helmet – that makes it look shiny.' },
      strokes: [
        { d: `${DARK_KNIGHT.helmet} ${DARK_KNIGHT.chest} ${DARK_KNIGHT.boots}`, kind: 'shade', tone: 0.75 },
        { d: `${DARK_KNIGHT.cape} V140 Z`, kind: 'shade', tone: 0.6 },
        { d: 'M178 70 Q172 84 172 110 L176 110 Q176 86 184 70 Z', kind: 'shade', fill: 'paper' },
        { d: 'M128 196 V84 Q140 68 152 84 V196 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: DARK_KNIGHT.blade, kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Uhh, sikke en mørk ridder – men også ret sej!', en: 'Ooh, what a dark knight – but pretty cool too!' }],
  nextTip: { da: 'Tegn den mørke ridder og rumridderen, der mødes.', en: 'Draw the dark knight and the space knight meeting.' },
}
