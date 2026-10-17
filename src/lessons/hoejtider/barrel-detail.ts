import { ellipse } from '../shapes'
import type { Lesson } from '../types'

const flags = Array.from({ length: 8 }, (_, i) => {
  const x = i < 4 ? 30 + i * 36 : 230 + (i - 4) * 36
  return `M${x} 40 l12 20 l12 -20`
}).join(' ')
const crown = 'M184 194 L180 170 L192 180 L200 164 L208 180 L220 170 L216 194 Z'
const streamers = 'M150 336 Q140 356 152 372 Q162 388 150 400 M200 342 Q210 362 198 378 Q188 392 200 400 M250 336 Q262 354 250 370 Q240 386 252 400'
const sweet = (x: number, y: number) => `${ellipse(x, y, 9, 6)} M${x - 9} ${y} l-7 -5 v10 Z M${x + 9} ${y} l7 -5 v10 Z`
const sweets = [sweet(80, 370), sweet(320, 362), sweet(106, 392), sweet(296, 390)].join(' ')

export const barrelDetail: Lesson = {
  id: 'barrel-detail',
  title: { da: 'Fastelavnstønde med kattekonge', en: 'Shrovetide barrel with a cat king' },
  category: 'hoejtider',
  sub: 'fastelavn',
  level: 3,
  style: 'detaljer',
  base: 'barrel',
  minutes: 18,
  intro: {
    da: 'Byg videre på din tønde: flag på rebet, en krone til katten, serpentiner under tønden og slik, der drysser ud.',
    en: 'Build on your barrel: flags on the rope, a crown for the cat, streamers under the barrel and sweets falling out.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn små trekantede flag langs rebet.', en: 'Draw little triangle flags along the rope.' },
      strokes: [{ d: flags }],
    },
    {
      text: { da: 'Giv katten en krone på hovedet – den er kattekonge!', en: 'Give the cat a crown – it is the cat king!' },
      strokes: [{ d: crown }],
    },
    {
      text: { da: 'Tegn bølgede serpentiner, der hænger ned under tønden.', en: 'Draw wavy streamers hanging down under the barrel.' },
      strokes: [{ d: streamers }],
    },
    {
      text: { da: 'Tegn slik med papir snoet om, der drysser ud.', en: 'Draw sweets in twisted wrappers falling out.' },
      strokes: [{ d: sweets }],
    },
    {
      text: {
        da: 'Skyg tønden i højre side, og farvelæg flag, serpentiner og slik i mange farver. Kronen skal være guld!',
        en: 'Shade the barrel on the right, and colour the flags, streamers and sweets in lots of colours. The crown is gold!',
      },
      tip: { da: 'Skyggen i siden gør tønden rund.', en: 'Shading the side makes the barrel round.' },
      strokes: [
        { d: 'M240 124 L272 110 Q296 220 272 330 L240 338 Q262 230 240 124 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: crown, kind: 'shade', tone: 0.2 },
        { d: flags, kind: 'shade', tone: 0.35 },
        { d: sweets, kind: 'shade', tone: 0.4 },
      ],
    },
  ],
  praise: [{ da: 'Hurra for kattekongen – og for alt det slik!', en: 'Hooray for the cat king – and for all those sweets!' }],
  nextTip: { da: 'Tegn alle børnene i deres flotte udklædninger rundt om tønden.', en: 'Draw all the children in their fancy costumes around the barrel.' },
}
