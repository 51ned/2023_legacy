import cn from 'classnames'

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

  const className = cn({
    [`${extraStyle}`]: extraStyle,
    [`${withColor}-color`]: withColor,
    [`${withSize}-font-style`]: withSize
  })
  
  return (
    <Link
      className={className}
      href={url}
      title={title}
    >
      { children ? children : text }
    </Link>
  )
}