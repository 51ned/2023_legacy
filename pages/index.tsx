import {OuterLayout, InnerLayout } from '@/layouts/.'

import { Card, CardList, List, Tabs, Text } from '@/components/.'


export default function Home() {
  const listOfStrings = ['String item # 1', 'String item # 2', 'String item # 3']
  const listOfLinks = [
    {
      children: 'List link item # 1',
      href: '#',
      title: 'List link title # 1'
    },
    {
      children: 'List link item # 2',
      href: '#',
      title: 'List link title # 2'
    },
    {
      children: 'List link item # 3',
      href: '#',
      title: 'List link title # 3'
    }
  ]
  const tabsData = [
    {
      buttonID: 'test-button-id-1',
      buttonText: 'Test Button Text # 1',
      buttonTitle: 'test-button-title-1',
      cardData: {
        header: 'Card Test Header # 1',
        text: [
          {
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            list: {
              items: [
                'List in card item # 1',
                'List in card item # 2',
                'List in card item # 3'
              ],
              withType: 'unordered'
            }
          },
          {
            paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      },
      cardID: 'test-card-id-1'
    },
    {
      buttonID: 'test-button-id-2',
      buttonText: 'Test Button Text # 2',
      buttonTitle: 'test-button-title-2',
      cardData: {
        text: [
          {
            list: {
              items: [
                'List in card # 2 item',
                'List in card # 2 item',
                'List in card # 2 item'
              ],
              withType: 'ordered'
            }
          },
          {
            paragraph: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
          },
          {
            paragraph: 'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.'
          }
        ]
      },
      cardID: 'test-card-id-2'
    },
    {
      buttonID: 'test-button-id-3',
      buttonText: 'Test Button Text # 3',
      buttonTitle: 'test-button-title-3',
      cardData: {
        header: 'Card Test Header # 3',
        text: [
          {
            paragraph: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?'
          },
          {
            paragraph: 'At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
          }
        ],
        link: {
          href: '#',
          title: 'test-link-in-card-title',
          children: 'I am the rain'
        }
      },
      cardID: 'test-card-id-3'
    }
  ]


  return (
    <OuterLayout>
      <InnerLayout>
        <Tabs data={tabsData} />
      </InnerLayout>
    </OuterLayout>
  )
}
