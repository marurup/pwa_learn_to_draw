import { circle, line } from '../shapes'
import type { Lesson } from '../types'

export const faceProfile: Lesson = {
  id: 'face-profile',
  title: { da: 'Ansigt i profil', en: 'Face in profile' },
  category: 'mennesker',
  sub: 'ansigter',
  motif: 'face',
  level: 3,
  style: 'detaljer',
  minutes: 20,
  intro: {
    da: 'Et ansigt set fra siden: Panden, næsen, læberne og hagen danner en bølget linje. Øret sidder midt på hovedet.',
    en: 'A face seen from the side: the forehead, nose, lips and chin make a wavy line. The ear sits in the middle of the head.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Tegn en let cirkel til baghovedet og kraniet.', en: 'Draw a light circle for the back of the head and the skull.' },
      strokes: [{ d: circle(180, 170, 92), kind: 'guide' }],
    },
    {
      text: {
        da: 'Tegn en lodret linje for ansigtets forside og tre vandrette: øjenbryn, næsebund og hage.',
        en: 'Draw a vertical line for the front of the face and three horizontal ones: eyebrow, bottom of the nose and chin.',
      },
      tip: { da: 'Afstandene mellem de tre linjer er cirka lige store.', en: 'The distances between the three lines are about the same.' },
      strokes: [
        { d: line(276, 100, 276, 336), kind: 'guide' },
        { d: line(160, 176, 300, 176), kind: 'guide' },
        { d: line(160, 250, 320, 250), kind: 'guide' },
        { d: line(200, 320, 310, 320), kind: 'guide' },
      ],
    },
    {
      text: {
        da: 'Tegn profilen ned langs linjen: panden, et lille indhak ved øjet, næsen der stikker ud, læberne og hagen.',
        en: 'Draw the profile down along the line: the forehead, a small dip at the eye, the nose sticking out, the lips and the chin.',
      },
      strokes: [
        { d: 'M226 86 Q268 104 276 168 Q278 182 270 192 Q290 218 314 240 Q306 252 286 252 Q290 260 292 268 Q284 272 282 278 Q292 284 288 290 Q280 296 282 304 Q292 316 286 324 Q266 334 238 328' },
      ],
    },
    {
      text: { da: 'Tegn kæben skråt tilbage mod øret, nakken og baghovedet.', en: 'Draw the jaw slanting back towards the ear, the neck and the back of the head.' },
      strokes: [
        { d: 'M238 328 Q200 318 182 276' },
        { d: 'M226 86 Q160 70 114 110 Q86 150 96 210 Q104 250 134 272' },
        { d: 'M134 272 Q142 320 130 382 M246 330 Q244 360 256 392' },
      ],
    },
    {
      text: {
        da: 'Tegn øjet som en lille trekant set fra siden, øjenbrynet over det, næseboret og mundvigen.',
        en: 'Draw the eye as a small triangle seen from the side, the eyebrow above it, the nostril and the corner of the mouth.',
      },
      strokes: [
        { d: 'M246 198 L264 190 Q268 198 262 206 Z' },
        { d: circle(258, 198, 3.5), kind: 'shade', tone: 0.9 },
        { d: 'M244 192 Q256 184 266 188', weight: 0.6 },
        { d: 'M232 176 Q252 166 272 172' },
        { d: 'M298 244 Q302 250 292 252' },
        { d: 'M282 278 L272 281' },
      ],
    },
    {
      text: {
        da: 'Tegn øret bag kæben, mellem øjenbrynslinjen og næselinjen.',
        en: 'Draw the ear behind the jaw, between the eyebrow line and the nose line.',
      },
      tip: { da: 'Mange tegner øret for langt fremme – det sidder midt på hovedet.', en: 'Many people draw the ear too far forward – it sits in the middle of the head.' },
      strokes: [{ d: 'M178 186 Q154 180 152 214 Q152 248 178 254 Q188 246 184 230 Q192 206 178 186 Z' }, { d: 'M172 200 Q162 214 170 232', weight: 0.6 }],
    },
    {
      text: {
        da: 'Visk hjælpelinjerne ud, og tegn håret: fra panden, hen over hovedet og ned i nakken – i lokker.',
        en: 'Erase the guide lines and draw the hair: from the forehead, over the head and down the neck – in locks.',
      },
      erase: 'guides',
      strokes: [
        { d: 'M230 88 Q150 44 100 108 Q76 162 104 250 Q118 270 140 276' },
        { d: 'M230 90 Q206 120 214 156 Q196 148 188 172' },
        { d: 'M200 80 Q160 92 140 140 M170 76 Q130 96 116 160 M140 90 Q108 128 110 200', weight: 0.6 },
      ],
    },
    {
      text: { da: 'Skyg let under kæben på halsen og i hårets mørkeste dele.', en: 'Shade lightly under the jaw on the neck and in the darkest parts of the hair.' },
      strokes: [
        { d: 'M150 290 Q196 322 240 330 Q244 352 246 360 Q196 344 148 320 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M110 200 Q104 236 132 262 Q118 230 124 196 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
      ],
    },
  ],
  praise: [{ da: 'Profilen er skarp – man kan næsten se, hvem det er!', en: 'A sharp profile – you can almost tell who it is!' }],
  nextTip: { da: 'Tegn en ven fra siden. Hvordan er deres næse og hage formet?', en: 'Draw a friend from the side. What shape are their nose and chin?' },
}
