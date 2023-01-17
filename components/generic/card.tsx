import style from './card.module.css'


const StyleEnum = {
  Expanding: 'expanding',
  Regular: 'regular'
} as const

type StyleEnum = typeof StyleEnum[keyof typeof StyleEnum]


interface CardProps {
  content: React.ReactNode,
  contentID: string,
  contentTag?: keyof JSX.IntrinsicElements,
  controllingID?: string,
  isActive?: boolean,
  withStyle: StyleEnum
}


export function Card({
  content,
  contentID,
  contentTag: Tag = 'div',
  controllingID,
  isActive,
  withStyle = StyleEnum.Regular
}: CardProps) {
  const cardStyle = `${withStyle}_style`

  return (
    <Tag
      aria-labelledby={controllingID}
      className={isActive ? style[cardStyle] : 'visually_hidden'}
      id={contentID}
    >
      { content }
    </Tag>
  )
}
