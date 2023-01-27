import { Text } from '@/components/common/.'

import style from './list.module.css'


interface ListProps {
  withTitle?: string
}


export function List({
  withTitle
}: ListProps) {

  const getTitle = () => {
    if (withTitle) {
      return (
        <Text>
          { withTitle }
        </Text>
      )
    }
  }
  
  return (
    <>
      { getTitle() }

      <ul></ul>
    </>
  )
}