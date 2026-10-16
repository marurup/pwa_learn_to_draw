import { circle, ellipse, line } from '../shapes'
import type { Lesson } from '../types'

const rays = [0, 45, 90, 135, 180, 225, 270, 315]
  .map((deg) => {
    const a = (deg * Math.PI) / 180
    return line(56 + 24 * Math.cos(a), 58 + 24 * Math.sin(a), 56 + 33 * Math.cos(a), 58 + 33 * Math.sin(a))
  })
  .join(' ')

export const sphereShading: Lesson = {
  id: 'sphere-shading',
  title: { da: 'Skygge på en kugle', en: 'Shading a sphere' },
  category: 'teknik',
  level: 4,
  minutes: 20,
  intro: {
    da: 'Hvordan får man en flad cirkel til at se rund ud? Med lys og skygge! Du lærer højlys, kerneskygge, reflekslys og slagskygge.',
    en: 'How do you make a flat circle look round? With light and shadow! You learn highlight, core shadow, reflected light and cast shadow.',
  },
  materials: ['pencil', 'eraser', 'paper'],
  steps: [
    {
      text: { da: 'Tegn en stor cirkel. Det er kuglen.', en: 'Draw a big circle. That is the sphere.' },
      strokes: [{ d: circle(190, 200, 105) }],
    },
    {
      text: { da: 'Bestem, hvor lyset kommer fra. Her skinner solen fra øverst til venstre.', en: 'Decide where the light comes from. Here the sun shines from the top left.' },
      tip: { da: 'Lyset bestemmer alt: Skyggerne er altid på den modsatte side.', en: 'The light decides everything: the shadows are always on the opposite side.' },
      strokes: [{ d: circle(56, 58, 18) }, { d: rays }, { d: 'M84 88 L118 122 M118 122 l-13 -2 M118 122 l-2 -13', kind: 'guide' }],
      labels: [{ x: 56, y: 112, text: { da: 'lys', en: 'light' } }],
    },
    {
      text: { da: 'Find højlyset: det lille sted, der vender mod lyset. Det skal forblive hvidt.', en: 'Find the highlight: the little spot facing the light. It must stay white.' },
      strokes: [{ d: circle(152, 160, 17), kind: 'guide' }],
      labels: [{ x: 160, y: 136, text: { da: 'højlys', en: 'highlight' } }],
    },
    {
      text: { da: 'Skyg kuglen. Mørkest i et bælte på siden væk fra lyset – kerneskyggen – og blødt lysere hen mod højlyset.', en: 'Shade the sphere. Darkest in a band on the side away from the light – the core shadow – and softly lighter towards the highlight.' },
      tip: { da: 'Byg skyggen op i lag, og følg kuglens runde form med blyanten.', en: 'Build the shadow up in layers, and follow the round shape with your pencil.' },
      strokes: [{ d: circle(190, 200, 105), kind: 'shade', fill: 'sphere' }],
      labels: [{ x: 302, y: 232, text: { da: 'kerneskygge', en: 'core shadow' }, anchor: 'start' }],
    },
    {
      text: { da: 'Tegn slagskyggen: skyggen, som kuglen kaster på bordet – også væk fra lyset.', en: 'Draw the cast shadow: the shadow the sphere throws on the table – also away from the light.' },
      strokes: [{ d: ellipse(262, 304, 108, 21), kind: 'shade', tone: 0.55 }, { d: 'M20 318 H380', kind: 'guide' }],
      labels: [{ x: 300, y: 350, text: { da: 'slagskygge', en: 'cast shadow' } }],
    },
    {
      text: { da: 'Lad kanten nederst være en anelse lysere. Det er reflekslys – lys, der kastes tilbage fra bordet.', en: 'Keep the bottom edge a tiny bit lighter. That is reflected light – light bouncing back from the table.' },
      tip: { da: 'Reflekslyset må aldrig blive lige så lyst som højlyset.', en: 'Reflected light should never be as bright as the highlight.' },
      labels: [{ x: 284, y: 280, text: { da: 'reflekslys', en: 'reflected light' }, anchor: 'start' }],
    },
    {
      text: { da: 'Visk hjælpestregerne ud. Nu ser kuglen rund og tung ud!', en: 'Erase the guide marks. Now the sphere looks round and heavy!' },
      erase: 'guides',
    },
  ],
  praise: [{ da: 'Den kugle ser helt rund ud – man har lyst til at samle den op!', en: 'That sphere looks completely round – you want to pick it up!' }],
  nextTip: { da: 'Læg et æble på bordet ved en lampe, og tegn det med de samme skygger.', en: 'Put an apple on the table by a lamp and draw it with the same shadows.' },
}
