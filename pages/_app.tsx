import type { AppProps } from 'next/app'

import '@/public/styles/index.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
