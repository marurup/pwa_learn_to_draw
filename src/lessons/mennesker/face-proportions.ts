import { circle, ellipse, ellipseArc, line, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const eyeL = 'M137 205 Q158 190 179 205 Q158 216 137 205'
const browL = 'M132 186 Q158 172 186 182'
const earL = 'M95 205 Q74 198 76 232 Q79 268 106 272'
const ticks = [95, 137, 179, 221, 263, 305].map((x) => line(x, 197, x, 213)).join(' ')

export const faceProportions: Lesson = {
  id: 'face-proportions',
  title: { da: 'Ansigt med rigtige proportioner', en: 'A face with real proportions' },
  category: 'mennesker',
  sub: 'ansigter',
  motif: 'face',
  style: 'naturtro',
  level: 3,
  minutes: 20,
  intro: {
    da: 'Lær de hemmelige mål, som kunstnere bruger: hvor øjne, næse, mund og ører sidder i et rigtigt ansigt.',
    en: 'Learn the secret measurements artists use: where the eyes, nose, mouth and ears sit on a real face.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn en oval til hovedet – lidt som et æg, der står på højkant.', en: 'Draw an oval for the head – a bit like an egg standing on its end.' },
      tip: { da: 'Tegn meget let. Hjælpelinjer og første former skal kunne viskes ud.', en: 'Draw very lightly. Guide lines and first shapes should be easy to erase.' },
      strokes: [{ d: ellipse(200, 205, 105, 140), id: 'head' }],
    },
    {
      text: { da: 'Tegn en lodret midterlinje og en vandret linje lige midt på hovedet. Det er øjenlinjen.', en: 'Draw a vertical centre line and a horizontal line right across the middle of the head. That is the eye line.' },
      tip: { da: 'Øjnene sidder midt på hovedet – ikke højt oppe, som mange tror!', en: 'The eyes sit halfway down the head – not high up, as many people think!' },
      strokes: [
        { d: line(200, 52, 200, 360), kind: 'guide' },
        { d: line(80, 205, 320, 205), kind: 'guide' },
      ],
      labels: [{ x: 330, y: 210, text: { da: 'øjne', en: 'eyes' }, anchor: 'start' }],
    },
    {
      text: { da: 'Del afstanden fra øjnene til hagen i to: Der går næselinjen. Mundlinjen ligger en tredjedel ned fra næsen.', en: 'Halve the distance from the eyes to the chin: that is the nose line. The mouth line is a third of the way down from the nose.' },
      tip: { da: 'Hårlinjen ligger midt mellem øjenlinjen og toppen af hovedet.', en: 'The hairline is halfway between the eye line and the top of the head.' },
      strokes: [
        { d: line(132, 275, 268, 275), kind: 'guide' },
        { d: line(146, 298, 254, 298), kind: 'guide' },
        { d: line(118, 135, 282, 135), kind: 'guide' },
      ],
      labels: [
        { x: 330, y: 280, text: { da: 'næse', en: 'nose' }, anchor: 'start' },
        { x: 330, y: 303, text: { da: 'mund', en: 'mouth' }, anchor: 'start' },
        { x: 330, y: 140, text: { da: 'hår', en: 'hair' }, anchor: 'start' },
      ],
    },
    {
      text: { da: 'Hovedet er fem øjne bredt. Tegn to mandelformede øjne med præcis ét øjes afstand imellem.', en: 'The head is five eyes wide. Draw two almond-shaped eyes with exactly one eye-width between them.' },
      strokes: [
        { d: ticks, kind: 'guide' },
        { d: eyeL },
        { d: mirrorX(eyeL, 200) },
        { d: circle(158, 204, 9), kind: 'shade', tone: 0.6 },
        { d: circle(242, 204, 9), kind: 'shade', tone: 0.6 },
        { d: circle(158, 204, 4), kind: 'shade', tone: 1 },
        { d: circle(242, 204, 4), kind: 'shade', tone: 1 },
        { d: browL, id: 'browL' },
        { d: mirrorX(browL, 200), id: 'browR' },
      ],
    },
    {
      text: { da: 'Tegn næsen, så den slutter på næselinjen. Næsefløjene er cirka lige så brede som afstanden mellem øjnene.', en: 'Draw the nose so it ends on the nose line. The nostrils are about as wide as the gap between the eyes.' },
      strokes: [
        { d: 'M180 266 Q174 277 186 280 Q194 284 200 279 Q206 284 214 280 Q226 277 220 266' },
        { d: 'M192 222 Q188 246 186 262' },
      ],
    },
    {
      text: { da: 'Tegn munden på mundlinjen. Mundvigene sidder lige under midten af øjnene.', en: 'Draw the mouth on the mouth line. The corners sit right below the middle of the eyes.' },
      strokes: [
        { d: 'M158 298 Q179 303 200 300 Q221 303 242 298' },
        { d: 'M166 297 Q184 285 194 289 Q200 291 206 289 Q216 285 234 297' },
        { d: 'M170 302 Q200 324 230 302' },
      ],
    },
    {
      text: { da: 'Tegn ørerne mellem øjenlinjen og næselinjen. Tegn så halsen.', en: 'Draw the ears between the eye line and the nose line. Then draw the neck.' },
      strokes: [{ d: earL }, { d: mirrorX(earL, 200) }, { d: 'M150 328 L147 388' }, { d: 'M250 328 L253 388' }],
    },
    {
      text: { da: 'Tegn håret fra hårlinjen og op over hovedet. Visk så hjælpelinjerne ud – og den del af hovedet, som håret dækker.', en: 'Draw the hair from the hairline up over the head. Then erase the guide lines – and the part of the head the hair covers.' },
      erase: ['guides', 'head'],
      strokes: [
        { d: ellipseArc(200, 205, 105, 140, -13.6, 193.6) },
        { d: 'M95 212 Q82 112 140 78 Q200 44 262 78 Q320 112 305 212' },
        { d: 'M101 172 Q116 128 160 136 Q200 120 240 136 Q284 128 299 172' },
        { d: 'M150 92 Q170 104 182 128 M226 84 Q240 102 246 130' },
      ],
    },
    {
      text: { da: 'Skyg let under hagen og under næsen. Så får ansigtet dybde.', en: 'Shade lightly under the chin and under the nose. That gives the face depth.' },
      tip: { da: 'Tryk ikke hårdt. Skygger skal bygges op lidt ad gangen.', en: 'Do not press hard. Shadows are built up a little at a time.' },
      strokes: [
        { d: 'M150 334 Q200 368 250 334 L251 356 Q200 384 149 356 Z', kind: 'shade', tone: 0.18 },
        { d: 'M186 281 Q200 290 214 281 Q206 292 200 292 Q194 292 186 281 Z', kind: 'shade', tone: 0.2 },
      ],
    },
  ],
  praise: [
    { da: 'Proportionerne sidder lige i skabet – det ligner et rigtigt ansigt!', en: 'The proportions are spot on – it looks like a real face!' },
  ],
  nextTip: { da: 'Tegn en ven eller dig selv i et spejl med de samme hjælpelinjer.', en: 'Draw a friend, or yourself in a mirror, using the same guide lines.' },
}
