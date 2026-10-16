import { circle, ellipse, line, mirrorX, transform } from '../shapes'
import type { Lesson, Step, Stroke } from '../types'

// The cats are drawn side by side (kawaii x≈100, cartoon x≈300, realistic x≈500) and then
// scaled into a square: two on top, one below.
const place = (d: string) => {
  const x = Number(/-?\d+(\.\d+)?/.exec(d)?.[0] ?? 0)
  if (x < 200) return transform(d, 0.8, 25, -16.8)
  if (x < 400) return transform(d, 0.8, 55, 5.6)
  return transform(d, 0.8, -200, 195.6)
}
const kawaiiEarL = 'M44 120 L48 76 L82 98'
const cartoonEarL = 'M248 98 L238 28 L284 70'
const cartoonBrowL = 'M262 92 Q280 80 296 90'
const realEarL = 'M452 80 L462 26 L492 58'
const realInnerEarL = 'M462 66 L466 40 L482 56'
const realEyeL = 'M464 116 Q480 104 494 116 Q480 126 464 116'
const realWhiskersL = [line(484, 162, 420, 152), line(484, 166, 416, 170), line(486, 170, 424, 188)].join(' ')

const sideBySide: Lesson = {
  id: 'styles-cat',
  title: { da: 'Tre stilarter: kat', en: 'Three styles: cat' },
  category: 'teknik',
  level: 4,
  minutes: 25,
  intro: {
    da: 'Den samme kat i tre stilarter: kawaii (nuttet), tegneserie og realistisk. Stilen afhænger af, hvordan du overdriver formerne.',
    en: 'The same cat in three styles: kawaii (cute), cartoon and realistic. The style depends on how you exaggerate the shapes.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Kawaii betyder "nuttet" på japansk. Tegn et bredt, rundt hoved og små, runde ører.', en: 'Kawaii means "cute" in Japanese. Draw a wide, round head and small, rounded ears.' },
      strokes: [{ d: ellipse(100, 154, 76, 62) }, { d: kawaiiEarL }, { d: mirrorX(kawaiiEarL, 100) }],
      labels: [{ x: 105, y: 196, text: { da: 'kawaii', en: 'kawaii' } }],
    },
    {
      text: { da: 'Sæt store øjne langt nede og langt fra hinanden, en lille mund og runde kinder. Små ansigter ser sødest ud.', en: 'Put big eyes low and far apart, a tiny mouth and round cheeks. Small faces look the cutest.' },
      strokes: [
        { d: circle(70, 164, 11), kind: 'shade', tone: 0.92 },
        { d: circle(130, 164, 11), kind: 'shade', tone: 0.92 },
        { d: 'M92 176 Q96 182 100 176 Q104 182 108 176' },
        { d: ellipse(56, 182, 11, 6), kind: 'shade', tone: 0.15 },
        { d: ellipse(144, 182, 11, 6), kind: 'shade', tone: 0.15 },
      ],
    },
    {
      text: { da: 'Tegneserie: Tegn et hoved med pelsdotter på kinderne og store, spidse ører.', en: 'Cartoon: draw a head with tufts of fur on the cheeks and big, pointy ears.' },
      strokes: [
        { d: 'M248 98 Q262 66 300 64 Q338 66 352 98 Q366 134 352 166 L368 180 L344 182 Q326 208 300 208 Q274 208 256 182 L232 180 L248 166 Q234 134 248 98 Z' },
        { d: cartoonEarL },
        { d: mirrorX(cartoonEarL, 300) },
      ],
      labels: [{ x: 295, y: 196, text: { da: 'tegneserie', en: 'cartoon' } }],
    },
    {
      text: { da: 'I tegneserier overdriver man: kæmpe øjne, store øjenbryn og et bredt grin.', en: 'Cartoons exaggerate: huge eyes, big eyebrows and a wide grin.' },
      strokes: [
        { d: ellipse(282, 124, 16, 22) },
        { d: ellipse(318, 124, 16, 22) },
        { d: ellipse(286, 130, 7, 10), kind: 'shade', tone: 0.92 },
        { d: ellipse(314, 130, 7, 10), kind: 'shade', tone: 0.92 },
        { d: cartoonBrowL },
        { d: mirrorX(cartoonBrowL, 300) },
        { d: 'M292 152 L308 152 L300 161 Z' },
        { d: 'M268 166 Q300 204 332 166 Q300 178 268 166 Z' },
        { d: `${line(262, 160, 222, 150)} ${line(262, 166, 222, 170)} ${line(338, 160, 378, 150)} ${line(338, 166, 378, 170)}` },
      ],
    },
    {
      text: { da: 'Realistisk: Tegn hjælpelinjer og et hoved med kinder, der er bredere end panden. Ørerne har en indre kant.', en: 'Realistic: draw guide lines and a head with cheeks wider than the forehead. The ears have an inner edge.' },
      strokes: [
        { d: line(500, 50, 500, 214), kind: 'guide' },
        { d: line(440, 116, 560, 116), kind: 'guide' },
        { d: 'M452 80 Q428 104 428 140 Q428 170 454 186 Q476 204 500 206 Q524 204 546 186 Q572 170 572 140 Q572 104 548 80 Q526 58 500 60 Q474 58 452 80' },
        { d: realEarL },
        { d: mirrorX(realEarL, 500) },
        { d: realInnerEarL },
        { d: mirrorX(realInnerEarL, 500) },
      ],
      labels: [{ x: 200, y: 392, text: { da: 'realistisk', en: 'realistic' } }],
    },
    {
      text: { da: 'Tegn mandelformede øjne med smalle pupiller, en næse med næseryg og en lille mund – sådan som en kat ser ud.', en: 'Draw almond-shaped eyes with narrow pupils, a nose with a bridge and a small mouth – just as a cat looks.' },
      strokes: [
        { d: realEyeL },
        { d: mirrorX(realEyeL, 500) },
        { d: circle(479, 116, 7), kind: 'shade', tone: 0.35 },
        { d: circle(521, 116, 7), kind: 'shade', tone: 0.35 },
        { d: ellipse(479, 116, 2, 6), kind: 'shade', tone: 1 },
        { d: ellipse(521, 116, 2, 6), kind: 'shade', tone: 1 },
        { d: 'M492 148 L508 148 L500 157 Z' },
        { d: 'M490 124 Q495 138 492 148 M510 124 Q505 138 508 148' },
        { d: 'M500 157 V165 M500 165 Q492 173 482 169 M500 165 Q508 173 518 169' },
      ],
    },
    {
      text: { da: 'Visk hjælpelinjerne ud. Tegn knurhår og små pelsstreger. Hvilken stil kan du bedst lide?', en: 'Erase the guide lines. Draw whiskers and little fur strokes. Which style do you like best?' },
      erase: 'guides',
      strokes: [
        { d: realWhiskersL },
        { d: mirrorX(realWhiskersL, 500) },
        { d: 'M478 82 L482 94 M490 76 L492 88 M500 74 V86 M510 76 L508 88 M522 82 L518 94' },
        { d: 'M436 170 L428 176 M450 186 L442 194 M564 170 L572 176 M550 186 L558 194' },
        { d: 'M484 158 Q490 170 500 165 Q510 170 516 158' },
      ],
    },
  ],
  praise: [{ da: 'Tre katte, tre stilarter – du er en alsidig kunstner!', en: 'Three cats, three styles – you are a versatile artist!' }],
  nextTip: { da: 'Vælg din yndlingsstil, og tegn et andet dyr i den – fx en kanin eller en ræv.', en: 'Pick your favourite style and draw another animal in it – e.g. a rabbit or a fox.' },
}

export const stylesCat: Lesson = {
  ...sideBySide,
  steps: sideBySide.steps.map(
    (step): Step => ({ ...step, strokes: step.strokes?.map((st): Stroke => ({ ...st, d: place(st.d) })) }),
  ),
}
