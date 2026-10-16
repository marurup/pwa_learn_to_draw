import { circle } from '../shapes'
import type { Lesson } from '../types'

export const dolphin: Lesson = {
  id: 'dolphin',
  title: { da: 'Springende delfin', en: 'Jumping dolphin' },
  category: 'dyr',
  sub: 'fisk',
  level: 3,
  minutes: 15,
  intro: {
    da: 'En delfin midt i et spring. Du lærer at starte med en bevægelseslinje – så ser tegningen levende ud.',
    en: 'A dolphin in mid-jump. You learn to start with a line of action – it makes the drawing look alive.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en let bue hen over papiret. Det er bevægelseslinjen: den viser, hvordan delfinen springer.', en: 'Draw a light curve across the paper. It is the line of action: it shows how the dolphin jumps.' },
      tip: { da: 'Rigtige tegnere starter tit med én enkelt buet streg. Så får tegningen fart.', en: 'Real artists often start with one single curved line. It gives the drawing movement.' },
      strokes: [{ d: 'M58 300 Q190 70 352 262', kind: 'guide' }],
    },
    {
      text: { da: 'Tegn ryggen langs bevægelseslinjen – fra halen, over toppen og ned til hovedet.', en: 'Draw the back along the line of action – from the tail, over the top and down to the head.' },
      strokes: [{ d: 'M92 276 Q166 104 298 166 Q330 182 346 214' }],
    },
    {
      text: { da: 'Tegn hovedet med et rundt pande-bump og et langt næb. Tegn så maven tilbage mod halen.', en: 'Draw the head with a round forehead bump and a long beak. Then draw the belly back towards the tail.' },
      strokes: [{ d: 'M346 214 Q358 234 350 246 L370 272 Q352 270 332 260 Q244 206 112 292' }],
    },
    {
      text: { da: 'Tegn halefinnen som to blade, der spreder sig ud.', en: 'Draw the tail fluke as two leaves spreading out.' },
      strokes: [{ d: 'M92 276 Q70 260 44 266 Q64 284 74 302 Q74 322 60 340 Q94 326 112 292' }],
    },
    {
      text: { da: 'Tegn rygfinnen på toppen og en luffe under maven.', en: 'Draw the dorsal fin on top and a flipper under the belly.' },
      strokes: [{ d: 'M182 160 Q196 106 234 102 Q214 124 224 150' }, { d: 'M294 241 Q294 276 258 292 Q264 266 266 252' }],
    },
    {
      text: { da: 'Tegn øjet, munden langs næbbet og et lille åndehul på hovedet.', en: 'Draw the eye, the mouth along the beak and a little blowhole on the head.' },
      strokes: [
        { d: circle(322, 220, 5), kind: 'shade', tone: 0.95 },
        { d: 'M370 272 Q346 254 330 248' },
        { d: 'M306 168 q6 -4 10 0' },
      ],
    },
    {
      text: { da: 'Visk bevægelseslinjen ud. Tegn bølger og vandsprøjt under delfinen. Plask!', en: 'Erase the line of action. Draw waves and splashes under the dolphin. Splash!' },
      erase: 'guides',
      strokes: [
        { d: 'M20 360 q20 -14 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0' },
        { d: 'M46 350 Q38 334 26 328 M66 348 Q66 330 60 316 M90 350 Q98 336 112 332' },
        { d: circle(30, 312, 4) },
        { d: circle(104, 318, 3) },
        { d: circle(52, 300, 3) },
      ],
    },
  ],
  praise: [{ da: 'Den delfin har virkelig fart på!', en: 'That dolphin is really zooming!' }],
  nextTip: { da: 'Tegn to delfiner, der springer i hver sin retning – start med to bevægelseslinjer.', en: 'Draw two dolphins jumping in opposite directions – start with two lines of action.' },
}
