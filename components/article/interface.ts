type TextColorEnum = 'interactive' | 'primary' | 'regular'
type TextSizeEnum = 'smallest' | 'smaller' | 'regular' | 'subtitle'

type HeaderLevelEnum = '1' | '2' | '3'

type ListTypeEnum = 'horisontal' | 'ordered' | 'unmarked' | 'unordered'

type CardStyleEnum = 'accordion' | 'dialog' | 'regular' | 'tab'


interface HeaderProps {
  children: React.ReactNode,
  level: HeaderLevelEnum,
  size?: TextSizeEnum,
  withPadding?: boolean
}

interface LinkProps {
  children?: React.ReactNode,
  extraStyle?: string
  text?: React.ReactNode
  title: string,
  url: string,
  withColor?: TextColorEnum,
  withSize?: TextSizeEnum,
}

interface ListProps {
  items: string[] | LinkProps[],
  withPadding?: boolean,
  withType: string | ListTypeEnum
}

interface CardTextProps {
  list?: ListProps,
  paragraph?: string
}

interface CardDataProps {
  header?: string,
  link?: LinkProps,
  text: CardTextProps[] 
}

interface ContentItemProps {
  buttonID: string,
  buttonText: string,
  buttonTitle: string,
  cardData: CardDataProps,
  cardID: string
}

interface ContentProps { data: ContentItemProps[] }


export type {
  CardStyleEnum,
  HeaderLevelEnum,
  ListTypeEnum,
  TextColorEnum,
  TextSizeEnum,

  CardDataProps,
  CardTextProps,
  ContentProps,
  ContentItemProps,
  HeaderProps,
  LinkProps,
  ListProps
}