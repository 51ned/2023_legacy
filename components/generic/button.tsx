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
  buttonID: string,
  buttonTitle: React.ReactNode,
  controlledID: string,
  handleClick: () => void,
  isActive: boolean,
  isExpandable?: boolean,
  withStyle?: StyleEnum
}


export function Button({
  buttonID,
  buttonTitle,
  controlledID,
  handleClick,
  isActive,
  isExpandable = true,
  withStyle = StyleEnum.Regular
}: ButtonProps) {

  const buttonStyle = `${withStyle}_style`

  let buttonOpts = {}

  
  if (withStyle === 'inactive') {
    // @ts-ignore
    buttonOpts['disabled'] = 'disabled' 
  }
  
  if (withStyle === 'tab') {
    // @ts-ignore
    buttonOpts['aria-selected'] = isActive ? 'true' : 'false'
  }
  
  if (isExpandable) {
    // @ts-ignore
    buttonOpts['aria-expanded'] = isActive ? 'true' : 'false'
  }

  return (
    <button
      aria-controls={controlledID}
      className={style[buttonStyle]}
      id={buttonID}
      onClick={handleClick}
      role={withStyle === 'tab' ? 'tab' : 'button'}
      tabIndex={isActive ? -1 : 0}
      {...buttonOpts}
    >
      { buttonTitle }
    </button>
  )
}
