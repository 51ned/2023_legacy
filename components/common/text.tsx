const BackgroundEnum = {
  Light: 'light',
  Dark: 'dark'
} as const

const ColorEnum = {
  Interactive: 'interactive',
  Primary: 'primary',
  Regular: 'regular'
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
  children: React.ReactNode,
  tag?: keyof JSX.IntrinsicElements,
  withBG?: BackgroundEnum,
  withColor?: ColorEnum,
  withPadding?: boolean,
  withSize?: SizeEnum,
  withStyle?: SizeEnum
}


export function Text({
  children,
  tag: Tag = 'p',
  withBG = BackgroundEnum.Light,
  withColor = ColorEnum.Primary,
  withPadding,
  withSize,
  withStyle = SizeEnum.Regular}: TextProps) {
    
  const textColor = `${withColor}_color_on_${withBG}_bg`
  const textPadding = withPadding ? 'paragraph' : ''
  const textStyle = withSize ? `${withSize}_font_size` : `${withStyle}_font_style`

  return (
    <Tag className={`${textColor} ${textPadding} ${textStyle}`}>
      { children }
    </Tag>
  )  
}
