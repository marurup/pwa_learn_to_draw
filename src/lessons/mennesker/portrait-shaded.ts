import { circle, ellipseArc, mirrorX } from '../shapes'
import type { Lesson } from '../types'

const creaseL = 'M134 198 Q158 182 184 197'
const lashesL = 'M140 202 l-6 -5 M146 199 l-3 -7 M154 197 l-1 -7 M162 197 l1 -7 M170 199 l3 -6 M176 202 l6 -4'
const browStrokesL = Array.from({ length: 12 }, (_, i) => {
  const t = i / 11
  const x = 132 + t * 54
  const y = 186 - 12 * Math.sin(Math.PI * Math.min(1, t * 1.2)) + t * 4
  return `M${x.toFixed(1)} ${(y + 4).toFixed(1)} l${(5 + t * 3).toFixed(1)} -8`
}).join(' ')

export const portraitShaded: Lesson = {
  id: 'portrait-shaded',
  title: { da: 'Portræt med skygger', en: 'Portrait with shading' },
  category: 'mennesker',
  sub: 'ansigter',
  level: 4,
  style: 'naturtro',
  base: 'face-proportions',
  minutes: 35,
  intro: {
    da: 'Byg videre på dit ansigt med rigtige proportioner: øjenvipper og glans, øjenbryn af hår, bløde skygger i ansigtet og hår med lokker.',
    en: 'Build on your face with real proportions: eyelashes and shine, eyebrows made of hairs, soft shadows on the face and hair with locks.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Lyset kommer fra venstre. Start med øjnene: en fold over hvert øje, små vipper og en hvid glans i iris.',
        en: 'The light comes from the left. Start with the eyes: a fold above each eye, small lashes and a white shine in the iris.',
      },
      strokes: [
        { d: creaseL, weight: 0.7 },
        { d: mirrorX(creaseL, 200), weight: 0.7 },
        { d: lashesL, weight: 0.6 },
        { d: mirrorX(lashesL, 200), weight: 0.6 },
        { d: `${circle(154, 200, 2.6)} ${circle(238, 200, 2.6)}`, kind: 'shade', fill: 'paper' },
      ],
    },
    {
      text: {
        da: 'Visk de enkle øjenbryn ud, og tegn nye af små streger, der følger hårenes retning.',
        en: 'Erase the simple eyebrows, and draw new ones from small strokes that follow the direction of the hairs.',
      },
      erase: ['browL', 'browR'],
      strokes: [
        { d: browStrokesL, weight: 0.55 },
        { d: mirrorX(browStrokesL, 200), weight: 0.55 },
        { d: 'M132 188 Q158 170 188 182 Q158 178 132 188 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: mirrorX('M132 188 Q158 170 188 182 Q158 178 132 188 Z', 200), kind: 'shade', fill: 'soft', tone: 0.35 },
      ],
    },
    {
      text: {
        da: 'Skyg næsen: langs højre side af næseryggen, omkring næsefløjene og mørkt i næseborene.',
        en: 'Shade the nose: along the right side of the bridge, around the wings and dark in the nostrils.',
      },
      strokes: [
        { d: 'M206 214 Q212 246 220 266 Q212 270 208 262 Q204 240 202 214 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M186 182 Q192 196 190 214 Q184 200 178 192 Z M214 182 Q208 196 210 214 Q218 200 224 192 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M186 276 Q190 272 196 277 Q190 280 186 276 Z M204 277 Q210 272 214 276 Q210 280 204 277 Z', kind: 'shade', tone: 0.85 },
      ],
    },
    {
      text: {
        da: 'Skyg læberne: overlæben mørkere end underlæben. Lad en lys plet stå på underlæben, og skyg lidt under den.',
        en: 'Shade the lips: the upper lip darker than the lower lip. Keep a light spot on the lower lip, and shade a little under it.',
      },
      strokes: [
        { d: 'M166 297 Q184 285 194 289 Q200 291 206 289 Q216 285 234 297 Q216 300 200 300 Q184 300 166 297 Z', kind: 'shade', fill: 'soft', tone: 0.45 },
        { d: 'M172 303 Q200 320 228 303 Q200 312 172 303 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
        { d: 'M180 324 Q200 332 220 324 Q200 340 180 324 Z', kind: 'shade', fill: 'soft', tone: 0.25 },
      ],
    },
    {
      text: {
        da: 'Skyg ansigtets højre side, der vender væk fra lyset, under kindbenet, under håret på panden og på halsen under hagen.',
        en: 'Shade the right side of the face, facing away from the light, under the cheekbone, under the hair on the forehead and on the neck under the chin.',
      },
      tip: {
        da: 'Gnid skyggerne blødt ud – der må ikke være skarpe kanter i et ansigt.',
        en: 'Smudge the shadows softly – there should be no hard edges on a face.',
      },
      strokes: [
        { d: 'M296 204 Q300 250 282 294 Q264 324 236 338 Q262 304 278 262 Q290 230 292 204 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M106 172 Q118 136 160 142 Q200 128 240 142 Q282 136 294 172 Q280 152 240 154 Q200 144 160 154 Q120 152 106 172 Z', kind: 'shade', fill: 'soft', tone: 0.16 },
        { d: 'M152 334 Q200 370 248 334 L250 368 Q200 390 150 368 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M300 214 Q316 220 314 246 Q312 262 302 266 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
    {
      text: {
        da: 'Tegn hårlokker fra skilningen og ud, og skyg håret mørkest i højre side.',
        en: 'Draw locks of hair from the parting outwards, and shade the hair darkest on the right side.',
      },
      strokes: [
        {
          d: 'M196 62 Q150 70 122 118 Q106 150 104 190 M204 62 Q250 70 278 118 Q294 150 296 190 M190 66 Q144 86 130 134 M210 66 Q256 86 270 134 M182 72 Q156 96 154 134 M218 72 Q244 96 246 134',
          weight: 0.6,
          opacity: 0.75,
        },
        { d: 'M262 80 Q318 112 304 210 Q296 160 272 128 Q262 102 262 80 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M140 80 Q100 104 98 170 Q110 130 140 104 Z', kind: 'shade', fill: 'soft', tone: 0.2 },
      ],
    },
    {
      text: {
        da: 'Til sidst: Tryk hårdere på stregerne i skyggesiden og i øjnene. Så er dit portræt færdigt!',
        en: 'Finally: press harder on the lines on the shadow side and in the eyes. Then your portrait is finished!',
      },
      strokes: [
        { d: ellipseArc(200, 205, 105, 140, -8, 90), weight: 1.5 },
        { d: 'M221 205 Q242 190 263 205', weight: 1.5 },
      ],
    },
  ],
  praise: [{ da: 'Et rigtigt portræt med lys og skygge – imponerende!', en: 'A real portrait with light and shade – impressive!' }],
  nextTip: {
    da: 'Tegn et portræt af en i familien. Sæt en lampe ved siden af dem, så skyggerne bliver tydelige.',
    en: 'Draw a portrait of someone in your family. Put a lamp beside them so the shadows are clear.',
  },
}
