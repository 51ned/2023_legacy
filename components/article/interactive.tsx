import dynamic from 'next/dynamic'

import type { ContentProps } from '@/components/article/interface'

import { useMediaQuery } from '@/hooks/.'

import { BREAKPOINTS } from '@/lib/.'

import style from './interactive.module.css'


export function Interactive({ data }: ContentProps) {
  const isTablet = useMediaQuery(BREAKPOINTS.MD)

  const styles = isTablet
    ? `${style.tabs}`
    : `${style.accordion}`

  const Tabs = dynamic<ContentProps>(() => import('@/components/.').then((m) => m.Tabs))
  const Accordion = dynamic<any>(() => import('@/components/.').then((m) => m.Accordion))

  return (
    <div className={styles}>
      {
        isTablet
          ? <Tabs data={data} />
          : <Accordion cardWrapTag='section' data={data} />
      }
    </div>
  )
}
