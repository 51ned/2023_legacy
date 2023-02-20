import React from 'react'

import { Burger, Plus } from '@/components/icons'

import style from './button.module.css'


const IconEnum = {
  Burger: 'burger',
  Plus: 'plus'
} as const

const StyleEnum = {
  Accordion: 'accordion',
  Regular: 'regular',
  Stripped: 'stripped',
  Tab: 'tab'
} as const

type IconEnum = typeof IconEnum[keyof typeof IconEnum]
type StyleEnum = typeof StyleEnum[keyof typeof StyleEnum]


interface ButtonProps {
  buttonID?: string,
  buttonWrapTag?: keyof JSX.IntrinsicElements,
  controlledID?: string,
  children?: React.ReactNode,
  handleClick: () => void,
  isActive?: boolean,
  isExpandable?: boolean,
  withIcon?: IconEnum,
  withStyle: StyleEnum,
  withTitle: string
}


export function Button({
  buttonID,
  buttonWrapTag,
  controlledID,
  children,
  handleClick,
  isActive,
  isExpandable = true,
  withIcon,
  withStyle,
  withTitle}: ButtonProps) {
    
  // Define Button's wrap tag & optional arguments  
  const ButtonWrapTag = buttonWrapTag ?? React.Fragment

  let buttonWrapOpts: {[key: string]: string} = {}

  if (buttonWrapTag) {
    buttonWrapOpts['className'] = `${style.container}`
  }

  // Define Button's optional arguments 
  let buttonOpts: {[key: string]: boolean | number | string | undefined} = {}

  if (withStyle === 'tab') {
    buttonOpts['aria-selected'] = isActive
    buttonOpts['role'] = 'tab'
  }
  
  if (isExpandable) {
    buttonOpts['aria-expanded'] = isActive
  }

  // Define Button's icons 
  let icon
  
  if (withIcon === 'burger') {
    icon = <Burger />
  } else if (withIcon === 'plus') {
    icon = <Plus />
  }
  
  return (
    <ButtonWrapTag {...buttonWrapOpts}>
      <button
        aria-controls={controlledID}
        className={style[withStyle]}
        id={buttonID}
        onClick={handleClick}
        title={withTitle}
        {...buttonOpts}
      >
        { children }
        { icon }
      </button>
    </ButtonWrapTag>
  )
}
