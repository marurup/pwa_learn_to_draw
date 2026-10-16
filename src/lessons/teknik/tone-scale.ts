import { rect } from '../shapes'
import type { Label, Lesson, Stroke } from '../types'

const box = (i: number) => rect(28 + i * 70, 110, 64, 84)
const tone = (i: number, value: number): Stroke => ({ d: box(i), kind: 'shade', tone: value })
const numbers: Label[] = [0, 1, 2, 3, 4].map((i) => ({ x: 60 + i * 70, y: 222, text: { da: String(i + 1), en: String(i + 1) } }))


export const toneScale: Lesson = {
  id: 'tone-scale',
  title: { da: 'Toneskala', en: 'Tone scale' },
  category: 'teknik',
  level: 4,
  minutes: 15,
  intro: {
    da: 'Med én blyant kan du lave alt fra lys grå til næsten sort. En toneskala er den vigtigste øvelse for at kunne skygge.',
    en: 'With one pencil you can make everything from light grey to almost black. A tone scale is the most important exercise for shading.',
  },
  materials: ['pencil', 'eraser', 'paper', 'ruler'],
  steps: [
    {
      text: { da: 'Tegn fem kasser på en række, lige store og tæt på hinanden.', en: 'Draw five boxes in a row, the same size and close together.' },
      strokes: [0, 1, 2, 3, 4].map((i) => ({ d: box(i) })),
      labels: numbers,
    },
    {
      text: { da: 'Lad kasse 1 være helt hvid. Den lyseste tone er papiret selv!', en: 'Leave box 1 completely white. The lightest tone is the paper itself!' },
      labels: [{ x: 60, y: 96, text: { da: 'hvid', en: 'white' } }],
    },
    {
      text: { da: 'Fyld kasse 5 så mørk, som du kan. Tryk godt, og tegn flere lag.', en: 'Fill box 5 as dark as you can. Press firmly and draw several layers.' },
      tip: { da: 'En blød blyant (fx 4B eller 6B) giver de mørkeste toner.', en: 'A soft pencil (e.g. 4B or 6B) gives the darkest tones.' },
      strokes: [tone(4, 0.88)],
      labels: [{ x: 340, y: 96, text: { da: 'mørkest', en: 'darkest' } }],
    },
    {
      text: { da: 'Fyld kasse 3 med en mellemtone – halvvejs mellem hvid og den mørkeste.', en: 'Fill box 3 with a middle tone – halfway between white and the darkest.' },
      tip: { da: 'Hold blyanten lidt skråt, og tegn små cirkler eller frem og tilbage.', en: 'Hold the pencil at a slant and draw small circles or back and forth.' },
      strokes: [tone(2, 0.45)],
    },
    {
      text: { da: 'Fyld kasse 2 lidt lysere end kasse 3, og kasse 4 lidt mørkere.', en: 'Fill box 2 a little lighter than box 3, and box 4 a little darker.' },
      tip: { da: 'Kniber du øjnene sammen, kan du nemmere se, om trinene er lige store.', en: 'Squint your eyes – it is easier to see whether the steps are even.' },
      strokes: [tone(1, 0.2), tone(3, 0.66)],
    },
    {
      text: { da: 'Tegn en lang kasse nedenunder, og lav en blød overgang fra hvid til mørk – uden trin.', en: 'Draw a long box below and make a smooth change from white to dark – with no steps.' },
      tip: { da: 'Start i den mørke ende, og løft blyanten mere og mere, jo længere du kommer.', en: 'Start at the dark end and lift the pencil more and more as you go.' },
      strokes: [{ d: rect(28, 262, 344, 60), kind: 'shade', fill: 'gradient' }, { d: rect(28, 262, 344, 60) }],
    },
  ],
  praise: [{ da: 'Flotte toner! Nu kan du skygge alt, hvad du tegner.', en: 'Lovely tones! Now you can shade anything you draw.' }],
  nextTip: { da: 'Lav en toneskala med ti trin i stedet for fem.', en: 'Make a tone scale with ten steps instead of five.' },
}
