import { useContext, createRef, useEffect } from 'react'

import { Button, ModalContext, TextHeader as Header } from '@/components/.'

import style from './modal.module.css'


const ModalStyleEnum = {
  Modal: 'modal',
  Offcanvas: 'offcanvas'
} as const

type ModalStyleEnum = typeof ModalStyleEnum[keyof typeof ModalStyleEnum]


interface ModalProps {
  children: React.ReactNode,
  controllingID: string,
  dialogID: string
  refName: string,
  withStyle: ModalStyleEnum,
  withTitle: string
}


export function Modal({
  children,
  controllingID,
  dialogID,
  refName,
  withStyle,
  withTitle
}: ModalProps) {
  
  const {closeModal, refsObj} = useContext(ModalContext)

  const backDropRef = createRef<HTMLDivElement>()
  const dialogRef = createRef<HTMLDialogElement>()

  useEffect(() => {
    refsObj[refName] = dialogRef.current

    dialogRef.current?.addEventListener('click', (evt) => {
      if (evt.target !== backDropRef.current) {
        closeModal(dialogRef.current)
      }
    })
  })
  
  return (
    <dialog
      aria-labelledby={controllingID}
      className={`${style.wrap} ${style[withStyle]}`}
      id={dialogID}
      ref={dialogRef}
    >
      <section className={style.container} ref={backDropRef}>
        <div className={style.header}>
          <Header level='3'>{withTitle }</Header>
          
          <Button 
            handleClick={() => closeModal(refsObj[refName])}
            withIcon='burger'
            withStyle='stripped'
            withTitle='Закрыть главное меню'
          />
        </div>
        

        { children }
      </section>
    </dialog>
  )
}
