import { circle } from '../shapes'
import type { Lesson } from '../types'

const dots = [
  [146, 236], [168, 268], [146, 300], [168, 332], [254, 276], [232, 304], [256, 334], [124, 190], [164, 190], [236, 190], [276, 190],
].map(([x, y]) => circle(x, y, 4)).join(' ')
const tag = 'M236 226 H290 V258 H236 L226 242 Z'
const small = 'M300 300 H364 V350 H300 Z M332 300 V350 M300 324 H364'
const smallBow = 'M332 300 Q316 284 312 294 Q316 302 332 300 Q348 284 352 294 Q348 302 332 300'

export const giftDetail: Lesson = {
  id: 'gift-detail',
  title: { da: 'Gaver med mønster og navneskilt', en: 'Presents with patterns and a name tag' },
  category: 'hoejtider',
  sub: 'jul',
  level: 2,
  style: 'detaljer',
  base: 'gift',
  minutes: 12,
  intro: {
    da: 'Byg videre på din gave: prikket gavepapir, et navneskilt, en lille gave mere og skygger, så gaven står på bordet.',
    en: 'Build on your present: dotted wrapping paper, a name tag, one more little present and shadows so it stands on the table.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn prikker på gavepapiret – på æsken og på låget.', en: 'Draw dots on the wrapping paper – on the box and on the lid.' },
      strokes: [{ d: dots }],
    },
    {
      text: { da: 'Tegn et navneskilt i en snor fra sløjfen, og skriv, hvem gaven er til.', en: 'Draw a name tag on a string from the bow, and write who the present is for.' },
      strokes: [{ d: 'M222 200 Q236 216 234 240' }, { d: tag }, { d: circle(234, 242, 2.5) }],
      labels: [{ x: 262, y: 248, text: { da: 'Til…', en: 'To…' } }],
    },
    {
      text: { da: 'Tegn en lille gave mere ved siden af med kryds-bånd og sløjfe.', en: 'Draw another little present next to it with crossed ribbons and a bow.' },
      strokes: [{ d: small }, { d: smallBow }],
    },
    {
      text: {
        da: 'Skyg under låget og under gaverne, så de står på bordet. Lad en hvid stribe stå på båndet.',
        en: 'Shade under the lid and under the presents so they stand on the table. Leave a white stripe on the ribbon.',
      },
      tip: { da: 'Låget skygger lidt for æsken lige under kanten.', en: 'The lid casts a little shadow on the box just under its edge.' },
      strokes: [
        { d: 'M126 210 H274 V222 H126 Z', kind: 'shade', fill: 'fade-down', tone: 0.4 },
        { d: 'M110 350 H372 Q380 358 372 362 H118 Q104 358 110 350 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M300 300 H364 V350 H300 Z', kind: 'shade', tone: 0.25 },
        { d: 'M192 224 H196 V346 H192 Z', kind: 'shade', fill: 'paper' },
        { d: tag, kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'Den gave bliver svær at vente med at pakke op!', en: 'That present will be hard to wait to open!' }],
  nextTip: { da: 'Tegn dit eget gavepapir med stjerner, hjerter eller striber.', en: 'Draw your own wrapping paper with stars, hearts or stripes.' },
}
