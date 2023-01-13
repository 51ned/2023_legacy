import { Accordion, Head, Text } from '@/components/generic'

import { data } from '@/lib/data'


export default function Home() {
  return (
    <>
      <div>
        <header>
          <Head level='1' text='Hello, world!' />
        </header>

        <main>
          <Text withStyle='regular'>
            This is webpage for testing my components.
          </Text>

          <Accordion data={data} />
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
