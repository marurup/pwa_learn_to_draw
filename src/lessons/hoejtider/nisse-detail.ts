import { circle } from '../shapes'
import type { Lesson } from '../types'

const bowl = 'M282 350 Q284 386 320 386 Q356 386 358 350 Z'
const porridge = 'M282 350 Q320 334 358 350'
const butter = 'M312 344 L322 340 L330 345 L320 349 Z'
const mouse = 'M40 384 Q44 360 70 360 Q92 362 98 384 Z'
const patch = 'M214 330 H236 V348 H214 Z'

export const nisseDetail: Lesson = {
  id: 'nisse-detail',
  title: { da: 'Nisse med risengrød', en: 'Elf with rice pudding' },
  category: 'hoejtider',
  sub: 'jul',
  level: 2,
  style: 'detaljer',
  base: 'nisse',
  minutes: 14,
  intro: {
    da: 'Byg videre på din nisse: et overskæg, en lap på tøjet, en dampende skål risengrød med smørklat og en lille mus, der også er sulten.',
    en: 'Build on your elf: a moustache, a patch on his clothes, a steaming bowl of rice pudding with butter and a little mouse who is hungry too.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn et krøllet overskæg under næsen og hår-streger i skægget.', en: 'Draw a curly moustache under the nose and hair lines in the beard.' },
      strokes: [
        { d: 'M200 232 Q186 244 170 236 Q164 230 170 226 M200 232 Q214 244 230 236 Q236 230 230 226' },
        { d: 'M160 250 Q164 272 178 286 M200 250 V296 M240 250 Q236 272 222 286', weight: 0.6, opacity: 0.7 },
      ],
    },
    {
      text: { da: 'Tegn en lap med sting på tøjet.', en: 'Draw a patch with stitches on his clothes.' },
      strokes: [{ d: patch }, { d: 'M218 326 V334 M226 326 V334 M232 326 V334 M218 344 V352 M226 344 V352 M232 344 V352', weight: 0.6 }],
    },
    {
      text: { da: 'Tegn en skål risengrød med en smørklat og damp, der stiger op.', en: 'Draw a bowl of rice pudding with a knob of butter and steam rising up.' },
      strokes: [{ d: bowl }, { d: porridge }, { d: butter }, { d: 'M304 330 Q296 318 306 308 M326 326 Q318 314 328 302', weight: 0.7 }],
    },
    {
      text: { da: 'Tegn en lille mus, der kigger sulten på grøden.', en: 'Draw a little mouse looking hungrily at the pudding.' },
      strokes: [{ d: mouse }, { d: circle(66, 358, 9) }, { d: 'M40 380 Q24 378 22 364' }, { d: `${circle(84, 372, 2)} ${circle(98, 380, 2.5)}`, kind: 'shade', tone: 0.9 }],
    },
    {
      text: {
        da: 'Skyg huen i den ene side og under hatkanten. Farvelæg skålen og smørret gult, og musen grå.',
        en: 'Shade one side of the hat and under the brim. Colour the bowl and the butter yellow, and the mouse grey.',
      },
      tip: { da: 'Skyggen under hatkanten gør næsen rund.', en: 'The shadow under the brim makes the nose look round.' },
      strokes: [
        { d: 'M226 64 Q252 50 268 60 Q240 84 236 120 Q236 160 260 186 H236 Q216 140 226 64 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M140 202 H260 Q262 212 260 216 H140 Z', kind: 'shade', fill: 'fade-down', tone: 0.25 },
        { d: bowl, kind: 'shade', tone: 0.3 },
        { d: butter, kind: 'shade', tone: 0.25 },
        { d: `${mouse} ${circle(66, 358, 9)}`, kind: 'shade', tone: 0.3 },
        { d: patch, kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Nissen er glad – og musen håber på en lille smule grød!', en: 'The elf is happy – and the mouse is hoping for a little bit of pudding!' }],
  nextTip: { da: 'Tegn nissen i laden sammen med en kat og en ko.', en: 'Draw the elf in the barn with a cat and a cow.' },
}
