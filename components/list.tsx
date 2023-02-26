import React, { useMemo } from 'react'

import { CustomLink as Link, LinkProps, Text } from '@/components/.'

import style from './list.module.css'


const ListTypeEnum = {
  Horisontal: 'horisontal',
  Ordered: 'ordered',
  Unmarked: 'unmarked',
  Unordered: 'unordered'
} as const

export type ListTypeEnum = typeof ListTypeEnum[keyof typeof ListTypeEnum]


export interface ListProps {
  items: string[] | LinkProps[],
  withPadding?: boolean,
  withType: string | ListTypeEnum
}


export function List({
  items,
  withPadding,
  withType
}: ListProps) {

  const ListTag = withType === 'ordered' ? 'ol' : 'ul'
  const listPadding = withPadding ? 'paragraph' : ''

  const renderListItems = useMemo(() => {
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
          <Text tag='li' withStyle='smaller'>
            <Link href={item.href} title={item.title} withStyle={item.withStyle}>
              { item.children }
            </Link>
          </Text>
        </React.Fragment>
      )
    })
  }, [items])

  return (
    <ListTag className={`${style[withType]} ${listPadding}`}>
      { renderListItems }
    </ListTag>
  )
}
