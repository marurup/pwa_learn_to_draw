import { circle, mirrorX } from '../shapes'
import type { Lesson } from '../types'
import { DOLL_IDS } from './doll'

// Arms floating out to the sides in a soft curve.
const armOutL = `M176 152 Q140 140 108 160 M180 166 Q144 158 112 172 ${circle(104, 166, 7)}`
const tutu = 'M150 214 Q200 198 250 214 L262 228 L244 232 L250 242 L228 240 L222 250 L200 244 L178 250 L172 240 L150 242 L156 232 L138 228 Z'
const shoeL = 'M182 330 Q180 350 192 352 Q200 350 198 330'

export const dollBallerina: Lesson = {
  id: 'doll-ballerina',
  title: { da: 'Dukke som ballerina', en: 'Doll as a ballerina' },
  category: 'mennesker',
  sub: 'dukker',
  level: 2,
  style: 'detaljer',
  base: 'doll',
  minutes: 15,
  intro: {
    da: 'Giv din dukke en tutu og balletsko, og lad hende løfte armene som en rigtig ballerina.',
    en: 'Give your doll a tutu and ballet shoes, and let her lift her arms like a real ballerina.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: {
        da: 'Visk kjolen, armene og skoene ud. Tegn en tætsiddende dragt på overkroppen.',
        en: 'Rub out the dress, the arms and the shoes. Draw a fitted leotard on the upper body.',
      },
      erase: [DOLL_IDS.dress, DOLL_IDS.arms, DOLL_IDS.shoes, 'dressColour'],
      strokes: [{ d: 'M178 150 H222 L218 216 H182 Z' }],
    },
    {
      text: { da: 'Tegn armene, der svæver ud til siderne i en blød bue.', en: 'Draw the arms floating out to the sides in a soft curve.' },
      tip: { da: 'Det hedder "anden position" i ballet. Albuerne er bløde – armene er aldrig helt strakte.', en: 'In ballet this is called "second position". The elbows are soft – the arms are never completely straight.' },
      strokes: [{ d: `${armOutL} ${mirrorX(armOutL, 200)}` }],
    },
    {
      text: { da: 'Tegn tutuen: et bredt, fladt skørt med takker, der stritter ud fra taljen. Forlæng benene op til tutuen.', en: 'Draw the tutu: a wide, flat skirt with points sticking out from the waist. Make the legs reach up to the tutu.' },
      strokes: [{ d: tutu }, { d: 'M160 222 L176 236 M186 214 L192 240 M214 214 L208 240 M240 222 L224 236', weight: 0.6 }, { d: 'M184 248 V270 M196 246 V270 M204 246 V270 M216 248 V270' }],
    },
    {
      text: { da: 'Tegn spidse balletsko med bånd, der krydser op ad benene.', en: 'Draw pointed ballet shoes with ribbons crossing up the legs.' },
      strokes: [
        { d: `${shoeL} ${mirrorX(shoeL, 200)}` },
        { d: 'M184 312 L196 326 M196 312 L184 326 M204 312 L216 326 M216 312 L204 326', weight: 0.7 },
      ],
    },
    {
      text: { da: 'Sæt en blomst i håret, og tegn små noder, der danser rundt om hende. Farvelæg!', en: 'Put a flower in her hair, and draw little musical notes dancing around her. Colour it in!' },
      strokes: [
        { d: `${circle(240, 66, 5)} ${circle(248, 60, 5)} ${circle(250, 70, 5)} ${circle(242, 76, 5)}` },
        { d: `M70 122 V90 L86 86 V118 ${circle(66, 122, 5)} ${circle(82, 118, 5)} M330 140 V112 ${circle(326, 140, 5)} M330 112 Q342 118 340 128` },
        { d: tutu, kind: 'shade', tone: 0.18 },
        { d: 'M178 150 H222 L218 216 H182 Z', kind: 'shade', tone: 0.18 },
      ],
    },
  ],
  praise: [{ da: 'Bravo! Din ballerina er klar til at danse på scenen.', en: 'Bravo! Your ballerina is ready to dance on stage.' }],
  nextTip: { da: 'Tegn ballerinaen, mens hun står på tæerne på ét ben.', en: 'Draw the ballerina standing on her toes on one leg.' },
}
