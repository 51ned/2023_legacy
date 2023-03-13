import cn from 'classnames'

import { ListProps } from '@/components/article/interface'

import { RenderList } from '@/utils/render'

import style from './list.module.css'


export function List({
  items,
  withPadding,
  withType
}: ListProps) {

  const ListTag = withType === 'ordered' ? 'ol' : 'ul'

  const className = cn(style[withType], {
    ['paragraph']: withPadding
  })

  return (
    <ListTag className={className}>
      { RenderList(items) }
    </ListTag>
  )
}
