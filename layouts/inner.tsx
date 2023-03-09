import Head from 'next/head'

import { Box } from '@/components/.'
import { Header, Navbar } from '@/components/screens'


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
        <link rel='preload' href='fonts/montserrat-regular.woff2' as='font' type='font/woff2' crossOrigin='' />
        <link rel='preload' href='fonts/montserrat-bold.woff2' as='font' type='font/woff2' crossOrigin='' />
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
