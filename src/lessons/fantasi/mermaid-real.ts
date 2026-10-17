import { arc, ellipse, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const torsoL = 'M192 110 Q170 112 164 126 Q166 160 178 190 Q170 210 170 228'
const armL = 'M164 126 Q152 168 158 212 Q160 226 168 222 Q170 216 166 212 Q168 180 174 146'
const tailLeft = 'M170 228 Q160 270 176 310 Q196 352 260 362'
const tailRight = 'M230 228 Q236 270 226 300 Q222 326 262 340'
const fin = 'M262 340 Q296 330 330 306 Q322 330 318 352 Q330 368 350 386 Q300 382 260 362'
const hairFront = 'M178 52 Q160 78 162 118 Q160 160 172 186 Q178 160 176 130 Q178 96 186 64'
const hairBack = 'M222 52 Q246 84 242 130 Q244 168 232 196 Q228 160 226 128 Q224 96 214 64'
const scales = [
  [184, 246],
  [198, 248],
  [212, 248],
  [190, 260],
  [204, 262],
  [186, 276],
  [200, 278],
  [194, 294],
  [208, 310],
  [222, 326],
]
  .map(([x, y]) => arc(x, y, 6, 20, 160))
  .join(' ')

export const mermaidReal: Lesson = {
  id: 'mermaid-real',
  title: { da: 'Naturtro havfrue', en: 'Realistic mermaid' },
  category: 'fantasi',
  sub: 'havfruer',
  level: 4,
  style: 'naturtro',
  motif: 'mermaid',
  minutes: 40,
  intro: {
    da: 'En havfrue med rigtige proportioner: en S-formet bevægelseslinje, lange hårlokker, antydede skæl og bløde skygger med lyset fra venstre.',
    en: 'A mermaid with real proportions: an S-shaped line of action, long locks of hair, suggested scales and soft shading with the light from the left.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Tegn let en S-formet bevægelseslinje fra hovedet til halefinnen, og et oval til hovedet øverst på den.',
        en: 'Lightly draw an S-shaped line of action from the head to the tail fin, and an oval for the head at the top of it.',
      },
      tip: {
        da: 'Bevægelseslinjen får figuren til at se ud, som om den svømmer. Hovedet er cirka en syvendedel af hele figuren.',
        en: 'The line of action makes the figure look like it is swimming. The head is about one seventh of the whole figure.',
      },
      strokes: [
        { d: 'M200 44 Q204 140 198 230 Q194 330 290 360', kind: 'guide' },
        { d: `${ellipse(200, 72, 22, 28)} M164 126 H236 M170 228 H230`, kind: 'guide' },
      ],
      labels: [
        { x: 254, y: 130, text: { da: 'skuldre', en: 'shoulders' }, anchor: 'start' },
        { x: 240, y: 232, text: { da: 'hofter', en: 'hips' }, anchor: 'start' },
      ],
    },
    {
      text: {
        da: 'Tegn hovedet, halsen og overkroppen: skuldrene er tre hoveder brede, og taljen er smallere end hofterne.',
        en: 'Draw the head, the neck and the upper body: the shoulders are three heads wide, and the waist is narrower than the hips.',
      },
      strokes: [{ d: ellipse(200, 72, 22, 28) }, { d: 'M192 98 V110 M208 98 V110' }, { d: `${torsoL} ${mirrorX(torsoL, 200)}` }],
    },
    {
      text: { da: 'Tegn armene. Albuerne er i højde med taljen, og hænderne hviler ved hofterne.', en: 'Draw the arms. The elbows are level with the waist, and the hands rest by the hips.' },
      strokes: [{ d: armL }, { d: mirrorX(armL, 200) }],
    },
    {
      text: {
        da: 'Tegn halen langs bevægelseslinjen. Den er bredest ved hofterne og bliver smal mod finnen. Tegn finnen som et tyndt, buet slør.',
        en: 'Draw the tail along the line of action. It is widest at the hips and gets narrow towards the fin. Draw the fin like a thin, curved veil.',
      },
      strokes: [{ d: `${tailLeft} ${tailRight}` }, { d: fin }, { d: 'M268 346 Q300 336 322 316 M268 354 Q306 362 336 378', weight: 0.5 }],
    },
    {
      text: {
        da: 'Visk hjælpelinjerne ud. Tegn ansigtet: øjnene på midten af hovedet, næsen halvvejs til hagen og munden lige under.',
        en: 'Erase the guidelines. Draw the face: the eyes halfway down the head, the nose halfway to the chin and the mouth just below.',
      },
      erase: 'guides',
      strokes: [
        { d: 'M186 72 Q191 68 196 72 Q191 75 186 72 Z M204 72 Q209 68 214 72 Q209 75 204 72 Z' },
        { d: 'M200 76 Q198 82 202 84 M194 91 Q200 94 206 91' },
        { d: 'M184 64 Q191 60 197 63 M203 63 Q209 60 216 64', weight: 0.8 },
        { d: 'M180 150 Q186 140 196 148 Q190 156 180 150 Z M204 148 Q214 140 220 150 Q210 156 204 148 Z' },
      ],
    },
    {
      text: {
        da: 'Tegn håret som store lokker, der falder ned over skuldrene. Tegn lokkerne først – ikke hår for hår.',
        en: 'Draw the hair as big locks falling over the shoulders. Draw the locks first – not hair by hair.',
      },
      strokes: [
        { d: 'M178 52 Q200 34 222 52' },
        { d: `${hairFront} ${hairBack}` },
        { d: 'M170 100 Q166 140 172 176 M234 100 Q238 140 232 180 M186 56 Q196 50 210 56', weight: 0.6, opacity: 0.7 },
      ],
    },
    {
      text: {
        da: 'Antyd skællene: tegn dem kun nogle steder, mest i skyggen. Øjet udfylder selv resten.',
        en: 'Suggest the scales: draw them only in some places, mostly in the shadow. The eye fills in the rest by itself.',
      },
      strokes: [{ d: scales, weight: 0.5, opacity: 0.8 }],
    },
    {
      text: {
        da: 'Skyg med lyset fra venstre: højre side af kroppen, armen og halen, og under håret. Lad en lys stribe stå ned ad halen.',
        en: 'Shade with the light from the left: the right side of the body, the arm and the tail, and under the hair. Leave a light stripe down the tail.',
      },
      strokes: [
        { d: 'M222 120 Q232 160 222 190 Q228 210 230 228 Q238 270 228 300 Q222 326 262 340 L250 344 Q214 330 218 300 Q226 266 220 228 Q216 196 222 120 Z', kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: `${mirrorX(armL, 200)} Z`, kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M190 100 Q200 108 210 100 V112 Q200 118 190 112 Z M180 156 Q190 162 198 156 Q190 166 180 156 Z M202 156 Q210 162 220 156 Q210 166 202 156 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: `${hairBack} Z`, kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: `${hairFront} Z`, kind: 'shade', fill: 'soft', tone: 0.15 },
        { d: 'M186 236 Q180 280 198 316 Q222 346 252 354 Q214 330 196 300 Q186 270 186 236 Z', kind: 'shade', fill: 'paper' },
      ],
    },
  ],
  praise: [{ da: 'En naturtro havfrue med bevægelse, lys og skygge – flot arbejde!', en: 'A realistic mermaid with movement, light and shade – great work!' }],
  nextTip: { da: 'Tegn havfruen under vandet, med lysstråler, der falder ned gennem vandet.', en: 'Draw the mermaid underwater, with rays of light falling down through the water.' },
}
