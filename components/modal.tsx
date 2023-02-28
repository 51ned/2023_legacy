import { useContext, useEffect, useRef } from 'react'

import { ModalContext } from './'

import style from './modal.module.css'


interface ModalProps {
  children: React.ReactNode,
  refName: string
}


export function Modal({
  children,
  refName
}: ModalProps) {

  const ref = useRef(null)
  const refObj = useContext(ModalContext)

  useEffect(() => {
    refObj[refName] = ref.current
  })
  console.log('fcuck')
  return (
    <dialog
      className={style.off_canvas}
      ref={ref}
    >
      <button onClick={() => refObj[refName].close()}>Close me</button>
      { children }
    </dialog>
  )
}
