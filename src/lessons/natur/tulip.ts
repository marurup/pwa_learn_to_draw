import type { Lesson } from '../types'

export const tulip: Lesson = {
  id: 'tulip',
  title: { da: 'Tulipan', en: 'Tulip' },
  category: 'natur',
  sub: 'blomster',
  level: 2,
  minutes: 8,
  intro: {
    da: 'En tulipan er en kop af kronblade på en lang stilk med to lange blade.',
    en: 'A tulip is a cup of petals on a long stem with two long leaves.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn blomsten som en kop med tre spidser foroven.', en: 'Draw the flower like a cup with three points at the top.' },
      tip: { da: 'Den midterste spids er lidt højere end de to andre.', en: 'The middle point is a little higher than the other two.' },
      strokes: [{ d: 'M156 118 Q146 182 174 208 Q200 224 226 208 Q254 182 244 118 L222 150 L200 106 L178 150 Z' }],
    },
    {
      text: { da: 'Tegn to buede streger inde i koppen. Så ligner det kronblade, der ligger omkring hinanden.', en: 'Draw two curved lines inside the cup. Now it looks like petals wrapped around each other.' },
      strokes: [{ d: 'M178 150 Q182 188 200 214' }, { d: 'M222 150 Q218 188 200 214' }],
    },
    {
      text: { da: 'Tegn stilken: en lang, let buet streg ned fra blomsten.', en: 'Draw the stem: a long, slightly curved line down from the flower.' },
      strokes: [{ d: 'M196 216 Q190 300 196 372' }, { d: 'M204 216 Q200 300 206 372' }],
    },
    {
      text: { da: 'Tegn to lange, spidse blade, der vokser op langs stilken.', en: 'Draw two long, pointy leaves growing up along the stem.' },
      strokes: [
        { d: 'M196 360 Q140 330 128 236 Q172 286 194 322' },
        { d: 'M205 366 Q262 340 278 262 Q236 306 204 334' },
      ],
    },
    {
      text: { da: 'Tegn en midterlinje i hvert blad og græs forneden. Farvelæg tulipanen!', en: 'Draw a middle line in each leaf and grass at the bottom. Colour in the tulip!' },
      strokes: [
        { d: 'M190 344 Q150 310 136 252', weight: 0.7 },
        { d: 'M210 350 Q252 324 270 274', weight: 0.7 },
        { d: 'M40 372 H360' },
        { d: 'M80 372 l6 -16 l6 16 M110 372 l4 -12 l4 12 M300 372 l6 -16 l6 16 M330 372 l4 -12 l4 12' },
      ],
    },
  ],
  praise: [{ da: 'Den tulipan ser helt forårsagtig ud!', en: 'That tulip looks just like spring!' }],
  nextTip: { da: 'Tegn en buket med tre tulipaner i forskellige højder.', en: 'Draw a bunch of three tulips at different heights.' },
}
