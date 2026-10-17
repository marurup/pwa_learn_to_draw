import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

export const WITCH = {
  hat: 'M160 116 L206 30 Q222 22 228 38 L240 116',
  brim: ellipse(200, 118, 72, 12),
  dress: 'M184 184 L138 330 H262 L216 184',
  hem: 'M138 330 L150 318 L162 330 L174 318 L186 330 L198 318 L210 330 L222 318 L234 330 L246 318 L262 330',
  broom: 'M286 176 V352 M270 322 L286 296 L302 322 L306 368 H266 Z',
}

export const witch: Lesson = {
  id: 'witch',
  title: { da: 'Heks', en: 'Witch' },
  category: 'hoejtider',
  sub: 'halloween',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En sød heks med en spids hat, en takket kjole og sin kost.',
    en: 'A friendly witch with a pointy hat, a jagged dress and her broomstick.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en cirkel til hovedet.', en: 'Draw a circle for the head.' },
      strokes: [{ d: circle(200, 150, 34) }],
    },
    {
      text: { da: 'Tegn den spidse hat med en bred skygge. Spidsen bøjer lidt.', en: 'Draw the pointy hat with a wide brim. The tip bends a little.' },
      strokes: [{ d: WITCH.brim }, { d: WITCH.hat }, { d: 'M164 104 Q200 112 236 104' }],
    },
    {
      text: { da: 'Tegn langt, pjusket hår og et ansigt med en lang næse.', en: 'Draw long, scruffy hair and a face with a long nose.' },
      strokes: [
        { d: 'M168 126 Q148 160 156 196 l6 -6 l2 8 M232 126 Q252 160 244 196 l-6 -6 l-2 8' },
        { d: `${circle(188, 148, 3.5)} ${circle(212, 148, 3.5)}`, kind: 'shade', tone: 0.9 },
        { d: `M200 152 L212 168 L200 168 M188 174 Q200 182 212 174 ${circle(209, 162, 1.6)}` },
      ],
    },
    {
      text: { da: 'Tegn kjolen med en takket kant forneden.', en: 'Draw the dress with a jagged hem.' },
      strokes: [{ d: WITCH.dress }, { d: WITCH.hem }],
    },
    {
      text: { da: 'Tegn armene, en kost, som hun holder i, og spidse sko.', en: 'Draw the arms, a broomstick she is holding, and pointy shoes.' },
      strokes: [
        { d: `M216 196 Q250 214 280 230 ${circle(285, 232, 6)} M184 196 Q160 230 152 262 ${circle(150, 267, 6)}` },
        { d: WITCH.broom },
        { d: 'M176 330 V344 L150 350 Q170 352 186 350 V330 M214 330 V350 Q232 352 252 350 L224 344 V330' },
      ],
    },
    {
      text: { da: 'Farvelæg heksen – sort hat og kjole, eller lilla og grøn, hvis du vil!', en: 'Colour in the witch – a black hat and dress, or purple and green if you like!' },
      strokes: [{ d: `${WITCH.hat} Z ${WITCH.brim}`, kind: 'shade', tone: 0.7 }, { d: `${WITCH.dress} Z`, kind: 'shade', tone: 0.5 }],
    },
  ],
  praise: [{ da: 'Abrakadabra – sikke en flot heks!', en: 'Abracadabra – what a great witch!' }],
  nextTip: { da: 'Tegn heksen, mens hun flyver på kosten foran månen.', en: 'Draw the witch flying on her broomstick in front of the moon.' },
}
