import Head from 'next/head'

import { Footer } from '@/components/common/'


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
      
      <Footer />
    </>
  )
}
