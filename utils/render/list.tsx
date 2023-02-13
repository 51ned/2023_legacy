import { List, ListTypeEnum } from '@/components/.'

export type ListValueProps = {
  listItems: string[],
  listStyle: ListTypeEnum
}

interface RenderListProps {
  arr: React.ReactNode[],
  items: {
    key: string,
    value: ListValueProps
  }
}


export function renderList({
  arr,
  items
}: RenderListProps) {
  arr.push(
    <List
      items={items.value.listItems}
      withPadding
      withType={items.value.listStyle}
    />
  )
}