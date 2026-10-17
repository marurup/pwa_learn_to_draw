import { circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const flames = 'M96 82 L70 87 L96 92 M96 308 L70 313 L96 318 M60 196 L34 200 L60 204'
const shots = 'M240 87 H270 M290 87 H320 M240 313 H270 M290 313 H320'
const planet = `${circle(50, 360, 34)} M18 348 Q50 360 82 348 M18 372 Q50 384 82 372`
const asteroid = 'M330 40 l14 -8 l14 6 l2 14 l-12 10 l-14 -2 l-6 -12 Z M340 46 a3 3 0 1 0 0.1 0'
const stars = [circle(30, 40, 2), circle(200, 30, 2.5), circle(260, 140, 1.6), circle(40, 260, 2), circle(200, 370, 2), circle(140, 350, 1.6), circle(380, 360, 2), circle(250, 60, 1.6)].join(' ')
const glass = 'M268 196 Q280 192 292 196'

export const starFighterDetail: Lesson = {
  id: 'star-fighter-detail',
  title: { da: 'Stjernejager i kamp', en: 'Star fighter in action' },
  category: 'fantasi',
  sub: 'rumeventyr',
  level: 3,
  style: 'detaljer',
  base: 'star-fighter',
  minutes: 20,
  intro: {
    da: 'Byg videre på din stjernejager: flammer fra motorerne, laserskud, en stribet planet, en asteroide og stjerner.',
    en: 'Build on your star fighter: flames from the engines, laser shots, a striped planet, an asteroid and stars.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn spidse flammer bag motorerne og bag skibet.', en: 'Draw pointed flames behind the engines and behind the ship.' },
      strokes: [{ d: flames }],
    },
    {
      text: { da: 'Tegn laserskud som korte streger foran kanonerne.', en: 'Draw laser shots as short lines in front of the cannons.' },
      strokes: [{ d: shots, weight: 1.6 }],
    },
    {
      text: { da: 'Tegn en stor planet med striber og en knoldet asteroide.', en: 'Draw a big planet with stripes and a lumpy asteroid.' },
      strokes: [{ d: planet }, { d: asteroid }],
    },
    {
      text: { da: 'Tegn stjerner og en glans på cockpittet.', en: 'Draw stars and a shine on the cockpit.' },
      strokes: [{ d: stars, kind: 'shade', tone: 0.6 }, { d: glass }],
    },
    {
      text: {
        da: 'Farvelæg flammerne og laserskuddene i klare farver, og skyg planeten i den ene side.',
        en: 'Colour the flames and laser shots in bright colours, and shade one side of the planet.',
      },
      tip: { da: 'Et blødt skær omkring laserskuddene får dem til at lyse.', en: 'A soft glow around the laser shots makes them shine.' },
      strokes: [
        { d: `${flames} Z`, kind: 'shade', tone: 0.3 },
        { d: `${ellipse(280, 87, 44, 6)} ${ellipse(280, 313, 44, 6)}`, kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: circle(50, 360, 34), kind: 'shade', tone: 0.2 },
        { d: 'M84 360 A34 34 0 0 1 50 394 Q76 376 66 330 A34 34 0 0 1 84 360 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M330 40 l14 -8 l14 6 l2 14 l-12 10 l-14 -2 l-6 -12 Z', kind: 'shade', tone: 0.45 },
      ],
    },
  ],
  praise: [{ da: 'Pjiu pjiu! Stjernejageren er på mission i rummet!', en: 'Pew pew! The star fighter is on a mission in space!' }],
  nextTip: { da: 'Tegn rumstationen, skibet flyver hjem til.', en: 'Draw the space station the ship is flying home to.' },
}
