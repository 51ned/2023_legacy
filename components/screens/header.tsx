import { Box, List, Logo, TextHeader as THeader, Text } from '@/components/.'

import style from './header.module.css'


interface HeaderProps {}


export function Header({}: HeaderProps) {
  
  return (
    <Box withRole='wrap' withStyle={style.header} withTag='header'>
      <Box withRole='container' withStyle={style.header_container} withTag='section'>
        <div className={style.content_container}>
          <Logo />

          <THeader level='1'>Транспортно-трасологическая экспертиза</THeader>

          <Text>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</Text>
        </div>

        <div className={style.image_container}></div>
      </Box>
    </Box>
  )
}