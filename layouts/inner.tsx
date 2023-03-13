import Head from 'next/head'

import { Contacts, Header, Main, Navbar, Prices } from '@/components/screens'


interface InnerLayoutProps {
  children: React.ReactNode
}


export function InnerLayout({
  children
}: InnerLayoutProps) {
  
  return (
    <>
      <Head>
        <meta content='' name='description' />
        <title>| ЭКЦ «Вектор»</title>
      </Head>

      <Navbar />

      <Header />

      <Main>
        { children }

        <Prices />

        <Contacts />
      </Main>
    </>
  )
}
