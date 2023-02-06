import { Button, Division } from '@/components/ui/.'

import style from './navbar.module.css'


export function Navbar() {
  return (
    <Division withRole='wrap' withStyle='navbar' withTag='div'>
      <Division withRole='container' withTag='div'>
        <Button 
          handleClick={() => {}}
          withIcon='burger'
          withStyle='stripped'
        />

        <ul></ul>
      </Division>
    </Division>
  )
}