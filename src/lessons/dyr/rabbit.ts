import { circle, ellipse, line, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const earL = 'M176 120 C158 76 150 22 172 18 C194 16 196 74 194 116'
const innerEarL = 'M180 106 C168 74 164 38 173 33 C184 32 187 72 188 106'
const hindFootL = 'M119 336 Q84 346 88 366 Q92 378 136 376 Q150 375 158 368'
const whiskersL = [line(184, 190, 136, 180), line(184, 195, 134, 198)].join(' ')

export const rabbit: Lesson = {
  id: 'rabbit',
  title: { da: 'Kanin', en: 'Rabbit' },
  category: 'dyr',
  sub: 'landdyr',
  level: 2,
  minutes: 10,
  intro: {
    da: 'En siddende kanin med lange ører og store bagfødder – og en gulerod at gnaske i.',
    en: 'A sitting rabbit with long ears and big back feet – and a carrot to munch on.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en bred oval til hovedet.', en: 'Draw a wide oval for the head.' },
      strokes: [{ d: ellipse(200, 170, 62, 54) }],
    },
    {
      text: { da: 'Tegn to lange ører, der står op fra toppen af hovedet.', en: 'Draw two long ears standing up from the top of the head.' },
      tip: { da: 'Kaninens ører er næsten lige så lange, som hovedet er højt.', en: 'A rabbit’s ears are almost as long as its head is tall.' },
      strokes: [{ d: earL }, { d: mirrorX(earL, 200) }],
    },
    {
      text: { da: 'Tegn kroppen som en pære under hovedet, og to små forpoter forneden.', en: 'Draw the body like a pear under the head, and two little front paws at the bottom.' },
      strokes: [
        { d: 'M156 210 Q106 256 116 322 Q124 368 200 368 Q276 368 284 322 Q294 256 244 210' },
        { d: 'M168 368 Q168 340 184 340 Q200 340 200 368 M200 368 Q200 340 216 340 Q232 340 232 368' },
      ],
    },
    {
      text: { da: 'Tegn de store bagfødder, der stikker ud på hver side.', en: 'Draw the big back feet sticking out on each side.' },
      strokes: [{ d: hindFootL }, { d: mirrorX(hindFootL, 200) }],
    },
    {
      text: { da: 'Tegn øjne, en lille næse, en mund med to fortænder og knurhår.', en: 'Draw eyes, a little nose, a mouth with two front teeth and whiskers.' },
      strokes: [
        { d: `${circle(174, 160, 9)} ${circle(226, 160, 9)}`, kind: 'shade', tone: 0.9 },
        { d: `${circle(171, 157, 2.5)} ${circle(223, 157, 2.5)}`, kind: 'shade', fill: 'paper' },
        { d: 'M192 182 L208 182 L200 190 Z' },
        { d: 'M200 190 V196 M200 196 Q192 204 184 198 M200 196 Q208 204 216 198' },
        { d: 'M195 201 V210 H205 V201 M200 201 V210' },
        { d: whiskersL },
        { d: mirrorX(whiskersL, 200) },
      ],
    },
    {
      text: { da: 'Tegn ørerne indvendigt, og en gulerod ved siden af kaninen.', en: 'Draw the inside of the ears, and a carrot next to the rabbit.' },
      strokes: [
        { d: innerEarL },
        { d: mirrorX(innerEarL, 200) },
        { d: 'M318 300 Q333 294 348 300 L336 378 Q333 382 330 378 Z' },
        { d: 'M326 298 Q316 278 304 272 M333 296 Q334 270 330 258 M340 298 Q352 278 364 274' },
        { d: 'M322 320 L330 322 M344 340 L337 342 M328 358 L334 360', weight: 0.7 },
      ],
    },
    {
      text: { da: 'Farvelæg: lyserødt inde i ørerne, orange gulerod og en pels i den farve, du vil.', en: 'Colour it in: pink inside the ears, an orange carrot and fur in any colour you like.' },
      strokes: [
        { d: `${innerEarL} Z ${mirrorX(innerEarL, 200)} Z`, kind: 'shade', tone: 0.2 },
        { d: 'M318 300 Q333 294 348 300 L336 378 Q333 382 330 378 Z', kind: 'shade', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Den kanin er så sød, at man har lyst til at klappe den!', en: 'That rabbit is so cute you want to stroke it!' }],
  nextTip: { da: 'Tegn kaninen fra siden, mens den hopper.', en: 'Draw the rabbit from the side while it hops.' },
}
