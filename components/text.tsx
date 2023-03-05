export type TextColorEnum = 'interactive' | 'primary' | 'regular'
export type TextSizeEnum = 'smallest' | 'smaller' | 'regular' | 'subtitle'

export interface TextProps {
  children: React.ReactNode,
  isBold?: boolean;
  tag?: keyof JSX.IntrinsicElements,
  withColor?: TextColorEnum,
  withPadding?: boolean,
  withSize?: TextSizeEnum,
  withStyle?: TextSizeEnum
}


export function Text({
  children,
  isBold,
  tag: Tag = 'p',
  withColor = 'regular',
  withPadding,
  withSize,
  withStyle = 'regular'}: TextProps) {
    
  const textColor = `${withColor}-color`
  const textPadding = withPadding ? 'paragraph' : ''
  const textStyle = withSize ? `${withSize}-font-size` : `${withStyle}-font-style`
  const textWeight = isBold ? 'bold' : ''

  return (
    <Tag className={`${textColor} ${textPadding} ${textStyle} ${textWeight}`}>
      { children }
    </Tag>
  )  
}
