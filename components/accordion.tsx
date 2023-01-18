import React, { useState } from 'react'

import { Button, Card } from './'

import style from './accordion.module.css'


interface AccordionItemProps {
  buttonID: string,
  buttonTitle: string,
  content: string | React.ReactNode,
  contentID: string,
}

interface AccordionProps {
  accContainerTag?: keyof JSX.IntrinsicElements,
  accWrapTag?: keyof JSX.IntrinsicElements,
  buttonWrapTag?: keyof JSX.IntrinsicElements,
  contentWrapTag?: keyof JSX.IntrinsicElements,
  data: AccordionItemProps[]
}


export function Accordion({
  accContainerTag,
  accWrapTag: AccWrapTag = 'div',
  buttonWrapTag,
  contentWrapTag,
  data}: AccordionProps) {
    
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
      {(data).map((item, index) => (
        <AccContainerTag key={index} {...accContainerOpts}>
          <Button
            buttonID={item.buttonID}
            buttonWrapTag={buttonWrapTag}
            controlledID={item.contentID}
            handleClick={() => handleClick(index)}
            isActive={index === activeIndex}
            isExpandable
            withStyle='accordion'
          >
            { item.buttonTitle }
          </Button>
          
          <Card
            contentID={item.contentID}
            contentWrapTag={contentWrapTag}
            controllingID={item.buttonID}
            isActive={index === activeIndex}
            withStyle='expanding'
          >
            { item.content }
          </Card>
        </AccContainerTag>  
      ))}
    </AccWrapTag>
  )
}
