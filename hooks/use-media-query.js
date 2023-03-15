import { useCallback, useEffect, useState } from 'react'


export function useMediaQuery(width) {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    e.matches
      ? setTargetReached(true)
      : setTargetReached(false)
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`)

    media.addEventListener('change', updateTarget)
    media.matches && setTargetReached(true)

    return () => media.removeEventListener('change', updateTarget)
  }, [updateTarget, width])

  return targetReached
}
