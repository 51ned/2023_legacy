import Head from 'next/head'

import { Footer, Navbar } from '@/components/common/.'

import style from './global.module.css'


interface GlobalLayoutProps {
  children: React.ReactNode
}


export function Global({
  children
}: GlobalLayoutProps) {

  return (
    <>
      <Head>
        <meta name='description' content='' />
        <title></title>
      </Head>

      <div className={style.layout}>
        <Navbar />

        { children }

        <Footer />
      </div>
    </>
  )
}
