import { Text } from '@/components/ui/.'


interface RenderHeaderProps {
  arr: React.ReactNode[],
  items: {
    key: string,
    value: string
  }
}


export function renderHeader({
  arr,
  items
}: RenderHeaderProps) {
  if (items.key === 'header') {
    arr.push(
      <Text withStyle='subtitle'>
        { items.value }
      </Text>
    )
  }
}