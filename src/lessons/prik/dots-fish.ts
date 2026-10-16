import { dotLesson } from '../dots'
import { circle } from '../shapes'

export const dotsFish = dotLesson({
  id: 'dots-fish',
  title: { da: 'Prik-til-prik: Fisk', en: 'Dot-to-dot: Fish' },
  intro: {
    da: 'Forbind prikkerne, så kommer der en fisk frem. Til sidst giver du den øje og bobler.',
    en: 'Join the dots and a fish appears. Then give it an eye and some bubbles.',
  },
  sub: 'fisk',
  dots: [
    [335, 200],
    [310, 150],
    [265, 122],
    [210, 118],
    [160, 135],
    [115, 175],
    [60, 128],
    [82, 200],
    [60, 272],
    [115, 225],
    [160, 265],
    [210, 282],
    [265, 278],
    [310, 250],
  ],
  stops: [5, 10, 14],
  finish: [
    {
      text: { da: 'Tegn et øje og en bue bag hovedet. Buen er fiskens gæller.', en: 'Draw an eye and a curve behind the head. The curve is the gills.' },
      strokes: [{ d: circle(288, 182, 11) }, { d: circle(291, 182, 4) }, { d: 'M250 152 Q272 200 250 248' }],
    },
    {
      text: { da: 'Tegn bobler, der stiger op fra munden. Farvelæg fisken, hvis du vil!', en: 'Draw bubbles rising from its mouth. Colour in the fish if you like!' },
      strokes: [{ d: circle(358, 160, 9) }, { d: circle(370, 122, 7) }, { d: circle(360, 90, 5) }],
    },
  ],
  praise: [{ da: 'Sikke en flot fisk – den ser ud, som om den svømmer!', en: 'What a lovely fish – it looks like it is swimming!' }],
  nextTip: { da: 'Tegn flere fisk og noget tang, så får du et helt akvarium.', en: 'Draw more fish and some seaweed to make a whole aquarium.' },
})
