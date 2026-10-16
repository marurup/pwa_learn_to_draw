import { poly } from '../shapes'
import type { Lesson } from '../types'

const pine = (x: number, y: number, h: number) => {
  const w = h * 0.32
  return (
    poly(
      [
        [x - w, y],
        [x - w * 0.45, y - h * 0.35],
        [x - w * 0.75, y - h * 0.35],
        [x - w * 0.3, y - h * 0.7],
        [x - w * 0.5, y - h * 0.7],
        [x, y - h],
        [x + w * 0.5, y - h * 0.7],
        [x + w * 0.3, y - h * 0.7],
        [x + w * 0.75, y - h * 0.35],
        [x + w * 0.45, y - h * 0.35],
        [x + w, y],
      ],
      true,
    ) + ` M${x} ${y} V${y + h * 0.12}`
  )
}

const far = 'M16 196 L60 160 L92 178 L140 128 L184 172 L222 146 L262 176 L310 132 L352 168 L384 152'
const middle = 'M16 250 Q90 196 168 236 Q232 268 300 222 Q344 196 384 214'

export const mountainDepth: Lesson = {
  id: 'mountain-depth',
  title: { da: 'Bjerglandskab med dybde', en: 'Mountain landscape with depth' },
  category: 'natur',
  sub: 'landskab',
  level: 3,
  style: 'detaljer',
  minutes: 20,
  intro: {
    da: 'Lær kunstnernes trick til dybde: Det, der er langt væk, er lyst, lille og uden detaljer. Det, der er tæt på, er mørkt, stort og detaljeret.',
    en: 'Learn the artists’ trick for depth: things far away are light, small and without detail. Things close up are dark, big and detailed.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Baggrund: Tegn en takket bjergkæde højt oppe på papiret. Tegn den meget let.', en: 'Background: draw a jagged mountain range high up on the paper. Draw it very lightly.' },
      tip: { da: 'Langt væk ser alt lyst og blåligt ud – det kaldes luftperspektiv.', en: 'Far away, everything looks light and bluish – that is called aerial perspective.' },
      strokes: [{ d: far, opacity: 0.55 }],
    },
    {
      text: { da: 'Skyg bjergene i baggrunden helt let – kun en lys grå.', en: 'Shade the mountains in the background very lightly – just a light grey.' },
      strokes: [{ d: `${far} L384 250 L16 250 Z`, kind: 'shade', fill: 'soft', tone: 0.12 }],
    },
    {
      text: { da: 'Mellemgrund: Tegn bløde bakker foran bjergene, og skyg dem lidt mørkere.', en: 'Middle ground: draw soft hills in front of the mountains, and shade them a little darker.' },
      strokes: [
        { d: middle },
        { d: `${middle} L384 324 L16 324 Z`, kind: 'shade', fill: 'soft', tone: 0.22 },
      ],
    },
    {
      text: { da: 'Tegn små grantræer på bakkerne. De er små, fordi de er langt væk.', en: 'Draw little pine trees on the hills. They are small because they are far away.' },
      strokes: [{ d: `${pine(250, 252, 22)} ${pine(270, 248, 18)} ${pine(290, 238, 20)} ${pine(100, 228, 18)}`, weight: 0.7 }],
    },
    {
      text: { da: 'Forgrund: Tegn en sti, der bliver smallere langt væk, og jorden forrest.', en: 'Foreground: draw a path that gets narrower far away, and the ground at the front.' },
      strokes: [
        { d: 'M150 400 Q190 330 196 272 M262 400 Q222 330 206 272' },
        { d: 'M120 330 Q132 326 146 328 M270 330 Q330 318 384 324' },
      ],
    },
    {
      text: { da: 'Tegn et stort grantræ forrest til venstre og en sten til højre. De er store og mørke, fordi de er tæt på.', en: 'Draw a big pine tree at the front on the left and a rock on the right. They are big and dark because they are close.' },
      strokes: [
        { d: pine(66, 376, 190) },
        { d: `${pine(66, 376, 190)}`, kind: 'shade', fill: 'soft', tone: 0.55 },
        { d: 'M290 380 Q296 344 330 340 Q366 340 372 380 Z' },
        { d: 'M296 378 Q302 352 330 348 Q350 350 360 378 Z', kind: 'shade', fill: 'soft', tone: 0.5 },
      ],
    },
    {
      text: { da: 'Tegn græstotter i forgrunden og et par fugle på himlen. Se, hvor langt der er ind i billedet!', en: 'Draw tufts of grass in the foreground and a couple of birds in the sky. See how far the picture goes back!' },
      strokes: [
        { d: 'M140 392 l4 -14 l4 14 M170 386 l5 -16 l4 16 M250 392 l4 -14 l4 14 M380 392 l-4 -14 l-4 14' },
        { d: 'M196 70 q8 -8 16 0 q8 -8 16 0 M248 96 q5 -5 10 0 q5 -5 10 0', weight: 0.8 },
      ],
    },
  ],
  praise: [{ da: 'Billedet har dybde – man kan næsten gå ind i det!', en: 'The picture has depth – you could almost walk into it!' }],
  nextTip: { da: 'Tegn en sø i mellemgrunden, hvor bjergene spejler sig.', en: 'Draw a lake in the middle ground where the mountains are reflected.' },
}
