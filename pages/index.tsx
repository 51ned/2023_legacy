import { Accordion, Button, Modal, Tabs, Text, TextHead } from '@/components/.'

import { data } from '@/lib/data'


export default function Home() {
  return (
    <>
      <div>
        <header>
          <TextHead level='1' text='Hello, world!' />
        </header>

        <main>
          <TextHead level='2' text='Accordion for article' />

          <Accordion
            accContainerTag='article'
            buttonWrapTag='h2'
            contentWrapTag='p'
            data={data}
          />

          <TextHead level='2' text='Accordion for FAQ' />

          <Accordion
            accWrapTag='dl'
            buttonWrapTag='dt'
            contentWrapTag='dd'
            data={data}
          />

          <TextHead level='2' text='Basic accordion' />

          <Accordion buttonWrapTag='div' data={data} />

          <Tabs data={data} />

          <Button
            buttonID=''
            controlledID=''
            handleClick={() => {}}
          >
            Regular button
          </Button>

          <Modal modalHeadText='i am the modal'>
            blah-blah
          </Modal>
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
