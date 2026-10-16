import { interpolate } from '../i18n'
import type { L10n, Lang, Lesson, Level } from '../lessons/types'

export interface Feedback {
  headline: string
  message: string
  nextTip: string
}

const HEADLINES: L10n[] = [
  { da: 'Fantastisk, {name}!', en: 'Fantastic, {name}!' },
  { da: 'Sikke flot, {name}!', en: 'How lovely, {name}!' },
  { da: 'Wow, {name}!', en: 'Wow, {name}!' },
  { da: 'Godt gået, {name}!', en: 'Well done, {name}!' },
  { da: 'Du er en rigtig tegner, {name}!', en: "You're a real artist, {name}!" },
]

const GENERAL: L10n[] = [
  { da: 'Man kan se, at du har gjort dig umage.', en: 'You can tell you took real care.' },
  { da: 'Du tog det trin for trin – præcis sådan gør rigtige tegnere.', en: 'You went step by step – exactly how real artists work.' },
  { da: 'Din tegning har sin helt egen stil. Det er det bedste ved at tegne selv.', en: 'Your drawing has its very own style. That is the best part of drawing yourself.' },
  { da: 'Hver tegning gør dig lidt bedre – og den her er et godt eksempel.', en: 'Every drawing makes you a little better – and this one shows it.' },
]

const BY_LEVEL: Record<Level, L10n[]> = {
  1: [
    { da: 'Du fulgte stregerne så fint!', en: 'You followed the lines so nicely!' },
    { da: 'Dine streger er blevet så sikre.', en: 'Your lines are getting so steady.' },
  ],
  2: [
    { da: 'Du byggede tegningen op af enkle former – det er hele hemmeligheden!', en: 'You built the drawing from simple shapes – that is the whole secret!' },
    { da: 'Formerne passer godt sammen.', en: 'The shapes fit together really well.' },
  ],
  3: [
    { da: 'Du brugte hjælpelinjer, og det kan man se på proportionerne.', en: 'You used guide lines, and it shows in the proportions.' },
    { da: 'Det ligner noget, der kunne være levende!', en: 'It looks like it could come alive!' },
  ],
  4: [
    { da: 'Du arbejder med teknik som en rigtig kunstner.', en: 'You are working with technique like a real artist.' },
    { da: 'Lys og skygge giver tegningen dybde.', en: 'Light and shade give your drawing depth.' },
  ],
}

const NEXT_BY_LEVEL: Record<Level, L10n[]> = {
  1: [
    { da: 'Prøv en tegning mere – næste gang går det endnu nemmere.', en: 'Try another one – next time it will be even easier.' },
    { da: 'Farvelæg din tegning med dine yndlingsfarver.', en: 'Colour in your drawing with your favourite colours.' },
  ],
  2: [
    { da: 'Tegn en baggrund til din tegning: en himmel, en have eller havet.', en: 'Draw a background for your drawing: a sky, a garden or the sea.' },
    { da: 'Tegn den samme tegning igen, men gør den større, så den fylder hele papiret.', en: 'Draw it again, but bigger, so it fills the whole page.' },
  ],
  3: [
    { da: 'Tegn hjælpelinjerne endnu lettere, så de er nemme at viske ud.', en: 'Draw the guide lines even more lightly so they are easy to erase.' },
    { da: 'Prøv at tegne den fra en anden vinkel eller i en anden stilling.', en: 'Try drawing it from another angle or in another pose.' },
  ],
  4: [
    { da: 'Find en ting derhjemme, og tegn den med lys og skygge.', en: 'Find something at home and draw it with light and shade.' },
    { da: 'Prøv med en blødere blyant (fx 4B) til de mørkeste skygger.', en: 'Try a softer pencil (e.g. 4B) for the darkest shadows.' },
  ],
}

/** Small deterministic hash, so the same photo always gets the same words. */
export function hashSeed(text: string): number {
  let h = 2166136261
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function pick<T>(list: T[], seed: number, salt: number): T {
  return list[(seed + salt * 7919) % list.length]
}

/**
 * Praise and a next-time tip for a finished drawing. Local templates for now; the async signature
 * lets an AI reviewer (that also looks at the photo) replace it later without touching callers.
 */
export async function getFeedback(input: { lesson: Lesson; name: string; lang: Lang; seed: number }): Promise<Feedback> {
  const { lesson, name, lang, seed } = input
  const vars = { name }
  const messages = [...(lesson.praise ?? []), ...BY_LEVEL[lesson.level], ...GENERAL]
  const nextTips = lesson.nextTip ? [lesson.nextTip, ...NEXT_BY_LEVEL[lesson.level]] : NEXT_BY_LEVEL[lesson.level]
  return {
    headline: interpolate(pick(HEADLINES, seed, 1)[lang], vars),
    message: interpolate(pick(messages, seed, 2)[lang], vars),
    nextTip: interpolate((seed % 3 === 0 || !lesson.nextTip ? pick(nextTips, seed, 3) : lesson.nextTip)[lang], vars),
  }
}
