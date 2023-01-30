import style from './card.module.css'


const CardStyleEnum = {
  Accordion: 'accordion',
  Dialog: 'dialog',
  Regular: 'regular',
  Tab: 'tabs'
} as const

export type CardStyleEnum = typeof CardStyleEnum[keyof typeof CardStyleEnum]


interface CardProps {
  children: React.ReactNode,
  contentID?: string,
  contentWrapTag?: keyof JSX.IntrinsicElements,
  controllingID?: string,
  isActive?: boolean,
  withStyle?: CardStyleEnum
}


export function Card({
  children,
  contentID,
  contentWrapTag,
  controllingID,
  isActive,
  withStyle = 'regular'}: CardProps) {

  const ContentWrapTag = contentWrapTag ?? 'div'  

  let contentWrapOpts: {[key: string]: boolean | undefined} = {}

  if (['accordion', 'tabs'].includes(withStyle)) {
    contentWrapOpts['hidden'] = !isActive
  } else if (withStyle === 'dialog') {
    contentWrapOpts['open'] = isActive
  }

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
