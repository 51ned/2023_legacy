import { Accordion, List, Modal, Tabs, } from '@/components/.'
import { Text, TextHead } from '@/components/common/.'

import { data, tabData } from '@/lib/data'


export default function Home() {
  const listData = {
    title: 'List title',
    items: ['First list item', 'Second list item', 'Third list item']
  }

  return (
    <>
      <div>
        <header>
          <TextHead level='1'>
            Hello, world
          </TextHead>
        </header>
        
        <main>
          <Tabs data={tabData} />

          <List
            items={listData.items}
            withTitle={listData.title}
            withType='unordered'
          />

          <List
            items={listData.items}
            withTitle={listData.title}
            withType='ordered'
          />

          <List
            items={listData.items}
            withTitle={listData.title}
            withType='unmarked'
          />
          
          {/* <TextHead level='2'>
            Accordion for article
          </TextHead>

          <Accordion
            accContainerTag='article'
            buttonWrapTag='h2'
            contentWrapTag='p'
            data={data}
          />

          <TextHead level='2'>
            Accordion for FAQ
          </TextHead>

          <Accordion
            accWrapTag='dl'
            buttonWrapTag='dt'
            contentWrapTag='dd'
            data={data}
          />

          <TextHead level='2'>
            Basic accordion
          </TextHead>

          <Accordion buttonWrapTag='div' data={data} /> */}
          {/* <Modal modalHeadText='i am the modal'>
            blah-blah
          </Modal> */}
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
