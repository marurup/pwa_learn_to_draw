import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'

// Yarn hair: little loops all the way round the top of the head.
const yarnHair = Array.from({ length: 9 }, (_, i) => {
  const a = ((190 + i * 20) * Math.PI) / 180
  return circle(200 + 50 * Math.cos(a), 108 + 50 * Math.sin(a), 11)
}).join(' ')
const legL = 'M168 262 Q150 300 130 330 M192 262 Q176 304 152 340 M130 330 Q114 344 126 356 Q146 362 152 340'
const armL = 'M172 164 Q140 190 124 228 M180 182 Q156 204 140 236 M124 228 Q118 244 132 244 Q142 242 140 236'

export const ragDoll: Lesson = {
  id: 'rag-doll',
  title: { da: 'Kludedukke', en: 'Rag doll' },
  category: 'mennesker',
  sub: 'dukker',
  level: 1,
  minutes: 10,
  intro: {
    da: 'En blød kludedukke med garnhår, knapøjne og arme og ben, der dingler.',
    en: 'A soft rag doll with yarn hair, button eyes and floppy arms and legs.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en stor cirkel til hovedet.', en: 'Draw a big circle for the head.' },
      strokes: [{ d: circle(200, 108, 44) }],
    },
    {
      text: { da: 'Tegn garnhår: små rundinger hele vejen rundt om toppen af hovedet.', en: 'Draw yarn hair: little loops all the way round the top of the head.' },
      strokes: [{ d: yarnHair }],
    },
    {
      text: { da: 'Tegn to runde knapøjne, en lille næse og et stort smil.', en: 'Draw two round button eyes, a little nose and a big smile.' },
      strokes: [
        { d: `${circle(182, 104, 8)} ${circle(218, 104, 8)}`, kind: 'shade', tone: 0.85 },
        { d: circle(200, 118, 4) },
        { d: 'M180 128 Q200 144 220 128' },
      ],
    },
    {
      text: { da: 'Tegn kjolen som en pære under hovedet, med en krave.', en: 'Draw the dress like a pear under the head, with a collar.' },
      strokes: [{ d: 'M170 150 Q150 200 152 262 H248 Q250 200 230 150' }, { d: 'M176 154 Q200 168 224 154' }],
    },
    {
      text: { da: 'Tegn arme, der dingler ud til siderne.', en: 'Draw arms that flop out to the sides.' },
      strokes: [{ d: armL }, { d: mirrorX(armL, 200) }],
    },
    {
      text: { da: 'Tegn benene, så dukken sidder med benene spredt ud foran sig.', en: 'Draw the legs so the doll sits with her legs spread out in front of her.' },
      strokes: [{ d: legL }, { d: mirrorX(legL, 200) }],
    },
    {
      text: { da: 'Tegn røde kinder, og farvelæg din kludedukke.', en: 'Draw rosy cheeks, and colour in your rag doll.' },
      strokes: [
        { d: `${circle(170, 122, 7)} ${circle(230, 122, 7)}`, kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: 'M170 150 Q150 200 152 262 H248 Q250 200 230 150 Z', kind: 'shade', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en nuttet kludedukke – den ser blød og rar ud at kramme!', en: 'What a cute rag doll – it looks soft and nice to cuddle!' }],
  nextTip: { da: 'Tegn en kludedukke-ven til hende – måske en bamse?', en: 'Draw a rag doll friend for her – maybe a teddy bear?' },
}
