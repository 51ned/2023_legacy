import style from './button.module.css'


const StyleEnum = {
  Accordion: 'accordion',
  Inactive: 'inactive',
  Regular: 'regular',
  Stripped: 'stripped',
  Tab: 'tab'
} as const

type StyleEnum = typeof StyleEnum[keyof typeof StyleEnum]


interface ButtonProps {
  buttonId: string,
  children: React.ReactNode,
  controlledEl: string,
  // handleClick: () => void,
  isActive: boolean,
  isExpandable?: boolean,
  withStyle?: StyleEnum
}


export function Button({
  buttonId,
  children,
  controlledEl,
  // handleClick,
  isActive,
  isExpandable = true,
  withStyle = StyleEnum.Regular
}: ButtonProps) {

  const buttonStyle = `${withStyle}_style`

  let buttonOpts = {}

  if (withStyle === 'inactive') {
    buttonOpts['disabled'] = 'disabled'
  }
  
  if (withStyle === 'tab') {
    buttonOpts['aria-selected'] = isActive ? 'true' : 'false'
  }
  
  if (isExpandable) {
    buttonOpts['aria-expanded'] = isActive ? 'true' : 'false'
  }

  return (
    <button
      aria-controls={controlledEl}
      id={buttonId}
      className={style[buttonStyle]}
      // onClick={handleClick}
      role={withStyle === 'tab' ? 'tab' : 'button'}
      tabIndex={isActive ? -1 : 0}
      {...buttonOpts}
    >
      { children }
    </button>
  )
}
