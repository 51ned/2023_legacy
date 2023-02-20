import { Box, TextHeader } from '@/components/.'


interface HeaderProps {}


export function Header({}: HeaderProps) {
  
  return (
    <Box withRole='wrap' withTag='header'>
      <Box withRole='container' withTag='section'>
        <TextHeader level='1'>Text head in header.</TextHeader>
      </Box>
    </Box>
  )
}