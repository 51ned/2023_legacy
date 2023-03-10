import { useEffect } from 'react'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useRouter } from 'next/router'

import { ModalProvider } from '@/components/modal'

import { GTM_ID, pageview } from '@/lib/gtm'

import '@/public/styles/index.css'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <ModalProvider>
      <Component {...pageProps} />

      <Script
        id='gtag-base'
        strategy='lazyOnload'
      >
        { `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');` }
      </Script>
    </ModalProvider>
  )
}
