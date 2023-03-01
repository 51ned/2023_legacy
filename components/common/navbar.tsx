import { useContext } from 'react'

import { Box, Button, List, ModalContext } from '@/components/.'

import style from './navbar.module.css'


export function Navbar() {
  const {openModal, refsObj} = useContext(ModalContext)

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
      },
      {
        children: '+7 495 507-86-49',
        href: '#',
        title: '...'
      },
    ],
    withType: 'horisontal'
  }
  return (
    <Box withRole='wrap' withStyle={style.wrap} withTag='nav'>
      <Box withRole='container' withStyle={style.container} withTag='div'>
        <Button
          buttonID='main-nav-open-button'
          controlledID='main-nav-dialog'
          handleClick={() => openModal(refsObj.main_nav)}
          withIcon='burger'
          withStyle='stripped'
          withTitle='Навигация по сайту'
        />

        <List items={listData.items} withType={listData.withType} />
      </Box>
    </Box>
  )
}
