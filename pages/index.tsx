import { Accordion, Button, Head, Text } from '@/components/generic'

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
          <article className={style.accordion_wrap}>
            <Head level='2' text='Accordion for article' />

            <Text withStyle='regular'>
              Some text, which explain, what accordion below about.
            </Text>

            <Accordion
              buttonContainer='h2'
              containerTag='article'
              contentTag='p'
              data={data}
            />
          </article>

          <div className={style.accordion_wrap}>
            <Head level='2' text='Accordion for FAQ' />

            <Text withStyle='regular'>
              Some text, which explain, what accordion below about.
            </Text>
            
            <dl>
              <Accordion
                buttonContainer='dt'
                contentTag='dd'
                data={data}
              />
            </dl>
          </div>

          <div className={style.accordion_wrap}>
            <Head level='2' text='Default Accordion' />

            <Text withStyle='regular'>
              Some text, which explain, what accordion below about.
            </Text>
            
            <Accordion contentTag='p' data={data} />
          </div>
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
