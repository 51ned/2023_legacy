import { useContext } from 'react'

import { ModalContext } from '../'

import { Box, Button, List } from '@/components/.'

import style from './navbar.module.css'


export function Navbar() {
  const refObj = useContext(ModalContext)

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
          handleClick={() => refObj.test.showModal()}
          withIcon='burger'
          withStyle='stripped'
          withTitle=''
        />

        <Button 
          handleClick={() => refObj.test2.show()}
          withIcon='burger'
          withStyle='stripped'
          withTitle=''
        />

        <List items={listData.items} withType={listData.withType} />
      </Box>
    </Box>
  )
}
