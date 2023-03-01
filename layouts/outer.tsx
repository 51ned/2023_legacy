import { Footer, Nav } from '@/components/common/'
import { Modal } from '@/components/.'


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
          <Nav />
        </Modal>
      </div>

      <Footer />
    </>
  )
}
