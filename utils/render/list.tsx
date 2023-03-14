import React, { useMemo } from 'react'

import Link from 'next/link'

import { Text } from '@/components/.'
import type { LinkProps } from '@/components/article/interface'


export function RenderList(items: string[] | LinkProps[]) {
  return useMemo(() => {
    return items.map((item, index) => {
      if (typeof item === 'string') {
        return (
          <React.Fragment key={index}>
            <Text tag='li'>
              { item }
            </Text>
          </React.Fragment>
        )
      }
      
      return (
        <React.Fragment key={index}>
          <Text tag='li' withStyle='smaller'>
            <Link href={item.url} title={item.title}>
              { item.text }
            </Link>
          </Text>
        </React.Fragment>
      )
    })
  }, [items])
}