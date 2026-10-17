import { mirrorX } from '../shapes'
import type { Lesson } from '../types'

const sideTower = 'M110 330 V190 L134 140 L158 190 V330'
const diamond = (x: number, y: number, s: number) => `M${x} ${y - s} l${s * 0.7} ${s} l${-s * 0.7} ${s} l${-s * 0.7} ${-s} Z`

export const ICE_CASTLE = {
  centre: 'M170 330 V140 L200 60 L230 140 V330',
  sides: `${sideTower} ${mirrorX(sideTower, 200)}`,
  walls: 'M158 230 H170 M230 230 H242 M90 330 H310',
  door: 'M186 330 V292 Q200 274 214 292 V330',
  stairs: 'M184 330 L174 360 H226 L216 330 M180 340 H220 M177 350 H223',
  windows: [diamond(200, 170, 12), diamond(200, 230, 10), diamond(134, 220, 9), diamond(266, 220, 9), diamond(134, 270, 8), diamond(266, 270, 8)].join(' '),
  ground: 'M30 366 Q200 356 370 366',
  shape: 'M110 330 V190 L134 140 L158 190 V230 H170 V140 L200 60 L230 140 V230 H242 V190 L266 140 L290 190 V330 Z',
}

export const iceCastle: Lesson = {
  id: 'ice-castle',
  title: { da: 'Isslottet', en: 'The ice castle' },
  category: 'fantasi',
  sub: 'isriget',
  level: 2,
  minutes: 14,
  intro: {
    da: 'Et glitrende slot af is med spidse tårne, en trappe og vinduer som iskrystaller.',
    en: 'A glittering castle of ice with pointed towers, a staircase and windows like ice crystals.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn det høje tårn i midten med en lang spids.', en: 'Draw the tall tower in the middle with a long spire.' },
      strokes: [{ d: ICE_CASTLE.centre }],
    },
    {
      text: { da: 'Tegn to lavere tårne på siderne, også med spidser.', en: 'Draw two lower towers at the sides, also with spires.' },
      strokes: [{ d: ICE_CASTLE.sides }],
    },
    {
      text: { da: 'Forbind tårnene med mure, og tegn en lang streg forneden.', en: 'Join the towers with walls, and draw a long line along the bottom.' },
      strokes: [{ d: ICE_CASTLE.walls }],
    },
    {
      text: { da: 'Tegn en buet port og en trappe ned fra den.', en: 'Draw an arched door and a staircase coming down from it.' },
      strokes: [{ d: ICE_CASTLE.door }, { d: ICE_CASTLE.stairs }],
    },
    {
      text: { da: 'Tegn vinduer som små diamanter og sneen, slottet står på.', en: 'Draw windows like little diamonds and the snow the castle stands on.' },
      strokes: [{ d: ICE_CASTLE.windows }, { d: ICE_CASTLE.ground }],
    },
    {
      text: { da: 'Farvelæg slottet lyseblåt og vinduerne lidt mørkere.', en: 'Colour the castle light blue and the windows a little darker.' },
      tip: { da: 'Lad nogle striber stå hvide, så isen glitrer.', en: 'Leave some stripes white so the ice glitters.' },
      strokes: [
        { d: ICE_CASTLE.shape, kind: 'shade', tone: 0.15 },
        { d: ICE_CASTLE.windows, kind: 'shade', tone: 0.35 },
        { d: 'M176 150 L182 140 V320 H176 Z M116 200 L120 194 V320 H116 Z', kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'Sikke et eventyrslot – det funkler som is i solen!', en: 'What a fairy-tale castle – it sparkles like ice in the sun!' }],
  nextTip: { da: 'Tegn slottet om natten med nordlys på himlen.', en: 'Draw the castle at night with northern lights in the sky.' },
}
