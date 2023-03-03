import { useCallback, useContext } from 'react'

import { Button, ModalContext, Text, TextHeader as Header } from '@/components/.'
import { CroppedLogo as Logo } from '@/components/icons'

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
  
  const { closeModal, refsObj } = useContext(ModalContext)

  const backdropClick = useCallback((currentTarget: { target: object }) => {
    currentTarget.target === refsObj[refName] && closeModal(refsObj[refName])
  }, [closeModal, refName, refsObj])

  const dialogRef = useCallback((node: HTMLDialogElement) => {
    refsObj[refName] = node
  }, [refName, refsObj])
  
  return (
    <dialog
      aria-labelledby={controllingID}
      className={`${style.wrap} ${style[withStyle]}`}
      id={dialogID}
      onClick={backdropClick}
      ref={dialogRef}
    >
      <section className={style.container}>
        <div className={style.header}>
          <Header level='3'>{withTitle }</Header>
          
          <Button 
            handleClick={() => closeModal(refsObj[refName])}
            withIcon='close'
            withStyle='stripped'
            withTitle='Закрыть главное меню'
          />
        </div>
        
        { children }

        <div className={style.footer}>
          <Logo />
            
          <Text withStyle='smallest'>
            © 2006-{(new Date()).getFullYear()}, ООО «ЭКЦ «Вектор», <br/>
            ОГРН: 1067746711647
          </Text>
        </div>
      </section>
    </dialog>
  )
}
