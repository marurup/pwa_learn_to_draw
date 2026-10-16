import { useCallback, useEffect, useState } from 'react'
import type { Lang } from '../lessons/types'

const LOCALE: Record<Lang, string> = { da: 'da-DK', en: 'en-GB' }

function pickVoice(lang: Lang): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis?.getVoices() ?? []
  return voices.find((v) => v.lang === LOCALE[lang]) ?? voices.find((v) => v.lang.toLowerCase().startsWith(lang))
}

export const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

/** Reads text aloud with the device's built-in voice. */
export function useSpeech(lang: Lang) {
  const [speaking, setSpeaking] = useState(false)

  const stop = useCallback(() => {
    if (!speechSupported) return
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [])

  const speak = useCallback(
    (text: string) => {
      if (!speechSupported || !text) return
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(text)
      u.lang = LOCALE[lang]
      const voice = pickVoice(lang)
      if (voice) u.voice = voice
      u.rate = 0.92
      u.onend = () => setSpeaking(false)
      u.onerror = () => setSpeaking(false)
      setSpeaking(true)
      window.speechSynthesis.speak(u)
    },
    [lang],
  )

  useEffect(() => stop, [stop])

  return { speak, stop, speaking }
}
