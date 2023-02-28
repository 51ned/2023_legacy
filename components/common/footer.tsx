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

import { useWindowSize } from '@/hooks/.'

import { footerData } from '@/lib/data'

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

        {!isDesktop && <Accordion accData={footerData.menu} />}
      </Box>

      <Box withRole='container' withStyle={style.b_floor} withTag='div'>
        <Text withStyle='smallest'>
          Вся информация на этой странице подготовлена практикующим экспертом, верна по состоянию на {(new Date()).getFullYear()} г. и не является публичной офертой, определяемой положениями ст. № 437 ГК РФ.
        </Text>
      </Box>

      <Box withRole='container' withStyle={style.c_floor} withTag='div'>
        <div className={style.logo_container}>
          <svg
            aria-hidden
            className={style.logo}
            focusable='false'
            viewBox='0 0 48 48'
          >
            <polygon className={style.figure} points='0,10.6 0,45.98 29.13,46.04 48,1.96' />
            <path className={style.char} d='M22.2 32.42c0,-1.85 -1.16,-2.78 -3.5,-2.78l-5.48 0 0 5.66 5.48 0c2.34,0 3.5,-0.96 3.5,-2.88zm-8.98 -6.39l4.65 0c1.08,0 1.9,-0.23 2.46,-0.68 0.55,-0.46 0.83,-1.14 0.83,-2.04 0,-0.87 -0.29,-1.54 -0.85,-2.01 -0.56,-0.47 -1.38,-0.7 -2.44,-0.7l-4.65 0 0 5.43zm12.98 3.42c0.7,0.92 1.05,2.05 1.05,3.39 0,1.98 -0.72,3.52 -2.17,4.63 -1.45,1.11 -3.51,1.66 -6.2,1.66l-10.61 0 0 -22.37 10.03 0c2.5,0 4.45,0.5 5.84,1.51 1.4,1 2.09,2.43 2.09,4.28 0,1.11 -0.26,2.08 -0.8,2.92 -0.53,0.84 -1.28,1.51 -2.24,2 1.31,0.41 2.31,1.07 3.01,1.98z' />
          </svg>

          <Text withStyle='smallest'>© 2006-{(new Date()).getFullYear()}, ООО «ЭКЦ «Вектор», ОГРН: 1067746711647</Text>
        </div>

        <div className={style.address_container}>
          <Text withStyle='smallest'>
            101000, Россия, гор. Москва, Армянский пер., д. 9, стр. 1,{isDesktop ? <br/> : ' '}+7 495 507-86-49, mail@ekc-vector.ru
          </Text>
        </div>
      </Box>
    </Box>
  )
}
