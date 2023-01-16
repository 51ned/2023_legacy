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
  controllingID?: string
  isActive?: boolean,
  withStyle: StyleEnum
}


export function Card({
  contentTag: Tag = 'div',
  withStyle = StyleEnum.Regular,
  ...pr
}: CardProps) {

  const cardStyle = `${withStyle}_style`

  return (
    <Tag
      aria-labelledby={pr.controllingID}
      className={pr.isActive ? style[cardStyle] : 'visually_hidden'}
      id={pr.contentID}
      role='region'
    >
      { pr.content }
    </Tag>
  )
}
