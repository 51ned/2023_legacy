import { useContext } from 'react'

import { Box, Button, CustomLink as Link, List, ModalContext } from '@/components/.'

import { useWindowSize } from '@/hooks/.'

import style from './navbar.module.css'


export function Navbar() {
  const {openModal, refsObj} = useContext(ModalContext)
  const isDesktop = useWindowSize()

  // temp
  const listData = {
    items: [
      {
        children: 'Услуга',
        href: '#',
        title: '...'
      },
      {
        children: 'Эксперт',
        href: '#',
        title: '...'
      },
      {
        children: 'Цены',
        href: '#',
        title: '...'
      },
      {
        children: 'Контакты',
        href: '#',
        title: '...'
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

          <Link href='tel:+7 495 507-86-49' title='Позвонить в ЭКЦ «Вектор»'>+7 495 507-86-49</Link>
        </div>
      </Box>
    </Box>
  )
}
