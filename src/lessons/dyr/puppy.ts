import { arc, circle, ellipse, line, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const earL = 'M134 108 Q88 104 74 166 Q64 226 96 238 Q120 242 124 206 Q126 172 132 150'
const browL = 'M152 136 Q164 128 178 134'

export const puppy: Lesson = {
  id: 'puppy',
  title: { da: 'Hundehvalp', en: 'Puppy' },
  category: 'dyr',
  sub: 'landdyr',
  level: 3,
  minutes: 15,
  intro: {
    da: 'En sød hvalp med lange ører. Du bygger hovedet med en hjælpecirkel og visker det ud, der ikke skal ses.',
    en: 'A cute puppy with long ears. You build the head with a guide circle and erase what should not show.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en let hjælpecirkel til hovedet.', en: 'Draw a light guide circle for the head.' },
      strokes: [{ d: circle(200, 170, 90), kind: 'guide', id: 'g-head' }],
    },
    {
      text: { da: 'Tegn en lodret midterlinje og en vandret øjenlinje lidt over midten.', en: 'Draw a vertical centre line and a horizontal eye line a little above the middle.' },
      strokes: [
        { d: line(200, 70, 200, 280), kind: 'guide' },
        { d: line(104, 160, 296, 160), kind: 'guide' },
      ],
    },
    {
      text: { da: 'Tegn snuden som en bred oval nederst i cirklen. Den må gerne stikke lidt ud forneden.', en: 'Draw the muzzle as a wide oval at the bottom of the circle. It may stick out a little at the bottom.' },
      strokes: [{ d: ellipse(200, 225, 58, 42) }],
    },
    {
      text: { da: 'Tegn hovedets kant oven på hjælpecirklen – men stop, hvor snuden begynder.', en: 'Draw the edge of the head over the guide circle – but stop where the muzzle starts.' },
      tip: { da: 'Snuden ligger foran hovedet, så hovedets streg skal ikke gå igennem den.', en: 'The muzzle is in front of the head, so the head line should not go through it.' },
      erase: ['g-head'],
      strokes: [{ d: arc(200, 170, 90, 125, 415) }],
    },
    {
      text: { da: 'Tegn to lange, bløde ører, der hænger ned langs hovedet.', en: 'Draw two long, floppy ears hanging down the sides of the head.' },
      strokes: [{ d: earL }, { d: mirrorX(earL, 200) }],
    },
    {
      text: { da: 'Tegn øjnene på øjenlinjen og små øjenbryn over dem.', en: 'Draw the eyes on the eye line and little eyebrows above them.' },
      strokes: [
        { d: circle(166, 160, 13), kind: 'shade', tone: 0.92 },
        { d: circle(234, 160, 13), kind: 'shade', tone: 0.92 },
        { d: circle(166, 160, 13) },
        { d: circle(234, 160, 13) },
        { d: browL },
        { d: mirrorX(browL, 200) },
      ],
    },
    {
      text: { da: 'Tegn en stor næse øverst på snuden og munden under den – med en lille tunge.', en: 'Draw a big nose at the top of the muzzle and the mouth below it – with a little tongue.' },
      strokes: [
        { d: 'M180 204 Q200 194 220 204 Q218 222 200 228 Q182 222 180 204 Z', kind: 'shade', tone: 0.9 },
        { d: 'M180 204 Q200 194 220 204 Q218 222 200 228 Q182 222 180 204 Z' },
        { d: 'M200 228 V240 M200 240 Q186 254 170 244 M200 240 Q214 254 230 244' },
        { d: 'M190 248 Q190 270 202 268 Q214 266 212 248' },
      ],
    },
    {
      text: { da: 'Visk hjælpelinjerne ud. Tegn halsen, et halsbånd og en plet om det ene øje. Vov!', en: 'Erase the guide lines. Draw the neck, a collar and a patch around one eye. Woof!' },
      erase: 'guides',
      strokes: [
        { d: 'M142 248 Q132 300 122 368' },
        { d: 'M258 248 Q268 300 278 368' },
        { d: 'M144 272 Q200 300 256 272 M140 290 Q200 318 260 290' },
        { d: circle(200, 316, 10) },
        { d: 'M210 132 Q244 118 262 148 Q266 184 238 186 Q212 184 208 160 Z', kind: 'shade', tone: 0.25 },
      ],
    },
  ],
  praise: [{ da: 'Åh, sikke en nuttet hvalp! Den vil gerne lege.', en: 'Aww, what a cute puppy! It wants to play.' }],
  nextTip: { da: 'Prøv at give hvalpen spidse ører – så bliver den til en anden hunderace.', en: 'Try giving the puppy pointy ears – it turns into another breed.' },
}
