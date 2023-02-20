import React from 'react'

import { List } from '@/components/.'
import { CustomLink as Link, Text } from '@/components/.'


export function renderCard(items: any) {
  let arr = []

  for (let item of Object.keys(items)) {
    if (item === 'title') {
      arr.push(<Text withStyle='subtitle'>{item}</Text>)
    }

    if (item === 'text') {
      for (let i of items[item]) {
        if (typeof i === 'string') {
          arr.push(<Text withPadding>{i}</Text>)
        } else {
          arr.push(<List items={i.listItems} withPadding withType={i.listStyle} />)
        }
      }
    }

    if (item === 'link') {
      arr.push(
        <Link
          href={items[item].href}
          title={items[item].title}
          withStyle={items[item].withStyle}
        >
          { items[item].children }
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
}
