import { Box, Button } from '@/components/ui/.'

import style from './navbar.module.css'


export function Navbar() {
  return (
    <Box
      withRole='wrap'
      withStyle={style.wrap}
      withTag='div'
    >
      <Box
        withRole='container'
        withStyle={style.container}
        withTag='div'
      >
        <Button 
          handleClick={() => {}}
          withIcon='burger'
          withStyle='stripped'
        />
      </Box>
    </Box>
  )
}
