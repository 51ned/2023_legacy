import React, { useMemo } from 'react'

import Link from 'next/link'

import {
  List,
  TextHeader as Header,
  Text
} from '@/components/.'
import type { CardDataProps } from '@/components/article/interface'


export function RenderCard(cardData: CardDataProps) {
  return useMemo(() => {
    let arr: React.ReactNode[] = []
    
    for (let key of Object.keys(cardData)) {
      if (cardData.header && key === 'header') {
        arr.push(<Header level='3' withPadding>{ cardData.header }</Header>)
      }

      if (cardData.text && key === 'text') {
        for (let item of cardData.text) {
          item.paragraph && arr.push(<Text withPadding>{ item.paragraph }</Text>)
          item.list && arr.push(<List items={item.list.items} withPadding withType={item.list.withType} />)
        }
      }
      
      if (cardData.link && key === 'link') {
        arr.push(
          <Link
            href={cardData.link.url}
            title={cardData.link.title}
          >
            { cardData.link.text }
          </Link>
        )
      }
    }
    
    return arr.map((item, index) => {
      return (
        <React.Fragment key={index}>
          { item }
        </React.Fragment>
      )
    })
  }, [cardData])
}
