import Link from 'next/link'

import { Button } from '@/components/ui/.'

import style from './navbar.module.css'


export function Navbar() {
  return (
    <div className={style.wrap}>
      <Button 
        handleClick={() => {}}
        withStyle='stripped'
      >
        Burger
      </Button>

      <ul></ul>
    </div>
  )
}