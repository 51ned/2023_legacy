import { useEffect, useRef } from 'react'

import style from './modal.module.css'


interface ModalProps {
  children: React.ReactNode,
  refName: string
}


export function Modal({
  children,
  refName
}: ModalProps) {

  let obj: {[key: string]: null} = {}

  const ref = useRef(null)

  useEffect(() => {
    obj[refName] = ref.current
    console.log(obj)
  })

  return (
    <dialog
      className={style.off_canvas}
      ref={ref}
    >
      { children }
    </dialog>
  )
}
