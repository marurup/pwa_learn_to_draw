import type { Lesson } from '../types'

export const roseReal: Lesson = {
  id: 'rose-real',
  title: { da: 'Naturtro rose med skygger', en: 'Realistic rose with shading' },
  category: 'natur',
  sub: 'blomster',
  level: 4,
  style: 'naturtro',
  base: 'rose',
  minutes: 25,
  intro: {
    da: 'Byg videre på din rose: skyg dybt inde mellem kronbladene, lad kanterne være lyse, og giv bladet takker og årer.',
    en: 'Build on your rose: shade deep between the petals, keep the edges light, and give the leaf teeth and veins.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: {
        da: 'Lyset kommer fra venstre. Skyg mørkest helt inde i knoppen og i koppen bag den – der kommer næsten intet lys ind.',
        en: 'The light comes from the left. Shade darkest deep inside the bud and in the cup behind it – almost no light gets in there.',
      },
      tip: {
        da: 'Byg skyggen op i lag. Start let, og gå mørkere, hvor der er dybest.',
        en: 'Build up the shadow in layers. Start light and go darker where it is deepest.',
      },
      strokes: [
        { d: 'M190 100 Q196 90 208 96 Q212 110 200 113 Q190 111 190 100 Z', kind: 'shade', fill: 'soft', tone: 0.7 },
        { d: 'M216 104 Q234 114 228 136 Q220 148 204 150 Q222 134 216 104 Z', kind: 'shade', fill: 'soft', tone: 0.55 },
        { d: 'M168 108 Q164 132 180 144 Q172 126 176 110 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
      ],
    },
    {
      text: {
        da: 'Skyg der, hvor et kronblad gemmer sig bag et andet: inde på sidebladene tæt ved det forreste kronblad.',
        en: 'Shade where one petal hides behind another: on the side petals close to the front petal.',
      },
      strokes: [
        { d: 'M158 156 Q142 146 141 116 Q150 140 162 140 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: 'M242 154 Q262 144 261 106 Q250 136 238 138 Z', kind: 'shade', fill: 'soft', tone: 0.55 },
      ],
    },
    {
      text: {
        da: 'Skyg den nederste del af det forreste kronblad. Det bøjer væk fra lyset, så det bliver mørkere forneden.',
        en: 'Shade the lower part of the front petal. It curves away from the light, so it gets darker towards the bottom.',
      },
      strokes: [{ d: 'M164 162 Q172 188 200 196 Q232 188 240 160 Q232 178 200 186 Q174 180 164 162 Z', kind: 'shade', fill: 'soft', tone: 0.42 }],
    },
    {
      text: {
        da: 'Skyg de ydre kronblade: mørkest inde ved midten og lysere ude ved kanten. Højre side er mørkest.',
        en: 'Shade the outer petals: darkest in towards the middle and lighter out at the edge. The right side is darkest.',
      },
      strokes: [
        { d: 'M152 202 Q124 188 112 152 Q130 196 180 216 Z', kind: 'shade', fill: 'soft', tone: 0.32 },
        { d: 'M248 200 Q276 186 288 150 Q270 196 220 216 Z', kind: 'shade', fill: 'soft', tone: 0.6 },
      ],
    },
    {
      text: {
        da: 'Lad kanterne på kronbladene være lyse – visk dem forsigtigt op med viskelæderet. Så bøjer de sig mod lyset.',
        en: 'Keep the edges of the petals light – carefully lift them with your eraser. Then they curl towards the light.',
      },
      tip: {
        da: 'Skær et hjørne af viskelæderet, så du kan viske helt tynde striber.',
        en: 'Cut a corner off your eraser so you can erase very thin lines.',
      },
      strokes: [
        { d: 'M163 146 Q180 158 196 154 Q180 162 163 146 Z', kind: 'shade', fill: 'paper' },
        { d: 'M138 104 Q140 136 154 150 Q142 138 138 104 Z', kind: 'shade', fill: 'paper' },
        { d: 'M108 150 Q118 196 160 214 Q124 196 108 150 Z', kind: 'shade', fill: 'paper' },
      ],
    },
    {
      text: {
        da: 'Giv bladet fine årer, og skyg den ene halvdel. Skyg stilken på den side, der vender væk fra lyset.',
        en: 'Give the leaf fine veins, and shade one half. Shade the stem on the side facing away from the light.',
      },
      strokes: [
        { d: 'M222 352 l8 -12 M238 348 l8 -12 M254 342 l7 -10 M224 354 l10 4 M242 350 l10 4 M258 344 l8 4', weight: 0.5 },
        { d: 'M208 358 Q248 342 284 324 Q262 356 210 362 Z', kind: 'shade', fill: 'soft', tone: 0.4 },
        { d: 'M203 240 Q200 312 205 388 L207 388 Q202 312 205 240 Z', kind: 'shade', fill: 'soft', tone: 0.55 },
      ],
    },
    {
      text: {
        da: 'Tryk lidt hårdere på stregerne i skyggesiden, og lad stregerne i lyset være tynde. Så er din rose færdig!',
        en: 'Press a little harder on the lines on the shadow side, and keep the lines in the light thin. Then your rose is done!',
      },
      strokes: [
        { d: 'M200 228 Q280 226 296 138', weight: 1.5 },
        { d: 'M244 138 Q246 186 200 200', weight: 1.5 },
      ],
    },
  ],
  praise: [
    { da: 'Kronbladene ser ud, som om de folder sig ud – det er rigtig kunstner-skygge!', en: 'The petals look like they are unfolding – that is real artist shading!' },
  ],
  nextTip: {
    da: 'Tegn en rose, der er ved at springe ud, eller en, der er helt åben.',
    en: 'Draw a rose that is just opening, or one that is fully open.',
  },
}
