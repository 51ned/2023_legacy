import React, { useState } from 'react'

import { Button, Card } from './'

import style from './tabs.module.css'


interface TabsItemProps {
  buttonID: string,
  buttonTitle: string,
  content: string | React.ReactNode,
  contentID: string,
}

interface TabsProps {
  data: TabsItemProps[]
}


export function Tabs({data}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <article className={style.wrap}>
      <ul role='tablist'>
        {(data).map((item, index) => (
          <li key={index} role='presentation'>
            <Button
              buttonID={item.buttonID}
              controlledID={item.contentID}
              handleClick={() => handleClick(index)}
              isActive={index === activeIndex}
              withStyle='tab'
            >
              { item.buttonTitle }
            </Button>
          </li>
        ))}
      </ul>

      <>
        {(data).map((item, index) => (
          <React.Fragment key={index}>
            <Card
              contentID={item.contentID}
              controllingID={item.buttonID}
              isActive={index === activeIndex}
              withStyle='expanding'
            >
              { item.content }
            </Card>
          </React.Fragment>
        ))}
      </>
    </article>
  )
}
