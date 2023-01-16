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
  buttonTag?: keyof JSX.IntrinsicElements,
  buttonTitle: React.ReactNode,
  controlledID: string,
  handleClick: () => void,
  isActive: boolean,
  isExpandable?: boolean,
  withStyle?: StyleEnum
}


export function Button({
  isExpandable = true,
  buttonTag: Tag = 'button',
  withStyle = StyleEnum.Regular,
  ...pr
}: ButtonProps) {

  const buttonStyle = pr.isActive ? `${withStyle}_style_active` : `${withStyle}_style`

  let buttonOpts: {[key: string]: string} = {} 
  
  if (withStyle === 'inactive') {
    buttonOpts['disabled'] = 'disabled' 
  } else if (withStyle === 'tab') {
    buttonOpts['aria-selected'] = pr.isActive ? 'true' : 'false'
    buttonOpts['role'] = 'tab'
  }
  
  if (isExpandable) {
    buttonOpts['aria-expanded'] = pr.isActive ? 'true' : 'false'
  }
  
  return (
    <Tag
      aria-controls={pr.controlledID}
      className={`${style.common_style} ${style[buttonStyle]}`}
      id={pr.buttonID}
      onClick={pr.handleClick}
      {...buttonOpts}
    >
      { pr.buttonTitle }
    </Tag>
  )
}
