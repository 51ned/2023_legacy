import { List } from '@/components/.'
import { Text } from '@/components/ui/.'

import { ListValueProps, renderList } from './list'


type TextOrList<T extends string | ListValueProps> = T extends string
  ? string[]
  : ListValueProps


interface RenderTextProps {
  arr: React.ReactNode[],
  items: {
    key: string,
    value: []
  }
}


export function renderText({
  arr,
  items
}: RenderTextProps) {
  if (items.key === 'text') {
    for (let item of items.value) {
      if (typeof item === 'string') {
        arr.push(<Text withPadding>{ item }</Text>)
      } else {
        renderList(arr, item)
      }
    }
  }
}