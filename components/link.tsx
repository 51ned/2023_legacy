import Link from 'next/link'

import style from './link.module.css'


const LinkStyleEnum = {
  Arrow: 'arrow',
  Nav: 'nav',
  Regular: 'regular'
} as const

type LinkStyleEnum = typeof LinkStyleEnum[keyof typeof LinkStyleEnum]


export interface LinkProps {
  children: string,
  href: string,
  title: string,
  withStyle?: LinkStyleEnum
}


export function CustomLink ({
  children,
  href,
  title,
  withStyle = 'regular'
}: LinkProps) {
  
  return (
    <Link href={href} className={style[withStyle]} title={title}>
      { children }
    </Link>
  )
}
