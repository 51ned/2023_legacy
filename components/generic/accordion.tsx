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
  buttonWrap?: keyof JSX.IntrinsicElements,
  containerTag?: keyof JSX.IntrinsicElements,
  contentTag?: keyof JSX.IntrinsicElements,
  data: AccordionItemProps[]
}


export function Accordion({
  buttonWrap,
  containerTag,
  contentTag,
  data
}: AccordionProps) {
  const Tag = containerTag ?? React.Fragment
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const handleClick = (index: number) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index)
  }
  
  return (
    <>
      {(data).map((item, index) => (
        <Tag key={index}>
          <Button
            buttonID={item.buttonID}
            buttonTitle={item.buttonTitle}
            buttonWrap={buttonWrap}
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
    </>
  )
}
