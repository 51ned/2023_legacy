import {OuterLayout, InnerLayout } from '@/layouts/.'

import { Card, CardList, List } from '@/components/.'


export default function Home() {
  const listOfStrings = ['String item # 1', 'String item # 2', 'String item # 3']
  const listOfLinks = [
    {
      children: 'List link item # 1',
      href: '#',
      title: 'List link title # 1'
    },
    {
      children: 'List link item # 2',
      href: '#',
      title: 'List link title # 2'
    },
    {
      children: 'List link item # 3',
      href: '#',
      title: 'List link title # 3'
    }
  ]

  return (
    <OuterLayout>
      <InnerLayout>
        <CardList>
          <Card withStyle='regular'>
            <List items={listOfStrings} withType='unordered' />
          </Card>

          <Card withStyle='regular'>
            <List items={listOfLinks} withType='ordered' />
          </Card>
        </CardList>
      </InnerLayout>
    </OuterLayout>
  )
}
