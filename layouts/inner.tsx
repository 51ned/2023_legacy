import Head from 'next/head'

import { Box } from '@/components/.'
import { Header, Navbar } from '@/components/common/'


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

      <Box withRole='wrap' withTag='main'>
        <Box withRole='container' withTag='div'>
          { children }
        </Box>
      </Box>
    </>
  )
}
