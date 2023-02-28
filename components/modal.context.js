import { createContext } from 'react'


const ModalContext = createContext()


function ModalProvider({children}) {
  const refsObj = {}
  
  return (
    <ModalContext.Provider value={{refsObj}}>
      { children }
    </ModalContext.Provider>
  )
}

export {ModalContext, ModalProvider}