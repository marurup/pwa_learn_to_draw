import { circle } from '../shapes'
import type { Lesson } from '../types'

export const HAUNTED = {
  walls: 'M110 360 L120 196 L286 186 L296 360 Z',
  // The tower stands in front, so the roof line stops on each side of it.
  roof: 'M98 202 L124 178 M172 134 L196 112 L302 192',
  tower: 'M124 195 V122 H172 V192',
  towerRoof: 'M118 124 L148 64 L180 124 Z',
  windows: 'M146 236 H184 V278 H146 Z M232 230 H270 V272 H232 Z',
  door: 'M184 360 V314 Q200 296 216 314 V360',
}

export const hauntedHouse: Lesson = {
  id: 'haunted-house',
  title: { da: 'Spøgelseshus', en: 'Haunted house' },
  category: 'hoejtider',
  sub: 'halloween',
  level: 2,
  minutes: 12,
  intro: {
    da: 'Et gammelt, skævt hus med et tårn, et nøgent træ og en stor måne. Alt må gerne være lidt skævt!',
    en: 'An old, crooked house with a tower, a bare tree and a big moon. Everything can be a little crooked!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn husets vægge lidt skæve.', en: 'Draw the walls of the house a little crooked.' },
      tip: { da: 'Skæve streger gør huset gammelt og uhyggeligt.', en: 'Crooked lines make the house look old and spooky.' },
      strokes: [{ d: HAUNTED.walls }],
    },
    {
      text: { da: 'Tegn et skævt tag og et højt tårn med et spidst tag.', en: 'Draw a crooked roof and a tall tower with a pointed roof.' },
      strokes: [{ d: HAUNTED.roof }, { d: HAUNTED.tower }, { d: HAUNTED.towerRoof }],
    },
    {
      text: { da: 'Tegn vinduer med krydser, et rundt vindue i tårnet og en dør.', en: 'Draw windows with crosses, a round window in the tower and a door.' },
      strokes: [{ d: HAUNTED.windows }, { d: 'M165 236 V278 M146 257 H184 M251 230 V272 M232 251 H270' }, { d: circle(149, 146, 10) }, { d: HAUNTED.door }],
    },
    {
      text: { da: 'Tegn et nøgent træ med krogede grene ved siden af huset.', en: 'Draw a bare tree with crooked branches next to the house.' },
      strokes: [
        { d: 'M322 360 Q330 320 328 268 L336 246 L346 268 Q342 320 350 360' },
        { d: 'M330 290 Q312 272 300 250 L290 244 M300 250 L298 236 M342 280 Q360 262 372 240 L382 236 M372 240 L370 228 M336 246 Q338 226 344 210 L352 202 M344 210 L338 200' },
      ],
    },
    {
      text: { da: 'Tegn en stor måne og jorden. Farvelæg huset!', en: 'Draw a big moon and the ground. Colour in the house!' },
      strokes: [{ d: circle(66, 74, 34) }, { d: 'M20 360 H380' }, { d: `${HAUNTED.walls}`, kind: 'shade', tone: 0.3 }],
    },
  ],
  praise: [{ da: 'Uhh, man tør næsten ikke banke på døren!', en: 'Ooh, you hardly dare knock on the door!' }],
  nextTip: { da: 'Tegn en lille spøgelseshund, der bor i huset.', en: 'Draw a little ghost dog that lives in the house.' },
}
