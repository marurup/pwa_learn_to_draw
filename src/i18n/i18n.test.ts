import { describe, expect, it } from 'vitest'
import { da } from './da'
import { en } from './en'
import { possessive, translate, type Key } from './index'

describe('dictionaries', () => {
  it('have the same keys and no empty texts', () => {
    expect(Object.keys(en).sort()).toEqual(Object.keys(da).sort())
    for (const dict of [da, en]) for (const [k, v] of Object.entries(dict)) expect(v.trim(), k).not.toBe('')
  })

  it('use the same placeholders in both languages', () => {
    for (const key of Object.keys(da) as Key[]) {
      const vars = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort()
      expect(vars(en[key]), key).toEqual(vars(da[key]))
    }
  })
})

describe('translate', () => {
  it('fills in placeholders, including the possessive name', () => {
    expect(translate('da', 'home.greeting', { name: 'Ida' })).toBe('Hej Ida!')
    expect(translate('da', 'gallery.title', { name: 'Ida' })).toBe('Idas galleri')
    expect(translate('en', 'gallery.title', { name: 'Ida' })).toBe("Ida's gallery")
  })

  it('writes Danish and English possessives correctly', () => {
    expect(possessive('Lucas', 'da')).toBe("Lucas'")
    expect(possessive('Max', 'da')).toBe("Max'")
    expect(possessive('Emma', 'da')).toBe('Emmas')
    expect(possessive('James', 'en')).toBe("James'")
  })
})
