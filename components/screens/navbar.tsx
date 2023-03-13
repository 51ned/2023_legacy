import { useContext } from 'react'

import { Box, Button, List, Phone } from '@/components/.'
import { ModalContext } from '@/components/modal'

import { useWindowSize } from '@/hooks/.'

import style from './navbar.module.css'


export function Navbar() {
  const { openModal, refsObj } = useContext(ModalContext)
  const isDesktop = useWindowSize()

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
          withTitle='Навигация по сайту'
        />

        <div className={style.nav}>
          {isDesktop &&
            <List items={listData.items} withType={listData.withType} />
          }

          <Phone withStyle='primary' />
        </div>
      </Box>
    </Box>
  )
}
