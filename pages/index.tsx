import {OuterLayout, InnerLayout } from '@/layouts/.'

import { Accordion, CardList, List, Modal, Tabs, } from '@/components/.'
import { Card, Text, TextHead } from '@/components/ui/.'

import { data, tabData } from '@/lib/data'


export default function Home() {
  const listData = {
    title: 'List title',
    items: ['First list item', 'Second list item', 'Third list item']
  }

  return (
    <OuterLayout>
      <InnerLayout>
        <Tabs data={tabData} />
        
        <CardList>
          <Card>
            <List
              items={listData.items}
              withTitle={listData.title}
              withType='unordered'
            />
          </Card>

          <Card>
            <List
              items={listData.items}
              withTitle={listData.title}
              withType='ordered'
            />
          </Card>

          <Card>
            <List
              items={listData.items}
              withTitle={listData.title}
              withType='unmarked'
            />
          </Card>
        </CardList>

        <CardList>
          <Card>
            <TextHead level='2'>
              Accordion for article
            </TextHead>

            <Accordion
              accContainerTag='article'
              buttonWrapTag='h2'
              cardWrapTag='p'
              data={data}
            />
          </Card>

          <Card>
            <TextHead level='2'>
              Accordion for FAQ
            </TextHead>
            
            <Accordion
              accWrapTag='dl'
              buttonWrapTag='dt'
              cardWrapTag='dd'
              data={data}
            />
          </Card>
        </CardList>
      </InnerLayout>
    </OuterLayout>
  )
}
