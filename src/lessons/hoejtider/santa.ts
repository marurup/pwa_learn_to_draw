import { circle, mirrorX, roundRect } from '../shapes'
import type { Lesson } from '../types'

const bootL = 'M160 342 V360 Q136 360 134 376 Q134 382 142 382 H186 V342'
const sleeveL = 'M150 214 Q114 232 106 282 H128 Q128 256 134 242'

export const SANTA = {
  hat: 'M162 102 Q170 50 216 48 Q252 50 256 84 M238 102 Q240 92 250 92',
  pompom: circle(262, 94, 12),
  brim: roundRect(154, 102, 92, 20, 10),
  beard: 'M172 140 Q160 176 176 198 Q188 216 200 214 Q212 216 224 198 Q240 176 228 140',
  moustache: 'M200 156 Q188 148 176 160 Q190 166 200 160 Q210 166 224 160 Q212 148 200 156 Z',
  body: 'M176 198 Q136 210 130 260 L124 324 M224 198 Q264 210 270 260 L276 324',
  coat: 'M176 198 Q136 210 130 260 L124 324 H276 L270 260 Q264 210 224 198 Z',
  hem: roundRect(118, 320, 164, 22, 11),
  sleeves: `${sleeveL} ${mirrorX(sleeveL, 200)}`,
  mittens: `${circle(117, 294, 12)} ${circle(283, 294, 12)}`,
  belt: 'M129 262 H271 V278 H129 Z',
  buckle: 'M188 258 H212 V282 H188 Z M194 264 H206 V276 H194 Z',
  boots: `${bootL} ${mirrorX(bootL, 200)}`,
}

export const santa: Lesson = {
  id: 'santa',
  title: { da: 'Julemand', en: 'Santa Claus' },
  category: 'hoejtider',
  sub: 'jul',
  level: 2,
  minutes: 14,
  intro: {
    da: 'En rund og glad julemand med hue, stort hvidt skæg, bælte og støvler.',
    en: 'A round, jolly Santa with a hat, a big white beard, a belt and boots.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn nissehuens pelskant, huen, der hænger ud til siden, og en kvast.', en: 'Draw the fur brim of the hat, the hat flopping to one side, and a pompom.' },
      strokes: [{ d: SANTA.brim }, { d: SANTA.hat }, { d: SANTA.pompom }],
    },
    {
      text: { da: 'Tegn kinderne under kanten, to øjne og en rund næse.', en: 'Draw the cheeks under the brim, two eyes and a round nose.' },
      strokes: [
        { d: 'M174 122 Q172 132 172 140 M226 122 Q228 132 228 140' },
        { d: `${circle(188, 134, 3.5)} ${circle(212, 134, 3.5)}`, kind: 'shade', tone: 0.9 },
        { d: circle(200, 147, 6) },
      ],
    },
    {
      text: { da: 'Tegn et stort, bølget skæg og et overskæg under næsen.', en: 'Draw a big, wavy beard and a moustache under the nose.' },
      strokes: [{ d: SANTA.beard }, { d: SANTA.moustache }, { d: 'M194 170 Q200 174 206 170' }],
    },
    {
      text: { da: 'Tegn den runde frakke og en bred pelskant forneden.', en: 'Draw the round coat and a wide fur trim at the bottom.' },
      strokes: [{ d: SANTA.body }, { d: SANTA.hem }],
    },
    {
      text: { da: 'Tegn ærmer med vanter, et bælte med spænde og støvler.', en: 'Draw sleeves with mittens, a belt with a buckle and boots.' },
      strokes: [{ d: SANTA.sleeves }, { d: SANTA.mittens }, { d: SANTA.belt }, { d: SANTA.buckle }, { d: SANTA.boots }],
    },
    {
      text: { da: 'Farvelæg frakke og hue røde og bælte og støvler sorte. Pelsen og skægget er hvide.', en: 'Colour the coat and hat red and the belt and boots black. The fur and beard stay white.' },
      strokes: [
        { d: `${SANTA.coat} ${SANTA.sleeves} Z M162 102 Q170 50 216 48 Q252 50 256 84 L250 92 Q240 92 238 102 Z`, kind: 'shade', tone: 0.45 },
        { d: `${SANTA.belt} ${SANTA.boots} Z ${SANTA.mittens}`, kind: 'shade', tone: 0.8 },
        { d: `${SANTA.brim} ${SANTA.hem} ${SANTA.pompom} M172 140 Q160 176 176 198 Q188 216 200 214 Q212 216 224 198 Q240 176 228 140 Z`, kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'Ho ho ho! Julemanden er helt klar til juleaften!', en: 'Ho ho ho! Santa is all ready for Christmas Eve!' }],
  nextTip: { da: 'Tegn julemanden med en stor sæk fuld af gaver.', en: 'Draw Santa with a big sack full of presents.' },
}
