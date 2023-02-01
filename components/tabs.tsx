import React, { useState } from 'react'

import { Button, Card, TextHead } from '@/components/common/.'

import style from './tabs.module.css'


interface TabsItemProps {
  buttonID: string,
  buttonTitle: string,
  content: React.ReactNode | string,
  cardID: string,
}

interface TabsProps {
  data: TabsItemProps[]
}


export function Tabs({data}: TabsProps) {
  const [state, setState] = useState({
    activeIndex: 0,
    clickDirection: '',
  })

  const handleClick = (index: number) => {
    setState({
      activeIndex: index,
      clickDirection: index > state.activeIndex ? 'down' : 'up'
    })
  }
  
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <ul className={style.list} role='tablist'>
          {data.map((item, index) => (
            <li key={index} role='presentation'>
              <Button
                buttonID={item.buttonID}
                controlledID={item.cardID}
                handleClick={() => handleClick(index)}
                isActive={index === state.activeIndex}
                withStyle='tab'
              >
                { item.buttonTitle }
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Card
            cardID={item.cardID}
            cardWrapTag='article'
            controllingID={item.buttonID}
            direction={state.clickDirection}
            isActive={index === state.activeIndex}
            withStyle='tab'
          >
            <TextHead level='2'>
              { item.buttonTitle }
            </TextHead>

            { item.content }
          </Card>
        </React.Fragment>
      ))}
    </div>
  )
}
