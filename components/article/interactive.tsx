import dynamic from 'next/dynamic'

import type { ContentProps } from '@/components/article/interface'

import { useWindowSize } from '@/hooks/.'

import style from './interactive.module.css'


export function Interactive({ data }: ContentProps) {
  const isDesktop = useWindowSize()

  const Component = isDesktop
    ? dynamic<ContentProps>(() => import('@/components/.').then((m) => m.Tabs))
    : dynamic<ContentProps>(() => import('@/components/.').then((m) => m.Accordion))

  const styles = isDesktop
    ? `${style.tabs}`
    : `${style.accordion}`

  return (
    <div className={styles}>
      <Component data={data} />
    </div>
  )
}
