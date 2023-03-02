import Link from 'next/link'

import { ColorEnum, SizeEnum } from '@/components/text'

import style from './link.module.css'


export interface LinkProps {
  children?: React.ReactNode,
  extraStyle?: string
  text?: React.ReactNode
  title: string,
  url: string,
  withColor?: ColorEnum,
  withSize?: SizeEnum,
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
