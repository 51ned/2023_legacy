import type { CardStyleEnum, CardDataProps } from '@/components/article/interface'

import { RenderCard } from '@/utils/render'

import style from './card.module.css'


interface CardProps {
  cardData?: CardDataProps,
  cardID?: string,
  cardWrapTag?: keyof JSX.IntrinsicElements,
  children?: React.ReactNode
  controllingID?: string,
  direction?: string,
  isActive?: boolean,
  withStyle?: CardStyleEnum
}


export function Card({
  cardData,
  cardID,
  cardWrapTag,
  children,
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
  
  return (
    <CardWrapTag
      aria-labelledby={controllingID}
      className={cardStyles}
      id={cardID}
      {...otherCardOpts}
    >
      { cardData ? RenderCard(cardData) : children }
    </CardWrapTag>
  )
}
