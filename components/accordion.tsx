import React, { useState } from 'react'

import { Button, Card } from '@/components/common/.'

import style from './accordion.module.css'


interface AccordionItemProps {
  buttonID: string,
  buttonTitle: string,
  content: string | React.ReactNode,
  cardID: string,
}

interface AccordionProps {
  accContainerTag?: keyof JSX.IntrinsicElements,
  accWrapTag?: keyof JSX.IntrinsicElements,
  buttonWrapTag?: keyof JSX.IntrinsicElements,
  cardWrapTag?: keyof JSX.IntrinsicElements,
  data: AccordionItemProps[]
}


export function Accordion({
  accContainerTag,
  accWrapTag,
  buttonWrapTag,
  cardWrapTag,
  data}: AccordionProps) {
  
  const AccWrapTag = accWrapTag ?? 'div'
  const AccContainerTag = accContainerTag ?? React.Fragment

  let accContainerOpts: {[key: string]: string} = {}

  if (accContainerTag) {
    accContainerOpts['className'] = `${style.container}`
  }
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  const handleClick = (index: number) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index)
  }
  
  return (
    <AccWrapTag className={style.wrap}>
      {data.map((item, index) => (
        <AccContainerTag key={index} {...accContainerOpts}>
          <Button
            buttonID={item.buttonID}
            buttonWrapTag={buttonWrapTag}
            controlledID={item.cardID}
            handleClick={() => handleClick(index)}
            isActive={index === activeIndex}
            isExpandable
            withStyle='accordion'
          >
            { item.buttonTitle }
          </Button>
          
          <Card
            cardID={item.cardID}
            cardWrapTag={cardWrapTag}
            controllingID={item.buttonID}
            isActive={index === activeIndex}
            withStyle='accordion'
          >
            { item.content }
          </Card>
        </AccContainerTag>  
      ))}
    </AccWrapTag>
  )
}
