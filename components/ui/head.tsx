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
}


export function TextHead({
  children,
  level,
  size}: TextHeadingProps) {
    
  const Tag: keyof JSX.IntrinsicElements = `h${level}`

  let textHeadStyle

  size ? (textHeadStyle = `${size}_font_style`) : (textHeadStyle = `h${level}_font_style`)

  return (
    <Tag className={textHeadStyle}>
      { children }
    </Tag>
  )
}
