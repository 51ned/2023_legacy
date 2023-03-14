import cn from 'classnames'

import type { HeaderProps } from '@/components/article/interface'


export function TextHeader({
  children,
  level,
  size,
  withPadding}: HeaderProps) {
    
  const Tag: keyof JSX.IntrinsicElements = `h${level}`

  const textHeaderStyle = size ? `${size}-font-style` : `h${level}-font-style`

  const className = cn(textHeaderStyle, {
    ['paragraph']: withPadding
  })

  return (
    <Tag className={className}>
      { children }
    </Tag>
  )
}
