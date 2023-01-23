import style from './card.module.css'


const StyleEnum = {
  Accordion: 'accordion',
  Dialog: 'dialog',
  Regular: 'regular',
  Tabs: 'tabs'
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

  let contentWrapOpts: {[key: string]: boolean | undefined} = {}

  if (['accordion', 'tabs'].includes(withStyle)) {
    contentWrapOpts['hidden'] = !isActive
  }

  withStyle === 'dialog' && (contentWrapOpts['open'] = isActive)

  return (
    <ContentWrapTag
      aria-labelledby={controllingID}
      className={style[`${withStyle}_style`]}
      id={contentID}
      {...contentWrapOpts}
    >
      { children }
    </ContentWrapTag>
  )
}
