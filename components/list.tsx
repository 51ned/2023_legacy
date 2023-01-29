import React from 'react'

import { Text } from '@/components/common/.'

import style from './list.module.css'


const ListTypeEnum = {
  Ordered: 'ordered',
  Unmarked: 'unmarked',
  Unordered: 'unordered'
} as const

type ListTypeEnum = typeof ListTypeEnum[keyof typeof ListTypeEnum]


interface ListProps {
  items: string[],
  withTitle?: string,
  withType?: ListTypeEnum
}


export function List({
  items,
  withTitle,
  withType
}: ListProps) {

  const ListTag = withType === 'ordered' ? 'ol' : 'ul'

  const getTitle = () => {
    if (withTitle) {
      return (
        <Text withPadding withSize='regular'>
          { withTitle }
        </Text>
      )
    }
  }

  const listItemColor = withType !== 'unmarked' ? 'regular' : 'interactive'
  const listItemSize = withType !== 'unmarked' ? 'regular' : 'smaller'

  return (
    <>
      { getTitle() }
    
      <ListTag className={`${style.list} ${style[`${withType}`]}`}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Text
              tag='li'
              withColor={listItemColor}
              withSize={listItemSize}
            >
              { item }
            </Text>
          </React.Fragment>
        ))}
      </ListTag>
    </>
  )
}
