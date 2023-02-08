import style from './box.module.css'


const BoxRoleEnum = {
  Container: 'container',
  Wrap: 'wrap'
} as const

type BoxRoleEnum = typeof BoxRoleEnum[keyof typeof BoxRoleEnum]


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

  const moreStyles = withStyle ? withStyle : ''

  return (
    <BoxTag className={`${style[withRole]} ${style[moreStyles]}`}>
      { children }
    </BoxTag>
  )
}
