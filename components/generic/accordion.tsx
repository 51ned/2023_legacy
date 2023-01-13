import { useState } from 'react'

import { Button, Card } from './'


interface AccordionItemProps {
  buttonID: string,
  buttonTitle: string,
  content: string | React.ReactNode,
  contentID: string
}
interface AccordionProps {
  data: AccordionItemProps[]
}


export function Accordion(pr: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const handleClick = (index: number) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index)
  }
  
  return (
    <>
      {(pr.data).map((item, index) => (
        <div key={index}>
          <Button
            buttonID={item.buttonID}
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
            controllingID={item.buttonID}
            isActive={index === activeIndex}
          />
        </div>  
      ))}
    </>
  )
}
