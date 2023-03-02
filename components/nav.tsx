import { List } from '@/components/.'

import { navData } from '@/lib/data'


export function Nav() {
  const items = navData.items
  
  return (
    <nav>
      <List items={items} withType='unmarked' />
    </nav>
  )
}