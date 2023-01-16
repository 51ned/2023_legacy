import React, { useState } from 'react'

import { Button, Card } from './'


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


export function Accordion(pr: AccordionProps) {
  const Tag = pr.containerTag ?? React.Fragment

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const handleClick = (index: number) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index)
  }
  
  return (
    <>
      {(pr.data).map((item, index) => (
        <Tag key={index}>
          <Button
            buttonID={item.buttonID}
            buttonWrap={pr.buttonWrap}
            buttonTitle={item.buttonTitle}
            controlledID={item.contentID}
            handleClick={() => handleClick(index)}
            isActive={index === activeIndex}
            isExpandable
            withStyle='accordion'
          />
          
          <Card
            content={item.content}
            contentID={item.contentID}
            contentTag={pr.contentTag}
            controllingID={item.buttonID}
            isActive={index === activeIndex}
            withStyle='expanding'
          />
        </Tag>  
      ))}
    </>
  )
}
