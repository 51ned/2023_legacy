const HeadLevelEnum = {
  1: '1',
  2: '2'
} as const

type HeadLevelEnum = typeof HeadLevelEnum[keyof typeof HeadLevelEnum]


interface HeadingProps {
  level: HeadLevelEnum,
  text: string
}


export function Head({
  level,
  text}: HeadingProps) {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`

  return (
    <Tag className={`h${level}_font_style`}>
      { text }
    </Tag>
  )
}