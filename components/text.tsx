import cn from 'classnames'

import type { TextColorEnum, TextSizeEnum} from '@/components/article/interface'


interface TextProps {
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
  
  const textStyle = withSize ? `${withSize}-font-size` : `${withStyle}-font-style`

  const className = cn(textStyle, {
    [`${withColor}-color`]: withColor,
    ['bold']: isBold,
    ['paragraph']: withPadding
  })  

  return (
    <Tag className={className}>
      { children }
    </Tag>
  )  
}
