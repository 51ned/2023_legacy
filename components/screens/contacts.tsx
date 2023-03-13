import {
  Card,
  CardList,
  CustomLink as Link,
  Text,
  TextHeader as Header,
  Phone 
} from '@/components/.'

import { commonData } from '@/lib/data'

import style from './contacts.module.css'


export function Contacts() {
  return (
    <section>
      <Header level='2' withPadding>Контакты</Header>

      <Text withPadding>Наш офис находится в шаговой доступности от станций метро «Китай-город» и «Чистые пруды». 1.5 км от Садового кольца, стихийная парковка.</Text>

      <CardList>
        <Card>
          <Text withPadding>
            <span>Адрес офиса:</span><br/>
            <span>
              { commonData.address.index },{' '}
              { commonData.address.city },{' '}
              { commonData.address.street },{' '}
              { commonData.address.house },{' '}
              { commonData.address.office }
            </span>
          </Text>

          <Text withPadding>
            <span>Телефон офиса:</span><br/>
            <Phone withStyle='regular' />
          </Text>

          <Text withPadding>
            <span>Электронная почта:</span><br/>
            <Link
              title='Написать в ЭКЦ «Вектор»'
              url={`mailto:mail@${commonData.email}`}
              withSize='regular'
            >
              { commonData.email }
            </Link>
          </Text>
        </Card>
      </CardList>
    </section>
  )
}