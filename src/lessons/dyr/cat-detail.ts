import { circle, ellipse, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const cheekFurL = 'M126 166 L110 172 L128 178 L112 188 L134 190'
const earFurL = 'M160 82 l7 5 M162 72 l6 7 M157 92 l8 2'
const bodyStripesL = 'M120 270 q14 6 24 -4 M116 300 q16 6 28 -6 M124 330 q12 4 20 -4'
const cheekStripesL = 'M132 150 l14 3 M134 162 l12 1'
const muzzleDotsL = [circle(180, 181, 1.6), circle(175, 187, 1.6), circle(184, 188, 1.6)].join(' ')

export const catDetail: Lesson = {
  id: 'cat-detail',
  title: { da: 'Kat med pels og skygge', en: 'Cat with fur and shading' },
  category: 'dyr',
  sub: 'landdyr',
  level: 3,
  style: 'detaljer',
  base: 'cat',
  minutes: 15,
  intro: {
    da: 'Byg videre på din kat: glans i øjnene, pels, striber, skygger og en blød pude at sidde på.',
    en: 'Build on your cat: shiny eyes, fur, stripes, shadows and a soft cushion to sit on.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Giv øjnene liv: Tegn en spalte-pupil, skyg resten af øjet let, og lad en lille prik være helt hvid. Det er glansen.',
        en: 'Bring the eyes to life: draw a slit pupil, shade the rest of the eye lightly, and leave a tiny dot completely white. That is the shine.',
      },
      tip: {
        da: 'Glansen skal sidde samme sted i begge øjne – så ser katten på dig.',
        en: 'Put the shine in the same place in both eyes – then the cat looks at you.',
      },
      erase: ['pupilL', 'pupilR'],
      strokes: [
        { d: ellipse(170, 146, 10, 14), kind: 'shade', tone: 0.22 },
        { d: ellipse(230, 146, 10, 14), kind: 'shade', tone: 0.22 },
        { d: ellipse(171, 147, 2.6, 11), kind: 'shade', tone: 0.95 },
        { d: ellipse(231, 147, 2.6, 11), kind: 'shade', tone: 0.95 },
        { d: circle(166, 139, 3.6), kind: 'shade', fill: 'paper' },
        { d: circle(226, 139, 3.6), kind: 'shade', fill: 'paper' },
        { d: 'M157 136 Q170 127 183 135' },
        { d: mirrorX('M157 136 Q170 127 183 135', 200) },
      ],
    },
    {
      text: {
        da: 'Skyg næsen, og sæt små prikker på snuden, hvor knurhårene sidder fast. Tegn en lille hage.',
        en: 'Shade the nose, and add little dots on the muzzle where the whiskers grow. Draw a small chin.',
      },
      strokes: [
        { d: 'M192 170 L208 170 L200 180 Z', kind: 'shade', tone: 0.55 },
        { d: muzzleDotsL, kind: 'shade', tone: 0.8 },
        { d: mirrorX(muzzleDotsL, 200), kind: 'shade', tone: 0.8 },
        { d: 'M190 204 Q200 211 210 204' },
      ],
    },
    {
      text: {
        da: 'Tegn pels: små takker på kinderne, fine streger inde i ørerne og små v’er på brystet.',
        en: 'Draw fur: little zigzags on the cheeks, fine lines inside the ears and small v’s on the chest.',
      },
      tip: {
        da: 'Pelsstreger tegnes hurtigt og let – i den retning, pelsen vokser.',
        en: 'Fur strokes are quick and light – in the direction the fur grows.',
      },
      strokes: [
        { d: cheekFurL },
        { d: mirrorX(cheekFurL, 200) },
        { d: earFurL, weight: 0.6 },
        { d: mirrorX(earFurL, 200), weight: 0.6 },
        { d: 'M186 228 l6 8 l6 -8 M202 244 l6 8 l6 -8 M180 256 l6 8 l6 -8 M206 270 l6 8 l6 -8', weight: 0.7 },
      ],
    },
    {
      text: {
        da: 'Tegn striber på kroppen, kinderne og poterne. Stribene følger kroppens runde form.',
        en: 'Draw stripes on the body, the cheeks and the paws. The stripes follow the round shape of the body.',
      },
      strokes: [
        { d: bodyStripesL },
        { d: mirrorX(bodyStripesL, 200) },
        { d: cheekStripesL, weight: 0.8 },
        { d: mirrorX(cheekStripesL, 200), weight: 0.8 },
        { d: 'M174 352 v10 M186 352 v10 M214 352 v10 M226 352 v10', weight: 0.7 },
      ],
    },
    {
      text: {
        da: 'Skyg let på den side, der er væk fra lyset: højre side af kroppen, under hovedet og inde i ørerne.',
        en: 'Shade lightly on the side away from the light: the right side of the body, under the head and inside the ears.',
      },
      tip: {
        da: 'Gnid skyggen blødt ud med fingeren eller et stykke papir.',
        en: 'Smudge the shadow softly with your finger or a piece of paper.',
      },
      strokes: [
        { d: 'M250 216 Q284 262 278 330 Q274 354 252 360 Q266 300 250 216 Z', kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: 'M158 212 Q200 238 242 212 Q200 252 158 212 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M256 118 Q276 150 256 190 Q264 150 256 118 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M156 64 L151 92 L174 82 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: mirrorX('M156 64 L151 92 L174 82 Z', 200), kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M304 346 Q344 336 352 296 Q354 326 326 344 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
      ],
    },
    {
      text: {
        da: 'Tegn en blød pude under katten, og en skygge, hvor katten sidder.',
        en: 'Draw a soft cushion under the cat, and a shadow where the cat sits.',
      },
      strokes: [
        { d: ellipse(200, 372, 104, 9), kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M58 374 Q56 394 90 394 H310 Q344 394 342 374' },
        { d: 'M58 374 Q60 356 104 352 M342 374 Q340 356 296 352' },
        { d: 'M58 374 l-10 -6 M58 374 l-12 4 M342 374 l10 -6 M342 374 l12 4' },
      ],
    },
    {
      text: {
        da: 'Til sidst: Tryk lidt hårdere på omridset i skyggesiden. Kraftige streger i skyggen og lette i lyset får katten til at se rund ud.',
        en: 'Finally: press a little harder on the outline on the shadow side. Strong lines in the shade and light ones in the light make the cat look round.',
      },
      strokes: [{ d: 'M248 206 Q292 262 286 330 Q280 370 200 370', weight: 1.6 }],
    },
  ],
  praise: [
    { da: 'Den pels ser så blød ud, at man har lyst til at klappe katten!', en: 'That fur looks so soft you want to stroke the cat!' },
  ],
  nextTip: {
    da: 'Prøv at tegne din kat fra siden, mens den sover – med de samme pelsstreger og skygger.',
    en: 'Try drawing your cat from the side while it sleeps – with the same fur strokes and shadows.',
  },
}
