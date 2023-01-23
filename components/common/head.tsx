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
  level: TextHeadLevelEnum,
  size?: TextHeadSizeEnum,
  text: string
}


export function TextHead({
  level,
  size,
  text}: TextHeadingProps) {
    
  const Tag: keyof JSX.IntrinsicElements = `h${level}`

  let textHeadStyle

  size ? (textHeadStyle = `${size}_font_style`) : (textHeadStyle = `h${level}_font_style`)

  return (
    <Tag className={textHeadStyle}>
      { text }
    </Tag>
  )
}
