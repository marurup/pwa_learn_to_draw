import type { Lesson } from '../types'

export const rose: Lesson = {
  id: 'rose',
  title: { da: 'Rose', en: 'Rose' },
  category: 'natur',
  sub: 'blomster',
  level: 3,
  minutes: 15,
  intro: {
    da: 'En rose starter med en lille, lukket knop i midten. Derefter lægger du kronblade udenom – lag for lag.',
    en: 'A rose starts with a small, closed bud in the middle. Then you add petals around it – layer by layer.',
  },
  materials: ['pencil', 'eraser', 'paper', 'colors'],
  steps: [
    {
      text: { da: 'Tegn knoppen: en lille, skæv spiral øverst i midten.', en: 'Draw the bud: a small, uneven spiral near the top in the middle.' },
      tip: { da: 'Spiralen må gerne være lidt skæv – rigtige roser er heller ikke perfekte.', en: 'The spiral may be a bit wonky – real roses are not perfect either.' },
      strokes: [{ d: 'M212 104 Q202 92 188 98 Q178 110 192 116 Q210 120 214 104 Q216 84 194 80 Q170 80 166 104' }],
    },
    {
      text: { da: 'Tegn en kop rundt om knoppen – en bue fra den ene side, under knoppen og op på den anden side.', en: 'Draw a cup around the bud – a curve from one side, under the bud and up the other side.' },
      strokes: [{ d: 'M166 104 Q160 136 180 148 Q206 158 228 142 Q240 124 230 104 Q224 96 214 104' }],
    },
    {
      text: { da: 'Tegn et kronblad foran koppen. Den øverste kant bølger lidt, og bunden er rund.', en: 'Draw a petal in front of the cup. Its top edge is a little wavy, and the bottom is round.' },
      strokes: [{ d: 'M158 140 Q180 160 200 152 Q222 160 244 138 Q246 186 200 200 Q154 186 158 140', id: 'front' }],
    },
    {
      text: { da: 'Tegn et kronblad på hver side. De rejser sig op bag det forreste og ender i en spids.', en: 'Draw a petal on each side. They rise up behind the front one and end in a point.' },
      tip: { da: 'Spidserne er det, der får det til at ligne en rose.', en: 'The points are what make it look like a rose.' },
      strokes: [
        { d: 'M158 160 Q130 150 134 98 Q146 116 162 116', id: 'sideL' },
        { d: 'M242 158 Q270 148 266 96 Q254 114 238 114', id: 'sideR' },
      ],
    },
    {
      text: { da: 'Tegn to store, ydre kronblade forneden. De åbner sig ud til siderne og ender også i spidser.', en: 'Draw two big outer petals at the bottom. They open out to the sides and also end in points.' },
      strokes: [
        { d: 'M200 228 Q120 226 104 140 Q120 160 136 156', id: 'outL' },
        { d: 'M200 228 Q280 226 296 138 Q280 158 264 154', id: 'outR' },
      ],
    },
    {
      text: { da: 'Tegn små buer ved spidserne, der viser, hvor kanten ruller bagover. Tegn så bægerblade og en stilk med torne.', en: 'Draw small curves at the points to show where the edge rolls back. Then draw sepals and a stem with thorns.' },
      strokes: [
        { d: 'M134 98 Q142 92 148 100 M266 96 Q258 90 252 98 M104 140 Q112 132 120 140 M296 138 Q288 130 280 138 M180 154 Q186 148 192 154', weight: 0.7 },
        { d: 'M182 230 L166 254 L192 240 M218 230 L234 254 L208 240' },
        { d: 'M195 236 Q190 310 196 392' },
        { d: 'M205 236 Q202 310 208 392' },
        { d: 'M194 290 l-11 -2 l10 -7 M206 326 l11 -2 l-10 -7' },
      ],
    },
    {
      text: { da: 'Tegn et blad på stilken med en midterlinje. Farvelæg din rose!', en: 'Draw a leaf on the stem with a middle line. Colour in your rose!' },
      strokes: [
        { d: 'M206 352 Q238 314 288 322 Q262 362 208 362', id: 'leaf' },
        { d: 'M208 358 Q248 342 284 324', weight: 0.6 },
      ],
    },
  ],
  praise: [{ da: 'Sikke en smuk rose – lag på lag!', en: 'What a beautiful rose – layer upon layer!' }],
  nextTip: { da: 'Prøv den naturtro rose, hvor du lægger skygger i kronbladene.', en: 'Try the realistic rose, where you shade the petals.' },
}
