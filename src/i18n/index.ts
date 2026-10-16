import { useCallback } from 'react'
import type { L10n, Lang } from '../lessons/types'
import { useAppState } from '../state/store'
import { da } from './da'
import { en } from './en'

export type Key = keyof typeof da
export type Dict = Record<Key, string>
export type Vars = Record<string, string | number>

const dicts: Record<Lang, Dict> = { da, en }

/** "Ida" → "Idas", "Lucas" → "Lucas'" (da); "Ida" → "Ida's" (en). */
export function possessive(name: string, lang: Lang): string {
  if (lang === 'en') return /s$/i.test(name) ? `${name}'` : `${name}'s`
  return /[sxz]$/i.test(name) ? `${name}'` : `${name}s`
}

export function interpolate(text: string, vars?: Vars): string {
  if (!vars) return text
  return text.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m))
}

export function translate(lang: Lang, key: Key, vars?: Vars): string {
  const withGen = vars && typeof vars.name === 'string' ? { nameGen: possessive(vars.name, lang), ...vars } : vars
  return interpolate(dicts[lang][key] ?? da[key], withGen)
}

export type T = (key: Key, vars?: Vars) => string
export type TL = (text: L10n, vars?: Vars) => string

export function useLang(): Lang {
  return useAppState().lang
}

export function useT(): T {
  const lang = useLang()
  return useCallback((key: Key, vars?: Vars) => translate(lang, key, vars), [lang])
}

/** Translates a lesson text ({ da, en }). */
export function useTL(): TL {
  const lang = useLang()
  return useCallback((text: L10n, vars?: Vars) => interpolate(text[lang] ?? text.da, vars), [lang])
}
