import React from 'react'

import {
  CustomLink as Link, LinkProps,
  List, ListProps,
  Text,
  TextHeader as Header
} from '@/components/.'


  export interface RenderCardProps {
    header?: string,
    text: [string | ListProps],
    link?: LinkProps
  }


export function renderCard(items: RenderCardProps[]) {
  let arr: React.ReactNode[] = []
  let ii: keyof typeof items

  for (ii in items) {
    if (items[ii].header) {
      arr.push(<Header level='3' withPadding>{ items[ii].header }</Header>)
    }

    if (items[ii].text) {
      for (let jj of items[ii].text) {
        if (typeof jj === 'string') {
          arr.push(<Text withPadding>{ jj }</Text>)
        } else {
          arr.push(<List items={jj.items} withPadding withType={jj.withType} />)
        }
      }
    }

    if (items[ii].link) {
      arr.push(
        <Link
          href={items[ii].link!.href}
          title={items[ii].link!.title}
          withStyle='arrow'
        >
          { items[ii].link!.children }
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