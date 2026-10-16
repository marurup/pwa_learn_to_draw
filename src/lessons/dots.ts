import { poly, type Pt } from './shapes'
import type { L10n, Lesson, Step, Sub } from './types'

interface DotLessonInput {
  id: string
  title: L10n
  intro: L10n
  sub?: Sub
  minutes?: number
  dots: Pt[]
  /** Dot numbers (1-based) where each "join the dots" step stops, e.g. [5, 10, 14]. */
  stops: number[]
  /** Join the last dot back to dot 1. */
  closed?: boolean
  /** Steps after the dots are joined (eyes, details …). */
  finish: Step[]
  praise?: L10n[]
  nextTip?: L10n
}

/** Builds a dot-to-dot lesson: find the dots, join them in a few chunks, then add the details. */
export function dotLesson(input: DotLessonInput): Lesson {
  const { dots, stops, closed = true } = input
  const steps: Step[] = [
    {
      text: {
        da: 'Her er prikkerne. Print arket, eller kalkér prikkerne og tallene over på dit papir.',
        en: 'Here are the dots. Print the sheet, or trace the dots and numbers onto your paper.',
      },
      tip: {
        da: 'Sæt blyanten på prik 1, før du begynder. Tallene viser vejen.',
        en: 'Put your pencil on dot 1 before you start. The numbers show the way.',
      },
    },
  ]
  let from = 1
  stops.forEach((to, i) => {
    const isLast = i === stops.length - 1
    const pts = dots.slice(from - 1, to)
    if (isLast && closed) pts.push(dots[0])
    const back = isLast && closed
    steps.push({
      text: back
        ? { da: `Forbind prik ${from} til ${to} – og så tilbage til prik 1.`, en: `Join dot ${from} to ${to} – and then back to dot 1.` }
        : { da: `Forbind prik ${from} til ${to}. Tegn en lige streg fra prik til prik.`, en: `Join dot ${from} to ${to}. Draw a straight line from dot to dot.` },
      tip:
        i === 0
          ? { da: 'Kig på den næste prik, mens du tegner – så bliver stregen lige.', en: 'Look at the next dot while you draw – it keeps the line straight.' }
          : undefined,
      strokes: [{ d: poly(pts) }],
    })
    from = to
  })
  return {
    id: input.id,
    title: input.title,
    category: 'prik',
    sub: input.sub,
    level: 1,
    minutes: input.minutes ?? 5,
    intro: input.intro,
    dots,
    steps: [...steps, ...input.finish],
    materials: ['pencil', 'paper', 'colors'],
    praise: input.praise,
    nextTip: input.nextTip,
  }
}
