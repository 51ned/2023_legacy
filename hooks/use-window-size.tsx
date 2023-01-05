import { useState, useEffect } from 'react'


interface WindowSizeProps {
  height: number | undefined,
  width: number | undefined
}


export default function useWindowSize({
  height = undefined,
  width = undefined}: WindowSizeProps) {

  const [windowSize, setWindowSize] = useState({height, width})

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

  return windowSize
}
