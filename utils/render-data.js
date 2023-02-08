import { List } from '@/components/.'
import { Text } from '@/components/ui/.'


export function renderData(data) {
  for (let key of data) {
    if (key === paragraph) {
      return (
        <Text>
          { data[key] }
        </Text>
      )
    }
  }
}