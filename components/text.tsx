const BackgroundEnum = {
  Light: 'light',
  Dark: 'dark'
} as const

const ColorEnum = {
  Primary: 'primary',
  Secondary: 'secondary'
} as const

const SizeEnum = {
  Smallest: 'smallest',
  Smaller: 'smaller',
  Regular: 'regular',
  Subtitle: 'subtitle'
} as const

type BackgroundEnum = typeof BackgroundEnum[keyof typeof BackgroundEnum]
type ColorEnum = typeof ColorEnum[keyof typeof ColorEnum]
type SizeEnum = typeof SizeEnum[keyof typeof SizeEnum]


interface TextProps {
  bg?: BackgroundEnum,
  children: React.ReactNode,
  color?: ColorEnum,
  tag?: keyof JSX.IntrinsicElements,
  withSize?: SizeEnum,
  withStyle?: SizeEnum
}


export function Text({
  bg = BackgroundEnum.Light,
  children,
  color = ColorEnum.Primary,
  tag: Tag = 'p',
  withSize,
  withStyle = SizeEnum.Regular}: TextProps) {
    
  const textColor = `${color}_${bg}_bg`
  const textStyle = withSize ? `${withSize}_font_size` : `${withStyle}_font_style`

  return (
    <Tag className={`${textColor} ${textStyle}`}>
      { children }
    </Tag>
  )  
}
