import React from 'react'

import {
  Accordion,
  Box,
  Card,
  List,
  CardList,
  Text,
  TextHeader as Header
} from '@/components/.'

import { CroppedLogo as Logo} from '@/components/icons'

import { useWindowSize } from '@/hooks/.'

import { commonData, footerData } from '@/lib/data'

import style from './footer.module.css'


export function Footer() {
  const isDesktop = useWindowSize()

  return (
    <Box withRole='wrap' withStyle={style.wrap} withTag='footer'>
      <Box withRole='container' withStyle={style.a_floor} withTag='section'>
        <Header level='2' withPadding>Экспертизы</Header>

        {isDesktop &&
          <CardList>
            {footerData.menu.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div>
                    <Text withPadding>{ item.buttonText }</Text>

                    <List
                      items={item.cardData.text[0].list.items}
                      withType={item.cardData.text[0].list.withType}
                    />
                  </div>
                </React.Fragment>
              )
            })}
          </CardList>
        }

        {!isDesktop && <Accordion data={footerData.menu} />}
      </Box>

      <Box withRole='container' withStyle={style.b_floor} withTag='div'>
        <Text withStyle='smallest'>
          Вся информация на этой странице подготовлена практикующим экспертом, верна по состоянию на {(new Date()).getFullYear()} г. и не является публичной офертой, определяемой положениями ст. № 437 ГК РФ.
        </Text>
      </Box>

      <Box withRole='container' withStyle={style.c_floor} withTag='div'>
        <div className={style.logo_container}>
          <Logo />

          <Text withStyle='smallest'>© 2006-{(new Date()).getFullYear()}, ООО «ЭКЦ «Вектор», ОГРН: 1067746711647</Text>
        </div>

        <div className={style.address_container}>
          <Text withStyle='smallest'>
            {commonData.address.index},{' '}
            {commonData.address.city},{' '}
            {commonData.address.street},{' '}
            {commonData.address.house},{' '}
            {commonData.address.office},{isDesktop ? <br/> : ' '}
            {commonData.phone.code}{' '}
            {commonData.phone.number},{' '}
            {commonData.email}
          </Text>
        </div>
      </Box>
    </Box>
  )
}
