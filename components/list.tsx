import React from 'react'

import { CustomLink as Link, LinkProps, Text } from '@/components/.'

import style from './list.module.css'


const ListTypeEnum = {
  Horisontal: 'horisontal',
  Ordered: 'ordered',
  Unmarked: 'unmarked',
  Unordered: 'unordered'
} as const

export type ListTypeEnum = typeof ListTypeEnum[keyof typeof ListTypeEnum]


interface ListProps {
  items: string[] | LinkProps[],
  withPadding?: boolean,
  withType: ListTypeEnum
}


export function List({
  items,
  withPadding,
  withType
}: ListProps) {

  const ListTag = withType === 'ordered' ? 'ol' : 'ul'

  const listPadding = withPadding ? 'paragraph' : ''
  const listStyle = withType === 'unmarked' ? `${style.list}` : `${style.list} ${style[withType]}`

  function renderListItems(items: string[] | LinkProps[]) {
    return items.map((item, index) => {
      if (typeof item === 'string') {
        return (
          <React.Fragment key={index}>
            <Text tag='li'>
              { item }
            </Text>
          </React.Fragment>
        )
      }
      
      return (
        <React.Fragment key={index}>
          <Text tag='li'>
            <Link href={item.href} title={item.title} withStyle={item.withStyle}>
              { item.children }
            </Link>
          </Text>
        </React.Fragment>
      )
    })
  }

  return (
    <ListTag className={`${listStyle} ${listPadding}`}>
      { renderListItems(items) }
    </ListTag>
  )
}
