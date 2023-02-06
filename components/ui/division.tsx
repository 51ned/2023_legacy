import style from './division.module.css'


const DivisionRoleEnum = {
  Container: 'container',
  Wrap: 'wrap'
} as const

type DivisionRoleEnum = typeof DivisionRoleEnum[keyof typeof DivisionRoleEnum]


interface DivisionProps {
  children: React.ReactNode,
  withRole: DivisionRoleEnum,
  withStyle?: string,
  withTag: keyof JSX.IntrinsicElements
}


export function Division({
  children,
  withRole,
  withStyle,
  withTag: DivisionTag
}: DivisionProps) {

  const moreStyles = withStyle ? withStyle : ''

  return (
    <DivisionTag className={`${style[withRole]} ${style[moreStyles]}`}>
      { children }
    </DivisionTag>
  )
}
