import React, { useMemo } from 'react'

import { CustomLink as Link, LinkProps, Text } from '@/components/.'


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
            <Link
              extraStyle={item.extraStyle}
              text={item.text}
              title={item.title}
              url={item.url}
            />
          </Text>
        </React.Fragment>
      )
    })
  }, [items])
}