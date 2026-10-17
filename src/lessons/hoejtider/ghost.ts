import { ellipse } from '../shapes'
import type { Lesson } from '../types'

export const ghostBody = 'M140 330 V184 Q140 100 200 100 Q260 100 260 184 V330 L240 312 L220 330 L200 312 L180 330 L160 312 Z'

export const ghost: Lesson = {
  id: 'ghost',
  title: { da: 'Spøgelse', en: 'Ghost' },
  category: 'hoejtider',
  sub: 'halloween',
  level: 1,
  minutes: 5,
  intro: {
    da: 'Et lille, sødt spøgelse, der siger BØH!',
    en: 'A cute little ghost that says BOO!',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Tegn spøgelset: en rund top, lige sider og en takket kant forneden – ligesom et lagen.',
        en: 'Draw the ghost: a round top, straight sides and a wavy edge at the bottom – like a sheet.',
      },
      strokes: [{ d: ghostBody }],
    },
    {
      text: { da: 'Tegn to store, ovale øjne og en rund mund.', en: 'Draw two big oval eyes and a round mouth.' },
      strokes: [{ d: `${ellipse(182, 170, 9, 14)} ${ellipse(218, 170, 9, 14)}`, kind: 'shade', tone: 0.9 }, { d: ellipse(200, 214, 12, 16) }],
    },
    {
      text: { da: 'Tegn to små arme, der vinker.', en: 'Draw two little arms waving.' },
      strokes: [{ d: 'M140 236 Q112 230 104 206 Q102 194 112 198 Q126 210 140 210 M260 236 Q288 230 296 206 Q298 194 288 198 Q274 210 260 210' }],
    },
    {
      text: {
        da: 'Tegn små buer, der viser, at spøgelset svæver, og en taleboble, hvor du skriver BØH!',
        en: 'Draw little curves to show the ghost is floating, and a speech bubble where you write BOO!',
      },
      strokes: [{ d: 'M150 352 Q170 360 190 352 M210 352 Q230 360 250 352', weight: 0.7 }, { d: `${ellipse(310, 110, 40, 22)} M282 126 L264 150 L294 130` }],
      labels: [{ x: 310, y: 116, text: { da: 'BØH!', en: 'BOO!' } }],
    },
  ],
  praise: [{ da: 'Uh, hvor blev jeg forskrækket – sikke et sødt spøgelse!', en: 'Oh, you scared me – what a cute ghost!' }],
  nextTip: { da: 'Tegn en hel familie af spøgelser i forskellige størrelser.', en: 'Draw a whole family of ghosts in different sizes.' },
}
