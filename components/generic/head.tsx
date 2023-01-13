const HeadLevelEnum = {
  1: '1',
  2: '2'
} as const

type HeadLevelEnum = typeof HeadLevelEnum[keyof typeof HeadLevelEnum]


interface HeadingProps {
  level: HeadLevelEnum,
  text: string
}


export function Head(pr: HeadingProps) {
  const Tag: keyof JSX.IntrinsicElements = `h${pr.level}`

  return (
    <Tag className={`h${pr.level}_font_style`}>
      { pr.text }
    </Tag>
  )
}