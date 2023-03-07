import React, { useState } from 'react'

import { Button, Card } from '@/components/.'
import type { ContentItemProps } from '@/components/article/interface'

import style from './accordion.module.css'


interface AccordionProps {
  accContainerTag?: keyof JSX.IntrinsicElements,
  data: ContentItemProps[],
  accWrapTag?: keyof JSX.IntrinsicElements,
  buttonWrapTag?: keyof JSX.IntrinsicElements,
  cardWrapTag?: keyof JSX.IntrinsicElements
}


export function Accordion({
  accContainerTag,
  data,
  accWrapTag,
  buttonWrapTag,
  cardWrapTag}: AccordionProps) {
  
  const AccWrapTag = accWrapTag ?? React.Fragment
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
            withIcon='plus'
            withStyle='accordion'
            withTitle={item.buttonTitle}
          >
            { item.buttonText }
          </Button>
          
          <Card
            cardID={item.cardID}
            cardData={item.cardData}
            cardWrapTag={cardWrapTag}
            controllingID={item.buttonID}
            isActive={index === activeIndex}
            withStyle='accordion'
          />
        </AccContainerTag>  
      ))}
    </AccWrapTag>
  )
}
