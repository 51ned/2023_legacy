import React, { useState } from 'react'

import { Button, Card, CardDataProps } from '@/components/.'

import style from './tabs.module.css'


interface TabsItemProps {
  buttonID: string,
  buttonText: string,
  buttonTitle: string,
  cardData: CardDataProps,
  cardID: string
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
    let direction = ''

    if (index > state.activeIndex) {
      direction += 'down'
    } else if (index < state.activeIndex) {
      direction += 'up'
    } else {
      return
    }
    
    setState({
      activeIndex: index,
      clickDirection: direction
    })
  }
  
  return (
    <article className={style.wrap}>
      <div className={style.buttons}>
        <ul className={style.list} role='tablist'>
          {data.map((item, index) => (
            <li key={index} role='presentation'>
              <Button
                buttonID={item.buttonID}
                controlledID={item.cardID}
                handleClick={() => handleClick(index)}
                isActive={index === state.activeIndex}
                withStyle='tab'
                withTitle={item.buttonTitle}
              >
                { item.buttonText }
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Card
            cardData={item.cardData}
            cardID={item.cardID}
            cardWrapTag='div'
            controllingID={item.buttonID}
            direction={state.clickDirection}
            isActive={index === state.activeIndex}
            withStyle='tab'
          />
        </React.Fragment>
      ))}
    </article>
  )
}
