import { useState } from 'react'

import { Button, Card } from './'


interface AccordionItemProps {
  buttonID: string,
  buttonTitle: string,
  content: string | React.ReactNode,
  contentID: string,
}

interface AccordionProps {
  containerTag?: keyof JSX.IntrinsicElements,
  contentTag?: keyof JSX.IntrinsicElements,
  data: AccordionItemProps[],
  buttonTag?: keyof JSX.IntrinsicElements,
}


export function Accordion({
  containerTag: Tag = 'div',
  ...pr
}: AccordionProps) {
  
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
            buttonTag={pr.buttonTag}
            buttonTitle={item.buttonTitle}
            controlledID={item.contentID}
            handleClick={() => handleClick(index)}
            isActive={index === activeIndex}
            isExpandable
            tabIndex={0}
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
