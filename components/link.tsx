import Link from 'next/link'

import { TextColorEnum, TextSizeEnum } from '@/components/text'

import style from './link.module.css'


export interface LinkProps {
  children?: React.ReactNode,
  extraStyle?: string
  text?: React.ReactNode
  title: string,
  url: string,
  withColor?: TextColorEnum,
  withSize?: TextSizeEnum,
}


export function CustomLink ({
  children,
  extraStyle,
  title,
  text,
  url,
  withColor = 'interactive',
  withSize = 'smaller'
}: LinkProps) {

  const linkExtraStyle = extraStyle ? style[extraStyle] : ''

  const linkColor = !linkExtraStyle ? `${withColor}-color` : ''
  const linkStyle = !linkExtraStyle ? `${withSize}-font-style` : ''
  
  
  return (
    <Link
      className={`${linkColor} ${linkStyle} ${linkExtraStyle}`}
      href={url}
      title={title}
    >
      { children ? children : text }
    </Link>
  )
}
