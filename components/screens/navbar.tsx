import { useContext } from 'react'

import Link from 'next/link'

import { Box, Button, List } from '@/components/.'
import { ModalContext } from '@/components/modal'

import { useMediaQuery } from '@/hooks/.'

import { BREAKPOINTS } from '@/lib/.'
import { commonData } from '@/lib/data'

import style from './navbar.module.css'


export function Navbar() {
  const { openModal, refsObj } = useContext(ModalContext)
  const isTablet = useMediaQuery(BREAKPOINTS.MD)

  // temp
  const listData = {
    items: [
      {
        extraStyle: 'nav',
        text: 'Услуга',
        title: '...',
        url: '#',
      },
      {
        extraStyle: 'nav',
        text: 'Эксперт',
        title: '...',
        url: '#',
      },
      {
        extraStyle: 'nav',
        text: 'Цены',
        title: '...',
        url: '#',
      },
      {
        extraStyle: 'nav',
        text: 'Контакты',
        title: '...',
        url: '#',
      }
    ],
    withType: 'horisontal'
  }

  return (
    <Box withRole='wrap' withStyle={style.wrap} withTag='div'>
      <Box withRole='container' withStyle={style.container} withTag='div'>
        <Button
          buttonID='main-nav-open-button'
          controlledID='main-nav-dialog'
          handleClick={() => openModal(refsObj.main_nav)}
          withIcon='burger'
          withStyle='stripped'
          withTitle='Открыть главное меню'
        />

        <div className={style.nav}>
          {isTablet &&
            <List items={listData.items} withType={listData.withType} />
          }

            <Link
              href={`tel:${commonData.phone.allTogether}`}
              title='Позвонить в ЭКЦ «Вектор»'
            >
              { commonData.phone.code}
              
              <span className={style.number}>
                { commonData.phone.number}
              </span>
            </Link>
        </div>
      </Box>
    </Box>
  )
}
