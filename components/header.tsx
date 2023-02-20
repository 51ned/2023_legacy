const TextHeaderSizeEnum = {
  Smallest: 'smallest',
  Smaller: 'smaller',
  Regular: 'regular',
  Subtitle: 'subtitle'
} as const

const TextHeaderLevelEnum = {
  1: '1',
  2: '2',
  3: '3'
} as const

type TextHeaderLevelEnum = typeof TextHeaderLevelEnum[keyof typeof TextHeaderLevelEnum]
type TextHeaderSizeEnum = typeof TextHeaderSizeEnum[keyof typeof TextHeaderSizeEnum]


interface TextHeaderingProps {
  children: React.ReactNode,
  level: TextHeaderLevelEnum,
  size?: TextHeaderSizeEnum,
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
