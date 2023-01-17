import React from 'react'

import { Plus } from './'

import style from './button.module.css'


const StyleEnum = {
  Accordion: 'accordion',
  Inactive: 'inactive',
  Regular: 'regular',
  Stripped: 'stripped',
  Tab: 'tab'
} as const

type StyleEnum = typeof StyleEnum[keyof typeof StyleEnum]


interface ButtonProps {
  buttonID: string,
  buttonTitle: React.ReactNode,
  buttonWrap?: keyof JSX.IntrinsicElements,
  controlledID: string,
  handleClick: () => void,
  isActive: boolean,
  isExpandable?: boolean,
  withStyle?: StyleEnum
}


export function Button({
  buttonID,
  buttonTitle,
  buttonWrap,
  controlledID,
  handleClick,
  isActive,
  isExpandable = true,
  withStyle = StyleEnum.Regular
}: ButtonProps) {
  const Tag = buttonWrap ?? React.Fragment
  
  const buttonStyle = isActive ? `${withStyle}_style_active` : `${withStyle}_style`

  let buttonOpts: {[key: string]: string} = {} 
  
  if (withStyle === 'inactive') {
    buttonOpts['disabled'] = 'disabled' 
  } else if (withStyle === 'tab') {
    buttonOpts['aria-selected'] = isActive ? 'true' : 'false'
    buttonOpts['role'] = 'tab'
  }
  
  if (isExpandable) {
    buttonOpts['aria-expanded'] = isActive ? 'true' : 'false'
  }
  
  return (
    <Tag>
      <button
        aria-controls={controlledID}
        className={`${style.common_style} ${style[buttonStyle]}`}
        id={buttonID}
        onClick={handleClick}
        {...buttonOpts}
      >
        { buttonTitle }
        
        { withStyle === StyleEnum.Accordion && <Plus /> }
      </button>
    </Tag>
  )
}
