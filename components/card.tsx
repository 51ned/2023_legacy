import React, { useMemo } from 'react'

import {
  CustomLink as Link, LinkProps,
  List, ListProps,
  Text,
  TextHeader as Header,
} from '@/components/.'

import style from './card.module.css'


const CardStyleEnum = {
  Accordion: 'accordion',
  Dialog: 'dialog',
  Regular: 'regular',
  tab: 'tab'
} as const

type CardStyleEnum = typeof CardStyleEnum[keyof typeof CardStyleEnum]

interface CardTextProps {
  list?: ListProps,
  paragraph?: string
}

export interface CardDataProps {
  header?: string,
  link?: LinkProps,
  text: CardTextProps[] 
}

interface CardProps {
  cardData: CardDataProps,
  cardID?: string,
  cardWrapTag?: keyof JSX.IntrinsicElements,
  controllingID?: string,
  direction?: string,
  isActive?: boolean,
  withStyle?: CardStyleEnum
}


export function Card({
  cardData,
  cardID,
  cardWrapTag,
  controllingID,
  direction,
  isActive,
  withStyle = 'regular'}: CardProps) {
  
  const CardWrapTag = cardWrapTag ?? 'div'
  
  let otherCardOpts: {[key: string]: boolean | string | undefined} = {}

  switch (withStyle) {
    case ('accordion'):
      otherCardOpts['hidden'] = !isActive
      break
    case 'tab':
      otherCardOpts['hidden'] = !isActive
      otherCardOpts['role'] = 'tabpanel'
      break
    case 'dialog':
      otherCardOpts['open'] = isActive
      break
  }

  let cardStyles = `${style[withStyle]}`

  if (isActive && direction) {
    cardStyles += ` ${style[`slide_${direction}`]}`
  }

  const renderCardData = useMemo(() => {
    let arr: React.ReactNode[] = []

    for (let key of Object.keys(cardData)) {
      if (cardData.header && key === 'header') {
        arr.push(<Header level='3' withPadding>{ cardData.header }</Header>)
      }

      if (cardData.text && key === 'text') {
        for (let item of cardData.text) {
          item.paragraph && arr.push(<Text withPadding>{ item.paragraph }</Text>)
          item.list && arr.push(<List items={item.list.items} withPadding withType={item.list.withType} />)
        }
      }
      
      if (cardData.link && key === 'link') {
        arr.push(
          <Link
            href={cardData.link.href}
            title={cardData.link.title}
          >
            { cardData.link.children }
          </Link>
        )
      }
    }
    
    return arr.map((item, index) => {
      return (
        <React.Fragment key={index}>
          { item }
        </React.Fragment>
      )
    })
  }, [cardData])
  
  return (
    <CardWrapTag
      aria-labelledby={controllingID}
      className={cardStyles}
      id={cardID}
      {...otherCardOpts}
    >
      { renderCardData }
    </CardWrapTag>
  )
}
