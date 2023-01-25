import React from 'react'

import { Plus } from '@/components/icons/.'

import style from './button.module.css'


const StyleEnum = {
  Accordion: 'accordion',
  Regular: 'regular',
  Stripped: 'stripped',
  Tab: 'tabs'
} as const

type StyleEnum = typeof StyleEnum[keyof typeof StyleEnum]


interface ButtonProps {
  buttonID?: string,
  buttonWrapTag?: keyof JSX.IntrinsicElements,
  controlledID?: string,
  children: React.ReactNode,
  handleClick: () => void,
  isActive?: boolean,
  isExpandable?: boolean,
  withStyle?: StyleEnum
}


export function Button({
  buttonID,
  buttonWrapTag,
  controlledID,
  children,
  handleClick,
  isActive,
  isExpandable = true,
  withStyle}: ButtonProps) {
    
  const ButtonWrapTag = buttonWrapTag ?? React.Fragment

  let buttonWrapOpts: {[key: string]: string} = {}

  if (buttonWrapTag) {
    buttonWrapOpts['className'] = `${style.container}`
  }

  let buttonOpts: {[key: string]: boolean | string | undefined} = {}

  if (withStyle === 'tabs') {
    buttonOpts['aria-selected'] = isActive
    buttonOpts['role'] = 'tab'
  }
  
  if (isExpandable) {
    buttonOpts['aria-expanded'] = isActive
  }

  const icon = withStyle === StyleEnum.Accordion && <Plus />
  
  return (
    <ButtonWrapTag {...buttonWrapOpts}>
      <button
        aria-controls={controlledID}
        className={style[`${withStyle}_style`]}
        id={buttonID}
        onClick={handleClick}
        {...buttonOpts}
      >
        { children }
        { icon }
      </button>
    </ButtonWrapTag>
  )
}
