import { OuterLayout, InnerLayout } from '@/layouts/.'

import { Article } from '@/components/screens'


export default function Home() {
  const listOfStrings = ['String item # 1', 'String item # 2', 'String item # 3']
  const listOfLinks = [
    {
      text: 'List link item # 1',
      href: '#',
      title: 'List link title # 1'
    },
    {
      text: 'List link item # 2',
      href: '#',
      title: 'List link title # 2'
    },
    {
      text: 'List link item # 3',
      href: '#',
      title: 'List link title # 3'
    }
  ]


  return (
    <OuterLayout>
      <InnerLayout>
        <Article />
      </InnerLayout>
    </OuterLayout>
  )
}
