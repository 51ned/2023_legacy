import React from 'react'

import { Text, TextHeader as Header } from '@/components/.'
import { List } from '@/components/.'


interface CardDataItemProps {
  header?: string,
  text: string[]
}


export function renderCard(items: CardDataItemProps[]) {
  // let arr: React.ReactNode[] = []

  // for (let ii of Object.keys(items)) {
  //   if (ii === 'header') {
  //     arr.push(<Header level='3' withPadding>{}</Header>)
  //   }

  //   if (ii === 'text') {
  //     for (let jj of items[ii]) {
  //       if (typeof jj === 'string') {
  //         arr.push(<Text withPadding>{jj}</Text>)
  //       } else {
  //         arr.push(<List items={jj.items} withPadding withType={jj.type} />)
  //       }
  //     }
  //   }
  // }
  
  // return arr.map((item, index) => {
  //   return (
  //     <React.Fragment key={index}>
  //       { item }
  //     </React.Fragment>
  //   )
  // })
}