const TextHeadSizeEnum = {
  Smallest: 'smallest',
  Smaller: 'smaller',
  Regular: 'regular',
  Subtitle: 'subtitle'
} as const

const TextHeadLevelEnum = {
  1: '1',
  2: '2'
} as const

type TextHeadLevelEnum = typeof TextHeadLevelEnum[keyof typeof TextHeadLevelEnum]
type TextHeadSizeEnum = typeof TextHeadSizeEnum[keyof typeof TextHeadSizeEnum]


interface TextHeadingProps {
  children: React.ReactNode,
  level: TextHeadLevelEnum,
  size?: TextHeadSizeEnum,
  withPadding?: boolean
}


export function TextHead({
  children,
  level,
  size,
  withPadding}: TextHeadingProps) {
    
  const Tag: keyof JSX.IntrinsicElements = `h${level}`

  const textHeadStyle = size ? `${size}_font_style` : `h${level}_font_style`
  const textHeadPadding = withPadding ? 'paragraph' : ''

  return (
    <Tag className={`${textHeadStyle} ${textHeadPadding}`}>
      { children }
    </Tag>
  )
}
