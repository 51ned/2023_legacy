import { Accordion, Tabs } from '@/components/.'
import type { ContentProps } from '@/components/article/interface'

import { useMediaQuery } from '@/hooks/.'

import { BREAKPOINTS } from '@/lib/.'

import style from './interactive.module.css'


export function Interactive({ data }: ContentProps) {
  const isTablet = useMediaQuery(BREAKPOINTS.MD)

  const styles = isTablet
    ? `${style.tabs}`
    : `${style.accordion}`

  return (
    <div className={styles}>
      {
        isTablet
          ? <Tabs data={data} />
          : <Accordion data={data} />
      }
    </div>
  )
}
