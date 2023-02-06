import Head from 'next/head'

import { Footer, Header, Navbar } from '@/components/common/.'
import { Division } from '@/components/ui/.'


interface OuterLayoutProps {
  children: React.ReactNode
}


export function OuterLayout({
  children
}: OuterLayoutProps) {

  return (
    <>
      <Head>
        <meta content='' name='description' />
        <title></title>
      </Head>

      <>
        <Navbar />

        <Header />

        { children }

        <Footer />
      </>
    </>
  )
}
