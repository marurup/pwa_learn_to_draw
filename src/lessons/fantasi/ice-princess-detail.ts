import { radial } from '../shapes'
import type { Lesson } from '../types'
import { snowflake } from './ice-princess'

const dressFlakes = [radial(200, 220, 0, 7, 6, 90), radial(184, 280, 0, 8, 6, 90), radial(222, 300, 0, 8, 6, 90), radial(160, 330, 0, 7, 6, 90), radial(246, 336, 0, 7, 6, 90), radial(200, 160, 0, 6, 6, 90)].join(' ')
const swirl = 'M272 124 Q312 104 302 74 Q292 44 322 36 Q356 30 358 62'
const magic = [snowflake(306, 72, 16), snowflake(352, 72, 12), snowflake(330, 130, 10), snowflake(296, 32, 9)].join(' ')
const sparkles = 'M80 80 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z M60 200 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 Z M340 210 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 Z'
const ice = 'M40 390 L70 372 L84 386 L120 368 L150 384 M250 384 L284 366 L310 386 L334 370 L366 388'

export const icePrincessDetail: Lesson = {
  id: 'ice-princess-detail',
  title: { da: 'Isprinsessen tryller', en: 'The ice princess does magic' },
  category: 'fantasi',
  sub: 'isriget',
  level: 3,
  style: 'detaljer',
  base: 'ice-princess',
  minutes: 22,
  intro: {
    da: 'Byg videre på din isprinsesse: små snefnug på kjolen, en hvirvel af magi med store snefnug fra hånden, glimt og is på jorden.',
    en: 'Build on your ice princess: little snowflakes on her dress, a swirl of magic with big snowflakes from her hand, sparkles and ice on the ground.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn små snefnug spredt ud over kjolen.', en: 'Draw little snowflakes scattered over the dress.' },
      strokes: [{ d: dressFlakes, weight: 0.6 }],
    },
    {
      text: { da: 'Tegn en hvirvel af magi, der snor sig op fra hendes hånd.', en: 'Draw a swirl of magic curling up from her hand.' },
      strokes: [{ d: swirl, weight: 0.8 }],
    },
    {
      text: { da: 'Tegn store snefnug langs hvirvlen – seks arme med små grene.', en: 'Draw big snowflakes along the swirl – six arms with little branches.' },
      tip: { da: 'Tegn først et kryds og en skrå streg, så har du seks arme.', en: 'Draw a cross and then a slanted line, and you have six arms.' },
      strokes: [{ d: magic }],
    },
    {
      text: { da: 'Tegn glimt i luften og takket is på jorden.', en: 'Draw sparkles in the air and jagged ice on the ground.' },
      strokes: [{ d: sparkles }, { d: ice }],
    },
    {
      text: {
        da: 'Skyg kappens folder og kjolens sider blødt, og farvelæg magien lyseblå.',
        en: 'Shade the folds of the cape and the sides of the dress softly, and colour the magic light blue.',
      },
      strokes: [
        { d: 'M180 136 Q120 210 100 372 L130 376 Q140 250 180 150 Z M220 136 Q280 210 300 372 L270 376 Q260 250 220 150 Z', kind: 'shade', fill: 'soft', tone: 0.2 },
        { d: 'M226 190 Q250 280 280 360 L254 362 Q238 280 220 200 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: `${swirl} Q330 60 302 74 Z`, kind: 'shade', fill: 'soft', tone: 0.12 },
        { d: sparkles, kind: 'shade', tone: 0.15 },
      ],
    },
  ],
  praise: [{ da: 'Wow, magien funkler – hele landet bliver dækket af sne!', en: 'Wow, the magic is sparkling – the whole land is turning snowy!' }],
  nextTip: { da: 'Tegn et isslot, som prinsessen tryller frem.', en: 'Draw an ice castle the princess conjures up.' },
}
