import { circle, mirrorX, poly, starPoints } from '../shapes'
import type { Lesson } from '../types'

export const FAIRY_WINGS = {
  upperL: 'M190 150 Q130 90 104 120 Q92 160 186 168',
  lowerL: 'M188 172 Q132 182 136 222 Q156 236 190 182',
}
export const fairyStar = poly(starPoints(288, 50, 13, 6), true)
export const fairySkirt = 'M184 176 L168 232 Q180 224 188 236 Q196 226 204 238 Q212 226 220 236 Q228 224 236 232 L216 176'

export const fairy: Lesson = {
  id: 'fairy',
  title: { da: 'Fe', en: 'Fairy' },
  category: 'fantasi',
  sub: 'eventyr',
  level: 2,
  minutes: 12,
  intro: {
    da: 'En lille fe med sommerfuglevinger, en kjole af kronblade og en tryllestav, der drysser glimmer.',
    en: 'A little fairy with butterfly wings, a dress made of petals and a magic wand that sprinkles glitter.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn hovedet og håret med en lille knold på toppen.', en: 'Draw the head and the hair with a little bun on top.' },
      strokes: [{ d: circle(200, 110, 30) }, { d: `M172 106 Q170 76 200 78 Q230 76 228 106 ${circle(200, 70, 11)}` }],
    },
    {
      text: { da: 'Tegn kjolen: en lille overdel og et skørt med takker som kronblade.', en: 'Draw the dress: a small top and a skirt with points like petals.' },
      strokes: [{ d: 'M190 140 L184 176 H216 L210 140' }, { d: fairySkirt }],
    },
    {
      text: { da: 'Tegn armene og benene. Den ene arm holder en tryllestav op i luften.', en: 'Draw the arms and the legs. One arm holds a magic wand up in the air.' },
      strokes: [
        { d: `M190 146 Q172 168 170 194 ${circle(170, 199, 5)}` },
        { d: `M210 146 Q236 140 248 114 ${circle(250, 109, 5)}` },
        { d: 'M192 236 L188 290 l-9 4 M208 236 L214 288 l9 4' },
      ],
    },
    {
      text: {
        da: 'Tegn vingerne bag ryggen: to store foroven og to små forneden – ligesom en sommerfugl.',
        en: 'Draw the wings behind her back: two big ones at the top and two small ones at the bottom – like a butterfly.',
      },
      strokes: [{ d: `${FAIRY_WINGS.upperL} ${mirrorX(FAIRY_WINGS.upperL, 200)}` }, { d: `${FAIRY_WINGS.lowerL} ${mirrorX(FAIRY_WINGS.lowerL, 200)}` }],
    },
    {
      text: { da: 'Tegn tryllestaven med en stjerne på spidsen og glimmer, der drysser ud af den.', en: 'Draw the magic wand with a star on the tip and glitter sprinkling out of it.' },
      strokes: [
        { d: `M252 106 L282 60 ${fairyStar}` },
        { d: `${circle(312, 70, 2.5)} ${circle(326, 92, 2)} ${circle(318, 114, 2.5)} ${circle(334, 128, 2)} M316 40 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 Z` },
      ],
    },
    {
      text: { da: 'Tegn øjne, en glad mund og røde kinder. Farvelæg din fe!', en: 'Draw eyes, a happy mouth and rosy cheeks. Colour in your fairy!' },
      strokes: [
        { d: `${circle(189, 112, 3.5)} ${circle(211, 112, 3.5)}`, kind: 'shade', tone: 0.9 },
        { d: 'M192 124 Q200 130 208 124' },
        { d: `${circle(182, 122, 5)} ${circle(218, 122, 5)}`, kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: fairyStar, kind: 'shade', tone: 0.3 },
      ],
    },
  ],
  praise: [{ da: 'Pling! Din fe ser ud, som om hun kan trylle.', en: 'Ping! Your fairy looks like she can do magic.' }],
  nextTip: { da: 'Tegn feen, mens hun sidder på en blomst eller en svamp.', en: 'Draw the fairy sitting on a flower or a toadstool.' },
}
