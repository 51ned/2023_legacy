import { Footer } from '@/components/common/'
import { Modal, ModalContext } from '@/components/.'


interface OuterLayoutProps {
  children: React.ReactNode
}


export function OuterLayout({
  children
}: OuterLayoutProps) {
  
  return (
    <>
      <div>
        { children }

        <Modal
          controllingID='main-nav-open-button'
          dialogID='main-nav-dialog'
          refName='main_nav'
          withStyle='offcanvas'
          withTitle='Главное меню'
        >
          i am the rain
        </Modal>
      </div>

      <Footer />
    </>
  )
}
