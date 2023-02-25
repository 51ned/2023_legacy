import { useState, useEffect } from 'react'


export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    
      window.addEventListener('resize', handleResize)
     
      handleResize()
    
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  let isDesktop = true

  if (windowSize.width <= 1240) {
    isDesktop = false
  }

  return isDesktop
}
