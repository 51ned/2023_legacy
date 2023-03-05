import { TextSizeEnum } from '@/components/text'


type TextHeaderLevelEnum = '1' | '2' | '3'

interface TextHeaderingProps {
  children: React.ReactNode,
  level: TextHeaderLevelEnum,
  size?: TextSizeEnum,
  withPadding?: boolean
}


export function TextHeader({
  children,
  level,
  size,
  withPadding}: TextHeaderingProps) {
    
  const Tag: keyof JSX.IntrinsicElements = `h${level}`

  const textHeaderStyle = size ? `${size}_font_style` : `h${level}_font_style`
  const textHeaderPadding = withPadding ? 'paragraph' : ''

  return (
    <Tag className={`${textHeaderStyle} ${textHeaderPadding}`}>
      { children }
    </Tag>
  )
}
