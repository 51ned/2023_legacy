import { useState } from 'react'

import { Button, Card } from './'

import { data } from '@/lib/data' // temp

interface TabsProps {}


export function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <></>
  )
}
