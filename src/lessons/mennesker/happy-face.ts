import { circle, ellipse, ellipseArc, line, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const earL = 'M78 178 Q50 172 52 205 Q55 238 82 232'

export const happyFace: Lesson = {
  id: 'happy-face',
  title: { da: 'Glad ansigt', en: 'Happy face' },
  category: 'mennesker',
  sub: 'ansigter',
  motif: 'face',
  level: 2,
  minutes: 10,
  intro: {
    da: 'Et ansigt starter med en form. Så kommer hjælpelinjer, øjne, næse og mund – i den rækkefølge.',
    en: 'A face starts with a shape. Then come guide lines, eyes, nose and mouth – in that order.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Tegn en stor oval til hovedet – lidt højere end den er bred.', en: 'Draw a big oval for the head – a little taller than it is wide.' },
      tip: { da: 'Tegn let i starten. Så er det nemt at rette.', en: 'Draw lightly at first. Then it is easy to fix.' },
      strokes: [{ d: ellipse(200, 205, 122, 145), id: 'head' }],
    },
    {
      text: { da: 'Tegn to lette hjælpelinjer: en lodret ned gennem midten, og en vandret lige over midten.', en: 'Draw two light guide lines: one straight down the middle, and one across just above the middle.' },
      tip: { da: 'Hjælpelinjerne viser, hvor øjnene og næsen skal sidde. Dem visker du ud til sidst.', en: 'The guide lines show where the eyes and nose go. You erase them at the end.' },
      strokes: [
        { d: line(200, 62, 200, 348), kind: 'guide', id: 'g-v' },
        { d: line(80, 190, 320, 190), kind: 'guide', id: 'g-h' },
      ],
    },
    {
      text: { da: 'Tegn to øjne på den vandrette linje – et på hver side af midten.', en: 'Draw two eyes on the horizontal line – one on each side of the middle.' },
      tip: { da: 'Der skal være plads til et tredje øje mellem øjnene.', en: 'There should be room for a third eye between the eyes.' },
      strokes: [
        { d: circle(150, 190, 19) },
        { d: circle(250, 190, 19) },
        { d: circle(154, 193, 8), kind: 'shade', tone: 0.9 },
        { d: circle(254, 193, 8), kind: 'shade', tone: 0.9 },
      ],
    },
    {
      text: { da: 'Tegn en lille næse på den lodrette linje, under øjnene.', en: 'Draw a small nose on the vertical line, below the eyes.' },
      strokes: [{ d: 'M198 220 Q184 248 200 252 Q208 253 213 249' }],
    },
    {
      text: { da: 'Tegn en stor smilemund under næsen.', en: 'Draw a big smile below the nose.' },
      strokes: [{ d: ellipseArc(200, 262, 58, 34, 15, 165) }],
    },
    {
      text: { da: 'Tegn ører på siderne – de sidder i højde med øjnene og næsen.', en: 'Draw ears on the sides – level with the eyes and the nose.' },
      strokes: [{ d: earL }, { d: mirrorX(earL, 200) }],
    },
    {
      text: { da: 'Visk hjælpelinjerne ud, og tegn hår. Det må være krøllet, langt eller kort – som dit eget!', en: 'Erase the guide lines and draw hair. Curly, long or short – just like yours!' },
      erase: ['g-v', 'g-h', 'head'],
      strokes: [
        { d: ellipseArc(200, 205, 122, 145, -14.8, 194.8) },
        { d: 'M80 168 Q82 70 200 60 Q318 70 320 168 Q300 118 258 122 Q236 96 200 110 Q166 94 144 122 Q102 116 80 168' },
      ],
    },
    {
      text: { da: 'Gør ansigtet ekstra glad med øjenbryn og runde kinder.', en: 'Make the face extra happy with eyebrows and round cheeks.' },
      strokes: [
        { d: 'M128 160 Q150 148 172 158' },
        { d: 'M228 158 Q250 148 272 160' },
        { d: circle(128, 238, 16), kind: 'shade', tone: 0.12 },
        { d: circle(272, 238, 16), kind: 'shade', tone: 0.12 },
      ],
    },
  ],
  praise: [{ da: 'Det ansigt smiler hele vejen op til ørerne!', en: 'That face is smiling from ear to ear!' }],
  nextTip: { da: 'Tegn et ansigt, der er overrasket, sur eller søvnig. Prøv at ændre øjenbrynene og munden.', en: 'Draw a face that is surprised, grumpy or sleepy. Try changing the eyebrows and the mouth.' },
}
