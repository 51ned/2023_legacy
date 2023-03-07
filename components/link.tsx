import Link from 'next/link'

import type { LinkProps } from '@/components/article/interface'

import style from './link.module.css'


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
