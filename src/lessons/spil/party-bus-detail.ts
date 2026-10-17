import { circle } from '../shapes'
import type { Lesson } from '../types'

const cloud = (x: number, y: number, s: number) =>
  `M${x} ${y} q${-14 * s} 0 ${-14 * s} ${-12 * s} q0 ${-14 * s} ${16 * s} ${-12 * s} q${6 * s} ${-14 * s} ${24 * s} ${-8 * s} q${16 * s} ${-6 * s} ${22 * s} ${10 * s} q${14 * s} ${2 * s} ${10 * s} ${22 * s} Z`
const clouds = `${cloud(40, 80, 1)} ${cloud(320, 196, 1.1)} ${cloud(30, 190, 0.8)}`
/** A little person hanging under an umbrella-shaped glider; (x, y) is the middle of the canopy. */
const glider = (x: number, y: number) =>
  `M${x - 30} ${y} Q${x} ${y - 30} ${x + 30} ${y} Q${x + 15} ${y - 8} ${x} ${y} Q${x - 15} ${y - 8} ${x - 30} ${y} Z ` +
  `M${x - 30} ${y} L${x} ${y + 34} L${x + 30} ${y} M${x} ${y} V${y + 34} ${circle(x, y + 40, 6)} M${x} ${y + 46} V${y + 62} M${x} ${y + 50} l-8 -6 M${x} ${y + 50} l8 -6 M${x} ${y + 62} l-6 10 M${x} ${y + 62} l6 10`
const gliders = `${glider(46, 260)} ${glider(356, 290)}`
const island = 'M100 400 Q200 350 300 400 M236 382 Q232 366 242 352 M242 352 q-14 -2 -20 6 M242 352 q12 -6 22 2 M242 352 q-4 -10 -14 -12 M242 352 q8 -10 18 -8'
const faces = [116, 164, 212, 260].map((x) => `${circle(x, 246, 7)} M${x - 8} 258 Q${x} 250 ${x + 8} 258`).join(' ')

export const partyBusDetail: Lesson = {
  id: 'party-bus-detail',
  title: { da: 'Festbussen over øen', en: 'The party bus over the island' },
  category: 'spil',
  sub: 'spilfigurer',
  level: 3,
  style: 'detaljer',
  base: 'party-bus',
  minutes: 20,
  intro: {
    da: 'Byg videre på din festbus: venner i vinduerne, skyer, to der svæver ned med glideskærme og en lille ø med en palme forneden.',
    en: 'Build on your party bus: friends in the windows, clouds, two people gliding down and a little island with a palm tree below.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn glade venner, der kigger ud af vinduerne.', en: 'Draw happy friends looking out of the windows.' },
      strokes: [{ d: faces }],
    },
    {
      text: { da: 'Tegn bløde skyer rundt om bussen.', en: 'Draw soft clouds around the bus.' },
      strokes: [{ d: clouds }],
    },
    {
      text: { da: 'Tegn to små figurer, der svæver ned under hver sin glideskærm.', en: 'Draw two little figures gliding down, each under their own glider.' },
      strokes: [{ d: gliders }],
    },
    {
      text: { da: 'Tegn en lille ø med en palme langt nede.', en: 'Draw a little island with a palm tree far below.' },
      strokes: [{ d: island }],
    },
    {
      text: { da: 'Farvelæg glideskærmene i klare farver og øen grøn. Skyg skyerne let forneden.', en: 'Colour the gliders in bright colours and the island green. Shade the clouds lightly underneath.' },
      tip: { da: 'En smule skygge under skyerne gør dem bløde og runde.', en: 'A little shading under the clouds makes them soft and round.' },
      strokes: [
        { d: clouds, kind: 'shade', fill: 'fade-up', tone: 0.2 },
        { d: `M16 260 Q46 230 76 260 Z M326 290 Q356 260 386 290 Z`, kind: 'shade', tone: 0.45 },
        { d: 'M100 400 Q200 350 300 400 Z', kind: 'shade', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Hop ud og svæv – sikke en tur!', en: 'Jump out and glide – what a ride!' }],
  nextTip: { da: 'Tegn øen tæt på, med strand, palmer og en skattekiste.', en: 'Draw the island up close, with a beach, palm trees and a treasure chest.' },
}
