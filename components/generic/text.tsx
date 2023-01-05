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
  size?: SizeEnum,
  style?: SizeEnum,
  tag?: keyof JSX.IntrinsicElements,
}


export function Text({
  bg = BackgroundEnum.Light,
  children,
  color = ColorEnum.Primary,
  size,
  style = SizeEnum.Regular,
  tag: Tag = 'p'
}: TextProps) {
  
  const textColor = `${color}_${bg}_bg`
  const textStyle = size ? `${size}_font_size` : `${style}_font_style`

  return (
    <Tag className={`${textColor} ${textStyle}`}>
      { children }
    </Tag>
  )  
}
