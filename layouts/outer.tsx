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
      </div>
      <Modal refName='test'>
        i am the rain
      </Modal>
      <Modal refName='test2'>
        falling down to cover you
      </Modal>
      <Footer />
    </>
  )
}
