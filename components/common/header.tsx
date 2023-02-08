import { Box, TextHead } from '@/components/ui/.'


interface HeaderProps {}


export function Header({}: HeaderProps) {
  
  return (
    <Box withRole='wrap' withTag='header'>
      <Box withRole='container' withTag='section'>
        <TextHead level='1'>Text head in header.</TextHead>
      </Box>
    </Box>
  )
}