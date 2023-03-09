import { useCallback, useContext } from 'react'

import { ModalContext } from '@/components/modal'
import { Button, TextHeader as Header } from '@/components/.'

import style from './modal.module.css'


type ModalStyleEnum = 'modal' | 'offcanvas'

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

  const dialogRef = useCallback((node: HTMLDialogElement) => {
    refsObj[refName] = node
  }, [refName, refsObj])

  const backdropClick = useCallback((currentTarget: { target: object }) => {
    currentTarget.target === refsObj[refName] && closeModal(refsObj[refName])
  }, [closeModal, refName, refsObj])
  const handleAnimation = (e: any) => {
    console.log(e.nativeEvent.animationName);
  };
  return (
    <dialog
      aria-labelledby={controllingID}
      className={`${style.wrap} ${style[withStyle]}`}
      id={dialogID}
      onClick={backdropClick}
      onAnimationEnd={(e) => handleAnimation(e)}
      ref={dialogRef}
    >
      <section className={style.container}>
        <div className={style.header}>
          <Header level='3'>{ withTitle }</Header>
          
          <Button 
            handleClick={() => closeModal(refsObj[refName])}
            withIcon='close'
            withStyle='stripped'
            withTitle='Закрыть главное меню'
          />
        </div>
        
        { children }
      </section>
    </dialog>
  )
}
