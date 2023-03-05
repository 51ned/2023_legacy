import style from './box.module.css'


type BoxRoleEnum = 'container' | 'wrap'

interface BoxProps {
  children: React.ReactNode,
  withRole: BoxRoleEnum,
  withStyle?: string,
  withTag: keyof JSX.IntrinsicElements
}


export function Box({
  children,
  withRole,
  withStyle,
  withTag: BoxTag
}: BoxProps) {

  return (
    <BoxTag className={`${style[withRole]} ${withStyle ?? ''}`}>
      { children }
    </BoxTag>
  )
}
