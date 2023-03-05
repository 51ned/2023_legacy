import React from 'react'

import { Burger, Close, Plus } from '@/components/icons'

import style from './button.module.css'


type IconEnum = 'burger' | 'close' | 'plus'
type StyleEnum = 'accordion' | 'regular' | 'stripped' | 'tab'

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
    
  const ButtonWrapTag = buttonWrapTag ?? React.Fragment

  let buttonWrapOpts: {[key: string]: string} = {}

  if (buttonWrapTag) {
    buttonWrapOpts['className'] = `${style.container}`
  }

  let buttonOpts: {[key: string]: boolean | number | string | undefined} = {}

  if (withStyle === 'tab') {
    buttonOpts['aria-selected'] = isActive
    buttonOpts['role'] = 'tab'
  }
  
  if (isExpandable) {
    buttonOpts['aria-expanded'] = isActive
  }

  let icon
  
  switch (withIcon) {
    case ('burger'):
      icon = <Burger />
      break
    case 'close':
      icon = <Close />
      break
    case 'plus':
      icon = <Plus />
      break
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
