import React from 'react'

import { Text } from '@/components/ui/.'

import style from './list.module.css'


const ListTypeEnum = {
  Ordered: 'ordered',
  Unmarked: 'unmarked',
  Unordered: 'unordered'
} as const

type ListTypeEnum = typeof ListTypeEnum[keyof typeof ListTypeEnum]


interface ListProps {
  items: string[],
  withPadding?: boolean,
  withTitle?: string,
  withType?: ListTypeEnum
}


export function List({
  items,
  withPadding,
  withTitle,
  withType
}: ListProps) {

  const ListTag = withType === 'ordered' ? 'ol' : 'ul'

  const getTitle = () => {
    if (withTitle) {
      return (
        <Text
          isBold
          withColor='primary'
          withPadding
          withSize='regular'
        >
          { withTitle }
        </Text>
      )
    }
  }

  const listPadding = withPadding ? 'paragraph' : ''
  const listItemColor = withType !== 'unmarked' ? 'regular' : 'primary' // !!!
  const listItemSize = withType !== 'unmarked' ? 'regular' : 'smaller'

  return (
    <>
      { getTitle() }
    
      <ListTag className={`${style.list} ${style[`${withType}`]} ${listPadding}`}>
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
