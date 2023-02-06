import { useState } from 'react'

import { Button, Card, TextHead } from '@/components/ui/.'

import style from './modal.module.css'


interface ModalProps {
  children: React.ReactNode,
  modalHeadText: string
}


export function Modal({
  children,
  modalHeadText}: ModalProps) {

  const [isActive, setActive] = useState(false)

  let dialogOpts: {[key: string]: boolean} = {}

  if (isActive) {
    dialogOpts['open'] = false
  }

  return (
    <>
      <Button
        handleClick={() => setActive(true)}
        withStyle='stripped'
      >
        Open modal
      </Button>

      <Card
        cardWrapTag='dialog'
        isActive={isActive}
        withStyle='dialog'
        {...dialogOpts}
      >
        <header className={style.header}>
          <TextHead level='2'>
            Main menu
          </TextHead>
          <Button
            handleClick={() => setActive(false)}
            withStyle='stripped'
          >
            Close button
          </Button>
        </header>

        { children }

        <footer className={style.footer}></footer>
      </Card>
    </>
  )
}
