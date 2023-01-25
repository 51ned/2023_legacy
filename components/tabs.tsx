import React, { useState } from 'react'

import { Button, Card, TextHead } from '@/components/common/.'

import style from './tabs.module.css'


interface TabsItemProps {
  buttonID: string,
  buttonTitle: string,
  content: React.ReactNode | string,
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
    <div className={style.wrap}>
      <div className={style.list_container}>
        <ul className={style.list} role='tablist'>
          {data.map((item, index) => (
            <li key={index} role='presentation'>
              <Button
                buttonID={item.buttonID}
                controlledID={item.contentID}
                handleClick={() => handleClick(index)}
                isActive={index === activeIndex}
                withStyle='tabs'
              >
                { item.buttonTitle }
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Card
              contentID={item.contentID}
              contentWrapTag='article'
              controllingID={item.buttonID}
              isActive={index === activeIndex}
              withStyle='tabs'
            >
              <TextHead level='2'>
                { item.buttonTitle }
              </TextHead>

              { item.content }
            </Card>
          </React.Fragment>
        ))}
      </>
    </div>
  )
}
