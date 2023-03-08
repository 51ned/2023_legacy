import React, { createContext } from 'react'

import style from './modal.module.css'


interface ModalContextProps {
  closeModal: (node: HTMLDialogElement) => void,
  openModal: (node: HTMLDialogElement) => void,
  refsObj: {[key: string]: HTMLDialogElement}
}


const ModalContext = createContext({} as ModalContextProps)


function ModalProvider({ children }: any) {
  const refsObj = {}

  const openModal = (node: HTMLDialogElement) => {
    node.showModal()
    node.classList.remove(`${style.close}`)

    const documentWidth = document.documentElement.clientWidth
    const windowWidth = window.innerWidth
    const scrollbarWidth = windowWidth - documentWidth
    
    document.body.setAttribute('style', `overflow:hidden; margin-right:${scrollbarWidth}px;`)
  }

  const closeModal = (node: HTMLDialogElement) => {
    node.close()
    node.classList.add(`${style.close}`)

    document.body.removeAttribute('style')
  }

  return (
    <ModalContext.Provider value={{closeModal, openModal, refsObj}}>
      { children }
    </ModalContext.Provider>
  )
}


export { ModalContext, ModalProvider }
