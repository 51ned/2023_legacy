import { Box, Button } from '@/components/ui/.'

import style from './navbar.module.css'


export function Navbar() {
  return (
    <Box withRole='wrap' withStyle='navbar' withTag='div'>
      <Box withRole='container' withTag='div'>
        <Button 
          handleClick={() => {}}
          withIcon='burger'
          withStyle='stripped'
        />

        <ul></ul>
      </Box>
    </Box>
  )
}