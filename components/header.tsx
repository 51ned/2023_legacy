import type { HeaderProps } from '@/components/article/interface'


export function TextHeader({
  children,
  level,
  size,
  withPadding}: HeaderProps) {
    
  const Tag: keyof JSX.IntrinsicElements = `h${level}`

  const textHeaderStyle = size ? `${size}_font_style` : `h${level}_font_style`
  const textHeaderPadding = withPadding ? 'paragraph' : ''

  return (
    <Tag className={`${textHeaderStyle} ${textHeaderPadding}`}>
      { children }
    </Tag>
  )
}
