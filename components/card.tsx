import style from './card.module.css'


const CardStyleEnum = {
  Accordion: 'accordion',
  Dialog: 'dialog',
  Regular: 'regular',
  tab: 'tab'
} as const

type CardStyleEnum = typeof CardStyleEnum[keyof typeof CardStyleEnum]


interface CardProps {
  cardID?: string,
  children: React.ReactNode,
  cardWrapTag?: keyof JSX.IntrinsicElements,
  controllingID?: string,
  direction?: string,
  isActive?: boolean,
  withStyle?: CardStyleEnum
}


export function Card({
  cardID,
  children,
  cardWrapTag,
  controllingID,
  direction,
  isActive,
  withStyle = 'regular'}: CardProps) {

  const CardWrapTag = cardWrapTag ?? 'div'  

  let otherCardOpts: {[key: string]: boolean | string | undefined} = {}

  switch (withStyle) {
    case ('accordion' || 'tab'):
      otherCardOpts['hidden'] = !isActive
      break
    case 'tab':
      otherCardOpts['role'] = 'tabpanel'
      break
    case 'dialog':
      otherCardOpts['open'] = isActive
      break
  }
  
  const getClasses = () => {
    let classes = `${style[withStyle]}`

    if (isActive && direction && direction.length > 0) {
      classes += ` ${style[`slide_${direction}`]}`
    }

    return classes
  }
  
  return (
    <CardWrapTag
      aria-labelledby={controllingID}
      className={getClasses()}
      id={cardID}
      {...otherCardOpts}
    >
      { children }
    </CardWrapTag>
  )
}
