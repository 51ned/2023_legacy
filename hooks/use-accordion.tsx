import { useState } from 'react'


export function useAccordion(actualIndex: number) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  actualIndex === activeIndex
    ? setActiveIndex(null)
    : setActiveIndex(actualIndex)
  
  return activeIndex
}