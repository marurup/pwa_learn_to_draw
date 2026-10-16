import { useEffect, useState } from 'react'

/** An object URL for a Blob that lives exactly as long as the component shows that Blob. */
export function useObjectUrl(blob: Blob | undefined): string | undefined {
  const [url, setUrl] = useState<string>()
  useEffect(() => {
    if (!blob) return
    const u = URL.createObjectURL(blob)
    // The URL is an external resource owned by this effect, so it is created and revoked here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUrl(u)
    return () => URL.revokeObjectURL(u)
  }, [blob])
  return blob ? url : undefined
}
