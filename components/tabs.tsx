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
              buttonTitle={item.buttonTitle}
              controlledID={item.contentID}
              handleClick={() => handleClick(index)}
              isActive={index === activeIndex}
              withStyle='tab'
            />
          </li>
        ))}
      </ul>

      <>
        {(data).map((item, index) => (
          <React.Fragment key={index}>
            <Card
              content={item.content}
              contentID={item.contentID}
              controllingID={item.buttonID}
              isActive={index === activeIndex}
              withStyle='expanding'
            />
          </React.Fragment>
        ))}
      </>
    </article>
  )
}
