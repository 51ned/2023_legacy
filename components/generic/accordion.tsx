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
  buttonContainer?: keyof JSX.IntrinsicElements,
  containerTag?: keyof JSX.IntrinsicElements,
  contentTag?: keyof JSX.IntrinsicElements,
  data: AccordionItemProps[]
}


export function Accordion({
  buttonContainer,
  containerTag,
  contentTag,
  data
}: AccordionProps) {
  let Tag = containerTag ?? React.Fragment
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const handleClick = (index: number) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index)
  }
  
  return (
    <div className={style.wrap}>
      {(data).map((item, index) => (
        <Tag key={index} className={style.container}>
          <Button
            buttonID={item.buttonID}
            buttonTitle={item.buttonTitle}
            buttonContainer={buttonContainer}
            controlledID={item.contentID}
            handleClick={() => handleClick(index)}
            isActive={index === activeIndex}
            isExpandable
            withStyle='accordion'
          />
          
          <Card
            content={item.content}
            contentID={item.contentID}
            contentTag={contentTag}
            controllingID={item.buttonID}
            isActive={index === activeIndex}
            withStyle='expanding'
          />
        </Tag>  
      ))}
    </div>
  )
}
