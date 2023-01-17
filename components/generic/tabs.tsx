import { useState } from 'react'

import { Button, Card } from './'

import { data } from '@/lib/data'


interface TabsProps {}


export function Tabs({}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <></>
  )
}
