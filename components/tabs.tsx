import React, { useState } from 'react'

import { Button, Card } from '@/components/.'
import type { ContentProps } from '@/components/article/interface'

import style from './tabs.module.css'


export function Tabs({data}: ContentProps) {
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
    <>
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
            cardWrapTag='section'
            controllingID={item.buttonID}
            direction={state.clickDirection}
            isActive={index === state.activeIndex}
            withStyle='tab'
          />
        </React.Fragment>
      ))}
    </>
  )
}
