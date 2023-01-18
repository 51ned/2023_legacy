import { Accordion, Button, Head, Tabs, Text } from '@/components/generic'

import style from './temp.module.css'

import { data } from '@/lib/data'


export default function Home() {
  return (
    <>
      <div>
        <header>
          <Head level='1' text='Hello, world!' />
        </header>

        <main>
          <Head level='2' text='Accordion for article' />

          <Accordion
            accContainerTag='article'
            buttonWrapTag='h2'
            contentWrapTag='p'
            data={data}
          />

          <Head level='2' text='Accordion for FAQ' />

          <Accordion
            accWrapTag='dl'
            buttonWrapTag='dt'
            contentWrapTag='dd'
            data={data}
          />

          <Head level='2' text='Basic accordion' />

          <Accordion data={data} />

          <Tabs data={data} />
        </main>
      </div>

      <footer>
        <Text withStyle='smaller'>
          Component, you&#39;re be a footer. Soon.
        </Text>
      </footer>
    </>
  )
}
