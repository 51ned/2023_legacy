import { Accordion, Tabs, TextHeader as Header, Text } from '@/components/.'

import { useWindowSize } from '@/hooks/.'

import { articleData as data } from '@/lib/data'

import style from './article.module.css'


interface ArticleProps {}


export function Article({}: ArticleProps) {
  const isDesktop = useWindowSize()

  return (
    <article className={style.wrap}>
      <div className={style.container}>
        <Header level='2' withPadding>{ data.header }</Header>
        <Text>{ data.text }</Text>
      </div>
      
      {isDesktop
        ? <Tabs data={data.content} />
        : <Accordion
            accContainerTag='section'
            accWrapTag='article'
            data={data.content}
          />
      }
    </article>
  )
}