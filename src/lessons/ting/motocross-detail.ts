import { circle, ellipse, radial, ring } from '../shapes'
import type { Lesson } from '../types'
import { CROSSER } from './motocross'

const wheels = [CROSSER.rear, CROSSER.front]
// Knobbly tyres: little blocks sticking out all the way round.
const knobs = wheels.map(([x, y]) => radial(x, y, CROSSER.tyre, CROSSER.tyre + 6, 28)).join(' ')
const helmet = `${circle(176, 132, 20)} M160 130 H194 Q196 142 186 146 H166 M194 130 L204 124`
const rider = 'M174 152 Q180 176 170 194 M190 152 Q214 156 240 160 M184 160 Q212 168 238 166 M170 194 L200 220 L188 246 M180 190 L208 214 L198 246'
const mud = 'M48 300 q-8 -6 -2 -12 q8 2 6 10 Z M36 276 q-6 -4 -1 -9 q6 2 4 8 Z M60 268 q-4 -6 2 -8 q4 4 1 8 Z'

export const motocrossDetail: Lesson = {
  id: 'motocross-detail',
  title: { da: 'Crosser med kører i mudder', en: 'Dirt bike with a rider in the mud' },
  category: 'ting',
  sub: 'koeretoejer',
  level: 3,
  style: 'detaljer',
  base: 'motocross',
  minutes: 20,
  intro: {
    da: 'Byg videre på din crosser: grove knopper på dækkene, eger, et startnummer, en kører med hjelm – og masser af mudder.',
    en: 'Build on your dirt bike: chunky knobs on the tyres, spokes, a race number, a rider with a helmet – and lots of mud.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn knopper hele vejen rundt om dækkene – de giver godt greb i mudderet.', en: 'Draw knobs all the way round the tyres – they give a good grip in the mud.' },
      strokes: [{ d: knobs, weight: 2 }],
    },
    {
      text: { da: 'Tegn fælge og eger i hjulene.', en: 'Draw rims and spokes in the wheels.' },
      strokes: [{ d: wheels.map(([x, y]) => `${circle(x, y, 40)} ${radial(x, y, 7, 40, 14)}`).join(' '), weight: 0.5 }],
    },
    {
      text: { da: 'Skriv et startnummer på nummerpladerne.', en: 'Write a race number on the number plates.' },
      strokes: [{ d: 'M142 216 H158 L148 232 M162 216 V232 M256 176 H266 L259 190' }],
    },
    {
      text: {
        da: 'Tegn køreren: en hjelm med visir, en krop, der læner sig frem, arme til styret og ben ned til fodhvilerne.',
        en: 'Draw the rider: a helmet with a visor, a body leaning forward, arms to the handlebars and legs down to the footrests.',
      },
      tip: { da: 'Crosserkørere står op og læner sig frem, så de kan holde balancen.', en: 'Dirt bike riders stand up and lean forward so they can keep their balance.' },
      strokes: [{ d: helmet }, { d: rider }, { d: `${ellipse(242, 162, 5, 4)} M186 246 H200` }],
    },
    {
      text: { da: 'Tegn mudder, der sprøjter bag baghjulet, og spor i jorden.', en: 'Draw mud spraying behind the back wheel, and tracks in the dirt.' },
      strokes: [{ d: mud }, { d: 'M10 370 q10 -4 20 0 M50 376 q10 -4 20 0 M320 372 q10 -4 20 0 M360 378 q10 -4 20 0', weight: 0.8 }],
    },
    {
      text: { da: 'Skyg dækkene mørke og mudderet, og farvelæg køreren og crosseren i samme farver.', en: 'Shade the tyres and the mud dark, and colour the rider and the bike in matching colours.' },
      strokes: [
        { d: wheels.map(([x, y]) => ring(x, y, CROSSER.tyre, 40)).join(' '), kind: 'shade', tone: 0.6 },
        { d: mud, kind: 'shade', tone: 0.6 },
        { d: circle(176, 132, 20), kind: 'shade', tone: 0.3 },
        { d: 'M160 130 H194 Q196 142 186 146 H166 Z', kind: 'shade', tone: 0.75 },
      ],
    },
  ],
  praise: [{ da: 'Fuld gas! Køreren er klar til at vinde løbet.', en: 'Full throttle! The rider is ready to win the race.' }],
  nextTip: { da: 'Tegn et helt crossløb med flere kørere og et målflag.', en: 'Draw a whole race with several riders and a chequered flag.' },
}
