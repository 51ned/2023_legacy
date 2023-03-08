import { OuterLayout, InnerLayout } from '@/layouts/.'

import { Article } from '@/components/article'

import { articleData } from '@/lib/data'


export default function Home() {
  return (
    <OuterLayout>
      <InnerLayout>
        <Article data={articleData} />
      </InnerLayout>
    </OuterLayout>
  )
}
