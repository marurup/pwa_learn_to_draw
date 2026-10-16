import { dotLesson } from '../dots'
import { arc, circle, type Pt } from '../shapes'

const starDots: Pt[] = Array.from({ length: 10 }, (_, i) => {
  const r = i % 2 === 0 ? 160 : 66
  const a = ((-90 + i * 36) * Math.PI) / 180
  return [Math.round(200 + r * Math.cos(a)), Math.round(215 + r * Math.sin(a))]
})

export const dotsStar = dotLesson({
  id: 'dots-star',
  title: { da: 'Prik-til-prik: Stjerne', en: 'Dot-to-dot: Star' },
  intro: {
    da: 'Forbind prikkerne til en stor stjerne – og giv den et glad ansigt.',
    en: 'Join the dots to make a big star – and give it a happy face.',
  },
  sub: 'rummet',
  dots: starDots,
  stops: [4, 7, 10],
  finish: [
    {
      text: { da: 'Tegn to øjne midt i stjernen.', en: 'Draw two eyes in the middle of the star.' },
      strokes: [
        { d: circle(178, 200, 7), kind: 'shade', tone: 0.9 },
        { d: circle(222, 200, 7), kind: 'shade', tone: 0.9 },
        { d: circle(178, 200, 7) },
        { d: circle(222, 200, 7) },
      ],
    },
    {
      text: { da: 'Tegn en stor smilemund. Nu er stjernen glad!', en: 'Draw a big smile. Now the star is happy!' },
      strokes: [{ d: arc(200, 222, 26, 20, 160) }],
    },
  ],
  praise: [{ da: 'Din stjerne stråler!', en: 'Your star is shining!' }],
  nextTip: { da: 'Tegn en hel nattehimmel med små stjerner og en måne.', en: 'Draw a whole night sky with little stars and a moon.' },
})
