import React from 'react'

import type { ContentProps } from '@/components/article/interface'

import { RenderCard } from '@/utils/render'


export function Stripped({ data }: ContentProps) {
  return (
    <>
      {
        data.map((item, index) => {
          return <React.Fragment key={index}>{ RenderCard(item.cardData) }</React.Fragment>
        })
      }
    </>
  )
}