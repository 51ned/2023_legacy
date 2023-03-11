import { useWindowSize } from '@/hooks/.'

import { Accordion, Tabs } from '@/components/.'
import type { ContentProps } from '@/components/article/interface'

import style from './interactive.module.css'


export function Interactive({ data }: ContentProps) {
  const isDesktop = useWindowSize()

  const styles = isDesktop
    ? `${style.tabs}`
    : `${style.accordion}`

  return (
    <div className={styles}>
      {
        isDesktop
          ? <Tabs data={data} />
          : <Accordion data={data} />
      }
    </div>
  )
}
