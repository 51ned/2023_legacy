import { useState } from 'react'

import { Button, Card } from './'

import style from './accordion.module.css'

import { data } from '@/lib/data'


interface AccordionProps {}


export function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const handleClick = (index: number) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index)
  }

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <Button
            buttonID={item.buttonID}
            controlledID={item.cardID}
            handleClick={() => handleClick(index)}
            isActive={index === activeIndex}
            isExpandable
            title={item.title}
            withStyle='accordion'
          />
          <Card
            content={item.text}
            contentID={item.cardID}
            controllingID={item.buttonID}
            isActive={index === activeIndex}
          />
        </div>
      ))}
    </>
  )
}
