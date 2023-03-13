import { Box } from '@/components/.'

import style from './main.module.css'


interface MainProps { children: React.ReactNode }


export function Main({ children }: MainProps) {
  return (
    <Box withRole='wrap' withTag='main'>
      <Box withRole='container' withStyle={style.container} withTag='div'>
        { children }
      </Box>
    </Box>
  )
}