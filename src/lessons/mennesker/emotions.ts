import { arc, circle, ellipse } from '../shapes'
import type { Lesson } from '../types'

const eyes = (cx: number, cy: number, r = 5) => ({ d: `${circle(cx - 22, cy - 8, r)} ${circle(cx + 22, cy - 8, r)}`, kind: 'shade' as const, tone: 0.9 })

export const emotions: Lesson = {
  id: 'emotions',
  title: { da: 'Fire følelser', en: 'Four feelings' },
  category: 'mennesker',
  sub: 'ansigter',
  level: 2,
  minutes: 12,
  intro: {
    da: 'Glad, ked af det, overrasket og vred. Lær, hvordan øjenbryn, øjne og mund viser, hvad man føler.',
    en: 'Happy, sad, surprised and angry. Learn how eyebrows, eyes and mouth show what someone feels.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Tegn fire cirkler – to foroven og to forneden. Det er fire hoveder.', en: 'Draw four circles – two at the top and two at the bottom. They are four heads.' },
      strokes: [{ d: circle(100, 100, 72) }, { d: circle(300, 100, 72) }, { d: circle(100, 300, 72) }, { d: circle(300, 300, 72) }],
    },
    {
      text: { da: 'Glad: øjne, en stor smilemund og øjenbryn, der står højt og runde.', en: 'Happy: eyes, a big smile and eyebrows that sit high and round.' },
      strokes: [eyes(100, 100), { d: arc(100, 108, 32, 20, 160) }, { d: 'M68 76 Q78 68 88 74 M112 74 Q122 68 132 76' }],
      labels: [{ x: 100, y: 196, text: { da: 'glad', en: 'happy' } }],
    },
    {
      text: { da: 'Ked af det: munden buer nedad, og øjenbrynene løfter sig inde ved midten. Tegn en tåre.', en: 'Sad: the mouth curves down, and the eyebrows lift up in the middle. Draw a tear.' },
      tip: { da: 'Øjenbrynene viser følelsen næsten lige så meget som munden.', en: 'The eyebrows show the feeling almost as much as the mouth.' },
      strokes: [
        eyes(300, 100),
        { d: arc(300, 148, 28, 205, 335) },
        { d: 'M268 80 Q280 80 290 70 M310 70 Q320 80 332 80' },
        { d: 'M274 102 Q268 114 274 118 Q280 114 274 102 Z' },
      ],
      labels: [{ x: 300, y: 196, text: { da: 'ked af det', en: 'sad' } }],
    },
    {
      text: { da: 'Overrasket: store runde øjne, øjenbryn højt oppe og en rund O-mund.', en: 'Surprised: big round eyes, eyebrows high up and a round O-mouth.' },
      strokes: [
        { d: `${circle(78, 290, 11)} ${circle(122, 290, 11)}` },
        { d: `${circle(78, 291, 5)} ${circle(122, 291, 5)}`, kind: 'shade', tone: 0.9 },
        { d: 'M64 264 Q78 254 92 262 M108 262 Q122 254 136 264' },
        { d: ellipse(100, 334, 12, 16) },
      ],
      labels: [{ x: 100, y: 396, text: { da: 'overrasket', en: 'surprised' } }],
    },
    {
      text: { da: 'Vred: øjenbrynene peger ned mod næsen som et V, og munden er en skæv streg.', en: 'Angry: the eyebrows point down towards the nose like a V, and the mouth is a crooked line.' },
      strokes: [
        eyes(300, 300),
        { d: 'M266 274 L292 286 M334 274 L308 286' },
        { d: 'M276 336 Q300 324 324 336' },
      ],
      labels: [{ x: 300, y: 396, text: { da: 'vred', en: 'angry' } }],
    },
    {
      text: { da: 'Giv hver figur lidt hår og ører. Prøv selv at lave ansigterne i et spejl!', en: 'Give each face a little hair and ears. Try making the faces in a mirror yourself!' },
      strokes: [
        { d: 'M60 44 Q80 24 100 40 Q120 24 140 44 M260 44 Q280 30 300 38 Q320 30 340 44' },
        { d: 'M64 236 L72 250 L84 232 L96 248 L106 230 L118 248 L134 238 M262 240 Q300 214 338 240' },
      ],
    },
  ],
  praise: [{ da: 'Fire ansigter, fire følelser – man kan se præcis, hvad de føler!', en: 'Four faces, four feelings – you can see exactly how they feel!' }],
  nextTip: { da: 'Tegn flere følelser: søvnig, flov, stolt eller fjollet.', en: 'Draw more feelings: sleepy, embarrassed, proud or silly.' },
}
