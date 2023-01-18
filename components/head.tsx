const TextHeadLevelEnum = {
  1: '1',
  2: '2'
} as const

type HeadLevelEnum = typeof TextHeadLevelEnum[keyof typeof TextHeadLevelEnum]


interface TextHeadingProps {
  level: HeadLevelEnum,
  text: string
}


export function TextHead({
  level,
  text}: TextHeadingProps) {
    
  const Tag: keyof JSX.IntrinsicElements = `h${level}`

  return (
    <Tag className={`h${level}_font_style`}>
      { text }
    </Tag>
  )
}