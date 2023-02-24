import React from 'react'

import { Accordion, Box, Card, CardList, List, Text, TextHeader as Header } from '@/components/.'

import { useWindowSize } from '@/hooks/.'

import { footerData } from '@/lib/data'

import style from './footer.module.css'


export function Footer() {
  const { width } = useWindowSize();

  let isDesktop = true

  if (width && width <= 1280) {
    isDesktop = false
  }

  return (
    <Box withRole='wrap' withStyle={style.wrap} withTag='footer'>
      <Box withRole='container' withTag='div'>
        <Header level='2' withPadding>{ footerData.header }</Header>

        {isDesktop &&
          <CardList>
            {footerData.menu.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Card cardData={item.cardData} withStyle='stripped' />
                </React.Fragment>
              )
            })}
          </CardList>
        }

        { !isDesktop && <Accordion accData={footerData.menu} /> }
      </Box>
    </Box>
  )
}
