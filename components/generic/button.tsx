import style from './button.module.css'


const RoleEnum = {
  Button: 'button',
  Tab: 'tab'
} as const

const StyleEnum = {
  Accordion: 'accordion',
  Inactive: 'inactive',
  Regular: 'regular',
  Stripped: 'stripped',
  Tab: 'tab'
} as const

type StyleEnum = typeof StyleEnum[keyof typeof StyleEnum]
type RoleEnum = typeof RoleEnum[keyof typeof RoleEnum]


interface ButtonProps {
  buttonId: string,
  buttonRole: RoleEnum,
  children: React.ReactNode,
  controlledEl: string,
  handleClick: () => void,
  isActive: boolean,
  withStyle: StyleEnum
}


export function Button({
  buttonId,
  buttonRole = RoleEnum.Button,
  children,
  controlledEl,
  handleClick,
  isActive,
  withStyle = StyleEnum.Regular
}: ButtonProps) {

  const buttonStyle = `${withStyle}_style`

  return (
    <button
      aria-expanded={isActive ? 'true' : 'false'}
      aria-controls={controlledEl}
      aria-selected={isActive ? 'true' : 'false'}
      id={buttonId}
      className={style[buttonStyle]}
      onClick={handleClick}
      role={buttonRole}
      tabIndex={isActive ? -1 : 0}
    >
      { children }
    </button>
  )
}
