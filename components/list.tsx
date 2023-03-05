import { LinkProps } from '@/components/.'

import { RenderList } from '@/utils/render'

import style from './list.module.css'


type ListTypeEnum = 'horisontal' | 'ordered' | 'unmarked' | 'unordered'


export interface ListProps {
  items: string[] | LinkProps[],
  withPadding?: boolean,
  withType: string | ListTypeEnum
}


export function List({
  items,
  withPadding,
  withType
}: ListProps) {

  const listPadding = withPadding ? 'paragraph' : ''
  const ListTag = withType === 'ordered' ? 'ol' : 'ul'

  return (
    <ListTag className={`${style[withType]} ${listPadding}`}>
      { RenderList(items) }
    </ListTag>
  )
}
