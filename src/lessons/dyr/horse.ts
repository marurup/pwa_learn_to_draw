import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const nearHindLeg = 'M248 246 Q256 276 266 300 L264 346 L258 364 L280 366 L280 346 L284 306 Q290 296 298 282 Q308 262 312 238'
const farHindLeg = 'M234 250 Q240 278 244 300 L242 346 L238 362 L254 364 L256 346 L258 304'
const nearFrontLeg = 'M112 236 Q112 270 113 296 L112 344 L106 362 L126 364 L127 344 L128 296 Q132 270 142 248'
const farFrontLeg = 'M148 248 Q150 274 151 298 L150 344 L146 360 L164 362 L164 344 L165 298 Q168 274 172 250'

export const horse: Lesson = {
  id: 'horse',
  title: { da: 'Hest', en: 'Horse' },
  category: 'dyr',
  sub: 'landdyr',
  level: 3,
  style: 'detaljer',
  minutes: 25,
  intro: {
    da: 'En hest set fra siden. Den er svær, men med fire hjælpecirkler bliver det meget nemmere at få formen rigtig.',
    en: 'A horse seen from the side. It is tricky, but with four helper circles it gets much easier to get the shape right.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Tegn let fire hjælpecirkler: en til brystet, en til bagpartiet, en til hovedet og en lille til mulen.',
        en: 'Lightly draw four helper circles: one for the chest, one for the hindquarters, one for the head and a small one for the muzzle.',
      },
      tip: { da: 'Der er cirka én cirkel imellem bryst og bagparti.', en: 'There is about one circle’s width between the chest and the hindquarters.' },
      strokes: [
        { d: `${circle(132, 198, 46)} ${circle(272, 200, 50)}`, kind: 'guide' },
        { d: `${circle(88, 104, 24)} ${circle(56, 150, 15)}`, kind: 'guide' },
      ],
    },
    {
      text: { da: 'Forbind cirklerne: en buet hals, en ryg med et lille svaj og en mave.', en: 'Connect the circles: a curved neck, a back with a slight dip and a belly.' },
      strokes: [
        { d: 'M98 84 Q128 106 150 150 Q210 164 262 150 Q300 146 318 172' },
        { d: 'M110 112 Q112 156 92 190 Q92 226 112 236' },
        { d: 'M164 246 Q206 258 248 246' },
      ],
    },
    {
      text: {
        da: 'Tegn hovedet: panden skråner ned til mulen, kæben runder tilbage til halsen. Tegn et spidst øre og et mandelformet øje.',
        en: 'Draw the head: the forehead slopes down to the muzzle, and the jaw curves back to the neck. Draw a pointy ear and an almond-shaped eye.',
      },
      strokes: [
        { d: 'M90 84 Q68 112 46 142 Q38 156 46 164 Q56 172 70 164 Q90 148 100 132 Q110 122 110 112' },
        { d: 'M92 84 L98 58 L110 86' },
        { d: ellipse(82, 106, 6, 4, -20), kind: 'shade', tone: 0.9 },
        { d: 'M52 146 Q46 150 50 156', weight: 1.2 },
        { d: 'M44 160 Q52 162 60 158', weight: 0.7 },
      ],
    },
    {
      text: {
        da: 'Tegn benene. Forbenene er næsten lige. Bagbenene har en hase, der knækker bagud – lidt ligesom din hæl.',
        en: 'Draw the legs. The front legs are almost straight. The back legs have a hock that bends backwards – a bit like your heel.',
      },
      tip: { da: 'Benene længst væk er lidt kortere og ligger lidt bagved.', en: 'The legs furthest away are a little shorter and sit slightly behind.' },
      strokes: [{ d: nearFrontLeg }, { d: farFrontLeg }, { d: nearHindLeg }, { d: farHindLeg }],
    },
    {
      text: { da: 'Visk hjælpecirklerne ud. Tegn manken langs halsen og en lang hale, der svajer.', en: 'Erase the helper circles. Draw the mane along the neck and a long, flowing tail.' },
      erase: 'guides',
      strokes: [
        { d: 'M100 82 Q120 76 140 104 Q150 120 158 148 Q142 136 136 124 Q130 128 118 110 Q112 112 102 98' },
        { d: 'M92 86 Q84 94 80 100' },
        { d: 'M318 172 Q350 186 348 240 Q346 290 356 326 Q332 304 330 254 Q330 214 316 188' },
      ],
    },
    {
      text: {
        da: 'Tegn detaljerne: hår i manken og halen, hovene, en bue ved skulderen og ved låret.',
        en: 'Draw the details: hairs in the mane and tail, the hooves, and a curve at the shoulder and at the thigh.',
      },
      strokes: [
        { d: 'M110 92 Q126 104 134 124 M122 90 Q138 106 146 132 M326 196 Q338 230 336 268 M334 200 Q344 250 344 300', weight: 0.6 },
        { d: 'M109 354 L126 355 M148 352 L164 353 M240 352 L255 353 M261 354 L280 355', weight: 0.8 },
        { d: 'M150 168 Q160 204 146 238 M262 168 Q240 200 252 246', weight: 0.6, opacity: 0.7 },
      ],
    },
    {
      text: {
        da: 'Skyg let: under maven, på halsens underside og på benene længst væk – de ligger i skygge.',
        en: 'Shade lightly: under the belly, on the underside of the neck and on the legs furthest away – they are in shadow.',
      },
      strokes: [
        { d: 'M160 238 Q206 262 250 240 L248 250 Q206 262 164 250 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M108 120 Q110 160 94 190 Q108 166 118 136 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: `${farFrontLeg} Z ${farHindLeg} Z`, kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M90 372 Q200 360 320 372 Q200 382 90 372 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'En hel hest med manke og hale – det er virkelig svært, og du klarede det!', en: 'A whole horse with mane and tail – that is really hard, and you did it!' }],
  nextTip: { da: 'Tegn hesten i galop med alle fire ben i luften.', en: 'Draw the horse galloping with all four legs in the air.' },
}
