import { circle, ellipse, rect, roundRect } from '../shapes'
import type { Lesson } from '../types'

export const BUS = {
  balloon: ellipse(200, 92, 96, 72),
  gores: 'M200 20 Q160 92 200 164 M200 20 Q240 92 200 164',
  ropes: 'M150 153 L150 214 M250 153 L250 214',
  body: roundRect(80, 214, 240, 96, 14),
  windows: [96, 144, 192, 240].map((x) => rect(x, 228, 40, 30)).join(' '),
  front: 'M290 228 H312 V266 H290 Z M290 270 V306',
  stripe: 'M80 276 H286',
  wheels: `${circle(126, 310, 20)} ${circle(274, 310, 20)}`,
  hubs: `${circle(126, 310, 7)} ${circle(274, 310, 7)}`,
}

export const partyBus: Lesson = {
  id: 'party-bus',
  title: { da: 'Den flyvende festbus', en: 'The flying party bus' },
  category: 'spil',
  sub: 'spilfigurer',
  level: 2,
  minutes: 14,
  intro: {
    da: 'En bus, der flyver under en stor luftballon – alle skal med til festen!',
    en: 'A bus flying under a big hot-air balloon – everyone is coming to the party!',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn en stor, oval ballon øverst.', en: 'Draw a big oval balloon at the top.' },
      strokes: [{ d: BUS.balloon }],
    },
    {
      text: { da: 'Tegn to buede striber på ballonen og to reb ned.', en: 'Draw two curved stripes on the balloon and two ropes hanging down.' },
      strokes: [{ d: BUS.gores }, { d: BUS.ropes }],
    },
    {
      text: { da: 'Tegn bussen som en lang firkant med runde hjørner under rebene.', en: 'Draw the bus as a long rectangle with round corners under the ropes.' },
      strokes: [{ d: BUS.body }],
    },
    {
      text: { da: 'Tegn fire vinduer, en forrude og en dør.', en: 'Draw four windows, a windscreen and a door.' },
      strokes: [{ d: BUS.windows }, { d: BUS.front }],
    },
    {
      text: { da: 'Tegn to hjul og en stribe langs siden.', en: 'Draw two wheels and a stripe along the side.' },
      strokes: [{ d: BUS.wheels }, { d: BUS.hubs }, { d: BUS.stripe }],
    },
    {
      text: { da: 'Farvelæg bussen blå og ballonen i stribede farver.', en: 'Colour the bus blue and the balloon in striped colours.' },
      strokes: [
        { d: BUS.body, kind: 'shade', tone: 0.4 },
        { d: `${BUS.windows} M290 228 H312 V266 H290 Z`, kind: 'shade', fill: 'paper' },
        { d: BUS.balloon, kind: 'shade', tone: 0.2 },
        { d: 'M200 20 Q160 92 200 164 Q240 92 200 20 Z', kind: 'shade', tone: 0.35 },
        { d: BUS.wheels, kind: 'shade', tone: 0.8 },
      ],
    },
  ],
  praise: [{ da: 'Alle om bord på festbussen – nu letter vi!', en: 'All aboard the party bus – here we go!' }],
  nextTip: { da: 'Tegn dine venner, der kigger ud af vinduerne.', en: 'Draw your friends looking out of the windows.' },
}
