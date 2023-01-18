import { useState } from 'react'

import { Button, Card, Text, TextHead } from './'

import style from './modal.module.css'


interface ModalProps {
  children: React.ReactNode,
  modalHeadText: string
}


export function Modal({
  children,
  modalHeadText}: ModalProps) {

  const [isActive, setActive] = useState(false)

  return (
    <>
      <Button
        handleClick={() => setActive(true)}
      >
        Open modal
      </Button>

      <Card
        contentWrapTag='dialog'
        isActive={isActive}
        withStyle='regular'
      >
        <header className={style.header}>
          <TextHead level='2' text={modalHeadText} />

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
