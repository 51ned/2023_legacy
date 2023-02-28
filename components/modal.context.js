import { createContext, useState } from 'react'


const ModalContext = createContext()


function ModalProvider({children}) {
  const [isSelected, setSelected] = useState(null)
  
  const closeModal = () => {setSelected(null)}
  const openModal = (props) => {setSelected(props)}

  const isScrollLocked = isSelected === null ? false : true

  return (
    <ModalContext.Provider value={{closeModal, isScrollLocked, isSelected, openModal}}>
      { children }
    </ModalContext.Provider>
  )
}

export {ModalContext, ModalProvider}