import { arc, circle, ellipse, type Pt } from '../shapes'
import type { Lesson } from '../types'

/** x of a quadratic curve at height y (the curve must run steadily downwards). */
function quadX(p0: Pt, p1: Pt, p2: Pt, y: number): number {
  let lo = 0
  let hi = 1
  for (let i = 0; i < 30; i++) {
    const t = (lo + hi) / 2
    const yt = (1 - t) ** 2 * p0[1] + 2 * t * (1 - t) * p1[1] + t ** 2 * p2[1]
    if (yt < y) lo = t
    else hi = t
  }
  return (1 - lo) ** 2 * p0[0] + 2 * lo * (1 - lo) * p1[0] + lo ** 2 * p2[0]
}
const front = (y: number) => quadX([176, 196], [122, 246], [136, 318], y)
const inner = (y: number) => quadX([188, 204], [150, 252], [164, 318], y)
const bellyPlates = [220, 238, 256, 274, 292, 310]
  .map((y) => {
    const a = front(y) + 2
    const b = inner(y)
    return `M${a.toFixed(1)} ${y} Q${((a + b) / 2).toFixed(1)} ${y + 6} ${b.toFixed(1)} ${y}`
  })
  .join(' ')

const scales = Array.from({ length: 7 }, (_, r) => r)
  .flatMap((r) => Array.from({ length: 5 }, (_, c): Pt => [196 + c * 16 + (r % 2) * 8, 228 + r * 16]))
  .filter(([x, y]) => x > inner(y) + 12 && !(x > 246 && y < 262) && !(x > 254 && y > 274) && x < 270)
  .map(([x, y]) => arc(x, y, 7, 20, 160))
  .join(' ')

const wing = 'M258 214 Q290 150 330 104 Q340 140 372 150 Q352 176 376 200 Q346 210 352 240 Q316 236 290 254'
const tail = 'M306 316 Q340 330 354 312 Q364 296 352 280 M300 352 Q356 362 372 322 Q380 296 366 276 M352 280 L340 256 L370 260 L366 276'

export const dragon: Lesson = {
  id: 'dragon',
  title: { da: 'Drage', en: 'Dragon' },
  category: 'fantasi',
  sub: 'eventyr',
  level: 3,
  style: 'detaljer',
  minutes: 25,
  intro: {
    da: 'En siddende drage med horn, vinger, bugplader og en hale med en pilespids. Mange detaljer – men tegnet trin for trin.',
    en: 'A sitting dragon with horns, wings, belly plates and a tail with an arrow tip. Lots of details – but drawn step by step.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn let et par hjælpefigurer: en cirkel til hovedet og en stor oval til kroppen.', en: 'Lightly draw a couple of helper shapes: a circle for the head and a big oval for the body.' },
      strokes: [
        { d: circle(214, 116, 42), kind: 'guide' },
        { d: ellipse(214, 282, 80, 80), kind: 'guide' },
      ],
    },
    {
      text: {
        da: 'Tegn hovedet med en lang snude, der stikker ud til venstre, og en hals ned til kroppen.',
        en: 'Draw the head with a long snout sticking out to the left, and a neck down to the body.',
      },
      strokes: [
        { d: 'M180 150 Q166 140 152 144 L128 146 Q112 144 112 128 Q112 112 128 108 L168 100 Q178 76 212 76 Q252 78 256 112 Q258 140 240 156' },
        { d: 'M180 150 Q178 176 176 196 M240 156 Q248 178 252 196' },
      ],
    },
    {
      text: { da: 'Tegn kroppen som en pære, to forpoter forneden og et kraftigt lår i siden.', en: 'Draw the body like a pear, two front paws at the bottom and a strong thigh on the side.' },
      strokes: [
        { d: 'M176 196 Q122 246 136 318 Q146 360 214 360 Q282 360 292 318 Q304 250 252 196' },
        { d: 'M170 360 Q170 334 186 334 Q202 334 202 360 M206 360 Q206 334 222 334 Q238 334 238 360' },
        { d: 'M266 284 Q312 282 306 334 Q302 356 282 360' },
      ],
    },
    {
      text: { da: 'Tegn to horn, der bøjer bagud, et øje med en smal pupil, et næsebor og en mund med små tænder.', en: 'Draw two horns curving backwards, an eye with a narrow pupil, a nostril and a mouth with little teeth.' },
      strokes: [
        { d: 'M214 78 Q232 48 262 40 Q244 58 236 82 M238 86 Q260 66 286 66 Q264 78 252 98' },
        { d: ellipse(206, 106, 10, 8) },
        { d: ellipse(208, 106, 2.5, 6.5), kind: 'shade', tone: 0.95 },
        { d: 'M192 94 Q208 86 224 96' },
        { d: 'M120 118 q5 -5 10 0' },
        { d: 'M116 136 Q150 142 184 134 M136 138 l3 6 l3 -6 M158 139 l3 6 l3 -6' },
      ],
    },
    {
      text: {
        da: 'Tegn vingen bag ryggen: en lang forkant op til en spids og en bølget bagkant med takker. Tegn vingens "fingre".',
        en: 'Draw the wing behind the back: a long front edge up to a point and a scalloped back edge. Draw the wing’s "fingers".',
      },
      tip: { da: 'Dragevinger ligner flagermusvinger – hud spændt ud mellem lange knogler.', en: 'Dragon wings look like bat wings – skin stretched between long bones.' },
      strokes: [{ d: wing }, { d: 'M326 112 L366 152 M320 124 L370 200 M312 140 L348 236', weight: 0.6 }],
    },
    {
      text: { da: 'Visk hjælpefigurerne ud. Tegn halen, der snor sig ud bag låret og ender i en pilespids.', en: 'Erase the helper shapes. Draw the tail curling out from behind the thigh and ending in an arrow tip.' },
      erase: 'guides',
      strokes: [{ d: tail }],
    },
    {
      text: {
        da: 'Nu detaljerne: bugplader på maven, takker på halsen og halen, skæl på kroppen og kløer på poterne.',
        en: 'Now the details: belly plates on the tummy, spikes on the neck and tail, scales on the body and claws on the paws.',
      },
      strokes: [
        { d: 'M188 204 Q150 252 164 318 Q174 354 214 356' },
        { d: bellyPlates, weight: 0.7 },
        { d: 'M242 160 L256 162 L246 172 M248 176 L262 180 L251 190 M318 322 L328 306 L334 322 M340 318 L354 304 L352 316' },
        { d: scales, weight: 0.6 },
        { d: 'M176 360 l-2 6 M186 360 v6 M196 360 l2 6 M212 360 l-2 6 M222 360 v6 M232 360 l2 6 M282 360 l-3 6 M292 357 l0 7 M300 352 l3 6', weight: 1.4 },
      ],
    },
    {
      text: {
        da: 'Skyg under hovedet, langs ryggen og let på vingen. Tegn lidt røg fra næseboret, og farvelæg din drage!',
        en: 'Shade under the head, along the back and lightly on the wing. Draw a little smoke from the nostril, and colour your dragon!',
      },
      strokes: [
        { d: 'M180 152 Q210 170 240 158 Q236 178 210 180 Q186 178 180 152 Z', kind: 'shade', fill: 'soft', tone: 0.35 },
        { d: 'M256 204 Q300 252 288 318 Q278 290 270 250 Q264 224 256 204 Z', kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: `${wing} Q276 230 258 214 Z`, kind: 'shade', fill: 'soft', tone: 0.15 },
        { d: ellipse(240, 364, 120, 7), kind: 'shade', fill: 'soft', tone: 0.3 },
        { d: `M112 112 Q100 100 108 90 Q116 80 106 68 ${circle(98, 58, 5)} ${circle(108, 46, 3.5)}`, weight: 0.7 },
      ],
    },
  ],
  praise: [{ da: 'Wow, en rigtig drage med skæl og vinger – den ser farlig flot ud!', en: 'Wow, a real dragon with scales and wings – it looks dangerously good!' }],
  nextTip: { da: 'Tegn dragen, mens den flyver over et slot, eller tegn en lille dragebaby i et æg.', en: 'Draw the dragon flying over a castle, or draw a baby dragon in an egg.' },
}
