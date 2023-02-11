const ColorEnum = {
  Primary: 'primary',
  Regular: 'regular'
} as const

const SizeEnum = {
  Smallest: 'smallest',
  Smaller: 'smaller',
  Regular: 'regular',
  Subtitle: 'subtitle'
} as const

type ColorEnum = typeof ColorEnum[keyof typeof ColorEnum]
type SizeEnum = typeof SizeEnum[keyof typeof SizeEnum]


export interface TextProps {
  children: React.ReactNode,
  isBold?: boolean;
  tag?: keyof JSX.IntrinsicElements,
  withColor?: ColorEnum,
  withPadding?: boolean,
  withSize?: SizeEnum,
  withStyle?: SizeEnum
}


export function Text({
  children,
  isBold,
  tag: Tag = 'p',
  withColor = 'regular',
  withPadding,
  withSize,
  withStyle = 'regular'}: TextProps) {
    
  const textWeight = isBold ? 'bold' : ''
  const textColor = `${withColor}-color`
  const textPadding = withPadding ? 'paragraph' : ''
  const textStyle = withSize ? `${withSize}-font-size` : `${withStyle}-font-style`

  return (
    <Tag className={`${textColor} ${textPadding} ${textStyle} ${textWeight}`}>
      { children }
    </Tag>
  )  
}
