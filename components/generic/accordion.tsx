// accWrapTag: тэг, стили
// accContainer?: тэг
// buttonWrapTag: тэг, стили
// cardWrap: ...

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

  let accStyleOpts: {[key: string]: string} = {}

  if (accContainerTag) {
    accStyleOpts['className'] = `${style.container}`
  }
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const handleClick = (index: number) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index)
  }
  
  return (
    <AccWrapTag className={style.wrap}>
      {(data).map((item, index) => (
        <AccContainerTag key={index} {...accStyleOpts}>
          <Button
            buttonID={item.buttonID}
            buttonTitle={item.buttonTitle}
            buttonWrapTag={buttonWrapTag}
            controlledID={item.contentID}
            handleClick={() => handleClick(index)}
            isActive={index === activeIndex}
            isExpandable
            withStyle='accordion'
          />
          
          <Card
            content={item.content}
            contentID={item.contentID}
            contentWrapTag={contentWrapTag}
            controllingID={item.buttonID}
            isActive={index === activeIndex}
            withStyle='expanding'
          />
        </AccContainerTag>  
      ))}
    </AccWrapTag>
  )
}
