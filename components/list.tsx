import React from 'react'

import { Text, CustomLink as Link, LinkProps } from '@/components/ui/.'

import style from './list.module.css'


const ListTypeEnum = {
  Horisontal: 'horisontal',
  Ordered: 'ordered',
  Unmarked: 'unmarked',
  Unordered: 'unordered'
} as const

export type ListTypeEnum = typeof ListTypeEnum[keyof typeof ListTypeEnum]


interface ListProps {
  items: string[],
  ofLinks?: boolean,
  withPadding?: boolean,
  withTitle?: string,
  withType?: ListTypeEnum
}


export function List({
  items,
  ofLinks,
  withPadding,
  withTitle,
  withType
}: ListProps) {

  const ListTag = withType === 'ordered' ? 'ol' : 'ul'

  const listPadding = withPadding ? 'paragraph' : ''
  const listItemColor = withType !== 'unmarked' ? 'regular' : 'primary' // !!!
  const listItemSize = withType !== 'unmarked' ? 'regular' : 'smaller'


  return (
    <>
      {withTitle &&
        <Text
          isBold
          withColor='primary'
          withPadding
          withSize='regular'
        >
          { withTitle }
        </Text>
      }
    
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
