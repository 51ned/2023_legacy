import { ListProps } from '@/components/article/interface'

import { RenderList } from '@/utils/render'

import style from './list.module.css'


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
