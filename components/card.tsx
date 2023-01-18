import style from './card.module.css'


const StyleEnum = {
  Expanding: 'expanding',
  Regular: 'regular'
} as const

type StyleEnum = typeof StyleEnum[keyof typeof StyleEnum]


interface CardProps {
  children: React.ReactNode,
  contentID?: string,
  contentWrapTag?: keyof JSX.IntrinsicElements,
  controllingID?: string,
  isActive?: boolean,
  withStyle: StyleEnum
}


export function Card({
  children,
  contentID,
  contentWrapTag: ContentWrapTag = 'div',
  controllingID,
  isActive,
  withStyle = StyleEnum.Regular}: CardProps) {

  let contentWrapOpts: {[key: string]: string} = {}

  if (ContentWrapTag === 'dialog') {
    contentWrapOpts['open'] = `${isActive}`
  }  
    
  const cardStyle = `${withStyle}_style`

  return (
    <ContentWrapTag
      aria-labelledby={controllingID}
      className={isActive ? style[cardStyle] : 'visually_hidden'}
      id={contentID}
      {...contentWrapOpts}
    >
      { children }
    </ContentWrapTag>
  )
}
