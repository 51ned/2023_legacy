import { createContext } from 'react'


const ModalContext = createContext()

function ModalProvider({ children }) {
  const refsObj = {}
  
  const closeModal = (node) => {
    node.close()
    document.body.classList.remove('scroll_locked')
    document.body.removeAttribute('class')
  }

  const openModal = (node) => {
    node.showModal()
    document.body.classList.add('scroll_locked')
  }

  return (
    <ModalContext.Provider value={{closeModal, openModal, refsObj}}>
      { children }
    </ModalContext.Provider>
  )
}


export { ModalContext, ModalProvider }
