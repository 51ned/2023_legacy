import dynamic from 'next/dynamic'

import { TextHeader as Header, Text } from '@/components/.'
import type { ContentProps, ContentItemProps } from '@/components/article/interface'

import style from './article.module.css'


interface ArticleProps {
  data: {
    content: ContentItemProps[]
    header: string,
    intro?: string,
  },
  isStripped?: boolean
}


export function Article({
  data,
  isStripped
}: ArticleProps) {

  
  const Stripped = dynamic<ContentProps>(() => import('@/components/article/stripped').then((m) => m.Stripped))
  const Interactive = dynamic<ContentProps>(() => import('@/components/article/interactive').then((m) => m.Interactive))

  return (
    <article>
      <Header level='2' withPadding>{ data.header }</Header>
        
      { data.intro && <Text withPadding>{ data.intro }</Text> }

      {
        isStripped
          ? <Stripped data={data.content} />
          : <Interactive data={data.content} />
      }
    </article>
  )
}