import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

/** Goes back in history when there is somewhere to go back to inside the app, otherwise to `fallback`. */
export function useBack(fallback: string) {
  const navigate = useNavigate()
  return useCallback(() => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0
    if (idx > 0) navigate(-1)
    else navigate(fallback, { replace: true })
  }, [navigate, fallback])
}
