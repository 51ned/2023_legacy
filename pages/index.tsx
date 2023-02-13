import {OuterLayout, InnerLayout } from '@/layouts/.'

import { Accordion, CardList, List, Modal, Tabs, } from '@/components/.'
import { Card, Text, TextHeader } from '@/components/ui/.'

import { data, tabData } from '@/lib/data'
import { articleData } from '@/lib/article-data'


export default function Home() {
  const listData = {
    title: 'List title',
    items: ['First list item', 'Second list item', 'Third list item']
  }

  return (
    <OuterLayout>
      <InnerLayout>
        <Tabs data={articleData} />
        
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
            <TextHeader level='2' withPadding>
              Accordion for article
            </TextHeader>

            <Accordion
              accContainerTag='article'
              buttonWrapTag='h2'
              cardWrapTag='p'
              data={data}
            />
          </Card>

          <Card>
            <TextHeader level='2' withPadding>
              Accordion for FAQ
            </TextHeader>
            
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
